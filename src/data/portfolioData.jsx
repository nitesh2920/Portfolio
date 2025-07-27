import {
  FaGithub,
  FaLinkedin,
  FaBootstrap,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaCodepen
} from "react-icons/fa"; 
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiPostman,
  SiReact,
  SiBootstrap,
  SiLeetcode
} from "react-icons/si"; // More specific tech icons

import { RiNextjsFill } from "react-icons/ri";

export const personalInfo = {
  name: "Nitesh Tiwari",
  title: "Full Stack Developer",
  email: "niteshtiwari0234@gmail.com",
  linkedin: "https://linkedin.com/in/niteshtiwari29",
  github: "https://github.com/nitesh2920",
  resumeLink: "/NiteshTiwariResume.pdf", // Make sure your resume is in public/
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "Arka Jain University ",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "June 2023 – Present",
    score: "CGPA: 9.3/10"
  },
  {
    institution: "Arka Jain University",
    degree: "Diploma in CSE ",
    duration: "June 2020 - June 2023",
    score: "CGPA: 9.3/10"
  },
  {
    institution: "Ramkrishna Mission English School",
    degree: "Class 10th ICSE",
    duration: "April 2019 - May 2020",
    score: "72%"
  }
];

export const projects = [
{
  title: "Saas landing page",
    tech: ["NextJS", "tailwindcss", "typescript","framer-motion"],
    description:
      " SaaS Landing Page is a modern, responsive landing page template built with Next.js, TypeScript, and Tailwind CSS. It features a clean design, smooth animations using Framer Motion, and is optimized for performance and SEO.",
    date: "July 2025",
    githubLink: "https://github.com/nitesh2920/Saas-Landing-Page", // Replace with actual link
    liveLink: "https://fancy-landing-page.vercel.app/", // Replace with actual link if available
    category: "Frontend",
    icon: <RiNextjsFill size={24} className="text-accent-1" />

},
{
  title: "AI Article Summarizer",
    tech: ["NextJS", "tailwindcss", "typescript"],
    description:
    "AI Article Summarizer is a web application that uses AI to summarize long-form articles from URLs. Users can paste any article link and receive a concise, clean summary in seconds.",
    date: "July 2025",
    githubLink: "https://github.com/nitesh2920/AI-Article-Summarizer", // Replace with actual link
    liveLink: "https://ai-article-summarize.vercel.app", // Replace with actual link if available
    category: "Frontend",
    icon: <RiNextjsFill size={24} className="text-accent-1" />

},



  {
    title: "Snaptopdf",
    tech: ["React JS", "tailwindcss", "typescript"],
    description:
      "SnapToPdf is a mini web application built with React.js, TypeScript, and TailwindCSS that allows users to convert images to PDF quickly and easily.",
    date: "March 2025",
    githubLink: "https://github.com/nitesh2920/SnapToPdf", // Replace with actual link
    liveLink: "https://snaptopdf.vercel.app/", // Replace with actual link if available
    category: "Frontend",
    icon: <FaReact size={24} className="text-accent-1" />
  },
  {
    title: "minilyy",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description:
      "URL Shortener is a backend-focused mini project that generates short, shareable links from long URLs. It includes features like unique link generation, redirection handling, and basic analytics using a RESTful API.",
    date: "November 2024",
    githubLink: "https://github.com/nitesh2920/minilyy", // Replace with actual link
    liveLink: "https://minilynk.vercel.app/",
    category: "Backend",
    icon: <FaDatabase size={24} className="text-accent-1" />
  },
  {
    title: "QuoteGenie",
    tech: ["React JS", "Node.js", "Express.js", "AI"],
    description:
      "Quote Genie is a mini project built with CopilotKit that lets users generate inspirational quotes, share them on social media, and delete saved quotes. It offers a simple and interactive interface for quote management.",
    date: "Nov 2024 – Present",
    githubLink: "https://github.com/nitesh2920/QuoteGenie",
    liveLink: "https://jarvis-quote.vercel.app/",
    category: "Frontend",
    icon: <FaReact size={24} className="text-accent-1" />
  },
  {
    title: "Portfolio Generator",
    tech: ["React.js", "Redux"],
    description:
      "Helps users effortlessly present their skills, projects, and experience in a professional format, saving hours of manual portfolio setup",
    date: "Jun 2024",
    githubLink: "https://github.com/nitesh2920/PortfolioGenerator", // Replace with actual link
    liveLink: null,
    category: "Frontend",
    icon: <FaReact size={24} className="text-accent-1" />
  }
];

export const skills = {
  // programmingLanguages: [
  //   { name: "C/C++", icon: <SiCplusplus /> },
  //   { name: "JavaScript", icon: <SiJavascript /> },
  //   { name: "TypeScript", icon: <SiTypescript /> },
  //   { name: "Python", icon: <SiPython /> }
  // ],

  // frontendDevelopment: [
  //   { name: "HTML5", icon: <FaHtml5 /> },
  //   { name: "CSS3", icon: <FaCss3Alt /> },
  //   {name: "React JS", icon: <SiReact /> },
  //   { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  //   { name: "Bootstrap", icon: <SiBootstrap /> }
  // ],

  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "SQL", icon: <FaDatabase /> }
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Next JS", icon: <RiNextjsFill /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> }
  ],

  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Postman", icon: <SiPostman /> }
  ],

  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Event Hosting",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Technical Executive",
    organization: "Computer Society of India, AJU Student Branch",
    duration: "Aug 2023 – Present",
    points: [
      "Organized 5+ workshops, coding competions, and seminar to enhance student learning and engagement."
    ]
  },
  {
    role: "AJU Gold Medalist",
    organization: "Arka Jain University",
    duration: "Jun 2023",
    points: [
      "      Achieved the top position in academic performance across all students in the batch."
    ]
  }
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> }
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
  // leetcode: { url: "https://leetcode.com/nitesh2920/", icon: <SiLeetcode size={24} /> },
  // codepen: { url: "https://codepen.io/nitesh2920", icon: <FaCodepen size={24} /> }
};
