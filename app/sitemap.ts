import { allPosts } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'
import { getPostModifiedDate } from '@/lib/content'

const SITE_URL = 'https://roninmom.com'

const STATIC_ROUTES = ['/', '/about', '/blog', '/shop', '/signup'] as const

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
