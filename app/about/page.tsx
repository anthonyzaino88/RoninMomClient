import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { brandImages } from '@/lib/images'
import styles from './about.module.css'

const description =
  'Ronin Mom is a family field journal for intentional home life—practical guides for homeschooling, simpler living, and household capability, written without the pressure to be perfect.'

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: {
    canonical: 'https://roninmom.com/about',
  },
  openGraph: {
    title: 'About Ronin Mom',
    description,
    url: 'https://roninmom.com/about',
    images: [
      {
        url: brandImages.aboutEditorial.src,
        width: brandImages.aboutEditorial.width,
        height: brandImages.aboutEditorial.height,
        alt: brandImages.aboutEditorial.alt,
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className="chapter-label">About</p>
        <h1>A family field journal for capable, intentional living</h1>
        <p className={styles.lede}>
          Ronin Mom collects what works at home—family rhythms, simpler systems,
          and practical skills—so readers can borrow the useful parts and leave
          the rest.
        </p>
      </header>

      <div className={styles.media}>
        <Image
          src={brandImages.aboutEditorial.src}
          alt={brandImages.aboutEditorial.alt}
          width={brandImages.aboutEditorial.width}
          height={brandImages.aboutEditorial.height}
          priority
          sizes="(max-width: 768px) 100vw, 48rem"
          className={styles.headerImage}
        />
      </div>

      <section className={styles.story} aria-labelledby="why-title">
        <h2 id="why-title">Why this exists</h2>
        <p>
          Most days do not need another idealized lifestyle. They need a clearer
          next step: a shoe-free entry that actually works with kids, a smaller
          set of home products worth keeping, a rhythm that protects learning and
          rest.
        </p>
        <p>
          “Ronin” here means choosing an intentional path—resourceful,
          independent, and willing to revise what is not working. It is not a
          warrior theme and not a performance of perfect living.
        </p>
      </section>

      <section className={styles.pillars} aria-labelledby="about-pillars">
        <h2 id="about-pillars">What you will find</h2>
        <div className={styles.pillarGrid}>
          <article>
            <h3>Intentional Family Life</h3>
            <p>
              Homeschooling, family rhythms, motherhood, and the occasional
              personal note when it helps the advice land.
            </p>
          </article>
          <article>
            <h3>A Simpler, Healthier Home</h3>
            <p>
              Minimalism with a purpose, low-toxin choices, sustainable swaps,
              and organization that lowers daily friction.
            </p>
          </article>
          <article>
            <h3>Practical Self-Sufficiency</h3>
            <p>
              Cooking, cleaning, DIY skills, preparedness, and learning to do
              more at home—one useful capability at a time.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.commitments} aria-labelledby="commitments-title">
        <h2 id="commitments-title">How we try to write</h2>
        <ul>
          <li>Useful enough to act on today.</li>
          <li>Clear about what is experience, opinion, or sourced guidance.</li>
          <li>Honest about tradeoffs, limits, and uncertainty.</li>
          <li>Protective of family privacy—especially the children.</li>
          <li>Careful with health, cleaning, food, and safety claims.</li>
        </ul>
      </section>

      <section className={styles.cta}>
        <h2>Read, then decide what fits your home</h2>
        <p>
          Start with the journal, or join for occasional field notes when there
          is something practical worth sending.
        </p>
        <div className={styles.actions}>
          <Link href="/blog" className={styles.primary}>
            Browse the journal
          </Link>
          <Link href="/signup" className={styles.secondary}>
            Join the list
          </Link>
        </div>
      </section>
    </div>
  )
}
