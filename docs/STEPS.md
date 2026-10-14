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

### Step 2: Pause OneDrive sync ⬜

**Where:** Windows taskbar, bottom right → click the **OneDrive cloud icon** → ⚙️ **Settings** icon → **Pause syncing** → **2 hours**

**Why:** My project is inside OneDrive. The install creates `node_modules`, which has **thousands of files**. If OneDrive tries to upload them all at the same time, the install gets very slow or fails.
After the install finishes, I can resume syncing.

---

### Step 3: Create the Next.js app in this folder 🔄

> ❌ **14 Oct, 1st try:** `npx.ps1 cannot be loaded because running scripts is disabled`. Fixed with `Set-ExecutionPolicy` (see "Problems" at the bottom), then ran the command again.

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

---

### Step 4: Run the site on my computer ⬜

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

### Step 5: Install extra packages ⬜

*Next step. Claude adds the details when I get here.*

### Step 6: Clean the starter files ⬜

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
