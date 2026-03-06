import Link from 'next/link'
import { Award } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'About Godwa Dairy Expo',
  description: "Learn about Godwa Dairy Industry Expo - India's 13th Premier Dairy, Bakery, Food Processing & Feed Tech Exhibition organized by Godwa Institute, Pune since 2012.",
  path: '/about',
  keywords: ['about godwa expo', 'godwa institute pune', 'dairy expo history', 'godwa prakashan'],
})

const milestones = [
  { year: '2012', label: '1st Edition', desc: 'Godwa Dairy Expo launched in Pune with 50+ exhibitors' },
  { year: '2016', label: '5th Edition', desc: 'Expanded to include Bakery and Food Processing sectors' },
  { year: '2019', label: '8th Edition', desc: 'Crossed 10,000 visitor milestone for the first time' },
  { year: '2022', label: '11th Edition', desc: 'Introduced Feed Tech sector and Cold Chain Expo' },
  { year: '2024', label: '12th Edition', desc: 'Record 15,000+ visitors across 3 days' },
  { year: '2026', label: '13th Edition', desc: "India's Premier Dairy Expo - December 5, 6 and 7" },
]

const values = [
  { icon: 'Mission', emoji: 'Target', desc: 'To create the most targeted B2B platform connecting dairy and food industry professionals across India.' },
  { icon: 'Vision', emoji: 'Eye', desc: 'To become South Asia\'s premier dairy and food technology exposition by 2030.' },
  { icon: 'Values', emoji: 'Diamond', desc: 'Integrity, Innovation, Industry Focus, and creating lasting business value for every participant.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 8 }}>About Godwa Expo</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, maxWidth: 600, margin: '0 auto' }}>13 years of connecting India's dairy and food industry professionals.</p>
      </section>

      <section style={{ padding: '80px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 34, fontWeight: 700, color: '#1A3A5C', marginBottom: 20 }}>Godwa Dairy Industry Expo</h2>
            <div style={{ lineHeight: 1.8, color: '#555', fontSize: 15 }}>
              <p style={{ marginBottom: 16 }}><strong style={{ color: '#1A3A5C' }}>Godwa Dairy Industry Expo Pune</strong> is presented by Godwa Institute - India's 13th edition of the premier Dairy, Bakery, Food Processing and Feed Tech Industry Expo.</p>
              <p style={{ marginBottom: 16 }}>This Expo is the biggest platform and showcase for Dairy Machinery, Ice-Cream, Mithai, Dairy Fittings, Gen Sets, Cold Chain, Boiler, Filling-Sealing-Packing Machines, Water Treatment, Packaging Material, Food Additives, and Material Handling.</p>
              <p style={{ marginBottom: 16 }}>The increasing demand for quality milk and milk products in India makes it an attractive investment opportunity. Our exhibition displays a complete value addition chain across the entire dairy industry.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {['https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80','https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=500&q=80','https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80','https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80'].map((src, i) => (
              <img key={i} src={src} alt={`Godwa Expo past edition ${i+1}`} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 14, boxShadow: '0 4px 16px rgba(0,0,0,0.1)', marginTop: i%2===1 ? 24 : 0 }} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#1A3A5C' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24, textAlign: 'center' }}>
          {[{ v: '13th', l: 'Edition 2026' },{ v: '15,000+', l: 'Visitors' },{ v: '150+', l: 'Exhibitors' },{ v: '2000', l: 'Sq Meter' }].map(({ v, l }) => (
            <div key={l}>
              <div className="stat-glow" style={{ fontFamily: '"Playfair Display", serif', fontSize: 38, fontWeight: 900, color: '#F5C842' }}>{v}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 12, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="dairy-pattern" style={{ padding: '80px 0', background: '#FDFAF4' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 48 }}>Our Purpose</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { t: 'Mission', e: '🎯', d: 'To create the most targeted B2B platform connecting dairy and food industry professionals across India.' },
              { t: 'Vision', e: '👁️', d: 'To become South Asia\'s premier dairy and food technology exposition by 2030.' },
              { t: 'Values', e: '💎', d: 'Integrity, Innovation, Industry Focus, and creating lasting business value for every participant.' },
            ].map(v => (
              <div key={v.t} className="card-hover" style={{ background: 'white', borderRadius: 20, padding: 32, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{v.e}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#1A3A5C', marginBottom: 12 }}>{v.t}</h3>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section style={{ padding: '80px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 48 }}>Our Journey</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {milestones.map((m) => (
              <div key={m.year} className="card-hover" style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(245,200,66,0.4)' }}>
                  <Award size={22} color="#1A3A5C" />
                </div>
                <div>
                  <div style={{ color: '#D4A017', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18 }}>{m.year}</div>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, fontWeight: 700, color: '#1A3A5C' }}>{m.label}</div>
                  <p style={{ color: '#666', fontSize: 13, marginTop: 4 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section style={{ padding: '64px 0', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: 'white', marginBottom: 20 }}>Presented By</h2>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: 40, border: '1px solid rgba(255,255,255,0.15)' }}>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, fontWeight: 700, color: '#F5C842', marginBottom: 12 }}>Godwa Prakashan Pvt Ltd</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: 500, margin: '0 auto 24px', fontSize: 15 }}>A trusted name in dairy and food industry events since 2012. Connecting manufacturers, suppliers, buyers and professionals across India.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-gold" style={{ padding: '12px 24px', borderRadius: 999, fontSize: 14, textDecoration: 'none' }}>Contact Us</Link>
              <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)', color: 'white', padding: '12px 24px', borderRadius: 999, fontSize: 14, fontFamily: 'Oswald, sans-serif', fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>Book Your Stall</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
