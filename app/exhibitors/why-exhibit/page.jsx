import { CheckCircle, ExternalLink, ArrowRight, Download } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Why Exhibit | Godwa Dairy Expo 2026',
  description: 'Showcase your business at the 13th Biggest Dairy Industry Exhibition. Connect with 15,000+ visitors, generate leads and grow your brand at Godwa Dairy Expo 2026, Pune.',
  path: '/exhibitors/why-exhibit',
})

const reasons = [
  'You will have the chance to connect with the domestic and global market.',
  'Discover new markets, business leads, prospective distributors, dealers, agents & associates.',
  'An ideal platform for assessing the market to establish and extend your own presence.',
  'Showcase innovative products, solutions and contemporary technologies.',
  'Boost brand image & extend visibility to new heights.',
  'Explore new business avenues and finalise business deals.',
  'A perfect launch for new products and technologies.',
  'An appropriate platform to strengthen and build your brand image.',
  'A perfect meeting place for prospective exhibitors to meet prospective end-users.',
  'Meet decision-makers & enhance your business through networking to gain & first-hand market insights.',
  'Unlock new opportunities by connecting with buyers from across India, building a strong network, and gaining a competitive edge in emerging markets.',
]

const stats = [
  { v: '15,000+', l: 'Visitors' },
  { v: '150+', l: 'Exhibitors' },
  { v: '3', l: 'Days' },
  { v: '13th', l: 'Edition' },
]

const quickLinks = [
  { label: 'Exhibitors Profile', href: '/exhibitors/profile', icon: <ArrowRight size={16} />, style: 'outline' },
  { label: 'Book Your Space', href: 'https://forms.gle/XbNZWHxgzrxKC4YW8', icon: <ExternalLink size={16} />, external: true, style: 'gold' },
  { label: 'Download Brochure', href: '/godwa-brochure-2026.pdf', icon: <Download size={16} />, download: 'Godwa-Dairy-Expo-2026-Brochure.pdf', style: 'outline' },
  { label: 'Download Layout', href: '/godwa-layout-2026.pdf', icon: <Download size={16} />, download: 'Godwa-Dairy-Expo-2026-Layout.pdf', style: 'outline' },
]

export default function WhyExhibitPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C 0%, #D4A017 100%)', padding: '72px 16px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: 'rgba(245,200,66,0.2)', color: '#F5C842', fontFamily: 'Oswald, sans-serif', fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 20px', borderRadius: 999, marginBottom: 18, border: '1px solid rgba(245,200,66,0.35)' }}>
          Why Exhibit?
        </span>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.6rem)', fontWeight: 900, color: 'white', marginBottom: 14, lineHeight: 1.2, maxWidth: 760, margin: '0 auto 14px' }}>
          Showcase Your Business at the 13<sup style={{ fontSize: '0.6em' }}>th</sup> Biggest Dairy Industry Exhibition
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(17px,2.5vw,21px)', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Godwa Dairy Expo 2026 &nbsp;·&nbsp; <strong>5 – 6 – 7 December</strong> &nbsp;·&nbsp; Pune
        </p>

        {/* Quick action links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          {quickLinks.map((ql, i) => (
            ql.external ? (
              <a key={i} href={ql.href} target="_blank" rel="noopener noreferrer"
                style={{ background: '#F5C842', color: '#1A3A5C', padding: '12px 24px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 16px rgba(245,200,66,0.3)' }}>
                {ql.label} {ql.icon}
              </a>
            ) : ql.download ? (
              <a key={i} href={ql.href} download={ql.download}
                style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '12px 24px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(6px)' }}>
                {ql.label} {ql.icon}
              </a>
            ) : (
              <a key={i} href={ql.href}
                style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '12px 24px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(6px)' }}>
                {ql.label} {ql.icon}
              </a>
            )
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1A3A5C', padding: '44px 16px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'center' }}>
          {stats.map(({ v, l }) => (
            <div key={l}>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(30px,5vw,44px)', fontWeight: 900, color: '#F5C842' }}>{v}</div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons + Image */}
      <section style={{ padding: '72px 16px', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ color: '#D4A017', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 15 }}>Reasons to Exhibit</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A3A5C', marginTop: 10 }}>Why to Exhibit</h2>
          </div>

          {/* Two-column: list + image */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 48, alignItems: 'center' }} className="why-exhibit-grid">
            {/* Reasons list */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {reasons.map((r, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'white', borderRadius: 14, padding: '14px 18px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #F0E8D8' }}>
                  <CheckCircle size={18} style={{ color: '#2E7D32', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: '#444', fontSize: 16, lineHeight: 1.65 }}>{r}</span>
                </li>
              ))}
            </ul>

            {/* Image */}
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.15)', position: 'sticky', top: 110 }}>
              <img
                src="/Images/why-exhibit-expo.png"
                alt="Godwa Dairy Expo Exhibition Floor"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 340 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 16px', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: 'white', marginBottom: 14, lineHeight: 1.4 }}>
            Ready to <span style={{ color: '#F5C842' }}>Showcase Your Business?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, marginBottom: 32, lineHeight: 1.7 }}>
            Book your stall today and be part of India's biggest dairy industry event — 5–7 December 2026, Pune.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer"
              style={{ background: '#F5C842', color: '#1A3A5C', padding: '16px 40px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 6px 24px rgba(245,200,66,0.3)' }}>
              Book Your Space <ExternalLink size={18} />
            </a>
            <a href="/exhibitors/profile"
              style={{ background: 'transparent', color: 'white', padding: '16px 36px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, border: '2px solid rgba(255,255,255,0.4)' }}>
              Exhibitors Profile <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .why-exhibit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
