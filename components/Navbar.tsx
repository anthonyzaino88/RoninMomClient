import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.logo}>
          Ronin Mom
        </Link>
        <div className={styles.links}>
          <Link href="/blog">Journal</Link>
          <Link href="/about">About</Link>
          <Link href="/signup" className={styles.join}>
            Join
          </Link>
        </div>
      </nav>
    </header>
  )
}
