import { ArrowRight, ExternalLink } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Attractions in Pune | Godwa Dairy Expo 2026',
  description: 'Explore the best tourist attractions in Pune while attending Godwa Dairy Expo 2026. Visit Shaniwar Wada, Sinhagad Fort, Dagadusheth Temple and more.',
  path: '/visitors/attractions',
})

const attractions = [
  {
    number: '01',
    title: 'Dagadusheth Halwai Ganapati Temple',
    image: '/Images/dagadusheth-temple.jpg',
    // image: '/Images/bappa.jpg',
    points: [
      'One of the most famous Shree Ganesh temples in Maharashtra',
      'Thousands of devotees visit every year, especially during Ganeshotsav',
      'Located in the center of Pune and known for its beautiful gold-decorated idol',
    ],
    tag: 'Religious',
    color: '#FFF4E8',
    tagColor: '#E8702E',
  },
  {
    number: '02',
    title: 'Shaniwar Wada',
    image: '/Images/shaniwar-wada.jpg',
    // image: '/Images/shaniwar-wada_2.jpg',
    points: [
      'One of the most famous historical landmarks in Pune',
      'Built in 1732 by Peshwa Bajirao I',
      'Served as the seat of the Peshwa rulers of the Maratha Empire',
    ],
    tag: 'Historical',
    color: '#EEF4FF',
    tagColor: '#1A3A5C',
  },
  {
    number: '03',
    title: 'Sinhagad Fort',
    image: '/Images/sinhgad_fort.jpg',
    points: [
      'Historic hill fort about 28 km from Pune',
      'Famous for the Battle of Sinhagad in 1670',
      'Very popular for trekking, sunrise views, and local food stalls',
    ],
    tag: 'Adventure',
    color: '#F0FFF4',
    tagColor: '#2E7D32',
  },
  {
    number: '04',
    title: 'Parvati Hill',
    image: '/Images/parvati-hill.jpg',
    points: [
      'One of the best viewpoints in Pune',
      'Around 100+ steps lead to the temple on top',
      'Offers a panoramic view of the whole city and historic Peshwa temples',
    ],
    tag: 'Scenic',
    color: '#FFF8EE',
    tagColor: '#D4A017',
  },
  {
    number: '05',
    title: 'Pune-Okayama Friendship Garden',
    image: '/Images/friendship-garden.jpg',
    points: [
      'Also called Pu La Deshpande Garden',
      'One of the largest and most beautiful gardens in Pune',
      'Designed like a Japanese garden with water streams and bridges',
    ],
    tag: 'Nature',
    color: '#F0FFF4',
    tagColor: '#2E7D32',
  },
]

export default function AttractionsPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C 0%, #2E7D32 100%)', padding: '72px 16px', textAlign: 'center' }}>
        <span style={{ display: 'inline-block', background: 'rgba(245,200,66,0.2)', color: '#F5C842', fontFamily: 'Oswald, sans-serif', fontSize: 14, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '6px 18px', borderRadius: 999, marginBottom: 16, border: '1px solid rgba(245,200,66,0.3)' }}>
          Godwa Dairy Expo 2026 · Pune
        </span>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.2rem,6vw,3.8rem)', fontWeight: 900, color: 'white', marginBottom: 16, lineHeight: 1.2 }}>
          Attractions in Pune
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(16px,2.5vw,20px)', maxWidth: 620, margin: '0 auto 28px', lineHeight: 1.7 }}>
          Make the most of your trip to Pune. Explore these iconic landmarks while attending the expo on 5–7 December 2026.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/visitors" style={{ background: 'white', color: '#1A3A5C', padding: '12px 26px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Visitor Profile <ArrowRight size={16} />
          </a>
          <a href="https://exporegistration.in/expo-visitor.aspx" target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '12px 26px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Register Free <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Attractions List */}
      <section style={{ padding: '72px 16px', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {attractions.map((place, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 6px 28px rgba(0,0,0,0.08)',
                border: '1px solid #F0E8D8',
                display: 'grid',
                gridTemplateColumns: 'clamp(200px, 38%, 380px) 1fr',
              }}
              className="attraction-card"
            >
              {/* Image */}
              <div style={{ position: 'relative', minHeight: 260, background: '#E0EDE4', overflow: 'hidden' }}>
                <img
                  src={place.image}
                  alt={place.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
                />
                {/* Number overlay */}
                <div style={{ position: 'absolute', top: 14, left: 14, background: 'rgba(0,0,0,0.55)', color: 'white', fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 900, width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}>
                  {place.number}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 30px', background: place.color, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 }}>
                <div>
                  <span style={{ background: place.tagColor, color: 'white', fontFamily: 'Oswald, sans-serif', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: 999 }}>
                    {place.tag}
                  </span>
                </div>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(18px,3vw,24px)', fontWeight: 700, color: '#1A3A5C', margin: 0, lineHeight: 1.3 }}>
                  {place.title}
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {place.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#555', fontSize: 15, lineHeight: 1.6 }}>
                      <span style={{ color: place.tagColor, fontWeight: 700, fontSize: 18, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>•</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '56px 16px', background: '#1A3A5C', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(22px,4vw,32px)', fontWeight: 700, color: 'white', marginBottom: 12 }}>Plan Your Visit to Pune</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 28, lineHeight: 1.7 }}>Register for free and experience the expo alongside Pune's incredible attractions.</p>
          <a href="https://exporegistration.in/expo-visitor.aspx" target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '16px 40px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 17, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Register as Visitor — Free! <ExternalLink size={17} />
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .attraction-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
