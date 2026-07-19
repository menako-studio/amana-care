import type { Metadata } from 'next'
import GaleriClient from './GaleriClient'

export const metadata: Metadata = {
  title: 'Galeri Foto & Video Daycare Bintaro — Aktivitas & Fasilitas Amana Care',
  description:
    'Lihat galeri foto dan video reels aktivitas anak, fasilitas lengkap, dan momen event spesial di Amana Care Bintaro Sektor 7. Dokumentasi autentik tumbuh kembang anak sehari-hari.',
  alternates: {
    canonical: 'https://www.amanacare.id/galeri',
  },
  openGraph: {
    title: 'Galeri Foto & Video Amana Care — Daycare Bintaro Sektor 7',
    description:
      'Foto dan video reels aktivitas harian, fasilitas premium, dan event spesial anak-anak di Amana Care Bintaro Sektor 7. Dokumentasi autentik play-based learning & perkembangan anak.',
    url: 'https://www.amanacare.id/galeri',
  },
}

export default function GaleriPage() {
  return <GaleriClient />
}
