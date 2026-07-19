import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { quicksand, inter } from '@/lib/fonts'
import '@/app/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import SmoothScroll from '@/components/layout/SmoothScroll'
import LoadingScreen from '@/components/layout/LoadingScreen'

const siteUrl = 'https://www.amanacare.id'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Amana Care — Daycare & Working Space Bintaro',
    default: 'Amana Care — Daycare & Parents Working Space Bintaro Sektor 7',
  },
  description:
    'Daycare premium di Bintaro Sektor 7 untuk anak 0–6 tahun. CCTV realtime, daily report WhatsApp, makan bergizi 3x, psikolog anak, dan parents co-working space terintegrasi.',
  keywords: [
    // Primary — tinggi volume
    'daycare bintaro',
    'penitipan anak bintaro',
    'daycare bintaro sektor 7',
    'daycare terpercaya bintaro',
    // Long-tail — niat tinggi
    'penitipan bayi bintaro',
    'daycare murah bintaro',
    'daycare dekat bintaro',
    'daycare rekomendasi tangerang selatan',
    'tempat penitipan anak tangerang selatan',
    'daycare aman untuk bayi',
    // Brand
    'amana care',
    'amana care bintaro',
    'haloamana',
    // Kombo layanan
    'parents working space bintaro',
    'co-working ibu bintaro',
    'daycare dengan cctv realtime',
    'daycare laporan harian whatsapp',
    'daycare skrining psikolog anak',
  ],
  authors: [{ name: 'Amana Care', url: siteUrl }],
  creator: 'Amana Care',
  publisher: 'Amana Care',
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: 'Amana Care',
    title: 'Amana Care — Daycare & Parents Working Space Bintaro Sektor 7',
    description:
      'Daycare premium di Bintaro Sektor 7. CCTV realtime, daily report WhatsApp, makan bergizi 3x, dan skrining psikolog anak berkala. Tersedia parents co-working space terintegrasi.',
    images: [
      {
        url: '/images/og-amanacare.png',
        width: 1200,
        height: 630,
        alt: 'Amana Care Daycare & Parents Working Space Bintaro Sektor 7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amana Care — Daycare & Parents Working Space Bintaro',
    description:
      'Daycare premium di Bintaro Sektor 7. CCTV realtime, laporan harian WA, psikolog anak berkala.',
    images: ['/images/og-amanacare.png'],
  },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

// JSON-LD: LocalBusiness + ChildCare (sangat penting untuk local SEO)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ChildCare'],
      '@id': `${siteUrl}/#organization`,
      name: 'Amana Care',
      legalName: 'PT Amana Peduli Warga Indonesia',
      alternateName: ['Amana Care Bintaro', 'Daycare Amana Care', 'PT Amana Peduli Warga Indonesia'],
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo/logo-amanacare-horizontal-color.png`,
        width: 400,
        height: 174,
      },
      image: `${siteUrl}/images/og-amanacare.png`,
      description:
        'Amana Care adalah daycare dan parents working space premium di Bintaro Sektor 7, Tangerang Selatan. Melayani penitipan anak usia 0–6 tahun dengan CCTV realtime, laporan harian WhatsApp, makan bergizi, dan skrining psikolog anak berkala.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bintaro Sektor 7',
        addressLocality: 'Tangerang Selatan',
        addressRegion: 'Banten',
        postalCode: '15416',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.2733159,
        longitude: 106.7126997,
      },
      telephone: '+6281513075155',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+6281513075155',
        contactType: 'customer service',
        contactOption: 'TollFree',
        availableLanguage: 'Indonesian',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '19:00',
        },
      ],
      sameAs: [
        'https://www.instagram.com/haloamana',
        'https://share.google/oW83N8priCPDFtC6n',
        'https://maps.app.goo.gl/YWpQNA5BRqkPgxvQ9',
      ],
      priceRange: 'Rp Rp',
      currenciesAccepted: 'IDR',
      paymentAccepted: 'Cash, Transfer Bank',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Amana Care',
      description: 'Daycare & Parents Working Space Premium Bintaro Sektor 7',
      publisher: { '@id': `${siteUrl}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="id" className={`${quicksand.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LoadingScreen />
        <SmoothScroll>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScroll>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
