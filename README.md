# Raphael Kamau — Full-Stack Developer Portfolio

A modern, responsive personal portfolio website built with **React**, **TypeScript**, and **Vite**. Showcases full-stack development expertise in MERN applications, AIoT systems, and geospatial/environmental projects.

![TypeScript](https://img.shields.io/badge/TypeScript-73.7%25-3178c6?style=flat-square)
![CSS](https://img.shields.io/badge/CSS-22.9%25-563d7c?style=flat-square)
![HTML](https://img.shields.io/badge/HTML-2%25-e34c26?style=flat-square)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite)

## 🚀 Features

- **Responsive Design** — Mobile-first, works seamlessly on all screen sizes
- **Smooth Animations** — Framer Motion–powered entrance effects and hover interactions
- **Form Validation** — React Hook Form + Zod schema validation for the contact form
- **Accessible** — Focus-visible outlines, semantic HTML, reduced-motion support
- **Performance Optimized** — Vite hot module reloading for fast development, optimized production builds
- **Modern Styling** — CSS custom properties with a cohesive "Field Console" design system

## 📋 Sections

- **Hero** — Eye-catching introduction with social media links (LinkedIn, GitHub)
- **About** — Background and professional summary
- **Skills** — Technical competencies with visual organization
- **Education** — Timeline of academic and professional development
- **Projects** — Featured work with hover overlays and status badges
- **Contact** — Message form with real-time validation
- **Navigation** — Sticky navbar with smooth scroll anchors and active link tracking
- **Footer** — Copyright and additional links

## 🎨 Design System

The portfolio uses a grounded, technical aesthetic inspired by field instruments and geospatial visualization:

| Token | Color | Usage |
|-------|-------|-------|
| `--ink` | `#0E1D18` | Dark section backgrounds, deep forest tone |
| `--canopy` | `#16302A` | Elevated surfaces on dark backgrounds |
| `--stone` | `#F1EFE4` | Light section backgrounds, warm stone |
| `--signal` | `#C98A2B` | Primary accent (ochre), CTAs and highlights |
| `--moss` | `#4C7A63` | Secondary accent, links and badges |

**Typography:**
- Display: Space Grotesk (bold, headlines)
- Body: Inter (readable, body text)
- Mono: JetBrains Mono (labels, code-like elements)

## 🛠️ Tech Stack

### Runtime & Build
- **React 19** — UI framework
- **TypeScript ~6.0** — Static typing
- **Vite 8** — Lightning-fast dev server and build tool

### Form & Validation
- **React Hook Form 7.75** — Performant form state management
- **Zod 4.4** — TypeScript-first schema validation
- **@hookform/resolvers** — Bridge for form validation

### UI & Styling
- **React-Bootstrap 2.10** — Component library (responsive grid, forms, buttons)
- **Bootstrap 5.3** — CSS framework
- **Framer Motion 12** — Animation library

### Icons
- **React Icons 5.6** — Icon library (Font Awesome, Feather, etc.)

### Developer Experience
- **ESLint 10** — Code linting
- **TypeScript ESLint 8.58** — TS-specific linting rules

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/kamunyuraphael/myportfolio.git
cd myportfolio

# Install dependencies
npm install
```

## 🚀 Running Locally

```bash
# Start development server (HMR enabled)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The app will hot-reload as you edit files.

## 🏗️ Building for Production

```bash
# Type-check and build
npm run build

# Preview production build
npm run preview
```

Build output is in the `dist/` directory.

## 🔍 Linting

```bash
# Check code quality
npm run lint

# Fix fixable issues
npm run lint -- --fix
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar with scroll anchors
│   └── Footer.tsx          # Footer section
├── sections/
│   ├── Hero.tsx            # Landing hero with intro and CTAs
│   ├── About.tsx           # Professional background
│   ├── Skills.tsx          # Technical skills and competencies
│   ├── Education.tsx       # Education timeline
│   ├── Projects.tsx        # Featured projects with descriptions
│   └── Contact.tsx         # Contact form with validation
├── types/
│   └── form.ts             # Zod schemas and TypeScript types for forms
├── data/
│   └── [data files]        # Static content and constants
├── assets/
│   └── [images]            # Static images
├── App.tsx                 # Root component and page orchestration
├── main.tsx                # React DOM entry point
└── index.css               # Design tokens, theming, and global styles

public/
└── [static files]          # Served as-is by Vite

vite.config.ts             # Vite configuration
tsconfig.json              # TypeScript configuration
eslint.config.js           # ESLint configuration
package.json               # Project metadata and dependencies
```

## 🔗 Form Validation

The contact form uses **Zod** for runtime schema validation:

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

## ✨ Animations

Framer Motion powers smooth, declarative animations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Animated content
</motion.div>
```

Project card images scale on hover, and overlays fade in smoothly for a polished feel.

## ♿ Accessibility

- Focus-visible outlines on all interactive elements (2px signal color)
- Semantic HTML structure (nav, main, section, footer)
- Alt text for images (when provided)
- `prefers-reduced-motion` support (disables animations for users who prefer it)
- ARIA labels and form validation feedback

## 📱 Responsive Design

Breakpoints follow Bootstrap conventions:
- **Mobile:** < 576px
- **Tablet:** 576px – 991px
- **Desktop:** ≥ 992px

Hero section adjusts height and font sizing fluidly. Navigation collapses into an offcanvas drawer on mobile.

## 🚀 Deployment

This is a static SPA (Single Page Application). Deploy the `dist/` folder to any static host:

- **Vercel** — `npm run build` → connect GitHub repo
- **Netlify** — drag & drop `dist/` or connect GitHub
- **GitHub Pages** — configure `vite.config.ts` with base path
- **AWS S3 + CloudFront** — sync `dist/` folder

## 📝 License

This project is open source. Feel free to adapt it for your own portfolio.

## 👤 About

**Raphael Kamau Kamunyu** — Full-Stack Developer specializing in MERN applications, AIoT systems, and geospatial/predictive data tools for environmental monitoring.

- 🔗 [Website](https://myportfolio-five-blush-43.vercel.app/)
- 🔗 [LinkedIn](https://linkedin.com/in/raphael-kamau-kamunyu)
- 🐙 [GitHub](https://github.com/kamunyuraphael)

---

Built with ❤️ using React, TypeScript, and Vite.
