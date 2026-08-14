'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick } from '@/lib/commerce/analytics'
import {
  getProductEvidenceLabel,
  getProductLinkRel,
} from '@/lib/commerce/link-attrs'
import { getApprovedProduct } from '@/lib/commerce/products'
import styles from './ProductLink.module.css'

type ProductLinkProps = {
  productId: string
  /** Stable placement name for analytics, e.g. "article-inline". */
  placement: string
  children?: ReactNode
  openInNewTab?: boolean
  className?: string
}

/**
 * Renders an approved product destination. Draft and retired IDs render nothing.
 * Does not claim personal use or testing; that belongs in surrounding copy
 * only when the product's evidence level actually supports it.
 */
export default function ProductLink({
  productId,
  placement,
  children,
  openInNewTab = false,
  className,
}: ProductLinkProps) {
  const product = getApprovedProduct(productId)

  if (!product) return null

  const rel = getProductLinkRel({
    isAffiliate: product.isAffiliate,
    openInNewTab,
  })

  const handleClick = () => {
    if (!product.isAffiliate) return
    trackAffiliateClick({
      item_id: product.id,
      merchant: product.merchant,
      placement,
    })
  }

  return (
    <a
      href={product.url}
      rel={rel}
      target={openInNewTab ? '_blank' : undefined}
      onClick={handleClick}
      className={className ? `${styles.link} ${className}` : styles.link}
    >
      <span className={styles.name}>{children ?? product.name}</span>
      <span className={styles.merchant}> at {product.merchant}</span>
      {product.isAffiliate ? (
        <span className={styles.qualifier}> · Affiliate link</span>
      ) : null}
      <span className={styles.qualifier}>
        {' '}
        · {getProductEvidenceLabel(product.evidence)}
      </span>
      {openInNewTab ? (
        <span className={styles.srOnly}> (opens in a new tab)</span>
      ) : null}
    </a>
  )
}
