# Content-commerce foundation

Static-export compatible product recommendations. No affiliate products
are registered. Public records are researched, non-affiliate editorial
examples. Evidence lives in:

- `docs/commerce/entryway-product-evidence.md` (shoe-free landing zone)
- `docs/commerce/laundry-product-evidence.md` (small-space laundry, including handmade willow baskets and a wooden floor rack)

## Product model

`lib/commerce/products.ts` is the registry. Article code should look up a
stable product ID rather than embedding merchant URLs.

Rendering (`ProductLink`) only outputs products with `status: "approved"`.
Draft and retired records stay in the registry but render nothing.

## Server / client boundary

Registry lookup happens during static generation in the server-facing
`ProductLink` component. That component is not a Client Component.

The browser receives only approved public link data:

- product ID, name, merchant, destination URL
- affiliate flag
- resolved evidence label
- precomputed `rel`
- placement and new-tab behavior

Draft records, retired records, `status`, `relatedSlugs`, `lastChecked`,
`note`, and the complete registry must stay out of Client Component props
and out of the client bundle.

`TrackedProductAnchor` is the click-tracking client layer. It must not
import `lib/commerce/products.ts`. Contentlayer MDX registers
`ProductLink` through `components/mdx-components.tsx`, not
`TrackedProductAnchor`.

`lib/commerce/link-attrs.ts` may be imported by either layer. Its import
from `products.ts` is type-only and does not load the registry.

## Evidence levels

| Level | Meaning | Public copy may say |
| --- | --- | --- |
| `personally-used` | Confirmed ordinary household use | That Ronin Mom used it, if that is true |
| `directly-compared` | A real comparison for a stated purpose | How the options differed in that comparison |
| `researched` | Public information only | What the sources support; not “we tested” |

Gifted products and paid sponsorships are separate disclosures, not evidence
levels. Do not file a gifted item as `personally-used`.

Appearing in the registry is not evidence of use, testing, or an affiliate
relationship. `isAffiliate` is true only when a program is actually approved
and configured.

## Affiliate links

- Destination is the merchant URL. No cloaked `/go/` redirects.
- Affiliate: `rel="sponsored nofollow"` (plus `noopener` if the link opens in a new tab).
- Non-affiliate editorial links do not get `sponsored`.
- The visible link shows the merchant plus an evidence label (`Researched`,
  `Compared`, or `Household use`) so appearance alone cannot imply personal use.
  Affiliate links also show “Affiliate link.”
- Pages that include affiliate links must show `AffiliateDisclosure` in the
  readable content, before the first recommendation, and link here from
  `/disclosure`.

## Analytics

Approved affiliate clicks send GA4 `affiliate_click` with `item_id`,
`merchant`, `placement`, and `page_path`. Ordinary editorial links do not.
If `gtag` is missing, navigation still proceeds.

## Sitemap and `/shop`

`/shop` is a noindex placeholder and is omitted from `app/sitemap.ts`. Restore
`/shop` to the generated sitemap when the curated shop launches with
substantive, indexable content.

## Out of scope until a dedicated review

Do not attach product recommendations to health or wellness articles, or
cleaning/disinfecting guidance, without a separate editorial and evidence
review. The former Castile-soap-and-vinegar article (`diy-disinfectant-spray`)
was retired and must not be republished as a disinfectant recipe.
