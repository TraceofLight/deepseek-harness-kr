import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { createBonePoses } from '../../character/bone-poses.ts'

const close = (a, b, message) => assert.ok(Math.abs(a - b) < 1e-6, `${message ?? ''} ${a} ≠ ${b}`)

/** 부모(배율 2, z축 90° 회전) 아래 위·아래 눈꺼풀 뼈 */
function face() {
  const root = new THREE.Group(), head = new THREE.Bone(), up = new THREE.Bone(), lo = new THREE.Bone()
  head.scale.setScalar(2); head.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2)
  up.name = 'up'; lo.name = 'lo'
  up.position.set(1, 0, 0); lo.position.set(0.5, 0, 0)   // 부모 회전 때문에 월드에선 위(+y)·조금 아래
  root.add(head); head.add(up, lo); root.updateMatrixWorld(true)
  const find = (name) => ({ up, lo })[name]
  return { root, up, lo, find }
}

test('toward는 기본 자세 거리 비율만큼 다른 뼈 쪽으로 옮기고, 부모 회전·배율을 되돌린 지역 값으로 쓴다', () => {
  const { root, up, lo, find } = face()
  const poses = createBonePoses({ blink: [{ bone: 'up', toward: { bone: 'lo', amount: 1 } }] }, find, 1)
  const before = up.getWorldPosition(new THREE.Vector3()), target = lo.getWorldPosition(new THREE.Vector3())
  poses.apply(new Map([['blink', 1]])); root.updateMatrixWorld(true)
  const after = up.getWorldPosition(new THREE.Vector3())
  close(after.x, target.x, 'x'); close(after.y, target.y, 'y')
  poses.reset(); root.updateMatrixWorld(true)
  close(up.getWorldPosition(new THREE.Vector3()).distanceTo(before), 0, 'reset은 바탕 자세로')
  poses.apply(new Map([['blink', 0.5]])); root.updateMatrixWorld(true)
  close(up.getWorldPosition(new THREE.Vector3()).y, (before.y + target.y) / 2, '세기 0.5는 절반')
})

test('move는 화면 기준(모델 키 비율), 세기는 0~1로 자르고, 없는 포즈 이름·세기 0은 건드리지 않는다', () => {
  const { root, up, find } = face()
  const poses = createBonePoses({ raise: [{ bone: 'up', move: [0, 0.1, 0] }] }, find, 10)
  const before = up.getWorldPosition(new THREE.Vector3())
  poses.apply(new Map([['raise', 3], ['other', 1]])); root.updateMatrixWorld(true)
  close(up.getWorldPosition(new THREE.Vector3()).y - before.y, 1, '0.1 × 키 10, 세기 1로 자름')
  poses.reset(); poses.apply(new Map([['raise', 0]])); root.updateMatrixWorld(true)
  close(up.getWorldPosition(new THREE.Vector3()).distanceTo(before), 0)
})

test('애니메이션이 바꾼 값은 record로 바탕이 되고, 그 위에 더한다. 없는 뼈는 경고 후 그 항목만 뺀다', () => {
  const { up, find } = face()
  const warnings = []
  const poses = createBonePoses({ p: [{ bone: 'up', move: [0, 0, 0.5] }, { bone: 'nope', move: [0, 1, 0] }], q: [{ bone: 'up', toward: { bone: 'gone', amount: 1 } }] }, find, 1, (m) => warnings.push(m))
  assert.equal(warnings.length, 2)
  assert.deepEqual(poses.names, ['p', 'q'])
  up.position.set(3, 0, 0); poses.record()   // 믹서가 옮김
  poses.apply(new Map([['p', 1]])); const moved = up.position.clone()
  poses.reset(); assert.deepEqual(up.position.toArray(), [3, 0, 0])
  assert.notDeepEqual(moved.toArray(), [3, 0, 0])
})

test('rotate는 화면 기준 축 회전을 뼈 지역 회전에 곱한다', () => {
  const bone = new THREE.Bone(); bone.name = 'b'
  const root = new THREE.Group(); root.add(bone); root.updateMatrixWorld(true)
  const poses = createBonePoses({ r: [{ bone: 'b', rotate: [0, 0, 90] }] }, () => bone, 1)
  poses.apply(new Map([['r', 1]]))
  const x = new THREE.Vector3(1, 0, 0).applyQuaternion(bone.quaternion)
  close(x.x, 0); close(x.y, 1)
})
