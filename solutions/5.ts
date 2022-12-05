import readDataFile from "../utils/readFile";
const data = readDataFile()

// const result = data.split('\n\n')[1].split('\n')
//   .reduce((acc, cur) => {
//     const [, num, , from, , to] = cur.split(' ')
//     return acc.map((row, i, arr) => i === Number(to) - 1
//       ? [...row, ...arr.at(Number(from) - 1).slice(-num).reverse()]
//       : i === Number(from) - 1
//         ? row.slice(0, row.length - Number(num)) : row)
//   }, data.split('\n\n')[0]
//     .split('\n')
//     .reverse()
//     .slice(1)
//     .reduce((acc, cur) => acc.map((stack, index) => [...stack, cur[index * 4 + 1]].filter((x) => x !== ' ')), Array(9).fill([]) as string[][])
//   ).reduce((acc, cur) => acc + cur.at(-1), '')

// one line
const result = data.split('\n\n')[1].split('\n').reduce((acc, cur) => acc.map((row, i, arr) => i === Number(cur.split(' ')[5]) - 1 ? [...row, ...arr.at(Number(cur.split(' ')[3]) - 1).slice(-cur.split(' ')[1]).reverse()] : i === Number(cur.split(' ')[3]) - 1 ? row.slice(0, row.length - Number(cur.split(' ')[1])) : row), data.split('\n\n')[0].split('\n').reverse().slice(1).reduce((acc, cur) => acc.map((stack, index) => [...stack, cur[index * 4 + 1]].filter((x) => x !== ' ')), Array(9).fill([]) as string[][])).reduce((acc, cur) => acc + cur.at(-1), '')

const result2 = data.split('\n\n')[1].split('\n').reduce((acc, cur) => acc.map((row, i, arr) => i === Number(cur.split(' ')[5]) - 1 ? [...row, ...arr.at(Number(cur.split(' ')[3]) - 1).slice(-cur.split(' ')[1])] : i === Number(cur.split(' ')[3]) - 1 ? row.slice(0, row.length - Number(cur.split(' ')[1])) : row), data.split('\n\n')[0].split('\n').reverse().slice(1).reduce((acc, cur) => acc.map((stack, index) => [...stack, cur[index * 4 + 1]].filter((x) => x !== ' ')), Array(9).fill([]) as string[][])).reduce((acc, cur) => acc + cur.at(-1), '')

console.log(result)
console.log(result2)
