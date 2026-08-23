import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { Download, FileText, Map, Image, List, BookOpen, AlignLeft } from 'lucide-react'

const docs = [
  // { icon: Map, title: 'Exhibition Layout', desc: 'Floor plan and stall layout map for Godwa Expo 2026', tag: 'PDF', color: '#E8702E', size: '2.4 MB' },
  { icon: BookOpen, title: 'Official Brochure', desc: 'Complete information brochure about Godwa Dairy Expo 2026', tag: 'PDF', color: '#E8702E', size: '4.0 MB' , href: '/final-brochure-8-Pages_compressed.pdf' },
  { icon: List, title: 'Exhibitor List 2025', desc: 'Complete list of exhibitors from the previous 2025 edition', tag: 'PDF', color: '#E8702E', size: '1.8 MB', href: '/Exhibitor-list-2025-Final.pdf' },
  // { icon: Image, title: 'Stall Banner Guidelines', desc: 'Specifications and size guidelines for stall banners and flex printing', tag: 'PDF', color: '#E8702E', size: '0.9 MB' },
  { icon: AlignLeft, title: 'Terms & Conditions', desc: 'Overall terms and conditions for exhibitors and visitors', tag: 'PDF', color: '#E8702E', size: '1.2 MB', href: '/DOC-20260309-WA0016.pdf' },
]

const logos = [
  { label: 'Black & White', bg: '#1a1a1a', img: '/Images/black_logo.jpeg', file: '/Images/black_logo.jpeg' },
  { label: 'Blue Logo', bg: '#1A3A5C', img: '/Images/blue_logo.jpeg', file: '/Images/blue_logo.jpeg' },
  { label: 'Cow Mascot', bg: '#f0f0f0', img: '/Images/cow_mascot.jpeg', file: '/Images/cow_mascot.jpeg' },
]

export const metadata = buildMetadata({
  title: 'Downloads - Brochure, Layout & Brand Assets',
  description: "Download Godwa Dairy Expo 2026 official brochure, exhibition layout, exhibitor list 2025, banner guidelines, terms and conditions, and logo assets.",
  path: '/downloads',
  keywords: ['godwa expo brochure download', 'dairy expo layout 2026', 'exhibitor list download', 'dairy expo terms conditions'],
})

const breadcrumbSchema = buildBreadcrumbs([
  { name: 'Home', path: '' },
  { name: 'Downloads', path: '/downloads' },
])

export default function DownloadsPage() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif', paddingTop: 90 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C 0%, #0D5C8C 100%)', padding: '56px 16px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#ffffff', marginBottom: 10, letterSpacing: '-0.01em' }}>
          Downloads
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, fontWeight: 400, maxWidth: 480, margin: '0 auto' }}>
          Official documents, brochures, layouts and brand assets
        </p>
      </section>

      {/* Documents */}
      <section style={{ padding: '56px 16px', background: '#f9fafb' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: '#111827', marginBottom: 6 }}>Exhibition Resources</h2>
          <p style={{ fontSize: 15, color: '#6b7280', marginBottom: 28 }}>Download official documents for Godwa Dairy Expo 2026</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {docs.map(doc => (
              <div
                key={doc.title}
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  padding: '18px 20px',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                {/* Icon */}
                <div style={{ width: 44, height: 44, borderRadius: 10, background: '#fff4ee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <doc.icon size={20} style={{ color: '#E8702E' }} />
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#111827' }}>{doc.title}</span>
                    <span style={{ background: '#fff4ee', color: '#E8702E', padding: '2px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>{doc.tag}</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.5, margin: 0 }}>{doc.desc}</p>
                </div>

                {/* Size + Download */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                  <span style={{ color: '#9ca3af', fontSize: 13, whiteSpace: 'nowrap' }}>{doc.size}</span>
                  {doc.href ? (
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      style={{
                        background: '#1A3A5C',
                        color: '#fff',
                        padding: '9px 18px',
                        borderRadius: 8,
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Download size={14} /> Download
                    </a>
                  ) : (
                    <button
                      style={{
                        background: '#e5e7eb',
                        color: '#9ca3af',
                        padding: '9px 18px',
                        borderRadius: 8,
                        fontSize: 14,
                        fontWeight: 600,
                        border: 'none',
                        cursor: 'not-allowed',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        whiteSpace: 'nowrap',
                      }}
                      disabled
                      title="Coming soon"
                    >
                      <Download size={14} /> Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Downloads */}
      <section style={{ padding: '56px 16px', background: '#ffffff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: '#111827', marginBottom: 6 }}>Logo Downloads</h2>
          <p style={{ fontSize: 15, color: '#6b7280', marginBottom: 28 }}>For use by exhibitors, media partners, and event promoters</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
            {logos.map(l => (
              <div
                key={l.label}
                style={{ background: '#f9fafb', borderRadius: 12, overflow: 'hidden', border: '1px solid #e5e7eb' }}
              >
                <div style={{ height: 120, background: l.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={l.img} alt={l.label} style={{ height: '100%', width: '100%', objectFit: 'contain', padding: 14 }} />
                </div>
                <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 15, fontWeight: 500, color: '#374151' }}>{l.label}</span>
                  <a
                    href={l.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#1A3A5C',
                      color: '#fff',
                      padding: '7px 14px',
                      borderRadius: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 5,
                    }}
                  >
                    <Download size={12} /> PNG
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 16 }}>
            Please use Godwa logos only for official event promotion purposes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '48px 16px', background: '#1A3A5C', textAlign: 'center' }}>
        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#ffffff', marginBottom: 8 }}>Need Additional Materials?</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, marginBottom: 24, fontWeight: 400 }}>
          Contact us for high-resolution assets or custom documentation.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:dairyexpo@gmail.com"
            style={{
              background: '#E8702E',
              color: '#fff',
              padding: '11px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Email Us
          </a>
          <a
            href="tel:+919850007425"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              padding: '11px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Call Us
          </a>
        </div>
      </section>
    </div>
  )
}
