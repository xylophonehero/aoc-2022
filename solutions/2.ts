import readDataFile from "../utils/readFile"

const file = readDataFile()

/**
 *  A  B  C
  X 0  -1 -2
  Y 1  0  -1
  Z 2  1  0
 */

// R - C => % 3 => * 3 => +3 => % 9
// 0 => 3
// 1 => 6
// 2 => 0

Number.prototype.mod = function (n) {
  "use strict"
  return ((this % n) + n) % n
}

// One line
const result = file.split('\n').reduce((acc, cur) => acc + (cur.at(2).charCodeAt(0) - 87) + ((((cur.at(2).charCodeAt(0) - 88) - (cur.at(0).charCodeAt(0) - 65)).mod(3) * 3 + 3).mod(9)), 0)

const result2 = file.split('\n').reduce((acc, cur) => acc + (((cur.at(2).charCodeAt(0) - 88) * 3) + (((cur.at(0).charCodeAt(0) - 65) + (cur.at(2).charCodeAt(0) - 89)).mod(3) + 1)), 0)

console.log(result)
console.log(result2)