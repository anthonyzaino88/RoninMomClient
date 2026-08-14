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

/** Public catalog. Empty until real, reviewed products exist. */
export const products: readonly ProductRecommendation[] = []

export function getApprovedProduct(
  id: string
): ProductRecommendation | undefined {
  return products.find((product) => product.id === id && product.status === 'approved')
}

export function isApprovedProduct(
  product: ProductRecommendation | undefined
): product is ProductRecommendation {
  return Boolean(product && product.status === 'approved')
}
