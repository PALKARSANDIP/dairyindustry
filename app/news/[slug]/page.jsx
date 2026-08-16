// app/news/[slug]/page.jsx — individual article page from Sanity
// REDESIGNED: Premium editorial/magazine aesthetic for Godwa Dairy Expo 2026

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Tag, ArrowRight, Share2, Phone, Mail, MapPin, Clock, Users } from 'lucide-react'
import { getArticleBySlug, getAllArticleSlugs, getRecentArticles } from '@/lib/sanity.queries'
import { SITE } from '@/lib/seo'
import PortableText from '@/components/PortableText'

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const slugs = await getAllArticleSlugs()
    return slugs.map(s => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }) {
  try {
    const article = await getArticleBySlug(params.slug)
    if (!article) return { title: 'Article Not Found' }
    const title = article.seo?.metaTitle || article.title
    const description = article.seo?.metaDescription || article.excerpt
    const image = article.coverImage?.asset?.url
    return {
      title: title + ' | Godwa Dairy Expo 2026',
      description,
      keywords: (article.tags || []).join(', ') + ', godwa dairy expo, dairy expo pune 2026',
      metadataBase: new URL(SITE.url),
      alternates: { canonical: `${SITE.url}/news/${params.slug}` },
      openGraph: {
        type: 'article',
        locale: 'en_IN',
        url: `${SITE.url}/news/${params.slug}`,
        siteName: 'Godwa Dairy Expo',
        title: title + ' | Godwa Dairy Expo 2026',
        description,
        images: image ? [{ url: image + '?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: title }] : [],
        publishedTime: article.publishedAt,
        authors: [SITE.organizer],
        section: article.category,
        tags: article.tags,
      },
      twitter: { card: 'summary_large_image', title, description, images: image ? [image + '?w=1200&h=630&fit=crop'] : [] },
    }
  } catch {
    return { title: 'Godwa Dairy Expo News' }
  }
}

const categoryConfig = {
  'News': { color: '#1A3A5C', bg: '#E8F0F8', label: 'News' },
  'Exhibitors': { color: '#92610A', bg: '#FDF3DC', label: 'Exhibitors' },
  'Visitors': { color: '#0A5C5F', bg: '#DCF5F5', label: 'Visitors' },
  'Industry': { color: '#2A6B2F', bg: '#DCF2DF', label: 'Industry' },
  'Event Update': { color: '#5A1478', bg: '#F2DCF9', label: 'Event Update' },
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

function formatDateShort(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function ArticlePage({ params }) {
  let article = null
  let related = []

  try {
    article = await getArticleBySlug(params.slug)
    related = await getRecentArticles(4)
    related = related.filter(a => a.slug?.current !== params.slug).slice(0, 3)
  } catch {
    notFound()
  }

  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage?.asset?.url ? [article.coverImage.asset.url + '?w=1200&h=630&fit=crop'] : [],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: { '@type': 'Organization', name: SITE.organizer, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.organizer,
      logo: { '@type': 'ImageObject', url: SITE.url + '/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/news/${params.slug}` },
    keywords: (article.tags || []).join(', '),
    articleSection: article.category,
    url: `${SITE.url}/news/${params.slug}`,
  }

  const articleUrl = `${SITE.url}/news/${params.slug}`
  const cat = categoryConfig[article.category] || categoryConfig['News']
  const hasHero = !!article.coverImage?.asset?.url

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=DM+Sans:wght@300;400;500;600&family=Oswald:wght@400;500;600&display=swap');

        .article-root { padding-top: 90px; background: #FAFAF7; }

        /* ── BREADCRUMB ── */
        .breadcrumb-bar {
          background: #fff;
          border-bottom: 1px solid #EDE8DF;
          padding: 10px 0;
        }
        .breadcrumb-inner {
          max-width: 1120px; margin: 0 auto; padding: 0 24px;
          display: flex; align-items: center; gap: 6px;
          font-family: 'DM Sans', sans-serif; font-size: 12px; color: #A89880;
        }
        .breadcrumb-inner a { color: #C8920A; text-decoration: none; font-weight: 500; }
        .breadcrumb-inner a:hover { color: #1A3A5C; }
        .breadcrumb-sep { color: #D5CABC; }

        /* ── HERO IMAGE CARD ── */
        .hero-section {
          background: #FAFAF7;
          padding: 28px 0 0;
        }

        .hero-card-wrap {
          max-width: 1120px; margin: 0 auto; padding: 0 24px;
        }

        /* The image card: fixed 16:7 aspect ratio, rounded, contained */
        .hero-card {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          border-radius: 20px;
          overflow: hidden;
          background: #0D1F30;
          box-shadow: 0 8px 48px rgba(13,31,48,0.22), 0 2px 12px rgba(0,0,0,0.10);
        }
        @media (max-width: 768px) {
          .hero-card { aspect-ratio: 16 / 9; border-radius: 14px; }
        }
        @media (max-width: 480px) {
          .hero-card { aspect-ratio: 4 / 3; border-radius: 12px; }
        }

        .hero-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 7s ease;
        }
        .hero-card:hover .hero-img { transform: scale(1.04); }

        /* Gradient only covers bottom 55% — top of image is crystal clear */
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 30%,
            rgba(10,24,38,0.55) 62%,
            rgba(10,24,38,0.94) 100%
          );
          border-radius: inherit;
        }

        .hero-content {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 32px 36px 36px;
        }
        @media (max-width: 640px) { .hero-content { padding: 20px 20px 24px; } }

        .hero-category {
          display: inline-flex; align-items: center;
          background: #D4A017;
          color: #fff;
          font-family: 'Oswald', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 1.4px; text-transform: uppercase;
          padding: 4px 12px; border-radius: 3px;
          margin-bottom: 12px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          color: #fff;
          font-size: clamp(1.2rem, 3.2vw, 2.4rem);
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0 0 14px;
          max-width: 780px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.35);
        }

        .hero-meta {
          display: flex; align-items: center; gap: 16px;
          flex-wrap: wrap;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.68);
        }
        .hero-meta-item {
          display: flex; align-items: center; gap: 5px;
        }
        .hero-meta-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: rgba(255,255,255,0.30);
        }

        /* ── NO HERO HEADER ── */
        .text-header {
          background: #fff;
          border-bottom: 1px solid #EDE8DF;
          padding: 40px 0 36px;
        }
        .text-header-inner {
          max-width: 1120px; margin: 0 auto; padding: 0 24px;
        }

        /* ── MAIN LAYOUT ── */
        .content-wrap {
          max-width: 1120px; margin: 0 auto; padding: 0 24px;
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 40px;
          padding: 44px 0 60px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .content-grid { grid-template-columns: 1fr; gap: 32px; padding: 32px 0 48px; }
        }

        /* ── BACK LINK ── */
        .back-link {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Oswald', sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: 1px; text-transform: uppercase;
          color: #C8920A; text-decoration: none;
          margin-bottom: 28px;
          padding: 8px 0;
          transition: color 0.2s, gap 0.2s;
        }
        .back-link:hover { color: #1A3A5C; gap: 11px; }

        /* ── ARTICLE CARD ── */
        .article-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #EDE8DF;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(26,58,92,0.07);
        }

        .article-body-inner { padding: 44px 48px; }
        @media (max-width: 640px) { .article-body-inner { padding: 28px 24px; } }

        /* Excerpt pull-quote */
        .article-excerpt {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #3A4A5C;
          border-left: 4px solid #D4A017;
          padding: 14px 20px;
          background: #FFFBF2;
          border-radius: 0 8px 8px 0;
          margin-bottom: 36px;
        }

        /* Portable text base styles */
        .article-body-inner h2 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem; font-weight: 700;
          color: #1A3A5C; margin: 36px 0 14px;
          line-height: 1.3;
        }
        .article-body-inner h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem; font-weight: 700;
          color: #1A3A5C; margin: 28px 0 10px;
        }
        .article-body-inner p {
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem; line-height: 1.85;
          color: #444; margin: 0 0 20px;
        }
        .article-body-inner a { color: #C8920A; text-decoration: underline; }
        .article-body-inner ul, .article-body-inner ol {
          font-family: 'DM Sans', sans-serif;
          color: #444; font-size: 1rem; line-height: 1.8;
          padding-left: 22px; margin: 0 0 20px;
        }
        .article-body-inner blockquote {
          border-left: 3px solid #D4A017;
          margin: 28px 0; padding: 10px 20px;
          background: #FFFBF2; border-radius: 0 6px 6px 0;
          font-style: italic; color: #5A4A30;
        }

        /* ── DIVIDER ── */
        .article-divider {
          border: none; border-top: 1px solid #EDE8DF;
          margin: 36px 0;
        }

        /* ── TAGS ── */
        .tags-row {
          display: flex; flex-wrap: wrap; gap: 8px;
          padding: 0 48px 36px;
        }
        @media (max-width: 640px) { .tags-row { padding: 0 24px 28px; } }

        .tag-chip {
          display: inline-flex; align-items: center; gap: 5px;
          background: #FFFBF2;
          border: 1px solid #E8D99A;
          color: #92610A;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 600;
          padding: 5px 12px; border-radius: 99px;
          letter-spacing: 0.3px;
        }

        /* ── SHARE BAR ── */
        .share-bar {
          background: #FDFAF4;
          border-top: 1px solid #EDE8DF;
          padding: 24px 48px;
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        @media (max-width: 640px) { .share-bar { padding: 20px 24px; } }

        .share-label {
          font-family: 'Oswald', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 1.2px;
          text-transform: uppercase; color: #A89880;
          margin-right: 4px;
        }
        .share-btn {
          display: inline-flex; align-items: center; gap: 6px;
          background: #fff;
          border: 1px solid #DDD5C8;
          color: #2A3A4C;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 600;
          padding: 8px 16px; border-radius: 8px;
          text-decoration: none; transition: all 0.2s;
        }
        .share-btn:hover { background: #FFF3D6; border-color: #D4A017; color: #92610A; }

        /* ── SIDEBAR ── */
        .sidebar { display: flex; flex-direction: column; gap: 20px; }

        @media (min-width: 1025px) {
          .sidebar-sticky { position: sticky; top: 110px; }
        }

        /* CTA Card */
        .cta-card {
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(145deg, #0D2B45 0%, #0D5E62 60%, #0D7377 100%);
          color: #fff;
        }
        .cta-card-top {
          padding: 28px 24px 20px;
        }
        .cta-expo-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.20);
          font-family: 'Oswald', sans-serif;
          font-size: 10px; font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; color: #F5C842;
          padding: 4px 10px; border-radius: 4px;
          margin-bottom: 14px;
        }
        .cta-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem; font-weight: 700;
          line-height: 1.2; margin-bottom: 6px;
        }
        .cta-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: rgba(255,255,255,0.65);
          line-height: 1.5; margin-bottom: 20px;
        }
        .cta-btn-primary {
          display: block; text-align: center;
          background: linear-gradient(135deg, #F5C842, #D4A017);
          color: #1A3A5C;
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 13px 20px; border-radius: 10px;
          text-decoration: none; margin-bottom: 10px;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 4px 16px rgba(212,160,23,0.4);
        }
        .cta-btn-primary:hover { opacity: 0.92; transform: translateY(-1px); }
        .cta-btn-secondary {
          display: block; text-align: center;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.90);
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 11px 20px; border-radius: 10px;
          text-decoration: none; transition: background 0.2s;
        }
        .cta-btn-secondary:hover { background: rgba(255,255,255,0.18); }
        .cta-card-bottom {
          background: rgba(0,0,0,0.20);
          padding: 16px 24px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .cta-stat { font-family: 'DM Sans', sans-serif; }
        .cta-stat-num {
          font-family: 'Oswald', sans-serif;
          font-size: 1.4rem; font-weight: 600;
          color: #F5C842; line-height: 1;
        }
        .cta-stat-label {
          font-size: 10px; color: rgba(255,255,255,0.50);
          text-transform: uppercase; letter-spacing: 0.8px;
          margin-top: 2px;
        }

        /* Event Details Card */
        .details-card {
          background: #fff;
          border: 1px solid #EDE8DF;
          border-radius: 14px;
          padding: 22px 22px 18px;
          box-shadow: 0 2px 16px rgba(26,58,92,0.05);
        }
        .details-title {
          font-family: 'Playfair Display', serif;
          font-size: 14px; font-weight: 700;
          color: #1A3A5C; margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #EDE8DF;
        }
        .detail-row {
          display: flex; align-items: center; gap: 12px;
          padding: 9px 0;
          border-bottom: 1px solid #F5F0E8;
        }
        .detail-row:last-child { border-bottom: none; padding-bottom: 0; }
        .detail-icon {
          width: 32px; height: 32px;
          background: #FFFBF2;
          border: 1px solid #E8D99A;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #C8920A; flex-shrink: 0;
        }
        .detail-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 500;
          color: #A89880; text-transform: uppercase; letter-spacing: 0.8px;
        }
        .detail-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: #1A3A5C; margin-top: 1px;
        }

        /* Contact Card */
        .contact-card {
          background: #FFFBF2;
          border: 1px solid #E8D99A;
          border-radius: 14px;
          padding: 20px 22px;
        }
        .contact-title {
          font-family: 'Playfair Display', serif;
          font-size: 13px; font-weight: 700;
          color: #1A3A5C; margin-bottom: 14px;
        }
        .contact-link {
          display: flex; align-items: center; gap: 9px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          color: #0D7377; text-decoration: none;
          padding: 7px 0;
          transition: color 0.2s;
        }
        .contact-link:hover { color: #1A3A5C; }
        .contact-link-icon {
          width: 28px; height: 28px;
          background: #fff;
          border-radius: 7px;
          border: 1px solid #D5E8E8;
          display: flex; align-items: center; justify-content: center;
          color: #0D7377; flex-shrink: 0;
        }

        /* ── RELATED ── */
        .related-section {
          background: #F4F0E8;
          border-top: 1px solid #DDD5C8;
          padding: 60px 0;
        }
        .related-inner { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .related-header {
          display: flex; align-items: baseline; justify-content: space-between;
          margin-bottom: 32px;
        }
        .related-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.3rem, 3vw, 1.7rem);
          font-weight: 700; color: #1A3A5C;
        }
        .related-view-all {
          font-family: 'Oswald', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          color: #C8920A; text-decoration: none;
          display: flex; align-items: center; gap: 5px;
          transition: gap 0.2s, color 0.2s;
        }
        .related-view-all:hover { color: #1A3A5C; gap: 9px; }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) { .related-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .related-grid { grid-template-columns: 1fr; } }

        .related-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #DDD5C8;
          text-decoration: none;
          display: block;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 2px 12px rgba(26,58,92,0.06);
        }
        .related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(26,58,92,0.12);
        }

        .related-img-wrap {
          position: relative;
          height: 170px; overflow: hidden;
        }
        .related-img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .related-card:hover .related-img { transform: scale(1.05); }

        .related-placeholder {
          height: 170px;
          background: linear-gradient(135deg, #E8F0F8, #FFFBF2);
          display: flex; align-items: center; justify-content: center;
          font-size: 2.5rem;
        }

        .related-body { padding: 18px 18px 20px; }
        .related-cat {
          display: inline-block;
          font-family: 'Oswald', sans-serif;
          font-size: 10px; font-weight: 600;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 3px 10px; border-radius: 3px;
          margin-bottom: 10px;
        }
        .related-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px; font-weight: 700;
          color: #1A3A5C; line-height: 1.4;
          margin-bottom: 12px;
        }
        .related-read-more {
          font-family: 'Oswald', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.8px; text-transform: uppercase;
          color: #C8920A;
          display: inline-flex; align-items: center; gap: 5px;
        }

        /* ── NO HERO TITLE SECTION ── */
        .no-hero-header { margin-bottom: 28px; }
        .no-hero-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900; color: #1A3A5C;
          font-size: clamp(1.6rem,4vw,2.5rem);
          line-height: 1.15; margin: 16px 0 12px;
        }
        .no-hero-meta {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; color: #A89880;
          display: flex; align-items: center; gap: 6px;
        }
      `}</style>

      <div className="article-root">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/news">News</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{article.category}</span>
          </div>
        </div>

        {/* Hero image — contained card, NOT full-screen */}
        {hasHero && (
          <div className="hero-section">
            <div className="hero-card-wrap">
              <div className="hero-card">
                <img
                  src={article.coverImage.asset.url + '?w=1600&h=700&fit=crop&crop=center&auto=format'}
                  alt={article.coverImage.alt || article.title}
                  className="hero-img"
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                  <span className="hero-category">{article.category}</span>
                  <h1 className="hero-title">{article.title}</h1>
                  <div className="hero-meta">
                    <span className="hero-meta-item">
                      <Calendar size={12} /> {formatDate(article.publishedAt)}
                    </span>
                    <span className="hero-meta-dot" />
                    <span>By {SITE.organizer}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content area */}
        <div className="content-wrap">
          <div className="content-grid">

            {/* ── MAIN COLUMN ── */}
            <main>
              <Link href="/news" className="back-link">
                <ArrowLeft size={14} /> Back to News
              </Link>

              {/* Title when no hero */}
              {!hasHero && (
                <div className="no-hero-header">
                  <span
                    className="related-cat"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {article.category}
                  </span>
                  <h1 className="no-hero-title">{article.title}</h1>
                  <div className="no-hero-meta">
                    <Calendar size={13} /> {formatDate(article.publishedAt)}
                    <span style={{ color: '#DDD5C8' }}>·</span>
                    <span>By {SITE.organizer}</span>
                  </div>
                </div>
              )}

              {/* Article card */}
              <article className="article-card">
                <div className="article-body-inner">
                  {article.excerpt && (
                    <p className="article-excerpt">{article.excerpt}</p>
                  )}
                  <PortableText content={article.body} />
                </div>

                {/* Tags */}
                {article.tags?.length > 0 && (
                  <>
                    <hr className="article-divider" style={{ margin: '0 48px 24px' }} />
                    <div className="tags-row">
                      {article.tags.map(tag => (
                        <span key={tag} className="tag-chip">
                          <Tag size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Share bar */}
                <div className="share-bar">
                  <span className="share-label"><Share2 size={11} style={{ display: 'inline', marginRight: 4 }} />Share</span>
                  {[
                    { label: 'WhatsApp', emoji: '📱', href: `https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' - ' + articleUrl)}` },
                    { label: 'Facebook', emoji: '📘', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}` },
                    { label: 'Twitter', emoji: '🐦', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}` },
                  ].map(({ label, emoji, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="share-btn">
                      <span>{emoji}</span> {label}
                    </a>
                  ))}
                </div>
              </article>
            </main>

            {/* ── SIDEBAR ── */}
            <aside className="sidebar sidebar-sticky">

              {/* Expo CTA */}
              <div className="cta-card">
                <div className="cta-card-top">
                  <div className="cta-expo-badge">🥛 Godwa Dairy Expo</div>
                  <h3 className="cta-title">India's Premier<br />Dairy Exhibition</h3>
                  <p className="cta-subtitle">5–7 December 2026, Pune. Connect with industry leaders and innovators.</p>
                  <a
                    href="https://exporegistration.in/expo-visitor.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn-primary"
                  >
                    Book Your Stall →
                  </a>
                  <Link href="/visitors" className="cta-btn-secondary">
                    Register as Visitor
                  </Link>
                </div>
                <div className="cta-card-bottom">
                  <div className="cta-stat">
                    <div className="cta-stat-num">15K+</div>
                    <div className="cta-stat-label">Visitors</div>
                  </div>
                  <div className="cta-stat">
                    <div className="cta-stat-num">200+</div>
                    <div className="cta-stat-label">Exhibitors</div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="details-card">
                <div className="details-title">Event Details</div>
                {[
                  { icon: <Calendar size={14} />, label: 'Date', value: '5–7 December 2026' },
                  { icon: <MapPin size={14} />, label: 'Venue', value: 'Pune, Maharashtra' },
                  { icon: <Clock size={14} />, label: 'Hours', value: '10 AM – 6 PM Daily' },
                  { icon: <Users size={14} />, label: 'Expected', value: '15,000+ Visitors' },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="detail-row">
                    <div className="detail-icon">{icon}</div>
                    <div>
                      <div className="detail-label">{label}</div>
                      <div className="detail-value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="contact-card">
                <div className="contact-title">Get in Touch</div>
                <a href="tel:+919850007425" className="contact-link">
                  <div className="contact-link-icon"><Phone size={13} /></div>
                  +91 98500 07425
                </a>
                <a href="mailto:dairyexpo@gmail.com" className="contact-link">
                  <div className="contact-link-icon"><Mail size={13} /></div>
                  dairyexpo@gmail.com
                </a>
              </div>

            </aside>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="related-section">
            <div className="related-inner">
              <div className="related-header">
                <h2 className="related-title">More Articles</h2>
                <Link href="/news" className="related-view-all">
                  View all <ArrowRight size={12} />
                </Link>
              </div>
              <div className="related-grid">
                {related.map(a => {
                  const rCat = categoryConfig[a.category] || categoryConfig['News']
                  return (
                    <Link key={a._id} href={`/news/${a.slug?.current}`} className="related-card">
                      <div className="related-img-wrap">
                        {a.coverImage?.asset?.url ? (
                          <img
                            src={a.coverImage.asset.url + '?w=700&h=460&fit=crop&auto=format'}
                            alt={a.coverImage.alt || a.title}
                            className="related-img"
                          />
                        ) : (
                          <div className="related-placeholder">📰</div>
                        )}
                      </div>
                      <div className="related-body">
                        <span
                          className="related-cat"
                          style={{ background: rCat.bg, color: rCat.color }}
                        >
                          {a.category}
                        </span>
                        <h3 className="related-card-title">{a.title}</h3>
                        <span className="related-read-more">
                          Read Article <ArrowRight size={11} />
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}