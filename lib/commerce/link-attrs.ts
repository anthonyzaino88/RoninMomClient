import type { ProductEvidenceLevel } from './products'

/**
 * Link relationship helpers for product recommendations.
 *
 * Affiliate links are marked sponsored + nofollow and go straight to the
 * merchant URL. Non-affiliate editorial links must not receive sponsored.
 * New-tab links add noopener. noreferrer is omitted on affiliate links so
 * programs that rely on a referrer are not broken.
 */

export function getProductLinkRel(options: {
  isAffiliate: boolean
  openInNewTab: boolean
}): string | undefined {
  const tokens: string[] = []

  if (options.isAffiliate) {
    tokens.push('sponsored', 'nofollow')
  }

  if (options.openInNewTab) {
    tokens.push('noopener')
  }

  return tokens.length > 0 ? tokens.join(' ') : undefined
}

/** Visible labels so a link cannot read as household use by default. */
export const PRODUCT_EVIDENCE_LABEL: Record<ProductEvidenceLevel, string> = {
  'personally-used': 'Household use',
  'directly-compared': 'Compared',
  researched: 'Researched',
}

export function getProductEvidenceLabel(evidence: ProductEvidenceLevel): string {
  return PRODUCT_EVIDENCE_LABEL[evidence]
}
