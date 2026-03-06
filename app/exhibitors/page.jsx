// Server component - handles metadata
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import ExhibitorsClient from './ExhibitorsClient'

export const metadata = buildMetadata({
  title: 'Exhibitor Registration & Stall Booking',
  description: 'Book your stall at Godwa Dairy Expo 2026. Choose from Dairy, Bakery, Food Processing or Feed Tech. Stall sizes 6, 9, 12 and 36 sq.m. Last date: 30 Sep 2026.',
  path: '/exhibitors',
  keywords: ['dairy expo stall booking', 'exhibitor registration pune', 'dairy exhibition stall 2026', 'book stall dairy expo'],
})

const breadcrumbSchema = buildBreadcrumbs([
  { name: 'Home', path: '' },
  { name: 'Exhibitors', path: '/exhibitors' },
])

export default function ExhibitorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ExhibitorsClient />
    </>
  )
}
