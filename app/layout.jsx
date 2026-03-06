// app/layout.jsx
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/seo'

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Godwa Dairy Expo 2026 | India's Premier Dairy, Bakery & Food Processing Exhibition - Pune",
    template: '%s | Godwa Dairy Expo 2026',
  },
  description:
    "Godwa Dairy Industry Expo 2026 - India's 13th Premier Dairy, Bakery, Food Processing & Feed Tech Exhibition. 5, 6, 7 December 2026, Pune. 15,000+ visitors, 150+ exhibitors. Book your stall now.",
  keywords: "dairy expo 2026, dairy exhibition pune 2026, godwa dairy expo, bakery expo pune, food processing exhibition india, feed tech expo 2026, dairy machinery exhibition pune, india dairy industry event 2026, godwa institute pune, dairy expo december 2026, dairy industry exhibition maharashtra, ice cream expo pune, cold chain expo india, packaging expo pune",
  authors: [{ name: SITE.organizer, url: SITE.url }],
  creator: SITE.organizer,
  publisher: SITE.organizer,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: 'Godwa Dairy Expo',
    title: "Godwa Dairy Expo 2026 | India's Premier Dairy & Food Industry Exhibition - Pune",
    description: "India's 13th Premier Dairy, Bakery, Food Processing & Feed Tech Exhibition. 5-7 December 2026, Pune. 15,000+ visitors, 150+ exhibitors.",
    images: [{ url: 'https://dairyindustry.in/og-image.jpg', width: 1200, height: 630, alt: 'Godwa Dairy Expo 2026 - Pune, December 5-7' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GodwaDairyExpo',
    title: "Godwa Dairy Expo 2026 | India's Premier Dairy Exhibition",
    description: "India's 13th Dairy, Bakery & Food Processing Expo. 5-7 December 2026, Pune.",
    images: ['https://dairyindustry.in/og-image.jpg'],
  },
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Godwa Dairy Industry Expo 2026',
  alternateName: 'Godwa Dairy Expo 2026',
  description: "India's 13th Premier Dairy, Bakery, Food Processing and Feed Tech Industry Exhibition.",
  startDate: '2026-12-05T10:00:00+05:30',
  endDate: '2026-12-07T18:00:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Mahalaxmi Lawns, Karvenagar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 FT, DP Rd, near Rajaram Bridge, Sridhar Colony, Karvenagar',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411052',
      addressCountry: 'IN',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Godwa Prakashan Pvt Ltd',
    url: SITE.url,
    telephone: '+919850007425',
    email: 'dairyexpo@gmail.com',
  },
  url: SITE.url,
  image: [SITE.url + 'https://dairyindustry.in/og-image.jpg'],
  offers: [
    { '@type': 'Offer', name: 'Visitor Entry', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: SITE.url + '/visitors' },
    { '@type': 'Offer', name: 'Exhibitor Stall', availability: 'https://schema.org/InStock', url: SITE.url + '/exhibitors', validThrough: '2026-09-30' },
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Godwa Prakashan Pvt Ltd',
  alternateName: 'Godwa Institute',
  url: SITE.url,
  logo: SITE.url + '/Images/logo.png',
  telephone: ['+919850007425', '+917722082620'],
  email: 'dairyexpo@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '100 FT, DP Rd, near Rajaram Bridge, Sridhar Colony, Karvenagar',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411052',
    addressCountry: 'IN',
  },
  foundingDate: '2012',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Godwa Dairy Expo',
  url: SITE.url,
  description: SITE.tagline,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/news?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'When is Godwa Dairy Expo 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Godwa Dairy Expo 2026 is on 5, 6 and 7 December 2026 in Pune, Maharashtra. Timings: 10:00 AM to 6:00 PM daily.' } },
    { '@type': 'Question', name: 'Where is Godwa Dairy Expo 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Godwa Dairy Expo 2026 is at Mahalaxmi Lawns, 100 FT DP Road, near Rajaram Bridge, Sridhar Colony, Karvenagar, Pune, Maharashtra 411052.' } },
    { '@type': 'Question', name: 'How to register as a visitor for Godwa Dairy Expo?', acceptedAnswer: { '@type': 'Answer', text: 'Visitor registration is free. Click the Visitor Registration button on our website to fill the form. You get free entry, tea coupon and access to all exhibition zones.' } },
    { '@type': 'Question', name: 'How to book a stall at Godwa Dairy Expo 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Visit our Exhibitors page, select your industry, choose stall size (6, 9, 12 or 36 sq meters) and complete the registration form. Last date: 30 September 2026.' } },
    { '@type': 'Question', name: 'What industries does Godwa Dairy Expo cover?', acceptedAnswer: { '@type': 'Answer', text: 'Godwa Dairy Expo covers Dairy, Bakery, Food Processing, and Feed Technology industries with 150+ exhibitors and 15,000+ visitors annually.' } },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1A3A5C" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Karvenagar, Pune, Maharashtra" />
        <meta name="geo.position" content="18.5040;73.8259" />
        <meta name="ICBM" content="18.5040, 73.8259" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/*
          TO ENABLE GOOGLE ANALYTICS after deploying:
          1. Go to analytics.google.com and create a GA4 property
          2. Get your Measurement ID (starts with G-)
          3. Uncomment the scripts below and replace G-XXXXXXXXXX
        */}
        {/*
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
        </Script>
        */}
      </body>
    </html>
  )
}
