// ===== ALL MY PORTFOLIO CONTENT =====
// Components read from this file. To update my site, I edit this file.

// ----- Personal info -----
export const personal = {
  name: "Sajidur Rahman",
  title: "MERN Stack Developer",
  intro:
    "I build fast, responsive web apps with MongoDB, Express, React and Node.js.",
  location: "Bangladesh",
  email: "sajidurrahmansahib@gmail.com",
  photo: "/profile.jpg", // I add this image in Step 15
  resumeUrl: "", // Empty = the Resume button stays hidden. Later: "/resume.pdf"
  siteUrl: "https://sajidur-rahman.vercel.app", // My live link
};

// ----- Social links -----
// An empty url ("") is hidden on the site. I fill it in when I have it.
export const socials = [
  { name: "GitHub", url: "https://github.com/sajidur70" },
  { name: "LinkedIn", url: "" },
];

// ----- About me -----
export const about = {
  paragraphs: [
    "I'm a junior MERN stack developer from Bangladesh who enjoys turning ideas into real web apps.",
    "I like solving problems, and I practise on Codeforces to sharpen my logic.",
    "Right now I'm building full-stack projects and I'm looking for my first role as a web developer.",
  ],
};

// ----- Skills -----
// Rule: only list skills I can explain in an interview.
export const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
];

// ----- Projects -----
// Empty for now → the Projects section shows "Currently building".
// When a project is ready, add an object here (template in docs/PROJECT_GUIDE.md, Section 12.1).
export const projects = [];
