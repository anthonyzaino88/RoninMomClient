import Link from 'next/link'
import styles from './AffiliateDisclosure.module.css'

type AffiliateDisclosureProps = {
  className?: string
}

/**
 * Page-level affiliate notice for routes that will contain affiliate links.
 * Keep it in the readable content, before the first recommendation.
 * Do not mount this on pages that have no affiliate links.
 */
export default function AffiliateDisclosure({
  className,
}: AffiliateDisclosureProps) {
  return (
    <aside
      className={className ? `${styles.note} ${className}` : styles.note}
      aria-label="Affiliate disclosure"
    >
      <p>
        Ronin Mom may earn a commission when you buy through links on this
        page.{' '}
        <Link href="/disclosure">Read the full disclosure</Link>.
      </p>
    </aside>
  )
}
