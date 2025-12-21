import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import styles from './blog.module.css'

export const metadata = {
  title: 'Blog - Ronin Mom',
  description: 'Explore articles on self-sufficient living, holistic wellness, and sustainable practices.',
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Insights on self-sufficient living, holistic wellness, and sustainable practices
        </p>
      </header>

      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post._id} className={styles.card}>
            <Link href={post.url} className={styles.cardLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <time className={styles.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.description}>{post.description}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag: string) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.readMore}>Read More →</div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className={styles.empty}>
          <p>No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  )
}

