import test from 'node:test'
import assert from 'node:assert/strict'
import {
  addBindingWeight, addTargetWeight, defaultVrmChannels, defaultVrmExpressions, isVrmModel, profileFromVrm, sexualUsageAllowed, VRM_ARM_DOWN,
} from '../../character/rig-vrm.ts'
import { bindingWeight } from '../../character/rig-three.ts'

// VRM은 three-vrm이 읽은 값(사람형 뼈·표정·메타·MToon)을 평범한 값으로 받아 프로필·툰 재질 설정을 만든다

const PRESETS = ['aa', 'ih', 'ou', 'ee', 'oh', 'blink', 'blinkLeft', 'blinkRight', 'happy', 'angry', 'sad', 'relaxed', 'surprised', 'neutral']
const info = (extra = {}) => ({ bones: { hips: 'J_Bip_C_Hips', head: 'J_Bip_C_Head' }, expressions: PRESETS, sexualAllowed: true, ...extra })

test('VRM 파일은 확장자로 알아본다', () => {
  assert.equal(isVrmModel('a/Seed-san.vrm'), true)
  assert.equal(isVrmModel('Model.VRM'), true)
  assert.equal(isVrmModel('model.fbx'), false)
})

test('model만 있는 avatar.json이면 VRM 뼈·채널·표정·팔 내림 기본값으로 프로필을 만든다', () => {
  const profile = profileFromVrm(info(), { model: 'x.vrm' })
  assert.equal(profile.model, 'x.vrm')
  assert.deepEqual(profile.bones, { hips: 'J_Bip_C_Hips', head: 'J_Bip_C_Head' })
  assert.equal(profile.armDown, VRM_ARM_DOWN)
  assert.deepEqual(profile.channels.eyeOpenLeft, [{ expression: 'blinkLeft', map: 'invert' }])
  assert.deepEqual(profile.channels.eyeOpenRight, [{ expression: 'blinkRight', map: 'invert' }])
  assert.deepEqual(['A', 'I', 'U', 'E', 'O'].map((v) => profile.channels[`mouthVowel.${v}`][0].expression), ['aa', 'ih', 'ou', 'ee', 'oh'])
  assert.deepEqual(profile.channels.mouthOpen, [{ expression: 'aa', scale: 0.6 }])
  assert.equal(profile.channels.headTurn, undefined)   // 다른 채널은 대응 없음
  assert.deepEqual(profile.expressions, { heart: { happy: 1 }, tears: { sad: 1 }, dark: { angry: 1 }, smug: { relaxed: 1 }, dizzy: { surprised: 1 } })
  assert.equal(profile.springs, undefined)   // VRM 흔들림 뼈를 씀
  assert.equal(profile.outline, undefined)   // VRM MToon 외곽선을 씀
  assert.equal(profile.features, undefined)
})

test('avatar.json 값이 VRM 기본값을 키마다 이긴다', () => {
  const profile = profileFromVrm(info(), {
    model: 'x.vrm', bones: { head: 'MyHead' }, armDown: 0,
    channels: { mouthOpen: [{ morph: 'Fcl_MTH_A' }] }, expressions: { heart: { happy: 0.5, Fcl_EYE_Joy: 1 } },
    springs: [{ roots: ['Hair'] }], features: ['earHide'],
  })
  assert.deepEqual(profile.bones, { hips: 'J_Bip_C_Hips', head: 'MyHead' })
  assert.equal(profile.armDown, 0)
  assert.deepEqual(profile.channels.mouthOpen, [{ morph: 'Fcl_MTH_A' }])
  assert.deepEqual(profile.channels.eyeOpenLeft, [{ expression: 'blinkLeft', map: 'invert' }])
  assert.deepEqual(profile.expressions.heart, { happy: 0.5, Fcl_EYE_Joy: 1 })
  assert.deepEqual(profile.expressions.tears, { sad: 1 })
  assert.deepEqual(profile.springs, [{ roots: ['Hair'] }])
  assert.deepEqual(profile.features, ['earHide'])
})

test('기본 대응은 VRM에 있는 표정만 쓰고, 같은 이름의 사용자 표정이 프리셋보다 먼저다', () => {
  assert.deepEqual(defaultVrmChannels(['blinkLeft']), { eyeOpenLeft: [{ expression: 'blinkLeft', map: 'invert' }] })
  assert.deepEqual(defaultVrmChannels([]), {})
  assert.deepEqual(defaultVrmExpressions(['happy', 'heart', 'blush', 'Surprised']), { heart: { heart: 1 }, blush: { blush: 1 } })
  assert.deepEqual(defaultVrmExpressions([]), {})
})

test('성적 표현을 금지한 VRM은 adult 행동(가슴·아랫배)을 avatar.json에 있어도 끈다', () => {
  assert.equal(sexualUsageAllowed({ metaVersion: '1', allowExcessivelySexualUsage: false }), false)
  assert.equal(sexualUsageAllowed({ metaVersion: '1', allowExcessivelySexualUsage: true }), true)
  assert.equal(sexualUsageAllowed({ metaVersion: '1' }), true)
  assert.equal(sexualUsageAllowed({ metaVersion: '0', sexualUssageName: 'Disallow' }), false)
  assert.equal(sexualUsageAllowed({ metaVersion: '0', sexualUssageName: 'Allow' }), true)
  assert.equal(sexualUsageAllowed(null), true)
  const profile = profileFromVrm(info({ sexualAllowed: false }), { model: 'x.vrm', features: ['earHide'] })
  assert.deepEqual(profile.features, ['earHide'], '모델 능력 기능은 그대로')
  assert.equal(profile.adultAllowed, false, '성적 표현 금지 모델은 adult 행동도 끔')
  assert.equal(profileFromVrm(info(), { model: 'x.vrm' }).adultAllowed, true)
  assert.equal(profileFromVrm(info(), { model: 'x.vrm', adultAllowed: false }).adultAllowed, false, 'avatar.json으로 끌 수 있음')
})

test('채널 대응은 expression이면 VRM 표정, morph면 모프에 더하고, 표정 표 대상은 VRM 표정 이름이 먼저다', () => {
  const sink = { morphs: new Map(), expressions: new Map(), vrmNames: new Set(['happy', 'aa']) }
  addBindingWeight(sink, { expression: 'blinkLeft', map: 'invert' }, bindingWeight({ expression: 'blinkLeft', map: 'invert' }, 0.25))
  addBindingWeight(sink, { morph: 'Mouth_A' }, 0.5)
  addBindingWeight(sink, { expression: 'aa', scale: 0.6 }, bindingWeight({ expression: 'aa', scale: 0.6 }, 1))
  addTargetWeight(sink, 'aa', 0.1)          // 같은 VRM 표정에 쌓임
  addTargetWeight(sink, 'happy', 0.5)       // VRM 표정
  addTargetWeight(sink, 'Eye_Heart', 1)     // VRM 표정이 아니면 모프
  assert.deepEqual([...sink.expressions], [['blinkLeft', 0.75], ['aa', 0.7], ['happy', 0.5]])
  assert.deepEqual([...sink.morphs], [['Mouth_A', 0.5], ['Eye_Heart', 1]])
  // FBX는 VRM 표정이 없어 모두 모프
  const fbx = { morphs: new Map(), expressions: new Map(), vrmNames: new Set() }
  addTargetWeight(fbx, 'happy', 1)
  assert.deepEqual([...fbx.morphs], [['happy', 1]])
  assert.equal(fbx.expressions.size, 0)
})
