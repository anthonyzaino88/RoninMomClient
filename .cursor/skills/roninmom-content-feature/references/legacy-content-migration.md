# Legacy Content Migration

Use this gate before carrying older Ronin Mom material into a redesigned page, featured-content area, new content model, or new canonical URL.

## Source authority

- Treat the active `RoninMomClient` repository and its current published routes as authoritative.
- Treat older static HTML, Web Component, and `blog.json` files as migration evidence only. Do not rebuild the application around them.
- Inventory the current content files, live slugs, categories, internal links, publication dates, images, and canonical URLs before editing.
- Preserve a published slug unless a redirect is included and verified.

## Classify every legacy article

Assign one recommendation and explain why:

| Status | Meaning |
| --- | --- |
| Keep | Accurate, useful, on-brand, and sufficiently supported with only light editing needed. |
| Revise | Worth preserving, but needs meaningful sourcing, structure, tone, title, or claim corrections. |
| Hold | Do not feature or migrate as-is because material accuracy, safety, authorship, or evidence questions remain. |
| Retire | Low-value, duplicative, off-brand, or not responsibly repairable; require user approval plus a redirect or removal plan. |

Do not delete, unpublish, or redirect an article without user approval. Do not feature a Hold article while presenting the rebrand as reviewed and trustworthy.

## Known trust blocker

The published article with slug `diy-disinfectant-spray` must be classified **Hold** until rewritten and verified.

The legacy recipe combines Castile soap and vinegar and calls the mixture a disinfectant that kills germs or bacteria. Do not repeat or promote those claims:

- Dr. Bronner's current guidance says to use vinegar as a separate step because acid breaks apart Castile soap and reduces its cleaning ability: <https://www.drbronner.com/pages/castile-soap-hard-water>
- The EPA explains that disinfectant efficacy claims depend on reviewed product data, labeled organisms, use directions, and contact time: <https://www.epa.gov/pesticide-registration/selected-epa-registered-disinfectants>

Remove internal recommendations that send readers to this article until a corrected version is approved. A responsible rewrite may discuss an all-purpose **cleaner** separately from disinfection, but it must not invent efficacy claims or imply that natural automatically means safe for children, pets, or every surface.

## Known legacy URL shape

Older static content used a query URL such as `/pages/blog.html?id=<slug>`. If those URLs were ever public, test whether the active application already redirects them to `/blog/<slug>`. Add or retain permanent redirects only when the repository and deployment support them, then verify the final destination, canonical URL, status behavior, and sitemap.

## Migration report

Return:

1. The article inventory and current URLs.
2. Keep, Revise, Hold, or Retire for each affected article.
3. Claims or facts requiring sources.
4. Slug, redirect, internal-link, image, and metadata impacts.
5. The exact items requiring user approval before implementation.
