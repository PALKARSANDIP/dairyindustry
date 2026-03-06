'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Users, Building2, ArrowRight, ChevronRight, Award, Globe, CheckCircle } from 'lucide-react'
import Image from 'next/image'
const stats = [
  { value: '15,000+', label: 'Visitors', icon: Users },
  { value: '150+', label: 'Exhibitors', icon: Building2 },
  { value: '2,000', label: 'Sq Meter Area', icon: Globe },
  { value: '13th', label: 'Edition', icon: Award },
]

const industries = [
  { title: 'Bakery', caption: 'Milking, Processing & Cold Chain Equipment', bg: '/Images/industry1.jpeg' },
  { title: 'Bakery', caption: 'Ovens, Mixers, Ingredients & Packaging', bg: '/Images/industry2.jpeg' },
  { title: 'Bakery', caption: 'Feed Manufacturing & Livestock Technology', bg: '/Images/industry4.jpeg' },
  { title: 'Food Processing', caption: 'Processing Lines, Water Treatment & Handling', bg: '/Images/industry3.jpeg' },
  { title: 'Food Processing', caption: 'Freezers, Flavours & Cone Machines', bg: '/Images/industry5.jpeg' },
  { title: 'Food Processing', caption: 'Labelling, Batch Coding & Wrapping Solutions', bg: '/Images/industry6.jpeg' },
  { title: 'Feedtech industry', caption: 'Testing, Quality Control & Analysis Tools', bg: '/Images/industry7.jpeg' },
  { title: 'Feedtech industry', caption: 'Steam Boilers, Compressors & Energy Solutions', bg: '/Images/industry8.jpeg' },
  // duplicate set for seamless loop
  { title: 'Bakery', caption: 'Milking, Processing & Cold Chain Equipment', bg: '/Images/industry1.jpeg' },
  { title: 'Bakery', caption: 'Ovens, Mixers, Ingredients & Packaging', bg: '/Images/industry2.jpeg' },
  { title: 'Bakery', caption: 'Feed Manufacturing & Livestock Technology', bg: '/Images/industry4.jpeg' },
  { title: 'Food Processing', caption: 'Processing Lines, Water Treatment & Handling', bg: '/Images/industry3.jpeg' },
  { title: 'Food Processing', caption: 'Freezers, Flavours & Cone Machines', bg: '/Images/industry5.jpeg' },
  { title: 'Food Processing', caption: 'Labelling, Batch Coding & Wrapping Solutions', bg: '/Images/industry6.jpeg' },
  { title: 'Feedtech industry', caption: 'Testing, Quality Control & Analysis Tools', bg: '/Images/industry7.jpeg' },
  { title: 'Feedtech industry', caption: 'Steam Boilers, Compressors & Energy Solutions', bg: '/Images/industry8.jpeg' },
]

const whyChoose = [
  { icon: '🎯', title: 'Targeted Audience', desc: 'Every visitor is industry-related -- maximum ROI for exhibitors.' },
  { icon: '📈', title: 'Lead Generation', desc: 'Godwa supports exhibitors even after the expo with leads & enquiries.' },
  { icon: '🤝', title: 'B2B Networking', desc: 'Meet serious buyers, distributors and professionals under one roof.' },
  { icon: '💡', title: 'Latest Innovations', desc: 'New trends in packaging, batch coding, processing technology & more.' },
  { icon: '🏆', title: '13 Years of Excellence', desc: "A proven platform trusted by India's top dairy industry players." },
  { icon: '📍', title: 'Strategic Location', desc: "Pune -- hub of Maharashtra's industrial growth, easily accessible." },
]

const galleryPreviews = [
  '/Images/2025/6Y9A0344.JPG',
  '/Images/2025/6Y9A0289.JPG',
  '/Images/2025/6Y9A0138.JPG',
  '/Images/2025/6Y9A0142.JPG',
  '/Images/2025/6Y9A0244.JPG',
  '/Images/2025/6Y9A0251.JPG',
]

const marqueeItems = [
  'Dairy Machinery', 'Ice Cream Technology', 'Cold Chain Solutions', 'Bakery Equipment',
  'Food Processing', 'Packaging Technology', 'Feed Technology', 'Water Treatment',
  'Boiler Solutions', 'Lab Equipment', 'Dairy Farming', 'Material Handling',
  'Dairy Machinery', 'Ice Cream Technology', 'Cold Chain Solutions', 'Bakery Equipment',
  'Food Processing', 'Packaging Technology', 'Feed Technology', 'Water Treatment',
  'Boiler Solutions', 'Lab Equipment', 'Dairy Farming', 'Material Handling',
]

export default function HomeClient() {
  const [videoModal, setVideoModal] = useState(false)

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 620, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#0d1f35' }}>

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/Images/2025/6Y9A0093.JPG"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/videos/DJI_20251220135550_0301_D.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)' }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', maxWidth: 1000, margin: '0 auto', padding: '0 20px' }}>

          {/* Top pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.28)', borderRadius: 999, padding: '8px 22px', marginBottom: 28, fontSize: 13, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', backdropFilter: 'blur(6px)', textTransform: 'uppercase' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#F07840', display: 'inline-block', flexShrink: 0 }} />
            India's Premier Dairy &amp; Food Industry Expo · 13th Edition
          </div>

          {/* Main heading */}
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.6rem, 7vw, 5.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
            <span style={{ color: '#F07840' }}>Godwa Dairy</span><br />
            <span style={{ color: '#ffffff' }}>Expo 2026</span>
          </h1>

          {/* Date · Venue · Time bar */}
          <div style={{ display: 'inline-flex', alignItems: 'stretch', gap: 0, background: 'rgba(0,0,0,0.35)', border: '1.5px solid rgba(240,120,64,0.55)', borderRadius: 14, marginBottom: 32, backdropFilter: 'blur(10px)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
              <Calendar size={18} style={{ color: '#F07840', flexShrink: 0 }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: '0.05em', color: '#fff', lineHeight: 1.2 }}>5 – 6 – 7</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>December 2026</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
              <MapPin size={18} style={{ color: '#F07840', flexShrink: 0 }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: '0.05em', color: '#fff', lineHeight: 1.2 }}>Pune</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>Maharashtra</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F07840" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, letterSpacing: '0.05em', color: '#fff', lineHeight: 1.2 }}>10 AM – 6 PM</div>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500, fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>Daily</div>
              </div>
            </div>
          </div>

          {/* Sub-description */}
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.75, textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
            India's biggest platform for Dairy, Bakery, Food Processing &amp; Feed Technology. Connect with 15,000+ professionals and 150+ leading exhibitors.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://forms.gle/m1o3G6CDSA3q1Jwv7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ padding: '15px 36px', borderRadius: 999, fontSize: 15, gap: 8, boxShadow: '0 8px 30px rgba(232,112,46,0.5)', textDecoration: 'none' }}
            >
              Book Your Space Now <ArrowRight size={17} />
            </a>
            <Link
              href="/visitors"
              style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.45)', color: 'white', padding: '15px 36px', borderRadius: 999, fontSize: 15, fontFamily: 'Oswald, sans-serif', fontWeight: 700, letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.3s', textDecoration: 'none', backdropFilter: 'blur(6px)' }}
            >
              Visitor Registration <ChevronRight size={17} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, zIndex: 10, opacity: 0.7 }}>
          <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 11, letterSpacing: '0.15em', color: 'white', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, white, transparent)' }} />
        </div>
      </section>


      {/* ── MARQUEE ── */}
      <div style={{ background: '#E8702E', padding: '12px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', overflow: 'hidden' }}>
          <div className="marquee-track" style={{ display: 'flex', gap: 0 }}>
            {marqueeItems.map((item, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '0 24px', fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', color: '#ffffff', whiteSpace: 'nowrap' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.45)', display: 'inline-block' }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="dairy-pattern" style={{ padding: '64px 0', background: '#2D6A4F' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, textAlign: 'center' }}>
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(240,120,64,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon size={26} style={{ color: '#F07840' }} />
              </div>
              <div className="stat-glow" style={{ fontFamily: '"Playfair Display", serif', fontSize: 40, fontWeight: 900, color: '#F07840' }}>{value}</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: '80px 0', background: '#F5FAF7', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 16px' }}>
          <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13, fontWeight: 600 }}>What We Cover</span>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 38, fontWeight: 700, color: '#2D6A4F', marginTop: 8 }}>Industry Sectors</h2>
        </div>

        {/* Auto-scrolling carousel */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div
            className="industry-scroll-track"
            style={{ display: 'flex', gap: 24, width: 'max-content' }}
          >
            {industries.map((ind, i) => (
              <div
                key={i}
                style={{ width: 280, flexShrink: 0, borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', position: 'relative', cursor: 'pointer' }}
              >
                <div style={{ position: 'relative', height: 220 }}>
                  <img
                    src={ind.bg}
                    alt={ind.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{ind.title}</h3>
                  {/* <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 12, lineHeight: 1.5 }}>{ind.caption}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ padding: '48px 0', background: 'linear-gradient(135deg, #2D6A4F, #40916C)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: 'white' }}>Ready to Participate?</h3>
            <p style={{ color: 'rgba(255,255,255,0.72)', marginTop: 4, fontSize: 14 }}>Limited stalls available -- book before 30 September 2026</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '12px 28px', borderRadius: 999, fontSize: 14, gap: 8 }}>
              Exhibitor Registration <ArrowRight size={15} />
            </a>
            <Link href="/visitors" style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.4)', color: 'white', padding: '12px 28px', borderRadius: 999, fontSize: 14, fontFamily: 'Oswald, sans-serif', fontWeight: 700, display: 'inline-flex', alignItems: 'center', textDecoration: 'none', transition: 'all 0.3s' }}>
              Visitor Registration
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="dairy-pattern" style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Why Godwa Expo</span>
            <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 38, fontWeight: 700, color: '#2D6A4F', marginTop: 8 }}>Why Choose Us?</h2>
            <p style={{ color: '#666', maxWidth: 600, margin: '16px auto 0', fontSize: 15, lineHeight: 1.7 }}>
              Godwa Dairy Expo is the biggest platform for dairy, bakery and allied industries, connecting exhibitors with targeted audiences.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {whyChoose.map((item) => (
              <div key={item.title} className="card-hover" style={{ background: 'white', borderRadius: 20, padding: 28, boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #EEF7F1' }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 18, fontWeight: 700, color: '#2D6A4F', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section style={{ padding: '80px 0', background: '#2D6A4F' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ color: '#F07840', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Past Events</span>
            <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 38, fontWeight: 700, color: 'white', marginTop: 8 }}>View Gallery</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {galleryPreviews.map((src, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '1/1' }}>
                <img src={src} alt={`Gallery ${i + 1}`} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link href="/gallery" className="btn-gold" style={{ padding: '12px 32px', borderRadius: 999, fontSize: 14, gap: 8, textDecoration: 'none' }}>
              View Full Gallery <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2025 HIGHLIGHTS VIDEO ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
          <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Previous Edition</span>
          <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 700, color: '#2D6A4F', margin: '8px 0 32px' }}>Godwa Expo 2025 Highlights</h2>
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', aspectRatio: '16/9', background: '#1A3A5C' }}>
            <iframe
              src="https://www.youtube.com/embed/BZ02_j6PbFI"
              title="Godwa Expo 2025 Highlights"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{ color: '#999', fontSize: 12, marginTop: 12 }}>Replace the YouTube URL in the code with your actual 2025 highlight video link.</p>
        </div>
      </section>

      {/* ── VENUE ── */}
      <section style={{ padding: '80px 0', background: '#F5FAF7' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Event Location</span>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 700, color: '#2D6A4F', margin: '8px 0 20px' }}>Venue & Dates</h2>
            {[
              { icon: '📅', title: 'Event Dates', val: '5, 6 & 7 December 2026', sub: '10:00 AM - 6:00 PM Daily' },
              { icon: '📍', title: 'Venue', val: 'Pune, Maharashtra', sub: "India's Industrial Capital" },
            ].map((item) => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'white', borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #EEF7F1' }}>
                <div style={{ fontSize: 28 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'Oswald, sans-serif', color: '#2D6A4F', fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em' }}>{item.title}</div>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#2D6A4F' }}>{item.val}</div>
                  <div style={{ color: '#999', fontSize: 13 }}>{item.sub}</div>
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
              <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '12px 24px', borderRadius: 999, fontSize: 14, gap: 8, textDecoration: 'none' }}>
                Register as Exhibitor <ArrowRight size={14} />
              </a>
              <Link href="/contact" className="btn-blue" style={{ padding: '12px 24px', borderRadius: 999, fontSize: 14, textDecoration: 'none' }}>
                Get Directions
              </Link>
            </div>
          </div>
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', height: 360 }}>
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
      </section>


      {/* News Preview Section */}
      {/* <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span style={{ color: '#E8702E', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 13 }}>Stay Updated</span>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 36, fontWeight: 700, color: '#2D6A4F', marginTop: 4 }}>Latest News</h2>
            </div>
            <Link href="/news" className="btn-blue" style={{ padding: '10px 24px', borderRadius: 999, fontSize: 13, textDecoration: 'none', gap: 8 }}>
              View All News <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'Stall Booking Now Open for Godwa Dairy Expo 2026', cat: 'Exhibitors', date: 'Jan 15, 2026', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80', slug: 'stall-booking-open-2026', color: '#D4A017' },
              { title: 'Free Visitor Registration Open - December 2026', cat: 'Visitors', date: 'Jan 20, 2026', img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80', slug: 'visitor-registration-2026', color: '#0D7377' },
              { title: 'Top Dairy Technology Trends to Watch at Godwa Expo 2026', cat: 'Industry', date: 'Feb 25, 2026', img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80', slug: 'dairy-technology-trends-2026', color: '#4CAF50' },
            ].map(item => (
              <Link key={item.slug} href={'/news/' + item.slug} style={{ textDecoration: 'none' }}>
                <div className="card-hover" style={{ background: 'white', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.07)', border: '1px solid #EEF7F1' }}>
                  <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                    <img src={item.img} alt={item.title} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 12, left: 12 }}>
                      <span style={{ background: item.color, color: 'white', padding: '3px 12px', borderRadius: 999, fontSize: 11, fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>{item.cat}</span>
                    </div>
                  </div>
                  <div style={{ padding: 20 }}>
                    <p style={{ color: '#bbb', fontSize: 11, marginBottom: 6 }}>{item.date}</p>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: 16, fontWeight: 700, color: '#2D6A4F', lineHeight: 1.4, marginBottom: 10 }}>{item.title}</h3>
                    <span style={{ color: '#E8702E', fontSize: 12, fontFamily: 'Oswald, sans-serif', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #2D6A4F 0%, #40916C 55%, #E8702E 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', top: -100, left: -100 }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(245,200,66,0.08)', bottom: -80, right: -80 }} />
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto', padding: '0 16px', color: 'white' }}>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
            <Image src="/Images/logo_2.jpg" alt="Godwa Dairy Expo Logo" width={96} height={96} />
          </div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: 16 }}>
            Don't Miss <span style={{ color: '#F07840' }}>Godwa Expo 2026!</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, maxWidth: 550, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Join 15,000+ professionals and 150+ leading exhibitors at India's most impactful dairy event.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://forms.gle/m1o3G6CDSA3q1Jwv7" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ padding: '16px 36px', borderRadius: 999, fontSize: 15, gap: 8, textDecoration: 'none', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
              Book Your Stall Now <ArrowRight size={17} />
            </a>
            <Link href="/visitors" style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.5)', color: 'white', padding: '16px 36px', borderRadius: 999, fontSize: 15, fontFamily: 'Oswald, sans-serif', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s' }}>
              Register as Visitor
            </Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 20, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em' }}>
            Last date for stall booking: 30 September 2026 · Limited space available
          </p>
        </div>
      </section>

      {/* Video Modal */}
      {videoModal && (
        <div onClick={() => setVideoModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '100%', maxWidth: 900, aspectRatio: '16/9' }}>
            <button onClick={() => setVideoModal(false)} style={{ position: 'absolute', top: -40, right: 0, background: 'none', border: 'none', color: 'white', fontSize: 28, cursor: 'pointer', fontWeight: 700 }}>✕</button>
            <iframe src="https://www.youtube.com/embed/BZ02_j6PbFI?autoplay=1" style={{ width: '100%', height: '100%', borderRadius: 16, border: 'none' }} allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  )
}
