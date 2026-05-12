// ─────────────────────────────────────────────────────────────
//  PROJECTS — edit this file to add / remove projects
//
//  Each project is an object with these fields:
//    title   — project name (required)
//    desc    — description of what it does (required)
//    stack   — array of technologies (required)
//    github  — GitHub repo URL (or "" to hide)
//    live    — live URL (or "" if none)
//
//  To add a project, copy a block and edit:
//    {
//      title: "My new project",
//      desc: "What it does...",
//      stack: ["Java", "Spring", "MySQL"],
//      github: "https://github.com/jusgaro/repo",
//      live: ""
//    },
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    title: "Vaulty",
    desc: "Desktop password manager built in Java with JavaFX. Supports registration, login and secure password storage encrypted with AES. Each user has their own encrypted password file.",
    stack: ["Java", "JavaFX", "AES", "SHA-256"],
    github: "https://github.com/jusgaro/Vaulty",
    live: ""
  },
  {
    title: "Portfolio",
    desc: "Personal portfolio — this website. Designed with a focus on clean technical aesthetics and simple content management.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/jusgaro/portfolio",
    live: ""
  },
  {
    title: "Horský Raj",
    desc: "Website for a fictional mountain guesthouse, built as a semester project with a focus on SEO best practices.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "",
    live: "https://jusgaro.github.io/horskyraj/"
  },
  // ← add next project here
];
