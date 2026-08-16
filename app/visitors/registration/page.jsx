import { ExternalLink } from 'lucide-react'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Visitor Registration',
  description: 'Register as a free visitor for Godwa Dairy Expo 2026, Pune. Free entry for all dairy industry professionals.',
  path: '/visitors/registration',
  noIndex: true, // "Coming Soon" page — exclude from Google until content is ready
})

export default function VisitorRegistrationPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #2E7D32)', padding: '72px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 12 }}>Visitor Registration</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>Register now for free entry to Godwa Dairy Expo 2026.</p>
      </section>

      <section style={{ padding: '80px 16px', background: '#FFF8EE', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ fontSize: 64, marginBottom: 24 }}>📋</div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 32, fontWeight: 700, color: '#1A3A5C', marginBottom: 16 }}>Content Coming Soon</h2>
          <p style={{ color: '#666', fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>Detailed registration information is being prepared. You can register directly using the form below.</p>
          <a href="https://exporegistration.in/expo-visitor.aspx" target="_blank" rel="noopener noreferrer" style={{ background: '#F5C842', color: '#1A3A5C', padding: '14px 32px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Register Now — It's Free! <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  )
}
