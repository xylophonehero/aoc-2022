import readDataFile from "../utils/readFile";

const data = readDataFile()

const result = data.split('').findIndex((_, index, arr) => index < 3 ? false : new Set(arr.slice(index - 3, index + 1)).size === 4) + 1

const result2 = data.split('').findIndex((_, index, arr) => index < 13 ? false : new Set(arr.slice(index - 13, index + 1)).size === 14) + 1

console.log(result)
console.log(result2)