// lib/seo.js
// ── Central SEO configuration for Godwa Dairy Expo 2026 ──

export const SITE = {
  name: 'Godwa Dairy Expo',
  fullName: "Godwa Dairy Industry Expo 2026",
  tagline: "India's Premier Dairy, Bakery & Food Processing Exhibition",
  url: 'https://dairyindustry.in',   // ← replace with your actual domain after deploying
  locale: 'en_IN',
  year: '2026',
  eventDates: '5, 6 & 7 December 2026',
  eventCity: 'Pune',
  eventState: 'Maharashtra',
  eventCountry: 'India',
  organizer: 'Godwa Prakashan Pvt Ltd',
  phone1: '+919850007425',
  phone2: '+917722082620',
  email: 'dairyexpo@gmail.com',
  address: 'Mahalaxmi Lawns, 100 FT, DP Rd, near Rajaram Bridge, Sridhar Colony, Karvenagar, Pune, Maharashtra 411052',
  twitterHandle: '@GodwaDairyExpo',
  ogImage: 'https://dairyindustry.in/og-image.jpg',              // 1200x630px image in /public folder
}

// ── BreadcrumbList schema builder ──
// Usage: buildBreadcrumbs([{ name: 'Home', path: '' }, { name: 'Exhibitors', path: '/exhibitors' }])
export function buildBreadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}

// ── Page-level metadata factory ──
export function buildMetadata({
  title,
  description,
  path = '',
  image,
  noIndex = false,
  keywords = [],
}) {
  const url = `${SITE.url}${path}`
  const ogImg = image || SITE.ogImage
  const defaultKeywords = [
    'dairy expo 2026', 'dairy exhibition pune', 'godwa dairy expo',
    'bakery expo pune', 'food processing expo india', 'feed tech expo',
    'dairy machinery exhibition', 'india dairy industry event',
    'godwa institute', 'dairy expo december 2026',
  ]

  return {
    title: {
      absolute: `${title} | Godwa Dairy Expo 2026`,
    },
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: SITE.organizer }],
    creator: SITE.organizer,
    publisher: SITE.organizer,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: `${title} | Godwa Dairy Expo 2026`,
      description,
      images: [
        {
          url: ogImg,
          width: 1200,
          height: 630,
          alt: `${title} - Godwa Dairy Expo 2026, Pune`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.twitterHandle,
      creator: SITE.twitterHandle,
      title: `${title} | Godwa Dairy Expo 2026`,
      description,
      images: [ogImg],
    },
    verification: {
      // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',  // add after deploying
    },
  }
}
