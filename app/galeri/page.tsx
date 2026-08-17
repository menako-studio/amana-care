import type { Metadata } from 'next'
import GaleriClient from './GaleriClient'

export const metadata: Metadata = {
  title: {
    absolute: 'Galeri Foto & Video Daycare Bintaro | Amana Care',
  },
  description:
    'Galeri foto & video aktivitas anak, fasilitas premium, serta momen event di Amana Care Daycare & Parents Working Space Bintaro Sektor 7.',
  alternates: {
    canonical: 'https://www.amanacare.id/galeri',
  },
  openGraph: {
    title: 'Galeri Foto & Video Daycare Bintaro | Amana Care',
    description:
      'Galeri foto & video aktivitas anak, fasilitas premium, serta momen event di Amana Care Daycare & Parents Working Space Bintaro Sektor 7.',
    url: 'https://www.amanacare.id/galeri',
    type: 'website',
  },
}

const galeriJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.amanacare.id/galeri#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: 'https://www.amanacare.id',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Galeri',
          item: 'https://www.amanacare.id/galeri',
        },
      ],
    },
    {
      '@type': ['CollectionPage', 'ImageGallery'],
      '@id': 'https://www.amanacare.id/galeri#webpage',
      url: 'https://www.amanacare.id/galeri',
      name: 'Galeri Foto & Video Daycare Bintaro | Amana Care',
      description:
        'Kumpulan dokumentasi keceriaan aktivitas anak, fasilitas daycare, sensory school, dan perayaan event spesial di Amana Care Bintaro.',
      isPartOf: { '@id': 'https://www.amanacare.id/#website' },
      breadcrumb: { '@id': 'https://www.amanacare.id/galeri#breadcrumb' },
      about: { '@id': 'https://www.amanacare.id/#organization' },
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://www.amanacare.id/galeri#video-event',
      name: 'On-Site Daycare Service Event Documentation',
      description:
        'Dokumentasi pelayanan penitipan anak di lokasi acara (on-site daycare) untuk event privat oleh tim profesional Amana Care.',
      thumbnailUrl: 'https://www.amanacare.id/images/hero-galeri.jpg',
      uploadDate: '2025-01-15T08:00:00+07:00',
      embedUrl: 'https://www.youtube.com/embed/Hk196cyieQ0',
    },
  ],
}

export default function GaleriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galeriJsonLd) }}
      />
      <GaleriClient />
    </>
  )
}
