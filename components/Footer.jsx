import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
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
              src="/Images/logo_1.jpg"
              alt="Godwa Dairy Expo 2026"
              width={80}
              height={80}
              className="rounded-full shadow-lg object-contain"
            />
            <div>
              <div className="font-bold text-xl" style={{ fontFamily: '"Playfair Display", serif' }}>Godwa</div>
              <div className="text-xs font-bold tracking-widest uppercase" style={{ color: '#F5C842', fontFamily: 'Oswald, sans-serif' }}>DAIRY EXPO 2026</div>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.65)' }} className="text-sm leading-relaxed">
            India's 13th Premier Dairy, Bakery, Food Processing & Feed Tech Industry Exhibition. Pune, 5-7 Dec 2026.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 uppercase tracking-wide" style={{ color: '#F5C842', fontFamily: 'Oswald, sans-serif' }}>Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              ['Home', '/'], ['About Godwa Expo', '/about'], ['Exhibitors', '/exhibitors'],
              ['Visitor Registration', '/visitors'], ['News & Updates', '/news'], ['Photo Gallery', '/gallery'],
              ['Downloads', '/downloads'], ['Services', '/services'], ['Contact Us', '/contact'],
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
          </ul>
          <div className="mt-5">
            <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="btn-gold px-5 py-2.5 rounded-full text-sm">
              Book Your Stall →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs" style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)', position: 'relative' }}>
        <span>© 2026 Godwa Prakashan Pvt Ltd. All rights reserved.</span>
        <span>Presented by <strong style={{ color: '#F5C842' }}>Godwa Institute</strong> · Pune, Maharashtra</span>
        {/* Bottom-right corner image */}
        <div style={{ position: 'absolute', bottom: 8, right: 16, marginBottom:65 }}>
          <Image
            src="/Images/Godwa-Prakashan.jpg"
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
