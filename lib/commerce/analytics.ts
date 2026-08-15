export type AffiliateClickParams = {
  item_id: string
  merchant: string
  placement: string
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Fire a GA4 affiliate_click event. Navigation must not depend on this.
 * Safe when gtag is missing, blocked, or throws.
 */
export function trackAffiliateClick(params: AffiliateClickParams): void {
  if (typeof window === 'undefined') return

  const gtag = window.gtag
  if (typeof gtag !== 'function') return

  try {
    gtag('event', 'affiliate_click', {
      item_id: params.item_id,
      merchant: params.merchant,
      placement: params.placement,
      page_path: window.location.pathname,
    })
  } catch {
    // Analytics must never block or break outbound navigation.
  }
}
