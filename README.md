# Sajidur Rahman | Developer Portfolio

My personal portfolio website, built with **Next.js 16, React 19, Tailwind CSS v4 and Motion**.

🔗 **Live site:** [sajidur-rahman.vercel.app](https://sajidur-rahman.vercel.app)

![Preview of the portfolio](docs/images/social-preview.png)

## About

I'm a full-stack developer (MERN) with a B.Sc. in Computer Science & Engineering from East West University. This site introduces me, my skills and the projects I'm building, and lets recruiters contact me directly.

It is a single-page site. **All content lives in one data file** (`src/data/portfolio.js`), so updating my bio, skills or projects never means touching component code.

## Features

- **Light / dark mode** with a toggle that remembers the visitor's choice (and follows their system setting on the first visit)
- **Responsive** from small phones to large screens, with a mobile menu
- **Animations with Motion:** staggered fade-ins, skill logos that pop in, skill titles that flip in 3D, and cards that tilt toward the mouse
- **Respects "reduce motion"** accessibility settings
- **Working contact form** (Web3Forms), with loading, success and error states and a spam trap. No backend needed
- **Data-driven content:** sections render from `src/data/portfolio.js`. The Projects section shows a "Currently building" state until projects are added, then switches to project cards automatically
- **SEO:** page title and description, a generated social preview image, and a generated favicon
- **Optimized images** with `next/image` (the profile photo is served as an ~18 KB WebP)
- **Optional 3D hero scene** (Spline), loaded only on larger screens so phones never download it

## Tech Stack

| Area | Tools |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Motion](https://motion.dev) |
| Theme | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Contact form | [Web3Forms](https://web3forms.com) |
| 3D (optional) | [Spline](https://spline.design) |
| Hosting | [Vercel](https://vercel.com) (auto-deploys on every push to `main`) |
| Code quality | ESLint, Prettier |

## Project Structure

```
src/
├── app/
│   ├── layout.js             # Fonts, SEO metadata, theme provider
│   ├── page.js               # Puts all sections in order
│   ├── globals.css           # Tailwind + dark mode setup
│   ├── icon.js               # Generated favicon ("SR" monogram)
│   ├── apple-icon.js         # Generated iPhone home screen icon
│   └── opengraph-image.js    # Generated social preview image
├── components/
│   ├── Navbar.jsx            # Sticky navbar, mobile menu, theme toggle
│   ├── Hero.jsx              # Intro, buttons, quick facts, photo
│   ├── HeroScene.jsx         # Optional 3D scene (desktop only)
│   ├── About.jsx             # Quick info card + story
│   ├── Skills.jsx            # Skills section
│   ├── SkillCard.jsx         # Animated card (pop-in logos, 3D tilt)
│   ├── Projects.jsx          # Empty state or project grid
│   ├── ProjectCard.jsx       # One project: image, tags, links
│   ├── Contact.jsx           # Contact details
│   ├── ContactForm.jsx       # Form (Web3Forms)
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│   └── ui/                   # Small reusable pieces
│       ├── FadeIn.jsx
│       ├── SectionHeading.jsx
│       └── SocialLinks.jsx
└── data/
    └── portfolio.js          # ALL site content (edit this to update the site)
```

## Getting Started

**Requirements:** Node.js 20 or newer.

```bash
# 1. Clone the repo
git clone https://github.com/sajidur70/portfolio.git
cd portfolio

# 2. Install packages
npm install

# 3. Add the contact form key (see below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_WEB3FORMS_KEY=your-web3forms-access-key
```

Get a free key at [web3forms.com](https://web3forms.com). Without a key, the contact form is replaced by an "email me" message, so the site still works. On Vercel, add the same variable under **Settings → Environment Variables**.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Check the code with ESLint |

## Updating the Content

Everything is in `src/data/portfolio.js`:

- **Bio, title, location, availability:** `personal` and `about`
- **Skills:** `skills` (logos and brand colors are set in `src/components/SkillCard.jsx`)
- **Projects:** add an object to `projects` (a template is in the comments). The "Currently building" section disappears automatically
- **Resume:** put `resume.pdf` in `public/` and set `resumeUrl: "/resume.pdf"`. The Resume buttons appear automatically

## Documentation

I documented how I built this site, step by step:

- [`docs/STEPS.md`](docs/STEPS.md): every step, with the code and an explanation of each part
- [`docs/PROJECT_GUIDE.md`](docs/PROJECT_GUIDE.md): requirements, decisions and checklists
- [`docs/PLAN.md`](docs/PLAN.md): the overall plan

## Contact

- **Email:** [sajidurrahmansahib@gmail.com](mailto:sajidurrahmansahib@gmail.com)
- **LinkedIn:** [sajidur-rahman-sajidur319370](https://www.linkedin.com/in/sajidur-rahman-sajidur319370/)
- **GitHub:** [@sajidur70](https://github.com/sajidur70)
