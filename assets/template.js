let fields = {
  position: null,
  companyName: null,
  companyAddress1: null,
  companyAddress2: null,
};

const template = `
[Application Date-dd month year]

 Jonathan Acciarito
 100 Rock Haven Road, Apt Q101
 Carrboro, NC 27510

 Hiring Manager
 ${fields.position}
 ${fields.companyName}
 ${fields.companyAddress1}
 ${fields.companyAddress2}

 Dear Hiring Manager,
 
 My name is Jonathan Acciarito and I am a recent graduate of the Full-Stack Coding Bootcamp at
 the University of North Carolina at Chapel Hill. I have a certificate in MERN stack application
 development with a robust foundation in JavaScript and TypeScript. I also have experience in
 building responsive and accessible front-ends with React; designing complex yet sensible and
 scalable back-ends with Express and Node.js; utilizing databases, such as MySQL and
 MongoDB; and mediating between the three technologies with both RESTful and GraphQL
 API’s. After seeing your [POSITION] advertisement on [PLATFORM], I am excited to apply my
 skills with [skill1], [skill2], and [skill3] to improve the [SOMETHING FROM MISSION
 STATEMENT] of your company.

 Through prior work experience as an Assistant General Manager at Marco’s Pizza, LLC, I have
 developed key skills in effective communication, service, and leadership. In this role, I have
 managed a team of employees, ensuring efficient operations and exceptional customer
 service. I also trained new hires, conducted performance reviews, and resolved customer issues.
 These skills aided me throughout my time in Bootcamp, where I excelled in group projects,
 effectively communicating technical concepts to team members and clients. Additionally, I
 demonstrated strong problem-solving abilities, debugging complex issues and offering
 innovative solutions. My transferable skills include project management, attention to detail, and
 the ability to work well under pressure.

 [In this paragraph talk about the company and its mission. Why you want to join, and how you
 would fit into its mission. 3-4 sentences.]

 Thank you for your consideration. If you have any additional questions, please feel free to
 contact me by telephone at (804) 971-1162 or via email at jonathanacciarito@gmail.com. I look
 forward to hearing from you soon.

 Best Regards,

 Jonathan A. Acciarito
`;

export default template;