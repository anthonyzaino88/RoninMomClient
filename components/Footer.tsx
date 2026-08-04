import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaPinterest } from 'react-icons/fa'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>
            <Image
              src="/images/brand/roninmom-mark-master.png"
              alt=""
              aria-hidden="true"
              width={32}
              height={32}
              className={styles.mark}
            />
            <span>Ronin Mom</span>
          </p>
          <p className={styles.tagline}>
            Raising a capable family. Creating a more intentional home.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <Link href="/blog">Journal</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Join</Link>
          <Link href="/shop">Shop</Link>
        </nav>

        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/theroninmom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Ronin Mom on Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.pinterest.com/theroninmom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Ronin Mom on Pinterest"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        © {year} Ronin Mom. All rights reserved.
      </div>
    </footer>
  )
}
