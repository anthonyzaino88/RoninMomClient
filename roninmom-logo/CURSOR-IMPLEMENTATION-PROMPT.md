# Cursor implementation prompt

Add the supplied Ronin Mom logo and favicon assets to the active Ronin Mom
Next.js project.

First inspect the repository to determine whether it uses `app/`, `src/app/`,
or the Pages Router; inspect the existing metadata, manifest, header component,
and public assets before editing. Reuse the project's established structure and
do not create duplicate favicon or metadata declarations.

Use the files from this logo pack as follows:

- Install `favicon.ico` as the primary browser favicon.
- Install `icon-512.png` as the main application icon where supported.
- Install `apple-touch-icon.png` as the Apple touch icon.
- Use `icon-192.png` and `icon-512.png` in the existing web manifest only if the
  project has or needs PWA icon entries.
- Add the transparent `roninmom-mark-master.png` beside the existing real-text
  `Ronin Mom` wordmark in the header and, if it improves the existing layout,
  the footer. Do not replace the site name with text baked into an image.

Header implementation requirements:

- Preserve the current editorial typography and navigation.
- Size the emblem at approximately 30–36 px on desktop and 28–32 px on mobile,
  adjusting only when the existing header proportions require it.
- Keep the emblem and wordmark vertically aligned with a restrained gap.
- If the adjacent text already says `Ronin Mom`, treat the image as decorative
  with empty alt text and `aria-hidden="true"`.
- Preserve keyboard navigation, focus states, responsive behavior, and the
  existing home-link accessible name.
- Do not stretch, recolor, rotate, shadow, or place the mark on busy imagery.

Metadata requirements:

- Prefer Next.js file-based icon metadata when the current router supports it.
- Remove only obsolete duplicate favicon references that conflict with the new
  files.
- Update an existing manifest rather than creating a second manifest.
- Do not change unrelated SEO metadata.

After implementation, run the project's formatter, lint, type-check, tests,
and production build where available. Visually verify the header and favicon at
desktop and mobile widths, confirm that the 16 px browser icon remains
recognizable, check for missing-asset requests and layout shifts, and report
the files changed plus all validation results. Do not push or deploy.
