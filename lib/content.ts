import { allPosts, type Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

/** Published posts that must not be featured or recommended until corrected. */
export const HOLD_SLUGS = new Set(['diy-disinfectant-spray'])

export function isFeatureable(slug: string): boolean {
  return !HOLD_SLUGS.has(slug)
}

export function getPublishedPosts(): Post[] {
  return [...allPosts].sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
}

export function getFeatureablePosts(): Post[] {
  return getPublishedPosts().filter((post) => isFeatureable(post.slug))
}

export function absoluteImageUrl(image?: string | null): string | undefined {
  if (!image || !image.trim()) return undefined
  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image
  }
  return `https://roninmom.com${image.startsWith('/') ? image : `/${image}`}`
}

export function getRelatedPosts(post: Post, limit = 2): Post[] {
  const candidates = getFeatureablePosts().filter((p) => p.slug !== post.slug)
  const sameCategory = candidates.filter((p) => p.category === post.category)
  const rest = candidates.filter((p) => p.category !== post.category)
  return [...sameCategory, ...rest].slice(0, limit)
}
