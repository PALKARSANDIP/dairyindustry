// app/page.jsx
import { buildMetadata } from '@/lib/seo'
import HomeClient from './HomeClient'

export const metadata = buildMetadata({
  title: "Godwa Dairy Expo 2026 | India's Premier Dairy, Bakery & Food Processing Exhibition",
  description:
    "Godwa Dairy Industry Expo 2026 — India's 13th Premier Dairy, Bakery, Food Processing & Feed Tech Exhibition. 5, 6, 7 December 2026, Pune. 15,000+ visitors, 150+ exhibitors. Book your stall now.",
  path: '',
  keywords: [
    'dairy expo 2026',
    'dairy exhibition pune 2026',
    'godwa dairy expo',
    'bakery expo pune',
    'food processing exhibition india',
    'feed tech expo 2026',
    'dairy machinery exhibition pune',
    'india dairy industry event 2026',
    'dairy expo december 2026',
    'dairy industry exhibition maharashtra',
    'ice cream expo pune',
    'cold chain expo india',
    'packaging expo pune',
  ],
})

export default function HomePage() {
  return <HomeClient />
}
