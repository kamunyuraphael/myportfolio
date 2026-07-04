# Raphael Kamau — Full‑Stack Developer Portfolio

[Live demo](https://myportfolio-five-blush-43.vercel.app/) · [LinkedIn](https://linkedin.com/in/raphael-kamau-kamunyu) · [GitHub](https://github.com/kamunyuraphael)

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen?style=flat-square)](https://myportfolio-five-blush-43.vercel.app/)
![TypeScript](https://img.shields.io/badge/TypeScript-73.7%25-3178c6?style=flat-square)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)

A modern, responsive personal portfolio website built with React, TypeScript and Vite. It showcases full‑stack development expertise (MERN), AIoT integrations, and geospatial/predictive-data tools for environmental monitoring.

---

## Table of Contents

- [Features](#features)
- [Demo / Screenshots](#demo--screenshots)
- [Tech Stack](#tech-stack)
- [Design System & Accessibility](#design-system--accessibility)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Quick start](#quick-start)
  - [Available scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Form Validation (example)](#form-validation-example)
- [Animations & UX](#animations--ux)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Author & Contact](#author--contact)

---

## Features

- Responsive, mobile-first layout with a clear visual hierarchy
- Smooth UI transitions (Framer Motion) and accessible motion preferences
- Contact form with client-side validation (React Hook Form + Zod)
- Semantic HTML and accessibility best practices (ARIA labels, focus-visible)
- Performance-oriented build using Vite
- Clean, maintainable TypeScript codebase and ESLint rules

---

## Demo / Screenshots

Live demo: https://myportfolio-five-blush-43.vercel.app/

Add screenshots to `public/` and reference them here for the repo README:

![Homepage preview](./public/screenshot-home.png)  
*Replace `screenshot-home.png` with a production screenshot to show the site.*

---

## Tech Stack

- Runtime & build: React, TypeScript, Vite
- Styling & components: Bootstrap 5 / React-Bootstrap, CSS custom properties
- Animation: Framer Motion
- Forms & validation: React Hook Form + Zod
- Icons: React Icons
- DX: ESLint, TypeScript ESLint

---

## Design System & Accessibility

Color tokens and typography are used consistently across the site:

- Tokens: `--ink`, `--canopy`, `--stone`, `--signal`, `--moss`
- Typography: Space Grotesk (display), Inter (body), JetBrains Mono (mono)
- Accessibility:
  - Focus-visible outlines for keyboard users
  - Semantic landmarks (nav, main, section, footer)
  - Prefers-reduced-motion support
  - Alt text for meaningful images and ARIA labels where required

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or Yarn)

### Quick start

```bash
# Clone the repository
git clone https://github.com/kamunyuraphael/myportfolio.git
cd myportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 — the app hot-reloads as you edit.

### Available scripts

- npm run dev — Start development server (HMR)
- npm run build — Build production assets
- npm run preview — Preview the production build locally
- npm run lint — Run ESLint checks
- npm run lint -- --fix — Auto-fix lintable issues

---

## Project structure

Key files and folders:

```
src/
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── types/
│   └── form.ts
├── data/
├── assets/
├── App.tsx
├── main.tsx
└── index.css
public/
└── [static files]
vite.config.ts
tsconfig.json
package.json
```

---

## Form validation (example)

Contact form schema (Zod + TypeScript):

```typescript
// src/types/form.ts
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

This schema is used with React Hook Form via @hookform/resolvers for typed, ergonomic form validation.

---

## Animations & UX

Framer Motion is used for declarative animations and entrance transitions. Respecting `prefers-reduced-motion` is implemented to reduce motion for users who opt out.

Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* content */}
</motion.div>
```

---

## Deployment

This portfolio is a static SPA — build output is in `dist/`. Deploy options:

- Vercel — connect the repo and set `npm run build` as the build command (already deployed at the demo link)
- Netlify — connect repo or drag & drop `dist/`
- GitHub Pages — configure `vite.config.ts` base if hosting under a subpath
- AWS S3 + CloudFront — sync `dist/` to a public bucket

---

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a topic branch: `git checkout -b feat/short-description`
3. Make changes and add tests where relevant
4. Lint and verify: `npm run lint` and `npm run build`
5. Open a pull request with a clear description of changes

Add a CONTRIBUTING.md file if you want to formalize guidelines (I can draft one).

---

## License

This project is open source. Add a LICENSE file to explicitly state the license (for example: MIT). If you want, I can add a recommended LICENSE file and update the README badges accordingly.

---

## Author & Contact

**Raphael Kamau Kamunyu** — Full‑Stack Developer

- Website: https://myportfolio-five-blush-43.vercel.app/  
- LinkedIn: https://linkedin.com/in/raphael-kamau-kamunyu  
- GitHub: https://github.com/kamunyuraphael

---

Built with ❤️ — React, TypeScript, and Vite.
