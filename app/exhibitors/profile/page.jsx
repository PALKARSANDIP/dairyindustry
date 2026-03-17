import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Exhibitors Profile | Godwa Dairy Expo 2026',
  description: '13th Biggest Platform for showcasing complete Dairy, Bakery, Feed and Food Processing Solutions. See who exhibits at Godwa Dairy Expo 2026, Pune.',
  path: '/exhibitors/profile',
})

const col1 = [
  'Dairy Technology & Equipment Manufacturer / Exporters',
  'Dairy Products Manufacturer / Exporter / Traders',
  'Ghee Making Machines, Mixer, Feeders & Grinders',
  'Packaging Machinery, Equipment & Materials',
  'Feed Manufacturing Machinery',
  'Feed Storage System',
  'Feeds, Feeding & Feed Additives-Vitamins',
  'Milk Storage Tanks / Silos Mfrs.',
  'Butter / Cheese / Cone Machines',
  'Animal Farming Consultants',
  'Veterinary Products',
  'Milk & Food Process Industry Owners',
  'Cattle / Dairy Farmers',
  'Dealers, Distributors of Dairy Industry',
  'Cooling, Fermentation & Freezing Systems',
  'Fermented Milk, Ice Cream & Milk Powder',
  'Butter, Butter Oil, Cheese, Condensed Milk, Food Lab & Quality Testing Equipment',
  'Value Added Milk Products',
  'Animal Health Products',
  'SOFTWARE & IT Solutions, IT, ERP & POS Systems Suppliers',
  'Cold Chain / Cold Storage / Refrigerated Van',
  'Magazines / News Paper / Books / Directories',
  'New Dairy & Agro Entrepreneurs',
  'Ministries / Export Promotion Bodies / Department',
  'Educational Institutes / College / Universities etc.',
  'Animal Husbandry Products',
  'Food & Beverage Service Equipment',
  'Bakery Ingredients, Chocolates & Accessories',
]

const col2 = [
  'Commercial Bakery Machinery',
  'Gourmet Foods (Seafood, Meat, Poultry & Cheese)',
  'Restaurant Software & Technology',
  'Architecture And Interiors',
  'Housekeeping',
  'Automation Technology',
  'Ice Cream Machinery Manufacturers',
  'Ice Cream Packaging Machinery & Materials Mfrs.',
  'Dairy Product Suppliers',
  'Ice Cream Ingredients, Stabilisers & Raw Materials',
  'Ice Cream Sticks Suppliers',
  'Refrigeration & Cold Room Manufacturers',
  'Cold Chain Suppliers',
  'Logistics',
  'Ice Cream Cone Manufacturers',
  'Ice Cream Consultants',
  'Food Safety & Quality Chocolate Manufacturers',
  'Insurance Providers',
  "Process Equipment's",
  "Retail Fittings & Equipment's",
  "Serving Equipment's",
  'Traders & Stock Suppliers',
  'Feed Production Technology',
  'Commercial Kitchen & Catering Equipment',
  'Boiler Manufacturers',
  'Turbine Manufacturers',
  'Technology and Service Provider',
  'Boiler Component Manufacturers',
  'Heat Exchanger Pressure Vessel',
]

export default function ExhibitorsProfilePage() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C 0%, #D4A017 100%)', padding: '72px 16px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: 'rgba(245,200,66,0.2)', color: '#F5C842', fontFamily: 'Oswald, sans-serif', fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 20px', borderRadius: 999, marginBottom: 18, border: '1px solid rgba(245,200,66,0.35)' }}>
          Godwa Dairy Expo 2026
        </span>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem,6vw,3.8rem)', fontWeight: 900, color: 'white', marginBottom: 16, lineHeight: 1.2 }}>
          Exhibitors Profile
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px,2.5vw,20px)', maxWidth: 700, margin: '0 auto 32px', lineHeight: 1.75 }}>
          13<sup style={{ fontSize: '0.65em' }}>th</sup> Biggest Platform for showcasing the complete Dairy, Bakery, Feed and Food Processing Solutions
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer"
            style={{ background: '#F5C842', color: '#1A3A5C', padding: '13px 28px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Exhibitor Registration <ExternalLink size={16} />
          </a>
          <a href="/exhibitors/why-exhibit"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '13px 28px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(255,255,255,0.35)' }}>
            Why Exhibit? <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1A3A5C', padding: '44px 16px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, textAlign: 'center' }}>
          {[{ v: '150+', l: 'Exhibitors' }, { v: '15,000+', l: 'Visitors' }, { v: '3', l: 'Days' }, { v: '13th', l: 'Edition' }].map(({ v, l }) => (
            <div key={l}>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px,5vw,44px)', fontWeight: 900, color: '#F5C842' }}>{v}</div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exhibitor Categories */}
      <section style={{ padding: '72px 16px', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ color: '#D4A017', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 15 }}>Who Exhibits</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(26px,4vw,40px)', fontWeight: 700, color: '#1A3A5C', marginTop: 10 }}>Exhibitor Categories</h2>
            <p style={{ color: '#666', fontSize: 17, maxWidth: 680, margin: '14px auto 0', lineHeight: 1.8 }}>
              Companies and professionals from across the dairy, bakery, feed and food processing ecosystem participate in Godwa Dairy Expo every year.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 14 }}>
            {[...col1, ...col2].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'white', borderRadius: 14, padding: '14px 18px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', border: '1px solid #F0E8D8' }}>
                <CheckCircle size={17} style={{ color: '#D4A017', flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: '#444', fontSize: 16, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 16px', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px,4vw,36px)', fontWeight: 700, color: 'white', marginBottom: 14, lineHeight: 1.4 }}>
            Be Part of India's <span style={{ color: '#F5C842' }}>Biggest Dairy Expo</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, marginBottom: 32, lineHeight: 1.7 }}>
            Book your exhibition space and showcase your products to 15,000+ industry professionals — 5–7 December 2026, Pune.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer"
              style={{ background: '#F5C842', color: '#1A3A5C', padding: '16px 40px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 6px 24px rgba(245,200,66,0.3)' }}>
              Book Your Space <ExternalLink size={18} />
            </a>
            <a href="/exhibitors/why-exhibit"
              style={{ background: 'transparent', color: 'white', padding: '16px 36px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, border: '2px solid rgba(255,255,255,0.4)' }}>
              Why Exhibit? <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
