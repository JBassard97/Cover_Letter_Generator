import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import colors from "jbassard97nodecolors";
import { generateTemplate, fields } from "./assets/template.js";
import { askQuestions } from "./utils/askQuestions.js";
import fs from "fs";
import PDFDocument from "pdfkit";

const colorLog = (text) =>
  console.log(colors.CSSkeywordText(text, "mediumslateblue"));

async function main() {
  try {
    console.log("Starting main function."); // Debug logging

    const answers = await askQuestions();
    console.log("Answers received:", answers); // Debug logging

    Object.assign(fields, answers);
    console.log("Fields updated:", fields); // Debug logging

    // Generate cover letter using the filled fields
    const text = await generateTemplate();
    colorLog(text);

    const doc = new PDFDocument();
    const stream = fs.createWriteStream("J_Acciarito_Cover_Letter.pdf");
    doc.pipe(stream);
    const paragraphs = text.split("\n\n");
    paragraphs.forEach((paragraph) => {
      doc.text(paragraph);
      doc.moveDown(0.5);
    });
    doc.end();
    stream.on("finish", () => {
      console.log("pdf created successfully.");
    });
  } catch (error) {
    console.error("Error:\n", error);
  }
}

main();
