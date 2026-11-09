import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import {
  applyPbrSpec, convertsToStandard, DEFAULT_ROUGHNESS, disablePbrBakedAo, enablePbrBakedAo, injectPbrAo, isPbrAoSurface, preparePbrMaterial, roughnessFromShininess, standardFrom,
} from '../../character/pbr-material.ts'
import { aoReceivers, disableSurfaceAo, enableSurfaceAo, isAoSurface } from '../../character/ao-bake.ts'
import { createBakedAoUniforms, createToonMaterial } from '../../character/toon-material.ts'
import { createPrevFrameState, enableVelocity } from '../../character/taa-velocity.ts'
import { convertMToonToStandard } from '../../character/rig-vrm.ts'

test('Phong 반짝임은 거칠기 (2/(n+2))^¼로 바뀌고, 값이 없으면 기본 거칠기다', () => {
  assert.equal(roughnessFromShininess(undefined), DEFAULT_ROUGHNESS)
  assert.equal(roughnessFromShininess(30), 0.5)
  assert.equal(roughnessFromShininess(0), 1)
  assert.equal(roughnessFromShininess(1e9), 0.04)
})

test('물리 재질로 바꿀 때 바탕색·텍스처·발광·투명 처리·양면·보임을 옮기고 금속성은 0이다', () => {
  const map = new THREE.Texture(), normalMap = new THREE.Texture()
  const phong = new THREE.MeshPhongMaterial({ name: 'skin', color: 0xff8800, map, normalMap, emissive: 0x112233, shininess: 30, transparent: true, opacity: 0.5, alphaTest: 0.2, side: THREE.DoubleSide })
  phong.visible = false
  const standard = standardFrom(phong)
  assert.ok(standard.isMeshStandardMaterial)
  assert.equal(standard.name, 'skin')
  assert.ok(standard.color.equals(phong.color) && standard.color !== phong.color, '색은 복사본')
  assert.equal(standard.map, map); assert.equal(standard.normalMap, normalMap)
  assert.ok(standard.emissive.equals(phong.emissive))
  assert.equal(standard.roughness, 0.5); assert.equal(standard.metalness, 0)
  assert.equal(standard.transparent, true); assert.equal(standard.opacity, 0.5); assert.equal(standard.alphaTest, 0.2)
  assert.equal(standard.side, THREE.DoubleSide); assert.equal(standard.visible, false)
  assert.equal(standardFrom(new THREE.MeshBasicMaterial()).roughness, DEFAULT_ROUGHNESS, 'unlit은 기본 거칠기')
})

test('구운 AO 끼워 넣기: 정점 속성은 begin_vertex 뒤, 간접광 곱은 aomap_fragment 뒤, 확인용 회색은 opaque_fragment 뒤', () => {
  const shader = { vertexShader: THREE.ShaderLib.physical.vertexShader, fragmentShader: THREE.ShaderLib.physical.fragmentShader }
  injectPbrAo(shader)
  const v = shader.vertexShader, f = shader.fragmentShader
  assert.ok(v.indexOf('attribute float bakedAo') < v.indexOf('void main()'))
  assert.ok(v.indexOf('vBakedAo = bakedAo') > v.indexOf('#include <begin_vertex>'))
  assert.ok(f.indexOf('uniform float aoStrength') < f.indexOf('void main()'))
  assert.ok(f.indexOf('reflectedLight.indirectDiffuse *= dscBakedAo') > f.indexOf('#include <aomap_fragment>'))
  assert.ok(f.indexOf('reflectedLight.indirectDiffuse *= dscBakedAo') < f.indexOf('#include <opaque_fragment>'))
  assert.ok(f.indexOf('DSC_BAKED_AO_DEBUG') > f.indexOf('#include <opaque_fragment>'))
  assert.throws(() => injectPbrAo({ vertexShader: 'void main() {}', fragmentShader: 'void main() {}' }), /begin_vertex/)
})

test('준비한 물리 재질만 AO를 받고, 켜면 define·uniform이 붙고 끄면 define만 빠진다', () => {
  const material = new THREE.MeshStandardMaterial()
  assert.equal(isPbrAoSurface(material), false, '준비 전')
  preparePbrMaterial(material)
  assert.equal(isPbrAoSurface(material), true)
  assert.equal(material.customProgramCacheKey(), 'dsc-pbr')
  const compile = () => { const shader = { uniforms: {}, vertexShader: THREE.ShaderLib.physical.vertexShader, fragmentShader: THREE.ShaderLib.physical.fragmentShader }; material.onBeforeCompile(shader); return shader }
  assert.equal(compile().uniforms.aoStrength.value, 0, '켜기 전에는 0 (define이 없어 쓰지 않음)')
  const uniforms = createBakedAoUniforms(0.6, 0.3), version = material.version
  enablePbrBakedAo(material, uniforms, true)
  assert.ok('DSC_BAKED_AO' in material.defines && 'DSC_BAKED_AO_DEBUG' in material.defines)
  assert.ok(material.version > version, '다시 컴파일')
  assert.equal(compile().uniforms.aoStrength, uniforms.aoStrength, '같은 uniform 객체 (매 프레임 세기 갱신)')
  disablePbrBakedAo(material)
  assert.deepEqual(material.defines, { STANDARD: '' }, '켜기 전(three.js 기본)과 같은 define')
  const transparent = new THREE.MeshStandardMaterial({ transparent: true })
  preparePbrMaterial(transparent)
  assert.equal(isPbrAoSurface(transparent), false, '투명 재질은 받지 않음')
})

test('AO 켜고 끄기는 재질 종류에 맞게 나뉘고, 준비한 물리 재질 메시도 받는 메시가 된다', () => {
  const toon = createToonMaterial({}), standard = new THREE.MeshStandardMaterial(), plain = new THREE.MeshStandardMaterial()
  preparePbrMaterial(standard)
  const uniforms = createBakedAoUniforms(1, 0)
  enableSurfaceAo(toon, uniforms); enableSurfaceAo(standard, uniforms)
  assert.ok('TOON_BAKED_AO' in toon.defines); assert.ok('DSC_BAKED_AO' in standard.defines)
  disableSurfaceAo(toon); disableSurfaceAo(standard)
  assert.ok(!('TOON_BAKED_AO' in toon.defines)); assert.ok(!('DSC_BAKED_AO' in standard.defines))
  assert.equal(isAoSurface(plain), false, '준비하지 않은 물리 재질은 아님')
  const root = new THREE.Group(), geometry = new THREE.BoxGeometry()
  root.add(new THREE.Mesh(geometry, standard), new THREE.Mesh(new THREE.BoxGeometry(), plain))
  assert.deepEqual(aoReceivers(root).map((mesh) => mesh.material), [standard])
})

test('TAA 속도 출력은 재질에 걸린 구운 AO 끼워 넣기를 먼저 하고 자기 것을 더하며, 프로그램 키도 둘을 합친다', () => {
  const material = new THREE.MeshStandardMaterial()
  preparePbrMaterial(material)
  enablePbrBakedAo(material, createBakedAoUniforms(1, 0))
  const frame = { viewProjection: { value: new THREE.Matrix4() }, prevViewProjection: { value: new THREE.Matrix4() } }
  enableVelocity(material, frame, createPrevFrameState())
  const shader = { uniforms: {}, vertexShader: THREE.ShaderLib.physical.vertexShader, fragmentShader: THREE.ShaderLib.physical.fragmentShader }
  material.onBeforeCompile(shader)
  assert.ok(shader.fragmentShader.includes('dscBakedAo') && shader.fragmentShader.includes('TAA_VELOCITY'))
  assert.ok(shader.uniforms.aoStrength && shader.uniforms.taaViewProjection)
  assert.match(material.customProgramCacheKey(), /^dsc-pbr\ntaa-velocity\n/)
  const toon = createToonMaterial({})
  enableVelocity(toon, frame, createPrevFrameState())
  assert.match(toon.customProgramCacheKey(), /^taa-velocity\n/, '끼워 넣기가 없던 재질은 예전과 같은 키')
})

test('VRM 실사 셰이딩: MToon은 같은 색 객체를 쓰는 물리 재질이 되고, MToon 외곽선은 숨긴다', () => {
  let disposed = 0
  const mtoon = (isOutline) => Object.assign(new THREE.Material(), {
    name: 'Face', color: new THREE.Color(0.9, 0.8, 0.7), emissive: new THREE.Color(0, 0, 0), map: new THREE.Texture(), isOutline, isMToonMaterial: true,
    dispose() { disposed++ },
  })
  const source = mtoon(false), standard = convertMToonToStandard(source)
  assert.ok(standard.isMeshStandardMaterial)
  assert.equal(standard.color, source.color, '표정의 재질 색 바인드가 그대로 걸림')
  assert.equal(standard.emissive, source.emissive)
  assert.equal(standard.map, source.map)
  assert.equal(standard.visible, true)
  assert.equal(convertMToonToStandard(mtoon(true)).visible, false)
  assert.equal(disposed, 2)
})

test('실사 셰이딩은 Phong·Lambert를 늘, unlit은 pbr.unlit = lit일 때만 물리 재질로 바꾸고 나머지는 그대로 둔다', () => {
  assert.equal(convertsToStandard(new THREE.MeshPhongMaterial()), true)
  assert.equal(convertsToStandard(new THREE.MeshLambertMaterial()), true)
  assert.equal(convertsToStandard(new THREE.MeshBasicMaterial()), false, 'unlit 기본은 그대로 (glTF 명세)')
  assert.equal(convertsToStandard(new THREE.MeshBasicMaterial(), 'keep'), false)
  assert.equal(convertsToStandard(new THREE.MeshBasicMaterial(), 'lit'), true)
  assert.equal(convertsToStandard(new THREE.MeshStandardMaterial(), 'lit'), false, '이미 물리 재질')
  assert.equal(convertsToStandard(createToonMaterial({})), false, '모르는 셰이더 재질은 건드리지 않음')
})

test('avatar.json 재질 설정은 맵·AO 맵·투명 처리·알파 테스트·양면만 실사 재질에 옮기고, AO 맵은 물리 재질에만 건다', () => {
  const files = new Map([['base.png', new THREE.Texture()], ['ao.png', new THREE.Texture()]])
  const texture = (file) => files.get(file)
  const standard = new THREE.MeshStandardMaterial()
  applyPbrSpec(standard, { map: 'base.png', ao: 'ao.png', aoScale: 0.4, transparent: true, alphaTest: 0.5, doubleSided: true, shadingShift: 0.3 }, texture)
  assert.equal(standard.map, files.get('base.png')); assert.equal(standard.aoMap, files.get('ao.png')); assert.equal(standard.aoMapIntensity, 0.4)
  assert.equal(standard.transparent, true); assert.equal(standard.alphaTest, 0.5); assert.equal(standard.side, THREE.DoubleSide)
  const basic = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide })
  applyPbrSpec(basic, { ao: 'ao.png', doubleSided: false, map: 'missing.png' }, texture)
  assert.equal(basic.aoMap, null, 'unlit에는 AO 맵을 걸지 않음'); assert.equal(basic.side, THREE.FrontSide); assert.equal(basic.map, null, '없는 파일은 그대로')
  const untouched = new THREE.MeshStandardMaterial({ alphaTest: 0.1 })
  applyPbrSpec(untouched, undefined, texture)
  assert.equal(untouched.alphaTest, 0.1)
})