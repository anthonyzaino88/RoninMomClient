# Ronin Mom Project Instructions

## Product identity

Ronin Mom is a warm, grounded family field journal that blends honest family experience with useful, well-organized practical guides.

Positioning: Ronin Mom shares honest family experiences and practical ways to homeschool, simplify your home, live more naturally, and become more self-sufficient—without chasing perfection.

Tagline: Raising a capable family. Creating a more intentional home.

Organize the public experience around three pillars:

1. Intentional Family Life — homeschooling, family rhythms, motherhood, routines, and selective personal stories.
2. A Simpler, Healthier Home — minimalism, low-toxin living, sustainable choices, natural home care, and organization.
3. Practical Self-Sufficiency — cooking, gardening, DIY skills, preparedness, natural remedies, and learning to do more at home.

Let food and wellness support these pillars instead of becoming an unfocused catch-all category.

## Verified repository baseline

Re-inspect before relying on these if the tree has changed. Details live in `.cursor/skills/roninmom-content-feature/references/content-model.md`.

- Stack: Next.js 14 App Router, React 18, TypeScript, Contentlayer MDX, static export (`next.config.mjs`)
- Package manager: npm (`package-lock.json`)
- Scripts: `npm run dev`, `npm run build`, `npm start` (no lint/test scripts)
- Content: `content/blog/**/*.mdx` → `Post` in `contentlayer.config.ts` → `/blog/[slug]`
- Routes: `/`, `/about`, `/blog`, `/blog/[slug]`, `/shop`, `/signup`
- SEO files: `public/sitemap.xml`, `public/robots.txt`; metadata base `https://roninmom.com`

## Working principles

- Treat the active repository as the source of truth. Inspect its routes, content schema, utilities, styles, scripts, and package manager before editing.
- Preserve published URLs, content, analytics, forms, accessibility, and SEO behavior unless the task explicitly changes them.
- Extend established patterns when they are sound. Avoid unrelated refactors and new dependencies.
- Do not invent family facts, testimonials, credentials, dates, readership numbers, product testing, health claims, or affiliate relationships.
- Do not expose children's names, private details, or unpublished family imagery.
- Keep the brand personal through voice and selective experience, not unnecessary private disclosure.
- Prefer existing authentic site photography to generic stock or generated family imagery.
- Distinguish personal experience from established guidance, especially in child, health, food, remedy, and safety content.
- Classify legacy content before migrating or featuring it. Do not preserve unsupported claims merely because they are already published.
- Treat cleaning and disinfecting claims as trust-sensitive; use precise terminology and evidence for the exact formulation and use.
- Never commit, push, merge, or deploy unless the user explicitly requests it.

## Skill routing

| Work | Required skill |
| --- | --- |
| Brand, layout, public copy, typography, color, imagery | `roninmom-brand-direction` |
| Homepage, article, category, newsletter, or editorial-component design and implementation | `editorial-experience-design` |
| Article research, planning, drafting, and substantive revision | `roninmom-blog-authoring` |
| MDX, frontmatter, article routes, content data, and publishing mechanics | `roninmom-content-feature` |
| Metadata, schema, sitemap, indexation, internal links | `roninmom-seo-audit` |
| Page or component design review | `ui-design-review` |
| Browser and screenshot verification | `visual-qa` |
| Pre-handoff or pre-release verification | `release-check` |

Read the applicable `.cursor/skills/<name>/SKILL.md` before making material changes. Use the focused read-only agents in `.cursor/agents/` for an independent review when the task benefits from a separate context.

For article work, keep authorship, publishing, and review separate: use `roninmom-blog-authoring` to create the draft, `blog-editor` to challenge its reader value and authenticity, and `roninmom-content-feature` to publish it correctly. The authoring pass must not grade its own work.

## Completion standard

Report evidence, not assumptions. Separate confirmed defects, optional improvements, pre-existing warnings, and environment failures. Do not call public-facing work complete based only on a passing build.
