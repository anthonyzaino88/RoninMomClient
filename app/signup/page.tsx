import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './signup.module.css'

export const metadata: Metadata = {
  title: "Join Us - Ronin Mom",
  description: "Join the Ronin Mom community and embark on a journey of knowledge towards sustainable, self-sufficient living.",
}

export default function SignupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.joinContainer}>
        <h2>Join Our Community</h2>
        <p>
          You&apos;ve made it this far, which means you care about your decisions, are
          attuned to the right things, and are embarking on a journey of
          knowledge.
        </p>
        <p>
          Join our forum, and we will dive into everything we need to know to live
          a sustainable life, share some forbidden knowledge, and have dangerous
          conversations.
        </p>
        <a
          href="https://www.cognitoforms.com/RoninMom/JoinOurForm"
          className={styles.backButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign Up
        </a>
      </div>
    </div>
  )
}

