import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import {
  asRampTexture, createFaceSdfUniforms, createOutlineMaterial, createToonMaterial, DEFAULT_SHADE, DEFAULT_SHADOW, highColorUniforms, isToonMaterial, mapOf, toonDefines,
} from '../../character/toon-material.ts'

// 자체 툰 재질(FBX·glTF): 설정 → uniform·define 대응 (VRM은 three-vrm MToonMaterial)

const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} ≠ ${expected}`)

test('HighColor 지수는 2^(11-10×power), 툰 경계는 1-power⁵이고 툰이 아니면 -1이다', () => {
  close(highColorUniforms({ color: '#ffffff', power: 1 }).highColorExponent.value, 2)
  close(highColorUniforms({ color: '#ffffff', power: 0.5 }).highColorExponent.value, 64)
  close(highColorUniforms({ color: '#ffffff' }).highColorExponent.value, Math.pow(2, 4))   // 기본 power 0.7
  close(highColorUniforms({ color: '#ffffff', power: 0.8, toon: true }).highColorToonEdge.value, 1 - Math.pow(0.8, 5))
  assert.equal(highColorUniforms({ color: '#ffffff', power: 0.8 }).highColorToonEdge.value, -1)
  const defaults = highColorUniforms({ color: '#ffffff' })
  assert.equal(defaults.highColorOnShadow.value, 0.5)
  assert.equal(defaults.highColorStrength.value, 1)
  assert.equal(defaults.highColorMask.value, null)
})

test('기능 define은 켠 기능만 들어가고, 램프 줄을 그림자 맵에서 고르는 기능은 그림자 맵이 있을 때만이다', () => {
  assert.deepEqual(toonDefines({}), {})
  const map = new THREE.Texture()
  assert.deepEqual(Object.keys(toonDefines({ map, shadeMap: map, occlusionMap: map, lightMap: map })).sort(), ['TOON_LIGHT_MAP', 'TOON_MAP', 'TOON_OCCLUSION_MAP', 'TOON_SHADE_MAP'])
  assert.deepEqual(Object.keys(toonDefines({ ramp: { map } })), ['TOON_RAMP'])
  assert.deepEqual(Object.keys(toonDefines({ ramp: { map, row: 'lightMap' } })), ['TOON_RAMP'], '그림자 맵이 없으면 고정 줄')
  assert.deepEqual(Object.keys(toonDefines({ ramp: { map, row: 'lightMap' }, lightMap: map })).sort(), ['TOON_LIGHT_MAP', 'TOON_RAMP', 'TOON_RAMP_ROW_LIGHT_MAP'])
  assert.deepEqual(Object.keys(toonDefines({ rim: { color: '#fff' } })), ['TOON_RIM'])
  const screen = { uniforms: { rimDepth: { value: null }, rimResolution: { value: new THREE.Vector2() }, rimDepthThreshold: { value: 0 } }, offset: 0.01 }
  assert.deepEqual(Object.keys(toonDefines({ rim: { color: '#fff', screen } })).sort(), ['TOON_RIM', 'TOON_RIM_SCREEN'])
  assert.ok('TOON_FACE_SDF' in toonDefines({ faceSdf: createFaceSdfUniforms(map) }))
  assert.deepEqual(Object.keys(toonDefines({ highColor: { color: '#fff', mask: map } })).sort(), ['TOON_HIGHCOLOR', 'TOON_HIGHCOLOR_MASK'])
  assert.deepEqual(Object.keys(toonDefines({}, {})), ['OUTLINE'])
  assert.deepEqual(Object.keys(toonDefines({}, { widthAttribute: true })).sort(), ['OUTLINE', 'OUTLINE_WIDTH_ATTRIBUTE'])
})

test('기능 묶음이 다르면 셰이더 프로그램 키(define)가 다르고 같으면 같다', () => {
  const sdf = createFaceSdfUniforms(null), ramp = { map: new THREE.Texture() }
  const keyOf = (material) => JSON.stringify(material.defines)
  const keys = [
    createToonMaterial({}), createToonMaterial({ faceSdf: sdf }), createToonMaterial({ highColor: { color: '#fff' } }), createToonMaterial({ ramp }),
    createToonMaterial({ rim: { color: '#fff' } }), createOutlineMaterial({ width: 1 }), createOutlineMaterial({ width: 1, widthAttribute: true }),
  ].map(keyOf)
  assert.equal(new Set(keys).size, keys.length)
  assert.equal(keyOf(createToonMaterial({ faceSdf: sdf })), keyOf(createToonMaterial({ faceSdf: createFaceSdfUniforms(null) })))
})

test('기본값: 흰 바탕·기본 그늘 색·half-Lambert 문턱값 0.525·반폭 0.025, 켜지 않은 기능의 uniform은 없다', () => {
  const material = createToonMaterial()
  const u = material.uniforms
  assert.ok(material.isShaderMaterial && material.lights && material.clipping)
  assert.ok(isToonMaterial(material))
  assert.deepEqual(u.diffuse.value.toArray(), [1, 1, 1])
  assert.ok(u.shadeColor.value.equals(DEFAULT_SHADE))
  assert.equal(u.shadowThreshold.value, DEFAULT_SHADOW.threshold)
  assert.equal(u.shadowSoftness.value, DEFAULT_SHADOW.softness)
  assert.equal(createToonMaterial({ shadowSoftness: 0 }).uniforms.shadowSoftness.value, 1e-4, '0이면 딱 끊되 0으로 나누지 않게')
  for (const name of ['rimColor', 'rampMap', 'lightMap', 'occlusionMap', 'normalMap', 'emissive', 'mapUvTransform']) assert.ok(!(name in u), name)
  assert.ok('directionalLights' in u && 'ambientLightColor' in u)
  assert.equal(material.side, THREE.FrontSide)
  assert.equal(material.transparent, false)
  assert.equal(isToonMaterial(new THREE.ShaderMaterial()), false, '다른 셰이더 재질(MToon 등)은 아님')
})

test('림·램프·그림자 맵·AO 맵 uniform은 줄 때만 생기고 기본값이 있다', () => {
  const rim = createToonMaterial({ rim: { color: '#ff0000' } }).uniforms
  assert.deepEqual(rim.rimColor.value.toArray(), [1, 0, 0])
  assert.equal(rim.rimWidth.value, 0.2); assert.equal(rim.rimSoftness.value, 0.1); assert.equal(rim.rimLightMask.value, 1); assert.equal(rim.rimLightingMix.value, 1)
  const map = new THREE.Texture()
  const ramp = createToonMaterial({ ramp: { map, rows: 4, row: 2 } }).uniforms
  assert.equal(ramp.rampMap.value, map); assert.equal(ramp.rampRows.value, 4); assert.equal(ramp.rampRow.value, 2)
  const byLightMap = createToonMaterial({ ramp: { map, rows: 0, row: 'lightMap' }, lightMap: map }).uniforms
  assert.equal(byLightMap.rampRows.value, 1, '줄 수는 1 이상'); assert.equal(byLightMap.rampRow.value, 0)
  assert.equal(byLightMap.lightMapStrength.value, 1)
  assert.equal(createToonMaterial({ occlusionMap: map }).uniforms.occlusionStrength.value, 0.5)
})

test('램프 텍스처는 줄끼리 섞이지 않게 가장자리 고정·밉맵 없음으로 바꾼다', () => {
  const texture = new THREE.Texture()
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  assert.equal(asRampTexture(texture), texture)
  assert.equal(texture.wrapS, THREE.ClampToEdgeWrapping); assert.equal(texture.wrapT, THREE.ClampToEdgeWrapping)
  assert.equal(texture.generateMipmaps, false); assert.equal(texture.minFilter, THREE.LinearFilter)
})

test('텍스처는 복제하지 않고, 얼굴 SDF uniform은 재질끼리 같은 객체를 쓴다', () => {
  const map = new THREE.Texture(), sdf = createFaceSdfUniforms(map, 0.05)
  const a = createToonMaterial({ map, faceSdf: sdf }), b = createToonMaterial({ faceSdf: sdf })
  assert.equal(a.uniforms.map.value, map)
  assert.equal(mapOf(a), map)
  assert.equal(a.uniforms.faceSdfThreshold, b.uniforms.faceSdfThreshold)
  sdf.faceSdfThreshold.value = 0.25
  assert.equal(b.uniforms.faceSdfThreshold.value, 0.25)
  assert.equal(sdf.faceSdfSoft.value, 0.05)
  assert.equal(createFaceSdfUniforms(null).faceSdfSoft.value, 0.02)
})

test('알파 테스트는 재질 값과 uniform이 같고, 외곽선은 뒷면·두께·색·조명 영향을 갖는다', () => {
  const map = new THREE.Texture()
  const outline = createOutlineMaterial({ width: 0.002, outlineColor: '#000000', lightingMix: 0.3, map, alphaTest: 0.5 })
  assert.equal(outline.side, THREE.BackSide)
  assert.equal(outline.alphaTest, 0.5)
  assert.equal(outline.uniforms.alphaTest.value, 0.5)
  assert.equal(outline.uniforms.outlineWidthFactor.value, 0.002)
  assert.equal(outline.uniforms.outlineLightingMix.value, 0.3)
  assert.equal(mapOf(outline), map)
  assert.equal(createOutlineMaterial({ width: 1 }).uniforms.outlineLightingMix.value, 1)
  // three.js 기본 재질(모델 원래 재질)의 map도 읽는다
  assert.equal(mapOf(new THREE.MeshPhongMaterial({ map })), map)
  assert.equal(mapOf(new THREE.MeshPhongMaterial()), null)
})

test('화면 공간 림은 TAA 깊이·버퍼 크기·깊이 문턱값 uniform을 재질끼리 같은 객체로 쓰고, 옆을 읽을 거리는 재질마다 갖는다', () => {
  const depth = new THREE.Texture()
  const uniforms = { rimDepth: { value: depth }, rimResolution: { value: new THREE.Vector2(900, 900) }, rimDepthThreshold: { value: 0.0002 } }
  const a = createToonMaterial({ rim: { color: '#fff', screen: { uniforms, offset: 0.01 } } }), b = createToonMaterial({ rim: { color: '#fff', screen: { uniforms, offset: 0.02 } } })
  assert.equal(a.uniforms.rimDepth, uniforms.rimDepth); assert.equal(b.uniforms.rimDepth, uniforms.rimDepth)
  assert.equal(a.uniforms.rimResolution, b.uniforms.rimResolution); assert.equal(a.uniforms.rimDepthThreshold, b.uniforms.rimDepthThreshold)
  assert.equal(a.uniforms.rimOffset.value, 0.01); assert.equal(b.uniforms.rimOffset.value, 0.02)
  uniforms.rimDepthThreshold.value = 0.0005
  assert.equal(b.uniforms.rimDepthThreshold.value, 0.0005, '카메라를 정한 뒤 문턱값을 채우면 모든 재질에 반영')
  assert.ok(!('rimDepth' in createToonMaterial({ rim: { color: '#fff' } }).uniforms), '프레넬 림은 깊이를 읽지 않음')
  assert.match(a.fragmentShader, /rimSelfGap/, '지난 프레임 이 자리 깊이가 지금과 다르면(깊이 없음·크기 변경 직후) 림을 끔')
})