'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const navLinks = [

  { label: 'About', href: '/about' },
  {
    label: 'Gallery',
    href: '/gallery',
    sub: [
      { label: 'Gallery 2022', href: '/gallery?year=2022' },
      { label: 'Gallery 2023', href: '/gallery?year=2023' },
      { label: 'Gallery 2024', href: '/gallery?year=2024' },
      { label: 'Gallery 2025', href: '/gallery?year=2025' },
    ],
  },
  {
    label: 'Exhibitors',
    href: '/exhibitors',
    sub: [
      { label: 'Why Exhibit?', href: '/exhibitors/why-exhibit' },
      { label: 'Exhibitors Profile', href: '/exhibitors/profile' },
      { label: 'Exhibitors Registration', href: 'https://forms.gle/XbNZWHxgzrxKC4YW8', external: true },
      { label: 'Downloads', href: '/downloads' },
    ],
  },
  // { label: 'Services', href: '/services' },
  {
    label: 'Visitors',
    href: '/visitors',
    sub: [
      { label: 'Visitors Profile', href: '/visitors' },
      { label: 'Why Visit?', href: '/visitors/why-visit' },
      { label: 'Visitors Registration', href: 'https://forms.gle/XbNZWHxgzrxKC4YW8', external: true },
      { label: 'Hotel Stay', href: '/visitors/hotel-stay' },
      { label: 'Attractions in Pune', href: '/visitors/attractions' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8F0EB' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div
        className="max-w-7xl mx-auto px-5 flex items-center justify-between transition-all duration-300 ease-in-out"
        style={{ paddingTop: scrolled ? '6px' : '12px', paddingBottom: scrolled ? '6px' : '12px' }}
      >

        {/* ── LOGO ── shifts to the right side on scroll via order */}
        <a
          href="/"
          className="flex items-center gap-3 group transition-all duration-300 ease-in-out"
          style={{ order: 0 }}
        >
          {/* Logo badge */}
          <div
            style={{
              width: scrolled ? 48 : 100,
              height: scrolled ? 48 : 100,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #F07840 0%, #D4621A 100%)',
              padding: 3,
              boxShadow: '0 4px 18px rgba(232,112,46,0.35)',
              flexShrink: 0,
              transition: 'width 0.3s ease, height 0.3s ease, box-shadow 0.3s ease',
            }}
            className="group-hover:scale-105"
          >
            <div
              style={{
                width: '98%',
                height: '100%',
                borderRadius: '50%',
                background: '#ffffff',
                overflow: 'hidden',
                position: 'relative',
                paddingLeft: 6,
                boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
                marginLeft: 1,
              }}
            >
              <Image
                src="/Images/logo_2.jpg"
                alt="Godwa Dairy Expo"
                fill
                className="object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
                priority
              />
            </div>
          </div>

          {/* Text block — hide on scroll */}
          <div
            className="flex flex-col leading-none transition-all duration-300 ease-in-out"
            style={{
              overflow: 'hidden',
              maxWidth: scrolled ? '0' : '200px',
              opacity: scrolled ? 0 : 1,
              whiteSpace: 'nowrap',
            }}
          >
            {/* Brand name */}
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#3258f4',
                letterSpacing: '0.02em',
                lineHeight: 1.1,
              }}
            >
              GODWA
            </span>

            {/* Thin gold divider */}
            <span
              style={{
                display: 'block',
                height: 2,
                width: '100%',
                background: 'linear-gradient(90deg, #E8702E, transparent)',
                margin: '4px 0',
                borderRadius: 2,
              }}
            />

            {/* Sub-label */}
            <span
              style={{
                fontFamily: 'Oswald, sans-serif',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                color: '#E8702E',
                textTransform: 'uppercase',
                lineHeight: 1.2,
              }}
            >
              Dairy Expo 2026
            </span>

            {/* Edition badge */}
            <span
              style={{
                display: 'inline-block',
                marginTop: 4,
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#ffffff',
                background: '#E8702E',
                borderRadius: 4,
                padding: '1px 6px',
                textTransform: 'uppercase',
                fontFamily: 'Oswald, sans-serif',
                alignSelf: 'flex-start',
              }}
            >
              13th Edition
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.sub && setDropdown(link.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-lg font-semibold rounded-md transition-all duration-200"
                style={{ color: '#374151', fontFamily: 'Nunito, sans-serif' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#E8702E'
                  e.currentTarget.style.backgroundColor = '#52dfd1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#374151'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                {link.label}
                {link.sub && <ChevronDown size={13} />}
              </Link>

              {link.sub && dropdown === link.label && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-2xl py-2 min-w-[200px] border border-gray-100 z-50">
                  {link.sub.map((s) => (
                    s.external ? (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-lg font-semibold transition-colors hover:bg-orange-50"
                        style={{ color: '#1A3A5C', fontFamily: 'Nunito, sans-serif' }}
                      >
                        {s.label}
                      </a>
                    ) : (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="block px-4 py-2.5 text-lg font-semibold transition-colors hover:bg-orange-50"
                        style={{ color: '#1A3A5C', fontFamily: 'Nunito, sans-serif' }}
                      >
                        {s.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Social icons */}
          <a href="https://www.facebook.com/share/1BPamQHM4H/" target="_blank" rel="noopener noreferrer" title="Facebook"
            style={{ width: 34, height: 34, borderRadius: '50%', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/godwa_gift?igsh=MXRmcGhiYWQ2YWJ5eQ==" target="_blank" rel="noopener noreferrer" title="Instagram"
            style={{ width: 34, height: 34, borderRadius: '50%', background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://youtube.com/@godwadairyexpo?si=3bEyC-E7hVr1vVaW" target="_blank" rel="noopener noreferrer" title="YouTube"
            style={{ width: 34, height: 34, borderRadius: '50%', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"/></svg>
          </a>
          {/* <div style={{ width: 1, height: 28, background: '#E8F0EB', margin: '0 4px' }} />
          <Link href="/visitors" className="btn-blue px-4 py-2 rounded-full text-sm">
            Visitor Register
          </Link>
          <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" className="btn-gold px-4 py-2 rounded-full text-sm">
            Book Your Space
          </a> */}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2" style={{ color: '#2D6A4F' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E8F0EB',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
          maxHeight: mobileOpen ? '600px' : '0',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="px-4 pb-5 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 px-3 rounded-lg font-semibold transition-colors"
                style={{ color: '#374151', fontFamily: 'Nunito, sans-serif' }}
              >
                {link.label}
              </Link>
              {link.sub && (
                <div className="pl-5 space-y-0.5">
                  {link.sub.map((s) => (
                    s.external ? (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 px-3 text-sm"
                        style={{ color: '#6B7280' }}
                      >
                        › {s.label}
                      </a>
                    ) : (
                      <Link
                        key={s.label}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 px-3 text-sm"
                        style={{ color: '#6B7280' }}
                      >
                        › {s.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col gap-2 pt-3">
            {/* <Link href="/visitors" onClick={() => setMobileOpen(false)} className="btn-blue px-5 py-2.5 rounded-full text-sm text-center">
              Visitor Register
            </Link>
            <a href="https://forms.gle/XbNZWHxgzrxKC4YW8" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="btn-gold px-5 py-2.5 rounded-full text-sm text-center">
              Book Your Space
            </a> */}
          
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', paddingTop: 8 }}>
              <a href="https://www.facebook.com/share/1BPamQHM4H/" target="_blank" rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: '50%', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/godwa_gift?igsh=MXRmcGhiYWQ2YWJ5eQ==" target="_blank" rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: '50%', background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://youtube.com/@godwadairyexpo?si=3bEyC-E7hVr1vVaW" target="_blank" rel="noopener noreferrer"
                style={{ width: 38, height: 38, borderRadius: '50%', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#FF0000"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Menu, X, ChevronDown } from 'lucide-react'
// import Image from 'next/image'

// const navLinks = [
//   // { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   {
//     label: 'Gallery',
//     href: '/gallery',
//     sub: [
//       { label: 'Gallery 2022', href: '/gallery?year=2022' },
//       { label: 'Gallery 2023', href: '/gallery?year=2023' },
//       { label: 'Gallery 2024', href: '/gallery?year=2024' },
//       { label: 'Gallery 2025', href: '/gallery?year=2025' },
//     ],
//   },
//   { label: 'Exhibitors', href: '/exhibitors' },
//   { label: 'Downloads', href: '/downloads' },
//   { label: 'Services', href: '/services' },
//   { label: 'Visitors', href: '/visitors' },
//   { label: 'Contact', href: '/contact' },
// ]

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [dropdown, setDropdown] = useState(null)

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 30)
//     window.addEventListener('scroll', handler)
//     return () => window.removeEventListener('scroll', handler)
//   }, [])

//   return (
//     <nav
//       style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8F0EB' }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}
//     >
//       <div className="max-w-7xl mx-auto px-5 flex items-center justify-between py-3">

//         {/* ── LOGO ── */}
//         <a href="/" className="flex items-center gap-3 group">
//           {/* Logo badge: gold ring + white inner circle */}
//           <div
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: '50%',
//               background: 'linear-gradient(135deg, #F07840 0%, #D4621A 100%)',
//               padding: 3,
//               boxShadow: '0 4px 18px rgba(232,112,46,0.35)',
//               flexShrink: 0,
//               transition: 'box-shadow 0.3s ease, transform 0.3s ease',
//             }}
//             className="group-hover:scale-105"
//           >
//             <div
//               style={{
//                 width: '98%',
//                 height: '100%',
//                 borderRadius: '50%',
//                 background: '#fff',
//                 overflow: 'hidden',
//                 position: 'relative',
//                 paddingLeft: 6,
//                 boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
//                 marginLeft: 1,
//               }}
//             >
//               <Image
//                 src="/Images/logo_2.jpg"
//                 alt="Godwa Dairy Expo"
//                 fill
//                 className="object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
//                 priority
//               />


//             </div>
//           </div>

//           {/* Text block */}
//           <div className="flex flex-col leading-none">
//             {/* Brand name */}
//             <span
//               style={{
//                 fontFamily: '"Playfair Display", serif',
//                 fontSize: '1.35rem',
//                 fontWeight: 800,
//                 color: '#2D6A4F',
//                 letterSpacing: '0.02em',
//                 lineHeight: 1.1,
//               }}
//             >
//               GODWA
//             </span>

//             {/* Thin gold divider */}
//             <span
//               style={{
//                 display: 'block',
//                 height: 2,
//                 width: '100%',
//                 background: 'linear-gradient(90deg, #E8702E, transparent)',
//                 margin: '4px 0',
//                 borderRadius: 2,
//               }}
//             />

//             {/* Sub-label */}
//             <span
//               style={{
//                 fontFamily: 'Oswald, sans-serif',
//                 fontSize: '0.6rem',
//                 fontWeight: 600,
//                 letterSpacing: '0.18em',
//                 color: '#E8702E',
//                 textTransform: 'uppercase',
//                 lineHeight: 1.2,
//               }}
//             >
//               Dairy Expo 2026
//             </span>

//             {/* Edition badge */}
//             <span
//               style={{
//                 display: 'inline-block',
//                 marginTop: 4,
//                 fontSize: '0.55rem',
//                 fontWeight: 700,
//                 letterSpacing: '0.12em',
//                 color: '#ffffff',
//                 background: '#E8702E',
//                 borderRadius: 4,
//                 padding: '1px 6px',
//                 textTransform: 'uppercase',
//                 fontFamily: 'Oswald, sans-serif',
//                 alignSelf: 'flex-start',
//               }}
//             >
//               13th Edition
//             </span>
//           </div>
//         </a>

//         {/* Desktop nav links */}
//         <div className="hidden lg:flex items-center gap-0.5">
//           {navLinks.map((link) => (
//             <div
//               key={link.label}
//               className="relative"
//               onMouseEnter={() => link.sub && setDropdown(link.label)}
//               onMouseLeave={() => setDropdown(null)}
//             >
//               <Link
//                 href={link.href}
//                 className="flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200"
//                 style={{ color: '#374151', fontFamily: 'Nunito, sans-serif' }}
//                 onMouseEnter={e => {
//                   e.currentTarget.style.color = '#E8702E'
//                   e.currentTarget.style.backgroundColor = '#FFF4EE'
//                 }}
//                 onMouseLeave={e => {
//                   e.currentTarget.style.color = '#374151'
//                   e.currentTarget.style.backgroundColor = 'transparent'
//                 }}
//               >
//                 {link.label}
//                 {link.sub && <ChevronDown size={13} />}
//               </Link>

//               {link.sub && dropdown === link.label && (
//                 <div className="absolute top-full left-0 bg-white rounded-xl shadow-2xl py-2 min-w-[160px] border border-gray-100 z-50">
//                   {link.sub.map((s) => (
//                     <Link
//                       key={s.label}
//                       href={s.href}
//                       className="block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-orange-50"
//                       style={{ color: '#1A3A5C', fontFamily: 'Nunito, sans-serif' }}
//                     >
//                       {s.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* CTA buttons */}
//         <div className="hidden lg:flex items-center gap-2">
//           <Link
//             href="/visitors"
//             className="btn-blue px-4 py-2 rounded-full text-sm"
//           >
//             Visitor Register
//           </Link>
//           <a
//             href="https://forms.gle/XbNZWHxgzrxKC4YW8"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-gold px-4 py-2 rounded-full text-sm"
//           >
//             Book Your Space
//           </a>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           className="lg:hidden p-2" style={{ color: '#2D6A4F' }}
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle menu"
//         >
//           {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div
//         style={{
//           backgroundColor: '#FFFFFF',
//           borderTop: '1px solid #E8F0EB',
//           overflow: 'hidden',
//           transition: 'max-height 0.3s ease, opacity 0.3s ease',
//           maxHeight: mobileOpen ? '600px' : '0',
//           opacity: mobileOpen ? 1 : 0,
//         }}
//       >
//         <div className="px-4 pb-5 space-y-1">
//           {navLinks.map((link) => (
//             <div key={link.label}>
//               <Link
//                 href={link.href}
//                 onClick={() => setMobileOpen(false)}
//                 className="block py-2.5 px-3 rounded-lg font-semibold transition-colors"
//                 style={{ color: '#374151', fontFamily: 'Nunito, sans-serif' }}
//               >
//                 {link.label}
//               </Link>
//               {link.sub && (
//                 <div className="pl-5 space-y-0.5">
//                   {link.sub.map((s) => (
//                     <Link
//                       key={s.label}
//                       href={s.href}
//                       onClick={() => setMobileOpen(false)}
//                       className="block py-1.5 px-3 text-sm"
//                       style={{ color: '#6B7280' }}
//                     >
//                       › {s.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           <div className="flex flex-col gap-2 pt-3">
//             <Link
//               href="/visitors"
//               onClick={() => setMobileOpen(false)}
//               className="btn-blue px-5 py-2.5 rounded-full text-sm text-center"
//             >
//               Visitor Register
//             </Link>
//             <a
//               href="https://forms.gle/XbNZWHxgzrxKC4YW8"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setMobileOpen(false)}
//               className="btn-gold px-5 py-2.5 rounded-full text-sm text-center"
//             >
//               Book Your Space
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }