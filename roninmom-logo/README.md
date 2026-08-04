# Ronin Mom Logo and Favicon Pack

The new mark is an editorial `RM` ligature in Ronin Mom's deep forest, warm
paper, and muted clay-gold palette. It is designed to complement the existing
serif wordmark and remain recognizable at favicon size.

## Files

- `roninmom-mark-master.png` — transparent 1254 px master mark
- `favicon.ico` — multi-size browser favicon (16, 32, 48, and 64 px)
- `favicon-16x16.png` — 16 px browser icon
- `favicon-32x32.png` — 32 px browser icon
- `favicon-48x48.png` — 48 px browser icon
- `favicon-64x64.png` — 64 px browser icon
- `apple-touch-icon.png` — 180 px Apple touch icon on the warm-paper ground
- `icon-192.png` — 192 px PWA icon
- `icon-512.png` — 512 px PWA and Next.js icon
- `size-preview.png` — visual size test; reference only, do not publish

## Recommended Next.js use

Let Cursor first inspect whether the project uses `app/`, `src/app/`, or the
Pages Router. For an App Router project, the usual mapping is:

- copy `favicon.ico` to `app/favicon.ico` or `src/app/favicon.ico`
- copy `icon-512.png` as `app/icon.png` or `src/app/icon.png`
- copy `apple-touch-icon.png` as `app/apple-icon.png` or
  `src/app/apple-icon.png`
- keep `icon-192.png` and `icon-512.png` in `public/` only if the existing web
  manifest references them

Do not create duplicate icon declarations if Next.js file-based metadata is
already providing them.

For the site header, display the transparent master or a suitably resized copy
beside the existing real-text `Ronin Mom` wordmark. Keep the name as HTML text
for accessibility, sharp rendering, and responsive control. The emblem should
be decorative when the adjacent text already names the site (`alt=""` and
`aria-hidden="true"`).

## Design constraints

- Preserve the forest, cream, and clay-gold colors.
- Do not stretch, recolor, rotate, crop into, or add shadows to the mark.
- Do not place the mark over busy photography.
- Maintain clear space around it equal to roughly half the height of the `R`
  stem.
- Keep the favicon circular silhouette intact.

## Generation prompt

The master artwork was generated using the built-in image-generation workflow
with the following production brief:

> Create one compact RM ligature for Ronin Mom, an editorial publication about
> capable family life, intentional homes, and practical self-sufficiency. Join
> the curved leg of the R naturally to the first stroke of the M and enclose the
> monogram in a simple softened circular field-journal seal. Use flat deep
> forest green, warm paper cream, and one restrained muted clay-gold accent.
> Keep the silhouette strong and legible at 16–32 pixels. Render exactly `RM`
> and no other text. Avoid houses, leaves, hearts, people, samurai imagery,
> crests, gradients, shadows, and decorative clutter.

