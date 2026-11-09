import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { toonOptionsFromSurface, toonOptionsOf, toonRimOptions, toonShadowOptions } from '../../character/toon-spec.ts'
import { createToonMaterial, DEFAULT_SHADE, toonDefines } from '../../character/toon-material.ts'

// avatar.json·glTF 재질 → 자체 툰 재질 설정. 예전 키(N·L 기준)는 같은 경계가 되게 읽는다

const close = (actual, expected, message) => assert.ok(Math.abs(actual - expected) < 1e-9, `${message ?? ''} ${actual} ≠ ${expected}`)
const named = (loaded = []) => (file, linear = false) => { if (!file) return undefined; loaded.push([file, linear]); const t = new THREE.Texture(); t.name = file; return t }
const none = () => undefined

// 예전 셰이더의 밝은 쪽 비율: linearstep(-1 + toony, 1 - toony, N·L + shift + AO × scale)
const oldLit = (dotNL, ao, { shift = -0.05, toony = 0.95, scale = 0 }) => Math.min(1, Math.max(0, (dotNL + shift + ao * scale - (-1 + toony)) / (2 * (1 - toony))))
// 지금 셰이더: half-Lambert − (1 − AO) × 세기를 문턱값 ± 반폭으로 자름 (경계 가운데·폭만 비교)
const newCenterAndWidth = (o) => ({ center: o.shadowThreshold, width: 2 * o.shadowSoftness })

test('예전 키(shadingShift·shadingToony·ao·aoScale)는 같은 경계 가운데·폭이 되게 바뀐다', () => {
  const spec = { ao: 'ao.png', aoScale: 1.8, shadingShift: -1.85, shadingToony: 0.9 }
  const o = toonShadowOptions(spec, named())
  close(o.occlusionStrength, 0.9)
  close(o.shadowThreshold, 0.5 + 1.85 / 2 - 0.9)
  close(o.shadowSoftness, 0.05)
  // 텍셀 AO 값마다 예전 경계(밝은 쪽 비율 0.5인 N·L)와 지금 경계(보정한 half-Lambert = 문턱값인 N·L)가 같음
  for (const ao of [0, 0.3, 1]) {
    const dotNLOld = -(spec.shadingShift + ao * spec.aoScale)   // oldLit = 0.5
    close(oldLit(dotNLOld, ao, { shift: spec.shadingShift, toony: 0.9, scale: spec.aoScale }), 0.5)
    const { center, width } = newCenterAndWidth(o)
    const dotNLNew = 2 * (center + (1 - ao) * o.occlusionStrength) - 1
    close(dotNLNew, dotNLOld, `AO ${ao}`)
    close(width * 2, 2 * (1 - 0.9), 'N·L 폭')   // half-Lambert 폭 × 2 = N·L 폭
  }
  const plain = toonShadowOptions({}, none)
  close(plain.shadowThreshold, 0.525); close(plain.shadowSoftness, 0.025)
  assert.equal(plain.occlusionMap, undefined)
})

test('새 키(문턱값·반폭·램프·그림자 맵)는 그대로 쓰고, 그림자 맵·AO 맵은 수치 맵으로 읽는다', () => {
  const loaded = []
  const o = toonShadowOptions({ shadowThreshold: 0.4, shadowSoftness: 0.1, ramp: { map: 'ramp.png', rows: 5, row: 'lightMap' }, lightMap: 'ilm.png', lightMapStrength: 0.7, ao: 'ao.png' }, named(loaded))
  assert.equal(o.shadowThreshold, 0.4); assert.equal(o.shadowSoftness, 0.1)
  assert.equal(o.ramp.map.name, 'ramp.png'); assert.equal(o.ramp.rows, 5); assert.equal(o.ramp.row, 'lightMap')
  assert.equal(o.ramp.map.wrapS, THREE.ClampToEdgeWrapping, '램프 텍스처로 준비')
  assert.equal(o.lightMap.name, 'ilm.png'); assert.equal(o.lightMapStrength, 0.7)
  assert.deepEqual(loaded.sort(), [['ao.png', true], ['ilm.png', true], ['ramp.png', false]])
})

test('림: width가 없으면 예전 power 곡선이 절반이 되는 곳을 폭으로, 조명 영향 기본 0.5', () => {
  assert.equal(toonRimOptions(undefined), undefined)
  const rim = toonRimOptions({ color: '#3a3550', power: 5, mix: 0.6 })
  close(rim.width, 1 - Math.pow(0.5, 1 / 5)); assert.equal(rim.lightingMix, 0.6)
  close(Math.pow(1 - rim.width, 5), 0.5, '예전 곡선 (1−N·V)^5가 폭 경계(1−N·V = 1 − width)에서 0.5')
  close(toonRimOptions({ color: '#fff' }).width, 1 - Math.pow(0.5, 1 / 4))
  assert.deepEqual(toonRimOptions({ color: '#fff', width: 0.3, softness: 0.05, lightMask: 0 }), { color: '#fff', width: 0.3, softness: 0.05, lightMask: 0, lightingMix: 0.5 })
})

test('FBX avatar.json 재질: 그늘 맵이 있으면 그늘 색 흰색, 없으면 바탕 × 기본 그늘 색', () => {
  const loaded = []
  const options = toonOptionsOf('Hair_M', { map: 'c.png', shade: 's.png', ao: 'ao.png', aoScale: 1.8, shadingShift: -1.85, doubleSided: true,
    highColor: { color: '#d4e9ff', power: 1, mask: 'm.png' } }, named(loaded), toonRimOptions({ color: '#3a3550', power: 5, mix: 0.6 }))
  assert.deepEqual(loaded.sort(), [['ao.png', true], ['c.png', false], ['m.png', true], ['s.png', false]])
  assert.equal(options.name, 'Hair_M')
  assert.equal(options.shadeColor, 0xffffff)
  assert.equal(options.side, THREE.DoubleSide)
  assert.equal(options.highColor.mask.name, 'm.png')
  assert.deepEqual(Object.keys(createToonMaterial(options).defines).sort(), ['TOON_HIGHCOLOR', 'TOON_HIGHCOLOR_MASK', 'TOON_MAP', 'TOON_OCCLUSION_MAP', 'TOON_RIM', 'TOON_SHADE_MAP'])
  const plain = toonOptionsOf('X', {}, none)
  assert.equal(plain.shadeColor, DEFAULT_SHADE)
  assert.equal(plain.rim, undefined); assert.equal(plain.side, THREE.FrontSide); assert.equal(plain.alphaTest, 0); assert.equal(plain.transparent, false)
})

test('glTF 재질은 바탕색·맵·투명 처리를 옮기고, 그늘은 바탕 × 기본 그늘 색이다', () => {
  const map = new THREE.Texture()
  const source = new THREE.MeshBasicMaterial({ name: 'hair', color: 0x808080, map, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide })
  const options = toonOptionsFromSurface(source, undefined, none)
  assert.equal(options.name, 'hair')
  assert.equal(options.map, map)
  assert.equal(options.shadeMap, undefined, '그늘은 바탕(색 × 맵)에 그늘 색을 곱함')
  assert.equal(options.shadeColor, DEFAULT_SHADE)
  assert.equal(options.transparent, true); assert.equal(options.alphaTest, 0.3); assert.equal(options.side, THREE.DoubleSide)
  assert.equal(options.normalMap, undefined); assert.equal(options.emissive, undefined, '검은 발광은 기능을 켜지 않음')
  assert.equal(options.uvTransforms, false)
  assert.deepEqual(Object.keys(toonDefines(options)), ['TOON_MAP'], '켠 기능만 (노멀 맵·발광·텍스처 변환 없음)')
})

test('glTF 물리 재질의 노멀 맵·발광·AO 맵·텍스처 변환도 옮기고, avatar.json 재질 설정이 있으면 그 값이 먼저다', () => {
  const normalMap = new THREE.Texture(), emissiveMap = new THREE.Texture(), aoMap = new THREE.Texture(), map = new THREE.Texture()
  map.offset.set(0.5, 0)
  const source = new THREE.MeshStandardMaterial({ name: 'body', map, normalMap, emissive: 0x000000, emissiveMap, aoMap })
  const options = toonOptionsFromSurface(source, undefined, none)
  assert.equal(options.normalMap, normalMap)
  assert.equal(options.emissiveMap, emissiveMap, '발광 맵이 있으면 색이 검어도 켬')
  assert.equal(options.occlusionMap, aoMap, 'glTF AO 맵은 그림자 쪽으로 미는 AO 맵으로'); assert.equal(options.occlusionStrength, 0.5)
  assert.equal(options.uvTransforms, true)
  const files = new Map([['shade.png', new THREE.Texture()], ['ao.png', new THREE.Texture()], ['base.png', new THREE.Texture()]])
  const spec = { map: 'base.png', shade: 'shade.png', ao: 'ao.png', aoScale: 1, shadowThreshold: 0.6, shadowSoftness: 0.2, doubleSided: true, transparent: false, alphaTest: 0.5 }
  const tuned = toonOptionsFromSurface(source, spec, (file) => files.get(file))
  assert.equal(tuned.map, files.get('base.png'))
  assert.equal(tuned.shadeMap, files.get('shade.png'))
  assert.equal(tuned.shadeColor, 0xffffff, '그늘 맵을 주면 그늘 색은 흰색')
  assert.equal(tuned.occlusionMap, files.get('ao.png'), 'avatar.json AO 맵이 glTF AO 맵보다 먼저'); assert.equal(tuned.occlusionStrength, 0.5)
  assert.equal(tuned.shadowThreshold, 0.6); assert.equal(tuned.shadowSoftness, 0.2)
  assert.equal(tuned.side, THREE.DoubleSide); assert.equal(tuned.alphaTest, 0.5)
})

test('림: TAA 깊이가 있으면 화면 공간 림이 기본이고, mode = fresnel이거나 깊이가 없으면 프레넬 림이다', () => {
  const screen = { uniforms: { rimDepth: { value: null }, rimResolution: { value: new THREE.Vector2(1, 1) }, rimDepthThreshold: { value: 0.001 } }, offset: 0.01 }
  assert.equal(toonRimOptions({ color: '#fff' }, screen).screen, screen)
  assert.equal(toonRimOptions({ color: '#fff', mode: 'screen' }, screen).screen, screen)
  assert.equal(toonRimOptions({ color: '#fff', mode: 'fresnel' }, screen).screen, undefined)
  assert.equal(toonRimOptions({ color: '#fff' }).screen, undefined, 'TAA가 아니면 프레넬')
  assert.equal(toonRimOptions(undefined, screen), undefined)
})