import { currentFormattedDate } from "../utils/formattedDate.js";

let fields = {
  position: null,
  companyName: null,
  companyAddress1: null,
  companyAddress2: null,
  hiringPlatform: null,
  skill1: null,
  skill2: null,
  skill3: null,
  missionGoal: null,
  whyJoinParagraph: null,
};

let generateTemplate = () => {
  let companyAddress = `${
    fields.companyAddress1.length > 2 ? `${fields.companyAddress1}\n` : ""
  }${fields.companyAddress2 || ""}`.trim();

  return `
${currentFormattedDate()} 

${process.env.NAME}
${process.env.ADDRESS}
${process.env.CITY}

Hiring Manager
${fields.position}
${fields.companyName}
${companyAddress ? `${companyAddress}` : ""}

Dear Hiring Manager,
 
My name is ${process.env.NAME} and I am a recent graduate of the Full-Stack Coding Bootcamp at the University of North Carolina at Chapel Hill. I have a certificate in MERN stack application development with a robust foundation in JavaScript and TypeScript. I also have experience in building responsive and accessible front-ends with React; designing complex yet sensible and scalable back-ends with Express and Node.js; utilizing databases, such as MySQL and MongoDB; and mediating between the three technologies with both RESTful and GraphQL API’s. After seeing your ${fields.position} advertisement on ${fields.hiringPlatform}, I am excited to apply my skills with ${fields.skill1}, ${fields.skill2}, and ${fields.skill3} to improve the ${fields.missionGoal} of your company.

Through prior work experience as an Assistant General Manager at Marco’s Pizza, LLC, I have developed key skills in effective communication, service, and leadership. In this role, I have managed a team of employees, ensuring efficient operations and exceptional customer service. I also trained new hires, conducted performance reviews, and resolved customer issues. These skills aided me throughout my time in Bootcamp, where I excelled in group projects, effectively communicating technical concepts to team members and clients. Additionally, I demonstrated strong problem-solving abilities, debugging complex issues and offering innovative solutions. My transferable skills include project management, attention to detail, and the ability to work well under pressure.

${
   fields.whyJoinParagraph /*[In this paragraph talk about the company and its mission. Why you want to join, and how you
 would fit into its mission. 3-4 sentences.]*/
}

Thank you for your consideration. If you have any additional questions, please feel free to contact me by telephone at ${process.env.PHONE} or via email at ${process.env.EMAIL}. I look forward to hearing from you soon.

Best Regards,

${process.env.REGARDS}
`;
};

export { fields, generateTemplate };
