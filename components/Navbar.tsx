import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">Ronin Mom</Link>
      </div>
      <div className={styles.links}>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  )
}

