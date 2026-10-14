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
| **3. Sections** | 13 | Navbar (sticky + mobile menu + theme toggle) | ⬜ |
| | 14 | Hero (name, title, buttons, socials) | ⬜ |
| | 15 | 3D scene in Hero (Spline) | ⬜ |
| | 16 | About (photo + bio) | ⬜ |
| | 17 | Skills (cards with icons) | ⬜ |
| | 18 | Projects + ProjectCard ("Currently building" for now) | ⬜ |
| | 19 | Contact form (Web3Forms) | ⬜ |
| | 20 | Footer | ⬜ |
| **4. Polish and launch** | 21 | Mobile check + reduced motion | ⬜ |
| | 22 | SEO: favicon, social preview image | ⬜ |
| | 23 | README for recruiters | ⬜ |
| | 24 | Lighthouse + final checks → share my link | ⬜ |

**Things I need to prepare (Claude tells me when):** LinkedIn URL (any time) · Spline account + scene (Step 15) · profile photo (Step 16) · Web3Forms key (Step 19)

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

## What I learned

| Date | Concept | In my own words |
|---|---|---|
| | | |

---

## Problems I hit and how I fixed them

| Date | Problem / error | Fix |
|---|---|---|
| 14 Oct | `npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled on this system` | Windows PowerShell blocks script files (`.ps1`) by default, and `npx` runs as a `.ps1` script. Run once: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`, then close and reopen the terminal. **RemoteSigned** = my own scripts can run; scripts downloaded from the internet must be signed. **CurrentUser** = only my Windows account, no admin needed |
| | | |
