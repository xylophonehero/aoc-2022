import path from "path";
import { execSync } from 'child_process'
import fs from 'fs'
import fg from 'fast-glob'

const srcPath = path.resolve(__dirname, "./solutions");

const [, , exercise] = process.argv;

if (!exercise) {
  console.log("Please specify an exercise");
  process.exit(1);
}

const allExercises = fg.sync(
  path.join(srcPath, "**", "**.ts").replace(/\\/g, "/"),
);


const exerciseFile = allExercises.find((e) => {
  const base = path.parse(e).base;
  return base.startsWith(exercise)
});

if (!exerciseFile) {
  console.log(`Exercise ${exercise} not found`);
  process.exit(1);
}

execSync(`npx ts-node ${exerciseFile} ${exercise}`, {
  stdio: 'inherit'
})
