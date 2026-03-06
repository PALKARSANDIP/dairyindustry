import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { CheckCircle } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Exhibition Services - Hotel, Printing & More',
  description: "Godwa Dairy Expo 2026 services: hotel accommodation near Karvenagar Pune, flex and banner printing, designer stalls, volunteer coordination, free parking.",
  path: '/services',
  keywords: ['dairy expo services pune', 'exhibition hotel accommodation', 'flex printing expo', 'designer stall dairy expo'],
})

const breadcrumbSchema = buildBreadcrumbs([
  { name: 'Home', path: '' },
  { name: 'Services', path: '/services' },
])

const services = [
  { icon: '📦', title: 'Extra Material List', desc: 'Additional furniture, lighting, display shelves, tables and exhibition materials available on request.', items: ['Extra tables and chairs', 'Additional spot lamps', 'Display shelves & racks', 'Power extension boards', 'Lockable storage units'], color: '#1A3A5C' },
  { icon: '🏨', title: 'Hotel Accommodation', desc: 'Comfortable stay options near Karvenagar, Pune for out-of-city exhibitors and visitors.', items: ['Rooms near venue at Karvenagar', 'Budget to premium options', 'Group booking discounts', 'Easy transport to venue', 'Advance booking recommended'], color: '#0D7377' },
  { icon: '🖨️', title: 'Flex & Banner Printing', desc: 'Professional printing services for all stall branding. Banners, flex boards, standees at venue.', items: ['Flex board printing', 'Roll-up standees', 'Backdrop printing', 'Name board / fascia', 'Same-day services available'], color: '#D4A017' },
  { icon: '🤝', title: 'Volunteer Coordination', desc: 'Trained volunteer staff to assist exhibitors and visitors for seamless coordination throughout the event.', items: ['Dedicated floor coordinators', 'Guide visitors to stalls', 'Multilingual volunteers', 'Event day support', '3-day full coverage'], color: '#4CAF50' },
  { icon: '🎨', title: 'Designer Stall', desc: 'Premium custom-designed stalls for brands wanting a distinctive presence. ₹5,000 security deposit.', items: ['Custom design consultation', 'Premium materials', 'Branded graphics & signage', 'Height extension options', '₹5,000 refundable deposit'], color: '#5C3D2E' },
  { icon: '🚗', title: 'Free Parking', desc: 'Ample free parking at venue for all exhibitors and visitors. Separate car and two-wheeler zones.', items: ['Free car parking', 'Two-wheeler parking', 'Dedicated exhibitor zone', 'Security monitored', 'Easy main road access'], color: '#7B1FA2' },
]

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 8 }}>Services</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16 }}>Everything you need for a successful exhibition experience</p>
      </section>

      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {services.map(svc => (
            <div key={svc.title} className="card-hover" style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', border: '1px solid #FFF8EE' }}>
              <div style={{ height: 5, background: svc.color }} />
              <div style={{ padding: 24 }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{svc.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: '#1A3A5C', marginBottom: 8 }}>{svc.title}</h3>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{svc.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {svc.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#666', marginBottom: 6 }}>
                      <CheckCircle size={12} style={{ color: svc.color, flexShrink: 0 }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coordinator */}
      <section style={{ padding: '64px 0', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: 'white', marginBottom: 6 }}>Service Coordinator</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 24, fontSize: 14 }}>For any service enquiry or stall customisation</p>
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: 36, border: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>📞</div>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 24, fontWeight: 700, color: '#F5C842', marginBottom: 4 }}>Sumit Dorge</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.08em', marginBottom: 20 }}>Volunteer & Services Coordinator</p>
            <a href="tel:+918888282885" className="btn-gold" style={{ padding: '12px 32px', borderRadius: 999, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              +91 88882 82885
            </a>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 16, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em' }}>Available during business hours and on all event days</p>
          </div>
        </div>
      </section>

      {/* Visitor services */}
      <section style={{ padding: '64px 0', background: '#FDFAF4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontWeight: 700, color: '#1A3A5C', textAlign: 'center', marginBottom: 40 }}>Free Visitor Amenities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[{ icon: '🅿️', title: 'Free Parking', desc: 'Ample free parking for cars and two-wheelers at the venue' }, { icon: '☕', title: 'Free Tea Coupon', desc: 'All registered visitors receive a complimentary tea/beverage coupon' }, { icon: '🙏', title: 'Maha Prasad', desc: 'Traditional Maha Prasad distributed to all event participants' }].map(v => (
              <div key={v.title} className="card-hover" style={{ background: 'white', borderRadius: 20, padding: 32, textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #FFF8EE' }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: '#1A3A5C', marginBottom: 8 }}>{v.title}</h3>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
