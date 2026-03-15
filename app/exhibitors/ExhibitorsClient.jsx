'use client'
import { ExternalLink } from 'lucide-react'

const prefabRates = [
  { type: 'One Side Open', rate: 'Rs 12,000 /- per sq.m.' },
  { type: '2 Side Open Stall', rate: 'Rs 13,000 /- per sq.m.' },
  { type: '3 Side Open Stall', rate: 'Rs 14,000 /- per sq.m.' },
]

const facilitiesData = [
  { sqm: '9 sq.m.', items: '1 System Table, 2 Director Chair, 5 AMP Electricity, 3 Spotlight, Dustbin, 2 Exhibitor Pass' },
  { sqm: '18 sq.m.', items: '2 System Table, 4 Director Chair, 5 AMP Electricity, 6 Spotlight, Dustbin, 4 Exhibitor Pass' },
  { sqm: '36 sq.m.', items: '(Multiple of 9 Sq.m.)' },
]

const printAgencies = [
  { name: 'Anil Tukaram Kadam / Kalaram', phone: '8446679606', email: 'Kadamanil354@gmail.com' },
  { name: 'Snehadeep Graphics', contact: 'Sandeep Padte', phone: '9420177945', email: 'snehadeepgraphics@gmail.com' },
]

const designAgencies = [
  { name: 'Anil Tukaram Kadam / Kalaram', phone: '8446679606', email: 'Kadamanil354@gmail.com' },
  { name: 'JD Production & Events', phone: '7738849777', email: 'info@jdproductionandevents' },
]

const bannerSizes = [
  {
    num: '1', title: 'Stall 3×3 m – Flex Sizes',
    specs: ['Back wall flex: 10×8 ft ht', 'Side wall flex: 10×8 ft ht', 'Front Fascia: 10 ft width × 10 inch ht'],
  },
  {
    num: '2', title: 'Wooden Framing Size – 3×3 m Stall',
    specs: ['Back wall frame: 9.7 × 7.11 ft', 'Side walls: 9.7 × 7.11 ft'],
  },
  {
    num: '3', title: '3×2 m Stall – Flex Sizes',
    specs: ['Back wall: 10×8 ft', 'Side wall: 6.5×8 ft', 'Framing sizes adjust as per design and material used'],
  },
  {
    num: '4', title: '4×2 m Stall',
    specs: ['Back wall: 13×8 ft', 'Side wall: 6.5×8 ft'],
  },
  {
    num: '5', title: 'Table Branding',
    specs: ['Front ply: 38 in × 26 in', 'Framing sizes: vendors to adjust on site during installation'],
  },
]

const REGISTER_URL = 'https://forms.gle/XbNZWHxgzrxKC4YW8'

const thCell = { padding: '12px 16px', fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13, color: '#1A3A5C', textAlign: 'left', borderBottom: '2px solid #dde4ec', letterSpacing: '0.04em', textTransform: 'uppercase', background: '#f0f4f8' }
const tdCell = { padding: '12px 16px', fontSize: 14, color: '#444', borderBottom: '1px solid #eef1f5', verticalAlign: 'top' }

export default function ExhibitorsClient() {
  return (
    <div style={{ paddingTop: 90 }}>

      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Exhibitors – Participation Fees</p>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.2rem)', fontWeight: 900, color: 'white', marginBottom: 24 }}>Book Your Space Now!</h1>
        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '14px 36px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 30px rgba(0,0,0,0.25)' }}>
          Register as Exhibitor Now <ExternalLink size={17} />
        </a>
      </section>

      {/* Main Content */}
      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 40 }}>

          {/* Stall Registration Charges heading */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 28, fontWeight: 700, color: '#1A3A5C', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Stall Registration Charges</h2>
          </div>

          {/* A. Pre-fabricated */}
          <div style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.07)', border: '1px solid #e8eef5' }}>
            <div style={{ background: '#1A3A5C', padding: '14px 24px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, color: 'white', letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>A. Pre-Fabricated Stall — Rate per Square Meter</h3>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thCell}>Stall Type</th>
                  <th style={{ ...thCell, textAlign: 'right' }}>Rate</th>
                </tr>
              </thead>
              <tbody>
                {prefabRates.map((r, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fafcff' : 'white' }}>
                    <td style={tdCell}>{r.type}</td>
                    <td style={{ ...tdCell, textAlign: 'right', fontWeight: 700, color: '#1A3A5C', fontSize: 15 }}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* B. Raw Bare Space */}
          <div style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.07)', border: '1px solid #e8eef5' }}>
            <div style={{ background: '#0D7377', padding: '14px 24px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, color: 'white', letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>B. Raw Bare Space Inside Hall — Rate per Sq. Meter</h3>
            </div>
            <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 14, color: '#555', fontWeight: 600 }}>Rate —</span>
              <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 20, fontWeight: 700, color: '#0D7377' }}>Rs 12,000 /- per sq.m.</span>
            </div>
          </div>

          {/* Facilities Table */}
          <div style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.07)', border: '1px solid #e8eef5' }}>
            <div style={{ background: '#2D6A4F', padding: '14px 24px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, color: 'white', letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>Facilities Provided by Godwa Team</h3>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ ...thCell, width: 140 }}>Min Square Meter</th>
                  <th style={thCell}>Facilities</th>
                </tr>
              </thead>
              <tbody>
                {facilitiesData.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fafcff' : 'white' }}>
                    <td style={{ ...tdCell, fontWeight: 700, color: '#1A3A5C', fontSize: 15 }}>{row.sqm}</td>
                    <td style={tdCell}>{row.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* B. Agencies for Flex and Banner Printing */}
          <div style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.07)', border: '1px solid #e8eef5' }}>
            <div style={{ background: '#1A3A5C', padding: '14px 24px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, color: 'white', letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>B. Agencies for Flex and Banner Printing</h3>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thCell}>Agency Name</th>
                  <th style={thCell}>Contact Person & Cell No.</th>
                  <th style={thCell}>Email</th>
                </tr>
              </thead>
              <tbody>
                {printAgencies.map((a, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fafcff' : 'white' }}>
                    <td style={{ ...tdCell, fontWeight: 600, color: '#1A3A5C' }}>{a.name}</td>
                    <td style={tdCell}>{a.contact ? `${a.contact} – ` : ''}{a.phone}</td>
                    <td style={tdCell}>{a.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* C. Agencies for Stall Design */}
          <div style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.07)', border: '1px solid #e8eef5' }}>
            <div style={{ background: '#B8860B', padding: '14px 24px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, color: 'white', letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>C. Agencies for Stall Design</h3>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thCell}>Agency Name</th>
                  <th style={thCell}>Contact Person & Cell No.</th>
                  <th style={thCell}>Email</th>
                </tr>
              </thead>
              <tbody>
                {designAgencies.map((a, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fafcff' : 'white' }}>
                    <td style={{ ...tdCell, fontWeight: 600, color: '#1A3A5C' }}>{a.name}</td>
                    <td style={tdCell}>{a.phone}</td>
                    <td style={tdCell}>{a.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stall Diagram */}
          <div style={{ background: 'white', borderRadius: 18, padding: 24, boxShadow: '0 4px 18px rgba(0,0,0,0.07)', border: '1px solid #e8eef5', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Standard Stall Layout & Dimensions (For Reference)</div>
            <img src="/Images/stall-diagram.png" alt="Stall Layout Diagram" style={{ maxWidth: '100%', borderRadius: 10, display: 'block', margin: '0 auto' }} />
            <p style={{ color: '#aaa', fontSize: 11, marginTop: 12, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>The objects shown in the image are for reference purposes only. Actual products may vary.</p>
          </div>

          {/* Banner Sizes */}
          <div style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 18px rgba(0,0,0,0.07)', border: '1px solid #e8eef5' }}>
            <div style={{ background: '#1A3A5C', padding: '14px 24px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, color: 'white', letterSpacing: '0.05em', margin: 0, textTransform: 'uppercase' }}>Banner Sizes for Exhibitors Information</h3>
            </div>
            <div style={{ padding: '24px' }}>
              {bannerSizes.map((b) => (
                <div key={b.num} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #f0f0f0' }}>
                  <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, color: '#1A3A5C', marginBottom: 8 }}>{b.num}. {b.title}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {b.specs.map((s, i) => (
                      <li key={i} style={{ fontSize: 14, color: '#555', marginBottom: 4, display: 'flex', gap: 8 }}>
                        <span style={{ color: '#0D7377' }}>›</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Important Note */}
              <div style={{ background: '#fff3cd', borderRadius: 12, padding: '16px 20px', borderLeft: '4px solid #D4A017', marginTop: 8 }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13, color: '#856404', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Note</div>
                <p style={{ fontSize: 13, color: '#555', lineHeight: 1.7, margin: 0 }}>
                  Please request all your vendors to <strong>not use flex bond or any glue</strong> on any panel or aluminium section.
                  Vinyl prints pasting is <strong>strictly not allowed</strong> on panels. Two side tape is <strong>not allowed</strong>.<br />
                  ✓ <strong>Do</strong> — Use cello tape for branding &nbsp;|&nbsp; ✗ <strong>Don't</strong> — Vinyl prints pasting, Two side tape.<br />
                  If used: <strong>Rs. 1,000/- extra charges</strong> will apply.
                </p>
              </div>
            </div>
          </div>

          {/* Register CTA */}
          <div style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', borderRadius: 18, padding: '40px 24px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: 'white', marginBottom: 8 }}>Register as Exhibitor Now!</h3>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '14px 40px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, letterSpacing: '0.06em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 8px 30px rgba(0,0,0,0.3)', marginTop: 8 }}>
              Fill Registration Form <ExternalLink size={17} />
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
