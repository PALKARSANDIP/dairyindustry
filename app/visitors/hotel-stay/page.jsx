import { MapPin, Phone, Star, ExternalLink, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Hotel Stay in Pune | Godwa Dairy Expo 2026',
  description: 'Find recommended hotels and accommodation near the Godwa Dairy Expo 2026 venue in Pune. Hotels, residencies and dharmashalas for all budgets.',
  path: '/visitors/hotel-stay',
})

const hotels = [
  {
    name: 'Oravel Travel Solutions by OYO',
    address: '',
    phone: '8237886353',
    contact: 'Vaibhav Bhujabhal (Demand Manager)',
    email: 'Vaibhav.bhujbal@oyorooms.com',
    stars: 5,
    distance: '',
    website: 'https://business.oyorooms.com/business/',
    tag: 'Premium',
    tagColor: '#D4A017',
  },
  {
    name: 'Via Shree Haree Residency',
    address: 'Survey No:6, Plot No:17, Dnydeep Colony, Thorat Colony, Hingne Budrukh, Karvenagar, Pune 411052',
    phone: '+91-70-4242-4242',
    contact: '',
    email: '',
    stars: 3.1,
    distance: '750 m from venue',
    website: 'https://www.fabhotels.com/hotels-in-pune/fabhotel-shree-haree-residency-nwvsqmvt.html',
    tag: 'Nearby',
    tagColor: '#2E7D32',
  },
  {
    name: 'Rudra Residency',
    address: '11/2, Lane No. 1, Sahu Colony, Karvenagar, Pune 411052',
    phone: '020 2547 8090',
    contact: '',
    email: '',
    stars: 3.9,
    distance: '1.4 km from venue',
    website: 'https://maps.app.goo.gl/tgrWDdajgq9HotTY9',
    tag: 'Budget',
    tagColor: '#2E7D32',
  },
  {
    name: 'Sai Residency Lodge',
    address: 'Survey No.10, Lane No. 2, behind Cummins College Road, Sahu Colony, Karvenagar, Pune 411052',
    phone: '',
    contact: '',
    email: '',
    stars: 4.8,
    distance: '1.4 km from venue',
    website: 'https://maps.app.goo.gl/72cqWEw8Dv5RZAqw6',
    tag: 'Highly Rated',
    tagColor: '#D4A017',
  },
  {
    name: 'Hotel Orchard Park',
    address: 'Upside Modak Pure VEG, Sinhgad Rd, opp. PL Deshpande Garden, Sarita Vihar, Dattawadi, Pune 411030',
    phone: '092701 94646',
    contact: '',
    email: '',
    stars: 4.5,
    distance: '2.4 km from venue',
    website: 'https://maps.app.goo.gl/HdBHDShiHBsKCCLu6',
    tag: 'Veg Friendly',
    tagColor: '#2E7D32',
  },
  {
    name: 'JW Marriott Hotel Pune',
    address: 'Senapati Bapat Rd, Laxmi Society, Model Colony, Shivajinagar, Pune 411016',
    phone: '020 6683 3333',
    contact: '',
    email: '',
    stars: 4.6,
    distance: '6.1 km from venue',
    website: 'https://www.marriott.com/en-us/hotels/pnqmc-jw-marriott-hotel-pune/overview/',
    tag: 'Luxury',
    tagColor: '#1A3A5C',
  },
  {
    name: 'Ramee Grand Hotel and Spa',
    address: 'CTS No 1221/C, Plot no 587, Apte Rd, Shivajinagar, Pune 411004',
    phone: '020 6684 6565',
    contact: '',
    email: '',
    stars: 4.7,
    distance: '5.3 km from venue',
    website: 'https://rameehotels.com/ramee-grand-hotel-and-spa-pune/',
    tag: 'Luxury',
    tagColor: '#1A3A5C',
  },
  {
    name: 'Choice Hostel For Seniors',
    address: 'NDA Rd, Warje, Pune 411058',
    phone: '088305 95687',
    contact: '',
    email: '',
    stars: 3,
    distance: '2.4 km from venue',
    website: 'https://www.choicegrouppune.com/',
    tag: 'Senior Friendly',
    tagColor: '#E8702E',
  },
]

const dharmashalas = [
  {
    name: 'AKSHAY LODGE, ALANDI',
    contact: 'Mr. Rahul Jadhav',
    address: 'Alandi Devachi, Pune, Maharashtra 412105',
    phone: '09561237373',
  },
  {
    name: 'ASHIYANA LODGE, ALANDI',
    contact: 'Mr. S G Parekar',
    address: 'Dehu Phata, Alandi Devachi, Pune 412105, Alandi Haveli',
    phone: '9822834291',
  },
  {
    name: 'ATHARVA LODGE, ALANDI',
    contact: 'Mr. Arif Shaik',
    address: 'Magazine Chowk, Pune-Alandi Road, Dighi, Pune 411101',
    phone: '08087951100',
  },
]

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < full ? '#F5C842' : i === full && half ? '#F5C842' : 'none'}
          style={{ color: i < full || (i === full && half) ? '#F5C842' : '#D1D5DB' }}
        />
      ))}
      <span style={{ color: '#666', fontSize: 13, marginLeft: 4 }}>{rating}</span>
    </div>
  )
}

export default function HotelStayPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C 0%, #2E7D32 100%)', padding: '72px 16px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: 'rgba(245,200,66,0.2)', color: '#F5C842', fontFamily: 'Oswald, sans-serif', fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 999, marginBottom: 16, border: '1px solid rgba(245,200,66,0.3)' }}>
          Godwa Dairy Expo 2026 · 5–7 December · Pune
        </span>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem,6vw,3.8rem)', fontWeight: 900, color: 'white', marginBottom: 16, lineHeight: 1.2 }}>
          Hotel Stay
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px,2.5vw,20px)', maxWidth: 620, margin: '0 auto 28px', lineHeight: 1.7 }}>
          Recommended hotels and accommodation near the expo venue in Pune for all budgets.
        </p>
        <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '12px 28px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          Register as Visitor — Free! <ExternalLink size={16} />
        </a>
      </section>

      {/* Hotels Grid */}
      <section style={{ padding: '72px 16px', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ color: '#D4A017', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14 }}>Accommodation</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(26px,4vw,38px)', fontWeight: 700, color: '#1A3A5C', marginTop: 8 }}>Recommended Hotels</h2>
            <p style={{ color: '#666', fontSize: 16, marginTop: 12, maxWidth: 600, margin: '12px auto 0', lineHeight: 1.7 }}>All hotels listed below are near the Godwa Dairy Expo 2026 venue in Pune.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {hotels.map((h, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 20, padding: '24px 22px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #F0E8D8', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(16px,2.2vw,19px)', fontWeight: 700, color: '#1A3A5C', margin: 0, lineHeight: 1.35 }}>{h.name}</h3>
                  <span style={{ background: h.tagColor, color: 'white', fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, whiteSpace: 'nowrap', flexShrink: 0 }}>{h.tag}</span>
                </div>

                {/* Stars */}
                <StarRating rating={h.stars} />

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                  {h.address && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <MapPin size={15} style={{ color: '#E8702E', flexShrink: 0, marginTop: 2 }} />
                      <span style={{ color: '#666', fontSize: 14, lineHeight: 1.55 }}>{h.address}</span>
                    </div>
                  )}
                  {h.phone && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Phone size={15} style={{ color: '#2E7D32', flexShrink: 0 }} />
                      <a href={`tel:${h.phone.replace(/\s/g, '')}`} style={{ color: '#1A3A5C', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>{h.phone}</a>
                    </div>
                  )}
                  {h.contact && (
                    <p style={{ color: '#888', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{h.contact}</p>
                  )}
                  {h.email && (
                    <a href={`mailto:${h.email}`} style={{ color: '#E8702E', fontSize: 13, textDecoration: 'none', wordBreak: 'break-all' }}>{h.email}</a>
                  )}
                  {h.distance && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#F0FFF4', color: '#2E7D32', fontSize: 13, fontWeight: 600, padding: '4px 10px', borderRadius: 999, width: 'fit-content' }}>
                      📍 {h.distance}
                    </div>
                  )}
                </div>

                {/* Book button */}
                {h.website && (
                  <a href={h.website} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, background: '#1A3A5C', color: 'white', padding: '11px 16px', borderRadius: 12, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', marginTop: 4 }}>
                    View / Book <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dharmashalas */}
      <section style={{ padding: '64px 16px', background: '#FDFAF4' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <span style={{ color: '#D4A017', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14 }}>Budget Stay</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(24px,4vw,34px)', fontWeight: 700, color: '#1A3A5C', marginTop: 8 }}>Dharmashalas in Pune</h2>
            <p style={{ color: '#666', fontSize: 16, marginTop: 12, lineHeight: 1.7 }}>Affordable lodging options for visitors coming from outside Pune.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
            {dharmashalas.map((d, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 18, padding: '22px 20px', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #F0E8D8', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, fontWeight: 700, color: '#2E7D32', margin: 0 }}>{d.name}</h3>
                <p style={{ color: '#888', fontSize: 14, margin: 0, fontStyle: 'italic' }}>{d.contact}</p>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <MapPin size={14} style={{ color: '#E8702E', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: '#666', fontSize: 14, lineHeight: 1.55 }}>{d.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Phone size={14} style={{ color: '#2E7D32', flexShrink: 0 }} />
                  <a href={`tel:${d.phone}`} style={{ color: '#1A3A5C', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>{d.phone}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '56px 16px', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px,4vw,32px)', fontWeight: 700, color: 'white', marginBottom: 12 }}>Ready to Attend?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 28, lineHeight: 1.7 }}>Register for free and plan your stay in Pune for the biggest dairy industry expo of 2026.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '14px 32px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Register Now — Free! <ExternalLink size={16} />
            </a>
            <a href="/visitors/attractions" style={{ background: 'transparent', color: 'white', padding: '14px 32px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, border: '2px solid rgba(255,255,255,0.4)' }}>
              Attractions in Pune <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
