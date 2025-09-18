# Bunny — Portfolio (React + Vite + Tailwind)

Elegant, fast, and accessible portfolio for Bisanda Jayathilaka ("Bunny") highlighting dual roles: IT Student and Badminton Coach.

## Tech Stack
- React 18 + Vite + TypeScript
- Tailwind CSS (darkMode: class)
- framer-motion (reduced motion respected)
- lucide-react icons

## Install & Run

```bash
npm i
npm run dev
npm run build
npm run preview
```

## Features
- Minimal, premium design with great spacing and typography
- Dark/Light theme with persistence (`localStorage`)
- WCAG AA contrast, keyboard navigation, skip link
- Smooth in-page scrolling and active section highlighting
- Lazy-loaded images and responsive layout
- SEO meta, Open Graph tags, and JSON-LD Person schema

## Deploy

### GitHub Pages
1. Add a repository and push the project.
2. Install `gh-pages` locally if you prefer CLI deploys (optional):
   ```bash
   npm i -D gh-pages
   ```
3. Build and push `dist` contents to `gh-pages` branch:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
4. In GitHub repo settings, enable Pages for the `gh-pages` branch.

Alternatively, set up a GitHub Action that runs `npm ci && npm run build` and publishes `dist/`.

### XAMPP
1. Run `npm run build` to create the `dist/` folder.
2. Copy `dist/` to `C:/xampp/htdocs/portfolio` (e.g., `htdocs/portfolio`).
3. Because the site uses hash-less in-page scrolling (no client routing), it works out-of-the-box. If you add client-side routes later, configure a 404 rewrite to `index.html`.

## Customize
- All editable text and links live in `src/data/content.ts`.
- Update social links, WhatsApp/Discord URLs, and project repos there.
- Replace images in `src/assets/` and `public/`.

## Notes
- CV is at `public/cv.pdf` (replace with your file as needed).
- Replace `public/og-cover.jpg` with a real banner (1200x630).
