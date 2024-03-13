import inquirer from "inquirer";
import questions from "../assets/questions.json" assert { type: "json" };

console.log(questions);

async function askQuestions() {
  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
  } catch (error) {
    console.error("Error:\n", error);
  }
}

askQuestions();
