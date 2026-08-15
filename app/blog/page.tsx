import { getPublishedPosts, isFeatureable } from '@/lib/content'
import { coverAlt } from '@/lib/images'
import BlogClient from './BlogClient'
import styles from './blog.module.css'

const description =
  'Practical Ronin Mom guides on intentional family life, a simpler healthier home, and self-sufficiency—organized for real households.'

export const metadata = {
  title: 'Journal',
  description,
  alternates: {
    canonical: 'https://roninmom.com/blog',
  },
  openGraph: {
    title: 'Journal · Ronin Mom',
    description,
    url: 'https://roninmom.com/blog',
    images: [
      {
        url: '/images/posts/shoe-free-entryway.png',
        alt: coverAlt(
          'shoe-free-home-with-kids',
          'A Shoe-Free Entryway With Kids: A Simple Landing-Zone System'
        ),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Journal · Ronin Mom',
    description,
    images: ['/images/posts/shoe-free-entryway.png'],
  },
}

export default function BlogPage() {
  const posts = getPublishedPosts()
  const categories = [...new Set(posts.map((post) => post.category))]

  const serializedPosts = posts.map((post) => ({
    _id: post._id,
    title: post.title,
    description: post.description,
    date: post.date,
    category: post.category,
    tags: post.tags,
    image: post.image || '',
    url: post.url,
    slug: post.slug,
    featureable: isFeatureable(post.slug),
  }))

  const featured = serializedPosts.find(
    (post) => post.slug === 'shoe-free-home-with-kids' && post.featureable
  ) || serializedPosts.find((post) => post.featureable)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className="chapter-label">Journal</p>
        <h1 className={styles.title}>Field notes for capable family life</h1>
        <p className={styles.subtitle}>
          Guides and selective stories for homeschooling rhythms, simpler home
          systems, and practical skills you can use without turning life into a
          project.
        </p>
      </header>

      <BlogClient
        posts={serializedPosts}
        categories={categories}
        featuredId={featured?._id}
      />
    </div>
  )
}
