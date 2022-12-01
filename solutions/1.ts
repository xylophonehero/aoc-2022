import * as fs from 'fs'
import path from 'path'

const file = fs.readFileSync(path.resolve(__dirname, '../data/1.txt'), 'utf-8')

const result = file.split('\n')
  .reduce((acc, cur) => {
    const { prev, result } = acc
    if (cur === "") return ({ prev: 0, result: [...result, prev] })
    return ({ prev: prev + Number(cur), result })
  }, { prev: 0, result: [] as number[] })
  .result.reduce((acc, cur) => Math.max(acc, cur), 0)

const result2 = file.split('\n')
  .reduce((acc, cur) => {
    const { prev, result } = acc
    if (cur === "") return ({ prev: 0, result: [...result, prev] })
    return ({ prev: prev + Number(cur), result })
  }, { prev: 0, result: [] as number[] })
  .result.reduce((acc, cur) => {
    if (acc[0] > cur) return acc
    return [cur, ...acc.slice(1)].sort((a, b) => a - b)
  }, [0, 0, 0])
  .reduce((acc, cur) => acc + cur, 0)

console.log(result)
console.log(result2)