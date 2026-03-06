// lib/sanity.queries.js
// All queries to fetch content from Sanity
// GROQ is Sanity's query language — like SQL but for content

import { client } from './sanity.client'

// ── Fetch all articles (for news listing page) ──
export async function getAllArticles() {
  return client.fetch(`
    *[_type == "newsArticle"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      featured,
      tags,
      coverImage {
        asset-> { url },
        alt
      }
    }
  `)
}

// ── Fetch single article by slug (for article detail page) ──
export async function getArticleBySlug(slug) {
  return client.fetch(`
    *[_type == "newsArticle" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      category,
      featured,
      tags,
      coverImage {
        asset-> { url },
        alt
      },
      seo {
        metaTitle,
        metaDescription
      }
    }
  `, { slug })
}

// ── Fetch featured articles (for home page preview) ──
export async function getFeaturedArticles() {
  return client.fetch(`
    *[_type == "newsArticle" && featured == true] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      tags,
      coverImage {
        asset-> { url },
        alt
      }
    }
  `)
}

// ── Fetch recent articles (for sidebar / home preview) ──
export async function getRecentArticles(limit = 3) {
  return client.fetch(`
    *[_type == "newsArticle"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      category,
      coverImage {
        asset-> { url },
        alt
      }
    }
  `, { limit })
}

// ── Fetch all slugs (for static site generation) ──
export async function getAllArticleSlugs() {
  return client.fetch(`
    *[_type == "newsArticle"] {
      "slug": slug.current
    }
  `)
}

// ── Fetch site settings ──
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      announcementBar,
      showAnnouncementBar,
      stallBookingDeadline
    }
  `)
}
