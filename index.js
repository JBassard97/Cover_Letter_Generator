import colors from "jbassard97nodecolors";
import { generateTemplate, fields } from "./assets/template.js";
import { askQuestions } from "./utils/askQuestions.js";

const colorLog = (text) => console.log(colors.CSSkeywordText(text, "aqua"));
const template = generateTemplate();

async function main() {
  try {
    const answers = await askQuestions();
      colorLog(answers);
  } catch (error) {
    console.error("Error:\n", error);
  }
}

main();
