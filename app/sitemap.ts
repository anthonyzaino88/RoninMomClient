import { allPosts } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'
import { getPostModifiedDate } from '@/lib/content'

const SITE_URL = 'https://roninmom.com'

// /shop is a noindex placeholder with no substantive commerce content.
// Restore it to this list when the curated shop launches and becomes indexable.
const STATIC_ROUTES = ['/', '/about', '/blog', '/signup', '/disclosure'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
  }))

  const postEntries: MetadataRoute.Sitemap = allPosts
    .map((post) => ({
      url: `${SITE_URL}${post.url}`,
      lastModified: getPostModifiedDate(post),
    }))
    .sort((a, b) => a.url.localeCompare(b.url))

  return [...staticEntries, ...postEntries]
}
