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

      {/* ── HERO STYLES ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { transform: translateX(-50%) scale(1);    opacity: 0.25; }
          50%       { transform: translateX(-50%) scale(1.15); opacity: 0.38; }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0,0) scale(1);      opacity: 0.13; }
          50%       { transform: translate(24px,-18px) scale(1.08); opacity: 0.20; }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0,0) scale(1);      opacity: 0.16; }
          50%       { transform: translate(-20px,16px) scale(1.1); opacity: 0.22; }
        }
        @keyframes dotDrift {
          0%   { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes accentLine {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
        .h-fadeup-1 { animation: fadeUp 0.8s 0.05s ease both; }
        .h-fadeup-2 { animation: fadeUp 0.8s 0.18s ease both; }
        .h-fadeup-3 { animation: fadeUp 0.8s 0.30s ease both; }
        .h-fadeup-4 { animation: fadeUp 0.8s 0.44s ease both; }
        .h-fadeup-5 { animation: fadeUp 0.8s 0.56s ease both; }

        /* hero section */
        .hero-sec {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(160deg, #0c1f33 0%, #1a3a5c 45%, #1e4a70 100%);
          padding: 100px 20px 52px;
          text-align: center;
          box-sizing: border-box;
        }

        /* main statement — biggest text */
        .h-main-statement {
          font-size: clamp(1.1rem, 3.8vw, 2.6rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          white-space: nowrap;
          margin: 0 0 18px;
          letter-spacing: 0.01em;
          text-shadow: 0 2px 20px rgba(0,0,0,0.45);
        }
        @media (max-width: 480px) {
          .h-main-statement { white-space: normal; }
        }

        /* sub title */
        .h-title {
          font-size: clamp(1rem, 3.5vw, 2rem);
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          line-height: 1.2;
          margin: 0 0 4px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* year */
        .h-year {
          font-size: clamp(1.5rem, 5vw, 2.8rem);
          font-weight: 700;
          color: #F07840;
          letter-spacing: 0.1em;
          margin: 0 0 20px;
        }

        /* divider */
        .h-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 0 20px;
        }

        /* date */
        .h-date {
          font-size: clamp(1.2rem, 4vw, 2rem);
          font-weight: 700;
          color: rgba(255,255,255,0.95);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin: 0 0 18px;
        }

        /* venue */
        .h-venue {
          font-size: clamp(1rem, 3vw, 1.4rem);
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.04em;
          margin: 0 0 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        /* cta row */
        .h-cta-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .h-cta-primary {
          background: #F07840;
          color: #fff;
          border-radius: 10px;
          padding: 13px 26px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          box-shadow: 0 6px 24px rgba(240,120,64,0.45);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          display: inline-block;
        }
        .h-cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(240,120,64,0.6);
        }
        .h-cta-secondary {
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.3);
          color: #fff;
          border-radius: 10px;
          padding: 13px 26px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          transition: transform 0.22s ease, background 0.22s ease;
          display: inline-block;
        }
        .h-cta-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,0.13);
        }
        .h-cta-outline {
          background: rgba(240,120,64,0.1);
          border: 1.5px solid rgba(240,120,64,0.4);
          color: #ffb38a;
          border-radius: 10px;
          padding: 13px 26px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          transition: transform 0.22s ease, background 0.22s ease;
          display: inline-block;
        }
        .h-cta-outline:hover {
          transform: translateY(-3px);
          background: rgba(240,120,64,0.18);
        }

        /* sub-label inside cta */
        .h-cta-sub {
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          opacity: 0.7;
          display: block;
          margin-bottom: 3px;
          font-weight: 500;
        }
        .h-cta-main {
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero-sec">

        {/* Animated orange top line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #e65100, #F07840, #ffcc02, #F07840, #e65100)', zIndex: 20, animation: 'accentLine 4s ease-in-out infinite' }} />

        {/* Background orbs */}
        <div style={{ position: 'absolute', top: '-10%', left: '50%', width: 560, height: 380, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.16) 0%, transparent 65%)', zIndex: 1, pointerEvents: 'none', transform: 'translateX(-50%)', animation: 'glowPulse 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '18%', left: '-8%', width: 440, height: 280, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none', animation: 'floatOrb2 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '12%', right: '-6%', width: 380, height: 260, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.10) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none', animation: 'floatOrb1 10s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-4%', left: '50%', width: 800, height: 360, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(240,120,64,0.18) 0%, transparent 65%)', zIndex: 1, pointerEvents: 'none', transform: 'translateX(-50%)' }} />

        {/* Dot grid */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.18, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)', backgroundSize: '40px 40px', pointerEvents: 'none', animation: 'dotDrift 14s linear infinite' }} />

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.16) 50%, rgba(0,0,0,0.40) 100%)', pointerEvents: 'none' }} />

        {/* ── Content ── */}
        <div style={{ position: 'relative', zIndex: 10, color: 'white', maxWidth: 820, width: '100%' }}>

          {/* Main statement — biggest */}
          <h1 className="h-main-statement h-fadeup-1">
            13th Biggest Dairy Industry Exhibition
          </h1>

          {/* Sub title */}
          <div className="h-title h-fadeup-2">Godwa Dairy Expo</div>

          {/* Year */}
          <div className="h-year h-fadeup-2">2026</div>

          {/* Divider */}
          <div className="h-divider h-fadeup-3">
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to right, transparent, #F07840)' }} />
            <div style={{ width: 6, height: 6, background: '#F07840', transform: 'rotate(45deg)', flexShrink: 0 }} />
            <div style={{ height: 1, width: 50, background: 'linear-gradient(to left, transparent, #F07840)' }} />
          </div>

          {/* Date */}
          <div className="h-date h-fadeup-3">5 – 6 – 7 December 2026</div>

          {/* Venue */}
          <p className="h-venue h-fadeup-4">
            <MapPin size={20} style={{ color: '#F07840', flexShrink: 0 }} />
            Mahalaxmi Lawns, Karvenagar, Pune – 411052
          </p>

          {/* CTA buttons */}
          <div className="h-cta-row h-fadeup-5">
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" className="h-cta-primary">
              <span className="h-cta-sub">Exhibitor</span>
              <span className="h-cta-main">Book Your Space</span>
            </a>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" className="h-cta-secondary">
              <span className="h-cta-sub">Visitor</span>
              <span className="h-cta-main">Register Here</span>
            </a>
            <Link href="/contact" className="h-cta-outline">
              <span className="h-cta-sub">Seminar</span>
              <span className="h-cta-main">Click Here</span>
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
                <div key={item.title} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: 'white', borderRadius: 20, padding: '26px 30px', marginBottom: 20, boxShadow: '0 4px 24px rgba(240,120,64,0.12)', border: '1.5px solid #FFD9C4' }}>
                  <div style={{ fontSize: 42, lineHeight: 1, flexShrink: 0, marginTop: 4 }}>{item.icon}</div>
                  <div>
                    <div style={{ color: '#E8702E', fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.14em', marginBottom: 8 }}>{item.title}</div>
                    <div style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#1a0a00', lineHeight: 1.15, marginBottom: 6 }}>{item.val}</div>
                    <div style={{ color: '#777', fontSize: 16, fontWeight: 500 }}>{item.sub}</div>
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
