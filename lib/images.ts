/** Brand imagery — never sourced from article frontmatter. */
export const brandImages = {
  homeHero: {
    src: '/images/brand/roninmom-home-hero.webp',
    width: 1536,
    height: 1024,
    alt: 'Illustration of a mother and four children learning, cooking, and making things together around a kitchen table.',
  },
  aboutEditorial: {
    src: '/images/brand/roninmom-about-editorial.webp',
    width: 1122,
    height: 1402,
    alt: 'A family worktable with an open notebook, well-used books, linen, mending supplies, herbs, and hands sharing the space.',
  },
} as const

/** Descriptive alts for local article covers, keyed by slug. */
export const postImageAlt: Record<string, string> = {
  'shoe-free-home-with-kids':
    'A light-wood entryway bench with an upholstered seat, two open shoe shelves, a woven floor mat, a wall hook with a tote, and a potted plant.',
  'small-entryway-shoe-storage':
    'Open shelves under a light-wood entryway bench holding adult sneakers, flats, and a child-sized pair.',
  'entryway-mat-boot-tray-system':
    'A woven rectangular mat on a light wood floor in front of an entryway bench.',
  'shoe-free-home-guests-accessibility':
    'An entryway bench with a seat and open shoe shelves, and a wall hook holding a canvas tote.',
  'low-tox-starter-kit':
    'A small set of household cleaning tools and refillable containers on a kitchen surface.',
  'organic-cotton-dish-cloths':
    'Folded reusable cloth towels stacked for everyday kitchen use.',
  'self-sufficient-living':
    'A parent and child tending vegetables together in a garden.',
  'holistic-wellness':
    'A family walking together through a sunlit park.',
  'glass-bottles-sustainable-living':
    'Assorted glass food-storage jars arranged on a kitchen shelf.',
}

export function hasCoverImage(image?: string | null): boolean {
  return Boolean(image && image.trim().length > 0)
}

export function coverAlt(slug: string, title: string): string {
  return postImageAlt[slug] || title
}
