// app/sitemap.js
// Auto-generates /sitemap.xml — submitted to Google Search Console
// Blog URLs are fetched live from Sanity so sitemap updates automatically

// Force dynamic rendering so new Sanity articles appear immediately
// without needing a redeploy
export const dynamic = 'force-dynamic'
export const revalidate = 0

import { SITE } from '@/lib/seo'
import { getAllArticleSlugs } from '@/lib/sanity.queries'

export default async function sitemap() {
  const now = new Date()

  // ── Static pages ──
  const staticPages = [
    { url: SITE.url,                      lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE.url}/exhibitors`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE.url}/visitors`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE.url}/news`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${SITE.url}/gallery`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/services`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/downloads`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/contact`,         lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  // ── News/blog pages — auto-fetched from Sanity ──
  let newsPages = []
  try {
    const slugs = await getAllArticleSlugs()
    newsPages = slugs.map(({ slug, publishedAt }) => ({
      url: `${SITE.url}/news/${slug}`,
      lastModified: publishedAt ? new Date(publishedAt) : now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  } catch {
    // Sanity not reachable during build — skip news URLs
  }

  return [...staticPages, ...newsPages]
}
