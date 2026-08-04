# Cursor Prompt 1 — Integrate and Adapt the Project System

Paste this into Cursor after placing this folder structure at the root of `RoninMomClient`.

```text
You are working in the active RoninMomClient repository. Integrate and validate the repository-local AI configuration already present in AGENTS.md and .cursor/{agents,rules,skills}. Do not redesign or modify the application in this task.

1. Report the branch and `git status --short`.
2. Inspect existing AGENTS.md files, .cursor configuration, package.json, lockfile, framework, routes, content schema, Contentlayer/MDX utilities, styles, metadata, sitemap, robots, structured data, and available validation scripts.
3. Preserve user work. If tracked changes overlap this configuration, stop and report the conflict.
4. Merge rather than duplicate any existing generic guidance. Remove stale Kids Color Station branding or product assumptions from reused material.
5. Update only repository-specific statements in the AI configuration when inspection proves they are incomplete or inaccurate. Do not invent paths, commands, or schema fields.
6. Keep application source, content, dependencies, configuration, and generated output unchanged.
7. Validate:
   - print the final AGENTS.md and .cursor tree
   - confirm every skill folder matches its YAML `name`
   - confirm every project rule uses the required `.mdc` extension and parse skill, rule, and agent frontmatter
   - confirm every linked reference exists and reference depth is one level
   - search for TODOs, placeholders, stale KCS identity, coloring-page logic, Firebase rules, and print-library assumptions
   - run `git diff --check` and show `git status --short`
8. Confirm that article creation has three separate responsibilities: `roninmom-blog-authoring` for writing, `blog-editor` for independent editorial critique, and `roninmom-content-feature` for publishing mechanics.
9. Summarize each agent, rule, and skill plus the verified project paths and commands recorded.

Stop after the configuration is validated. Do not commit, push, deploy, or begin the rebrand.
```
