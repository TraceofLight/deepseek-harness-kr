import test from 'node:test'
import assert from 'node:assert/strict'
import { bindingWeight, channelKeyOf, morphKey } from '../../character/rig-three.ts'
import { PARAMS } from '../../character/model-profile.ts'
import { OUTFIT_ITEMS } from '../../shared/settings.js'

// 3D 렌더러는 동작 코드가 쓴 Live2D 파라미터 ID·소품 ID를 의미 이름으로 되찾아 뼈·모프에 대응시킨다

test('채널 ID는 의미 이름으로, 모음·소품은 묶음 이름으로 되찾고 모르는 ID는 버린다', () => {
  assert.equal(channelKeyOf(PARAMS.headTurn), 'headTurn')
  assert.equal(channelKeyOf(PARAMS.eyeOpenLeft), 'eyeOpenLeft')
  assert.equal(channelKeyOf(PARAMS.mouthVowel.A), 'mouthVowel.A')
  assert.equal(channelKeyOf(PARAMS.mouthVowel.O), 'mouthVowel.O')
  assert.equal(channelKeyOf(PARAMS.chestSwayVertical[0]), 'chestSwayVertical')
  const glasses = OUTFIT_ITEMS.find((item) => item.key === 'glasses')
  assert.equal(channelKeyOf(glasses.param), 'outfit.glasses')
  assert.equal(channelKeyOf('NoSuchParam'), null)
})

test('채널 값은 대응 방식에 따라 모프 세기로 바뀐다', () => {
  assert.equal(bindingWeight({ morph: 'm' }, 0.4), 0.4)
  assert.equal(bindingWeight({ morph: 'm', scale: 0.5 }, 0.8), 0.4)
  // 눈 뜸 1 → 감음 모프 0, 눈 뜸 0 → 1
  assert.equal(bindingWeight({ morph: 'm', map: 'invert' }, 1), 0)
  assert.equal(bindingWeight({ morph: 'm', map: 'invert' }, 0), 1)
  // 눈썹처럼 한 채널을 위·아래 모프 둘로 나눔
  assert.equal(bindingWeight({ morph: 'up', map: 'positive' }, -0.5), 0)
  assert.equal(bindingWeight({ morph: 'up', map: 'positive' }, 0.5), 0.5)
  assert.equal(bindingWeight({ morph: 'down', map: 'negative' }, -0.5), 0.5)
  assert.equal(bindingWeight({ morph: 'down', map: 'negative' }, 0.5), 0)
})

test('FBX 모프 이름은 묶음 이름을 떼고 비교한다', () => {
  assert.equal(morphKey('Facials.Eye_Close'), 'Eye_Close')
  assert.equal(morphKey('Shape_Other_Outline.Eyeglass_OFF'), 'Eyeglass_OFF')
  assert.equal(morphKey('Mouth_A'), 'Mouth_A')
})

test('흔들림 뼈는 몸이 홱 돌면 늦게 따라가고, 시간이 지나면 기본 방향으로 돌아오며 길이를 지킨다', async () => {
  const THREE = await import('three')
  const { createSprings } = await import('../../character/rig-three.ts')
  // 몸(body) 아래로 늘어진 머리카락 두 마디: hair0 → hair1 → hair2(끝)
  const body = new THREE.Bone(), hair0 = new THREE.Bone(), hair1 = new THREE.Bone(), hair2 = new THREE.Bone()
  hair0.position.set(0, 0, 0); hair1.position.set(0, -1, 0); hair2.position.set(0, -1, 0)
  body.add(hair0); hair0.add(hair1); hair1.add(hair2)
  const springs = createSprings([{ roots: [hair0], stiffness: 1, drag: 0.4, gravity: 0 }])
  assert.equal(springs.count, 2)
  const tipDir = () => { body.updateWorldMatrix(true, true); return hair1.getWorldPosition(new THREE.Vector3()).sub(hair0.getWorldPosition(new THREE.Vector3())).normalize() }
  springs.step(1 / 60)
  assert.ok(tipDir().distanceTo(new THREE.Vector3(0, -1, 0)) < 1e-6, '가만히 있으면 기본 방향 그대로')
  // 몸을 z축으로 90도 홱 돌림: 단단히 붙어 있다면 머리카락은 바로 +x 쪽을 가리켜야 함
  body.rotation.z = Math.PI / 2; body.updateWorldMatrix(true, true)
  springs.step(1 / 60)
  const rigid = new THREE.Vector3(1, 0, 0)
  assert.ok(tipDir().angleTo(rigid) > 0.5, '관성 때문에 한 프레임 만에 따라가지 않음')
  for (let i = 0; i < 600; i++) springs.step(1 / 60)
  assert.ok(tipDir().angleTo(rigid) < 0.05, '시간이 지나면 기본 방향(몸 기준)으로 돌아옴')
  const length = hair1.getWorldPosition(new THREE.Vector3()).distanceTo(hair0.getWorldPosition(new THREE.Vector3()))
  assert.ok(Math.abs(length - 1) < 1e-6, '뼈 길이 유지')
})
