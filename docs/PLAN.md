# My Portfolio Plan

> Short plan for my developer portfolio, built from my earlier planning sessions (14 Oct 2026).
> Project folder: `C:\Users\sajid\OneDrive\Desktop\own-portfolio`. All docs are in `docs/`:
> `PLAN.md` (this file, the **map**) · `PROJECT_GUIDE.md` (the **manual**) · `STEPS.md` (log of every step I do).

---

## 1. Where I am now

| Item | Status |
|---|---|
| Plan and full guide | ✅ Written |
| Node v24, npm v11, Git, VS Code | ✅ Installed |
| Next.js project created | ⬜ Not yet |
| GitHub / Vercel / Spline / Web3Forms accounts | ⬜ Not yet |
| Portfolio live on Vercel | ⬜ Not yet |
| 3 MERN projects | ⬜ Not started |
| Resume PDF | ⬜ Not yet |

**Goal:** A professional portfolio with a 3D hero and smooth animations, live for free on Vercel.
It starts with an **empty Projects section** ("Currently building…"). I add 3 MERN projects and my resume later.

**My rule:** the portfolio is the *frame*, my projects are the *picture*.
Spend **max 1 week** on the portfolio, then build projects.

---

## 2. Decisions already made

| Topic | Choice |
|---|---|
| Framework | Next.js (App Router, **JavaScript**, `src/` folder) |
| Styling | Tailwind CSS |
| Animation | Motion (`motion/react`) |
| 3D | Spline, **only in the Hero** (static image on small phones) |
| Icons | react-icons |
| Contact form | Web3Forms (free, no backend) |
| Content | Everything in **one file**: `src/data/portfolio.js` |
| Hosting | GitHub → Vercel (auto deploy on every push to `main`) |
| Sections | Navbar · Hero · About · Skills · Projects · Contact · Footer |

---

## 3. Where the code lives

✅ **Decided (14 Oct):** `C:\Users\sajid\OneDrive\Desktop\own-portfolio`

This folder is **inside OneDrive**, and `node_modules` has **thousands of files**.
To avoid slow installs and strange errors:
- **Pause OneDrive sync** before `npm install` or `create-next-app` (OneDrive icon → Settings → Pause syncing).
- If the dev server acts strangely (files "in use", missing files), pause sync and restart `npm run dev`.
- GitHub is my real backup. Push often.

---

## 4. Phase 1: Build the portfolio (7 days, 15 to 21 Oct)

Each day: learn the idea → write the code → run it → Claude reviews → `git commit` + `git push`.

| Day | Build | What I learn | Done when |
|---|---|---|---|
| 1 | `create-next-app`, install packages, clean the starter, **push to GitHub, deploy to Vercel** | Project setup, git basics, deploy | A (blank) live `.vercel.app` link works |
| 2 | Folders, `portfolio.js`, `layout.js` (font + SEO), `page.js` | Imports/exports, metadata, `next/font` | Page shows all section names in order |
| 3 | `Navbar` (mobile menu) + `Hero` + `HeroScene` (Spline 3D) | `useState`, server vs client components | 3D moves with the mouse; menu works on a phone |
| 4 | `About` + `Skills` + `FadeIn` animation | `map()`, props, Motion `whileInView` | Sections fade in on scroll |
| 5 | `Projects` (empty state) + `ProjectCard` + `Contact` + `Footer` | Conditional rendering, forms, `fetch`, env variables | Contact form sends a real email to me |
| 6 | Polish: phone testing, hover effects, Lighthouse | Responsive design, performance | Lighthouse ≥ 90 on desktop |
| 7 | OG image, favicon, README, share the link on GitHub and LinkedIn | SEO basics | Link preview looks good on LinkedIn |

**Stop on day 7, even if it is not perfect.** I can polish later.

---

## 5. Phase 2: Build 3 MERN projects (22 Oct to about 28 Nov)

Go from simple to advanced. Each one teaches something new:

| # | Suggested project | New skill it shows | Target |
|---|---|---|---|
| 1 | **Task Manager / Kanban** | JWT auth, full CRUD, protected routes | ~1 Nov |
| 2 | **Blog platform** | Image upload (Cloudinary), comments, rich text | ~13 Nov |
| 3 | **E-commerce store** *or* **Job board** | Roles (admin/user), cart or search/filter, payments (Stripe test) | ~28 Nov |

**Every project must have:** auth · CRUD with MongoDB · responsive UI · loading and error states · live deploy · README with screenshots.

**Free hosting:** React on Vercel · Express API on Render · MongoDB Atlas (M0) · Cloudinary for images.

**After each project:** add it to `projects` in `portfolio.js` → push. The "Currently building" message disappears by itself.

> **English Janala** (my Programming Hero assignment) is good practice, but many students have the same one.
> Don't count it as one of the 3. I can pin it on GitHub as practice.
> My **Codeforces / Python** practice can go in About as "I practice problem solving".

---

## 6. Phase 3: Resume and job applications

- **Start applying after 2 projects are live** (about mid-November). Don't wait for all 3.
- Resume: 1 page PDF → `public/resume.pdf` → set `resumeUrl: "/resume.pdf"` → push. The Resume button appears by itself.
- Resume must include: portfolio link, GitHub, LinkedIn, skills, projects with links (2–3 bullet points each), education.
- Optional later: custom domain (~$10/year).

---

## 7. Things only I can prepare (no code needed)

- [ ] Create **GitHub** account. Write my username here: `________`
- [ ] Create **Vercel** account (log in with GitHub)
- [ ] Create **Spline** account. Find or remix a 3D scene for the hero
- [ ] Get a **Web3Forms** access key (sent to my email)
- [ ] **LinkedIn** profile URL: `________`
- [ ] Pick a **profile photo**. `Desktop\Job Application\sajid-formal-bg.jpg` could work. Crop it square and compress it at squoosh.app
- [ ] Write a 3–4 line **About me**: who I am → what I build → what I'm learning → what job I want
- [ ] Choose **1 accent color** (e.g. cyan or violet) on a dark background

---

## 8. How I work with Claude

- Claude is my **instructor / senior dev**. We go **one section at a time**.
- For each section: Claude explains the idea → gives code with comments → I type and run it → Claude reviews my code.
- Small "try it yourself" tasks so I can **explain my code in interviews**.
- When a plan changes, update this file and the **Progress Log** in `PROJECT_GUIDE.md`.

---

## 9. Next step (today)

1. Follow **Day 1** in `STEPS.md`: create the Next.js app in this folder.
2. Create the GitHub and Vercel accounts.
3. Tell Claude after each step. We update `STEPS.md` together and deploy the first version.
