import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { gltfJsonOf, unsupportedGltfExtensions } from '../../character/rig-gltf.ts'

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
