# Rakesh Garlapati — Portfolio

Modern, backend-focused engineering portfolio built with **Vite + React + TypeScript + Tailwind** and deployed to **GitHub Pages**.

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment (GitHub Pages)

This repo deploys `dist/` to GitHub Pages using `gh-pages`:

```bash
npm run deploy
```

### Base path

GitHub Pages serves this site under `/my-portfolio/`, so Vite is configured with:

- `vite.config.ts`: `base: "/my-portfolio/"`

If you **rename the repo**, update that `base` value accordingly.

## Editing content (no JSX hunting)

Most content is data-driven and lives in:

- `src/content/experience.ts`
- `src/content/projects.ts`
- `src/content/skills.ts`
- `src/content/highlights.ts`
- `src/content/links.ts`

## Architecture overview

- `src/app/`: app-level wiring (theme provider, `App.tsx`)
- `src/components/ui/`: reusable UI primitives (Button, Card, Tag, SectionHeading, Reveal)
- `src/components/layout/`: layout components (header, footer, section wrapper)
- `src/sections/`: page sections (Hero, About, Experience, Projects, Skills, Contact)
- `src/styles/`: global styles and design tokens

