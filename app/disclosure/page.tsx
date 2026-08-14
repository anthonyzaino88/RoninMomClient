import type { Metadata } from 'next'
import Link from 'next/link'
import { brandImages } from '@/lib/images'
import styles from './disclosure.module.css'

const title = 'Affiliate Disclosure'
const description =
  'How Ronin Mom will handle affiliate links, commissions, and product evidence—before any affiliate recommendations are published.'
const url = 'https://roninmom.com/disclosure'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Affiliate Disclosure · Ronin Mom',
    description,
    url,
    type: 'website',
    images: [
      {
        url: brandImages.homeHero.src,
        width: brandImages.homeHero.width,
        height: brandImages.homeHero.height,
        alt: brandImages.homeHero.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Disclosure · Ronin Mom',
    description,
    images: [brandImages.homeHero.src],
  },
}

export default function DisclosurePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className="chapter-label">Disclosure</p>
        <h1>How affiliate links will work here</h1>
        <p className={styles.lede}>
          Ronin Mom is a family field journal first. Some future pages may
          include affiliate links. This page says what that means—and what it
          does not mean—before any of those links exist on the site.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="affiliate-meaning">
        <h2 id="affiliate-meaning">What an affiliate link is</h2>
        <p>
          An affiliate link is a product or merchant link that can pay Ronin Mom
          a commission if someone buys through it. That possible commission is
          not a reason to recommend a product, and it is not a promise that a
          product is right for your home.
        </p>
        <p>
          If a page includes those links, a short notice will appear in the
          page content—before the recommendations—with a link back here.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="judgment">
        <h2 id="judgment">Recommendations still have to earn their place</h2>
        <p>
          Recommendations have to earn their place: is this useful for a real
          home task, what can it not do, and when is a simpler option enough.
          That judgment is not the same as household testing. A researched
          mention stays researched.
        </p>
        <p>
          An affiliate relationship does not guarantee favorable coverage, a
          higher ranking, or a softer review. If the honest answer is “skip
          this,” that answer still stands.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="evidence">
        <h2 id="evidence">Evidence is not interchangeable</h2>
        <p>
          Personally used, directly compared, and researched-only products are
          not the same kind of evidence. Surrounding copy has to match the
          actual basis:
        </p>
        <ul>
          <li>
            <strong>Personally used</strong> means confirmed ordinary household
            use. A product does not become “what we use” because it is listed
            in a catalog.
          </li>
          <li>
            <strong>Directly compared</strong> means a real comparison was done
            for a stated purpose—not that two product pages were read side by
            side.
          </li>
          <li>
            <strong>Researched</strong> means the note is based on public
            information such as labels, directions, or reputable sources. That
            is not the same as testing.
          </li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="gifts">
        <h2 id="gifts">Gifts and sponsorships</h2>
        <p>
          Gifted products and paid sponsorships require their own clear
          disclosures on the page where they appear. They will not be described
          as independently purchased, personally proven, or editorial
          favorites unless that is actually true—and the gift or payment is
          still named.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="today">
        <h2 id="today">What is true today</h2>
        <p>
          Ronin Mom does not currently claim any specific affiliate
          relationship. No affiliate program is in use on this site, and there
          are no affiliate product links in the journal yet.
        </p>
        <p>
          When that changes, this page stays the policy. Pages with affiliate
          links will carry a short notice in the article itself. The mention
          will say whether the link is an affiliate link and whether the note
          is based on household use, a real comparison, or research only.
        </p>
      </section>

      <section className={styles.cta} aria-labelledby="next-step">
        <h2 id="next-step">Meanwhile, the journal is the point</h2>
        <p>
          Nothing here is for sale. If you want something useful today, start
          with the guides already published.
        </p>
        <Link href="/blog" className={styles.primary}>
          Browse the journal
        </Link>
      </section>
    </div>
  )
}
