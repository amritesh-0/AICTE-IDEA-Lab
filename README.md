# AICTE IDEA Lab Website

It presents institutional information, members, students, facilities, event highlights, and the AICTE IDEA Lab Scheme document in a modern single-page interface.

## Overview

- Framework: React 18 + TypeScript
- Build system: Vite 5
- Styling: Tailwind CSS
- Motion: Framer Motion
- Icons: Lucide React
- Routing: React Router

## Live Application Scope

Current top-level routes:

- `/about` (also `/`): About AICTE IDEA Lab, leadership, highlights, event banner
- `/members`: Faculty and members
- `/students`: Student contributors and ambassadors
- `/facilities`: Infrastructure and facilities
- `/scheme`: AICTE-IDEA Lab Scheme page with document access

## Repository Structure

```text
.
├── public/
│   ├── images/                         # Logos and static image assets
│   ├── Events/                         # Event PDFs and media
│   └── IDEA Lab scheme_doc.pdf         # Official scheme document
├── src/
│   ├── components/                     # Header, sidebar, footer, shared UI
│   ├── config/                         # Central asset path config
│   ├── pages/                          # Route pages
│   ├── App.tsx                         # Router + global layout
│   ├── main.tsx                        # App bootstrap
│   └── index.css                       # Tailwind and global animations/styles
├── package.json
└── vite.config.ts
```

## Local Development

### Prerequisites

- Node.js 18+ (recommended LTS)
- npm 9+

### Setup

```bash
git clone https://github.com/amritesh-0/AICTE-IDEA-Lab.git
cd AICTE-IDEA-Lab
npm install
```

### Run

```bash
npm run dev
```

Default dev server is provided by Vite (typically `http://localhost:5173`).

## Build and Quality Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build in dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint checks
```

## Production Deployment

Build artifacts are generated in `dist/`.

```bash
npm run build
```

Deploy `dist/` to any static host (Netlify, Vercel, S3+CloudFront, Nginx, etc.).

### Important: SPA Rewrite Rule

Because this app uses client-side routing, configure your host to rewrite unknown paths to `index.html`.

Example behavior:

- Request `/scheme` -> serve `index.html`
- React Router resolves route in browser

Without this rewrite, direct refresh on non-root routes may return `404`.

## Content and Asset Updates

- Student/member/faculty content: update page data arrays inside `src/pages/*.tsx`
- Navigation labels/routes: `src/components/Header.tsx`, `src/components/Sidebar.tsx`, `src/App.tsx`
- Footer quick links: `src/components/Footer.tsx`
- Static assets/PDFs: place under `public/` and reference with absolute path (for example `/Events/file.pdf`)

## Engineering Notes

- Keep image and PDF paths URL-safe; for paths with spaces, use encoded URLs where needed.
- Run `npm run build` before release to catch route/type/build regressions.
- Keep UI changes consistent with existing visual system (Tailwind + Framer Motion).

## Contribution Workflow

1. Create a feature branch.
2. Implement changes with focused commits.
3. Run lint and build locally.
4. Open PR with summary, screenshots (if UI changes), and test notes.

## License

This repository currently does not include a license file. Add one if distribution terms are required.
