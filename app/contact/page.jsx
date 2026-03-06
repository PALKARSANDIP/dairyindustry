import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Contact Godwa Dairy Expo',
  description: "Contact Godwa Dairy Expo 2026 team. Phone: +91 98500 07425, +91 77220 82620. Email: dairyexpo@gmail.com. Venue: Mahalaxmi Lawns, Karvenagar, Pune. Register for stall or visitor entry.",
  path: '/contact',
  keywords: ['godwa expo contact', 'dairy expo pune contact', 'godwa prakashan contact', 'dairy exhibition pune address'],
})

const breadcrumbSchema = buildBreadcrumbs([
  { name: 'Home', path: '' },
  { name: 'Contact', path: '/contact' },
])

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 8 }}>Contact Us</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16 }}>Get in touch with the Godwa Expo team</p>
      </section>

      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 40 }}>
          {/* Info */}
          <div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700, color: '#1A3A5C', marginBottom: 28 }}>Get In Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: MapPin, color: '#1A3A5C', title: 'Venue Address', content: <span>Mahalaxmi Lawns<br />100 FT, DP Rd, near Rajaram Bridge,<br />Sridhar Colony, Karvenagar, Pune 411052</span> },
                { icon: Phone, color: '#0D7377', title: 'Phone Numbers', content: <div><a href="tel:+919850007425" style={{ display: 'block', color: '#1A3A5C', textDecoration: 'none', fontWeight: 600 }}>+91 98500 07425</a><a href="tel:+917722082620" style={{ display: 'block', color: '#1A3A5C', textDecoration: 'none', fontWeight: 600 }}>+91 77220 82620</a><span style={{ color: '#999', fontSize: 12 }}>Services: Sumit Dorge +91 88882 82885</span></div> },
                { icon: Mail, color: '#D4A017', title: 'Email', content: <a href="mailto:dairyexpo@gmail.com" style={{ color: '#0D7377', fontWeight: 700, textDecoration: 'none' }}>dairyexpo@gmail.com</a> },
                { icon: Clock, color: '#4CAF50', title: 'Event Timing', content: <><div style={{ fontWeight: 700, color: '#1A3A5C' }}>5, 6 & 7 December 2026</div><div style={{ color: '#666' }}>10:00 AM - 6:00 PM Daily</div></> },
              ].map(({ icon: Icon, color, title, content }) => (
                <div key={title} style={{ display: 'flex', gap: 16, background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #FFF8EE' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: '0.08em', color: '#999', marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 14, lineHeight: 1.7, color: '#555' }}>{content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Registration links */}
            <div style={{ background: '#1A3A5C', borderRadius: 18, padding: 24, marginTop: 20 }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 16 }}>Quick Registration</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  { label: 'Exhibitor Registration', href: 'https://forms.gle/m1o3G6CDSA3q1Jwv7', gold: true },
                  { label: 'Visitor Registration', href: 'https://forms.gle/m1o3G6CDSA3q1Jwv7', gold: false },
                ].map(({ label, href, gold }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={gold ? 'btn-gold' : ''} style={gold ? { padding: '12px 20px', borderRadius: 12, fontSize: 13, textDecoration: 'none', justifyContent: 'space-between', gap: 8 } : { background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '12px 20px', borderRadius: 12, fontSize: 13, fontFamily: 'Oswald, sans-serif', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.3s' }}>
                    <span>{label}</span>
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map + directions */}
          <div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700, color: '#1A3A5C', marginBottom: 20 }}>Find Us</h2>
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.15)', height: 380, border: '4px solid white' }}>
              <iframe
                src="https://maps.google.com/maps?q=Mahalaxmi+Lawns,+100+FT+DP+Road,+Karvenagar,+Pune+411052&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Venue Map"
              />
            </div>

            <div style={{ background: 'white', borderRadius: 18, padding: 24, marginTop: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #FFF8EE' }}>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: '#1A3A5C', marginBottom: 14 }}>Getting There</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { icon: '🚗', mode: 'By Car/Auto', desc: 'Karvenagar via 100 FT DP Road, near Rajaram Bridge, Sridhar Colony' },
                  { icon: '🚌', mode: 'By Bus', desc: 'PMPML buses to Karvenagar stop, 5 min walk to Mahalaxmi Lawns' },
                  { icon: '🚂', mode: 'By Train', desc: 'Pune Junction (10 km) → Auto/Cab to venue' },
                  { icon: '✈️', mode: 'By Flight', desc: 'Pune Airport (15 km) → Cab directly available' },
                ].map(({ icon, mode, desc }) => (
                  <div key={mode} style={{ display: 'flex', gap: 12, fontSize: 13 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
                    <div><strong style={{ color: '#1A3A5C' }}>{mode}:</strong> <span style={{ color: '#666' }}>{desc}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
