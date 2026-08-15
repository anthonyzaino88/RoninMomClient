'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { coverAlt } from '@/lib/images'
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
  slug: string
  featureable: boolean
}

interface BlogClientProps {
  posts: Post[]
  categories: string[]
  featuredId?: string
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function hasCover(image?: string) {
  return Boolean(image && image.trim())
}

function altFor(post: Post) {
  return coverAlt(post.slug, post.title)
}

export default function BlogClient({
  posts,
  categories,
  featuredId,
}: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredPosts = useMemo(
    () =>
      activeCategory === 'All'
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts]
  )

  const featured = useMemo(() => {
    const featureable = filteredPosts.filter((post) => post.featureable)
    if (featureable.length === 0) return undefined
    if (activeCategory === 'All' && featuredId) {
      return featureable.find((post) => post._id === featuredId) || featureable[0]
    }
    return featureable[0]
  }, [activeCategory, featuredId, filteredPosts])

  const remaining = filteredPosts.filter((post) => post._id !== featured?._id)

  return (
    <>
      <div className={styles.filterSection}>
        <div className={styles.filterButtons} role="toolbar" aria-label="Filter by category">
          <button
            type="button"
            className={`${styles.filterButton} ${activeCategory === 'All' ? styles.filterButtonActive : ''}`}
            onClick={() => setActiveCategory('All')}
            aria-pressed={activeCategory === 'All'}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterButton} ${activeCategory === category ? styles.filterButtonActive : ''}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <article className={`${styles.featured} ${!hasCover(featured.image) ? styles.featuredNoMedia : ''}`}>
          {hasCover(featured.image) && (
            <Link href={featured.url} className={styles.featuredMedia}>
              <Image
                src={featured.image}
                alt={altFor(featured)}
                fill
                className={styles.featuredImage}
                sizes="(max-width: 900px) 100vw, 55vw"
                priority
              />
            </Link>
          )}
          <div className={styles.featuredCopy}>
            <p className={styles.meta}>
              <span>{featured.category}</span>
              <time dateTime={featured.date}>{formatDate(featured.date)}</time>
            </p>
            <h2>
              <Link href={featured.url}>{featured.title}</Link>
            </h2>
            <p>{featured.description}</p>
            <Link href={featured.url} className={styles.readMore}>
              Read the guide
            </Link>
          </div>
        </article>
      )}

      <div className={styles.list}>
        {remaining.map((post) => (
          <article
            key={post._id}
            className={`${styles.listItem} ${!hasCover(post.image) ? styles.listItemNoThumb : ''}`}
          >
            <div className={styles.listCopy}>
              <p className={styles.meta}>
                <span>{post.category}</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </p>
              <h2>
                <Link href={post.url}>{post.title}</Link>
              </h2>
              <p>{post.description}</p>
            </div>
            {hasCover(post.image) && (
              <Link href={post.url} className={styles.listThumb} tabIndex={-1} aria-hidden="true">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className={styles.thumbImage}
                  sizes="180px"
                />
              </Link>
            )}
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
