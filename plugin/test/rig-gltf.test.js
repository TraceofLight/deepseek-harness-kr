import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { gltfJsonOf, SHADE_TINT, toonOptionsFromSurface, unsupportedGltfExtensions } from '../../character/rig-gltf.ts'
import { createToonMaterial, toonDefines } from '../../character/toon-material.ts'

/** JSON 청크 하나짜리 .glb 내용 (길이는 4바이트 맞춤) */
const glb = (json) => {
  const text = new TextEncoder().encode(JSON.stringify(json))
  const padded = new Uint8Array(Math.ceil(text.length / 4) * 4).fill(0x20)
  padded.set(text)
  const buffer = new ArrayBuffer(20 + padded.length), view = new DataView(buffer)
  view.setUint32(0, 0x46546c67, true); view.setUint32(4, 2, true); view.setUint32(8, buffer.byteLength, true)
  view.setUint32(12, padded.length, true); view.setUint32(16, 0x4e4f534a, true)
  new Uint8Array(buffer, 20).set(padded)
  return buffer
}

test('glTF JSON은 .glb면 JSON 청크에서, .gltf면 파일 전체에서 읽고, 형식이 아니면 null이다', () => {
  assert.deepEqual(gltfJsonOf(glb({ asset: { version: '2.0' }, extensionsUsed: ['KHR_materials_unlit'] })), { asset: { version: '2.0' }, extensionsUsed: ['KHR_materials_unlit'] })
  assert.deepEqual(gltfJsonOf(new TextEncoder().encode('{"asset":{"version":"2.0"}}').buffer), { asset: { version: '2.0' } })
  assert.equal(gltfJsonOf(new Uint8Array([1, 2, 3, 4]).buffer), null)
  const wrongChunk = glb({}); new DataView(wrongChunk).setUint32(16, 0x004e4942, true)   // 첫 청크가 BIN
  assert.equal(gltfJsonOf(wrongChunk), null)
})

test('디코더가 필요한 압축 확장(Draco·meshopt·KTX2)만 골라내고, unlit 같은 확장은 통과한다', () => {
  assert.deepEqual(unsupportedGltfExtensions({ extensionsUsed: ['KHR_materials_unlit', 'KHR_texture_transform'] }), [])
  assert.deepEqual(unsupportedGltfExtensions({}), [])
  assert.deepEqual(unsupportedGltfExtensions({ extensionsUsed: ['KHR_draco_mesh_compression', 'KHR_materials_unlit', 'EXT_meshopt_compression', 'KHR_texture_basisu'] }),
    ['KHR_draco_mesh_compression', 'EXT_meshopt_compression', 'KHR_texture_basisu'])
})

const none = () => undefined

test('glTF 재질은 바탕색·맵·투명 처리를 툰 재질로 옮기고, 그늘은 바탕 맵 × 그늘 색이다', () => {
  const map = new THREE.Texture()
  const source = new THREE.MeshBasicMaterial({ name: 'hair', color: 0x808080, map, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide })
  const options = toonOptionsFromSurface(source, undefined, none)
  assert.equal(options.name, 'hair')
  assert.equal(options.map, map)
  assert.equal(options.shadeMap, map, '그늘 맵이 없으면 바탕 맵을 같이 씀')
  assert.ok(new THREE.Color(options.shadeColor).equals(source.color.clone().multiply(SHADE_TINT)))
  assert.equal(options.transparent, true); assert.equal(options.alphaTest, 0.3); assert.equal(options.side, THREE.DoubleSide)
  assert.equal(options.normalMap, undefined); assert.equal(options.emissive, undefined, '검은 발광은 기능을 켜지 않음')
  assert.equal(options.uvTransforms, false)
  assert.deepEqual(Object.keys(toonDefines(options)).sort(), ['TOON_MAP', 'TOON_SHADE_MAP'], '켠 기능만 (노멀 맵·발광·텍스처 변환 없음)')
  assert.ok(createToonMaterial(options).isShaderMaterial)
})

test('물리 재질의 노멀 맵·발광·AO 맵·텍스처 변환도 옮기고, avatar.json 재질 설정이 있으면 그 값이 먼저다', () => {
  const normalMap = new THREE.Texture(), emissiveMap = new THREE.Texture(), aoMap = new THREE.Texture(), map = new THREE.Texture()
  map.offset.set(0.5, 0)
  const source = new THREE.MeshStandardMaterial({ name: 'body', map, normalMap, emissive: 0x000000, emissiveMap, aoMap })
  const options = toonOptionsFromSurface(source, undefined, none)
  assert.equal(options.normalMap, normalMap)
  assert.equal(options.emissiveMap, emissiveMap, '발광 맵이 있으면 색이 검어도 켬')
  assert.equal(options.shadingShiftMap, aoMap, 'AO 맵은 그림자 경계 맵으로')
  assert.equal(options.uvTransforms, true)
  const files = new Map([['shade.png', new THREE.Texture()], ['ao.png', new THREE.Texture()], ['base.png', new THREE.Texture()]])
  const spec = { map: 'base.png', shade: 'shade.png', ao: 'ao.png', aoScale: 0.5, shadingShift: 0.1, shadingToony: 0.6, doubleSided: true, transparent: false, alphaTest: 0.5 }
  const tuned = toonOptionsFromSurface(source, spec, (file) => files.get(file))
  assert.equal(tuned.map, files.get('base.png'))
  assert.equal(tuned.shadeMap, files.get('shade.png'))
  assert.equal(tuned.shadeColor, 0xffffff, '그늘 맵을 주면 그늘 색은 흰색')
  assert.equal(tuned.shadingShiftMap, files.get('ao.png')); assert.equal(tuned.shadingShiftMapScale, 0.5)
  assert.equal(tuned.shadingShift, 0.1); assert.equal(tuned.shadingToony, 0.6)
  assert.equal(tuned.side, THREE.DoubleSide); assert.equal(tuned.alphaTest, 0.5)
})
