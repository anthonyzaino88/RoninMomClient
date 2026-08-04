# Content Model

Verified against the active repository during AI-configuration integrate. Re-inspect before editing if the tree has changed. The active repository remains authoritative.

## Stack

- Next.js 14 App Router (`app/`), React 18, TypeScript
- Contentlayer + MDX via `contentlayer.config.ts` and `next-contentlayer`
- Package manager: npm (`package-lock.json`)
- Static export: `output: 'export'` in `next.config.mjs` (images unoptimized)
- CI deploy: `.github/workflows/deploy.yml` runs `npm ci --legacy-peer-deps`, `npm run build`, publishes `./out` to GitHub Pages with `cname: roninmom.com`

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local preview |
| `npm run build` | Production build (writes static `out/`) |
| `npm start` | Serve production build |

No lint, type-check, test, or content-validation scripts are defined in `package.json`.

## Document type: `Post`

Defined in `contentlayer.config.ts`:

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | required |
| `description` | string | required |
| `date` | date | required |
| `author` | string | default `Ronin Mom` |
| `category` | string | required |
| `tags` | string list | default `[]` |
| `image` | string | optional; omit when no accurate cover exists |
| `url` | computed string | `/blog/<slug>` |
| `slug` | computed string | path under `content/blog/` |

- Content directory: `content/`
- File pattern: `blog/**/*.mdx`
- Article route: `app/blog/[slug]/page.tsx` loads `allPosts` from `contentlayer/generated`
- Listing route: `app/blog/page.tsx`

## Public routes observed

- `/` — `app/page.tsx`
- `/about` — `app/about/page.tsx`
- `/blog` — journal listing
- `/blog/[slug]` — article
- `/shop` — `app/shop/page.tsx`
- `/signup` — `app/signup/page.tsx`

## SEO surfaces observed

- Metadata base: `https://roninmom.com` in `app/layout.tsx`
- Static sitemap: `public/sitemap.xml`
- Robots: `public/robots.txt` (allows `/`, sitemap URL set)
- Structured data: Organization + FAQPage in root layout; `BlogPosting` JSON-LD on article pages

## Styles and shared UI

- Global styles: `app/globals.css` (active from root layout), plus `styles/globals.css` and `styles/home.css`
- Route/module CSS under `app/` and `components/`
- Shared components: `components/Navbar.tsx`, `components/Footer.tsx`

## Editing rules

1. Inspect `package.json`, the lockfile, `contentlayer.config.*`, content directories, route parameters, post-loading utilities, and representative MDX files before changing schema or frontmatter.
2. Record only the fields, paths, date behavior, taxonomy, image conventions, and validation commands that actually exist after re-inspection.
3. Trace how a slug becomes a URL and how author, description, image, category, and date data reach rendered output.
4. Preserve schema compatibility unless the task intentionally migrates every affected post and consumer.
5. Never fabricate publication or modification dates. A code deployment is not automatically an editorial modification.

After a schema change, validate all existing documents, generated types, route generation, and a production build (`npm run build`).
