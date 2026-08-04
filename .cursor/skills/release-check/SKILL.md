---
name: release-check
description: Verify Ronin Mom changes before a commit, pull request, deployment, or handoff. Use when deciding whether a change is safe to ship or when the user requests final validation.
---

# Release Check

1. Report branch, `git status --short`, and diff scope. Protect unrelated user changes.
2. Inspect the repository's package manager, scripts, CI, and generated-file conventions. Verified baseline: npm (`package-lock.json`); scripts `dev`, `build`, `start` only; CI builds with `npm ci --legacy-peer-deps` and `npm run build`.
3. Run only the supported validation commands that exist and are relevant to the diff. Do not invent lint, type-check, test, or content-validation scripts when `package.json` does not define them; prefer `npm run build` for production validation.
4. Smoke-check the homepage, About, blog/journal listing (`/blog`), a representative article (`/blog/[slug]`), signup or newsletter, robots (`public/robots.txt`), and sitemap (`public/sitemap.xml`) when those routes or files exist.
5. Spot-check rendered metadata and structured data.
6. Require visual QA evidence for changed public routes.
7. Separate new regressions, existing warnings, optional improvements, and environment failures.

Return a clear ready, ready-with-warnings, or blocked verdict with evidence. Do not commit, push, merge, or deploy unless separately requested.
