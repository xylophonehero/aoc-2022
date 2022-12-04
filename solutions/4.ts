import readDataFile from "../utils/readFile";

const data = readDataFile()

// One line
const result = data.split('\n').filter((cur) => (Number(cur.split(',')[0].split('-')[0]) >= Number(cur.split(',')[1].split('-')[0]) && Number(cur.split(',')[0].split('-')[1]) <= Number(cur.split(',')[1].split('-')[1])) || (Number(cur.split(',')[0].split('-')[0]) <= Number(cur.split(',')[1].split('-')[0]) && Number(cur.split(',')[0].split('-')[1]) >= Number(cur.split(',')[1].split('-')[1]))).length

const result2 = data.split('\n').filter((cur) => !(Number(cur.split(',')[0].split('-')[0]) > Number(cur.split(',')[1].split('-')[1])) && !(Number(cur.split(',')[0].split('-')[1]) < Number(cur.split(',')[1].split('-')[0]))).length

console.log(result)
console.group(result2)