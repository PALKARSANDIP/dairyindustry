'use client'
import { useState } from 'react'
import { CheckCircle, ArrowRight, ExternalLink,ChevronRight } from 'lucide-react'
import Link from 'next/link'

const industries = [
  { id: 'dairy', icon: '🥛', label: 'Dairy', color: '#1A3A5C', bg: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80', desc: 'Dairy Machineries, Cold Chain, Equipment, Fittings, Flavors & Additives' },
  { id: 'bakery', icon: '🍞', label: 'Bakery', color: '#B8860B', bg: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80', desc: 'Bakery Machineries, Baking Ingredients, Packaging Solutions' },
  { id: 'food', icon: '🏭', label: 'Food Processing', color: '#0D7377', bg: '/Images/foof-processing.jpg', desc: 'Processing Equipment, Water Treatment, Material Handling' },
  { id: 'feedtech', icon: '🌾', label: 'Feed Tech', color: '#2E7D32', bg: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', desc: 'Feed Manufacturing, Livestock Technology, Vet Products' },
]

const stalls = [
  { size: 6, tag: 'Starter', color: '#0D7377', facilities: ['2 Chairs', '1 System Table', '3 Spot Lamps', 'Carpet', '1 × 5A Power Point', 'Name on Fascia', 'Dustbin', '2 Food Coupons'] },
  { size: 9, tag: 'Popular ⭐', color: '#1A3A5C', popular: true, facilities: ['2 Chairs', '1 Table', '3 Spot Lamps', 'Carpet', '1 × 5A Power Point', 'Name on Fascia', 'Dustbin', '2 Food Coupons'] },
  { size: 12, tag: 'Business', color: '#B8860B', facilities: ['4 Chairs', '1 Large Table', '5 Spot Lamps', 'Carpet', '2 × 5A Power Points', 'Name on Fascia', 'Dustbin', '4 Food Coupons'] },
  { size: 36, tag: 'Premium', color: '#5C3D2E', facilities: ['Full Shell Scheme', 'Premium Furniture', 'High-watt Lighting', 'Carpet Throughout', 'Multiple Power Points', 'Large Fascia Board', 'Dustbin', '8 Food Coupons'] },
]

const paymentTerms = [
  'Last date for stall booking: 30th September 2026',
  'Bookings after this date will incur a surcharge and are subject to availability',
  '18% GST applicable on all stall fees',
  'Security deposit for designer stall: ₹5,000/-',
  'Deposit refunded within 2 working days after the event',
  'Shell panel height: 2.4 m per panel, width: 1 m per panel',
]

export default function ExhibitorsClient() {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [step, setStep] = useState(1)

  const selectIndustry = (ind) => {
    setSelectedIndustry(ind)
    setStep(2)
    setTimeout(() => document.getElementById('step2')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 8 }}>Exhibitor Participation</h1>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, maxWidth: 600, margin: '0 auto' }}>Showcase your brand to 15,000+ targeted professionals. Follow 3 steps to book your stall.</p>
      </section>

      {/* Progress Bar */}
      <div style={{ position: 'sticky', top: 90, background: 'white', borderBottom: '1px solid #eee', zIndex: 40, padding: '12px 0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          {[{ n: 1, l: 'Select Industry' }, { n: 2, l: 'Choose Stall' }, { n: 3, l: 'Register' }].map((s, i) => (
            <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: step >= s.n ? '#1A3A5C' : '#e5e7eb', color: step >= s.n ? 'white' : '#9ca3af', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, transition: 'all 0.3s' }}>
                {step > s.n ? '✓' : s.n}
              </div>
              <span style={{ fontSize: 13, fontFamily: 'Nunito, sans-serif', fontWeight: 700, color: step >= s.n ? '#1A3A5C' : '#9ca3af' }} className="hidden sm:block">{s.l}</span>
              {i < 2 && <div style={{ width: 40, height: 2, background: step > s.n ? '#1A3A5C' : '#e5e7eb', transition: 'all 0.3s' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Step 1 */}
      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ background: '#1A3A5C', color: 'white', padding: '6px 16px', borderRadius: 999, fontSize: 12, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Step 1</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700, color: '#1A3A5C', marginTop: 12 }}>Choose Your Industry</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {industries.map((ind) => (
              <div key={ind.id} onClick={() => selectIndustry(ind)} style={{ borderRadius: 20, overflow: 'hidden', cursor: 'pointer', boxShadow: selectedIndustry?.id === ind.id ? '0 0 0 4px #F5C842, 0 12px 40px rgba(0,0,0,0.2)' : '0 4px 16px rgba(0,0,0,0.1)', transform: selectedIndustry?.id === ind.id ? 'scale(1.04)' : 'scale(1)', transition: 'all 0.3s', position: 'relative' }}>
                <div style={{ position: 'relative', height: 180 }}>
                  <img src={ind.bg} alt={ind.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${ind.color}f0, ${ind.color}66)` }} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, color: 'white' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: selectedIndustry?.id === ind.id ? 26 : 20, fontWeight: 700, transition: 'font-size 0.3s ease' }}>{ind.label}</h3>
                  <p style={{ fontSize: selectedIndustry?.id === ind.id ? 13 : 11, color: 'rgba(255,255,255,0.85)', marginTop: 4, lineHeight: 1.4, transition: 'font-size 0.3s ease' }}>{ind.desc}</p>
                </div>
                {selectedIndustry?.id === ind.id && (
                  <div style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: '50%', background: '#F5C842', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle size={18} color="#1A3A5C" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2 */}
      {selectedIndustry && (
        <section id="step2" style={{ padding: '64px 0', background: '#FDFAF4' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span style={{ background: '#1A3A5C', color: 'white', padding: '6px 16px', borderRadius: 999, fontSize: 12, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Step 2</span>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: '#1A3A5C', marginTop: 12 }}>
                {selectedIndustry.icon} {selectedIndustry.label} -- Select Stall Size
              </h2>
              <p style={{ color: '#999', fontSize: 13, marginTop: 6 }}>All stalls: prefabricated modular shell scheme · 2.4m panel height</p>
            </div>

            {/* Prefabricated stall image */}
            <div style={{ borderRadius: 20, overflow: 'hidden', marginBottom: 36, boxShadow: '0 8px 32px rgba(0,0,0,0.12)', position: 'relative' }}>
              <img
                src="/Images/stall3.jpeg"
                alt="Prefabricated Stall"
                style={{ width: '100%', height: 300, objectFit: 'fit', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,58,92,0.78) 0%, rgba(26,58,92,0.15) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', top: '50%', left: 36, transform: 'translateY(-50%)' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F5C842', marginBottom: 8 }}>Shell Scheme</div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Prefabricated<br />Modular Stalls</div>
                <div style={{ marginTop: 10, color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>2.4m panel height · Premium finish</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
              {stalls.map((stall) => (
                <div key={stall.size} className="card-hover" style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', border: stall.popular ? `2px solid #F5C842` : '2px solid transparent' }}>
                  {stall.popular && (
                    <div style={{ background: '#F5C842', padding: '6px 0', textAlign: 'center', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', color: '#1A3A5C' }}>MOST POPULAR</div>
                  )}
                  <div style={{ padding: 24 }}>
                    <div style={{ textAlign: 'center', marginBottom: 16 }}>
                      <div style={{ width: 64, height: 64, borderRadius: 16, background: stall.color, color: 'white', fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', boxShadow: `0 4px 16px ${stall.color}66` }}>{stall.size}</div>
                      <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#1A3A5C' }}>{stall.size} sq.m.</div>
                      <span style={{ background: stall.color, color: 'white', padding: '3px 12px', borderRadius: 999, fontSize: 11, fontFamily: 'Oswald, sans-serif', display: 'inline-block', marginTop: 6 }}>{stall.tag}</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: 20 }}>
                      {stall.facilities.map(f => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#555', marginBottom: 6 }}>
                          <CheckCircle size={12} style={{ color: '#0D7377', flexShrink: 0 }} /> {f}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => window.open('https://forms.gle/m1o3G6CDSA3q1Jwv7', '_blank')} className="btn-gold" style={{ width: '100%', padding: '10px 0', borderRadius: 12, fontSize: 13, border: 'none', cursor: 'pointer', justifyContent: 'center', gap: 6 }}>
                      Book {stall.size} sq.m. <ExternalLink size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div style={{ background: 'white', borderRadius: 20, padding: 28, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE', overflowX: 'auto' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 16 }}>Select Your Space Now</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #eee' }}>
                    {['Stall Type', 'Area', 'Category', 'Book'].map(h => (
                      <th key={h} style={{ padding: '10px 12px', textAlign: 'center', fontFamily: 'Oswald, sans-serif', color: '#1A3A5C', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stalls.map(s => (
                    <tr key={s.size} style={{ borderBottom: '1px solid #f5f5f5' }}>
                      <td style={{ padding: '12px', textAlign: 'center', fontWeight: 700, color: '#1A3A5C' }}>{s.popular && '⭐ '}{s.size} sq.m.</td>
                      <td style={{ padding: '12px', textAlign: 'center', color: '#555' }}>{s.size} sq. meters</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <span style={{ background: s.color, color: 'white', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontFamily: 'Oswald, sans-serif' }}>{s.tag.replace(' ⭐', '')}</span>
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <button onClick={() => window.open('https://forms.gle/m1o3G6CDSA3q1Jwv7', '_blank')} className="btn-blue" style={{ padding: '6px 14px', borderRadius: 999, fontSize: 11, border: 'none', cursor: 'pointer', gap: 4 }}>
                          Register <ArrowRight size={11} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ textAlign: 'center', fontSize: 11, color: '#bbb', marginTop: 12 }}>* Exact pricing shared via registration form. 18% GST applicable.</p>
            </div>
          </div>
        </section>
      )}

      {/* Step 3 CTA */}
      {selectedIndustry && (
        <section style={{ padding: '56px 0', background: 'linear-gradient(135deg, #F5C842, #D4A017)', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 16px' }}>
            <span style={{ background: '#1A3A5C', color: 'white', padding: '6px 16px', borderRadius: 999, fontSize: 12, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Step 3</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: '#1A3A5C', marginTop: 12, marginBottom: 6 }}>Complete Your Registration</h2>
            <p style={{ color: 'rgba(26,58,92,0.7)', marginBottom: 24, fontSize: 15 }}>
              Selected: <strong>{selectedIndustry.icon} {selectedIndustry.label}</strong> -- click below to fill the Google Form
            </p>
            <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" style={{ background: '#1A3A5C', color: 'white', padding: '16px 40px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 30px rgba(0,0,0,0.2)', transition: 'all 0.3s' }}>
              Fill Exhibitor Registration Form <ExternalLink size={17} />
            </a>
          </div>
        </section>
      )}

      {/* Payment Terms */}
      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 32 }}>Payment & Booking Terms</h2>
          <div style={{ background: 'white', borderRadius: 20, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
            {paymentTerms.map((term, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: i < paymentTerms.length - 1 ? 20 : 0, paddingBottom: i < paymentTerms.length - 1 ? 20 : 0, borderBottom: i < paymentTerms.length - 1 ? '1px solid #f5f5f5' : 'none' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(245,200,66,0.25)', color: '#1A3A5C', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                <span style={{ color: '#555', fontSize: 14, lineHeight: 1.6 }}>{term}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#F5FAF7' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Event Layout</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 700, color: '#2D6A4F', margin: '8px 0 16px' }}>Exhibition Floor Plan</h2>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
              Spread over 2,000 sq meters with premium zoning across all four industry sectors. Choose from prefabricated and designer stalls.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28 }}>
              {['Stall sizes: 6, 9, 12 & 36 sq meters', 'Premium shell scheme with fascia boards', 'Designated zones per industry', 'Power & lighting in all packages'].map((t) => (
                <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, fontSize: 13, color: '#555' }}>
                  <CheckCircle size={15} style={{ color: '#40916C', flexShrink: 0 }} /> {t}
                </li>
              ))}
            </ul>
            <Link href="/exhibitors" className="btn-blue" style={{ padding: '12px 28px', borderRadius: 999, fontSize: 14, gap: 8, textDecoration: 'none' }}>
              View Participation Fees <ChevronRight size={15} />
            </Link>
          </div>
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', aspectRatio: '16/9', background: '#1A3A5C' }}>
            <iframe
              src="https://www.youtube.com/embed/BZ02_j6PbFI"
              title="Godwa Expo Highlights"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '56px 0', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24 }}>
          {[{ v: '15,000+', l: 'Visitors' }, { v: '150+', l: 'Exhibitors' }, { v: '2,000', l: 'Sq Meter' }, { v: '3', l: 'Days' }].map(({ v, l }) => (
            <div key={l}>
              <div className="stat-glow" style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 900, color: '#F5C842' }}>{v}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 12, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
