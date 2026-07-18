import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galeri Foto & Video Amana Care Bintaro — Aktivitas & Fasilitas Daycare',
  description:
    'Lihat galeri foto dan video aktivitas anak, fasilitas ruang bermain, event hari spesial, dan suasana parents co-working space di Amana Care Bintaro Sektor 7.',
  alternates: {
    canonical: 'https://amanacare.id/galeri',
  },
  openGraph: {
    title: 'Galeri Foto & Video Amana Care Bintaro',
    description:
      'Galeri dokumentasi aktivitas anak, fasilitas, dan event spesial di Amana Care Daycare Bintaro Sektor 7. Lihat suasana nyata daycare kami.',
    url: 'https://amanacare.id/galeri',
  },
}

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  const galeriJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': 'https://amanacare.id/galeri',
    url: 'https://amanacare.id/galeri',
    name: 'Galeri Foto Aktivitas & Fasilitas Amana Care Bintaro',
    description:
      'Dokumentasi foto dan video aktivitas anak, fasilitas daycare, dan event spesial di Amana Care Bintaro Sektor 7, Tangerang Selatan.',
    author: { '@id': 'https://amanacare.id/#organization' },
    isPartOf: { '@id': 'https://amanacare.id/#website' },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galeriJsonLd) }}
      />
      {children}
    </>
  )
}
