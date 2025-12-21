import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './shop.module.css'

export const metadata: Metadata = {
  title: "Shop Coming Soon - Ronin Mom",
  description: "We are working hard to bring you an amazing shopping experience. Stay tuned for updates!",
}

export default function ShopPage() {
  return (
    <div className={styles.container}>
      <div className={styles.comingSoonContainer}>
        <h2>Shop Coming Soon!</h2>
        <p>
          We are working hard to bring you an amazing shopping experience. Stay
          tuned for updates!
        </p>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  )
}

