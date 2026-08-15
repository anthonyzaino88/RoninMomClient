'use client'

import type { ReactNode } from 'react'
import { trackAffiliateClick } from '@/lib/commerce/analytics'
import styles from './ProductLink.module.css'

export type TrackedProductAnchorProps = {
  productId: string
  name: string
  merchant: string
  url: string
  isAffiliate: boolean
  evidenceLabel: string
  rel?: string
  placement: string
  openInNewTab?: boolean
  children?: ReactNode
  className?: string
}

/**
 * Client-only outbound anchor. Receives approved public fields from
 * ProductLink. Do not import the product registry here. Future MDX
 * integration must use ProductLink, not this component.
 */
export default function TrackedProductAnchor({
  productId,
  name,
  merchant,
  url,
  isAffiliate,
  evidenceLabel,
  rel,
  placement,
  openInNewTab = false,
  children,
  className,
}: TrackedProductAnchorProps) {
  const handleClick = () => {
    if (!isAffiliate) return
    trackAffiliateClick({
      item_id: productId,
      merchant,
      placement,
    })
  }

  return (
    <a
      href={url}
      rel={rel}
      target={openInNewTab ? '_blank' : undefined}
      onClick={handleClick}
      className={className ? `${styles.link} ${className}` : styles.link}
    >
      <span className={styles.name}>{children ?? name}</span>
      <span className={styles.merchant}> at {merchant}</span>
      {isAffiliate ? (
        <span className={styles.qualifier}> · Affiliate link</span>
      ) : null}
      <span className={styles.qualifier}> · {evidenceLabel}</span>
      {openInNewTab ? (
        <span className={styles.srOnly}> (opens in a new tab)</span>
      ) : null}
    </a>
  )
}
