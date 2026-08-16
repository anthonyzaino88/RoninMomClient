import { allPosts, type Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

/** Published posts that must not be featured or recommended until corrected. */
export const HOLD_SLUGS = new Set<string>()

/** Editorial last-updated date: meaningful modification, else original publication. */
export function getPostModifiedDate(post: Pick<Post, 'date' | 'modified'>): string {
  return post.modified || post.date
}

export function formatPostDate(value: string): string {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

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

/**
 * Topic clusters whose “Keep reading” links should stay inside the cluster
 * before falling back to same-category date order.
 */
const CONTENT_CLUSTERS: readonly (readonly string[])[] = [
  [
    'shoe-free-home-with-kids',
    'small-entryway-shoe-storage',
    'entryway-mat-boot-tray-system',
    'shoe-free-home-guests-accessibility',
  ],
  [
    'small-space-laundry-system',
    'indoor-clothes-drying-rack-small-space',
    'family-laundry-hamper-system',
    'laundry-folding-put-away-small-space',
  ],
]

export function getRelatedPosts(post: Post, limit = 2): Post[] {
  const candidates = getFeatureablePosts().filter((p) => p.slug !== post.slug)
  const cluster = CONTENT_CLUSTERS.find((group) => group.includes(post.slug))

  if (cluster) {
    const siblings = cluster
      .filter((slug) => slug !== post.slug)
      .map((slug) => candidates.find((entry) => entry.slug === slug))
      .filter((entry): entry is Post => Boolean(entry))
    const rest = candidates.filter((entry) => !cluster.includes(entry.slug))
    return [...siblings, ...rest].slice(0, limit)
  }

  const sameCategory = candidates.filter((p) => p.category === post.category)
  const rest = candidates.filter((p) => p.category !== post.category)
  return [...sameCategory, ...rest].slice(0, limit)
}
