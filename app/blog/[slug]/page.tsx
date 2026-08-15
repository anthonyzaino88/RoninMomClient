import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { mdxComponents } from '@/components/mdx-components'
import {
  absoluteImageUrl,
  formatPostDate,
  getPostModifiedDate,
  getRelatedPosts,
} from '@/lib/content'
import { brandImages, coverAlt, hasCoverImage } from '@/lib/images'
import styles from './post.module.css'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((entry) => entry.slug === params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const image = absoluteImageUrl(post.image) || brandImages.homeHero.src
  const imageAlt = hasCoverImage(post.image)
    ? coverAlt(post.slug, post.title)
    : brandImages.homeHero.alt

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://roninmom.com${post.url}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      ...(post.modified ? { modifiedTime: post.modified } : {}),
      authors: [post.author],
      url: `https://roninmom.com${post.url}`,
      images: [
        {
          url: image,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [image],
    },
  }
}

function generateJsonLd(post: (typeof allPosts)[0]) {
  const image = absoluteImageUrl(post.image)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    ...(image ? { image } : {}),
    datePublished: post.date,
    dateModified: getPostModifiedDate(post),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ronin Mom',
      url: 'https://roninmom.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://roninmom.com${post.url}`,
    },
    keywords: post.tags.join(', '),
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((entry) => entry.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = getMDXComponent(post.body.code)
  const jsonLd = generateJsonLd(post)
  const related = getRelatedPosts(post, 2)
  const showCover = hasCoverImage(post.image)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.article}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/blog">Journal</Link>
            <span aria-hidden="true">/</span>
            <span>{post.category}</span>
          </nav>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <time className={styles.date} dateTime={post.date}>
                {formatPostDate(post.date)}
              </time>
              {post.modified ? (
                <time className={styles.date} dateTime={post.modified}>
                  {`Updated ${formatPostDate(post.modified)}`}
                </time>
              ) : null}
            </div>

            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.description}>{post.description}</p>
            <p className={styles.author}>By {post.author}</p>
          </header>

          {showCover && (
            <div className={styles.imageWrapper}>
              <Image
                src={post.image!}
                alt={coverAlt(post.slug, post.title)}
                fill
                className={styles.featuredImage}
                sizes="(max-width: 768px) 100vw, 760px"
                priority
              />
            </div>
          )}

          <div className={styles.content}>
            <MDXContent components={mdxComponents} />
          </div>

          {related.length > 0 && (
            <aside className={styles.related} aria-labelledby="related-title">
              <h2 id="related-title">Keep reading</h2>
              <ul>
                {related.map((entry) => (
                  <li key={entry._id}>
                    <Link href={entry.url}>{entry.title}</Link>
                    <p>{entry.description}</p>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <footer className={styles.footer}>
            <div className={styles.shareSection}>
              <h2>Share</h2>
              <div className={styles.shareButtons}>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://roninmom.com${post.url}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://roninmom.com${post.url}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  Facebook
                </a>
                <a
                  href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://roninmom.com${post.url}`)}&description=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.shareButton}
                >
                  Pinterest
                </a>
              </div>
            </div>

            <Link href="/blog" className={styles.backToAllPosts}>
              Back to the journal
            </Link>
          </footer>
        </div>
      </article>
    </>
  )
}
