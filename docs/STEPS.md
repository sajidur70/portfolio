# My Work Steps

> A log of every step I do to build my portfolio: **what** I ran, **where**, **why**, and **what happened**.
> Claude updates this file with me after each step.
> Other docs: `PROJECT_GUIDE.md` (full manual) · `PLAN.md` (big plan)

**Project folder:** `C:\Users\sajid\OneDrive\Desktop\own-portfolio`

**Status key:** ✅ Done · 🔄 Doing now · ⬜ To do · ❌ Problem

**How I work:** one step at a time, as fast as I can, no fixed days. I finish a step → tell Claude → Claude checks it and writes the next step here.

---

## Roadmap: all steps

| Part | # | Step | Status |
|---|---|---|---|
| **1. Setup and deploy** | 1–6 | Terminal, create app, run, packages, clean starter | ✅ |
| | 7 | Push to GitHub | ✅ |
| | 8 | Deploy to Vercel (site goes live) | ✅ |
| **2. Foundation** | 9 | Data file `src/data/portfolio.js` (all my text) | ✅ |
| | 10 | `layout.js`: font, page title/SEO, dark colors | ✅ |
| | 11 | **Light / dark mode toggle** (added 15 Oct) | ✅ |
| | 12 | Reusable pieces: `SectionHeading` + `FadeIn` animation | ✅ |
| **3. Sections** | 13 | Navbar (sticky + mobile menu + theme toggle) | ✅ |
| | 14 | Hero (name, title, buttons, socials) | ✅ |
| | 15 | Hero image: **my photo** ✅ (3D scene optional, later) | ✅ |
| | 16 | About (quick info card + my story) | ✅ |
| | 17 | Skills (cards with icons) + **logo pop-in animation** + **3D title animation** (requested 15 Oct) | ✅ |
| | 18 | Projects + ProjectCard ("Currently building" for now) | ✅ |
| | 19 | Contact form (Web3Forms) | 🔄 |
| | 20 | Footer | ✅ |
| **4. Polish and launch** | 21 | Mobile check + reduced motion | ✅ reduced motion · ⬜ my phone check |
| | 22 | SEO: favicon ✅, social preview image ✅ | ✅ |
| | 23 | README for recruiters | ✅ |
| | 24 | Lighthouse + final checks → share my link | ✅ Lighthouse · ⬜ share |

**Things I need to prepare (Claude tells me when):** LinkedIn URL ✅ · Spline account + scene (Step 15) · profile photo ✅ (`public/profile.png`) · Web3Forms key ✅ (in `.env.local` + Vercel)

**Requested for Step 17 – Skills (15 Oct):**
- **Skill logos animate when they appear:** each logo pops in one after another (grows from small + fades in + a little spin) when I scroll to it. On hover, a logo lifts and bounces.
- **3D animation on the skill titles:** the titles (e.g. Frontend, Backend) flip in with a **3D rotation** (like a card turning toward me) when they appear, and the cards **tilt in 3D** following the mouse.
- Must respect **reduced motion** and stay fast on phones.

**Ideas to make it more "mine" (for Step 21 polish, optional, 15–30 min each):**
- A less common accent color (emerald, amber or violet instead of cyan)
- My motto **"Think BIG, Solve Small"** as a big, bold design line between sections
- A live LeetCode / GitHub stats card (real proof)
- An "SR" monogram logo instead of the text "Sajidur."
- Rule: **projects make me unique, not design**. Don't spend long on these.

**Design rule (from 15 Oct):** the site has **light and dark mode**. Every color I add needs **both**: a light class and a `dark:` class, e.g. `text-slate-600 dark:text-slate-400`.

---

## Part 1: Setup and first deploy

### Step 1: Open the terminal in my project folder ✅

**Where:** VS Code with the `own-portfolio` folder open → **Terminal → New Terminal** (`` Ctrl + ` ``)

The terminal should show this path:

```
PS C:\Users\sajid\OneDrive\Desktop\own-portfolio>
```

If it shows a different path, run:

```powershell
cd C:\Users\sajid\OneDrive\Desktop\own-portfolio
```

**Why:** Every command runs **in the folder the terminal is in**. `cd` (change directory) moves the terminal to a folder.

---

### Step 2: Pause OneDrive sync ✅ (not needed)

> **14 Oct:** I removed OneDrive from my computer, so nothing syncs this folder. The path still says `OneDrive\Desktop`, but that's only the folder name. **Skip this step.**
> (If I ever turn OneDrive on again, use the steps below.)

**Where:** Windows taskbar, bottom right → click the **OneDrive cloud icon** → ⚙️ **Settings** icon → **Pause syncing** → **2 hours**

**Why:** My project is inside OneDrive. The install creates `node_modules`, which has **thousands of files**. If OneDrive tries to upload them all at the same time, the install gets very slow or fails.
After the install finishes, I can resume syncing.

---

### Step 3: Create the Next.js app in this folder ✅

> ❌ **14 Oct, 1st try:** `npx.ps1 cannot be loaded because running scripts is disabled`. Fixed with `Set-ExecutionPolicy` (see "Problems" at the bottom), then ran the command again.
> ✅ **2nd try:** worked. Installed Next.js 16.4, React 19.3, Tailwind CSS v4. It also ran `git init` and made the first commit: `Initial commit from Create Next App`.

**Where:** `own-portfolio` folder (from Step 1)

```powershell
npx create-next-app@latest . --js --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

**Why:** Creates a ready Next.js project with my chosen settings.

| Part | Meaning |
|---|---|
| `npx create-next-app@latest` | Download and run the newest Next.js setup tool |
| `.` | Create the project **in the current folder** (`.` means "this folder"). My `docs/` folder can stay |
| `--js` | JavaScript, not TypeScript |
| `--tailwind` | Add Tailwind CSS |
| `--eslint` | Add ESLint (shows code mistakes) |
| `--app` | Use App Router (modern Next.js) |
| `--src-dir` | Put code inside `src/` |
| `--import-alias "@/*"` | Write `@/components/Navbar` instead of `../../components/Navbar` |
| `--use-npm` | Install packages with npm |

**Extra questions:** React Compiler → **No**. Anything else → press **Enter** (default).

**If error `npx.ps1 cannot be loaded because running scripts is disabled`:** run this once, then try again:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

**If error "The directory contains files that could conflict":** only `docs/` should be in the folder. Tell Claude which file it lists.

**Check:** the folder now has `src/`, `public/`, `node_modules/`, `package.json` and more.

**What it created:**

| File / folder | What it is |
|---|---|
| `src/app/page.js` | The home page (what I see at `/`) |
| `src/app/layout.js` | Wrapper around every page: `<html>`, `<body>`, font, page title |
| `src/app/globals.css` | Global styles. Line 1 loads Tailwind: `@import "tailwindcss";` |
| `src/app/favicon.ico` | Small icon in the browser tab |
| `public/` | Images and files. `public/next.svg` is used in code as `/next.svg` |
| `package.json` | Project info + list of packages + scripts (`dev`, `build`, `start`, `lint`) |
| `package-lock.json` | Exact versions of every installed package. Don't edit by hand |
| `node_modules/` | The installed packages. **Never edit, never push to GitHub** (it's in `.gitignore`) |
| `.next/` | Build output made by Next.js. Created automatically, also ignored by git |
| `.gitignore` | Files git should NOT track: `node_modules`, `.next`, `.env*` |
| `.git/` | Hidden folder with my git history |
| `next.config.mjs` | Next.js settings (empty for now) |
| `jsconfig.json` | Makes the `@/` import alias work |
| `eslint.config.mjs` | ESLint rules |
| `AGENTS.md` | Notes that help AI coding tools write up-to-date Next.js code |

---

### Step 4: Run the site on my computer ✅

> ✅ **14 Oct:** http://localhost:3000 shows the Next.js welcome page ("To get started, edit the page.js file").

**Where:** `own-portfolio` folder

```powershell
npm run dev
```

| Command | Meaning |
|---|---|
| `npm run dev` | Start the site on my computer (development mode). It runs the `dev` script from `package.json` |

**Check:** open http://localhost:3000. I should see the Next.js welcome page.
**Stop the server:** `Ctrl + C`

**Try it yourself:** change some text in `src/app/page.js` and save. The browser updates by itself (**hot reload**).

---

### Step 5: Install extra packages ✅

> ✅ **14 Oct:** installed `motion` 14.2, `react-icons` 5.7, `@splinetool/react-spline` 4.1. They are now in `package.json` → `"dependencies"`.

**Where:** `own-portfolio` folder, in a **second terminal** (click **+** in the terminal panel), or stop the dev server first with `Ctrl + C`.

```powershell
npm install motion react-icons @splinetool/react-spline
```

| Part | Meaning |
|---|---|
| `npm install` | Download packages into `node_modules` and add them to `package.json` |
| `motion` | Animations (fade in, slide, hover). Import: `import { motion } from "motion/react"` |
| `react-icons` | Thousands of icons (GitHub, LinkedIn, React logo...). Import: `import { FaGithub } from "react-icons/fa"` |
| `@splinetool/react-spline` | Shows my 3D Spline scene in the Hero |

**Check:** open `package.json`. Under `"dependencies"` I now see `motion`, `react-icons` and `@splinetool/react-spline`.

### Step 6: Clean the starter files ✅

> ✅ **15 Oct, Claude's review:**
> - `page.js` and `globals.css` are correct. The `<p>` is split over 3 lines because **Prettier** formatted it on save. Same result, cleaner code.
> - `public/` is empty and the demo SVGs are gone.
> - Commit `05d060e Clean starter files and install packages` is a good message (starts with a verb, says what changed).
> - `npm run lint` → no errors. `npm run build` → **compiled successfully**, the `/` page is built as static HTML.
> - **Tip:** `public/` is empty now, and git doesn't save empty folders. That's fine. It comes back when I add `profile.jpg`.
> - **Why run `npm run build`?** Vercel runs this same command when I deploy. If it fails on my computer, it will fail on Vercel too, so always test it before pushing.

**Why:** The starter page is Next.js's demo. I remove it so I start from a clean, empty page that is **mine**.

#### 6.1 Replace `src/app/page.js`

Delete everything in the file and type this:

```js
// The home page. For now it only shows my name.
// On Day 2, I replace this with my real sections (Hero, About, Skills...).
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-slate-100">
      <h1 className="text-4xl font-bold">Sajidur Rahman</h1>
      <p className="text-lg text-slate-400">MERN Stack Developer · Portfolio coming soon</p>
    </main>
  );
}
```

| Code | Meaning |
|---|---|
| `export default function Home()` | A React component. Next.js shows the default export of `page.js` at `/` |
| `return ( ... )` | The JSX (HTML-like code) this component shows |
| `className` | In React, use `className` instead of `class` |
| `min-h-screen` | At least the full screen height |
| `flex flex-col items-center justify-center` | Put the items in a column, in the center |
| `gap-4` | Space between the items |
| `bg-slate-950 text-slate-100` | Very dark background, light text |
| `text-4xl font-bold` | Big, bold text |

#### 6.2 Replace `src/app/globals.css`

Delete everything and type this:

```css
@import "tailwindcss";

/* Connect the Geist font (loaded in layout.js) to Tailwind's font-sans / font-mono classes */
@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

/* Navbar links like href="#about" scroll smoothly instead of jumping */
html {
  scroll-behavior: smooth;
}

/* So the sticky navbar doesn't cover section titles after scrolling */
section {
  scroll-margin-top: 80px;
}
```

**What I removed:** the demo light/dark color variables and the `Arial` font on `body`. Tailwind classes do the colors now.

#### 6.3 Delete the demo images

**Where:** `own-portfolio` folder

```powershell
Remove-Item public\*.svg
```

| Part | Meaning |
|---|---|
| `Remove-Item` | PowerShell command to delete files |
| `public\*.svg` | Every file ending in `.svg` inside `public` (`*` = "anything") |

This deletes `file.svg`, `globe.svg`, `next.svg`, `vercel.svg` and `window.svg`. The new `page.js` doesn't use them.

#### 6.4 Check

```powershell
npm run dev
```

http://localhost:3000 shows my name in the center on a dark background. No red errors in the terminal.

#### 6.5 Save my work with git

```powershell
git add .
git commit -m "Clean starter files and install packages"
```

| Command | Meaning |
|---|---|
| `git add .` | Stage all changed files (`.` = everything in this folder) |
| `git commit -m "..."` | Save a snapshot with a message. It is saved **on my computer only** (GitHub comes in Step 7) |

**Check:** `git log --oneline` shows 2 commits.

### Step 7: Push to GitHub ✅

> ✅ **15 Oct:** pushed to https://github.com/sajidur70/portfolio. Branch renamed `master` → `main`. 3 commits on GitHub.
> ✅ 7.1 done later: git name is now `Sajidur Rahman`. Old commits keep `sajidur319370`, new commits use my real name.
> GitHub username stays `sajidur70`. Git name and GitHub username don't need to match. The **email** links commits to my account.

**My GitHub:** https://github.com/sajidur70
**Repo name:** `portfolio` → https://github.com/sajidur70/portfolio
(The folder on my computer is `own-portfolio`. The repo name can be different, that's OK.)

#### 7.1 Fix my git name (one time, optional but recommended)

Right now my commits show the name `sajidur319370`. Recruiters see this name on every commit, so use my real name:

```powershell
git config --global user.name "Sajidur Rahman"
```

Also check: GitHub → profile picture → **Settings → Emails**. `sajidurrahmansahib@gmail.com` must be there.
Otherwise GitHub can't connect my commits to my account (no green squares on my profile).

#### 7.2 Create the repository on GitHub

1. Go to https://github.com → **+** (top right) → **New repository**
2. **Repository name:** `portfolio`
3. **Public** (recruiters must see it)
4. ❌ **Don't** add a README, .gitignore or license. My project already has files, and these would cause a conflict.
5. Click **Create repository**

#### 7.3 Commit my latest changes

```powershell
git add .
git commit -m "Update steps log"
```

#### 7.4 Connect and push

```powershell
git branch -M main
git remote add origin https://github.com/sajidur70/portfolio.git
git push -u origin main
```

| Command | Meaning |
|---|---|
| `git branch -M main` | Rename my branch from `master` to `main` (the modern default name; Vercel deploys `main`) |
| `git remote add origin <url>` | Save the GitHub link under the name `origin` |
| `git push -u origin main` | Upload my commits to GitHub. `-u` remembers "origin main", so next time I only type `git push` |

**First push only:** a window opens and asks me to **sign in to GitHub** → choose **Sign in with your browser** → **Authorize**. Windows remembers it after that.

**Check:** refresh https://github.com/sajidur70/portfolio. I see `src/`, `docs/`, `package.json`...
`node_modules/` and `.next/` are **not** there (because of `.gitignore`). ✅ Correct!

---

### Step 8: Deploy to Vercel ✅

> ✅ **15 Oct:** 8.1 + 8.2 done. "Congratulations! You just deployed a new project to sajidur70's projects." GitHub shows a **Production** deployment with status **success**.
> ⚠️ Long URLs like `portfolio-mhmof13p3-sajidur70s-projects.vercel.app` are **protected**: only I can open them (logged in to Vercel). Other people see a Vercel login page.
> The **public** link is the one under **Domains** on the project page. Share only that one. Test it in an **Incognito window** (`Ctrl + Shift + N`).
> ✅ **8.3 done:** added the domain **https://sajidur-rahman.vercel.app** (Settings → Domains → **Add Domain**) and removed the old one. Claude checked it: public, status 200, shows my name.
> Note: the warning about "OpenID Connect Token claims" appears when renaming the **project** (Settings → General). Renaming the project does NOT change the URL, and I don't use OIDC, so the warning is safe to ignore.

**Why:** Vercel turns my GitHub repo into a live website for free. After this, **every `git push` updates the live site automatically** in about 1 minute.

#### 8.1 Sign up

1. Go to https://vercel.com/signup
2. Plan: **Hobby** (free, for personal projects)
3. Choose **Continue with GitHub** → sign in → **Authorize Vercel**

#### 8.2 Import my repo

1. Vercel dashboard → **Add New…** → **Project**
2. Under **Import Git Repository**, find `portfolio` → click **Import**
   - Don't see it? Click **Adjust GitHub App Permissions** → give access to the `portfolio` repo → come back.
3. Check the settings (don't change anything):
   - **Framework Preset:** Next.js (detected automatically)
   - **Root Directory:** `./`
   - **Build Command:** `next build` (the same `npm run build` I tested in Step 6)
4. Click **Deploy** and wait about 1 minute.
5. 🎉 "Congratulations!" → click the preview to open my live site.

#### 8.3 Give it a nice URL

Vercel gives a random-looking URL like `portfolio-abc123.vercel.app`. Make it professional:

1. Project → **Settings** → **Domains**
2. Click **Edit** on the `.vercel.app` domain → type e.g. `sajidur-rahman.vercel.app` (it must be free) → **Save**

#### 8.4 Test auto-deploy

1. In `src/app/page.js`, change `Portfolio coming soon` to `Portfolio coming soon 🚀`
2. Push it:

```powershell
git add .
git commit -m "Test auto deploy"
git push
```

3. Vercel → **Deployments** shows a new "Building" item. After about 1 minute, refresh my live site → I see 🚀.

| Word | Meaning |
|---|---|
| **Deployment** | One version of my site that Vercel built from one commit |
| **Production** | The live version (built from `main`) |
| **Preview** | A test version Vercel builds from other branches. It doesn't change my live site |
| **Build logs** | What Vercel printed while building. Read them if a deploy fails |

**Check:** my live URL opens on my phone too.
**My live URL:** https://sajidur-rahman.vercel.app ✅

> ✅ **8.4 done (15 Oct):** I pushed commit `2e678de`, and Vercel built a new **Production** deployment by itself. **Auto-deploy works.**
> I didn't see 🚀 because I forgot to save `page.js` before committing, so only the `docs/` files were in the commit. Skipped the 🚀 test since auto-deploy is already proven.
> **Lesson:** run `git status` before `git commit`. If my file isn't listed, I didn't save it. (A white dot ● on the file's tab = not saved.)
> **Lesson:** `portfolio-sajidur70s-projects.vercel.app` is a private Vercel link. It works only for me. My public link is `sajidur-rahman.vercel.app`.
> ✅ **GitHub repo "About" (15 Oct):** the Website field had the private link. Fixed it (repo page → ⚙️ next to **About** → **Website** → `https://sajidur-rahman.vercel.app` → **Save changes**). Claude checked: correct now.
> The **Deployments** box on GitHub always shows the long private link. GitHub fills it automatically, so I can't edit it. I can hide it by unchecking **Deployments** in the same ⚙️ window.

---

## Part 2: Foundation

### Step 9: The data file (all my text in one place) ✅

**Why:** My name, bio, skills and links are written **once**, in one file. Every component reads from it.
To change my site later (new skill, new project, resume), I usually edit **only this file**. In an interview: *"I separated my content from my components."*

> ✅ **15 Oct:** 9.1 + 9.2 done by Claude (I asked): created `src/data/portfolio.js` with the data below. ESLint: no errors.
> ✅ My part done: typed `page.js` (9.3), checked it, pushed commit `98c6057 Add portfolio data file`.
> ✅ **Claude's review:** `page.js` is correct (`import` + `{personal.name}` + `{personal.title}`). ESLint: no errors. `npm run build`: compiled successfully. The live site shows "MERN Stack Developer" from the data file.

#### 9.1 Create the file

**Where:** VS Code Explorer (left side)

1. Right-click the `src` folder → **New Folder** → name it `data`
2. Right-click the new `data` folder → **New File** → name it `portfolio.js`

The path is now `src/data/portfolio.js`.

#### 9.2 Type the data

Type this in `portfolio.js`. **Change the text to be true about me.**

```js
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
// When a project is ready, add an object here (template in PROJECT_GUIDE.md, Section 12.1).
export const projects = [];
```

| Code | Meaning |
|---|---|
| `export const personal = { ... }` | An **object** (key: value pairs). `export` lets other files import it |
| `export const socials = [ ... ]` | An **array** (a list). Here, a list of objects |
| `personal.name` | How a component reads one value from an object |
| `skills.map(...)` | How a component will loop over an array (Step 16) |
| `projects = []` | An empty array. `projects.length === 0` → show "Currently building" |
| `// ...` | A comment. JavaScript ignores it. It's a note for me |

#### 9.3 Use the data in `page.js`

Replace everything in `src/app/page.js` with:

```js
import { personal } from "@/data/portfolio";

// The home page. For now it shows my name and title from the data file.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 text-slate-100">
      <h1 className="text-4xl font-bold">{personal.name}</h1>
      <p className="text-lg text-slate-400">
        {personal.title} · Portfolio coming soon
      </p>
    </main>
  );
}
```

| Code | Meaning |
|---|---|
| `import { personal } from "@/data/portfolio"` | Bring in `personal` from my data file. `@/` = the `src/` folder. No `.js` needed |
| `{ personal.name }` | Curly braces in JSX = "run JavaScript here". It shows the value, not the words |

#### 9.4 Check

1. `npm run dev` → http://localhost:3000 still shows my name and title.
2. **Try it yourself:** in `portfolio.js`, change `title` to `"Full Stack Developer"` → save → the page changes. Then change it back.
   This proves the page reads from the data file.

#### 9.5 Save and push

```powershell
git status
git add .
git commit -m "Add portfolio data file"
git push
```

`git status` must list `src/app/page.js` and `src/data/`. If not, save the files first.

---

### Step 10: `layout.js`: page title, SEO and dark colors ✅

> ✅ **15 Oct:** pushed `1524adf Add SEO metadata and dark theme to layout`. Claude checked all 3 files: correct.
> The fixed dark colors on `<body>` change in Step 11 (light/dark toggle).

**Why:** `layout.js` wraps **every page** of my site. It controls:
- the text in the **browser tab** (now it says "Create Next App" ❌)
- the **description** Google and LinkedIn show for my site (SEO)
- the **font** and **colors** for the whole site

#### 10.1 Add my site URL to the data file

In `src/data/portfolio.js`, inside `personal`, add one line after `resumeUrl`:

```js
  resumeUrl: "", // Empty = the Resume button stays hidden. Later: "/resume.pdf"
  siteUrl: "https://sajidur-rahman.vercel.app", // My live link
```

#### 10.2 Replace `src/app/layout.js`

Delete everything and type:

```js
import { Geist, Geist_Mono } from "next/font/google";
import { personal } from "@/data/portfolio";
import "./globals.css";

// Load the Geist font from Google. next/font downloads it at build time,
// so the browser doesn't wait for Google and the text doesn't "jump".
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO: what browsers, Google and LinkedIn show for my site
export const metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: `${personal.name} | ${personal.title}`,
  description: `Portfolio of ${personal.name}, a ${personal.title} from ${personal.location}. ${personal.intro}`,
  openGraph: {
    title: `${personal.name} | ${personal.title}`,
    description: personal.intro,
    url: "/",
    siteName: personal.name,
    type: "website",
  },
};

// Wraps every page. {children} = the page content (page.js)
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-950 font-sans text-slate-100">
        {children}
      </body>
    </html>
  );
}
```

| Code | Meaning |
|---|---|
| `Geist({ ... })` | Load the Geist font. `variable` gives it a CSS name that `globals.css` connects to Tailwind's `font-sans` |
| `export const metadata` | Next.js reads this and writes the `<title>` and `<meta>` tags for me |
| `` `${personal.name} \| ${personal.title}` `` | A **template string** (backticks). `${ }` puts a value inside text → "Sajidur Rahman \| MERN Stack Developer" |
| `metadataBase` | My live URL. Next.js uses it to build full links for social previews |
| `openGraph` | What LinkedIn, Facebook and WhatsApp show when I share my link |
| `{ children }` | **Props**: the page content that `layout.js` wraps |
| `lang="en"` | Tells browsers and screen readers the page is in English |
| `bg-slate-950 text-slate-100` on `<body>` | Dark background + light text for the **whole site** |
| `font-sans` | Use the Geist font |

#### 10.3 Clean `page.js`

The colors now come from `<body>`, so remove `bg-slate-950 text-slate-100` from `<main>` in `src/app/page.js`:

```js
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
```

#### 10.4 Check

1. `npm run dev` → http://localhost:3000
2. The **browser tab** now says **Sajidur Rahman | MERN Stack Developer** ✅
3. The page still has a dark background, and the text uses the Geist font.
4. Right-click the page → **View page source** → press `Ctrl + F` → search `description`. I see my description in a `<meta>` tag.

#### 10.5 Save and push

```powershell
git status
git add .
git commit -m "Add SEO metadata and dark theme to layout"
git push
```

---

### Step 11: Light / dark mode toggle ✅

**Why:** Visitors can choose a light or dark background with a ☀️/🌙 button. The site remembers the choice. On the first visit it follows the visitor's computer setting.

**How it works:**
1. The package **next-themes** adds `class="dark"` to `<html>` when dark mode is on, and saves the choice in the browser (`localStorage`).
2. Tailwind classes that start with `dark:` only work when `<html>` has `class="dark"`.
3. So every element gets **two colors**: `bg-white dark:bg-slate-950` → white in light mode, dark in dark mode.

> Claude tested this exact code in a copy of my project first: ESLint ✅, build ✅, the page loads ✅.
> ✅ **15 Oct:** I did 11.1 (installed next-themes). **Claude did 11.2 → 11.5** (I asked) and checked 11.6: ESLint ✅, build ✅, page has the toggle button and the next-themes script ✅, tab title ✅.
> ✅ 11.7: Claude committed and pushed (I asked): `Add light and dark mode toggle`.
> Note: VS Code may show **"Unknown at rule @custom-variant"** in `globals.css`. That's only VS Code's normal CSS checker, which doesn't know Tailwind. The code is fine. The **Tailwind CSS IntelliSense** extension removes the warning.

#### 11.1 Install next-themes

```powershell
npm install next-themes
```

#### 11.2 Tell Tailwind to use the `dark` class

In `src/app/globals.css`, add these lines **right under** `@import "tailwindcss";`:

```css
/* Dark mode is ON when <html> has class="dark" (next-themes adds it) */
@custom-variant dark (&:where(.dark, .dark *));
```

| Code | Meaning |
|---|---|
| `@custom-variant dark` | Change how Tailwind's `dark:` classes work |
| `(&:where(.dark, .dark *))` | `dark:` classes apply when the element is inside something with `class="dark"`. Without this, Tailwind follows only the computer setting, and my button can't change it |

#### 11.3 Update `src/app/layout.js` (3 small changes)

**Change 1:** add this import as the **2nd line**:

```js
import { ThemeProvider } from "next-themes";
```

**Change 2:** add `suppressHydrationWarning` to `<html>`:

```js
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
```

**Change 3:** replace the whole `<body>...</body>` with:

```js
      <body className="flex min-h-full flex-col bg-white font-sans text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
```

| Code | Meaning |
|---|---|
| `ThemeProvider` | Wraps my whole site so every component can read and change the theme |
| `attribute="class"` | Put the theme as a **class** on `<html>` (`class="dark"`) |
| `defaultTheme="system"` + `enableSystem` | First visit: follow the visitor's computer setting |
| `suppressHydrationWarning` | next-themes changes `<html>` in the browser before React loads. This stops React from warning that the server HTML and the browser HTML are different (only for `<html>`) |
| `bg-white text-slate-900` | Light mode: white background, dark text |
| `dark:bg-slate-950 dark:text-slate-100` | Dark mode: dark background, light text |
| `transition-colors` | The colors fade smoothly when I switch |

#### 11.4 Create the toggle button

1. Right-click `src` → **New Folder** → `components`
2. Right-click `components` → **New File** → `ThemeToggle.jsx`
3. Type:

```js
"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

// A button that switches between light and dark mode.
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      className="rounded-full border border-slate-300 p-2 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
    >
      {/* Light mode shows the moon, dark mode shows the sun */}
      <FiMoon className="h-5 w-5 dark:hidden" />
      <FiSun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
```

| Code | Meaning |
|---|---|
| `"use client"` | This component runs in the **browser** (it has a click handler). Must be the 1st line |
| `useTheme()` | A **hook** from next-themes. Gives the current theme and a function to change it |
| `resolvedTheme` | The theme really shown now: `"light"` or `"dark"` (even when the setting is "system") |
| `setTheme(...)` | Change the theme. next-themes saves it in `localStorage` |
| `a ? b : c` | **Ternary**: if `a` is true use `b`, else `c`. Here: if dark → switch to light, else → dark |
| `onClick={toggleTheme}` | Run `toggleTheme` when the button is clicked (no `()`, I pass the function, I don't call it) |
| `aria-label` | Screen readers read this, because the button has only an icon and no text |
| `dark:hidden` / `hidden dark:block` | Show the moon in light mode and the sun in dark mode, using CSS only |

#### 11.5 Show the button on the page (for now)

In `src/app/page.js`:

```js
import { personal } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

// The home page. For now it shows my name and title from the data file.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">{personal.name}</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400">
        {personal.title} · Portfolio coming soon
      </p>
      {/* Temporary place. In Step 13 it moves into the Navbar */}
      <ThemeToggle />
    </main>
  );
}
```

Note: `text-slate-400` became `text-slate-600 dark:text-slate-400`. Light gray text is hard to read on white, so light mode uses a darker gray.

#### 11.6 Check

1. `npm run dev` → http://localhost:3000
2. Click the button → the page switches light ↔ dark. The icon changes 🌙 ↔ ☀️
3. Refresh the page (`F5`) → my choice is **remembered**
4. No red errors in the terminal or in the browser console (`F12` → **Console**)

#### 11.7 Save and push

```powershell
git status
git add .
git commit -m "Add light and dark mode toggle"
git push
```

`git status` should list: `package.json`, `package-lock.json`, `globals.css`, `layout.js`, `page.js` and the new `src/components/` folder.

---

### Step 12: Reusable pieces: `SectionHeading` + `FadeIn` ✅

**Why:** Every section (About, Skills, Projects, Contact) needs a heading and a scroll animation.
I write them **once** as components and reuse them everywhere. This is the main idea of React: **build small pieces, reuse them**.

> Claude tested this exact code in my project first (then removed it so I can type it): ESLint ✅, build ✅.
> ✅ **15 Oct: Claude did all of Step 12** (I asked): created `ui/SectionHeading.jsx` + `ui/FadeIn.jsx`, updated `page.js`, ESLint ✅, build ✅, committed and pushed.
> ⬜ My part: run `npm run dev`, scroll down to see the fade-in, read both components and the tables below so I can explain them.

**My accent color:** **cyan** (`cyan-600` in light mode, `cyan-400` in dark mode). I use it for small highlights only.

#### 12.1 Create the `ui` folder

Right-click `src/components` → **New Folder** → `ui`

(`ui` = small building blocks used by many sections.)

#### 12.2 `SectionHeading.jsx`

Right-click `ui` → **New File** → `SectionHeading.jsx`:

```js
// The same heading style for every section, e.g. "01. About Me".
export default function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-sm text-cyan-600 dark:text-cyan-400">
        {number}.
      </p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      {/* Only show the subtitle if I pass one */}
      {subtitle && (
        <p className="mt-3 text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
    </div>
  );
}
```

| Code | Meaning |
|---|---|
| `function SectionHeading({ number, title, subtitle })` | **Props** with **destructuring**: the component receives `number`, `title`, `subtitle` from whoever uses it |
| `{subtitle && ( ... )}` | **Conditional rendering**: show the `<p>` only if `subtitle` has a value |
| `<h2>` | Section titles are `h2`. Only my name (Hero) is `h1`. Good for SEO |
| `sm:text-4xl` | **Responsive**: bigger text on screens ≥ 640px |
| `font-mono` | Monospace font (Geist Mono) for the number, a "code" look |
| `bg-linear-to-r from-cyan-500 to-blue-500` | A gradient line from cyan to blue (Tailwind v4 name; v3 called it `bg-gradient-to-r`) |
| No `"use client"` | It only shows content, so it stays a **Server Component** (less JavaScript sent to the browser) |

#### 12.3 `FadeIn.jsx`

Right-click `ui` → **New File** → `FadeIn.jsx`:

```js
"use client";

import { motion } from "motion/react";

// Wraps any content and fades it in when it scrolls into view.
export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // start: invisible, 40px lower
      whileInView={{ opacity: 1, y: 0 }} // end: visible, normal position
      viewport={{ once: true, amount: 0.2 }} // run once, when 20% is visible
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
```

| Code | Meaning |
|---|---|
| `"use client"` | Animations run in the browser, so this is a Client Component |
| `motion.div` | A normal `<div>` that Motion can animate |
| `{ children }` | Whatever I put **between** `<FadeIn>` and `</FadeIn>` |
| `delay = 0` | **Default value**: if I don't pass `delay`, it is `0` |
| `initial` → `whileInView` | Animate from invisible + 40px lower → visible + normal place, when it scrolls into view |
| `viewport={{ once: true }}` | Animate only the first time, not every time I scroll past |

**Big idea:** `FadeIn` is a Client Component, but I can use it **inside Server Components** and put server content inside it (`children`). So only the small animation part runs in the browser.

#### 12.4 Test both on the page

Replace `src/app/page.js` with:

```js
import { personal } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

// The home page. Real sections (Hero, About, Skills...) come in the next steps.
export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">{personal.name}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {personal.title} · Portfolio coming soon
        </p>
        {/* Temporary place. In Step 13 it moves into the Navbar */}
        <ThemeToggle />
      </section>

      {/* Test section: scroll down to see the fade-in. Step 16 replaces it with the real About */}
      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <FadeIn>
          <SectionHeading
            number="01"
            title="About Me"
            subtitle="Who I am and what I do"
          />
        </FadeIn>
      </section>
    </main>
  );
}
```

| Code | Meaning |
|---|---|
| `<SectionHeading number="01" title="About Me" ... />` | **Using** the component and **passing props** |
| `<FadeIn> ... </FadeIn>` | Everything inside becomes `children` and fades in |
| `id="about"` | The Navbar link `#about` will scroll here (Step 13) |
| `mx-auto max-w-5xl px-6 py-24` | Center the section, max width, padding on the sides and top/bottom |

#### 12.5 Check

1. `npm run dev` → http://localhost:3000
2. **Scroll down** → "01. About Me" **fades in and slides up** ✅
3. Click the theme button → the heading looks good in **light and dark** mode
4. **Try it yourself:** change `subtitle` to something else, or remove the `subtitle="..."` line → the subtitle line disappears (conditional rendering!)

#### 12.6 Save and push

```powershell
git status
git add .
git commit -m "Add SectionHeading and FadeIn components"
git push
```

---

### Step 13: Navbar (sticky + mobile menu + theme toggle) ✅

**Why:** The Navbar stays at the top while scrolling. Visitors jump to any section with one click.
On phones, the links hide behind a ☰ **menu button**. My theme toggle moves here from the middle of the page.

> Claude tested this exact code in my project first (then removed it so I can type it): ESLint ✅, build ✅, the page renders the menu button, links and theme toggle ✅.
> ✅ **15 Oct: Claude did 13.1 → 13.4** (I asked): created `Navbar.jsx`, updated `page.js`, ESLint ✅, build ✅, committed and pushed.
> ⬜ My part: test it in the browser (13.3: scrolling, links, phone view with `Ctrl + Shift + M`) and read the code + table so I can explain it.

**What it has:**
- **Logo** "Sajidur." (my first name from the data file) → back to the top (`#home`)
- **Links:** About · Skills · Projects · Contact → scroll to `#about`, `#skills`...
- **Resume** button → only shows when `personal.resumeUrl` is not empty (hidden for now)
- **Theme toggle**
- **Phones (< 768px):** ☰ button opens a menu, ✕ closes it. Clicking a link also closes it.
- **See-through blurred background** (`bg-white/70 backdrop-blur-md`), so content shows softly behind it while scrolling

#### 13.1 Create `src/components/Navbar.jsx`

Right-click `src/components` → **New File** → `Navbar.jsx`:

```js
"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { personal } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

// Links to each section. href="#about" scrolls to the element with id="about".
const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // Is the mobile menu open? Starts closed (false).
  const [isOpen, setIsOpen] = useState(false);

  // First name for the logo: "Sajidur Rahman" → "Sajidur"
  const firstName = personal.name.split(" ")[0];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo: goes back to the top */}
        <a href="#home" className="text-xl font-bold">
          {firstName}
          <span className="text-cyan-600 dark:text-cyan-400">.</span>
        </a>

        {/* Desktop: hidden on small screens, shown from md (768px) */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume button: only shown when resumeUrl is not empty */}
          {personal.resumeUrl && (
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-600 px-4 py-1.5 text-sm font-medium text-cyan-600 transition-colors hover:bg-cyan-600 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
            >
              Resume
            </a>
          )}

          <ThemeToggle />
        </div>

        {/* Mobile: theme button + menu button, hidden from md (768px) */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded-md p-2 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu: only shown when isOpen is true */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)} // close the menu after a click
                className="block rounded-md px-3 py-2 font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            </li>
          ))}
          {personal.resumeUrl && (
            <li>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-3 py-2 font-medium text-cyan-600 dark:text-cyan-400"
              >
                Resume
              </a>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}
```

| Code | Meaning |
|---|---|
| `"use client"` | The menu button uses `useState` and `onClick`, so this runs in the browser |
| `const links = [ ... ]` | An array of links. I loop over it with `.map()` instead of writing 4 `<a>` tags by hand |
| `useState(false)` | **State**: a value React remembers. `isOpen` = is the menu open? `setIsOpen` changes it, and React re-draws the component |
| `personal.name.split(" ")[0]` | `split(" ")` cuts the text at spaces → `["Sajidur", "Rahman"]`. `[0]` takes the first item |
| `links.map((link) => ( <li key={link.href}> ... ))` | Make one `<li>` per link. **`key`** must be unique, so React can track each item |
| `fixed inset-x-0 top-0 z-50` | Stick to the top, full width, above everything else (`z-50`) |
| `bg-white/70` | White with **70% opacity** (see-through). `/70` works with any color |
| `backdrop-blur-md` | Blur what's behind the navbar |
| `hidden md:flex` | **Hidden on phones**, shown from 768px (desktop links) |
| `md:hidden` | **Shown on phones**, hidden from 768px (☰ button and mobile menu) |
| `setIsOpen((open) => !open)` | Flip the value: `true` → `false`, `false` → `true`. Using the previous value `open` is the safe way to update state |
| `{isOpen ? <FiX /> : <FiMenu />}` | Ternary: show ✕ when open, ☰ when closed |
| `{isOpen && ( <ul> ... </ul> )}` | Show the mobile menu only when `isOpen` is `true` |
| `onClick={() => setIsOpen(false)}` | Close the menu after clicking a link |
| `aria-label`, `aria-expanded`, `aria-controls` | **Accessibility**: tell screen readers what the button does and whether the menu is open |
| `target="_blank" rel="noopener noreferrer"` | Open the resume in a new tab, safely |

#### 13.2 Update `src/app/page.js`

The Navbar goes at the top. The hero section gets `id="home"` (the logo link scrolls there). `<ThemeToggle />` is removed from the page, because it's in the Navbar now.

```js
import { personal } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

// The home page. Real sections (Hero, About, Skills...) come in the next steps.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section
          id="home"
          className="flex min-h-screen flex-col items-center justify-center gap-4"
        >
          <h1 className="text-4xl font-bold">{personal.name}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {personal.title} · Portfolio coming soon
          </p>
        </section>

        {/* Test section: scroll down to see the fade-in. Step 16 replaces it with the real About */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-24">
          <FadeIn>
            <SectionHeading
              number="01"
              title="About Me"
              subtitle="Who I am and what I do"
            />
          </FadeIn>
        </section>
      </main>
    </>
  );
}
```

| Code | Meaning |
|---|---|
| `<> ... </>` | A **Fragment**: groups `<Navbar />` and `<main>` without adding an extra `<div>` (a component must return **one** parent) |
| `id="home"` | The logo link `#home` scrolls here |

#### 13.3 Check

1. `npm run dev` → http://localhost:3000
2. The Navbar is at the top. Scroll down → it **stays** at the top, and the content shows blurred behind it
3. Click **About** → it scrolls smoothly to "01. About Me". Click the logo → back to the top
   (Skills, Projects and Contact don't work yet. Those sections come in Steps 17–19)
4. **Phone test:** press `F12` → click the 📱 **device toolbar** icon (or `Ctrl + Shift + M`) → choose a phone, e.g. iPhone 12
   - The links are hidden, the ☰ button shows
   - Click ☰ → the menu opens, the icon becomes ✕
   - Click **About** → it scrolls, and the menu closes
5. Theme toggle works on desktop and phone

#### 13.4 Save and push

```powershell
git status
git add .
git commit -m "Add Navbar with mobile menu and theme toggle"
git push
```

---

### Step 14: Hero (the first screen) ✅

**Why:** Recruiters decide in **about 5 seconds** if they keep reading. The Hero must say clearly: **who I am, what I do, how to contact me**.

> Claude tested this exact code in my project first (then removed it so I can type it): ESLint ✅, build ✅, the page shows one `<h1>` with my name, the buttons, the "SR" circle, the GitHub + Email icons ✅. LinkedIn is hidden because its url is still `""`.

**What it has:**
- **Left side:** "Hi, my name is" → my **name** (big, the only `<h1>`) → my **title** → my **intro**
- **Buttons:** **View Projects** (→ `#projects`), **Contact Me** (→ `#contact`), **Resume** (hidden until I add it)
- **Social icons:** GitHub, LinkedIn (when I add the url), Email
- **Right side:** a glowing circle with my initials **"SR"**. **Step 15 replaces it with the 3D scene.**
- **Animation:** each part fades in a little after the one before (`delay` 0 → 0.5s)
- **Phones:** everything is stacked and centered. **Desktop (≥ 768px):** text left, circle right

> ✅ **15 Oct: Claude built a recruiter-focused Hero** (I asked, and gave my LinkedIn URL).
> LinkedIn blocks automatic reading (error 999), so Claude used my **GitHub profile README** instead: "Full Stack Web Developer | MERN Stack | AI-Assisted Development", CSE graduate, 500 LeetCode solutions repo, Jessore, Bangladesh.
> Changes vs. the first plan: title → **Full Stack Developer**, new intro, green **"Open to junior full-stack roles"** badge, **quick facts** row (CSE Graduate · 500+ LeetCode · Jessore), gradient title, LinkedIn icon added.
> ESLint ✅, build ✅, page renders all parts ✅, tab title + Google description updated automatically (they read `personal`) ✅. Committed and pushed.
> ⚠️ **My part:** check that every fact is TRUE (e.g. "500+ LeetCode problems"). Recruiters may ask about it. Change it in `portfolio.js` if needed.

#### 14.0 Data changes in `src/data/portfolio.js`

- `personal.title` → `"Full Stack Developer"`
- `personal.intro` → *"CSE graduate building full-stack web apps with MongoDB, Express, React and Node.js. I use AI tools to code faster and debug smarter, and I understand every line I ship."*
- `personal.location` → `"Jessore, Bangladesh"`
- **New** `personal.availability` → `"Open to junior full-stack roles"` (`""` hides the badge)
- **New** `highlights` array → the quick facts (`{ icon, text }`). The location fact uses `personal.location`, so I write it only once
- `socials` → LinkedIn url added

#### 14.1 Create `src/components/ui/SocialLinks.jsx`

A small component for the social icons. I'll reuse it in the Hero, Contact and Footer.

```js
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiLink, FiMail } from "react-icons/fi";
import { personal, socials } from "@/data/portfolio";

// Which icon to show for each social "name" in the data file
const icons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

// Round icon links: GitHub, LinkedIn (when it has a url) and Email.
// Reused in the Hero, Contact and Footer.
export default function SocialLinks({ className = "" }) {
  // Keep only links that have a url ("" = hidden)
  const visibleSocials = socials.filter((social) => social.url);

  const linkStyle =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:-translate-y-1 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-cyan-400 dark:hover:text-cyan-400";

  return (
    <ul className={`flex gap-4 ${className}`}>
      {visibleSocials.map((social) => {
        const Icon = icons[social.name] ?? FiLink; // FiLink if no icon is set
        return (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={linkStyle}
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        );
      })}
      <li>
        <a
          href={`mailto:${personal.email}`}
          aria-label="Email"
          className={linkStyle}
        >
          <FiMail className="h-5 w-5" />
        </a>
      </li>
    </ul>
  );
}
```

| Code | Meaning |
|---|---|
| `const icons = { GitHub: FaGithub, ... }` | An object that maps a **name** to an **icon component** |
| `socials.filter((social) => social.url)` | `.filter()` keeps only items where the function returns true. `""` counts as false, so links without a url are removed |
| `const Icon = icons[social.name]` | Look up the icon by name. `icons["GitHub"]` → `FaGithub`. The variable starts with a **capital letter**, so I can use it as `<Icon />` |
| `?? FiLink` | **Nullish coalescing**: if no icon is found (`undefined`), use `FiLink` instead |
| `` `mailto:${personal.email}` `` | A `mailto:` link opens the visitor's email app |
| `` className={`flex gap-4 ${className}`} `` | Combine my classes with extra classes passed in as a prop |
| `aria-label="GitHub"` | The link has only an icon, so screen readers need a name |
| `hover:-translate-y-1` | Move up 4px on hover (a small "lift") |

#### 14.2 Create `src/components/Hero.jsx`

```js
import { FiBookOpen, FiCode, FiMapPin } from "react-icons/fi";
import { personal, highlights } from "@/data/portfolio";
import FadeIn from "@/components/ui/FadeIn";
import SocialLinks from "@/components/ui/SocialLinks";

// Which icon to show for each highlight in the data file
const highlightIcons = {
  education: FiBookOpen,
  code: FiCode,
  location: FiMapPin,
};

// Same style for the 2nd and 3rd buttons
const outlineButton =
  "rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:scale-105 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:hover:border-cyan-400 dark:hover:text-cyan-400";

// The first screen visitors see: who I am, what I do, how to reach me.
export default function Hero() {
  // Initials for the circle: "Sajidur Rahman" → ["Sajidur", "Rahman"] → ["S", "R"] → "SR"
  const initials = personal.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-12 px-6 pt-24 pb-16 md:flex-row md:justify-between"
    >
      {/* Left: text. Each part fades in a little after the one before (delay) */}
      <div className="max-w-xl text-center md:text-left">
        {/* "Open to work" badge with a pulsing green dot */}
        {personal.availability && (
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {personal.availability}
            </p>
          </FadeIn>
        )}

        <FadeIn delay={0.1}>
          <p className="mt-6 font-mono text-cyan-600 dark:text-cyan-400">
            Hi, my name is
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            {personal.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Gradient text: a gradient background, clipped to the letters */}
          <p className="mt-3 bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl dark:from-cyan-400 dark:to-blue-400">
            {personal.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {personal.intro}
          </p>
        </FadeIn>

        {/* Quick facts: CSE Graduate · 500+ LeetCode · Location */}
        <FadeIn delay={0.4}>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 md:justify-start dark:text-slate-400">
            {highlights.map((item) => {
              const Icon = highlightIcons[item.icon] ?? FiCode;
              return (
                <li key={item.text} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a href="#contact" className={outlineButton}>
              Contact Me
            </a>
            {/* Resume button: only shown when resumeUrl is not empty */}
            {personal.resumeUrl && (
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={outlineButton}
              >
                Resume
              </a>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <SocialLinks className="mt-8 justify-center md:justify-start" />
        </FadeIn>
      </div>

      {/* Right: placeholder circle with my initials. Step 15 replaces it with the 3D scene */}
      <FadeIn delay={0.3}>
        <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          {/* Soft glowing gradient behind the circle */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-br from-cyan-400 to-blue-600 opacity-30 blur-3xl" />
          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-slate-200 bg-white/50 font-mono text-5xl font-bold text-cyan-600 backdrop-blur sm:h-60 sm:w-60 dark:border-slate-800 dark:bg-slate-900/50 dark:text-cyan-400">
            {initials}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
```

| Code | Meaning |
|---|---|
| `{personal.availability && ( ... )}` | Show the green badge only when `availability` is not empty |
| `animate-ping` | Tailwind animation: the dot grows and fades again and again (a "live" signal) |
| `bg-linear-to-r ... bg-clip-text text-transparent` | **Gradient text**: a gradient background, cut to the shape of the letters, with transparent text color |
| `highlights.map(...)` + `highlightIcons[item.icon]` | Same pattern as `SocialLinks`: look up the icon by name, then render it |
| `const outlineButton = "..."` | Classes used by 2 buttons, stored once in a variable (don't repeat yourself) |
| `.split(" ").map((word) => word[0]).join("")` | **Method chaining**: split the name into words → take the first letter of each → join them → `"SR"` |
| `<h1>` | My name is the **only `<h1>`** on the site (good for SEO). All sections use `<h2>` |
| `<FadeIn delay={0.1}>`, `0.2`, `0.3`... | Each part starts a bit later → a **stagger** effect |
| `flex-col ... md:flex-row` | Phones: stacked (column). Desktop: side by side (row) |
| `text-center md:text-left` | Centered on phones, left-aligned on desktop |
| `pt-24` | Space at the top so the fixed Navbar doesn't cover the text |
| `sm:text-6xl` | The name gets much bigger on screens ≥ 640px |
| `hover:scale-105` | Buttons grow 5% on hover |
| `animate-pulse` + `blur-3xl` | A soft glow behind the circle that slowly pulses |
| `absolute inset-0` / `relative` | The glow sits **behind** the circle, filling the same space |
| No `"use client"` | The Hero is a **Server Component**. Only `FadeIn` inside it runs in the browser |

#### 14.3 Update `src/app/page.js`

The old hero `<section>` is replaced by `<Hero />`. `personal` is no longer imported here (the Hero uses it).

```js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

// The home page: puts all sections in order.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Test section: scroll down to see the fade-in. Step 16 replaces it with the real About */}
        <section id="about" className="mx-auto max-w-5xl px-6 py-24">
          <FadeIn>
            <SectionHeading
              number="01"
              title="About Me"
              subtitle="Who I am and what I do"
            />
          </FadeIn>
        </section>
      </main>
    </>
  );
}
```

#### 14.4 Check

1. `npm run dev` → http://localhost:3000
2. On load, the text **fades in one by one**, then the buttons and icons
3. **View Projects** / **Contact Me** don't scroll yet (those sections come in Steps 18–19). That's expected
4. The GitHub icon opens my GitHub in a new tab. The ✉️ icon opens my email app
5. **Phone view** (`F12` → `Ctrl + Shift + M`): everything is stacked and centered, and nothing goes off the screen
6. Light and dark mode both look good

#### 14.5 Save and push

```powershell
git status
git add .
git commit -m "Add Hero section and social links"
git push
```

---

### Step 15: 3D scene in the Hero (Spline) ✅ (photo for now, 3D optional)

**Why:** A 3D scene that moves with the mouse makes my portfolio memorable. But 3D is **heavy** (about 1 MB of JavaScript), so I load it **only when it helps**:

| Visitor | What they see |
|---|---|
| Desktop / laptop (≥ 768px) | The **3D scene** (the "SR" circle shows while it loads, then the 3D fades in) |
| Phone (< 768px) | The **"SR" circle**. The 3D code is **never downloaded**, so the site stays fast |
| "Reduce motion" turned on in their computer settings | The **"SR" circle** (accessibility) |
| No scene URL in the data file (`heroScene: ""`) | The **"SR" circle** |

> ✅ **15 Oct: Claude wrote the code** (`HeroScene.jsx`, Hero update, `heroScene` in the data file). ESLint ✅, build ✅.
> It used **Spline's demo scene** for testing only.
> ✅ **15 Oct: my photo replaces the "SR" circle** (I asked). Claude copied `My Photos\sajid-formal-bg.png` → `public/profile.png` and set `photo: "/profile.png"`.
> The Hero shows it round, with a cyan → blue **gradient ring** and a soft glow, using **`next/image`**: my 217 KB PNG is sent as an **18 KB WebP** automatically.
> If `photo` is ever `""`, the "SR" initials show instead.
> `heroScene` is set to `""` for now → **everyone sees my photo**. If I add my own Spline URL later, laptops show the 3D and phones keep the photo.
> ESLint ✅, build ✅, committed and pushed.

#### 15.1 The code (done by Claude)

**`src/data/portfolio.js`**, in `personal`:

```js
  // 3D scene in the Hero: my Spline ".splinecode" URL (Step 15).
  // Empty = show the "SR" circle instead.
  heroScene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
```

**`src/components/HeroScene.jsx`** (new):

```js
"use client";

import dynamic from "next/dynamic";
import { useState, useSyncExternalStore } from "react";

// Load the Spline 3D library only in the browser, and only when it's needed.
// It is big (about 1 MB), so phones never download it.
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

// Show 3D only on screens ≥ 768px AND when the visitor didn't ask for less motion.
const QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

// These 3 functions let React read a media query safely (and update when it changes).
function subscribe(callback) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getSnapshot = () => window.matchMedia(QUERY).matches; // in the browser
const getServerSnapshot = () => false; // on the server: no 3D

// The 3D scene in the Hero.
// {children} = the fallback (my initials circle), shown when:
//  - there is no scene URL yet, or
//  - the screen is small / the visitor prefers less motion, or
//  - the 3D scene is still loading
export default function HeroScene({ sceneUrl, children }) {
  const show3D = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [loaded, setLoaded] = useState(false);

  if (!sceneUrl || !show3D) {
    return children;
  }

  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">
      {/* Fallback while the scene loads */}
      {!loaded && children}

      <div
        className={`absolute inset-0 transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Spline scene={sceneUrl} onLoad={() => setLoaded(true)} />
      </div>
    </div>
  );
}
```

**`src/components/Hero.jsx`**: the "SR" circle is now **inside** `<HeroScene sceneUrl={personal.heroScene}> ... </HeroScene>`, so it becomes the fallback (`children`).

| Code | Meaning |
|---|---|
| `dynamic(() => import("..."), { ssr: false })` | **Lazy loading**: download the Spline library only when `<Spline>` is really shown, and only in the browser (`ssr: false` = not on the server) |
| `QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)"` | A **media query** (like in CSS): "screen at least 768px wide AND the visitor didn't ask for less motion" |
| `window.matchMedia(QUERY).matches` | Ask the browser: does this screen match the query? → `true` / `false` |
| `useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)` | A React hook to read a value from **outside React** (here: the browser screen size). `subscribe` = listen for changes, `getSnapshot` = the value in the browser, `getServerSnapshot` = the value on the server (`false` → no 3D) |
| `if (!sceneUrl \|\| !show3D) return children;` | **Early return**: no URL or small screen → show the fallback circle and stop here |
| `useState(false)` + `onLoad={() => setLoaded(true)}` | Remember if the 3D finished loading. Until then, show the circle |
| `opacity-0` → `opacity-100` + `transition-opacity duration-700` | The 3D **fades in** over 0.7s when it's ready |
| `absolute inset-0` | The 3D canvas fills the whole box, on top of the circle |
| `import Image from "next/image"` + `<Image src=... width={500} height={500} />` | Next.js image component: **resizes, compresses (WebP/AVIF) and lazy-loads** images automatically. `width`/`height` = the real size of my file, so the page doesn't "jump" while loading |
| `priority` | Load this image **first** (it's at the top of the page) |
| `sizes="(min-width: 640px) 288px, 224px"` | Tells the browser how big the image is shown (288px on screens ≥ 640px, else 224px), so it downloads the right size |
| `object-cover` + `rounded-full` | Fill the circle without stretching, cut into a circle |
| `alt={`Photo of ${personal.name}`}` | Text for screen readers and Google |
| `p-1` on the gradient circle | 4px padding → the gradient shows as a **ring** around the photo |

#### 15.2 Make MY scene in Spline (my part) ⬜

1. Go to https://spline.design → **Sign up** (free, with Google or GitHub)
2. Get a scene. Easiest way: **Community** (left menu) → search e.g. `abstract`, `robot`, `laptop`, `shapes`, `3d logo` → open one you like → **Remix** (copies it to my files)
   - **Choose a simple scene** (few objects). Simple = fast.
   - Scenes that **react to the mouse** (look at / follow the cursor) are the most fun.
3. Make the background **transparent**, so it works in light **and** dark mode:
   click an empty area of the canvas → right panel → **Background** → turn it **off** (or set opacity to 0)
4. **Export** (top right) → **Code Export** → **React** → click **Generate Draft** / **Update** if it asks
5. Copy the URL that ends in **`scene.splinecode`**, e.g. `https://prod.spline.design/AbC123xyz/scene.splinecode`
6. Send the URL to Claude, or paste it into `heroScene` in `src/data/portfolio.js`

> Note: on the free plan, Spline may show a small "Built with Spline" logo on the scene. That's OK.

#### 15.3 Check

1. `npm run dev` → http://localhost:3000 on my **laptop**: the circle shows, then the 3D scene fades in. Move the mouse over it
2. **Phone view** (`F12` → `Ctrl + Shift + M`, then **refresh**): only the "SR" circle
3. Light and dark mode both look good (transparent background!)
4. If the 3D is slow or ugly: choose a simpler scene, or set `heroScene: ""` to keep the circle

#### 15.4 Save and push

```powershell
git status
git add .
git commit -m "Add 3D Spline scene to Hero"
git push
```

---

### Step 16: About section ✅

**Why:** The Hero says *what* I do. The About section says *who I am* and *how I work*, so a recruiter can picture me in their team.

**Change vs. the first plan:** my photo is already in the Hero, so About doesn't repeat it. Instead, the left side is a **"Quick info" card** (education, location, focus, email, availability), which recruiters can scan in 3 seconds.

> ✅ **15 Oct: Claude wrote Step 16** (text based on my GitHub profile README). ESLint ✅, build ✅, the section renders ✅.
> ✅ **15 Oct: I checked the text and gave my real details** (from my CV):
> - Education: **B.Sc. in Computer Science & Engineering, East West University, Dhaka, 2018 – 2024**
> - Address: **Jessore, Khulna, Bangladesh** · Phone: **+880 1521-319370**
> Claude updated: `personal.location`, new `personal.phone`, the Hero quick fact (**B.Sc. in CSE, East West University**), the 1st About paragraph, and the Quick info card (Education with a 2nd line, **Email + Phone as clickable links**).
> New in the code: facts can have `detail` (small 2nd line) and `href` (makes it a link); `.filter((fact) => fact.value)` hides empty facts (e.g. `phone: ""`).
> ESLint ✅, build ✅, committed and pushed.
> Note: the code blocks below show the first version. The real code is in `src/data/portfolio.js` and `src/components/About.jsx`.

**Layout:**
- **Heading:** "01. About Me" (my `SectionHeading` + `FadeIn` from Step 12)
- **Left:** Quick info card: Education · Location · Focus · Email · 🟢 Open to junior full-stack roles
- **Right:** 3 short paragraphs → my motto *"Think BIG, Solve Small"* as a quote → **Currently learning** chips (System Design, Databases, Deployment, Caching)
- **Phones:** card on top, story below. **Desktop:** side by side (card 2/5, story 3/5)

#### 16.1 Data: `about` in `src/data/portfolio.js`

```js
// ----- About me -----
export const about = {
  // My story: who I am → what I build → how I work → what I'm learning
  paragraphs: [
    "I'm a Computer Science and Engineering (CSE) graduate from Jessore, Bangladesh, and a full-stack developer who loves turning ideas into working web apps.",
    "I build with the MERN stack: React on the front end, Node.js and Express for APIs, and MongoDB for data. Solving 500+ LeetCode problems taught me to break big problems into small, clear steps.",
    "I use AI tools to code faster, debug smarter and learn quickly, and I make sure I understand every line I ship. Right now I'm building full-stack projects and looking for my first developer role.",
  ],
  motto:
    "Think BIG, Solve Small: I explore every possibility, then ship the simplest solution that works.",
  learning: ["System Design", "Databases", "Deployment", "Caching"],
  // The "quick info" card. Only true facts!
  facts: [
    { label: "Education", value: "CSE Graduate" },
    { label: "Location", value: personal.location },
    { label: "Focus", value: "MERN Stack, Full Stack Web Apps" },
    { label: "Email", value: personal.email },
  ],
};
```

| Code | Meaning |
|---|---|
| `paragraphs` | My story: who I am → what I build → how I work / what I want |
| `motto` | Shown as a quote |
| `learning` | Shown as small "chips". Honest and good to show: I keep learning |
| `facts` | The Quick info card. `personal.location` / `personal.email` are reused, so I write them only once |

#### 16.2 `src/components/About.jsx` (new)

```js
import { FiUser, FiZap } from "react-icons/fi";
import { about, personal } from "@/data/portfolio";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

// About section: a quick info card (left) + my story (right).
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="Who I am and how I work"
        />
      </FadeIn>

      <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
        {/* Left: quick info card */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="mb-4 flex items-center gap-2 font-semibold">
              <FiUser className="text-cyan-600 dark:text-cyan-400" />
              Quick info
            </p>
            {/* <dl> = description list: pairs of a term (dt) and its value (dd) */}
            <dl className="space-y-4">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-medium break-words">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {/* Green "open to work" line, same text as the Hero badge */}
            {personal.availability && (
              <p className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {personal.availability}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Right: my story */}
        <div>
          {about.paragraphs.map((paragraph, index) => (
            <FadeIn key={paragraph} delay={0.1 * (index + 1)}>
              <p className="mb-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {paragraph}
              </p>
            </FadeIn>
          ))}

          <FadeIn delay={0.4}>
            <blockquote className="mt-6 border-l-4 border-cyan-600 pl-4 text-slate-700 italic dark:border-cyan-400 dark:text-slate-300">
              &ldquo;{about.motto}&rdquo;
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-8 mb-3 flex items-center gap-2 font-semibold">
              <FiZap className="text-cyan-600 dark:text-cyan-400" />
              Currently learning
            </p>
            <ul className="flex flex-wrap gap-2">
              {about.learning.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
```

| Code | Meaning |
|---|---|
| `md:grid-cols-[2fr_3fr]` | **CSS Grid** with 2 columns from 768px: left = 2 parts, right = 3 parts. On phones: 1 column (stacked) |
| `<dl>`, `<dt>`, `<dd>` | **Description list**: the right HTML for label → value pairs (better for screen readers and SEO than plain `<div>`s) |
| `about.paragraphs.map((paragraph, index) => ...)` | `.map()` also gives the **index** (0, 1, 2) → I use it for the delay: `0.1 * (index + 1)` = 0.1s, 0.2s, 0.3s |
| `key={paragraph}` | The text itself is unique, so it works as the key |
| `<blockquote>` | The right HTML tag for a quote |
| `&ldquo;` / `&rdquo;` | Curly quote marks “ ” (HTML entities) |
| `break-words` | Long text (my email) wraps instead of going off the card on small phones |
| `uppercase tracking-wider text-xs` | Small, spaced-out capital labels (EDUCATION, LOCATION...) |
| `bg-slate-50 dark:bg-slate-900` | The card is slightly different from the page background in both modes |

#### 16.3 `src/app/page.js`

The test section from Step 12 is replaced by `<About />`:

```js
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

// The home page: puts all sections in order.
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
```

#### 16.4 Check (my part) ⬜

1. **Read every sentence.** Is it true? Would I say it in an interview? Change anything in `src/data/portfolio.js` → `about`
   - "CSE graduate" ✔? "500+ LeetCode problems" ✔? "looking for my first developer role" ✔?
2. `npm run dev` → click **About** in the Navbar → it scrolls to the section, and the parts fade in one by one
3. Phone view (`F12` → `Ctrl + Shift + M`): the card is on top, the email doesn't go off the screen
4. Light and dark mode both look good

#### 16.5 Save and push

```powershell
git status
git add .
git commit -m "Add About section"
git push
```

---

### Step 17: Skills (animated logos + 3D titles) ✅

**Why:** Recruiters scan the Skills section to match me with the job ad. Clear groups + recognizable **brand logos** make that fast. The animations I asked for make it memorable.

> ✅ **15 Oct: Claude built Step 17** (I asked). ESLint ✅, build ✅, renders 4 cards ✅, committed and pushed.
> ⚠️ **My part:** check the skills list. Remove anything I can't explain in an interview (e.g. Docker, GitHub Actions, Linux, Java, C++). I took them from my GitHub profile README and my repos.

**What it does:**

| Effect | How it looks |
|---|---|
| **Cards slide in** | Each category card fades in and slides up, one after another |
| **3D flip-in titles** | Each title (Frontend, Backend & Database...) starts **turned away** (`rotateX: 90°`) and **turns to face me**, like a card flipping up |
| **Logos pop in** | Each skill logo **grows from 0, fades in and spins** from -45° → 0°, one after another (**stagger**), with a bouncy **spring** |
| **Hover a logo** | It lifts up and grows (`y: -6, scale: 1.1`) |
| **3D tilt** | The card **tilts toward my mouse** (max 6°) and smoothly goes back when the mouse leaves |
| **Reduce motion** | If the visitor turned on "reduce motion": no movement, only fades (`MotionConfig reducedMotion="user"`), and no tilt |

**Categories (4 cards, 2×2 on desktop, stacked on phones):** Frontend · Backend & Database · Tools & DevOps · Problem Solving

#### 17.1 Data: `skills` in `src/data/portfolio.js`

```js
// ----- Skills -----
// Rule: only list skills I can explain in an interview.
// The logo for each skill is set in src/components/SkillCard.jsx
export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "MongoDB",
      "Mongoose",
      "SQL",
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "Linux",
      "Postman",
      "Jest",
      "Vercel",
    ],
  },
  {
    category: "Problem Solving",
    items: ["Data Structures", "Algorithms", "Python", "Java", "C++"],
  },
];
```

#### 17.2 `src/components/SkillCard.jsx` (new, Client Component)

```js
"use client";

import {
  MotionConfig,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { FiCode } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import {
  TbApi,
  TbBinaryTree,
  TbDatabase,
  TbMathFunction,
} from "react-icons/tb";
import {
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

// Logo + brand color for each skill name in the data file.
// color "" = use the text color (for black logos, so they also show in dark mode)
const skillIcons = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "" },
  "REST APIs": { icon: TbApi, color: "#0EA5E9" },
  "JWT Auth": { icon: SiJsonwebtokens, color: "#D63AFF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Mongoose: { icon: SiMongoose, color: "#880000" },
  SQL: { icon: TbDatabase, color: "#336791" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Jest: { icon: SiJest, color: "#C21325" },
  Vercel: { icon: SiVercel, color: "" },
  "Data Structures": { icon: TbBinaryTree, color: "#0891B2" },
  Algorithms: { icon: TbMathFunction, color: "#7C3AED" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#E76F00" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
};

// Animation for the list: show the children (logos) one after another
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

// Animation for each logo: pop in (small → normal), fade in, spin a little
const itemVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 15 },
  },
};

// One skill category card: 3D flip-in title, pop-in logos, 3D tilt with the mouse.
export default function SkillCard({ category, items, index }) {
  const reduceMotion = useReducedMotion();

  // How much the card is tilted (in degrees). useSpring makes it move smoothly.
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  // Tilt the card toward the mouse
  function handleMouseMove(event) {
    if (reduceMotion) return;
    const box = event.currentTarget.getBoundingClientRect();
    // Mouse position inside the card, from -0.5 (left/top) to 0.5 (right/bottom)
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    rotateX.set(-y * 12); // max 6° up/down
    rotateY.set(x * 12); // max 6° left/right
  }

  // Mouse left the card → back to flat
  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    // reducedMotion="user": if the visitor asked for less motion, skip movement (keep fades)
    <MotionConfig reducedMotion="user">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900"
      >
        {/* 3D flip-in title: starts turned away (rotateX 90°), then turns to face me */}
        <motion.h3
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.1 }}
          style={{ transformPerspective: 600, transformOrigin: "bottom" }}
          className="mb-5 flex items-center gap-2 text-xl font-bold"
        >
          <span className="h-6 w-1 rounded-full bg-linear-to-b from-cyan-500 to-blue-500" />
          {category}
        </motion.h3>

        {/* Logos: pop in one after another */}
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {items.map((name) => {
            const skill = skillIcons[name] ?? { icon: FiCode, color: "" };
            const Icon = skill.icon;
            return (
              <motion.li
                key={name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.1 }}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <Icon
                  className="h-5 w-5"
                  style={skill.color ? { color: skill.color } : undefined}
                  aria-hidden="true"
                />
                {name}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </MotionConfig>
  );
}
```

| Code | Meaning |
|---|---|
| `skillIcons = { React: { icon: SiReact, color: "#61DAFB" }, ... }` | Logo + **brand color** for each skill. The data file stays simple (just names) |
| `color: ""` | For black logos (Next.js, Express, GitHub, Vercel): use the text color, so they're visible in dark mode too |
| `style={skill.color ? { color: skill.color } : undefined}` | **Inline style**: set the logo color only when there is one |
| **Variants** (`listVariants`, `itemVariants`) | Named animation states (`"hidden"`, `"visible"`). The parent `<motion.ul>` switches to `"visible"`, and every child `<motion.li>` follows automatically |
| `staggerChildren: 0.07` | Start each child 0.07s after the one before → one-by-one pop-in |
| `type: "spring", stiffness, damping` | **Spring physics**: a natural bouncy movement instead of a fixed speed |
| `initial={{ rotateX: 90 }}` + `transformPerspective` | **3D rotation**: the title starts tilted 90° (flat, invisible), then rotates to 0°. Perspective = how strong the 3D depth looks (smaller number = stronger) |
| `transformOrigin: "bottom"` | Rotate around the **bottom** edge, like a card standing up |
| `useMotionValue(0)` + `useSpring(...)` | A value Motion can animate **without re-rendering React**. The spring makes the tilt follow the mouse smoothly |
| `getBoundingClientRect()` | The card's position and size on the screen |
| `(event.clientX - box.left) / box.width - 0.5` | Mouse position inside the card: **-0.5** (left edge) → **0.5** (right edge) |
| `rotateX.set(-y * 12)` | Mouse at the top → tilt back, mouse at the bottom → tilt forward |
| `useReducedMotion()` | `true` if the visitor's computer asks for less motion → skip the tilt |
| `aria-hidden="true"` | Screen readers skip the logo (the skill name is right next to it) |

#### 17.3 `src/components/Skills.jsx` (new, Server Component)

```js
import { skills } from "@/data/portfolio";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/SkillCard";

// Skills section: one animated card per category.
export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          number="02"
          title="Skills"
          subtitle="The tools I use to build, test and ship"
        />
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <SkillCard
            key={group.category}
            category={group.category}
            items={group.items}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
```

#### 17.4 `src/app/page.js`

Added `import Skills from "@/components/Skills";` and `<Skills />` after `<About />`.

#### 17.5 Check (my part)

1. `npm run dev` → click **Skills** in the Navbar
2. The titles **flip up in 3D**, the logos **pop in one by one**
3. Move the mouse over a card → it **tilts in 3D**. Hover a logo → it **lifts**
4. Light and dark mode: all logos are visible
5. Phone view: cards are stacked, logos wrap nicely
6. **Remove skills I can't explain** in `src/data/portfolio.js`

---

### Step 18: Projects + ProjectCard ✅

**Why:** This is the **most important section** for getting hired. My 3 MERN projects aren't ready yet, so for now it shows an **honest "Currently building"** message plus the projects I'm working on. When I add a real project to the data file, the section **switches automatically** to project cards.

> ✅ **15 Oct: Claude built Step 18** (I asked). ESLint ✅, build ✅.
> Tested **both** states: empty ("Currently building" + 3 upcoming cards) ✅, and with 2 sample projects (screenshot, Featured badge, Live Demo / Code buttons, no-image fallback) ✅. Samples removed. Committed and pushed.
> ⚠️ **My part:** check the 3 upcoming projects (names, descriptions, tech, status) match what I really plan to build.

**What it shows now (`projects = []`):**
- A dashed box: 🔧 **"Currently building 3 full-stack MERN projects"** + **See my GitHub** button
- 3 cards from `upcomingProjects`: **Task Manager** (🟢 In progress), **Blog Platform** (Planned), **E-commerce Store** (Planned), each with a short description and tech tags

**What it shows later (`projects` has items):** a grid of **ProjectCards** (1 column on phones, 2 on tablets, 3 on desktop):
- 16:9 **screenshot** (zooms a little on hover), or a gradient box with the title if there's no image
- ⭐ **Featured** badge (when `featured: true`)
- Title, description, tech tags
- **Live Demo** and **Code** buttons (each hidden when its url is `""`)
- The card lifts on hover

#### 18.1 Data in `src/data/portfolio.js`

```js
// ----- Projects -----
// Empty for now → the Projects section shows "Currently building".
// When a project is ready, add an object like this (copy, then fill in):
// {
//   title: "Task Manager",
//   description: "One or two lines: the problem it solves and the main features.",
//   image: "/projects/task-manager.png", // screenshot in public/projects/ ("" = no image)
//   tech: ["React", "Express", "MongoDB", "JWT"],
//   liveUrl: "https://task-manager.vercel.app", // "" = hide the button
//   githubUrl: "https://github.com/sajidur70/task-manager",
//   featured: true, // shows a "Featured" badge
// },
export const projects = [];

// ----- Projects I'm building now -----
// Shown only while `projects` is empty. Remove one when it moves to `projects`.
// status: "In progress" | "Planned"
export const upcomingProjects = [
  {
    title: "Task Manager",
    description:
      "A Kanban-style task board with sign up / log in (JWT), full CRUD and drag & drop.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    status: "In progress",
  },
  {
    title: "Blog Platform",
    description:
      "Write, edit and comment on posts, with image upload and protected author routes.",
    tech: ["React", "Node.js", "MongoDB", "Cloudinary"],
    status: "Planned",
  },
  {
    title: "E-commerce Store",
    description:
      "Products, cart, orders and an admin dashboard, with test payments.",
    tech: ["Next.js", "Express", "MongoDB", "Stripe"],
    status: "Planned",
  },
];
```

#### 18.2 `src/components/ProjectCard.jsx` (new)

```js
import Image from "next/image";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

// One project: screenshot, title, description, tech tags, Live + GitHub buttons.
export default function ProjectCard({ project }) {
  const { title, description, image, tech, liveUrl, githubUrl, featured } =
    project;

  return (
    // "group": children can react when the whole card is hovered (group-hover:)
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900">
      {/* Screenshot (16:9). No image → a gradient box with the title */}
      <div className="relative aspect-video overflow-hidden bg-linear-to-br from-cyan-500 to-blue-600">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4 text-center text-2xl font-bold text-white">
            {title}
          </div>
        )}

        {featured && (
          <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-xs font-semibold text-slate-900 shadow">
            <FiStar className="h-3 w-3" aria-hidden="true" />
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-1 text-slate-600 dark:text-slate-400">
          {description}
        </p>

        {/* Tech tags */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((name) => (
            <li
              key={name}
              className="rounded-full bg-cyan-600/10 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300"
            >
              {name}
            </li>
          ))}
        </ul>

        {/* Buttons. Each one only shows when its url is not empty */}
        <div className="mt-6 flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              <FiExternalLink aria-hidden="true" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium transition hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
            >
              <FiGithub aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
```

#### 18.3 `src/components/Projects.jsx` (new)

```js
import { FiGithub, FiTool } from "react-icons/fi";
import { projects, socials, upcomingProjects } from "@/data/portfolio";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

// Projects section.
// No projects yet → "Currently building" + the projects I'm working on.
// Projects added → a grid of ProjectCards.
export default function Projects() {
  // My GitHub link from the socials list
  const github = socials.find((social) => social.name === "GitHub");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          number="03"
          title="Projects"
          subtitle="Things I've built (and what I'm building now)"
        />
      </FadeIn>

      {projects.length === 0 ? (
        <>
          {/* Empty state: honest "currently building" message */}
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
              <FiTool
                className="mx-auto h-10 w-10 text-cyan-600 dark:text-cyan-400"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-bold">
                Currently building 3 full-stack MERN projects
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                They will appear here when they&apos;re live. Follow my progress
                on GitHub.
              </p>
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2.5 font-medium text-white transition hover:scale-105 hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
                >
                  <FiGithub aria-hidden="true" />
                  See my GitHub
                </a>
              )}
            </div>
          </FadeIn>

          {/* What I'm building: simple cards with a status badge */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingProjects.map((project, index) => (
              <FadeIn key={project.title} delay={0.1 * (index + 1)}>
                <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      project.status === "In progress"
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                        : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    {project.status}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((name) => (
                      <li
                        key={name}
                        className="rounded-full bg-cyan-600/10 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </>
      ) : (
        // Real projects: 1 column on phones, 2 on tablets, 3 on desktops
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.1 * index}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}
```

| Code | Meaning |
|---|---|
| `projects.length === 0 ? ( ... ) : ( ... )` | **Ternary** to choose: empty state OR the project grid |
| `socials.find((social) => social.name === "GitHub")` | `.find()` returns the **first** item that matches (or `undefined`) |
| `const { title, description, ... } = project;` | **Object destructuring**: take several values out of an object in one line |
| `className="group ..."` + `group-hover:scale-105` | When the **whole card** (`group`) is hovered, the image zooms |
| `<Image fill sizes="..." />` | `fill` = the image fills its parent box (the parent needs `relative` + a size, here `aspect-video` = 16:9) |
| `` className={`... ${project.status === "In progress" ? "green..." : "gray..."}`} `` | Choose classes with a ternary inside a template string: green for "In progress", gray for "Planned" |
| `&apos;` | An apostrophe ( ' ) in JSX text (ESLint wants it escaped) |
| `<article>` | The right HTML tag for a self-contained item like a project card |
| `bg-cyan-600/10` | Cyan at **10% opacity**: a soft tag background |

#### 18.4 `src/app/page.js`

Added `import Projects from "@/components/Projects";` and `<Projects />` after `<Skills />`.

#### 18.5 How to add a real project later (5 minutes)

1. Screenshot the project (16:9, e.g. 1280×720) → save as `public/projects/task-manager.png`
2. In `src/data/portfolio.js`: copy the example from the comment above `projects`, paste it **inside** `projects = [ ... ]`, fill it in
3. Remove that project from `upcomingProjects`
4. `npm run dev` → check → `git add .` → `git commit -m "Add Task Manager project"` → `git push`

---

### Step 19: Contact section + form (Web3Forms) 🔄

**Why:** Recruiters can message me **without leaving my site**. The message arrives in my Gmail. Web3Forms does the sending, so I don't need my own backend.

> ✅ **15 Oct: Claude built Step 19** (I asked). I signed up at Web3Forms (it needs a free account now) and gave Claude my access key.
> ESLint ✅, build ✅, the form renders ✅, the key is read from `.env.local` ✅, `.env.local` is NOT committed ✅. Committed locally.
> ✅ **19.5 done:** I added `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel (Settings → **Environment Variables**, type **Config**, not "Environments" which only has Name/Description).
> I didn't need Vercel's "Redeploy" button: Claude pushed `ba42db5`, and that new deploy included the key. The live site shows the real form ✅.
> ⬜ **My part:** send a test message on the live site and check Gmail (19.6).
> Lesson: **Config** = normal setting (value visible later). **Secret** = real secrets like a MongoDB password or JWT secret (never `NEXT_PUBLIC_`).

**What it has:**
- **Left:** "Let's work together" text, **Email** + **Phone** (clickable) + **Location**, social icons
- **Right:** form with **Name**, **Email**, **Message** + **Send Message** button
- **States:** button shows "Sending..." and is disabled while sending → ✅ "Thank you! Your message was sent." or ❌ "Something went wrong..."
- **Spam protection:** a hidden `botcheck` checkbox. People don't see it, bots fill it in, Web3Forms rejects them
- **No key?** The form is replaced by "Please email me at ..." (so the site never shows a broken form)

#### 19.1 The key in `.env.local` (project root, next to `package.json`)

```
NEXT_PUBLIC_WEB3FORMS_KEY=my-access-key
```

| Thing | Meaning |
|---|---|
| `.env.local` | A file for **settings and secrets** on my computer. `.gitignore` has `.env*`, so it's **never pushed** to GitHub |
| `NEXT_PUBLIC_` | Next.js only lets variables that start with `NEXT_PUBLIC_` into **browser** code. The form runs in the browser, so it needs this prefix |
| `process.env.NEXT_PUBLIC_WEB3FORMS_KEY` | How the code reads the value |
| Is the key secret? | Not really: Web3Forms keys are **public by design** (they only say "send to this email"). Keeping it in `.env.local` is still the professional habit |
| After changing `.env.local` | **Restart** `npm run dev` (Ctrl + C, then run it again). Next.js reads it only at start |

#### 19.2 `src/components/ContactForm.jsx` (new, Client Component)

```js
"use client";

import { useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";
import { personal } from "@/data/portfolio";

// The key comes from .env.local (on my computer) or from Vercel's settings (live site).
// NEXT_PUBLIC_ = Next.js may use it in browser code. It is safe: Web3Forms keys are public.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

// Same style for all inputs
const inputStyle =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 dark:border-slate-700 dark:bg-slate-800 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20";

// Contact form: sends the message to my Gmail with Web3Forms (no backend needed).
export default function ContactForm() {
  // "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page
    const form = event.currentTarget; // save the form now (before "await")
    setStatus("sending");

    // FormData reads all inputs that have a "name"
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New message from your portfolio");
    formData.append("from_name", "Portfolio contact form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset(); // clear the inputs
      } else {
        setStatus("error");
      }
    } catch {
      // No internet, or the service is down
      setStatus("error");
    }
  }

  // No key set → don't show a form that can't work
  if (!ACCESS_KEY) {
    return (
      <p className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-600 dark:border-slate-700 dark:text-slate-400">
        The contact form is not set up yet. Please email me at{" "}
        <a
          href={`mailto:${personal.email}`}
          className="font-medium text-cyan-600 dark:text-cyan-400"
        >
          {personal.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Spam trap: hidden from people. Bots fill it in, and Web3Forms rejects them */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Your name"
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={150}
          autoComplete="email"
          placeholder="you@company.com"
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          placeholder="Hi Sajidur, we have a role that fits you..."
          className={`${inputStyle} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
      >
        <FiSend aria-hidden="true" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {/* aria-live: screen readers read the result out loud when it appears */}
      <div aria-live="polite">
        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            <FiCheckCircle aria-hidden="true" />
            Thank you! Your message was sent. I&apos;ll reply soon.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
            <FiAlertCircle aria-hidden="true" />
            Something went wrong. Please try again, or email me at{" "}
            {personal.email}.
          </p>
        )}
      </div>
    </form>
  );
}
```

| Code | Meaning |
|---|---|
| `useState("idle")` | One state with 4 possible values: `"idle"`, `"sending"`, `"success"`, `"error"` |
| `event.preventDefault()` | A normal form **reloads the page** on submit. This stops that, so I can send with JavaScript |
| `const form = event.currentTarget;` | Save the form **before** `await`. After `await`, React may have cleared `event.currentTarget` |
| `new FormData(form)` | Reads every input that has a **`name`** (`name`, `email`, `message`, `botcheck`) |
| `formData.append("access_key", ...)` | Add extra fields Web3Forms needs |
| `async` / `await fetch(...)` | Send the data to the Web3Forms API and **wait** for the answer |
| `await response.json()` | Read the answer as an object: `{ success: true, ... }` |
| `try { ... } catch { ... }` | If something **throws** (no internet), go to `catch` instead of crashing |
| `form.reset()` | Clear all inputs after success |
| `disabled={status === "sending"}` | Can't click twice while sending (no double messages) |
| `required`, `type="email"`, `maxLength` | **Browser validation**: empty fields or a wrong email format are blocked before sending |
| `<label htmlFor="email">` + `<input id="email">` | Connects the label to the input: clicking the label focuses the input, screen readers read it |
| `autoComplete="email"` | The browser can fill it in automatically |
| `aria-live="polite"` | Screen readers read the success / error message when it appears |
| `focus:ring-2` | A soft glow around the input I'm typing in |

#### 19.3 `src/components/Contact.jsx` (new) + `page.js`

```js
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { personal } from "@/data/portfolio";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialLinks from "@/components/ui/SocialLinks";
import ContactForm from "@/components/ContactForm";

// Contact section: how to reach me (left) + the contact form (right).
export default function Contact() {
  // Contact details. Items with an empty value are hidden.
  const details = [
    {
      icon: FiMail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone.replace(/[\s-]/g, "")}`,
    },
    { icon: FiMapPin, label: "Location", value: personal.location },
  ].filter((item) => item.value);

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          number="04"
          title="Contact"
          subtitle="Have a role or a project in mind? Let's talk."
        />
      </FadeIn>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Left: text + contact details + socials */}
        <FadeIn delay={0.1}>
          <h3 className="text-2xl font-bold">Let&apos;s work together</h3>
          <p className="mt-3 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            I&apos;m{" "}
            {(
              personal.availability || "Open to new opportunities"
            ).toLowerCase()}{" "}
            and happy to talk about full-stack and MERN work. Send me a message
            and I&apos;ll reply within 24 hours.
          </p>

          <ul className="mt-8 space-y-4">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-600/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium wrap-break-word transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <SocialLinks className="mt-8" />
        </FadeIn>

        {/* Right: the form */}
        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
```

`page.js`: added `import Contact from "@/components/Contact";` and `<Contact />` after `<Projects />`.

#### 19.4 Test on my computer ⬜

1. **Restart** the dev server: `Ctrl + C` → `npm run dev` (so it reads `.env.local`)
2. http://localhost:3000 → **Contact** → fill in the form → **Send Message**
3. I see ✅ "Thank you! Your message was sent."
4. Check **Gmail** (also **Spam**): an email "New message from your portfolio" arrives

#### 19.5 Add the key in Vercel ⬜

`.env.local` is not on GitHub, so **Vercel doesn't have the key**. Without it, the live site shows "Please email me at..." instead of the form.

1. https://vercel.com → my **portfolio** project → **Settings** → **Environment Variables**
2. **Key:** `NEXT_PUBLIC_WEB3FORMS_KEY`
3. **Value:** my access key
4. Environments: keep **Production**, **Preview** and **Development** checked → **Save**
5. Tell Claude → Claude pushes → Vercel builds **with** the key
   (If the site was already deployed before adding the key: **Deployments** → latest → **⋯** → **Redeploy**)

#### 19.6 Check the live site

https://sajidur-rahman.vercel.app → **Contact** → send a test message → it arrives in Gmail ✅

---

### Step 20: Footer ✅

**Why:** Every professional site ends with a footer: who owns it, how to reach me, and a quick way back to the top.

> ✅ **15 Oct: Claude built Step 20** (I asked). ESLint ✅, build ✅, renders "© 2026 Sajidur Rahman" ✅. Committed and pushed.
> 🐛 First build **failed**: Next.js 16 (with **Cache Components**) doesn't allow `new Date()` directly while building a static page. Fixed with `"use cache"` (see the table). Added to "Problems I hit".

**What it has:** © year + my name · "Built with Next.js, Tailwind CSS and Motion. Deployed on Vercel." · my social icons (reused `SocialLinks`) · **Back to top ↑** link (`#home`).
Phones: stacked and centered. Desktop: one row (left / middle / right).

#### 20.1 `src/components/Footer.jsx` (new)

```js
import { FiArrowUp } from "react-icons/fi";
import { personal } from "@/data/portfolio";
import SocialLinks from "@/components/ui/SocialLinks";

// Next.js 16 doesn't allow `new Date()` directly while building a static page
// (the value could change). "use cache" = compute it once at build time and reuse it.
// Every new deploy builds again, so the year stays correct.
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

// Footer: copyright, social icons and a "back to top" link.
export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-medium">
            © {year} {personal.name}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Built with Next.js, Tailwind CSS and Motion. Deployed on Vercel.
          </p>
        </div>

        <SocialLinks />

        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
        >
          Back to top
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
```

| Code | Meaning |
|---|---|
| `<footer>` | The right HTML tag for the bottom of a page |
| `new Date().getFullYear()` | The current year, e.g. `2026` |
| `async function getCurrentYear() { "use cache"; ... }` | **`"use cache"`**: Next.js runs this function **once at build time** and saves the result. Without it, Next.js 16 stops the build, because the date could be different on every page load |
| `export default async function Footer()` + `await getCurrentYear()` | A Server Component can be **`async`** and `await` data before it renders |
| `<SocialLinks />` | Reused from the Hero. One component, used in 3 places (Hero, Contact, Footer) |
| `href="#home"` | Scrolls back to the Hero (`id="home"`) |

#### 20.2 `src/app/page.js`

Added `import Footer from "@/components/Footer";` and `<Footer />` **after** `</main>` (the footer is not part of the main content).

#### 20.3 Check

1. Scroll to the bottom → footer with © 2026, icons and **Back to top ↑**
2. Click **Back to top** → smooth scroll to the Hero

---

## Part 4: Polish and launch

### Step 22: Favicon + social preview image ✅

#### 22.1 Favicon: my "SR" monogram ✅

> ✅ **15 Oct: Claude made the favicon** (I asked for "plan 1, item 1"). ESLint ✅, build ✅, `/icon` (32×32) and `/apple-icon` (180×180) are generated ✅, the old Next.js `favicon.ico` is deleted (`/favicon.ico` → 404) ✅. Committed and pushed.

**Before:** the Next.js ▲ logo in the browser tab. **After:** white **"SR"** on a **cyan → blue** gradient square.

**Files:**
- `src/app/icon.js`: the browser tab icon (32×32, rounded corners)
- `src/app/apple-icon.js`: the iPhone/iPad home screen icon (180×180, iOS rounds the corners itself)
- `src/app/favicon.ico`: **deleted** (`git rm`)

`src/app/icon.js`:

```js
import { ImageResponse } from "next/og";
import { personal } from "@/data/portfolio";

// Browser tab icon (favicon). Next.js draws this as a PNG at build time.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// "Sajidur Rahman" → "SR"
const initials = personal.name
  .split(" ")
  .map((word) => word[0])
  .join("");

export default function Icon() {
  return new ImageResponse(
    // ImageResponse only understands inline styles (no Tailwind classes)
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #06b6d4, #2563eb)", // cyan → blue
        borderRadius: 8,
        color: "white",
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: -1,
      }}
    >
      {initials}
    </div>,
    { ...size },
  );
}
```

| Code | Meaning |
|---|---|
| File name `icon.js` / `apple-icon.js` in `src/app/` | **File convention**: Next.js sees these names and automatically adds `<link rel="icon">` / `<link rel="apple-touch-icon">` to every page |
| `ImageResponse` from `next/og` | Draws an **image (PNG) from JSX** at build time. Same tool as for the social preview image |
| `export const size` / `contentType` | Tell Next.js the image size and type (used in the `<link>` tag) |
| `style={{ ... }}` (inline styles) | `ImageResponse` doesn't know Tailwind, so styles are written as a JavaScript object (`camelCase`: `justifyContent`, `borderRadius`) |
| `display: "flex"` | Required by `ImageResponse` for any element with more than one child, and for centering |
| Initials from `personal.name` | Same `.split().map().join()` trick as the Hero. If my name changes, the icon updates |

**Check:** open https://sajidur-rahman.vercel.app → the browser tab shows **SR**. (If I still see the old ▲: hard refresh with `Ctrl + Shift + R`, because browsers keep favicons in cache for a long time.)

#### 22.2 Social preview image (Open Graph) ✅

> ✅ **15 Oct: Claude made it** (I asked for "item 2"). ESLint ✅, build ✅, the image is **static** (built once) ✅, `og:image` + `twitter:card` tags are on the page ✅. Committed and pushed.

**Before:** sharing my link on LinkedIn / WhatsApp showed **no image**. **After:** this 1200×630 card:

![My social preview image](images/social-preview.png)

**File:** `src/app/opengraph-image.js`

```js
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { personal } from "@/data/portfolio";

// The preview image LinkedIn, WhatsApp, Facebook and X show when I share my link.
// Next.js draws it as a PNG at build time (1200×630 is the standard size).
export const alt = `${personal.name} | ${personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Load a Google Font as a .ttf file (ImageResponse can't use woff2).
// If it fails (e.g. no internet), return null → the default font is used.
async function loadGoogleFont(family, weight) {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`;
    const css = await (await fetch(cssUrl)).text();
    const fontUrl = css.match(/src: url\((.+?)\) format\('truetype'\)/)?.[1];
    if (!fontUrl) return null;
    return await (await fetch(fontUrl)).arrayBuffer();
  } catch {
    return null;
  }
}

// Load my photo + fonts once at build time ("use cache"), so the image is static:
// no font downloads and no file reading when someone shares my link.
async function getAssets() {
  "use cache";
  // My photo from public/ as a "data URL" (the image file written as text)
  const photoFile = await readFile(
    join(process.cwd(), "public", "profile.png"),
  );
  const photo = `data:image/png;base64,${photoFile.toString("base64")}`;

  const [regular, bold] = await Promise.all([
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 700),
  ]);
  return { photo, regular, bold };
}

export default async function OpengraphImage() {
  const { photo, regular, bold } = await getAssets();
  const fonts = [
    regular && { name: "Inter", data: regular, weight: 400, style: "normal" },
    bold && { name: "Inter", data: bold, weight: 700, style: "normal" },
  ].filter(Boolean);

  const skills = ["React", "Next.js", "Node.js", "Express", "MongoDB"];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 80px",
        backgroundColor: "#020617", // slate-950, same as my dark mode
        backgroundImage:
          "radial-gradient(circle at 85% 30%, rgba(6,182,212,0.35), transparent 45%), radial-gradient(circle at 10% 100%, rgba(37,99,235,0.3), transparent 40%)",
        color: "#f1f5f9",
        fontFamily: "Inter",
      }}
    >
      {/* Left: text */}
      <div style={{ display: "flex", flexDirection: "column", width: 680 }}>
        {personal.availability && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 12,
              padding: "8px 20px",
              borderRadius: 999,
              border: "2px solid rgba(16,185,129,0.4)",
              backgroundColor: "rgba(16,185,129,0.12)",
              color: "#34d399",
              fontSize: 24,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#10b981",
              }}
            />
            {personal.availability}
          </div>
        )}

        <div
          style={{
            marginTop: 36,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {personal.name}
        </div>

        <div
          style={{
            marginTop: 14,
            fontSize: 40,
            fontWeight: 700,
            color: "#22d3ee", // cyan-400
          }}
        >
          {personal.title}
        </div>

        {/* Skill tags */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                padding: "8px 18px",
                borderRadius: 10,
                backgroundColor: "rgba(34,211,238,0.12)",
                color: "#a5f3fc",
                fontSize: 24,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, fontSize: 26, color: "#94a3b8" }}>
          {personal.siteUrl.replace("https://", "")}
        </div>
      </div>

      {/* Right: my photo with a gradient ring */}
      <div
        style={{
          display: "flex",
          padding: 8,
          borderRadius: 999,
          backgroundImage: "linear-gradient(135deg, #22d3ee, #2563eb)",
        }}
      >
        {/* ImageResponse needs a plain <img> (next/image doesn't work here) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: 999, objectFit: "cover" }}
        />
      </div>
    </div>,
    { ...size, fonts },
  );
}
```

| Code | Meaning |
|---|---|
| File name `opengraph-image.js` | **File convention**: Next.js adds `<meta property="og:image">` (and the X/Twitter tags) to my page automatically |
| `export const alt` | Text description of the image (accessibility) |
| `readFile(join(process.cwd(), "public", "profile.png"))` | Read my photo file with **Node.js** (`fs`). `process.cwd()` = the project folder |
| `` `data:image/png;base64,${...}` `` | A **data URL**: the image written as text, so it can go straight into `<img src>` |
| `loadGoogleFont("Inter", 700)` | Download the **Inter** font (bold) from Google Fonts as `.ttf`. `try/catch` → if it fails, the default font is used |
| `"use cache"` in `getAssets()` | Without it, the image was **dynamic** (ƒ): fonts downloaded on every request, and Vercel might not find my photo. With it, everything is loaded **once at build time** → static (○) |
| `Promise.all([...])` | Run both font downloads **at the same time** and wait for both |
| `.filter(Boolean)` | Remove `null` values (a font that failed to load) |
| `<img>` with `eslint-disable-next-line` | `next/image` doesn't work inside `ImageResponse`, so a plain `<img>` is correct here. The comment tells ESLint this is on purpose |
| `radial-gradient(...)` | The soft cyan and blue glows in the corners |

**Check (my part):**
1. Send my link to myself on **WhatsApp** (or paste it in a LinkedIn post draft, don't publish) → the card appears
2. Or test it at https://www.opengraph.xyz → paste my link
3. LinkedIn caches previews. If LinkedIn shows an old preview, use https://www.linkedin.com/post-inspector/ → paste my link → **Inspect** (it refreshes the cache)

#### 22.3 sitemap.xml + robots.txt (for Google) ✅

> ✅ **15 Oct: Claude made both** (I asked for "item 4"). ESLint ✅, build ✅ (both are static ○), output checked ✅. Committed and pushed.
> Live: https://sajidur-rahman.vercel.app/robots.txt and https://sajidur-rahman.vercel.app/sitemap.xml

**Why:** Search engines send **robots** (crawlers) that visit websites and add them to search results.
- **`robots.txt`** = the **rules** for those robots: "you may visit everything, and here is my sitemap"
- **`sitemap.xml`** = a **list of my pages** for search engines, so they don't have to guess
- Together they help Google find and index my site, so searching *"Sajidur Rahman developer"* can show my portfolio

**`src/app/robots.js`**

```js
import { personal } from "@/data/portfolio";

// Creates /robots.txt: tells search engines (Google, Bing...) what they may crawl,
// and where my sitemap is.
export default function robots() {
  return {
    rules: {
      userAgent: "*", // all search engines
      allow: "/", // may visit every page
    },
    sitemap: `${personal.siteUrl}/sitemap.xml`,
  };
}
```

Result at `/robots.txt`:

```
User-Agent: *
Allow: /

Sitemap: https://sajidur-rahman.vercel.app/sitemap.xml
```

**`src/app/sitemap.js`**

```js
import { personal } from "@/data/portfolio";

// Creates /sitemap.xml: a list of my site's pages for search engines.
// My portfolio is one page (sections like #about are parts of it, not pages),
// so the list has one URL. Add more objects here if I add pages later.
export default function sitemap() {
  return [
    {
      url: personal.siteUrl,
      changeFrequency: "monthly", // how often the page usually changes
      priority: 1, // most important page (scale 0.0 – 1.0)
    },
  ];
}
```

Result at `/sitemap.xml`:

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sajidur-rahman.vercel.app</loc>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
</urlset>
```

| Code / word | Meaning |
|---|---|
| File names `robots.js` / `sitemap.js` in `src/app/` | **File convention** (like `icon.js`): Next.js turns them into `/robots.txt` and `/sitemap.xml` |
| I return a **JavaScript object/array** | Next.js converts it to the correct text / XML format for me |
| `userAgent: "*"` | The rules apply to **all** crawlers (`*` = everyone) |
| `allow: "/"` | Crawlers may visit **everything** from the root `/` |
| `sitemap: ...` | Tells crawlers where my sitemap is |
| `url: personal.siteUrl` | My page URL, from the data file (one place to change it) |
| Only **one** URL | My site is **one page**. `#about`, `#skills`... are parts of that page, not separate pages, so they don't go in a sitemap |
| `changeFrequency: "monthly"` | A hint: how often the page changes |
| `priority: 1` | A hint: how important this page is compared to my other pages (0.0 – 1.0) |
| No `lastModified: new Date()` | The Next.js docs example uses it, but Next.js 16 with Cache Components rejects `new Date()` in static files (same as the Footer, Step 20). It's optional, so I left it out |

> ✅ **15 Oct: Google Search Console verification file added.** I chose the **HTML file** method. Claude created `public/google159425fa80a03f3e.html` with exactly the line Google gave me (`google-site-verification: google159425fa80a03f3e.html`) and pushed it.
> Files in `public/` are served at the root of my site → https://sajidur-rahman.vercel.app/google159425fa80a03f3e.html
> ⚠️ **Never delete this file**, or Google will un-verify my site.
> ⬜ My part: click **Verify** in Search Console → then **Sitemaps** → `sitemap.xml` → **Submit**.

**Optional next step (my part, 10 min): Google Search Console**
1. https://search.google.com/search-console → **Add property** → **URL prefix** → `https://sajidur-rahman.vercel.app`
2. Verify with the **HTML tag** method → send the tag to Claude (it goes in `layout.js` metadata)
3. **Sitemaps** → enter `sitemap.xml` → **Submit**
4. After a few days, I can see when my site appears in Google search and for which words

#### 22.4 Custom 404 page ✅

> ✅ **15 Oct: Claude made it** (I asked for "item 5"). ESLint ✅, build ✅. Tested `/abc`: status **404** ✅, my design ✅, tab title "Page not found | Sajidur Rahman" ✅, `noindex` (Google won't list it) ✅. Committed and pushed.

**Before:** a wrong link (e.g. `/abc`) showed Next.js's plain 404 page. **After:** a big gradient **404**, "Page not found", and 2 buttons: **Back to home** and **Contact me**. Light/dark mode works, because the page renders inside my `layout.js`.

**`src/app/not-found.js`**

```js
import Link from "next/link";
import { FiArrowLeft, FiMail } from "react-icons/fi";

// Browser tab title for this page
export const metadata = {
  title: "Page not found",
};

// Custom 404 page: shown for any URL that doesn't exist, e.g. /abc
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Big gradient "404" */}
      <p className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text font-mono text-8xl font-bold text-transparent sm:text-9xl dark:from-cyan-400 dark:to-blue-400">
        404
      </p>

      <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-lg text-slate-600 dark:text-slate-400">
        This page doesn&apos;t exist or was moved. Let&apos;s get you back on
        track.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {/* <Link> = Next.js link: goes to another page without a full reload */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition hover:scale-105 hover:bg-cyan-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
        >
          <FiArrowLeft aria-hidden="true" />
          Back to home
        </Link>
        <Link
          href="/#contact"
          className="flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-medium transition hover:scale-105 hover:border-cyan-600 hover:text-cyan-600 dark:border-slate-700 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
        >
          <FiMail aria-hidden="true" />
          Contact me
        </Link>
      </div>
    </main>
  );
}
```

**`src/app/layout.js`**: title **template**:

```js
  title: {
    // Home page title
    default: `${personal.name} | ${personal.title}`,
    // Other pages: "Page not found" → "Page not found | Sajidur Rahman"
    template: `%s | ${personal.name}`,
  },
```

| Code | Meaning |
|---|---|
| File name `not-found.js` in `src/app/` | **File convention**: Next.js shows it for **any URL that doesn't exist**, and sends the **404 status code** |
| `export const metadata = { title: "Page not found" }` | Each page can set its own metadata. It's merged with the layout's metadata |
| `title.template: "%s \| Sajidur Rahman"` | `%s` is replaced by the page's own title → "Page not found \| Sajidur Rahman" |
| `title.default` | Used when a page doesn't set a title (my home page) |
| `import Link from "next/link"` / `<Link href="/">` | Next.js link between **pages**: fast, no full page reload. (For `#section` links on the same page, a normal `<a>` is fine, like in my Navbar) |
| `href="/#contact"` | Go to the home page **and** scroll to the Contact section |
| `noindex` (added by Next.js) | Tells Google: don't show this page in search results |

**Check:** open https://sajidur-rahman.vercel.app/abc → my 404 page → click **Back to home**.

#### 22.5 Vercel Web Analytics (visitor stats) ✅

> ✅ **15 Oct: Claude added it** (I asked: "do the rest"). Installed `@vercel/analytics`, added `<Analytics />` to `layout.js`. ESLint ✅, build ✅. Committed and pushed.
> ⬜ **My part (1 click):** Vercel → my project → **Analytics** tab → **Enable**. Data starts after the next visit.

**What I get:** how many people visit, which **countries**, which **devices**, and where they came from (**referrers** like linkedin.com or github.com). Useful to see if recruiters open my link after I apply.
**Privacy:** no cookies, no personal data, so no cookie banner needed. Free on the Hobby plan.

```bash
npm install @vercel/analytics
```

In `src/app/layout.js`:

```js
import { Analytics } from "@vercel/analytics/next";
// ...
      <body ...>
        <ThemeProvider ...>{children}</ThemeProvider>
        {/* Vercel Web Analytics: counts visitors (no cookies). Only active on Vercel */}
        <Analytics />
      </body>
```

| Code | Meaning |
|---|---|
| `@vercel/analytics/next` | The Next.js version of the package (it knows about Next.js page changes) |
| `<Analytics />` in the **root layout** | Added once, it works on **every** page |
| "Only active on Vercel" | On my computer (`npm run dev`) it does nothing, so my own testing doesn't count as visits |

---

### Step 23: README for recruiters ✅

**Why:** Recruiters and interviewers open my GitHub repo. The default README said *"This is a Next.js project bootstrapped with create-next-app"*, which tells them nothing about me or my work.

> ✅ **15 Oct: Claude wrote `README.md`** (I asked for "item 3"). Committed and pushed. I can read it at https://github.com/sajidur70/portfolio
> ⬜ **My part:** read it once. I should be able to explain every feature listed there.

**What's in it:**

| Section | Content |
|---|---|
| Title + live link | "Sajidur Rahman, Developer Portfolio" + link to my site |
| Preview image | The social preview card (`docs/images/social-preview.png`) |
| About | Who I am + the main idea: **all content in one data file** |
| Features | Light/dark mode, responsive, Motion animations (pop-in logos, 3D titles, tilt), reduced motion, contact form, data-driven projects, SEO, optimized images, optional 3D |
| Tech Stack | Table: Next.js 16, React 19, Tailwind v4, Motion, next-themes, react-icons, Web3Forms, Spline, Vercel, ESLint/Prettier |
| Project Structure | Folder tree with a comment for every file |
| Getting Started | `git clone` → `npm install` → `.env.local` → `npm run dev` |
| Environment variables | `NEXT_PUBLIC_WEB3FORMS_KEY` (+ what happens without it, + Vercel) |
| Scripts | `dev`, `build`, `start`, `lint` |
| Updating the Content | Where to change bio, skills, projects, resume |
| Documentation | Links to `STEPS.md`, `PROJECT_GUIDE.md`, `PLAN.md` |
| Contact | Email, LinkedIn, GitHub |

**Good README habits (for my MERN projects too):**
1. **Live link + screenshot at the top.** Recruiters spend about 30 seconds
2. **Features** as short bullet points: what it does, not how
3. **Tech stack** in a table
4. **How to run it locally**, including **environment variables** (names only, never real secrets!)
5. **Project structure**, so a reader knows where things are

---

### Step 24: Lighthouse check + fixes ✅

**What is Lighthouse?** Google's free tool that tests a website and scores it **0–100** in 4 categories: **Performance** (speed), **Accessibility** (usable by everyone), **Best Practices** (security, modern code) and **SEO** (search engines). 90+ = green = good.
I can run it myself: Chrome → `F12` → **Lighthouse** tab → **Analyze page load**. Or online at https://pagespeed.web.dev

> ✅ **15 Oct: Claude ran Lighthouse on my live site** (I asked: "do the rest"), as a **phone** (slow 4G + 4× slower CPU, simulated) and as a **desktop**, fixed the problems, deployed, and ran it again.

#### Results

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| 📱 Mobile **before** | 93 | 96 | 100 | 100 |
| 📱 Mobile **after** | **90–93** (varies per run) | **100** ✅ | 100 | 100 |
| 💻 Desktop **before** | 100 | 96 | 100 | 100 |
| 💻 Desktop **after** | **100** | **100** ✅ | **100** | **100** |

Mobile **LCP** (Largest Contentful Paint = when the biggest text/image appears): **2.8s → 2.4s**. Desktop LCP: **0.6s**. Layout shift: **0** (nothing jumps while loading).

#### Fix 1: Color contrast (Accessibility 96 → 100)

**Problem:** in **light mode**, cyan text (`text-cyan-600`, e.g. "Hi, my name is") on white, and white text on the cyan **View Projects** button, had a contrast of **3.6 : 1**. The rule (WCAG) for normal text is at least **4.5 : 1**, so people with weak eyesight (or a phone in the sun) can read it.
**Fix:** one shade darker in **light mode only**, everywhere (11 files):
- `text-cyan-600` → `text-cyan-700`, `bg-cyan-600` → `bg-cyan-700`, `border-cyan-600` → `border-cyan-700`
- button hover `hover:bg-cyan-700` → `hover:bg-cyan-800`
- Dark mode (`dark:...-cyan-400`) didn't change: it already had good contrast.

**Rule for the future:** in light mode, use **700** shades for colored text on white (cyan, blue, emerald...). 600 is often too light.

#### Fix 2: Hero appears faster (mobile LCP 2.8s → 2.4s)

**Problem:** the Hero text used `FadeIn` (Motion = JavaScript). It starts **invisible** (`opacity: 0`) and only appears after React and Motion have loaded. On a slow phone, my intro text appeared after 2.8s.
**Fix:** the Hero now uses a **pure CSS animation**, which starts at the first paint, without waiting for JavaScript. The other sections still use Motion (they're further down the page, so it doesn't matter).

`src/app/globals.css`:

```css
/* "animate-fade-up" class: fade in + slide up, in pure CSS.
   Used in the Hero so it shows right away, without waiting for JavaScript. */
@theme {
  --animate-fade-up: fade-up 0.6s ease-out both;

  @keyframes fade-up {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

`src/components/Hero.jsx` (`FadeIn` replaced by `Reveal` everywhere in the Hero):

```js
function Reveal({ delay = 0, children }) {
  return (
    <div
      className="animate-fade-up motion-reduce:animate-none"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
```

| Code | Meaning |
|---|---|
| `@keyframes fade-up` | A CSS animation: from invisible + 24px lower → visible + normal place |
| `--animate-fade-up` in `@theme` | Tailwind v4: creates the class **`animate-fade-up`** |
| `ease-out` | Fast at the start, slow at the end (feels natural) |
| `both` | Keep the "from" state **before** the animation starts (during the delay), and the "to" state after |
| `style={{ animationDelay: ... }}` | Each part starts a bit later (stagger), like before |
| `motion-reduce:animate-none` | No animation if the visitor asked for less motion |
| No `"use client"` | `Reveal` is a Server Component, with zero JavaScript in the browser |

#### What I didn't change (and why)

| Lighthouse note | Why I left it |
|---|---|
| "Reduce unused JavaScript" (~80 KB, mobile) | Mostly React, Next.js and Motion. Needed for the animations and the theme toggle |
| "Legacy JavaScript" (~14 KB) | Small, comes from Next.js's build settings |
| "Improve image delivery" (~14 KB) | My photo is already ~18 KB WebP. 14 KB isn't worth it |
| "Efficient cache policy" (1 file) | It's Vercel's analytics script, not my code |
| Mobile Performance 90–93 instead of 100 | The simulated slow phone needs time to start React. 90+ is green. Getting 100 would mean removing animations |

**Interview line:** *"My portfolio scores 100 on Accessibility, Best Practices and SEO, and 90+ on mobile Performance. Lighthouse flagged low contrast, so I darkened my light-mode accent, and I switched the hero animation from JavaScript to pure CSS to improve Largest Contentful Paint."*

---

### Extra: Dark mode gradient background ✅

The flat `slate-950` dark background became a gradient. I compared 5 options locally (with a temporary button bar) and kept my own two colors.

`src/app/globals.css`:

```css
.dark body {
  background-image:
    radial-gradient(circle at 15% 10%, rgb(34 211 238 / 0.12), transparent 40%),
    radial-gradient(circle at 85% 90%, rgb(139 92 246 / 0.12), transparent 45%),
    linear-gradient(160deg, oklch(14.1% 0.005 285.823) 0%, oklch(12.9% 0.042 264.695) 100%);
  background-attachment: fixed;
}
```

| Code | Meaning |
|---|---|
| `.dark body` | Only in dark mode (next-themes puts `class="dark"` on `<html>`). Light mode stays white |
| `linear-gradient(160deg, A, B)` | Fades from color A (top-left) to color B (bottom-right) |
| `oklch(14.1% 0.005 285.823)` | Tailwind's `zinc-950`: Lightness, Chroma (colorfulness), Hue (color angle) |
| `oklch(12.9% 0.042 264.695)` | Tailwind's `slate-950`: a dark blue-gray |
| `radial-gradient(circle at 15% 10%, ...)` | A soft round glow: cyan at the top-left, violet at the bottom-right |
| `rgb(34 211 238 / 0.12)` | Cyan at 12% opacity, so the glow is subtle |
| Several backgrounds separated by commas | They stack: the first one is on top |
| `background-attachment: fixed` | The gradient stays still while the page scrolls |

---

## What I learned

| Date | Concept | In my own words |
|---|---|---|
| | | |

---

## Problems I hit and how I fixed them

| Date | Problem / error | Fix |
|---|---|---|
| 14 Oct | `npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled on this system` | Windows PowerShell blocks script files (`.ps1`) by default, and `npx` runs as a `.ps1` script. Run once: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`, then close and reopen the terminal. **RemoteSigned** = my own scripts can run; scripts downloaded from the internet must be signed. **CurrentUser** = only my Windows account, no admin needed |
| 15 Oct | Build error: `Route "/": Next.js encountered the unstable value new Date() while prerendering` (Footer year) | Next.js 16 with Cache Components doesn't allow `new Date()` directly in a static page. Put it in a function with `"use cache"` (computed once at build time) and make the component `async` |
| | | |
