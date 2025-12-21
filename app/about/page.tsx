import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: "About Us - Ronin Mom",
  description: "Learn about Ronin Mom's mission to empower individuals through self-sufficient, holistic, and sustainable living practices. Discover our story and principles that guide us.",
  openGraph: {
    title: "About Us - Ronin Mom",
    description: "Learn about Ronin Mom's mission to empower individuals through self-sufficient, holistic, and sustainable living practices.",
    url: "https://roninmom.com/about",
    images: [{ url: "https://roninmom.com/assets/img/banner.png" }],
  },
}

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          id="header-logo"
          src="/assets/img/about.png"
          alt="Ronin Mom - Our Story"
          width={600}
          height={600}
          priority
          className={styles.headerImage}
        />
        <p>
          Ronin Mom was born out of a desire to live a life that is
          self-sufficient, holistic, and sustainable. We wanted a different
          approach to life and better living, focusing on independence and
          well-being. Here&apos;s how we do it and why it matters.
        </p>
      </header>

      <div className={styles.content}>
        <section className={`${styles.ourStory} ${styles.hideSm}`}>
          <h2>Why We Created Ronin Mom</h2>
          <p className={styles.highlight}>Empowering Lives, Embracing Nature</p>
          <p>
            We saw a need for a lifestyle that empowers individuals to take
            control of their health, environment, and overall well-being.
          </p>
          <p>
            The modern world often disconnects us from the natural ways of living
            that our ancestors thrived on. We wanted to bridge that gap and offer
            practical solutions for a better life.
          </p>
          <p className={styles.highlight}>Our Approach</p>
          <p>
            Rooted in self-sufficiency and holistic wellness, we provide the
            knowledge and tools to help you make informed decisions about your
            lifestyle.
          </p>
          <p>
            From growing your own food to practicing mindfulness, our goal is to
            support you in creating a balanced and fulfilling life.
          </p>
          <p className={styles.highlight}>How We Do It</p>
          <p>
            Through our blog, community engagement, and comprehensive guides, we
            offer solutions to common problems faced by those seeking a more
            sustainable and holistic lifestyle.
          </p>
          <p>
            We focus on practical advice, step-by-step tutorials, and fostering a
            supportive community.
          </p>
        </section>

        <h1>Our Principles</h1>
        <div className={styles.principles}>
          <div className={styles.principle}>
            <h3>Embrace Independence and Self-Guidance</h3>
            <p>
              Trust in your ability to make decisions that lead you toward a
              healthier, more fulfilling life. Understand that the journey is
              personal and self-directed.
            </p>
          </div>
          <div className={styles.principle}>
            <h3>Pursue Physical and Mental Discipline</h3>
            <p>
              Engage in activities like martial arts, fitness routines, or yoga
              that challenge both your body and mind. Recognize the importance of
              physical strength, flexibility, and endurance in achieving overall
              wellness.
            </p>
          </div>
          <div className={styles.principle}>
            <h3>Advocate for Sustainable Living</h3>
            <p>
              Commit to environmental stewardship by choosing organic,
              plastic-free products and sustainable living practices. Let your
              lifestyle be a testament to the health of our planet.
            </p>
          </div>
          <div className={styles.principle}>
            <h3>Cultivate Wellness Through Continuous Learning</h3>
            <p>
              Embrace a journey of lifelong learning about health, nutrition, and
              sustainable living. Use this knowledge to make informed, conscious
              choices.
            </p>
          </div>
          <div className={styles.principle}>
            <h3>Build a Supportive Community</h3>
            <p>
              Engage with a community that shares your values and supports your
              journey. Share experiences and knowledge, and inspire each other to
              maintain a balanced, active lifestyle.
            </p>
          </div>
          <div className={styles.principle}>
            <h3>Promote Holistic Self-Development</h3>
            <p>
              Balance physical activities with practices that nurture your mental
              and emotional health. Recognize the importance of a holistic
              approach to personal development, encompassing physical fitness,
              mental clarity, and emotional resilience.
            </p>
          </div>
        </div>
      </div>

      <section className={styles.cta}>
        <h2>Join Our Community</h2>
        <p className={styles.hideSm}>
          Become a part of the movement towards a healthier, self-sufficient
          lifestyle.
        </p>
        <Link href="/signup">
          <button>SIGN UP</button>
        </Link>
      </section>
    </div>
  )
}

