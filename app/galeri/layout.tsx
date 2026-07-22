import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galeri Foto & Video Daycare Amana Care Bintaro',
  description:
    'Galeri foto & video aktivitas anak, fasilitas daycare, & suasana parents co-working space di Amana Care Bintaro Sektor 7, Tangerang Selatan.',
  alternates: {
    canonical: 'https://www.amanacare.id/galeri',
  },
  openGraph: {
    title: 'Galeri Foto & Video Daycare Amana Care Bintaro',
    description:
      'Galeri foto & video aktivitas anak, fasilitas daycare, & suasana parents co-working space di Amana Care Bintaro Sektor 7, Tangerang Selatan.',
    url: 'https://www.amanacare.id/galeri',
  },
}

export default function GaleriLayout({ children }: { children: React.ReactNode }) {
  const galeriJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': 'https://www.amanacare.id/galeri',
    url: 'https://www.amanacare.id/galeri',
    name: 'Galeri Foto Aktivitas & Fasilitas Amana Care Bintaro',
    description:
      'Dokumentasi foto dan video aktivitas anak, fasilitas daycare, dan event spesial di Amana Care Bintaro Sektor 7, Tangerang Selatan.',
    author: { '@id': 'https://www.amanacare.id/#organization' },
    isPartOf: { '@id': 'https://www.amanacare.id/#website' },
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
