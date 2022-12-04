import readDataFile from "../utils/readFile";

const data = readDataFile()

Number.prototype.mod = function (n) {
  "use strict"
  return ((this % n) + n) % n
}

// One line
const result = data.split('\n').reduce((acc, cur) => acc + (cur.slice(0, cur.length / 2).split('').find((letter) => cur.slice(cur.length / 2).includes(letter))!.charCodeAt(0) - 39).mod(58) + 1, 0)

const result2 = data.match(/\w+\n\w+\n\w+(\n)?/g).reduce((acc, cur) => acc + (cur.split('\n').at(0).split('').find((letter) => [1, 2].every((index) => cur.split('\n').at(index).includes(letter)))!.charCodeAt(0) - 39).mod(58) + 1, 0)

console.log(result)
console.log(result2)