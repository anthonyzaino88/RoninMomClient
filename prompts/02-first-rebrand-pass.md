# Cursor Prompt 2 — First Ronin Mom Rebrand Pass

Run only after Prompt 1 completes cleanly.

```text
You are working in the active RoninMomClient repository. Implement the first coherent Ronin Mom rebrand pass using the repository-local instructions, rules, skills, and read-only review agents.

Required skills:
- roninmom-brand-direction
- editorial-experience-design for public page and editorial component implementation
- roninmom-blog-authoring when public editorial copy or an article is substantively written or revised
- roninmom-content-feature when public editorial content or article presentation changes
- roninmom-seo-audit
- ui-design-review
- visual-qa
- release-check

PRE-FLIGHT
1. Report branch, `git status --short`, and sync state without changing branches.
2. Inspect the current homepage, About, Journal listing, representative article, signup/newsletter, shared navigation/footer, global styles, fonts, metadata, robots, sitemap, schema, images, and content utilities.
3. Preserve unrelated work. Stop if tracked changes overlap the files required for this task.
4. Establish a baseline using the actual supported validation commands.
5. Inventory published articles and apply the legacy-content migration gate before featuring or materially revising them. Report Keep, Revise, Hold, or Retire recommendations. Do not delete or unpublish content in this pass.

CONTENT SAFETY GATE
- Treat `diy-disinfectant-spray` as Hold until its exact cleaning and disinfecting claims are corrected and verified.
- Do not feature or recommend that article from the redesigned homepage, navigation, category modules, or related-content blocks.
- Report every existing internal link to it and propose a safe replacement or temporary removal.
- Do not silently rewrite, delete, unpublish, redirect, or change its published date. Include a separate correction recommendation for user approval.

IMPLEMENTATION GOALS
- Express Ronin Mom as a modern family field journal: warm, capable, candid, useful, and authored.
- Lead with the approved positioning and three content pillars.
- Make the first viewport concrete and give readers a clear next step.
- Replace generic gradients, emoji feature graphics, repetitive template cards, and visible samurai theming with the restrained editorial system in the brand skill.
- Build one coherent system across homepage, About, Journal, article, signup, navigation, and footer.
- Preserve published URLs and working content behavior.
- Use existing authentic photography where it fits; do not invent family imagery or claims.
- Improve metadata, structured data, sitemap, internal links, and trust signals only where rendered content supports them.
- Keep the scope to the first coherent pass. Avoid unrelated architecture rewrites and dependency additions.

REVIEW AND VALIDATION
1. Run the brand reviewer and revise every score below 4.
2. Run `blog-editor` for newly written or substantively revised editorial copy; resolve every blocking finding and record the disposition.
3. Run the content reviewer for changed MDX, frontmatter, article data, routes, or publishing behavior.
4. Run the SEO auditor on every changed public route.
5. Run visual QA on representative mobile, tablet, and desktop widths; fix and retest defects.
6. Run the release auditor and required repository commands.
7. Show `git diff --check`, `git status --short`, validation results, tested routes/viewports, screenshots or exact visual evidence, and remaining warnings.

Do not commit, push, merge, or deploy. Finish with a concise handoff listing changed files, decisions, validation evidence, and any item requiring user review.
```
