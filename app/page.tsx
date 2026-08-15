import Image from 'next/image'
import Link from 'next/link'
import { getFeatureablePosts } from '@/lib/content'
import { brandImages, coverAlt, hasCoverImage } from '@/lib/images'
import styles from './page.module.css'

const FEATURED_SLUGS = [
  'shoe-free-home-with-kids',
  'low-tox-starter-kit',
  'organic-cotton-dish-cloths',
]

const pillars = [
  {
    name: 'Intentional Family Life',
    summary:
      'Household rhythms that make shared spaces workable—starting with a shoe-free landing zone that holds up with kids.',
    href: '/blog/shoe-free-home-with-kids',
  },
  {
    name: 'A Simpler, Healthier Home',
    summary:
      'Low-toxin swaps, calmer rooms, and practical organization that reduce noise without chasing a perfect routine.',
    href: '/blog/low-tox-starter-kit',
  },
  {
    name: 'Practical Self-Sufficiency',
    summary:
      'Small skills that cut waste and build capability at home—like replacing paper towels with cloths you can wash and reuse.',
    href: '/blog/organic-cotton-dish-cloths',
  },
]

export default function Home() {
  const featureable = getFeatureablePosts()
  const featured = FEATURED_SLUGS.map((slug) =>
    featureable.find((post) => post.slug === slug)
  ).filter(Boolean)
  const lead = featured[0]
  const supporting = featured.slice(1)

  return (
    <>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.heroMedia}>
          <Image
            src={brandImages.homeHero.src}
            alt={brandImages.homeHero.alt}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p className={styles.brandMark}>Ronin Mom</p>
          <h1 id="home-hero-title" className={styles.heroTitle}>
            Raising a capable family.
            <span>Creating a more intentional home.</span>
          </h1>
          <p className={styles.heroDek}>
            A family field journal with practical guides for homeschooling,
            simplifying your home, living more naturally, and doing more for
            yourselves—without chasing perfection.
          </p>
          <div className={styles.heroActions}>
            <Link href="/blog" className={styles.primaryButton}>
              Read the journal
            </Link>
            <Link href="/signup" className={styles.secondaryButton}>
              Get field notes
            </Link>
          </div>
        </div>
      </section>

      {lead && (
        <section className={styles.lead} aria-labelledby="lead-title">
          <div className={styles.leadInner}>
            <div className={styles.leadCopy}>
              <p className="chapter-label">From the journal</p>
              <h2 id="lead-title">
                <Link href={lead.url}>{lead.title}</Link>
              </h2>
              <p>{lead.description}</p>
              <Link href={lead.url} className={styles.textLink}>
                Continue reading
              </Link>
            </div>
            {hasCoverImage(lead.image) && (
              <Link href={lead.url} className={styles.leadImageLink}>
                <Image
                  src={lead.image!}
                  alt={coverAlt(lead.slug, lead.title)}
                  width={720}
                  height={540}
                  sizes="(max-width: 900px) 100vw, 48vw"
                  className={styles.leadImage}
                />
              </Link>
            )}
          </div>
        </section>
      )}

      <section className={styles.pillars} aria-labelledby="pillars-title">
        <div className={styles.sectionIntro}>
          <p className="chapter-label">How the journal is organized</p>
          <h2 id="pillars-title">Three places to begin</h2>
          <p>
            Food and wellness show up across the work, but every guide belongs
            to a clearer job: family life, the home itself, or practical skills.
          </p>
        </div>
        <div className={styles.pillarList}>
          {pillars.map((pillar, index) => (
            <article key={pillar.name} className={styles.pillar}>
              <span className={styles.pillarIndex} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>
                <Link href={pillar.href}>{pillar.name}</Link>
              </h3>
              <p>{pillar.summary}</p>
              <Link href={pillar.href} className={styles.textLink}>
                Start here
              </Link>
            </article>
          ))}
        </div>
      </section>

      {supporting.length > 0 && (
        <section className={styles.reading} aria-labelledby="reading-title">
          <div className={styles.sectionIntro}>
            <p className="chapter-label">Useful reading</p>
            <h2 id="reading-title">Guides you can use this week</h2>
          </div>
          <div className={styles.readingList}>
            {supporting.map((post) =>
              post ? (
                <article key={post._id} className={styles.readingItem}>
                  <p className={styles.meta}>
                    <span>{post.category}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </p>
                  <h3>
                    <Link href={post.url}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
                </article>
              ) : null
            )}
          </div>
          <Link href="/blog" className={styles.textLink}>
            Browse the full journal
          </Link>
        </section>
      )}

      <section className={styles.newsletter} aria-labelledby="notes-title">
        <div className={styles.newsletterInner}>
          <p className="chapter-label">Field notes</p>
          <h2 id="notes-title">Occasional notes worth keeping</h2>
          <p>
            Short updates on family rhythms, home systems, and skills worth
            practicing—sent when there is a useful next step, not a constant drip
            of content.
          </p>
          <Link href="/signup" className={styles.primaryButton}>
            Join the list
          </Link>
        </div>
      </section>
    </>
  )
}
