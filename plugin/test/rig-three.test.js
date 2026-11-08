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
