import readDataFile from "../utils/readFile";

const data = readDataFile()

// const result = data.split('\n')
//   .reduceRight((a, c, i, d) => {
//     const dir = d.slice(0, i + 1).findLast((x) => x.startsWith('$ cd '))?.slice(5)
//     const index = d.slice(0, i + 1).findLastIndex((x, ind, arr) => x === `dir ${dir}` && arr.slice(ind).filter((x) => x === '$ cd ..').length < arr.slice(ind).filter((x) => x.match(/\$ cd [^\.]/)).length)
//     if (c.match(/\d+/)) {
//       a.dirs[`${dir}${index}`] = (a.dirs[`${dir}${index}`] ?? 0) + Number(c.match(/\d+/))
//     }
//     else if (c.startsWith('dir')) {
//       a.dirs[`${dir}${index}`] = (a.dirs[`${dir}${index}`] ?? 0) + a.dirs[`${c.slice(4)}${i}`]
//     }
//     else if (c.match(/\$ cd [^\.]/) && a.dirs[`${dir}${index}`] <= 100000) {
//       a.total = a.dirs[`${dir}${index}`] + a.total
//     }
//     return a
//   }, { total: 0, dirs: [] })

const result = data.split('\n').reduceRight((a, c, i, d) => c.match(/\d+/) ? { ...a, dirs: { ...a.dirs, [a.curr]: (a.dirs[a.curr] ?? 0) + Number(c.match(/\d+/)) } } : c.startsWith('dir') ? { ...a, dirs: { ...a.dirs, [a.curr]: (a.dirs[a.curr] ?? 0) + a.dirs[`${c.slice(4)}${i}`] } } : c.match(/\$ cd [^\.]/) ? { ...a, total: a.dirs[a.curr] <= 100000 ? a.dirs[a.curr] + a.total : a.total, curr: `${d.slice(0, i).findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}${d.slice(0, d.slice(0, i).findLastIndex((x) => x !== '$ cd ..')).findLastIndex((x, ind, arr) => x === `dir ${d.slice(0, i).findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}` && arr.slice(ind).filter((x) => x === '$ cd ..').length < arr.slice(ind).filter((x) => x.match(/\$ cd [^\.]/)).length)}` } : a, { total: 0, dirs: {}, curr: `${data.split('\n').findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}${data.split('\n').findLastIndex((x, ind, arr) => x === `dir ${data.split('\n').findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}` && arr.slice(ind).filter((x) => x === '$ cd ..').length < arr.slice(ind).filter((x) => x.match(/\$ cd [^\.]/)).length)}` }).total

const result2 = Object.values(data.split('\n').reduceRight((a, c, i, d) => c.match(/\d+/) ? { ...a, dirs: { ...a.dirs, [a.curr]: (a.dirs[a.curr] ?? 0) + Number(c.match(/\d+/)) } } : c.startsWith('dir') ? { ...a, dirs: { ...a.dirs, [a.curr]: (a.dirs[a.curr] ?? 0) + a.dirs[`${c.slice(4)}${i}`] } } : c.match(/\$ cd [^\.]/) ? { ...a, total: a.dirs[a.curr] <= 100000 ? a.dirs[a.curr] + a.total : a.total, curr: `${d.slice(0, i).findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}${d.slice(0, d.slice(0, i).findLastIndex((x) => x !== '$ cd ..')).findLastIndex((x, ind, arr) => x === `dir ${d.slice(0, i).findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}` && arr.slice(ind).filter((x) => x === '$ cd ..').length < arr.slice(ind).filter((x) => x.match(/\$ cd [^\.]/)).length)}` } : a, { total: 0, dirs: {}, curr: `${data.split('\n').findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}${data.split('\n').findLastIndex((x, ind, arr) => x === `dir ${data.split('\n').findLast((x) => x.match(/\$ cd [^\.]/))?.slice(5)}` && arr.slice(ind).filter((x) => x === '$ cd ..').length < arr.slice(ind).filter((x) => x.match(/\$ cd [^\.]/)).length)}` }).dirs).reduce((a: number, c: number, i, d: number[]) => Math.min(a, (70000000 - d.at(-1) + c >= 30000000) ? c : Infinity), Infinity)

console.log(result)
console.log(result2)