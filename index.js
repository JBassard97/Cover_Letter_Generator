import inquirer from "inquirer";
import colors from "jbassard97nodecolors";
import { generateTemplate, fields } from "./assets/template.js";

const colorLog = (text) => console.log(colors.CSSkeywordText(text, "hotpink"))
const template = generateTemplate();

colorLog(template);
