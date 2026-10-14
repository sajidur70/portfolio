// ===== ALL MY PORTFOLIO CONTENT =====
// Components read from this file. To update my site, I edit this file.

// ----- Personal info -----
export const personal = {
  name: "Sajidur Rahman",
  title: "Full Stack Developer",
  intro:
    "CSE graduate building full-stack web apps with MongoDB, Express, React and Node.js. I use AI tools to code faster and debug smarter, and I understand every line I ship.",
  location: "Jessore, Bangladesh",
  // Shown as a green badge in the Hero. Set to "" to hide it.
  availability: "Open to junior full-stack roles",
  email: "sajidurrahmansahib@gmail.com",
  photo: "/profile.jpg", // I add this image in Step 16
  resumeUrl: "", // Empty = the Resume button stays hidden. Later: "/resume.pdf"
  siteUrl: "https://sajidur-rahman.vercel.app", // My live link
};

// ----- Quick facts in the Hero -----
// Only real facts I can prove (recruiters may check!).
// icon: "education" | "code" | "location"
export const highlights = [
  { icon: "education", text: "CSE Graduate" },
  { icon: "code", text: "500+ LeetCode problems solved" },
  { icon: "location", text: personal.location },
];

// ----- Social links -----
// An empty url ("") is hidden on the site. I fill it in when I have it.
export const socials = [
  { name: "GitHub", url: "https://github.com/sajidur70" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sajidur-rahman-sajidur319370/",
  },
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
