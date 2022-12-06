import readDataFile from "../utils/readFile";

const data = readDataFile()

const result = data.split('').findIndex((_, i, a) => new Set(a.slice(Math.max(i - 3, 0), i + 1)).size === 4) + 1

const result2 = data.split('').findIndex((_, i, a) => new Set(a.slice(Math.max(i - 13, 0), i + 1)).size === 14) + 1

console.log(result)
console.log(result2)