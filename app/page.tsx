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
  title: {
    absolute: 'Daycare Bintaro Sektor 7 Terbaik Anak 6 Bln – 6 Th | Amana Care',
  },
  description:
    'Daycare Bintaro Sektor 7 terbaik untuk anak 6 bulan – 6 tahun. Dilengkapi CCTV realtime, laporan WA, makan 3x, psikolog anak, & parents co-working space.',
  alternates: {
    canonical: 'https://www.amanacare.id',
  },
  openGraph: {
    title: 'Daycare Bintaro Sektor 7 Terbaik Anak 6 Bln – 6 Th | Amana Care',
    description:
      'Daycare Bintaro Sektor 7 terbaik untuk anak 6 bulan – 6 tahun. Dilengkapi CCTV realtime, laporan WA, makan 3x, psikolog anak, & parents co-working space.',
    url: 'https://www.amanacare.id',
  },
}

// JSON-LD FAQ untuk home page (meningkatkan peluang FAQ rich snippet)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Selama seharian di daycare, kegiatannya apa saja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Di pagi hari–setelah mandi pagi dan sarapan–ada kelas aktivitas anak, dengan kegiatan standar preschool/PAUD yang dipandu oleh Teacher. Dilanjutkan dengan makan siang, tidur siang, free play, mandi, dan makan sore, sebelum diakhiri dengan persiapan penjemputan. Ada juga kegiatan ekstrakurikuler Happy Ngaji, yakni kelas mengaji dan pengenalan nilai-nilai Islami (huruf hijaiyah, fiqih, adab) untuk anak usia dini melalui metode yang menyenangkan dan ramah anak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Berapa rasio antara pengasuh dan anak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Untuk kelompok usia 6-12 bulan, rasionya adalah 1:2. Satu orang caregiver akan mendampingi maksimal 2 anak, terdiri dari 1 anak usia 6-12 bulan dan 1 anak yang lebih besar. Untuk kelompok usia 1-6 tahun, rasio pengasuh dan anak adalah 1:3, di mana 1 caregiver akan mendampingi maksimal 3 anak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada akses CCTV untuk orang tua?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pasti! Akses CCTV untuk orang tua tersedia melalui mobile app yang bisa diakses 24/7.',
      },
    },
    {
      '@type': 'Question',
      name: 'Makan yang disediakan di daycare seperti apa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami menyediakan masakan rumahan yang dimasak di dapur milik Amana Care, dengan menu sehat yang disusun dengan kebutuhan nutrisi anak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah bisa survei langsung ke lokasi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bisa! Survei bisa dilakukan setiap hari Senin-Jumat, pukul 09:00-17:00, atau Sabtu, pukul 09:00-12:00, dengan perjanjian melalui WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Apakah ada biaya trial sebelum mendaftar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kami memiliki program free trial daycare untuk 1x kehadiran sehingga Amana Parents tidak perlu membayarkan biaya apapun sebelum mendaftar.',
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
