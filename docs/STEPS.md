# My Work Steps

> A log of every step I do to build my portfolio: **what** I ran, **where**, **why**, and **what happened**.
> Claude updates this file with me after each step.
> Other docs: `PROJECT_GUIDE.md` (full manual) · `PLAN.md` (big plan)

**Project folder:** `C:\Users\sajid\OneDrive\Desktop\own-portfolio`

**Status key:** ✅ Done · 🔄 Doing now · ⬜ To do · ❌ Problem

---

## Day 1: Setup and first deploy

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

### Step 6: Clean the starter files ⬜

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

### Step 7: Push to GitHub ⬜

### Step 8: Deploy to Vercel ⬜

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
