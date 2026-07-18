import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustTicker from '@/components/home/TrustTicker'
import MissionSection from '@/components/home/MissionSection'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import DayTimeline from '@/components/home/DayTimeline'
import ProgramTabs from '@/components/home/ProgramTabs'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import GalleryPreview from '@/components/home/GalleryPreview'
import VideoReels from '@/components/home/VideoReels'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Daycare & Parents Working Space Bintaro Sektor 7 | Amana Care',
  description:
    'Amana Care — daycare terpercaya di Bintaro Sektor 7 untuk anak usia 0–6 tahun. CCTV realtime, daily report WhatsApp, makan bergizi 3x sehari, psikolog anak berkala. Plus co-working space untuk orang tua.',
  alternates: {
    canonical: 'https://amanacare.id',
  },
  openGraph: {
    title: 'Amana Care — Daycare & Parents Working Space Bintaro Sektor 7',
    description:
      'Daycare premium Bintaro Sektor 7. CCTV realtime, laporan harian, makan bergizi, dan skrining psikolog anak. Tersedia parents co-working space terintegrasi.',
    url: 'https://amanacare.id',
  },
}

// JSON-LD FAQ untuk home page (meningkatkan peluang FAQ rich snippet)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Berapa usia anak yang diterima di daycare Amana Care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amana Care menerima anak mulai usia bayi 3 bulan hingga pra-sekolah usia 6 tahun. Ruang dan kurikulum disesuaikan dengan kelompok usia si kecil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Di mana lokasi daycare Amana Care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amana Care berlokasi di Bintaro Sektor 7, Tangerang Selatan, Banten. Dapat ditemukan di Google Maps dengan pencarian "Amana Care Bintaro".',
      },
    },
    {
      '@type': 'Question',
      name: 'Jam operasional daycare Amana Care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amana Care buka Senin hingga Jumat pukul 07.00 sampai 19.00 WIB.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah orang tua bisa memantau anak secara realtime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya. Amana Care dilengkapi CCTV realtime yang dapat diakses orang tua kapan saja melalui akun terenkripsi khusus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada layanan co-working space untuk orang tua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ya! Amana Care memiliki parents working space terintegrasi yang dilengkapi WiFi cepat, minuman gratis, dan monitor CCTV agar orang tua tetap produktif sambil memantau si kecil.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TrustTicker />
      <MissionSection />
      <FeaturesGrid />
      <DayTimeline />
      <ProgramTabs />
      <TestimonialsCarousel />
      <GalleryPreview />
      <VideoReels limit={3} />
      <ContactSection />
    </>
  )
}
