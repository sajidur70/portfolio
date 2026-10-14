# Portfolio Project Guide

> My personal guide for building, deploying and updating my developer portfolio.
> When I come back to this project months later, this file explains **what** I built, **why**, and **how** to change it.

| | |
|---|---|
| **Owner** | Sajidur Rahman |
| **Role** | Junior MERN Stack Developer |
| **Started** | October 2026 |
| **Live site** | https://sajidur-rahman.vercel.app |
| **GitHub repo** | https://github.com/sajidur70/portfolio |
| **Status** | 🚧 In progress: portfolio first, then 3 MERN projects, then resume |

---

## Table of Contents

1. [Project Goal](#1-project-goal)
2. [Requirements](#2-requirements)
3. [Tech Stack (and why)](#3-tech-stack-and-why)
4. [Accounts and Tools I Need](#4-accounts-and-tools-i-need)
5. [Basic Setup (step by step)](#5-basic-setup-step-by-step)
6. [Git Workflow and Commands](#6-git-workflow-and-commands)
7. [Folder Structure](#7-folder-structure)
8. [The Data File (`portfolio.js`)](#8-the-data-file-portfoliojs)
9. [Components: Features and Description](#9-components-features-and-description)
10. [Build Roadmap (7 days)](#10-build-roadmap-7-days)
11. [Deploy on Vercel](#11-deploy-on-vercel)
12. [Future Updates: Projects, Resume, Domain](#12-future-updates-projects-resume-domain)
13. [Performance, SEO and Accessibility Checklist](#13-performance-seo-and-accessibility-checklist)
14. [Troubleshooting](#14-troubleshooting)
15. [How to Explain This Project in an Interview](#15-how-to-explain-this-project-in-an-interview)
16. [Progress Log](#16-progress-log)

---

## 1. Project Goal

Build a **professional, fast, mobile-friendly portfolio website** that:

- Shows who I am and what I can do as a MERN stack developer.
- Has a **3D interactive hero** and **smooth animations** so it stands out.
- Is easy to update: adding a project or my resume should take **5 minutes** and only touch **one data file**.
- Is **free** to host and deploys automatically when I push to GitHub.

**Important rule for myself:** The portfolio is the *frame*. My **MERN projects** are the *picture*.
Don't spend more than ~1 week on the portfolio. After that, focus on building projects.

---

## 2. Requirements

### 2.1 Functional requirements (what the site must DO)

| # | Requirement | Section |
|---|---|---|
| F1 | Sticky navbar with links that smooth-scroll to each section | Navbar |
| F2 | Mobile menu (hamburger) on small screens | Navbar |
| F3 | Hero with name, title, short intro and 2 buttons (View Projects, Resume) | Hero |
| F4 | Interactive 3D scene in the hero (moves with the mouse) | Hero |
| F5 | About section with short bio and photo/avatar | About |
| F6 | Skills grouped by category (Frontend, Backend, Database, Tools) with icons | Skills |
| F7 | Projects section that shows cards from the data file | Projects |
| F8 | If there are no projects yet, show a "Currently building" message | Projects |
| F9 | Each project card: image, title, description, tech tags, Live link, GitHub link | ProjectCard |
| F10 | Contact form (name, email, message) that sends an email to me | Contact |
| F11 | Social links (GitHub, LinkedIn, Email) | Contact / Footer |
| F12 | Resume button that opens the PDF. Hidden or disabled until the resume is added | Hero / Navbar |
| F13 | Scroll-in animations for sections | All sections |
| F14 | Light / dark mode toggle that remembers the choice (first visit follows the computer setting) | Navbar |

### 2.2 Non-functional requirements (how the site must BE)

| # | Requirement | Target |
|---|---|---|
| N1 | Responsive | Works from 360px (phone) to 1920px (desktop) |
| N2 | Fast | Lighthouse Performance ≥ 90 on desktop, ≥ 80 on mobile |
| N3 | SEO | Page title, description, Open Graph image, favicon |
| N4 | Accessible | Lighthouse Accessibility ≥ 90, alt text on images, keyboard navigable |
| N5 | Easy to update | All content in `src/data/portfolio.js` |
| N6 | Free | $0 hosting (Vercel Hobby plan) |
| N7 | Auto deploy | Push to `main` → live in ~1 minute |
| N8 | Respect "reduced motion" | Turn off heavy animation if the user's OS setting asks for it |

### 2.3 Out of scope (NOT doing now)

- Blog
- Backend / database for the portfolio itself (not needed; the contact form uses a free service)
- Admin panel
- Multiple languages

---

## 3. Tech Stack (and why)

| Purpose | Tool | Why I chose it |
|---|---|---|
| Framework | **Next.js** (App Router, JavaScript) | React-based, fast, good SEO, used by many companies |
| Styling | **Tailwind CSS** (v4) | Fast styling with classes, I already know it |
| Animation | **Motion** (`motion` package, formerly Framer Motion) | Simple scroll and hover animations in React |
| 3D | **Spline** (`@splinetool/react-spline`) | Design 3D in the browser, embed with 1 component. No 3D math needed |
| 3D (advanced, optional) | **React Three Fiber** + **Drei** | Full control with code. Learn later |
| Icons | **react-icons** | Free icons for tech logos and social links |
| Light / dark mode | **next-themes** | Adds `class="dark"` to `<html>`, remembers the choice, no flash on page load |
| Fonts | **next/font** | Loads Google Fonts fast, no layout shift |
| Contact form | **Web3Forms** | Free, no backend, sends form data to my email |
| Version control | **Git + GitHub** | Save history, show code to recruiters |
| Hosting | **Vercel** (Hobby, free) | Made by the Next.js team, auto-deploy from GitHub |

**Why not plain React (Vite)?** Next.js gives better SEO, image optimization and font loading for free, and it's popular in job listings.

**Why JavaScript, not TypeScript?** I'm still learning. I can convert to TypeScript later as a learning exercise.

---

## 4. Accounts and Tools I Need

### Installed on my computer
- [x] **Node.js** (v24): check with `node -v`
- [x] **npm** (v11): check with `npm -v`
- [x] **Git** (v2.54): check with `git --version`
- [x] **VS Code**

### Recommended VS Code extensions
- **Tailwind CSS IntelliSense**: autocompletes Tailwind classes
- **ES7+ React/Redux/React-Native snippets**: type `rafce` to make a component
- **Prettier**: auto-formats code
- **ESLint**: shows code mistakes

### Free accounts
- [ ] **GitHub**: https://github.com
- [ ] **Vercel**: https://vercel.com (sign up **with GitHub**)
- [ ] **Spline**: https://spline.design (for the 3D scene)
- [ ] **Web3Forms**: https://web3forms.com (enter my email to get an access key)

---

## 5. Basic Setup (step by step)

> Location: `C:\Users\sajid\OneDrive\Desktop\own-portfolio` (chosen 14 Oct 2026).
> The path says `OneDrive`, but OneDrive is removed from my computer (14 Oct 2026), so nothing syncs this folder.
> If I turn OneDrive on again, pause syncing before `npm install` (`node_modules` has thousands of files).
> My exact commands and results are logged in `docs/STEPS.md`.

### Step 1: Create the Next.js app

This folder already has `docs/` (this guide). `create-next-app` allows that.

```bash
cd C:\Users\sajid\OneDrive\Desktop\own-portfolio
npx create-next-app@latest . --js --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

The `.` means "create the project in this folder". The flags answer the setup questions for me
(JavaScript, Tailwind, ESLint, App Router, `src/` folder, `@/*` import alias, npm).
If it still asks something (e.g. React Compiler), answer **No** or press **Enter** for the default.

> If it says the folder has conflicting files: only `docs/` should be in the folder. Move any other file out, run the command again, then move it back.

### Step 2: Run it locally

```bash
npm run dev
```

Open http://localhost:3000. I should see the Next.js welcome page.
Stop the server with `Ctrl + C`.

### Step 3: Install extra packages

```bash
npm install motion react-icons @splinetool/react-spline
```

| Package | What it does |
|---|---|
| `motion` | Animations: `import { motion } from "motion/react"` |
| `react-icons` | Icons: `import { FaGithub } from "react-icons/fa"` |
| `@splinetool/react-spline` | Shows my Spline 3D scene |

### Step 4: Clean the starter files

- `src/app/page.js`: delete everything inside `<main>` and start fresh.
- `src/app/globals.css`: keep the `@import "tailwindcss";` line, remove the rest of the demo styles.
- `public/`: delete the demo SVGs (`next.svg`, `vercel.svg`, etc.).

### Step 5: Add smooth scrolling

In `src/app/globals.css`:

```css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

/* So the sticky navbar doesn't cover section titles */
section {
  scroll-margin-top: 80px;
}
```

### Step 6: Create the folders

```bash
mkdir src/components src/data
```

Now follow [Section 7](#7-folder-structure) for the files.

### Step 7: First commit + push + deploy

See [Section 6](#6-git-workflow-and-commands) and [Section 11](#11-deploy-on-vercel).
**Deploy on Day 1**, even if the site is empty. Then every push updates the live site.

---

## 6. Git Workflow and Commands

### 6.1 One-time setup (only once per computer)

```bash
git config --global user.name "Sajidur Rahman"
git config --global user.email "sajidurrahmansahib@gmail.com"
```

### 6.2 First push to GitHub (only once per project)

1. On github.com → **New repository** → name: `portfolio` → **Public** → **don't** add a README (I already have files).
2. In the terminal, inside the `portfolio` folder:

```bash
git init                         # start tracking this folder
git add .                        # stage all files
git commit -m "Initial commit"   # save a snapshot
git branch -M main               # name the branch "main"
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main          # upload; -u remembers "origin main" for next time
```

> Note: `create-next-app` may run `git init` for me already. If `git init` says "Reinitialized", that's fine.

### 6.3 Daily workflow (simple)

```bash
git status                          # see what changed
git add .                           # stage changes
git commit -m "Add hero section"    # save with a clear message
git push                            # upload → Vercel auto-deploys
```

### 6.4 Better workflow (branches, which is what teams do)

Use this when trying something risky (like a new 3D scene):

```bash
git checkout -b feature/hero-3d     # create + switch to a new branch
# ... write code ...
git add .
git commit -m "Add Spline 3D scene to hero"
git push -u origin feature/hero-3d  # Vercel makes a PREVIEW link for this branch
```

Then on GitHub: **Compare & pull request** → **Merge** → back in the terminal:

```bash
git checkout main
git pull                            # get the merged code
git branch -d feature/hero-3d       # delete the local branch
```

### 6.5 Good commit messages

| ✅ Good | ❌ Bad |
|---|---|
| `Add navbar with mobile menu` | `update` |
| `Fix contact form validation` | `fixed stuff` |
| `Add Task Manager project to data file` | `changes` |

Rule: start with a verb (**Add**, **Fix**, **Update**, **Remove**, **Refactor**) and say *what* changed.

### 6.6 Useful commands

| Command | What it does |
|---|---|
| `git log --oneline` | Short list of all commits |
| `git diff` | Show changes not yet staged |
| `git restore <file>` | Undo changes in a file (before `git add`) |
| `git restore --staged <file>` | Unstage a file (keep the changes) |
| `git pull` | Get the latest code from GitHub |
| `git branch` | List branches |
| `git remote -v` | Show the GitHub link |

---

## 7. Folder Structure

```
portfolio/
├── docs/
│   └── PROJECT_GUIDE.md        ← this file
├── public/
│   ├── resume.pdf              ← ADD LATER (see Section 12.2)
│   ├── profile.jpg             ← my photo / avatar
│   ├── og-image.png            ← preview image for social sharing (1200×630)
│   └── projects/               ← project screenshots (ADD LATER)
│       ├── project-1.png
│       ├── project-2.png
│       └── project-3.png
├── src/
│   ├── app/
│   │   ├── layout.js           ← fonts, SEO metadata, wraps every page
│   │   ├── page.js             ← puts all sections in order
│   │   ├── globals.css         ← Tailwind import + global styles
│   │   └── favicon.ico         ← tab icon
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroScene.jsx       ← the 3D part (client component)
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ui/
│   │       ├── SectionHeading.jsx
│   │       └── FadeIn.jsx      ← reusable scroll animation wrapper
│   └── data/
│       └── portfolio.js        ← ALL my content lives here
├── .env.local                  ← secret keys (NEVER pushed to GitHub)
├── .gitignore
├── package.json
└── README.md                   ← public description for recruiters
```

### Server vs Client components (important Next.js idea)

- By default, components in the `app/` folder are **Server Components**. They render on the server and send plain HTML, which is fast.
- If a component uses **state (`useState`), effects (`useEffect`), event handlers (`onClick`), browser APIs (`window`), Motion, or Spline**, it must be a **Client Component**.
  Add this as the **first line** of the file:

```js
"use client";
```

| Component | Type | Why |
|---|---|---|
| Navbar | Client | Mobile menu uses `useState` |
| Hero | Server | Only text + buttons (it imports `HeroScene`) |
| HeroScene | Client | Spline needs the browser |
| About / Skills / Projects | Server | Just display data (animations come from `FadeIn`) |
| FadeIn | Client | Uses Motion |
| Contact | Client | Form state + submit handler |
| Footer | Server | Just links |

---

## 8. The Data File (`portfolio.js`)

**Rule:** Components never contain my personal text. They read from this file.
To update the site, I usually only edit **this one file**.

`src/data/portfolio.js`:

```js
// ===== PERSONAL INFO =====
export const personal = {
  name: "Sajidur Rahman",
  title: "MERN Stack Developer",
  intro:
    "I build fast, responsive web apps with MongoDB, Express, React and Node.js.",
  location: "Bangladesh",
  email: "sajidurrahmansahib@gmail.com",
  photo: "/profile.jpg",
  // Leave as "" until the resume is ready. The button hides automatically.
  resumeUrl: "",
};

// ===== SOCIAL LINKS =====
export const socials = [
  { name: "GitHub", url: "https://github.com/<your-username>" },
  { name: "LinkedIn", url: "https://linkedin.com/in/<your-username>" },
];

// ===== ABOUT =====
export const about = {
  paragraphs: [
    "I'm a junior MERN stack developer who enjoys turning ideas into real web apps.",
    "Right now I'm building full-stack projects and learning best practices.",
  ],
};

// ===== SKILLS =====
export const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
  { category: "Database", items: ["MongoDB", "Mongoose"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel"] },
];

// ===== PROJECTS =====
// Empty for now → the Projects section shows "Currently building".
// To add a project, copy the template in Section 12.1 of docs/PROJECT_GUIDE.md.
export const projects = [];
```

---

## 9. Components: Features and Description

### 9.1 `layout.js`: Root layout

**What it is:** The wrapper around every page. Runs once for the whole site.

**Features:**
- Loads the font with `next/font/google` (e.g. `Inter` or `Poppins`). No layout shift, no extra request to Google.
- Exports `metadata` for SEO: title, description, Open Graph image.
- Sets `<html lang="en">` and the background/text colors on `<body>`.

**Example:**

```js
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sajidur Rahman | MERN Stack Developer",
  description: "Portfolio of Sajidur Rahman, a junior MERN stack developer.",
  openGraph: { images: ["/og-image.png"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
```

---

### 9.2 `page.js`: Home page

**What it is:** The single page of the site. It only puts sections in order.

```js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

**Section IDs** (used by navbar links): `#home`, `#about`, `#skills`, `#projects`, `#contact`.

---

### 9.3 `Navbar.jsx` (Client)

**What it does:** Navigation bar that stays at the top.

**Features:**
- `sticky top-0` or `fixed` with a blurred see-through background (`backdrop-blur bg-slate-950/70`).
- Logo / my initials on the left, links on the right.
- Links use `href="#about"` and the browser smooth-scrolls (thanks to `scroll-behavior: smooth`).
- **Mobile (< 768px):** hamburger icon → opens a menu. Uses `const [open, setOpen] = useState(false)`.
- Closes the mobile menu when a link is clicked.
- Resume button shows **only if** `personal.resumeUrl` is not empty.
- *(Optional)* Highlights the link of the section currently on screen.

**Concepts I learn:** `useState`, conditional rendering, `map()` over a links array, responsive classes (`md:flex`, `hidden`).

---

### 9.4 `Hero.jsx` (Server) + `HeroScene.jsx` (Client)

**What it does:** The first screen visitors see. It must say who I am in under 5 seconds.

**Hero features:**
- Full screen height (`min-h-screen`), two columns on desktop, stacked on mobile.
- **Left:** small greeting ("Hi, I'm"), my **name** (big), **title**, 1–2 line intro.
- **Buttons:**
  - "View Projects" → `#projects`
  - "Download Resume" → `personal.resumeUrl` (opens in a new tab). Only shown when the resume exists.
- Social icons (GitHub, LinkedIn).
- **Right:** `<HeroScene />` (the 3D part).
- Text animates in when the page loads (fade + slide up).

**HeroScene features (3D):**
- Shows a Spline scene that reacts to the mouse (rotate/follow).
- `"use client"` at the top.
- On small/slow phones, show a **static image** instead (saves battery and speed).

```js
"use client";
import Spline from "@splinetool/react-spline";

export default function HeroScene() {
  return (
    <div className="h-[400px] md:h-[600px] w-full">
      <Spline scene="https://prod.spline.design/<your-scene-id>/scene.splinecode" />
    </div>
  );
}
```

**How to get the scene URL:** Spline editor → **Export** → **Code export** → **React** → copy the `.splinecode` URL.

**Ideas for the 3D scene:** a floating laptop, abstract shapes, a 3D logo with my initials, a robot that follows the cursor. Spline's **Community** page has free scenes I can remix.

**Concepts I learn:** server vs client components, 3D embed, responsive layout with grid/flex.

---

### 9.5 `About.jsx` (Server)

**What it does:** Tells my story in a short, human way.

**Features:**
- `id="about"`.
- Photo/avatar (use `next/image` for automatic optimization) with a nice border or glow.
- 2–3 short paragraphs from `about.paragraphs`.
- *(Optional)* Small stats: "3 Projects", "X months learning", "Y technologies". Only use real numbers!
- Wrapped in `<FadeIn>` so it animates when scrolled into view.

**What to write:** who I am → what I build → what I'm learning → what job I'm looking for.

---

### 9.6 `Skills.jsx` (Server)

**What it does:** Shows my tech skills grouped by category.

**Features:**
- `id="skills"`.
- Loops over `skills` from the data file (`skills.map(...)`).
- Each category is a card; each skill is a small "pill" with an icon.
- Hover effect: card lifts up (`hover:-translate-y-1 transition`).
- Cards appear one by one when scrolled into view (stagger animation).

**Icon mapping example:**

```js
import { SiReact, SiNextdotjs, SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const icons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  MongoDB: SiMongodb,
  "Express.js": SiExpress,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
};
```

**Rule:** Only list skills I can talk about in an interview.

---

### 9.7 `Projects.jsx` (Server) + `ProjectCard.jsx`

**What it does:** The most important section for getting hired.

**Projects features:**
- `id="projects"`.
- **If `projects.length === 0`** → shows a friendly card:
  > 🚧 **Currently building 3 full-stack MERN projects.** Check back soon, or see my progress on GitHub.
  > [GitHub button]
- **Else** → a grid of `<ProjectCard />` (1 column on mobile, 2 on tablet, 3 on desktop).
- *(Optional, later)* Filter buttons by tech (React / Node / All).

**ProjectCard features:**
- Screenshot image (`next/image`), zooms slightly on hover.
- Title + 2–3 line description (problem → solution).
- Tech tags (small pills).
- 2 buttons: **Live Demo** and **GitHub Code** (open in a new tab with `target="_blank" rel="noopener noreferrer"`).
- *(Optional)* "Featured" badge for the best project.

```js
// Empty state logic
{projects.length === 0 ? (
  <EmptyState />
) : (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </div>
)}
```

**Concepts I learn:** props, `map()` with `key`, conditional rendering, `next/image`.

---

### 9.8 `Contact.jsx` (Client)

**What it does:** Lets recruiters message me directly.

**Features:**
- `id="contact"`.
- Short text: "I'm open to junior / intern roles. Let's talk!"
- Form fields: **Name**, **Email**, **Message** (all `required`, email uses `type="email"`).
- Submit sends data to **Web3Forms** (free, no backend).
- Shows the status: "Sending...", "✅ Message sent!", or "❌ Something went wrong".
- Button is disabled while sending (prevents double submit).
- Also shows my email and social links as a backup.

**Setup:**
1. Get a free access key at https://web3forms.com.
2. Create `.env.local` in the project root:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```
3. Add the same variable in **Vercel → Project → Settings → Environment Variables**, then redeploy.

**Submit logic:**

```js
"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();                       // stop page reload
    setStatus("sending");
    const formData = new FormData(e.target);  // read all fields
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();                       // clear the form
    } else {
      setStatus("error");
    }
  }
  // ... return the form JSX with onSubmit={handleSubmit}
}
```

**Concepts I learn:** forms, `async/await`, `fetch`, `FormData`, environment variables, loading/error states.

---

### 9.9 `Footer.jsx` (Server)

**Features:**
- Social icons.
- `© {new Date().getFullYear()} Sajidur Rahman. Built with Next.js & Tailwind CSS.`
- "Back to top ↑" link → `#home`.

---

### 9.10 `ui/FadeIn.jsx` (Client): reusable animation

**What it does:** Wraps any content and fades it in when it scrolls into view. Write it once, use it everywhere.

```js
"use client";
import { motion } from "motion/react";

export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}          // start: invisible, 40px lower
      whileInView={{ opacity: 1, y: 0 }}       // end: visible, normal position
      viewport={{ once: true, amount: 0.2 }}   // run once, when 20% is visible
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
```

Usage inside a **server** component (this is allowed):

```js
<FadeIn delay={0.1}>
  <h2>About Me</h2>
</FadeIn>
```

---

### 9.11 `ui/SectionHeading.jsx`

**What it does:** Same heading style for every section (consistent design).

**Features:** small label above ("01. About"), big title, optional subtitle, gradient underline.

---

### 9.12 Animation and design summary

| Where | Animation |
|---|---|
| Hero text | Fade + slide up on load, staggered (name → title → buttons) |
| Hero 3D | Spline scene follows the mouse / floats |
| Sections | `FadeIn` on scroll |
| Skill cards | Stagger in, lift on hover |
| Project cards | Image zoom + shadow on hover |
| Buttons | Scale slightly on hover (`hover:scale-105 transition`) |
| Navbar | Background becomes solid after scrolling (optional) |

**Design rules:**
- Pick **1 accent color** (e.g. cyan or violet) + dark background. Don't use too many colors.
- Use **1 font** (2 at most).
- Lots of empty space. Don't crowd things.
- Animations should be **quick (0.3–0.6s) and subtle**.

---

## 10. Build Roadmap (7 days)

| Day | Task | Done |
|---|---|---|
| 1 | Setup (Section 5), push to GitHub, **deploy to Vercel** | [ ] |
| 2 | Folder structure, `portfolio.js`, `layout.js` (font + metadata), `page.js` | [ ] |
| 3 | `Navbar` (with mobile menu) + `Hero` + `HeroScene` (Spline) | [ ] |
| 4 | `About` + `Skills` + `FadeIn` animations | [ ] |
| 5 | `Projects` (empty state) + `ProjectCard` + `Contact` + `Footer` | [ ] |
| 6 | Polish: mobile testing, hover effects, Lighthouse score ≥ 90 | [ ] |
| 7 | SEO (OG image, favicon), README, add live link to LinkedIn/GitHub | [ ] |

**After each day:** `git add .` → `git commit -m "..."` → `git push`, then check the live site.

---

## 11. Deploy on Vercel

### First deploy
1. Go to https://vercel.com → **Log in with GitHub**.
2. **Add New… → Project** → find `portfolio` → **Import**.
3. Framework is auto-detected as **Next.js**. Don't change anything.
4. *(If using Web3Forms)* open **Environment Variables** → add `NEXT_PUBLIC_WEB3FORMS_KEY`.
5. Click **Deploy**. Wait ~1 minute.
6. Copy the live link (e.g. `https://portfolio-xyz.vercel.app`) into the table at the top of this file.

### Change the URL name
Vercel → Project → **Settings → Domains** → edit to something like `sajidur-rahman.vercel.app`.

### After that
- Every `git push` to `main` → **automatic production deploy**.
- Every push to another branch → **preview link** (good for testing before merging).
- If a deploy fails: Vercel → **Deployments** → click the failed one → read the **Build Logs**.
- **Test the build locally first:** `npm run build`. If it fails locally, it will fail on Vercel too.

---

## 12. Future Updates: Projects, Resume, Domain

### 12.1 How to add a project (planned: 3 MERN projects)

1. Take a screenshot of the project (16:9, e.g. 1280×720). Save it as `public/projects/project-1.png`.
2. Open `src/data/portfolio.js` and add an object to `projects`:

```js
export const projects = [
  {
    title: "Project Name",
    description:
      "One or two lines: what problem it solves and the main features.",
    image: "/projects/project-1.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    liveUrl: "https://project-name.vercel.app",
    githubUrl: "https://github.com/<your-username>/project-name",
    featured: true,
  },
];
```

3. Run `npm run dev` and check that it looks good.
4. `git add .` → `git commit -m "Add <Project Name> to projects"` → `git push`.

The "Currently building" message disappears automatically once there is at least 1 project.

### My 3 planned MERN projects

| # | Project | Status | Live link | GitHub |
|---|---|---|---|---|
| 1 | *TBD* | ⬜ Not started | | |
| 2 | *TBD* | ⬜ Not started | | |
| 3 | *TBD* | ⬜ Not started | | |

**Idea list (choose 3, from simple to advanced):**
- **Task Manager / Kanban board**: CRUD, auth (JWT), drag & drop.
- **Blog platform**: auth, rich text editor, comments, image upload (Cloudinary).
- **E-commerce store**: products, cart, orders, admin dashboard, Stripe test payments.
- **Real-time chat app**: Socket.io, rooms, online status.
- **Job board**: employer/candidate roles, search & filter, apply to jobs.

**What makes a project "job-ready":**
- [ ] Authentication (sign up / log in / protected routes)
- [ ] Full CRUD with MongoDB
- [ ] Responsive UI
- [ ] Error handling and loading states
- [ ] Deployed and working (frontend + backend)
- [ ] Good README with screenshots, features, tech stack, and how to run it

**Free hosting for MERN projects:**
| Part | Free platform |
|---|---|
| Frontend (React) | Vercel or Netlify |
| Backend (Express API) | Render (free tier sleeps after inactivity, so the first request is slow) |
| Database | MongoDB Atlas (free M0 cluster) |
| Images | Cloudinary (free tier) |

### 12.2 How to add my resume

1. Export the resume as PDF. File name: `resume.pdf`. No spaces in the name!
2. Put it in `public/resume.pdf`.
3. In `src/data/portfolio.js`:
   ```js
   resumeUrl: "/resume.pdf",
   ```
4. Commit and push. The "Resume" buttons now appear automatically.

**To update the resume later:** replace `public/resume.pdf` with the new file (same name), then commit and push.

**Resume tips:**
- One page, PDF format.
- Include: contact info, portfolio link, GitHub, LinkedIn, skills, the 3 projects (with links), education.
- For each project: 2–3 bullet points with what I built and the tech used.

### 12.3 Custom domain (optional, later)

- Buy a domain (~$10/year) from Namecheap, Porkbun or Cloudflare.
- Vercel → Project → **Settings → Domains → Add** → follow the DNS instructions.
- HTTPS is set up automatically.

---

## 13. Performance, SEO and Accessibility Checklist

### Performance
- [ ] Use `next/image` for all images (auto resize + lazy load).
- [ ] Compress images (https://squoosh.app) before adding them.
- [ ] Only **one** 3D scene (the hero). Keep the Spline scene simple (few objects).
- [ ] Show a static image instead of 3D on small screens if it's slow.
- [ ] Lighthouse (Chrome DevTools → **Lighthouse** → Analyze): Performance ≥ 90.

### SEO
- [ ] `metadata.title` and `metadata.description` in `layout.js`.
- [ ] `og-image.png` (1200×630) in `public/` for nice previews on LinkedIn/Facebook.
- [ ] Custom favicon (`src/app/favicon.ico`). Create one at https://favicon.io.
- [ ] One `<h1>` only (my name in the Hero). Sections use `<h2>`.

### Accessibility
- [ ] Every image has meaningful `alt` text.
- [ ] Icon-only links have `aria-label` (e.g. `aria-label="GitHub"`).
- [ ] Good color contrast (light text on dark background).
- [ ] Can navigate with the **Tab** key; focus outline is visible.
- [ ] Form inputs have `<label>`s.
- [ ] Respect reduced motion: Motion's `useReducedMotion()` hook, or Tailwind's `motion-reduce:` classes.

### Final test before sharing
- [ ] Test on my real phone.
- [ ] Every link works (GitHub, LinkedIn, Live demos, Resume).
- [ ] Contact form sends a real email to me.
- [ ] No errors in the browser console (F12 → Console).
- [ ] `npm run build` succeeds with no errors.

---

## 14. Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| `window is not defined` / `document is not defined` | Browser code running on the server | Add `"use client"` at the top of the component |
| `useState` only works in Client Components | Missing `"use client"` | Add `"use client"` as the first line |
| Motion animations not working | Server component using `motion` | Use the `FadeIn` client wrapper, or add `"use client"` |
| Spline scene is blank | Wrong URL or scene not public | Use the `.splinecode` URL from **Export → Code → React** |
| Contact form works locally but not live | Env variable missing on Vercel | Add it in Vercel Settings → Environment Variables → **Redeploy** |
| Image not showing | Wrong path | Files in `public/` are used as `/file.png` (no `public` in the path) |
| `next/image` error for an external image | Domain not allowed | Put the image in `public/` or add the domain to `images.remotePatterns` in `next.config.mjs` |
| `Port 3000 is in use` | Another server is running | Close the other terminal, or Next.js will use 3001 automatically |
| `git push` rejected | GitHub has commits I don't have | `git pull --rebase` then `git push` |
| `LF will be replaced by CRLF` warning | Windows line endings | Harmless, ignore it |
| Very slow `npm install` / `EPERM` / "file in use" errors | OneDrive is syncing `node_modules` or `.next` | Pause OneDrive sync, close `npm run dev`, try again. If it keeps happening, move the project to `C:\Users\sajid\projects` |
| Vercel build fails | Error in code or ESLint error | Run `npm run build` locally, fix the errors, push again |
| `.env.local` got pushed by mistake | Not ignored | It's in `.gitignore` by default. Never remove it from there. If a key leaked, create a new key |

---

## 15. How to Explain This Project in an Interview

**Short pitch (30 seconds):**
> "I built my portfolio with Next.js App Router and Tailwind CSS, and deployed it on Vercel with automatic deploys from GitHub. All the content comes from one data file, so adding a project only takes a minute. I used Motion for scroll animations and a Spline 3D scene in the hero. The contact form uses Web3Forms, so I didn't need a backend. I kept the 3D to one section and used `next/image` and `next/font` to keep Lighthouse scores above 90."

**Questions they might ask, and my answers:**

- **Why Next.js instead of React?** Better SEO (pages are rendered on the server), built-in image and font optimization, file-based routing, easy deploy on Vercel.
- **What is a Server Component vs a Client Component?** Server components render on the server and send HTML, so less JavaScript goes to the browser. Client components (`"use client"`) are needed for state, events and browser APIs.
- **How do you keep the 3D from slowing the site down?** One simple scene, only in the hero, with a static fallback on small screens, and I check Lighthouse.
- **How does the contact form work without a backend?** The form sends a `fetch` POST with `FormData` to the Web3Forms API, which emails me. The access key is stored in an environment variable.
- **How do you deploy?** Git push to `main` → Vercel builds and deploys automatically. Other branches get preview URLs.

---

## 16. Progress Log

> Write a line here every time I make a meaningful change. Future me will thank me.

| Date | What I did |
|---|---|
| 2026-10-14 | Created this guide. Planned the stack: Next.js + Tailwind + Motion + Spline + Vercel |
| 2026-10-14 | Chose `Desktop\own-portfolio` (inside OneDrive) as the project folder. Moved all docs to `docs/`. Added `PLAN.md` and `STEPS.md` |
| | |
