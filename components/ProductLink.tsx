import type { ReactNode } from 'react'
import {
  getProductEvidenceLabel,
  getProductLinkRel,
} from '@/lib/commerce/link-attrs'
import { getApprovedPublicProduct } from '@/lib/commerce/products'
import TrackedProductAnchor from './TrackedProductAnchor'

type ProductLinkProps = {
  productId: string
  /** Stable placement name for analytics, e.g. "article-inline". */
  placement: string
  children?: ReactNode
  openInNewTab?: boolean
  className?: string
}

/**
 * Build-time product link. Looks up the registry during static generation
 * and returns nothing for missing, draft, or retired IDs. Only approved
 * public fields are passed to the client anchor.
 *
 * Use this component from pages and the future Contentlayer MDX map.
 * Do not import TrackedProductAnchor from article code.
 */
export default function ProductLink({
  productId,
  placement,
  children,
  openInNewTab = false,
  className,
}: ProductLinkProps) {
  const product = getApprovedPublicProduct(productId)

  if (!product) return null

  return (
    <TrackedProductAnchor
      productId={product.id}
      name={product.name}
      merchant={product.merchant}
      url={product.url}
      isAffiliate={product.isAffiliate}
      evidenceLabel={getProductEvidenceLabel(product.evidence)}
      rel={getProductLinkRel({
        isAffiliate: product.isAffiliate,
        openInNewTab,
      })}
      placement={placement}
      openInNewTab={openInNewTab}
      className={className}
    >
      {children}
    </TrackedProductAnchor>
  )
}
