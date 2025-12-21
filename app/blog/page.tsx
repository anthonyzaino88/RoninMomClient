import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import BlogClient from './BlogClient'
import styles from './blog.module.css'

export const metadata = {
  title: 'Blog - Ronin Mom',
  description: 'Explore articles on self-sufficient living, holistic wellness, and sustainable practices.',
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  )

  // Get unique categories
  const categories = [...new Set(posts.map(post => post.category))]

  // Serialize posts for client component
  const serializedPosts = posts.map(post => ({
    _id: post._id,
    title: post.title,
    description: post.description,
    date: post.date,
    category: post.category,
    tags: post.tags,
    image: post.image,
    url: post.url,
  }))

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.subtitle}>
          Insights on self-sufficient living, holistic wellness, and sustainable practices
        </p>
      </header>

      <BlogClient posts={serializedPosts} categories={categories} />
    </div>
  )
}
