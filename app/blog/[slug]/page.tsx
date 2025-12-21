import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from './post.module.css'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Ronin Mom`,
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
      authors: [post.author],
      url: `https://roninmom.com${post.url}`,
      images: [
        {
          url: `https://roninmom.com${post.image}`,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`https://roninmom.com${post.image}`],
    },
  }
}

// Generate JSON-LD structured data for blog posts
function generateJsonLd(post: typeof allPosts[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://roninmom.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ronin Mom',
      logo: {
        '@type': 'ImageObject',
        url: 'https://roninmom.com/assets/img/banner.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://roninmom.com${post.url}`,
    },
    keywords: post.tags.join(', '),
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const MDXContent = useMDXComponent(post.body.code)
  const jsonLd = generateJsonLd(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.article}>
        <div className={styles.container}>
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>

        <header className={styles.header}>
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
          
          <h1 className={styles.title}>{post.title}</h1>
          
          <p className={styles.description}>{post.description}</p>
          
          <div className={styles.author}>
            <span>By {post.author}</span>
          </div>

          <div className={styles.tags}>
            {post.tags.map((tag: string) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className={styles.imageWrapper}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className={styles.featuredImage}
            sizes="(max-width: 768px) 100vw, 900px"
            priority
          />
        </div>

        <div className={styles.content}>
          <MDXContent />
        </div>

        <footer className={styles.footer}>
          <div className={styles.shareSection}>
            <h3>Share this article</h3>
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
            ← View All Posts
          </Link>
        </footer>
      </div>
    </article>
    </>
  )
}


