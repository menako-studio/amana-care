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
  },
}

export default function GaleriPage() {
  return <GaleriClient />
}
