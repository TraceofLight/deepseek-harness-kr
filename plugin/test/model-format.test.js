import test from 'node:test'
import assert from 'node:assert/strict'

test('모델 형식은 .vrm·.fbx·.glb·.gltf만 받고(대소문자 무관), 다른 확장자·빈 값은 형식을 알려 주는 오류를 낸다', async () => {
  const { modelFormat } = await import('../../character/rig-three.ts')
  assert.equal(modelFormat('Seed-san.vrm'), 'vrm')
  assert.equal(modelFormat('Hayakawa_Aoi.FBX'), 'fbx')
  assert.equal(modelFormat(' sub/dir/model.vrm '), 'vrm')
  assert.equal(modelFormat('lacrimosa.glb'), 'gltf')
  assert.equal(modelFormat('scene.GLTF'), 'gltf')
  for (const bad of ['model.vrma', 'model.obj', 'noext', '', undefined]) {
    assert.throws(() => modelFormat(bad), /지원하는 모델 형식은 \.vrm·\.fbx·\.glb·\.gltf/, String(bad))
  }
})

test('셰이딩은 avatar.json shading이 먼저이고, 없거나 모르는 값이면 glTF는 pbr, VRM·FBX는 toon이다', async () => {
  const { shadingOf } = await import('../../character/rig-three.ts')
  assert.equal(shadingOf({}, 'gltf'), 'pbr')
  assert.equal(shadingOf({}, 'vrm'), 'toon')
  assert.equal(shadingOf({}, 'fbx'), 'toon')
  assert.equal(shadingOf({ shading: 'toon' }, 'gltf'), 'toon')
  assert.equal(shadingOf({ shading: 'pbr' }, 'vrm'), 'pbr')
  assert.equal(shadingOf({ shading: 'pbr' }, 'fbx'), 'pbr')
  assert.equal(shadingOf({ shading: 'cel' }, 'fbx'), 'toon')
})
