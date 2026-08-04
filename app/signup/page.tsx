import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './signup.module.css'

const description =
  'Join Ronin Mom for occasional field notes on family rhythms, simpler home systems, and practical skills—sent when there is something useful to share.'

export const metadata: Metadata = {
  title: 'Join',
  description,
  alternates: {
    canonical: 'https://roninmom.com/signup',
  },
  openGraph: {
    title: 'Join Ronin Mom',
    description,
    url: 'https://roninmom.com/signup',
  },
}

export default function SignupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <p className="chapter-label">Field notes</p>
        <h1>Stay in the loop without the noise</h1>
        <p>
          Join for occasional notes on intentional family life, a simpler home,
          and skills worth practicing. Expect useful next steps when there is
          something worth sending—not a constant drip of content.
        </p>
        <p className={styles.note}>
          The signup form opens in a secure external page. We will only use your
          information to send the notes you requested.
        </p>
        <div className={styles.actions}>
          <a
            href="https://www.cognitoforms.com/RoninMom/JoinOurForm"
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the list
          </a>
          <Link href="/blog" className={styles.secondary}>
            Browse the journal first
          </Link>
        </div>
      </div>
    </div>
  )
}
