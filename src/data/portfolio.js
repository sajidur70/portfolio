// ===== ALL MY PORTFOLIO CONTENT =====
// Components read from this file. To update my site, I edit this file.

// ----- Personal info -----
export const personal = {
  name: "Sajidur Rahman",
  title: "Full Stack Developer",
  intro:
    "CSE graduate building full-stack web apps with MongoDB, Express, React and Node.js. I use AI tools to code faster and debug smarter, and I understand every line I ship.",
  location: "Jessore, Khulna, Bangladesh",
  // Shown as a green badge in the Hero. Set to "" to hide it.
  availability: "Open to junior full-stack roles",
  email: "sajidurrahmansahib@gmail.com",
  phone: "+880 1521-319370", // Shown in About. Set to "" to hide it
  photo: "/profile.png", // My photo in public/profile.png (Hero + About)
  resumeUrl: "", // Empty = the Resume button stays hidden. Later: "/resume.pdf"
  siteUrl: "https://sajidur-rahman.vercel.app", // My live link
  // 3D scene in the Hero: my Spline ".splinecode" URL (Step 15).
  // Empty = show the "SR" circle instead.
  heroScene: "",
};

// ----- Quick facts in the Hero -----
// Only real facts I can prove (recruiters may check!).
// icon: "education" | "code" | "location"
export const highlights = [
  { icon: "education", text: "B.Sc. in CSE, East West University" },
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
  // My story: who I am → what I build → how I work → what I'm learning
  paragraphs: [
    "I'm a full-stack developer from Jessore, Bangladesh, with a B.Sc. in Computer Science and Engineering from East West University (2024). I love turning ideas into working web apps.",
    "I build with the MERN stack: React on the front end, Node.js and Express for APIs, and MongoDB for data. Solving 500+ LeetCode problems taught me to break big problems into small, clear steps.",
    "I use AI tools to code faster, debug smarter and learn quickly, and I make sure I understand every line I ship. Right now I'm building full-stack projects and looking for my first developer role.",
  ],
  motto:
    "Think BIG, Solve Small: I explore every possibility, then ship the simplest solution that works.",
  learning: ["System Design", "Databases", "Deployment", "Caching"],
  // The "quick info" card. Only true facts!
  // detail = a small second line. href = makes the value a link.
  facts: [
    {
      label: "Education",
      value: "B.Sc. in Computer Science & Engineering",
      detail: "East West University, Dhaka · 2018 – 2024",
    },
    { label: "Location", value: personal.location },
    { label: "Focus", value: "MERN Stack, Full Stack Web Apps" },
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      label: "Phone",
      value: personal.phone,
      // tel: link opens the phone app. Remove spaces and dashes for the link
      href: `tel:${personal.phone.replace(/[\s-]/g, "")}`,
    },
  ].filter((fact) => fact.value), // hide facts with an empty value
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
