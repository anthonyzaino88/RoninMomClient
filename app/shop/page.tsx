import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './shop.module.css'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'The Ronin Mom shop is not open yet. Meanwhile, the journal has practical guides for a more intentional home.',
  alternates: {
    canonical: 'https://roninmom.com/shop',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function ShopPage() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <p className="chapter-label">Shop</p>
        <h1>Coming later</h1>
        <p>
          There is nothing for sale here yet. When a shop opens, it will stay
          small and useful—not a warehouse of impulse buys.
        </p>
        <p>
          For now, start with the journal guides on simplifying your home and
          building practical household skills.
        </p>
        <Link href="/blog" className={styles.primary}>
          Browse the journal
        </Link>
      </div>
    </div>
  )
}
