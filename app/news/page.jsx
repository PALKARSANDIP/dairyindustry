// app/news/page.jsx — fetches articles from Sanity CMS
import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { getAllArticles } from '@/lib/sanity.queries'
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'News & Updates - Dairy Industry Insights',
  description: 'Latest news, updates and industry insights from Godwa Dairy Expo 2026. Stall bookings, visitor registration, dairy technology trends and Pune dairy industry news.',
  path: '/news',
  keywords: ['dairy expo news', 'dairy industry news pune', 'godwa expo updates 2026'],
})

const breadcrumbSchema = buildBreadcrumbs([
  { name: 'Home', path: '' },
  { name: 'News & Updates', path: '/news' },
])

// Revalidate every 60 seconds so new articles appear quickly
export const revalidate = 60

const categoryColors = {
  'News': '#1A3A5C',
  'Exhibitors': '#D4A017',
  'Visitors': '#0D7377',
  'Industry': '#4CAF50',
  'Event Update': '#7B1FA2',
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default async function NewsPage() {
  // Fetch from Sanity — falls back to empty array if not configured yet
  let articles = []
  try {
    articles = await getAllArticles()
  } catch (e) {
    // Sanity not configured yet — show placeholder
    articles = []
  }

  const featured = articles.filter(a => a.featured)
  const rest = articles.filter(a => !a.featured)
  const hasArticles = articles.length > 0

  return (
    <div style={{ paddingTop: 90 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <span style={{ color: '#F5C842', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Stay Informed</span>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', margin: '8px 0 12px' }}>
          News & Updates
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, maxWidth: 550, margin: '0 auto' }}>
          Latest updates, industry insights and announcements from Godwa Dairy Expo 2026
        </p>
      </section>

      {/* Not configured yet — helpful message */}
      {!hasArticles && (
        <section style={{ padding: '80px 16px', textAlign: 'center', background: '#FFF8EE' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', background: 'white', borderRadius: 20, padding: 48, boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>📰</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, fontWeight: 700, color: '#1A3A5C', marginBottom: 12 }}>
              News Coming Soon
            </h2>
            <p style={{ color: '#666', fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
              Articles will appear here once Sanity CMS is connected. Follow the setup guide to start publishing.
            </p>
            <Link href="/" className="btn-gold" style={{ padding: '12px 28px', borderRadius: 999, fontSize: 14, textDecoration: 'none' }}>
              Back to Home
            </Link>
          </div>
        </section>
      )}

      {/* Featured */}
      {featured.length > 0 && (
        <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: '#1A3A5C', marginBottom: 28 }}>Featured</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 28 }}>
              {featured.map(article => (
                <Link key={article._id} href={`/news/${article.slug.current}`} style={{ textDecoration: 'none' }}>
                  <article className="card-hover" style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #FFF8EE', height: '100%' }}>
                    {article.coverImage?.asset?.url && (
                      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                        <img src={article.coverImage.asset.url + '?w=800&h=440&fit=crop'} alt={article.coverImage.alt || article.title} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: 14, left: 14 }}>
                          <span style={{ background: categoryColors[article.category] || '#1A3A5C', color: 'white', padding: '4px 14px', borderRadius: 999, fontSize: 11, fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{article.category}</span>
                        </div>
                      </div>
                    )}
                    <div style={{ padding: 24 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#999', fontSize: 12, marginBottom: 10 }}>
                        <Calendar size={12} /><span>{formatDate(article.publishedAt)}</span>
                      </div>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#1A3A5C', marginBottom: 10, lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{article.excerpt}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#D4A017', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13 }}>
                        Read More <ArrowRight size={14} />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All articles */}
      {rest.length > 0 && (
        <section style={{ padding: '48px 0', background: '#FDFAF4' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: '#1A3A5C', marginBottom: 28 }}>All Articles</h2>
            <div style={{ display: 'grid', gap: 20 }}>
              {rest.map(article => (
                <Link key={article._id} href={`/news/${article.slug.current}`} style={{ textDecoration: 'none' }}>
                  <article className="card-hover" style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE', display: 'grid', gridTemplateColumns: 'minmax(0,240px) 1fr' }}>
                    {article.coverImage?.asset?.url ? (
                      <img src={article.coverImage.asset.url + '?w=480&h=320&fit=crop'} alt={article.coverImage.alt || article.title} className="gallery-img" style={{ width: '100%', height: '100%', minHeight: 160, objectFit: 'cover' }} />
                    ) : (
                      <div style={{ background: '#FFF8EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>📰</div>
                    )}
                    <div style={{ padding: '20px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span style={{ background: categoryColors[article.category] || '#1A3A5C', color: 'white', padding: '3px 12px', borderRadius: 999, fontSize: 11, fontFamily: 'Oswald, sans-serif' }}>{article.category}</span>
                        <span style={{ color: '#bbb', fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={11} /> {formatDate(article.publishedAt)}</span>
                      </div>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: '#1A3A5C', marginBottom: 8, lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ color: '#666', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{article.excerpt}</p>
                      {article.tags?.length > 0 && (
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          {article.tags.map(tag => (
                            <span key={tag} style={{ background: '#FFF8EE', color: '#D4A017', padding: '2px 10px', borderRadius: 999, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
                              <Tag size={10} /> {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: '56px 0', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: 'white', marginBottom: 10 }}>Ready to Participate?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 14 }}>Book your stall or register as a visitor for Godwa Dairy Expo 2026</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '12px 28px', borderRadius: 999, fontSize: 14, textDecoration: 'none', gap: 8 }}>
              Book Exhibitor Stall <ArrowRight size={15} />
            </a>
            <Link href="/visitors" style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.35)', color: 'white', padding: '12px 28px', borderRadius: 999, fontSize: 14, fontFamily: 'Oswald, sans-serif', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Visitor Registration
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
