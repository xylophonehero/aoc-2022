import * as fs from 'fs'
import path from 'path'

const [, , exercise] = process.argv;

const readDataFile = () => fs.readFileSync(path.resolve(__dirname, `../data/${exercise}.txt`), 'utf-8')

export default readDataFile