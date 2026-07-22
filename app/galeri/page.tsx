import type { Metadata } from 'next'
import GaleriClient from './GaleriClient'

export const metadata: Metadata = {
  title: 'Galeri Foto & Video Daycare Bintaro — Aktivitas & Fasilitas Amana Care',
  description:
    'Galeri foto & video aktivitas anak, fasilitas premium, serta momen event di Amana Care Daycare & Parents Working Space Bintaro Sektor 7.',
  alternates: {
    canonical: 'https://www.amanacare.id/galeri',
  },
  openGraph: {
    title: 'Galeri Foto & Video Amana Care — Daycare Bintaro Sektor 7',
    description:
      'Galeri foto & video aktivitas anak, fasilitas premium, serta momen event di Amana Care Daycare & Parents Working Space Bintaro Sektor 7.',
    url: 'https://www.amanacare.id/galeri',
  },
}

export default function GaleriPage() {
  return <GaleriClient />
}
