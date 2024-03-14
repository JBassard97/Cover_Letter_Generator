import inquirer from "inquirer";
// import questions from "../assets/questions.json" assert { type: "json" };
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// Obtain the current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the path to the JSON file relative to the current directory
const questionsFilePath = path.resolve(__dirname, "../assets/questions.json");

// Read the JSON file synchronously
const questionsData = fs.readFileSync(questionsFilePath, "utf8");

// Parse the JSON data
const questions = JSON.parse(questionsData);

async function askQuestions() {
  try {
    const answers = await inquirer.prompt(questions);
    return answers;
  } catch (error) {
    console.error("Error:\n", error);
  }
}

export { askQuestions };
