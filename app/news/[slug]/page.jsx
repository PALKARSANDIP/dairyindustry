// app/news/[slug]/page.jsx — individual article page from Sanity
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'
import { getArticleBySlug, getAllArticleSlugs, getRecentArticles } from '@/lib/sanity.queries'
import { SITE } from '@/lib/seo'
import PortableText from '@/components/PortableText'

export const revalidate = 60

// Generate all article URL paths at build time
export async function generateStaticParams() {
  try {
    const slugs = await getAllArticleSlugs()
    return slugs.map(s => ({ slug: s.slug }))
  } catch {
    return []
  }
}

// Dynamic SEO metadata per article
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
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: image ? [image + '?w=1200&h=630&fit=crop'] : [],
      },
    }
  } catch {
    return { title: 'Godwa Dairy Expo News' }
  }
}

const categoryColors = {
  'News': '#1A3A5C', 'Exhibitors': '#D4A017',
  'Visitors': '#0D7377', 'Industry': '#4CAF50', 'Event Update': '#7B1FA2',
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
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

  // Schema.org Article structured data
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

  return (
    <div style={{ paddingTop: 90 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div style={{ background: '#FFF8EE', borderBottom: '1px solid #eee', padding: '10px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#999' }}>
          <Link href="/" style={{ color: '#D4A017', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/news" style={{ color: '#D4A017', textDecoration: 'none' }}>News</Link>
          <span>/</span>
          <span style={{ color: '#555' }}>{article.category}</span>
        </div>
      </div>

      {/* Hero */}
      {article.coverImage?.asset?.url && (
        <div style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
          <img src={article.coverImage.asset.url + '?w=1600&h=840&fit=crop'} alt={article.coverImage.alt || article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '48px 16px' }}>
            <div style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>
              <span style={{ background: categoryColors[article.category] || '#1A3A5C', color: 'white', padding: '5px 16px', borderRadius: 999, fontSize: 12, fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{article.category}</span>
              <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem,4vw,2.8rem)', fontWeight: 900, color: 'white', marginTop: 14, lineHeight: 1.3 }}>{article.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12, color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Calendar size={13} /> {formatDate(article.publishedAt)}</span>
                <span>By {SITE.organizer}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content + sidebar */}
      <article style={{ padding: '60px 0', background: '#FDFAF4' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, alignItems: 'start' }}>

          <div>
            <Link href="/news" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#D4A017', textDecoration: 'none', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13, marginBottom: 32 }}>
              <ArrowLeft size={15} /> Back to News
            </Link>

            {/* Article no hero image - show title here */}
            {!article.coverImage?.asset?.url && (
              <div style={{ marginBottom: 32 }}>
                <span style={{ background: categoryColors[article.category] || '#1A3A5C', color: 'white', padding: '4px 14px', borderRadius: 999, fontSize: 12, fontFamily: 'Oswald, sans-serif' }}>{article.category}</span>
                <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, color: '#1A3A5C', marginTop: 16, lineHeight: 1.3 }}>{article.title}</h1>
                <div style={{ color: '#999', fontSize: 13, marginTop: 8, display: 'flex', alignItems: 'center', gap: 5 }}><Calendar size={13} /> {formatDate(article.publishedAt)}</div>
              </div>
            )}

            <div style={{ background: 'white', borderRadius: 20, padding: 36, boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
              {/* Excerpt highlight */}
              <p style={{ fontSize: 16, color: '#444', lineHeight: 1.85, fontWeight: 600, borderLeft: '4px solid #F5C842', paddingLeft: 18, marginBottom: 32, fontStyle: 'italic' }}>
                {article.excerpt}
              </p>
              {/* Rich text body from Sanity */}
              <PortableText content={article.body} />
            </div>

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {article.tags.map(tag => (
                  <span key={tag} style={{ background: '#FFF8EE', color: '#D4A017', padding: '5px 14px', borderRadius: 999, fontSize: 12, display: 'flex', alignItems: 'center', gap: 5, border: '1px solid #F5C842' }}>
                    <Tag size={11} /> {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share */}
            <div style={{ marginTop: 32, background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #FFF8EE' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 700, color: '#1A3A5C', marginBottom: 14 }}>Share this article</h3>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                  { label: '📱 WhatsApp', href: `https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' - ' + articleUrl)}` },
                  { label: '📘 Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}` },
                  { label: '🐦 Twitter', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(articleUrl)}` },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ background: '#FFF8EE', color: '#1A3A5C', padding: '8px 16px', borderRadius: 999, fontSize: 12, textDecoration: 'none', border: '1px solid #eee', fontWeight: 600 }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: 110 }}>
            <div style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', borderRadius: 20, padding: 28, color: 'white', marginBottom: 24 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🥛</div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Godwa Expo 2026</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>5-7 December 2026, Pune. Join 15,000+ industry professionals.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '10px 16px', borderRadius: 12, fontSize: 13, textDecoration: 'none', justifyContent: 'center' }}>Book Stall</a>
                <Link href="/visitors" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '10px 16px', borderRadius: 12, fontSize: 13, textDecoration: 'none', fontFamily: 'Oswald, sans-serif', fontWeight: 700, textAlign: 'center' }}>Visitor Register</Link>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE', marginBottom: 24 }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 700, color: '#1A3A5C', marginBottom: 14 }}>Event Details</h3>
              {[{ i: '📅', l: 'Date', v: '5-7 December 2026' },{ i: '📍', l: 'Venue', v: 'Pune, Maharashtra' },{ i: '🕐', l: 'Time', v: '10 AM - 6 PM' },{ i: '👥', l: 'Visitors', v: '15,000+' }].map(({ i, l, v }) => (
                <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 13 }}>
                  <span style={{ fontSize: 18 }}>{i}</span>
                  <div><span style={{ color: '#999', fontSize: 11 }}>{l}</span><div style={{ color: '#1A3A5C', fontWeight: 700 }}>{v}</div></div>
                </div>
              ))}
            </div>

            <div style={{ background: '#FFF8EE', borderRadius: 16, padding: 20, border: '1px solid #F5C842' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 15, fontWeight: 700, color: '#1A3A5C', marginBottom: 10 }}>Contact Us</h3>
              <a href="tel:+919850007425" style={{ display: 'block', color: '#0D7377', fontWeight: 700, textDecoration: 'none', fontSize: 14, marginBottom: 4 }}>+91 98500 07425</a>
              <a href="mailto:dairyexpo@gmail.com" style={{ display: 'block', color: '#0D7377', fontWeight: 600, textDecoration: 'none', fontSize: 13 }}>dairyexpo@gmail.com</a>
            </div>
          </aside>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: '#1A3A5C', marginBottom: 28 }}>More Articles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {related.map(a => (
                <Link key={a._id} href={`/news/${a.slug?.current}`} style={{ textDecoration: 'none' }}>
                  <article className="card-hover" style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', border: '1px solid #FFF8EE' }}>
                    {a.coverImage?.asset?.url ? (
                      <img src={a.coverImage.asset.url + '?w=600&h=400&fit=crop'} alt={a.coverImage.alt || a.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                    ) : (
                      <div style={{ height: 160, background: '#FFF8EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>📰</div>
                    )}
                    <div style={{ padding: 18 }}>
                      <span style={{ background: categoryColors[a.category] || '#1A3A5C', color: 'white', padding: '3px 10px', borderRadius: 999, fontSize: 10, fontFamily: 'Oswald, sans-serif' }}>{a.category}</span>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 15, fontWeight: 700, color: '#1A3A5C', margin: '8px 0 6px', lineHeight: 1.4 }}>{a.title}</h3>
                      <span style={{ color: '#D4A017', fontSize: 12, fontFamily: 'Oswald, sans-serif', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>Read More <ArrowRight size={12} /></span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
