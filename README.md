# Portfolio

A modern, responsive personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Features smooth animations with GSAP and Lenis, a clean component architecture, and a focus on performance and accessibility.

## 🚀 Tech Stack

### Frontend Framework
- **Next.js 16.2.10** - App Router with Server Components
- **React 19.2.4** - Latest React with concurrent features
- **TypeScript 5** - Full type safety

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS with new PostCSS plugin
- **shadcn/ui** - Accessible component primitives (via `class-variance-authority`, `clsx`, `tailwind-merge`)
- **Lucide React** - Beautiful, consistent icons
- **tw-animate-css** - Pre-built Tailwind animations

### Animations & Interactions
- **GSAP 3.15** - Professional-grade animations
- **@gsap/react** - React integration for GSAP
- **Lenis 1.3.26** - Smooth scrolling

### Forms & Validation
- **React Hook Form 7.86** - Performant forms
- **@hookform/resolvers** - Validation resolvers
- **Zod 4.4.3** - Schema validation

### Developer Experience
- **ESLint 9** - Code linting with Next.js config
- **PostCSS** - CSS processing

---

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (composes sections)
├── components/
│   ├── sections/          # Page sections (composable)
│   │   ├── hero/          # Hero section
│   │   ├── intro/         # Introduction/About section
│   │   ├── tech-stack/    # Technology stack grid
│   │   ├── experience/    # Work experience timeline
│   │   └── projects/      # Project showcase
│   ├── ui/                # Reusable UI primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── field.tsx
│   │   └── separator.tsx
│   ├── animations/        # Animation utilities
│   └── loading/           # Loading components
├── data/                  # Static data (typed)
│   ├── experience.data.ts
│   ├── projects.data.ts
│   └── tech-stack.data.ts
├── lib/                   # Utility functions
├── public/                # Static assets
└── config files...
```

---

## 🎯 Features

### Sections
- **Hero** - Animated landing with smooth entrance
- **Intro** - Personal introduction/bio
- **Tech Stack** - Categorized technology grid (8 categories)
- **Experience** - Work history with role, duration, focus
- **Projects** - Project showcase with descriptions

### Technical Highlights
- **Component-driven architecture** - Each section is self-contained
- **Typed data layer** - TypeScript interfaces for all content
- **Smooth animations** - GSAP + Lenis for scroll-triggered effects
- **Responsive design** - Mobile-first with Tailwind breakpoints
- **Accessible** - Semantic HTML, ARIA labels, focus management
- **Performance optimized** - Next.js Image, font optimization, code splitting

---

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 📝 Customization

### Updating Content

All portfolio content lives in `/data` as typed constants:

| File | Purpose |
|------|---------|
| `data/experience.data.ts` | Work history entries |
| `data/projects.data.ts` | Project showcase items |
| `data/tech-stack.data.ts` | Technology categories & skills |

Example - adding a project (`data/projects.data.ts`):
```typescript
export const projects: Project[] = [
  // ...existing projects
  {
    title: "My New Project",
    description: "A brief description of what this project does.",
    imageLabel: "Project screenshot",
    imageClassName: "from-blue-300 via-purple-300 to-pink-500",
  },
];
```

Example - adding experience (`data/experience.data.ts`):
```typescript
export const experienceEntries: ExperienceEntry[] = [
  {
    key: "unique-key",
    period: "2026 - Present",
    duration: "Ongoing",
    organization: "OpenEye",
    role: "Full-Stack Web Developer",
    focus: "React, Next.js & TypeScript",
  },
];
```

### Styling

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts` (if created) or CSS-first config in globals.css
- **Component styles**: Colocated with components using Tailwind classes

### Adding Sections

1. Create component in `components/sections/<name>/`
2. Add data in `data/` if needed
3. Import and compose in `app/page.tsx`

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab/Bitbucket
2. Import project in [Vercel](https://vercel.com/new)
3. Deploy - zero config needed

```bash
# Or use Vercel CLI
npx vercel
```

### Other Platforms

The app outputs a standard Next.js build compatible with:
- Netlify
- AWS Amplify
- Docker containers
- Static export (`output: 'export'` in `next.config.ts`)

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.2.10 | React framework |
| `react` / `react-dom` | 19.2.4 | UI library |
| `tailwindcss` | ^4 | Styling |
| `gsap` / `@gsap/react` | 3.15 / 2.1.2 | Animations |
| `lenis` | 1.3.26 | Smooth scroll |
| `lucide-react` | 1.25.0 | Icons |
| `react-hook-form` | 7.86.0 | Forms |
| `zod` | 4.4.3 | Validation |
| `class-variance-authority` | 0.7.1 | Component variants |
| `clsx` / `tailwind-merge` | 2.1.1 / 3.6.0 | Class utilities |

---

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component primitives
- [GSAP](https://gsap.com/) - Animation platform
- [Lenis](https://lenis.studiofreight.com/) - Smooth scrolling
- [Lucide](https://lucide.dev/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built with ❤️ using Next.js 16 + React 19 + Tailwind CSS v4**