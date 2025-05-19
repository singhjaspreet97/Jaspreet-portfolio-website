import {
  javascript,
  python,
  express,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  servicenow,
  oracle,
  materialUI,
  git,
  MUN,
  TCS,
  mathflix,
  medisync,
  ski,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Software Developer",
  },
  {
    title: "Techno-Functional Consultant",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Systems Engineer",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ExpressJS",
    icon: express,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PL/SQL",
    icon: oracle,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Servicenow",
    icon: servicenow,
  },
  {
    name: "MaterialUI",
    icon: materialUI,
  },
];

const experiences = [
  {
    title: "Full Stack Software Developer",
    company_name: "DIAG Labs – Memorial University of Newfoundland",
    icon: MUN,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "I led the development of Mathflix, a full-stack educational quiz and data tracking platform with web and mobile components to track teenager streaming behavior and promote mathematical fluency.",
      "Designed and implemented a smart App Blocker system: users are allowed a fixed amount of streaming time per quiz level; once the limit is reached, access to selected apps is blocked until the quiz is completed.", 
      "Built and deployed the production server at Live Dashboard using NodeJS, ExpressJS, MongoDB Atlas, and React Native for the mobile interface and included real-time data tracking, analytics, and high availability across devices.",
      "Implemented Nginx as a reverse proxy and PM2 for runtime process management in a production environment.",
      "Developed a secure token-based quiz access system via these Quiz links.",
    ],
  },
  {
    title: "Systems Engineer – Techno-Functional Analyst",
    company_name: "Tata Consultancy Services",
    icon: TCS,
    iconBg: "#E6DEDD",
    date: "September 2021 - August 2023",
    points: [
      "Managed end-to-end IT support for Oracle Apps eBS in SCM and MFG domains, resolving 400+ client issues.",
      "Managed and resolved tickets using ServiceNow for managing tickets (P1–P4), case management, change requests, and problem tickets. Provided critical bug fixes ensuring SLA compliance and timely resolution of client issues.",
      "Designed and optimized SQL queries and supported process modules Accounting-to-Cash, Procure-To-Pay, Order-To-Cash (PO, OM, GL, AP, AR), contributing to streamlining business workflow and ensuring SLA compliance.", 
      "Part of Oracle Upgrade & Data Integration teams, securing the 'Best Team of the Year' award." ,
      "Conducted regression testing, UAT, and performance tuning, ensuring stability and enhancing system reliability.",
      "Created and updated knowledge documents and Process Improvements to streamline technical issues",
      "Effectively communicated technical issues/solutions to cross-functional teams, reducing resolution time by 15%, and conducted knowledge transfers (KTs) to onboard team members efficiently"
    ],
  },
  {
    title: "Systems Engineer - Web Developer",
    company_name: "Tata Consultancy Services",
    icon: TCS,
    iconBg: "#E6DEDD",
    date: "September 2019 - August 2021",
    points: [
      "Developed front-end features for Oracle ATG eCommerce teams (SCM and MFG domain) using JavaScript, ReactJS and UI/UX designs using HTML, CSS, mateuial-UI improving user experience and navigation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Performed rigorous System testings, Unit testings, UAT, and performance tuning over time and resolved 100+ JIRA tickets."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "You had been all rounder who has helped team in times of crisis specially in Technical, OTC and ATC area. I do not recall any incident where you would have said NO to any challenge we had put infront of you. Keep up the momentum and spirit.",
    name: "Surabhi Kalra",
    designation: "AMS Team Project Manager",
    company: "Tata Consultancy Services",
  },
  {
    testimonial:
      "Good work and just continue the good work you are doing for Mathflix finish it and deliver a quality product @singhjaspreet97",
    name: "Dr. Karteek popuri",
    designation: "Assitant Professor Computer Science",
    company: "MUN - DIAG Labs",
  },
  {
    testimonial:
      "He is wonderful to work with, and has exceptional expertise in leadership. He is dedicated, and very capable of adapting to new working environments. He is not only a reliable person but also an incredible asset to any team",
    name: "Deepanshu Goyal",
    designation: "Systems Engineer",
    company: "Tata Consultancy Services",
  },
];

const projects = [
  {
    name: "Mathflix – Educational Quiz & App Blocking System",
    description:
      "Developed a responsive learning platform with both web and mobile interfaces using Node.js, Express, MongoDB Atlas, and React Native. The system monitors user streaming activity and requires completion of math quizzes before allowing access to certain apps. Created a real-time tracking and analytics module to monitor usage behavior and link it with quiz progression, helping promote healthier screen habits.",
    tags: [
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "React-native",
        color: "white-text-gradient",
      },
    ],
    image: mathflix,
    source_code_link: "https://mathflix.from-ca.com",
  },
  {
    name: "MediSync",
    description:
      "Developed MediSync, a comprehensive healthcare management platform as part of my capstone project at Memorial University, facilitating secure patient record management, optimized appointment scheduling, and advanced analytics for doctors and administrators. Integrated OpenAI's API to build an AI-powered Symptom Checker, providing real-time health insights and doctor recommendations based on NLP-driven text analysis.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Artificial Intelligence",
        color: "pink-text-gradient",
      },
    ],
    image: medisync,
    source_code_link: "https://github.com/",
  },
  {
    name: "Skier – Routing Application",
    description:
      "It is a Web-Based Geospatial Navigation System using Dijkstra’s algorithm . Developed a dynamic ski resort navigation app that provides skiers with personalized route recommendations based on preferences such as slope difficulty, scenic value, and distance. Key features include real-time navigation, service place finder, and profile management. Collaborated on designing a responsive user interface, integrating multiple use cases, and using innovative ways to develop backend logic to ensure efficient and accurate route calculations",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: ski,
    source_code_link: "https://github.com/Harsual/Skier-Routing-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
