import type { Metadata } from 'next'
import { nunito, inter } from '@/lib/fonts'
import '@/app/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import WhatsAppFloat from '@/components/WhatsAppFloat'

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
        url: '/images/hero-children-play.png',
        width: 1200,
        height: 630,
        alt: 'Amana Care Daycare Bintaro',
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
  return (
    <html lang="id" className={`${nunito.variable} ${inter.variable}`}>
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
