/**
 * Central product-recommendation registry.
 *
 * This file is the only place merchant destinations and affiliate flags should
 * live. Article MDX must not hard-code affiliate URLs.
 *
 * The registry is intentionally empty until a product has:
 * - an approved, configured affiliate (or non-affiliate editorial) relationship
 * - a documented evidence level that matches what the copy will claim
 * - a separate editorial review (health, cleaning, and disinfecting articles
 *   are out of scope until that review exists)
 *
 * Do not add placeholder merchants, example products, or invented testing.
 */

export const PRODUCT_EVIDENCE_LEVELS = [
  'personally-used',
  'directly-compared',
  'researched',
] as const

export type ProductEvidenceLevel = (typeof PRODUCT_EVIDENCE_LEVELS)[number]

export const PRODUCT_STATUSES = ['draft', 'approved', 'retired'] as const

export type ProductStatus = (typeof PRODUCT_STATUSES)[number]

/**
 * Evidence levels — what the public copy is allowed to imply:
 *
 * - personally-used: Confirmed ordinary household use by Ronin Mom. Set this
 *   only when that use has been verified. Appearing in this registry is not
 *   itself evidence of use.
 * - directly-compared: A real comparison was performed for a stated purpose.
 *   Looking at two product pages is research, not a direct comparison.
 * - researched: Based on public information (labels, manufacturer directions,
 *   standards, reputable sources). Must not be described as testing, personal
 *   use, or “our favorite.”
 *
 * Gifted items and paid sponsorships are not evidence levels. They need their
 * own on-page disclosures and must not be filed as personally-used.
 *
 * Status:
 * - draft: Not public. Rendering components must return nothing.
 * - approved: Eligible to render after editorial and evidence review.
 * - retired: Keep the record; do not render.
 */
export type ProductRecommendation = {
  /** Stable ID used in components, analytics, and related-article wiring. */
  id: string
  name: string
  merchant: string
  /** Direct merchant destination. Never a cloaked /go/ redirect. */
  url: string
  /** True only when an actual affiliate relationship is approved and configured. */
  isAffiliate: boolean
  evidence: ProductEvidenceLevel
  status: ProductStatus
  /** Editorial last-checked date (YYYY-MM-DD). Not a build or deploy timestamp. */
  lastChecked: string
  /** Article slugs that may reference this product once reviewed. */
  relatedSlugs: string[]
  /** Optional internal note. Do not treat this as public marketing copy. */
  note?: string
}

/**
 * Public catalog. Only approved, reviewed records belong here.
 *
 * Import this module only from Server Components or other build-time code.
 * Client Components must not import it — the full registry, including draft,
 * retired, and `note` fields, would then ship in the browser bundle.
 *
 * Public records are researched, non-affiliate editorial examples.
 * Held and rejected candidates stay in docs/commerce/*-product-evidence.md.
 */
export const products: readonly ProductRecommendation[] = [
  {
    id: 'llbean-washable-waterhog-doormat',
    name: 'Washable Waterhog Doormat, Honeycomb',
    merchant: 'L.L.Bean',
    url: 'https://www.llbean.com/llb/shop/126800',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: [
      'shoe-free-home-with-kids',
      'entryway-mat-boot-tray-system',
    ],
    note: 'Official L.L.Bean page checked 2026-08-15. Indoor/outdoor mat; 3/8 in door clearance; raised border; small and medium sizes are machine-washable. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-baggmuck-shoe-tray-28',
    name: 'BAGGMUCK shoe tray, indoor/outdoor/gray, 28x14"',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/baggmuck-shoe-tray-indoor-outdoor-gray-60329711/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: [
      'shoe-free-home-with-kids',
      'entryway-mat-boot-tray-system',
    ],
    note: 'Official IKEA US page, article 603.297.11, checked 2026-08-15. Polypropylene tray with a raised edge; wipe-clean. The official page does not identify it as a standing or nonslip surface. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-mackapar-shoe-rack',
    name: 'MACKAPÄR shoe rack, white, 30 3/4x12 5/8x15 3/4"',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/mackapaer-shoe-rack-white-50530993/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: ['small-entryway-shoe-storage'],
    note: 'Official IKEA US page, article 505.309.93, checked 2026-08-15. Open steel rack; holds about 6 pairs; indoor only; stackable if both units are wall-anchored. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-mackapar-shoe-cabinet',
    name: 'MACKAPÄR shoe/storage cabinet, white, 31 1/2x13 3/4x40 1/8"',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/mackapaer-shoe-storage-cabinet-white-50334751/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: ['small-entryway-shoe-storage'],
    note: 'Official IKEA US page, article 503.347.51, checked 2026-08-15. Closed cabinet with sliding doors; about 16 pairs; tipping-hazard warning requires wall anchoring. Larger shoes may need angled shelves. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-nipasen-bench',
    name: 'NIPÅSEN bench with shoe storage, black, 31 1/8x13 3/4x20 1/2"',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/nipasen-bench-with-shoe-storage-black-20586142/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: [
      'small-entryway-shoe-storage',
      'shoe-free-home-guests-accessibility',
    ],
    note: 'Official IKEA US page, article 205.861.42, checked 2026-08-15. Bench plus open shelf; about 4 pairs on the shelf; tested to 220.5 lb; pairs with the 28x14 BAGGMUCK tray. Not a medical seating product. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-mulig-drying-rack',
    name: 'MULIG drying rack, indoor/outdoor, white',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/mulig-drying-rack-indoor-outdoor-white-50228755/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: ['indoor-clothes-drying-rack-small-space'],
    note: 'Official IKEA US page, article 502.287.55, checked 2026-08-15. Fold-out wings; 20-yard drying capacity; 68 x 22 1/2 x 40 1/2 in open; four hooks. Indoor/outdoor. Wipe-clean. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-jall-drying-rack',
    name: 'JÄLL drying rack, indoor/outdoor, white',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/jaell-drying-rack-indoor-outdoor-white-80242892/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: [
      'small-space-laundry-system',
      'indoor-clothes-drying-rack-small-space',
    ],
    note: 'Official IKEA US page, article 802.428.92, checked 2026-08-15. Compact folding rack; 6-yard drying capacity; 31 x 15 3/4 x 32 1/4 in. Indoor/outdoor. Wipe-clean. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-pressa-hanging-dryer',
    name: 'PRESSA hanging dryer with 16 clothes clips, green',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/pressa-hanging-dryer-with-16-clothes-clips-green-90579157/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: ['indoor-clothes-drying-rack-small-space'],
    note: 'Official IKEA US page, article 905.791.57, checked 2026-08-15. Hanging dryer with 16 clips; 15 3/4 in diameter, 10 1/4 in height; indoor/outdoor; folds. For small items. Not a full-load rack. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-torkis-laundry-basket-9',
    name: 'TORKIS flexible laundry basket, in/outdoor, yellow, 9 gallon',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/torkis-flexible-laundry-basket-in-outdoor-yellow-50579164/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: [
      'small-space-laundry-system',
      'family-laundry-hamper-system',
    ],
    note: 'Official IKEA US page, article 505.791.64, checked 2026-08-15. Polyethylene flexible basket; 9 gallon; 24 1/2 in long, 10 3/4 in high; two handles; indoor/outdoor. Wipe with a dry cloth. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-slibb-laundry-basket-6',
    name: 'SLIBB flexible laundry basket, green, 6 gallon',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/slibb-flexible-laundry-basket-green-20567723/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: [
      'family-laundry-hamper-system',
      'laundry-folding-put-away-small-space',
    ],
    note: 'Official IKEA US page, article 205.677.23, checked 2026-08-15. Polyethylene mesh basket; 6 gallon; 15 x 11 3/8 x 14 1/8 in; max load 9 lb. Store cool and dry, away from direct sunlight. Manufacturer mesh/air-circulate note is not treated as a mildew guarantee. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-purrpingla-bag-stand-11',
    name: 'PURRPINGLA laundry bag with stand, beige, 11 gallon',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/purrpingla-laundry-bag-with-stand-beige-40609406/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-15',
    relatedSlugs: ['family-laundry-hamper-system'],
    note: 'Official IKEA US page, article 406.094.06, checked 2026-08-15. Narrow standing bag on a metal frame; 8 x 17 1/4 x 22 1/2 in; 11 gallon; two compartments; max load 282 oz. Bag is polyester (min. 90% recycled); frame is powder-coated steel. Hand wash the bag; do not tumble dry. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-tolkning-laundry-basket-11',
    name: 'TOLKNING laundry basket, handmade willow, 11 gallon',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/tolkning-laundry-basket-handmade-willow-00512618/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-16',
    relatedSlugs: [
      'small-space-laundry-system',
      'family-laundry-hamper-system',
    ],
    note: 'Official IKEA US page, article 005.126.18, checked 2026-08-16. Handmade willow; 22 x 15 x 11 in; 11 gallon; max load 13 lb; removable polyester bag; polypropylene feet. Wipe the basket dry; do not soak. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'ikea-nattgibba-laundry-basket-26',
    name: 'NATTGIBBA laundry basket, willow/handmade, 26 gallon',
    merchant: 'IKEA',
    url: 'https://www.ikea.com/us/en/p/nattgibba-laundry-basket-willow-handmade-30531936/',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-16',
    relatedSlugs: ['family-laundry-hamper-system'],
    note: 'Official IKEA US page, article 305.319.36, checked 2026-08-16. Handmade willow on a powder-coated steel frame; 23 1/2 x 14 1/4 x 24 in; 26 gallon; max load 33 lb; two sort compartments; removable inner bag. Assembly required. Wipe the weave dry. Not household-tested. No affiliate parameters.',
  },
  {
    id: 'lehmans-premium-wooden-drying-rack-large',
    name: 'Premium Wooden Clothes Drying Rack, Large',
    merchant: "Lehman's",
    url: 'https://www.lehmans.com/products/premium-wooden-clothes-drying-rack-large',
    isAffiliate: false,
    evidence: 'researched',
    status: 'approved',
    lastChecked: '2026-08-16',
    relatedSlugs: [
      'small-space-laundry-system',
      'indoor-clothes-drying-rack-small-space',
    ],
    note: "Official Lehman's US page, SKU 68748, checked 2026-08-16. Canonical URL is /products/premium-wooden-clothes-drying-rack-large (older /product/premium-floor-clothes-dryers-large/ 301s there). Amish-made; poplar frame with 3/4 in dowels; 40 ft linear drying space; upright 70 in H x 23 in W x 48 in L; folded 48 x 30 x 6 in; empty rack 18 lb. Indoor/outdoor. Ships to a physical address in the lower 48 only. Do not copy energy-bill or durability-test marketing. Not household-tested. No affiliate parameters.",
  },
]

/** Approved fields allowed to cross the server/client boundary. */
export type PublicProductLink = Pick<
  ProductRecommendation,
  'id' | 'name' | 'merchant' | 'url' | 'isAffiliate' | 'evidence'
>

export function getApprovedProduct(
  id: string
): ProductRecommendation | undefined {
  return products.find((product) => product.id === id && product.status === 'approved')
}

export function getApprovedPublicProduct(
  id: string
): PublicProductLink | undefined {
  const product = getApprovedProduct(id)
  if (!product) return undefined

  return {
    id: product.id,
    name: product.name,
    merchant: product.merchant,
    url: product.url,
    isAffiliate: product.isAffiliate,
    evidence: product.evidence,
  }
}

export function isApprovedProduct(
  product: ProductRecommendation | undefined
): product is ProductRecommendation {
  return Boolean(product && product.status === 'approved')
}
