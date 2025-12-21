'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './blog.module.css'

interface Post {
  _id: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  image: string
  url: string
}

interface BlogClientProps {
  posts: Post[]
  categories: string[]
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory)

  return (
    <>
      {/* Category Filter */}
      <div className={styles.filterSection}>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.filterButton} ${activeCategory === 'All' ? styles.filterButtonActive : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeCategory === category ? styles.filterButtonActive : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className={styles.grid}>
        {filteredPosts.map((post) => (
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

      {filteredPosts.length === 0 && (
        <div className={styles.empty}>
          <p>No posts found in this category.</p>
        </div>
      )}
    </>
  )
}

