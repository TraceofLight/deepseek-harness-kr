import test from 'node:test'
import assert from 'node:assert/strict'
import { compareVersions, isShipped, versionProblem } from '../check-version-bump.mjs'

const files = ['plugin/host.js', 'lib/client.js', 'assets/']

test('배포 파일 판정: 디렉터리 항목과 정확한 파일 항목', () => {
  assert.equal(isShipped('assets/dsc-lines.json', files), true)
  assert.equal(isShipped('lib/client.js', files), true)
  assert.equal(isShipped('assets-other/a.json', files), false)
  assert.equal(isShipped('plugin/client.ts', files), false)
})

test('버전 비교는 업데이트 확인과 같은 규칙', () => {
  assert.ok(compareVersions('0.10.0', '0.9.1') > 0)
  assert.equal(compareVersions('v0.9.0', '0.9.0'), 0)
  assert.ok(compareVersions('0.10.2-rc.1', '0.10.2') < 0)
  assert.ok(compareVersions('0.10.2-rc.1', '0.10.1') > 0)
})

test('배포 파일이 바뀌지 않으면 버전을 그대로 둬도 통과', () => {
  assert.equal(versionProblem({ changed: ['README.md', 'plugin/client.ts'], files, base: '0.9.0', head: '0.9.0' }), null)
})

test('배포 파일이 바뀌었는데 버전이 같거나 낮으면 실패', () => {
  const same = versionProblem({ changed: ['README.md', 'lib/client.js'], files, base: '0.9.0', head: '0.9.0' })
  assert.match(same, /0\.9\.0 → 0\.9\.0/)
  assert.match(same, /lib\/client\.js/)
  assert.doesNotMatch(same, /README/)
  assert.notEqual(versionProblem({ changed: ['assets/dsc.js'], files, base: '0.9.1', head: '0.9.0' }), null)
})

test('배포 파일이 바뀌고 버전이 올라가면 통과', () => {
  assert.equal(versionProblem({ changed: ['assets/dsc.js'], files, base: '0.9.0', head: '0.9.1' }), null)
})
