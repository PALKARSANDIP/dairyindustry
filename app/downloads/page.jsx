import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { Download, FileText, Map, Image, List, BookOpen, AlignLeft } from 'lucide-react'

const docs = [
  { icon: Map, title: 'Exhibition Layout', desc: 'Floor plan and stall layout map for Godwa Expo 2026', tag: 'PDF', color: '#D4A017', size: '2.4 MB' },
  { icon: BookOpen, title: 'Official Brochure', desc: 'Complete information brochure about Godwa Dairy Expo 2026', tag: 'PDF', color: '#D4A017', size: '5.1 MB' },
  { icon: List, title: 'Exhibitor List 2025', desc: 'Complete list of exhibitors from the previous 2025 edition', tag: 'PDF', color: '#0D7377', size: '1.8 MB' },
  { icon: Image, title: 'Stall Banner Guidelines', desc: 'Specifications and size guidelines for stall banners and flex printing', tag: 'PDF', color: '#1A3A5C', size: '0.9 MB' },
  { icon: AlignLeft, title: 'Terms & Conditions', desc: 'Overall terms and conditions for exhibitors and visitors', tag: 'PDF', color: '#4CAF50', size: '1.2 MB' },
  { icon: FileText, title: 'Stall Allotment Guide', desc: 'Guidelines for stall allotment process and selection criteria', tag: 'PDF', color: '#1A3A5C', size: '0.8 MB' },
]

const logos = [
  { label: 'Blue Logo', bg: '#1A3A5C', text: 'white' },
  { label: 'Black Logo', bg: '#1a1a1a', text: 'white' },
  { label: 'White Logo', bg: '#f5f5f5', text: '#1A3A5C' },
  { label: 'Cow Mascot', bg: '#FFF8EE', text: '#1A3A5C' },
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
    <div style={{ paddingTop: 90 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 8 }}>Downloads</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16 }}>Official documents, brochures, layouts and brand assets</p>
      </section>

      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 40 }}>Exhibition Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20 }}>
            {docs.map(doc => (
              <div key={doc.title} className="card-hover" style={{ background: 'white', borderRadius: 18, padding: 24, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#FFF8EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <doc.icon size={22} style={{ color: doc.color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 700, color: '#1A3A5C' }}>{doc.title}</h3>
                    <span style={{ background: doc.color, color: 'white', padding: '2px 8px', borderRadius: 999, fontSize: 10, fontFamily: 'Oswald, sans-serif' }}>{doc.tag}</span>
                  </div>
                  <p style={{ color: '#777', fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>{doc.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: '#bbb', fontSize: 11 }}>{doc.size}</span>
                    <button className="btn-blue" style={{ padding: '7px 16px', borderRadius: 999, fontSize: 12, border: 'none', cursor: 'pointer', gap: 6 }}>
                      <Download size={12} /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="dairy-pattern" style={{ padding: '64px 0', background: '#FDFAF4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 12 }}>Logo Downloads</h2>
          <p style={{ textAlign: 'center', color: '#999', fontSize: 13, marginBottom: 32 }}>For use by exhibitors, media partners, and event promoters</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {logos.map(l => (
              <div key={l.label} className="card-hover" style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
                <div style={{ height: 100, background: l.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: l.text }}>
                  <div style={{ fontSize: 28 }}>🥛</div>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 14 }}>GODWA</div>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 10, letterSpacing: '0.15em', opacity: 0.7 }}>EXPO</div>
                </div>
                <div style={{ padding: 16, textAlign: 'center' }}>
                  <h3 style={{ fontWeight: 700, color: '#1A3A5C', fontSize: 13, marginBottom: 10 }}>{l.label}</h3>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                    {['PDF', 'PNG'].map(fmt => (
                      <button key={fmt} className="btn-gold" style={{ padding: '6px 14px', borderRadius: 999, fontSize: 11, border: 'none', cursor: 'pointer', gap: 4 }}>
                        <Download size={10} /> {fmt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', marginTop: 20 }}>Please use Godwa logos only for official event promotion.</p>
        </div>
      </section>

      <section style={{ padding: '48px 0', background: '#1A3A5C', textAlign: 'center' }}>
        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 8 }}>Need Additional Materials?</h3>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 20 }}>Contact us for high-resolution assets or custom documentation.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:dairyexpo@gmail.com" className="btn-gold" style={{ padding: '12px 24px', borderRadius: 999, fontSize: 14, textDecoration: 'none' }}>Email Us</a>
          <a href="tel:+919850007425" style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.35)', color: 'white', padding: '12px 24px', borderRadius: 999, fontSize: 14, fontFamily: 'Oswald, sans-serif', fontWeight: 700, textDecoration: 'none' }}>Call Us</a>
        </div>
      </section>
    </div>
  )
}
