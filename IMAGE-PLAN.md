# Ronin Mom image plan

## Image system

Use three separate asset groups:

1. **Brand imagery** — homepage and About assets. These never come from article frontmatter.
2. **Article covers** — one accurate image per article. Never reuse an unrelated cover.
3. **Pillar/category imagery** — optional reusable visuals for category landing pages, kept separate from both groups above.

If an article does not have an accurate image, render it without a thumbnail until one is available.

## Original generated brand assets

### Homepage hero

- Web asset: `generated/roninmom-home-hero.webp`
- Archival source: `generated/roninmom-home-hero-original.png`
- Dimensions: 1536 × 1024
- Suggested repository location: `public/images/brand/roninmom-home-hero.webp`
- Suggested alt text: `Illustration of a mother and four children learning, cooking, and making things together around a kitchen table.`
- Use only on the homepage or a brand-story section. Do not assign it to an article.

Final generation prompt:

> Premium contemporary editorial illustration of a mother and four children naturally gathered around a worn wooden kitchen table, combining homeschool work, vegetable preparation, mending, and herbs in a warm lived-in home. Painterly gouache and colored-pencil texture on subtle paper grain; warm cream, forest green, muted olive, clay, ochre, and natural wood. Candid, believable anatomy, simplified faces, no text, logos, or generic influencer styling.

### About-page editorial image

- Web asset: `generated/roninmom-about-editorial.webp`
- Archival source: `generated/roninmom-about-editorial-original.png`
- Dimensions: 1122 × 1402
- Suggested repository location: `public/images/brand/roninmom-about-editorial.webp`
- Suggested alt text: `A family worktable with an open notebook, well-used books, linen, mending supplies, herbs, and hands sharing the space.`
- This is a privacy-conscious editorial placeholder. Replace it later if the author chooses to provide a genuine family or author photograph.
- Do not use it as a cleaning, homeschooling, or product article cover.

Final generation prompt:

> High-end natural editorial still-life photograph on a worn oak table: blank clothbound notebook, pencil, well-used untitled homeschool books, linen, wooden mending box, ceramic mug, and garden herbs, with only a child’s hand and adult hand entering the scene. Soft window light, realistic imperfections, warm cream, forest, clay, ochre, and wood. No readable text, logos, cleaning bottles, or staged influencer styling.

Generation mode: built-in image generation.

## Curated free-use article photography

These are source-page links, not hot-linked image URLs. Download the full-resolution image from its source page, preserve the photographer/source in project notes, crop locally, and serve the file from the Ronin Mom repository.

### Practical Self-Sufficiency

Primary choice:

- [Father and daughter tending a vegetable garden — Pexels](https://www.pexels.com/photo/father-and-daughter-gardening-4894603/)
- Suggested filename: `self-sufficient-family-gardening.jpg`
- Suggested alt: `A parent and child tending vegetables together in a garden.`

Alternative:

- [Mother and son harvesting in a greenhouse — Pexels](https://www.pexels.com/photo/mother-picking-red-peppers-with-her-son-in-a-greenhouse-5479041/)

### Holistic Wellness / family rhythms

Primary choice:

- [Family of four walking through a sunlit park — Pexels](https://www.pexels.com/photo/backview-of-a-family-walking-on-park-5290403/)
- Suggested filename: `family-wellness-outdoor-rhythm.jpg`
- Suggested alt: `A family walking together through a sunlit park.`

Alternative:

- [Family walking in a woodland setting — Pexels](https://www.pexels.com/photo/heartwarming-family-walk-in-woodland-setting-30266176/)

### Glass food storage / reducing plastic

Primary choice:

- [Assorted glass jars on a kitchen shelf — Unsplash](https://unsplash.com/photos/assorted-glass-jars-on-white-wooden-shelf-i-GPyFK_SJg)
- Suggested filename: `glass-food-storage-kitchen-shelf.jpg`
- Suggested alt: `Assorted glass food-storage jars arranged on a kitchen shelf.`

Alternative:

- [Clear glass jars on pantry shelves — Pexels](https://www.pexels.com/photo/clear-glass-jars-on-white-wooden-shelf-4440173/)

### Low-toxin home starter content

Use only if the current article-specific photo is not already stronger:

- [Minimal eco-friendly cleaning supplies — Pexels](https://www.pexels.com/photo/cleaning-products-and-brush-10557898/)
- Suggested filename: `low-toxin-home-starter.jpg`
- Suggested alt: `A small set of household cleaning tools and refillable containers.`

Do not use this image on the About page or for general brand identity.

### Future homeschooling article

- [Mother and child doing a home science activity — Pexels](https://www.pexels.com/photo/girl-painting-school-guide-7606133/)
- Alternative: [Mother and son creating art together — Pexels](https://www.pexels.com/photo/mother-and-son-4039179/)

These fit a specific homeschooling article, but should not replace the original homepage hero.

### DIY disinfectant article

Do not promote or commission a new cover until the article’s formula and disinfectant claims have been corrected. After revision, a truthful process photo can be selected for the actual method described.

## Keep existing accurate covers

- Shoe-free home: keep the entryway/shoe image only on that article and its feature card.
- Silicone bags: keep the product-specific image if it accurately depicts the reviewed product type.
- Paper towels: keep the cloth-towel image if it accurately reflects the article.
- Low-toxin starter kit: keep the current cleaning-products image if it is accurate; remove it from About and unrelated posts.

## Licensing notes

- Pexels permits free personal and commercial use, modification, and does not require attribution: https://www.pexels.com/license/
- Unsplash permits free personal and commercial use and does not require attribution, with restrictions such as selling an unmodified image or compiling a competing image service: https://unsplash.com/license
- Attribution is still recommended in a small image-credit record for editorial transparency.
- Avoid implying that recognizable stock subjects endorse Ronin Mom. Use stock family images only as topical article imagery, not as the author’s family.

## Cursor implementation checklist

1. Create `public/images/brand/` and place the two generated WebP assets there.
2. Keep article covers in a separate location such as `public/images/posts/`.
3. Replace homepage and About image imports with explicit brand asset paths; do not read these images from MDX/frontmatter.
4. Replace mismatched article covers only after downloading the selected stock files from their source pages.
5. Add accurate alt text based on visible content, not SEO keywords.
6. Use `next/image` with responsive `sizes`, explicit dimensions or a stable aspect-ratio wrapper, and no layout shift.
7. Preserve source URLs and photographer names in an internal asset-credit file even when attribution is optional.
8. Verify crops at 375, 768, 1024, and 1440 pixels. Do not crop out hands, heads, or the central activity.
