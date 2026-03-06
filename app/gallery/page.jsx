// Server component - handles SEO metadata
import { buildMetadata, buildBreadcrumbs } from '@/lib/seo'
import GalleryClient from './GalleryClient'

export const metadata = buildMetadata({
  title: 'Photo Gallery - Past Editions 2022-2025',
  description: 'View photos from Godwa Dairy Expo past editions 2022, 2023, 2024 and 2025. Exhibition highlights, dairy machinery displays, stall photos and event moments from Pune.',
  path: '/gallery',
  keywords: ['godwa expo photo gallery', 'dairy expo 2025 photos', 'dairy exhibition pune pictures', 'godwa expo past editions'],
})

const breadcrumbSchema = buildBreadcrumbs([
  { name: 'Home', path: '' },
  { name: 'Gallery', path: '/gallery' },
])

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryClient />
    </>
  )
}
