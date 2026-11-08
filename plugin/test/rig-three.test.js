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

test('외곽선 법선은 같은 위치 정점끼리 평균내 각진 경계에서도 하나로 모인다', async () => {
  const { smoothOutlineNormals } = await import('../../character/rig-three.ts')
  // 정육면체 모서리처럼 같은 자리에 법선이 다른 정점 셋(+x, +y, +z)과 떨어진 정점 하나
  const positions = [1, 1, 1, 1, 1, 1, 1.00000001, 1, 1, 5, 5, 5]
  const normals = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]
  const out = smoothOutlineNormals(positions, normals, 1e-4)
  const k = 1 / Math.sqrt(3)
  for (let i = 0; i < 3; i++) for (let a = 0; a < 3; a++) assert.ok(Math.abs(out[i * 3 + a] - k) < 1e-6, '같은 자리 셋은 대각선 방향 하나로')
  assert.deepEqual(Array.from(out.slice(9)), [0, 0, 1], '혼자 있는 정점은 그대로')
  // 서로 반대 법선만 모이면(합 0) 원래 법선 유지
  const flat = smoothOutlineNormals([0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, -1])
  assert.deepEqual(Array.from(flat), [0, 0, 1, 0, 0, -1])
})

test('충돌체 안의 점은 캡슐·구 표면 밖으로 밀려나고, 밖의 점은 그대로다', async () => {
  const THREE = await import('three')
  const { pushOutOfCapsule } = await import('../../character/rig-three.ts')
  const a = new THREE.Vector3(0, 0, 0), b = new THREE.Vector3(0, 10, 0)
  const inside = new THREE.Vector3(0.5, 5, 0)
  assert.equal(pushOutOfCapsule(inside, a, b, 2), true)
  assert.ok(inside.distanceTo(new THREE.Vector3(2, 5, 0)) < 1e-9, '캡슐 옆면 수직 방향으로')
  const outside = new THREE.Vector3(3, 5, 0)
  assert.equal(pushOutOfCapsule(outside, a, b, 2), false)
  assert.deepEqual(outside.toArray(), [3, 5, 0])
  const capEnd = new THREE.Vector3(0, -1, 0)
  pushOutOfCapsule(capEnd, a, b, 2)
  assert.ok(Math.abs(capEnd.y + 2) < 1e-9, '끝은 반구 방향으로')
  const sphere = new THREE.Vector3(0, 0, 0.5)
  pushOutOfCapsule(sphere, a, a.clone(), 1)
  assert.ok(Math.abs(sphere.length() - 1) < 1e-9, '구는 중심에서 반지름만큼')
})

test('흔들림 뼈는 움직이는 충돌체를 뚫지 않고, 처음부터 가까운 충돌체에서도 표면 밖으로 밀려난다', async () => {
  const THREE = await import('three')
  const { createSprings } = await import('../../character/rig-three.ts')
  const scene = new THREE.Object3D(), hair0 = new THREE.Bone(), hair1 = new THREE.Bone(), leg = new THREE.Bone(), inner = new THREE.Bone()
  hair1.position.set(0, -1, 0); hair0.add(hair1); scene.add(hair0)
  leg.position.set(1.5, -1, 0); scene.add(leg)          // 끝점(0,-1,0)에서 1.5 떨어진 구
  inner.position.set(0, -1.3, 0); scene.add(inner)      // 처음부터 끝점과 0.3 거리 (충돌 거리 0.6보다 가까움)
  scene.updateMatrixWorld(true)
  const springs = createSprings([{ roots: [hair0], stiffness: 0.5, drag: 0.4, radius: 0.1, colliders: [{ from: leg, radius: 0.5 }, { from: inner, radius: 0.5 }] }])
  for (let i = 0; i < 240; i++) {
    leg.position.x = 1.5 - Math.min(1.5, i * 0.02)        // 구가 머리카락 쪽으로 들어옴
    scene.updateMatrixWorld(true); springs.step(1 / 60)
    const tip = hair1.getWorldPosition(new THREE.Vector3())
    assert.ok(tip.distanceTo(leg.position) >= 0.6 - 0.02, `${i}프레임: 끝점이 충돌체 안으로 들어감`)
  }
})

test('겹치면 깨지는 모프 묶음은 앞쪽을 우선하고 합이 1을 넘지 않게 뒤쪽을 줄인다', async () => {
  const { limitExclusiveMorphs } = await import('../../character/rig-three.ts')
  const weights = new Map([['Eye_Smile', 0.6], ['Eye_Close_L', 1], ['Eye_Close_R', 0.3], ['Mouth_A', 0.8]])
  limitExclusiveMorphs(weights, [['Eye_Smile', 'Eye_Close_L'], ['Eye_Smile', 'Eye_Close_R']])
  assert.ok(Math.abs(weights.get('Eye_Close_L') - 0.4) < 1e-9, '감기는 남은 0.4만')
  assert.equal(weights.get('Eye_Close_R'), 0.3, '합이 1 안이면 그대로')
  assert.equal(weights.get('Eye_Smile'), 0.6, '앞쪽은 그대로')
  assert.equal(weights.get('Mouth_A'), 0.8, '묶음 밖은 그대로')
  assert.equal(weights.has('Eye_Blink'), false, '없는 모프는 만들지 않음')
})
