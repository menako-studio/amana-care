import type { Metadata } from 'next'
import KontakClient from './KontakClient'

export const metadata: Metadata = {
  title: 'Kontak & Daftar Daycare Bintaro — Amana Care Sektor 7',
  description:
    'Hubungi Amana Care Bintaro Sektor 7 untuk informasi pendaftaran daycare & parents co-working space. Tersedia form pendaftaran, kontak WhatsApp, Google Maps, dan FAQ lengkap. Buka Senin–Jumat 07.00–19.00 WIB.',
  alternates: {
    canonical: 'https://www.amanacare.id/kontak',
  },
  openGraph: {
    title: 'Kontak & Pendaftaran Daycare Amana Care Bintaro Sektor 7',
    description:
      'Daftar daycare & co-working space di Amana Care Bintaro Sektor 7. Isi form pendaftaran atau hubungi via WhatsApp +62 815-1307-5155. Respons cepat, jadwalkan site visit gratis.',
    url: 'https://www.amanacare.id/kontak',
  },
}

export default function KontakPage() {
  return <KontakClient />
}
