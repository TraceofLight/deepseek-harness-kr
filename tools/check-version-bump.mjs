// 버전 올림 검사기: node tools/check-version-bump.mjs [기준 ref, 기본 origin/main]
// 플러그인 설정 창의 업데이트 확인(plugin/client.ts createUpdater)은 설치한 GitHub 브랜치의
// package.json version만 설치본과 비교한다. 배포 파일(package.json files)을 바꾸고 version을
// 올리지 않으면 설치한 사람에게 새 버전이 보이지 않으므로, 그런 변경을 여기서 막는다.
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

/** files 항목(디렉터리 `assets/` 또는 정확한 파일)이 경로를 덮는지 */
export function isShipped(path, files) {
  return files.some((entry) => (entry.endsWith('/') ? path.startsWith(entry) : path === entry))
}

/**
 * plugin/client.ts의 compareVersions와 같은 규칙. 업데이트 확인이 새 버전으로 보는지가 기준이다
 * @returns 앞이 크면 양수, 같으면 0, 뒤가 크면 음수
 */
export function compareVersions(left, right) {
  const parse = (version) => {
    const [core, prerelease] = String(version ?? '').trim().replace(/^v/i, '').split('-', 2)
    return { nums: core.split('.').map((n) => parseInt(n, 10) || 0), pre: prerelease ?? null }
  }
  const x = parse(left), y = parse(right)
  for (let i = 0; i < Math.max(x.nums.length, y.nums.length, 3); i++) {
    const difference = (x.nums[i] ?? 0) - (y.nums[i] ?? 0)
    if (difference) return difference
  }
  if (x.pre === y.pre) return 0
  if (x.pre === null) return 1
  if (y.pre === null) return -1
  return x.pre < y.pre ? -1 : 1
}

/**
 * 바뀐 파일과 두 버전으로 검사
 * @returns 실패 사유 문구. 통과면 null
 */
export function versionProblem({ changed, files, base, head }) {
  const shipped = changed.filter((path) => isShipped(path, files))
  if (shipped.length === 0 || compareVersions(head, base) > 0) return null
  return `배포 파일이 바뀌었지만 package.json version이 올라가지 않았습니다 (${base} → ${head}).\n`
    + shipped.map((path) => '  ' + path).join('\n')
}

function main(baseRef) {
  const git = (...args) => execFileSync('git', args, { encoding: 'utf8' })
  const changed = git('diff', '--name-only', `${baseRef}...HEAD`).split('\n').filter(Boolean)
  const head = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
  const base = JSON.parse(git('show', `${baseRef}:package.json`))
  const problem = versionProblem({ changed, files: head.files, base: base.version, head: head.version })
  if (problem) {
    console.error(problem)
    process.exit(1)
  }
  console.log(`version 검사 통과 (${base.version} → ${head.version})`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) main(process.argv[2] || 'origin/main')
