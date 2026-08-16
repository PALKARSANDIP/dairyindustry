import Link from 'next/link'
import { MapPin, Phone, Mail, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F2740' }} className="text-white">
      {/* Wave */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#FDFAF4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Images/logo_2.jpg"
              alt="Godwa Dairy Expo 2026"
              width={100}
              height={100}
              className="rounded-full shadow-lg object-contain"
            />
            <div>
              <div className="font-bold text-xl" style={{ fontFamily: '"Playfair Display", serif' }}>Godwa</div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: '#F5C842', fontFamily: 'Oswald, sans-serif' }}>DAIRY EXPO 2026</div>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.65)' }} className="text-sm leading-relaxed mb-4">
            India's 13th Biggest Dairy ,Bakery,Feed and Food processing Machinery industry Exhibition 2026.
          </p>
          {/* Social media icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="https://www.facebook.com/share/1BPamQHM4H/" target="_blank" rel="noopener noreferrer" title="Facebook"
              className="social-icon-btn"
              style={{ width: 40, height: 40, borderRadius: '50%', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/godwa_gift?igsh=MXRmcGhiYWQ2YWJ5eQ==" target="_blank" rel="noopener noreferrer" title="Instagram"
              className="social-icon-btn"
              style={{ width: 40, height: 40, borderRadius: '50%', background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://youtube.com/@godwadairyexpo?si=3bEyC-E7hVr1vVaW" target="_blank" rel="noopener noreferrer" title="YouTube"
              className="social-icon-btn"
              style={{ width: 40, height: 40, borderRadius: '50%', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase tracking-wide" style={{ color: '#F5C842', fontFamily: 'Oswald, sans-serif' }}>Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              ['Home', '/'], ['About Godwa Expo', '/about'], ['Exhibitors', '/exhibitors'],
              ['Visitor Registration', '/visitors'], ['Photo Gallery', '/gallery'],
              ['Downloads', '/downloads'], ['Contact Us', '/contact'], ['News & Updates', '/news'],
            ].map(([label, href]) => (
              <li key={label}>
                <Link href={href} style={{ color: 'rgba(255,255,255,0.65)' }}
                  className="hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span style={{ color: '#F5C842' }}>›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase tracking-wide" style={{ color: '#F5C842', fontFamily: 'Oswald, sans-serif' }}>Contact</h3>
          <ul className="space-y-4 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            <li className="flex items-start gap-3">
              <MapPin size={17} style={{ color: '#F5C842', flexShrink: 0, marginTop: 2 }} />
              <span>Mahalaxmi Lawns, 100 FT DP Rd, near Rajaram Bridge, Sridhar Colony, Karvenagar, Pune 411052</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={17} style={{ color: '#F5C842', flexShrink: 0 }} />
              <div>
                <a href="tel:+919850007425" className="hover:text-yellow-400 block transition-colors">+91 98500 07425</a>
                <a href="tel:+917722082620" className="hover:text-yellow-400 block transition-colors">+91 77220 82620</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={17} style={{ color: '#F5C842', flexShrink: 0 }} />
              <a href="mailto:dairyexpo@gmail.com" className="hover:text-yellow-400 transition-colors">dairyexpo@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Calendar size={17} style={{ color: '#F5C842', flexShrink: 0 }} />
              <span>5, 6 & 7 December 2026 ·</span>
            </li>
          </ul>
          <div className="mt-5">
            <a href="https://exporegistration.in/expo-visitor.aspx" target="_blank" rel="noopener noreferrer" className="btn-gold px-5 py-2.5 rounded-full text-sm">
              Book Your Stall →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)', position: 'relative' }}>
        <span>© 2026 Godwa Prakashan Pvt Ltd. All rights reserved.</span>
        <span>Presented by <strong style={{ color: '#F5C842' }}>Godwa Institute</strong> · Pune, Maharashtra</span>
        {/* Bottom-right corner image */}
        <div style={{ position: 'absolute', bottom: 8, right: 16, marginBottom: 65 }}>
          <Image
            src="/Images/Godwa-Prakashan-removebg-preview.png"
            alt="Footer Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
