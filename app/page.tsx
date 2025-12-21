import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>The Ronin Mom</h1>
            <p className={styles.heroSubtitle}>
              Master life with sustainability and wellness
            </p>
            <p className={styles.heroDescription}>
              Empowering individuals towards self-sufficiency, holistic well-being, 
              and sustainable living. Discover how embracing the Ronin principles 
              can transform your life.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/blog" className={styles.primaryButton}>
                Explore Blog
              </Link>
              <Link href="/about" className={styles.secondaryButton}>
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/assets/img/homepage-banner.png"
              alt="Ronin Mom - Sustainable Living"
              width={600}
              height={600}
              priority
              className={styles.bannerImage}
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.sectionContent}>
          <div className={styles.missionIcon}>🌱</div>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.missionText}>
            Ronin Mom embarks on a journey to empower individuals towards
            self-sufficiency, holistic well-being, and sustainable living.
            We believe in the power of mindful choices and natural living
            to create a healthier, more balanced life for you and your family.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🏡</div>
            <h3>Self-Sufficiency</h3>
            <p>Learn practical skills for independent, sustainable living</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🧘</div>
            <h3>Holistic Wellness</h3>
            <p>Integrate mind, body, and spirit for complete well-being</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>♻️</div>
            <h3>Sustainability</h3>
            <p>Make eco-friendly choices that benefit you and the planet</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Join Our Community</h2>
          <p className={styles.ctaText}>
            Become a part of the movement towards a healthier, self-sufficient
            lifestyle. Get inspired by our stories and tips.
          </p>
          <Link href="/signup" className={styles.ctaButton}>
            Sign Up Now
          </Link>
        </div>
      </section>
    </>
  )
}
