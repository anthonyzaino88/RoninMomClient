import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/brand/roninmom-mark-master.png"
            alt=""
            aria-hidden="true"
            width={34}
            height={34}
            className={styles.mark}
            priority
          />
          <span>Ronin Mom</span>
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
