import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit our Facebook page"
        >
          <FaFacebook />
        </a>
        <a 
          href="https://www.instagram.com/theroninmom?igshid=MjVnczNlZGRrZWll&utm_source=qr" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.pinterest.com/theroninmom" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Follow us on Pinterest"
        >
          <FaPinterest />
        </a>
      </div>
      <div className={styles.copyright}>
        &copy; 2024 Ronin Mom. All rights reserved.
      </div>
    </footer>
  )
}

