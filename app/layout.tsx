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

export const metadata: Metadata = {
  title: {
    template: '%s | Amana Care — Daycare & Working Space Bintaro',
    default: 'Amana Care — Daycare & Parents Working Space Bintaro Sektor 7',
  },
  description:
    'Amana Care adalah daycare dan parents working space premium di Bintaro Sektor 7. Layanan penitipan anak usia 0–6 tahun dengan daily report, CCTV realtime, dan skrining psikolog anak berkala.',
  keywords: [
    'daycare bintaro',
    'penitipan anak bintaro',
    'daycare sektor 7',
    'amana care',
    'parents working space bintaro',
    'daycare terpercaya tangerang selatan',
  ],
  authors: [{ name: 'Amana Care' }],
  creator: 'Amana Care',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://amanacare.id',
    siteName: 'Amana Care',
    title: 'Amana Care — Daycare & Parents Working Space Bintaro',
    description:
      'Daycare premium dengan CCTV realtime, daily report, dan skrining psikolog anak di Bintaro Sektor 7.',
    images: [
      {
        url: '/images/logo/logo-amanacare-horizontal-color.png',
        width: 1200,
        height: 524,
        alt: 'Amana Care Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amana Care — Daycare & Parents Working Space Bintaro',
    description: 'Daycare premium di Bintaro Sektor 7 dengan CCTV realtime & skrining psikolog anak.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="id" className={`${quicksand.variable} ${inter.variable}`} data-scroll-behavior="smooth">
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
