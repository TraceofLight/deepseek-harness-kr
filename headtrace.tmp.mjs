import { resolve } from 'node:path'
import { bundleCharacter, runTrace } from './plugin/test/trace/harness.mjs'
const frames = await runTrace(await bundleCharacter(resolve('.')), {})
console.log('frame keys', Object.keys(frames[0]).join(','))
const p = frames.find((f) => f.params)?.params; console.log('param sample keys', p ? Object.keys(p).slice(0, 12).join(',') : 'none')
const series = (id) => frames.map((f) => f.params?.[id])
for (const id of ['AngleX', 'AngleY', 'AngleZ']) {
  const s = series(id); const jumps = []
  for (let i = 1; i < s.length; i++) if (typeof s[i] === 'number' && typeof s[i - 1] === 'number') { const d = Math.abs(s[i] - s[i - 1]); if (d > 2.5) jumps.push([i, +d.toFixed(2), +s[i - 1].toFixed(1), +s[i].toFixed(1)]) }
  console.log(id, 'jumps>2.5:', jumps.length, JSON.stringify(jumps.slice(0, 25)))
}
