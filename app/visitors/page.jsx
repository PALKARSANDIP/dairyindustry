import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Visitor Registration & Profile',
  description: "Register as a free visitor for Godwa Dairy Expo 2026, Pune. Free entry for dairy farmers, manufacturers, traders, distributors, consultants and all dairy industry professionals.",
  path: '/visitors',
  keywords: ['visitor registration dairy expo', 'dairy expo pune visitor', 'free entry dairy exhibition', 'dairy industry professionals pune'],
})

const breadcrumbSchema = buildBreadcrumbs([
  { name: 'Home', path: '' },
  { name: 'Visitor Registration', path: '/visitors' },
])

const categories = [
  { icon: '🚜', title: 'Farmers & Agri', items: ['Agricultural / Dairy Farmers', 'Agri/Dairy Product Suppliers', 'Farmer Producer Companies', 'NGOs in Dairy & Agri'] },
  { icon: '🏭', title: 'Manufacturers', items: ['Milk Process Plant Owners', 'Ice Cream & Frozen Dessert Mfgrs', 'Food Process Industry Owners', 'Milk by Product Machinery Makers'] },
  { icon: '🐄', title: 'Dairy Industry', items: ['MILK COOLING CENTERS / BMC Owners', 'Milk & Milk Products Manufacturers', 'Dairy Co-operatives Directors', 'Dairy Owners - Private Sector'] },
  { icon: '🩺', title: 'Animal Health', items: ['Animal Health Products', 'Livestock Technology Feeds', 'Feed Additives & Vitamins', 'Veterinary Products', 'Veterinarians'] },
  { icon: '📦', title: 'Packaging & Tech', items: ['Packaging Machinery & Equipment', 'Batch/Date Coding Providers', 'Ink & Spare Part Providers', 'Printing Cylinders & Stereos'] },
  { icon: '🔬', title: 'Lab & Testing', items: ['Dairy & Food Lab Equipment', 'Laboratory Services for Dairy', 'Lab Chemicals & Equipment', 'Glass Wares & Spare Parts'] },
  { icon: '💼', title: 'Traders & Distributors', items: ['Traders / Distributors / Retailers', 'Dairy Food Products Exporters', 'IT Solutions Providers', 'Material Handling Providers'] },
  { icon: '🏛️', title: 'Institutions & Govt', items: ['Educational Institutes & Universities', 'State & Central Govt Departments', 'Policy Makers, Bankers, Insurance', 'Industry Consultants & Professionals'] },
  { icon: '❄️', title: 'Cold Chain & Logistics', items: ['Cold Chain / Cold Storage', 'Refrigerated Van Operators', 'Supply Chain Solution Providers', 'Logistic & Waterproofing Services'] },
]

export default function VisitorsPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #2E7D32)', padding: '72px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 12 }}>Visitor Information</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, maxWidth: 600, margin: '0 auto' }}>A great opportunity for professionals to see cutting-edge technology and the latest dairy, bakery, food processing and feed tech equipment.</p>
      </section>

      {/* Register CTA */}
      <section id="register" style={{ padding: '36px 0', background: '#F5C842' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 700, color: '#1A3A5C' }}>Register as a Visitor -- It's Free!</h2>
            <p style={{ color: 'rgba(26,58,92,0.7)', fontSize: 14, marginTop: 4 }}>Join thousands of professionals at India's premier dairy expo</p>
          </div>
          <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" style={{ background: '#1A3A5C', color: 'white', padding: '14px 28px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.2)', whiteSpace: 'nowrap' }}>
            Register Now <ExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* Visitor Profile */}
      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#D4A017', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Who Visits</span>
            <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 34, fontWeight: 700, color: '#1A3A5C', marginTop: 8 }}>Visitor Profile</h2>
            <p style={{ color: '#666', maxWidth: 700, margin: '16px auto 0', lineHeight: 1.8, fontSize: 14 }}>Participants from across India and the Indian subcontinent visit from various sectors to discover Dairy Machinery, Cold Chain, Packing Machines, Bakery Machineries, Food Additives and much more.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {categories.map(cat => (
              <div key={cat.title} className="card-hover" style={{ background: 'white', borderRadius: 18, padding: 22, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 30 }}>{cat.icon}</span>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 700, color: '#1A3A5C' }}>{cat.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, color: '#666', marginBottom: 6, lineHeight: 1.5 }}>
                      <CheckCircle size={11} style={{ color: '#0D7377', flexShrink: 0, marginTop: 2 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* More categories */}
          <div style={{ background: '#1A3A5C', borderRadius: 20, padding: 28, marginTop: 24 }}>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 16 }}>And Many More Including...</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
              {['Animal Farming Consultants', 'Gen Set Providers', 'Refrigeration Spare Parts', 'Plastic Crates & Packaging', 'Resellers of Dairy Equipment', 'Pouch Packing Contractors', 'New Dairy Entrepreneurs', 'Export Promotion Bodies', 'Equipment Exporters', 'Boiler Solution Providers', 'Waste Disposal Systems', 'Logistic Providers'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                  <span style={{ color: '#F5C842' }}>•</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="dairy-pattern" style={{ padding: '64px 0', background: '#FDFAF4' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px' }}>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 40 }}>Visitor Amenities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[{ icon: '🅿️', title: 'Free Parking', desc: 'Ample free parking at venue for cars and two-wheelers' }, { icon: '☕', title: 'Free Tea Coupon', desc: 'Complimentary beverage coupon for all registered visitors' }, { icon: '🙏', title: 'Maha Prasad', desc: 'Traditional Maha Prasad to all event participants' }].map(v => (
              <div key={v.title} className="card-hover" style={{ background: 'white', borderRadius: 20, padding: 28, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
                <div style={{ fontSize: 44, marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, fontWeight: 700, color: '#1A3A5C', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: '#666', fontSize: 12, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '56px 0', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24 }}>
          {[{ v: '15,000+', l: 'Visitors' }, { v: '150+', l: 'Exhibitors' }, { v: '3', l: 'Days' }, { v: 'Free', l: 'Entry' }].map(({ v, l }) => (
            <div key={l}>
              <div className="stat-glow" style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 900, color: '#F5C842' }}>{v}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 12, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '56px 0', background: '#FFF8EE', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700, color: '#1A3A5C', marginBottom: 10 }}>Ready to Visit?</h2>
          <p style={{ color: '#666', fontSize: 14, marginBottom: 24, lineHeight: 1.7 }}>Register in advance and get your free entry pass. Experience India's biggest dairy expo on 5-7 December 2026, Pune.</p>
          <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '14px 36px', borderRadius: 999, fontSize: 15, textDecoration: 'none', gap: 8, boxShadow: '0 4px 20px rgba(212,160,23,0.4)' }}>
            Register as Visitor <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
