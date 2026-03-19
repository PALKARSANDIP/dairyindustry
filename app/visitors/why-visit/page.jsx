import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Why Visit | Godwa Dairy Expo 2026',
  description: 'Discover why you should visit Godwa Dairy Expo 2026, Pune. Connect with industry leaders, explore cutting-edge dairy technology and expand your business network.',
  path: '/visitors/why-visit',
})

const reasons = [
  {
    icon: '🔬',
    title: 'Discover Latest Machinery & Technology',
    points: [
      'Discover new machines for Milk Processing, Packaging, Cold Chain, Genset, Printing, Batch Date Coding, Valves and Fittings, Ingredients and Additives',
      'Explore innovations in dairy, bakery, feed and food processing equipment',
    ],
  },
  {
    icon: '🤝',
    title: 'Meet Industry Experts',
    points: [
      'Connect with Dairy Machinery Equipment Manufacturers and Raw Material Suppliers',
      'Build new partnerships and business opportunities',
    ],
  },
  {
    icon: '💼',
    title: 'B2B Networking Opportunities',
    points: [
      'Meet serious buyers and suppliers under one roof',
      'Ideal for generating leads and expanding business contacts',
    ],
  },
  {
    icon: '🏆',
    title: 'Biggest Industry Platform',
    points: [
      'Around 15,000+ visitors and 150+ exhibitors participate',
      'One of the biggest dairy industry events in India',
    ],
  },
  {
    icon: '📈',
    title: 'Business Growth Opportunities',
    points: [
      'Compare suppliers, discover new products, and find solutions to improve your dairy business',
    ],
  },
]

const stats = [
  { v: '15,000+', l: 'Visitors' },
  { v: '150+', l: 'Exhibitors' },
  { v: '3', l: 'Days' },
  { v: '13th', l: 'Edition' },
]

export default function WhyVisitPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero */}


      <section style={{ background: 'linear-gradient(135deg, #1A3A5C 0%, #2E7D32 100%)', padding: '72px 16px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: 'rgba(245,200,66,0.2)', color: '#F5C842', fontFamily: 'Oswald, sans-serif', fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 999, marginBottom: 16, border: '1px solid rgba(245,200,66,0.3)' }}>
          13th Biggest Dairy & Allied Machinery Exhibition
        </span>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem,6vw,3.8rem)', fontWeight: 900, color: 'white', marginBottom: 16, lineHeight: 1.2 }}>
          Why Visit?
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px,2.5vw,20px)', maxWidth: 640, margin: '0 auto 28px', lineHeight: 1.7 }}>
          A showcase of Dairy, Bakery, Food & Feed Processing industries, featuring allied machinery, equipment and services.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <a href="/visitors" style={{ background: 'white', color: '#1A3A5C', padding: '12px 26px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Visitor Profile <ArrowRight size={16} />
          </a>
          <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '12px 26px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Register Free <ExternalLink size={16} />
          </a>
        </div>
      </section>


      {/* 2025 Photo Gallery Placeholder */}
      <section style={{ padding: '64px 16px', background: '#FDFAF4' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {['6Y9A0097.JPG', '6Y9A0344.JPG', '6Y9A9884.JPG'].map((filename, i) => (
              <div key={i} style={{ borderRadius: 16, overflow: 'hidden', background: '#E8F0EB', aspectRatio: '4/3', position: 'relative' }}>
                <img
                  src={`/Images/${filename}`}
                  alt={`Godwa Dairy Expo 2025 - Photo ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event date strip */}
      <section style={{ background: '#F5C842', padding: '18px 16px', textAlign: 'center' }}>
        <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(16px,3vw,22px)', fontWeight: 700, color: '#1A3A5C', margin: 0 }}>
          Godwa Dairy Expo 2026 &nbsp;|&nbsp; <strong>5 – 6 – 7 December</strong> &nbsp;|&nbsp; Pune
        </p>
      </section>


      {/* Stats */}
      <section style={{ background: '#1A3A5C', padding: '48px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24 }}>
          {stats.map(({ v, l }) => (
            <div key={l}>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px,5vw,42px)', fontWeight: 900, color: '#F5C842' }}>{v}</div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons */}
      <section style={{ padding: '72px 16px', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ color: '#D4A017', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14 }}>Top Reasons</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(26px,4vw,38px)', fontWeight: 700, color: '#1A3A5C', marginTop: 8 }}>Why You Should Visit</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {reasons.map((r, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 20, padding: '28px 26px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #F0E8D8', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 36, lineHeight: 1 }}>{r.icon}</span>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(17px,2.5vw,20px)', fontWeight: 700, color: '#1A3A5C', margin: 0, lineHeight: 1.3 }}>{r.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {r.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#555', fontSize: 15, lineHeight: 1.65 }}>
                      <CheckCircle size={16} style={{ color: '#2E7D32', flexShrink: 0, marginTop: 3 }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Closing CTA */}
      <section style={{ padding: '64px 16px', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px,4vw,34px)', fontWeight: 700, color: 'white', marginBottom: 16, lineHeight: 1.4 }}>
            Godwa Dairy Expo is the best place to <span style={{ color: '#F5C842' }}>discover new dairy technology</span>, network with industry professionals, generate business leads, and learn about the latest trends.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 32, lineHeight: 1.7 }}>
            Join us at Pune for the dairy, bakery, feed and food processing sector's biggest event.
          </p>
          <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '16px 40px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 6px 24px rgba(245,200,66,0.35)' }}>
            Register as Visitor — It's Free! <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  )
}
