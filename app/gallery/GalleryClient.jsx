'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'

const galleryData = {
  2022: [
    { src: '/Images/2022/Slider-1_11zon.jpg', caption: 'Exhibition 1' },
    { src: '/Images/2022/img-17_11zon-scaled.jpg', caption: 'Exhibition 2' },
    { src: '/Images/2022/Slider-2_11zon.jpg', caption: 'Exhibition 3' },
    { src: '/Images/2022/Pi7_Image_img2_11zon.jpg', caption: 'Exhibition 4' },
    { src: '/Images/2022/Pi7_Image_Img3.jpg', caption: 'Exhibition 5' },
    { src: '/Images/2022/Pi7_Image_Img16_11zon.jpg', caption: 'Exhibition 6' },
    { src: '/Images/2022/slider-8_11zon.jpg', caption: 'Exhibition 7' },
    { src: '/Images/2022/Slider-6_11zon.jpg', caption: 'Exhibition 8' },
    { src: '/Images/2022/Pi7_Image_Img21.jpg', caption: 'Exhibition 9' },
    { src: '/Images/2022/Pi7_Image_Slider5.jpg', caption: 'Exhibition 10' },
    { src: '/Images/2022/Pi7_Image_Img10.jpg', caption: 'Exhibition 11' },
    { src: '/Images/2022/Pi7_Image_Slider4.jpg', caption: 'Exhibition 12' },
    { src: '/Images/2022/Pi7_Image_img12.jpg', caption: 'Exhibition 13' },
    { src: '/Images/2022/Pi7_Image_Img18.jpg', caption: 'Exhibition 14' },
  ],
  2023: [
    { src: '/Images/2023/DSC_6561-1-1536x1024.jpg', caption: 'Exhibition 1' },
    { src: '/Images/2023/DSC_7216-1536x1024.jpg', caption: 'Exhibition 2' },
    { src: '/Images/2023/DSC_7407-1536x1024.jpg', caption: 'Exhibition 3' },
    { src: '/Images/2023/DSC_6768-1536x1024.jpg', caption: 'Exhibition 4' },
    { src: '/Images/2023/DSC_7135-1536x1024.jpg', caption: 'Exhibition 5' },
    { src: '/Images/2023/DSC_6612-1536x1024.jpg', caption: 'Exhibition 6' },

    { src: '/Images/2023/DSC_6550-1536x1024.jpg', caption: 'Exhibition 7' },
    { src: '/Images/2023/DSC_6616-1536x1024.jpg', caption: 'Exhibition 8' },
    { src: '/Images/2023/DSC_6646-1536x1024.jpg', caption: 'Exhibition 9' },
    { src: '/Images/2023/DSC_7142-1536x1024.jpg', caption: 'Exhibition 10' },
    { src: '/Images/2023/DSC_7137-1536x1024.jpg', caption: 'Exhibition 11' },
    { src: '/Images/2023/DSC_7143-1536x1024.jpg', caption: 'Exhibition 12' },

    { src: '/Images/2023/DSC_7154-1536x1024.jpg', caption: 'Exhibition 13' },
    { src: '/Images/2023/DSC_7334-1536x1024.jpg', caption: 'Exhibition 14' },
    { src: '/Images/2023/DSC_4343-Copy-1536x1024.jpg', caption: 'Exhibition 15' },
    { src: '/Images/2023/DSC_6846-1536x1024.jpg', caption: 'Exhibition 16' },
    { src: '/Images/2023/DSC_6847-1536x1024.jpg', caption: 'Exhibition 17' },
    { src: '/Images/2023/DSC_7639-1536x1024.jpg', caption: 'Exhibition 18' },

    { src: '/Images/2023/DSC_7738-1536x1024.jpg', caption: 'Exhibition 19' },
    { src: '/Images/2023/DSC_4245-Copy-1536x1024.jpg', caption: 'Exhibition 20' },
    { src: '/Images/2023/DSC_4256-1536x1024.jpg', caption: 'Exhibition 21' },
    { src: '/Images/2023/DSC_7070-Copy-1536x1024.jpg', caption: 'Exhibition 22' },
    { src: '/Images/2023/DSC_7496-1536x1024.jpg', caption: 'Exhibition 23' },


  ],
  2024: [
    { src: '/Images/2024/9J2A2324-1536x1024.jpg', caption: 'Exhibition 1' },
    // { src: '/Images/2024/9J2A2376-1536x1024.jpg', caption: 'Exhibition 2' },
    { src: '/Images/2024/9J2A2376-Copy-1536x1024.jpg', caption: 'Exhibition 2' },
    { src: '/Images/2024/9J2A2503-1536x1024.jpg', caption: 'Exhibition 4' },
    { src: '/Images/2024/9J2A2791-1536x1024.jpg', caption: 'Exhibition 5' },
    { src: '/Images/2024/9J2A2768-1536x1024.jpg', caption: 'Exhibition 6' },
    { src: '/Images/2024/9J2A2745-1536x1024.jpg', caption: 'Exhibition 7' },
    { src: '/Images/2024/9J2A2744-1536x1024.jpg', caption: 'Exhibition 8' },
    { src: '/Images/2024/9J2A2696-1536x1024.jpg', caption: 'Exhibition 9' },
    { src: '/Images/2024/9J2A2672-1536x1024.jpg', caption: 'Exhibition 10' },
    { src: '/Images/2024/9J2A2641-1536x1024.jpg', caption: 'Exhibition 11' },
    { src: '/Images/2024/9J2A2638-1536x1024.jpg', caption: 'Exhibition 12' },
    { src: '/Images/2024/9J2A2635-1536x1024.jpg', caption: 'Exhibition 13' },
    { src: '/Images/2024/9J2A2634-1536x1024.jpg', caption: 'Exhibition 14' },
    { src: '/Images/2024/9J2A2633-1536x1024.jpg', caption: 'Exhibition 15' },
    { src: '/Images/2024/9J2A2630-1536x1024.jpg', caption: 'Exhibition 16' },
    { src: '/Images/2024/9J2A2618-1536x1024.jpg', caption: 'Exhibition 17' },
    { src: '/Images/2024/9J2A2616-1536x1024.jpg', caption: 'Exhibition 18' },
    { src: '/Images/2024/9J2A2604-1536x1024.jpg', caption: 'Exhibition 19' },
    { src: '/Images/2024/9J2A2603-Copy-1536x1024.jpg', caption: 'Exhibition 20' },
    { src: '/Images/2024/9J2A2416-1536x1024.jpg', caption: 'Exhibition 21' },
    { src: '/Images/2024/9J2A2410-1536x1024.jpg', caption: 'Exhibition 22' },
    { src: '/Images/2024/9J2A2408-1-1536x1024.jpg', caption: 'Exhibition 23' },
    { src: '/Images/2024/9J2A2387-1536x1024.jpg', caption: 'Exhibition 24' },
    { src: '/Images/2024/9J2A2377-1-1536x1024.jpg', caption: 'Exhibition 25' },
    { src: '/Images/2024/9J2A2369-1536x1024.jpg', caption: 'Exhibition 26' },
    { src: '/Images/2024/9J2A2366-1536x1024.jpg', caption: 'Exhibition 27' },
    { src: '/Images/2024/9J2A2362-1536x1024.jpg', caption: 'Exhibition 28' },
    { src: '/Images/2024/9J2A2361-1536x1024.jpg', caption: 'Exhibition 29' },
    { src: '/Images/2024/9J2A2358-1536x1024.jpg', caption: 'Exhibition 30' },
    { src: '/Images/2024/9J2A2357-1536x1024.jpg', caption: 'Exhibition 31' },
    { src: '/Images/2024/9J2A2351-1-1536x1024.jpg', caption: 'Exhibition 32' },
    { src: '/Images/2024/9J2A2340-1536x1024.jpg', caption: 'Exhibition 33' },
    { src: '/Images/2024/9J2A2270-2-1536x1024.jpg', caption: 'Exhibition 34' },
    { src: '/Images/2024/9J2A2217-1-1536x1024.jpg', caption: 'Exhibition 35' },
    { src: '/Images/2024/9J2A1886-1536x1024.jpg', caption: 'Exhibition 36' },
    { src: '/Images/2024/9J2A2331-1536x1024.jpg', caption: 'Exhibition 37' },
  ],
  2025: [
    { src: '/Images/2025/6Y9A0094.JPG', caption: 'Exhibition 1' },
    { src: '/Images/2025/6Y9A0258.JPG', caption: 'Exhibition 2' },
    { src: '/Images/2025/6Y9A0259.JPG', caption: 'Exhibition 3' },
    { src: '/Images/2025/6Y9A0064 - Copy.JPG', caption: 'Exhibition 4' },
    { src: '/Images/2025/6Y9A0070 - Copy.JPG', caption: 'Exhibition 5' },
    { src: '/Images/2025/6Y9A0072 - Copy.JPG', caption: 'Exhibition 6' },
    { src: '/Images/2025/6Y9A0078 - Copy (2).JPG', caption: 'Exhibition 7' },
    { src: '/Images/2025/6Y9A0083 - Copy.JPG', caption: 'Exhibition 8' },
    { src: '/Images/2025/6Y9A0085 - Copy.JPG', caption: 'Exhibition 9' },
    { src: '/Images/2025/6Y9A0097.JPG', caption: 'Exhibition 10' },
    { src: '/Images/2025/6Y9A0138.JPG', caption: 'Exhibition 11' },
    { src: '/Images/2025/6Y9A0244.JPG', caption: 'Exhibition 12' },
    { src: '/Images/2025/6Y9A0262.JPG', caption: 'Exhibition 13' },
    { src: '/Images/2025/6Y9A0269.JPG', caption: 'Exhibition 14' },
    { src: '/Images/2025/6Y9A0271.JPG', caption: 'Exhibition 15' },
    { src: '/Images/2025/6Y9A0055 - Copy (2).JPG', caption: 'Exhibition 16' },
    { src: '/Images/2025/6Y9A0077 - Copy.JPG', caption: 'Exhibition 17' },
    { src: '/Images/2025/6Y9A0079 - Copy (2).JPG', caption: 'Exhibition 18' },
    { src: '/Images/2025/6Y9A0082 - Copy.JPG', caption: 'Exhibition 19' },
    { src: '/Images/2025/6Y9A0084 - Copy.JPG', caption: 'Exhibition 20' },
    { src: '/Images/2025/6Y9A0093.JPG', caption: 'Exhibition 21' },
    { src: '/Images/2025/6Y9A0142.JPG', caption: 'Exhibition 22' },
    { src: '/Images/2025/6Y9A0243.JPG', caption: 'Exhibition 23' },
    { src: '/Images/2025/6Y9A0251.JPG', caption: 'Exhibition 24' },
    { src: '/Images/2025/6Y9A0270.JPG', caption: 'Exhibition 25' },
    { src: '/Images/2025/6Y9A0275.JPG', caption: 'Exhibition 26' },
    { src: '/Images/2025/6Y9A0344.JPG', caption: 'Exhibition 27' },
    { src: '/Images/2025/6Y9A0289.JPG', caption: 'Exhibition 28' },
    { src: '/Images/2025/6Y9A0284.JPG', caption: 'Exhibition 29' },
    { src: '/Images/2025/6Y9A0283.JPG', caption: 'Exhibition 30' },
  ],
}

function GalleryInner() {
  const searchParams = useSearchParams()
  const yearParam = searchParams.get('year')
  const [activeYear, setActiveYear] = useState(yearParam ? parseInt(yearParam) : 2025)
  const [lightbox, setLightbox] = useState(null)
  const images = galleryData[activeYear] || []

  return (
    <div style={{ paddingTop: 90 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #1A3A5C, #0D7377)', padding: '64px 16px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 900, color: 'white', marginBottom: 8 }}>Photo Gallery</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16 }}>Memories from India's Premier Dairy Exhibition</p>
      </section>

      <section style={{ padding: '64px 0', background: '#FFF8EE' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          {/* Year tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            {[2022, 2023, 2024, 2025].map(year => (
              <button key={year} onClick={() => setActiveYear(year)} style={{ padding: '10px 28px', borderRadius: 999, fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 14, letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.3s', background: activeYear === year ? '#1A3A5C' : 'white', color: activeYear === year ? 'white' : '#1A3A5C', border: activeYear === year ? 'none' : '2px solid rgba(26,58,92,0.2)', boxShadow: activeYear === year ? '0 4px 20px rgba(26,58,92,0.3)' : 'none', transform: activeYear === year ? 'scale(1.05)' : 'scale(1)' }}>
                Edition {year}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
            {images.map((img, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ borderRadius: 14, overflow: 'hidden', cursor: 'pointer', aspectRatio: '1/1', position: 'relative', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
                onMouseEnter={e => { e.currentTarget.querySelector('div').style.opacity = '1' }}
                onMouseLeave={e => { e.currentTarget.querySelector('div').style.opacity = '0' }}
              >
                <img src={img.src} alt={img.caption} className="gallery-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,58,92,0.6)', display: 'flex', alignItems: 'flex-end', padding: 12, opacity: 0, transition: 'opacity 0.3s' }}>
                  <p style={{ color: 'white', fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            <X size={32} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ maxWidth: 900, width: '100%' }}>
            <img src={images[lightbox].src} alt={images[lightbox].caption} style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', borderRadius: 14 }} />
            <p style={{ color: 'white', textAlign: 'center', marginTop: 12, fontFamily: 'Oswald, sans-serif', letterSpacing: '0.06em' }}>{images[lightbox].caption}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 16 }}>
              <button onClick={() => setLightbox(l => l > 0 ? l - 1 : images.length - 1)} className="btn-gold" style={{ padding: '10px 24px', borderRadius: 999, fontSize: 13, border: 'none', cursor: 'pointer' }}>← Prev</button>
              <button onClick={() => setLightbox(l => l < images.length - 1 ? l + 1 : 0)} className="btn-gold" style={{ padding: '10px 24px', borderRadius: 999, fontSize: 13, border: 'none', cursor: 'pointer' }}>Next →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: 120, textAlign: 'center', fontFamily: 'Oswald, sans-serif', color: '#1A3A5C' }}>Loading gallery...</div>}>
      <GalleryInner />
    </Suspense>
  )
}
