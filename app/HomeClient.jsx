'use client'

import Link from 'next/link'
import { Calendar, MapPin, Users, Building2, ArrowRight, ChevronRight, Award } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { value: '15,000+', label: 'Visitors', icon: Users },
  { value: '150+', label: 'Exhibitors', icon: Building2 },
  { value: '13th', label: 'Edition', icon: Award },
]

const whyChoose = [
  { icon: '🎯', title: 'Targeted Audience', desc: 'Every visitor is industry-related — maximum ROI for exhibitors.' },
  { icon: '📈', title: 'Lead Generation', desc: 'Godwa supports exhibitors even after the expo with leads & enquiries.' },
  { icon: '🤝', title: 'B2B Networking', desc: 'Meet serious buyers, distributors and professionals under one roof.' },
  { icon: '💡', title: 'Latest Innovations', desc: 'New trends in packaging, batch coding, processing technology & more.' },
  { icon: '🏆', title: '13 Years of Excellence', desc: "A proven platform trusted by India's top dairy industry players." },
  { icon: '📍', title: 'Strategic Location', desc: "Pune — hub of Maharashtra's industrial growth, easily accessible." },
]

const galleryPreviews = [
  '/Images/2025/6Y9A0344.JPG',
  '/Images/2025/6Y9A0289.JPG',
  '/Images/2025/6Y9A0138.JPG',
  '/Images/2025/6Y9A0142.JPG',
  '/Images/2025/6Y9A0244.JPG',
  '/Images/2025/6Y9A0251.JPG',
  '/Images/2025/6Y9A0097.JPG',
  '/Images/2025/6Y9A0275.JPG',
  
]

export default function HomeClient() {

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ── HERO ANIMATIONS ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { transform: translateX(-50%) scale(1);   opacity: 0.28; }
          50%       { transform: translateX(-50%) scale(1.18); opacity: 0.42; }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0px, 0px)   scale(1);    opacity: 0.14; }
          33%       { transform: translate(30px, -20px) scale(1.1);  opacity: 0.22; }
          66%       { transform: translate(-20px, 15px) scale(0.95); opacity: 0.16; }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0px, 0px)   scale(1);   opacity: 0.18; }
          40%       { transform: translate(-25px, 20px) scale(1.12); opacity: 0.26; }
          70%       { transform: translate(15px, -15px) scale(0.9);  opacity: 0.14; }
        }
        @keyframes bgShift {
          0%, 100% { background-position: 0% 50%;   }
          50%       { background-position: 100% 50%; }
        }
        @keyframes dotDrift {
          0%   { background-position: 0px 0px;    }
          100% { background-position: 36px 36px;  }
        }
        @keyframes accentLine {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.55; }
        }
        .hero-fadeup   { animation: fadeUp 0.9s ease both; }
        .hero-fadeup-1 { animation: fadeUp 0.9s 0.1s  ease both; }
        .hero-fadeup-2 { animation: fadeUp 0.9s 0.25s ease both; }
        .hero-fadeup-3 { animation: fadeUp 0.9s 0.4s  ease both; }
        .hero-fadeup-4 { animation: fadeUp 0.9s 0.55s ease both; }
        .cta-card:hover { transform: translateY(-4px) !important; box-shadow: 0 16px 40px rgba(240,120,64,0.55) !important; }
        .cta-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 680, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #1a3a5c 0%, #1a3a5c 20%, #1a3a5c 45%, #225082 75%, #1a3a5c 100%)', backgroundSize: '200% 200%', animation: 'bgShift 12s ease infinite' }}>

        {/* Orange top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #e65100, #F07840, #ffcc02, #F07840, #e65100)', zIndex: 20, animation: 'accentLine 4s ease-in-out infinite' }} />

        {/* Sun glow — top center */}
        <div style={{ position: 'absolute', top: '-8%', left: '50%', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.18) 0%, transparent 65%)', zIndex: 1, pointerEvents: 'none', transform: 'translateX(-50%)', animation: 'glowPulse 8s ease-in-out infinite' }} />

        {/* Cloud orb — left */}
        <div style={{ position: 'absolute', top: '20%', left: '-6%', width: 480, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.14) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none', animation: 'floatOrb2 12s ease-in-out infinite' }} />

        {/* Cloud orb — right */}
        <div style={{ position: 'absolute', top: '15%', right: '-5%', width: 420, height: 280, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none', animation: 'floatOrb1 10s ease-in-out infinite' }} />

        {/* Warm sunrise glow — bottom */}
        <div style={{ position: 'absolute', bottom: '-5%', left: '50%', width: 900, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(240,120,64,0.20) 0%, transparent 65%)', zIndex: 1, pointerEvents: 'none', transform: 'translateX(-50%)', animation: 'glowPulse 9s 1s ease-in-out infinite' }} />

        {/* Drifting dot grid */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.22, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 2.5px, transparent 2.5px)', backgroundSize: '36px 36px', pointerEvents: 'none', animation: 'dotDrift 12s linear infinite' }} />

        {/* Dark overlay so white text stays readable */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.22) 50%, rgba(0,0,0,0.45) 100%)', pointerEvents: 'none' }} />

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, background: 'linear-gradient(to top, rgba(13,71,161,0.3), transparent)', zIndex: 3, pointerEvents: 'none' }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', maxWidth: 1000, margin: '0 auto', padding: '0 24px', width: '100%', marginTop: 40 }}>

          {/* Logo */}
          {/* <div className="hero-fadeup" style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
            <img src="/Images/logo_2.jpg" alt="Godwa Logo" style={{ height: 72, width: 72, borderRadius: '50%', border: '2.5px solid rgba(240,120,64,0.7)', boxShadow: '0 0 24px rgba(240,120,64,0.4)', objectFit: 'cover' }} />
          </div> */}

          {/* Badge */}
          <h1 className="hero-fadeup-1" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ffd0a0', marginBottom: 18, marginTop: 80, textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            13th Biggest Dairy Industry Exhibition
          </h1>

          {/* Main title */}
          <h4 className="hero-fadeup-2" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 0.95, margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', textShadow: '0 4px 40px rgba(0,0,0,0.8)' }}>
            Godwa Dairy Expo
          </h4>

          {/* Year — highlight */}
          <div className="hero-fadeup-2" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4.55vw, 3rem)', fontWeight: 700, color: '#F07840', letterSpacing: '0.12em', marginBottom: 14, textShadow: '0 2px 20px rgba(240,120,64,0.6)' }}>
            2026
          </div>

          {/* Orange divider */}
          <div className="hero-fadeup-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to right, transparent, #F07840)' }} />
            <div style={{ width: 8, height: 8, background: '#F07840', transform: 'rotate(45deg)' }} />
            <div style={{ height: 1, width: 60, background: 'linear-gradient(to left, transparent, #F07840)' }} />
          </div>

          {/* Date */}
          <div className="hero-fadeup-3" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', fontWeight: 600, color: 'rgba(255,255,255,0.92)', letterSpacing: '0.12em', marginBottom: 8 }}>
            5 – 6 – 7 DECEMBER 2026
          </div>

          {/* Venue */}
          <p className="hero-fadeup-3" style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.8rem, 5vw, 2.15rem)', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgb(229, 245, 246)', marginBottom: 44 }}>
            <MapPin size={29} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6, color: '#F07840' }} />
            Mahalaxmi Lawns, Karvenagar, Pune – 411052
          </p>

          {/* Three CTA cards */}
          <div className="hero-fadeup-4" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>

            {/* Exhibitor */}
            <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="cta-card"
              style={{ background: '#F07840', color: '#fff', borderRadius: 14, padding: '18px 32px', minWidth: 190, textAlign: 'center', textDecoration: 'none', boxShadow: '0 8px 32px rgba(240,120,64,0.55)' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: 4 }}>Exhibitor</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Book Your Space</div>
            </a>

            {/* Visitor */}
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" className="cta-card"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.45)', color: '#fff', borderRadius: 14, padding: '18px 32px', minWidth: 190, textAlign: 'center', textDecoration: 'none', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>Visitor</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Register Here</div>
            </a>

            {/* Seminar */}
            <Link href="/contact" className="cta-card"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(240,120,64,0.5)', color: '#fff', borderRadius: 14, padding: '18px 32px', minWidth: 190, textAlign: 'center', textDecoration: 'none', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>Seminar</div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 16, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Click Here</div>
            </Link>

          </div>
        </div>


      </section>

      {/* ── STATS ── */}
      {/* <section style={{ padding: '64px 0', background: 'linear-gradient(135deg, #c0562a 0%, #E8702E 60%, #f5a44a 100%)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, textAlign: 'center' }}>
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon size={26} style={{ color: '#fff' }} />
              </div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 44, fontWeight: 900, color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>{value}</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── CTA BAND ── */}
      <section style={{ padding: '48px 0', background: 'linear-gradient(135deg, #8ca635 0%, #17d7ed 100%)' }}>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, textAlign: 'center', marginBlottom: 40 }}>
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon size={26} style={{ color: '#fff' }} />
              </div>
              <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 44, fontWeight: 900, color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.2)' }}>{value}</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 14, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>


        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginTop: 34 }}>
          <div>
            <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 28, fontWeight: 700, color: 'white', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Book Your Space Now!</h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 6, fontSize: 15, fontFamily: 'Oswald, sans-serif' }}>Limited stalls available for exhibitors</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '13px 28px', borderRadius: 999, fontSize: 15, gap: 8, textDecoration: 'none' }}>
              Exhibitor Registration <ArrowRight size={15} />
            </a>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.35)', color: 'white', padding: '13px 28px', borderRadius: 999, fontSize: 15, fontFamily: 'Oswald, sans-serif', fontWeight: 700, display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
              Visitor Registration
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 14, fontWeight: 600 }}>Why Godwa Expo</span>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#1a0a00', marginTop: 10, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Why Choose Us?</h2>
            <p style={{ color: '#555', maxWidth: 620, margin: '18px auto 0', fontSize: 22, lineHeight: 1.75, fontFamily: 'Oswald, sans-serif', fontWeight: 400 }}>
              Godwa Dairy Expo is the biggest platform for dairy, bakery and allied industries, connecting exhibitors with targeted audiences.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {whyChoose.map((item) => (
              <div key={item.title} className="card-hover" style={{ background: 'white', borderRadius: 20, padding: 32, boxShadow: '0 4px 20px rgba(240,120,64,0.10)', border: '1px solid #FFE8DA' }}>
                <div style={{ fontSize: 42, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 20, fontWeight: 700, color: '#c0562a', marginBottom: 10, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: 19, lineHeight: 1.75, fontFamily: 'Oswald, sans-serif', fontWeight: 400 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1a0a00 0%, #2c1200 60%, #3d1800 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ color: '#F07840', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Past Events</span>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'white', marginTop: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>View Gallery</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            {galleryPreviews.map((src, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '1/1', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                <img src={src} alt={`Gallery ${i + 1}`} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/gallery" className="btn-gold" style={{ padding: '13px 32px', borderRadius: 999, fontSize: 15, gap: 8, textDecoration: 'none' }}>
              View Full Gallery <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VENUE ── */}
      <section style={{ padding: '96px 0', background: 'linear-gradient(160deg, #fff8f3 0%, #ffeee0 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 14, fontWeight: 600 }}>Event Location</span>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#1a0a00', margin: '10px 0 0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Venue &amp; Dates</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 40, alignItems: 'center', marginBottom: 52 }}>
            <div>
              {[
                { icon: '📅', title: 'Event Dates', val: '5, 6 & 7 December 2026', sub: '10:00 AM – 6:00 PM Daily' },
                { icon: '📍', title: 'Venue', val: 'Mahalaxmi Lawns, Karvenagar', sub: 'Pune – 411052, Maharashtra' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: 'white', borderRadius: 20, padding: '24px 28px', marginBottom: 20, boxShadow: '0 4px 24px rgba(240,120,64,0.12)', border: '1.5px solid #FFD9C4' }}>
                  <div style={{ fontSize: 36, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', color: '#E8702E', fontWeight: 700, textTransform: 'uppercase', fontSize: 13, letterSpacing: '0.12em', marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontSize: 22, fontWeight: 700, color: '#1a0a00', lineHeight: 1.2, marginBottom: 4 }}>{item.val}</div>
                    <div style={{ color: '#888', fontSize: 15, fontFamily: 'Oswald, sans-serif' }}>{item.sub}</div>
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
                <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '14px 28px', borderRadius: 999, fontSize: 15, gap: 8, textDecoration: 'none' }}>
                  Book Your Space <ArrowRight size={15} />
                </a>
                <Link href="/contact" className="btn-blue" style={{ padding: '14px 28px', borderRadius: 999, fontSize: 15, textDecoration: 'none' }}>
                  Get Directions
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.14)', height: 400 }}>
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
          </div>

          {/* ── FLOOR PLAN ── */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: 13, fontWeight: 600 }}>Exhibition Layout</span>
            <h3 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#1a0a00', margin: '8px 0 0', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Floor Plan 2026</h3>
          </div>
          <div style={{ background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(240,120,64,0.15)', border: '1.5px solid #FFD9C4' }}>
            <iframe
              src="/godwa-layout-2026.pdf"
              width="100%"
              height="620"
              style={{ border: 'none', display: 'block' }}
              title="Godwa Expo 2026 Floor Plan"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <a
              href="/godwa-layout-2026.pdf"
              download="Godwa-Layout-2026.pdf"
              className="btn-gold"
              style={{ padding: '12px 32px', borderRadius: 999, fontSize: 14, gap: 8, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Download Layout PDF <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 2025 HIGHLIGHTS VIDEO ── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1a0a00 0%, #2c1200 100%)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <span style={{ color: '#F07840', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Previous Edition</span>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#ffffff', margin: '8px 0 32px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Godwa Expo 2025 Highlights</h2>
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', aspectRatio: '16/9', background: '#0d0d0d' }}>
            <iframe
              src="https://www.youtube.com/embed/DRadPtfjRBs"
              title="Godwa Expo 2025 Highlights"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #E8702E 0%, #c0562a 50%, #f5a44a 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', top: -100, left: -100 }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', bottom: -80, right: -80 }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto', padding: '0 16px', color: 'white' }}>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 700, marginBottom: 18, letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.15 }}>
            Don't Miss <span style={{ color: '#fff', textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}>Godwa Expo 2026!</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 19, maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.75, fontFamily: 'Oswald, sans-serif', fontWeight: 400, letterSpacing: '0.03em' }}>
            Join 15,000+ professionals and 150+ leading exhibitors at India's most impactful Dairy Machinery Expo.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" style={{ background: '#fff', color: '#c0562a', padding: '16px 40px', borderRadius: 999, fontSize: 16, fontFamily: 'Oswald, sans-serif', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 30px rgba(0,0,0,0.2)', letterSpacing: '0.05em' }}>
              Book Your Stall Now <ArrowRight size={18} />
            </a>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.6)', color: 'white', padding: '16px 40px', borderRadius: 999, fontSize: 16, fontFamily: 'Oswald, sans-serif', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', letterSpacing: '0.05em' }}>
              Register as Visitor
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
