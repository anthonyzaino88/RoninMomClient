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
    'A tight hallway with an open metal shoe rack of everyday pairs, a child-sized pair on the lowest shelf, a woven basket of shoes, and a closed cabinet in the same frame.',
  'entryway-mat-boot-tray-system':
    'A raised-edge boot tray holding muddy rain boots and wet sneakers beside an interior mat, with an outdoor scraper visible through an open door.',
  'shoe-free-home-guests-accessibility':
    'A firm empty hallway bench with a mostly open shoe shelf, an empty floor tray, a stool holding clean socks and slippers, and a long-handled shoe horn on a wall hook.',
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
  'small-space-laundry-system':
    'A yellow flexible laundry tote of clothes on a wood floor beside a compact white folding drying rack with two cloths, and a wooden stool stacked with folded towels.',
  'indoor-clothes-drying-rack-small-space':
    'A white folding drying rack with two shirts near a fogged window, and a green hanging clip dryer holding socks on a wall peg.',
  'family-laundry-hamper-system':
    'A round wicker laundry basket on a wood floor beside a child’s shirt and socks that missed the basket, with a plaid shirt draped over a dresser drawer.',
  'laundry-folding-put-away-small-space':
    'A wood table with two stacks of folded clothes, a chair holding an empty cloth basket, and a shirt hanging from a door handle.',
}

/** Quiet public note for still lifes that should not read as household photography. */
export const postImageNote: Record<string, string> = {
  'shoe-free-home-with-kids':
    'Editorial still life — not a household test.',
  'small-entryway-shoe-storage':
    'Editorial still life — not a household test.',
  'entryway-mat-boot-tray-system':
    'Editorial still life — not a household test.',
  'shoe-free-home-guests-accessibility':
    'Editorial still life — not a household test.',
  'small-space-laundry-system': 'Editorial still life — not a household test.',
  'indoor-clothes-drying-rack-small-space':
    'Editorial still life — not a household test.',
  'family-laundry-hamper-system':
    'Editorial still life — not a household test.',
  'laundry-folding-put-away-small-space':
    'Editorial still life — not a household test.',
}

export function hasCoverImage(image?: string | null): boolean {
  return Boolean(image && image.trim().length > 0)
}

export function coverAlt(slug: string, title: string): string {
  return postImageAlt[slug] || title
}

export function coverNote(slug: string): string | undefined {
  return postImageNote[slug]
}

/** Optional object-position so wide still lifes keep the useful side in a 16:10 crop. */
export const postImagePosition: Record<string, string> = {
  'laundry-folding-put-away-small-space': '22% 50%',
}

export function coverObjectPosition(slug: string): string | undefined {
  return postImagePosition[slug]
}
