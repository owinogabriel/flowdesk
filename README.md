# FlowDesk

AI-powered customer support SaaS — built with React, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat&logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite)

---

## What is this?

FlowDesk is a multi-page marketing site for an AI customer support SaaS product. Built step by step as a learning project — every file, folder, and decision is intentional and explained.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, features, how it works, testimonials, CTA |
| `/pricing` | Three-tier pricing cards (Starter, Growth, Enterprise) |
| `/about` | Company story, stats, values, team, mission |
| `/contact` | Contact info + validated form with loading and success states |

---

## Tech stack

| Tool | Version | Why |
|------|---------|-----|
| [Vite](https://vitejs.dev) | 5 | Fast dev server and build tool |
| [React](https://react.dev) | 18 | UI component library |
| [TypeScript](https://typescriptlang.org) | 5 | Type safety across all files |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Utility-first styling with custom tokens |
| [React Router](https://reactrouter.com) | 6 | Client-side routing |
| [Lucide React](https://lucide.dev) | latest | Icon library |

---

## Project structure

```
flowdesk/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Fixed nav, active link indicator, mobile menu
│   │   │   └── Footer.tsx              # Dark footer with multi-column link grid
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Two-col layout with live chat mockup
│   │   │   ├── FeaturesSection.tsx     # 6-card grid with group hover effects
│   │   │   ├── HowItWorksSection.tsx   # 3 steps with dashed connector line
│   │   │   ├── TestimonialsSection.tsx # 4 cards with author avatars
│   │   │   └── CtaBanner.tsx           # Dark CTA banner
│   │   └── ui/
│   │       ├── Button.tsx              # 4 variants, supports React Router Link
│   │       └── SectionHeader.tsx       # Reusable header, light/dark/center modes
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── hooks/
│   │   ├── useScrollAnimation.ts       # IntersectionObserver fade-up with stagger
│   │   └── useScrollToTop.ts           # Instant scroll to top on route change
│   ├── data/
│   │   └── siteData.ts                 # All site content in one place
│   ├── types/
│   │   └── index.ts                    # Shared TypeScript interfaces
│   ├── App.tsx                         # Route definitions + layout shell
│   ├── main.tsx                        # React root + BrowserRouter
│   └── index.css                       # Tailwind directives + custom animations
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## Design tokens

Defined in `tailwind.config.js` and used across every component:

```js
colors: {
  ink:    '#0d0d0f',   // primary text, dark backgrounds
  paper:  '#f5f2ec',   // page background, warm off-white
  cream:  '#ede9e0',   // subtle section backgrounds, pill badges
  accent: '#e85d2f',   // burnt orange — CTAs, highlights, active states
  muted:  '#7a776f',   // secondary text
  border: '#d9d4c8',   // dividers, card borders
}
```

---

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and run

```bash
# Clone the repo
git clone https://github.com/your-username/flowdesk.git
cd flowdesk

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173 in your browser.

### Other commands

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
npm run typecheck  # run TypeScript compiler without emitting files
```

---

## Key concepts covered

**Component architecture** — layout components, reusable UI primitives, and page-level section components are kept in separate folders with a clear hierarchy.

**TypeScript interfaces** — all data shapes are defined in `src/types/index.ts` and imported wherever needed. No `any`.

**Centralised data** — every piece of site content (features, testimonials, pricing plans, nav links) lives in `src/data/siteData.ts`. Updating copy means editing one file.

**Custom hooks** — `useScrollAnimation` uses the browser's `IntersectionObserver` API to trigger CSS animations when elements enter the viewport. `useScrollToTop` resets scroll position on every route change.

**Responsive design** — mobile-first with Tailwind breakpoint prefixes (`md:`, `lg:`). The navbar collapses to a hamburger on small screens, the hero stacks vertically, and grids reflow from 1 to 2 to 3 columns.

**Form validation** — the contact form validates all fields on submit, shows inline errors, clears errors as you type, simulates an async API call, and shows a success state. No form library needed.

---

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Vite and sets the correct build settings. Done.

### Netlify

```bash
npm run build
# drag and drop the dist/ folder to netlify.com/drop
```

Or connect your GitHub repo and set:
- Build command: `npm run build`
- Publish directory: `dist`

**Important — SPA routing on Netlify**

Create a `_redirects` file inside `public/`:

```
/*  /index.html  200
```

On Vercel this is handled automatically.

---

## What to build next

- **Blog page** — `/blog` with a post list and individual post routes using `useParams`
- **Dark mode** — toggle using a `useTheme` hook and Tailwind's `dark:` variant
- **Toast notifications** — a `useToast` hook with a portal-rendered notification stack
- **Real form backend** — swap the `setTimeout` in ContactPage for a `fetch` to Resend or EmailJS
- **Authentication** — add a `/dashboard` route protected by a `RequireAuth` wrapper component

---

## License

MIT — do whatever you want with this.