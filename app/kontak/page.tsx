import type { Metadata } from 'next'
import KontakClient from './KontakClient'

export const metadata: Metadata = {
  title: {
    absolute: 'Kontak & Pendaftaran Daycare Bintaro Sektor 7 | Amana Care',
  },
  description:
    'Hubungi Amana Care Bintaro Sektor 7. Jadwalkan site visit gratis, info pendaftaran daycare 0–6 th & parents co-working space via WhatsApp.',
  alternates: {
    canonical: 'https://www.amanacare.id/kontak',
  },
  openGraph: {
    title: 'Kontak & Pendaftaran Daycare Bintaro Sektor 7 | Amana Care',
    description:
      'Hubungi Amana Care Bintaro Sektor 7. Jadwalkan site visit gratis, info pendaftaran daycare 0–6 th & parents co-working space via WhatsApp.',
    url: 'https://www.amanacare.id/kontak',
  },
}

export default function KontakPage() {
  return <KontakClient />
}
