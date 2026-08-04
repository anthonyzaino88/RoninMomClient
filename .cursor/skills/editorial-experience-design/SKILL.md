---
name: editorial-experience-design
description: Design and implement engaging Ronin Mom editorial experiences. Use for homepages, article layouts, category or journal pages, newsletter sections, reading pathways, and reusable editorial components in the active frontend codebase.
---

# Editorial Experience Design

Read [Editorial patterns](references/editorial-patterns.md) before choosing modules or restructuring a page. Read `../roninmom-brand-direction/SKILL.md` for the approved identity and `../ui-design-review/SKILL.md` before declaring the result complete.

## Workflow

1. Inspect the actual framework, routes, design tokens, components, content model, image pipeline, and representative content. Do not invent APIs or schema fields.
2. Define the page job, primary reader, first-viewport promise, main action, and next reading step.
3. Build a content hierarchy before styling. Select only modules that serve the page job and use real content to test them.
4. Establish one visual idea per page: strong editorial type hierarchy, readable measure, intentional image treatment, and restrained field-journal details.
5. Implement with existing patterns and dependencies where sound. Preserve semantics, accessibility, performance, routes, analytics, and content behavior.
6. Design mobile first, then verify tablet and desktop. Test long titles, missing or varied images, dense body copy, and uneven card content.
7. Use `ui-design-review`, then `visual-qa`; revise confirmed defects before handoff.

## Quality bar

- Make the opening screen answer what Ronin Mom offers and what the reader can do next.
- Give article pages a calm reading column, useful context, clear heading rhythm, purposeful media, and a relevant next step.
- Make category pages feel curated through hierarchy and short editorial framing, not like undifferentiated archives.
- Make newsletter modules offer a concrete reader benefit and honest expectation; never use false urgency or inflated social proof.
- Vary module shape and density while keeping tokens, spacing, and behavior coherent.
- Prefer progressive enhancement and server-rendered content. Add client-side code only for real interaction.
- Avoid decorative UI that competes with reading, generic card walls, repeated pill labels, fake paper clutter, and components created only to fill space.

Do not rewrite article claims, invent family stories, add stock family imagery, or introduce dependencies without a demonstrated need.
