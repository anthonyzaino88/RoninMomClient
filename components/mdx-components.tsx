import type { MDXComponents } from 'mdx/types'
import ProductLink from './ProductLink'

/**
 * Server-facing MDX component map.
 * Register ProductLink here. Do not expose TrackedProductAnchor to articles.
 */
export const mdxComponents = {
  ProductLink,
} satisfies MDXComponents
