import type { Metadata } from 'next'
import KontakClient from './KontakClient'

export const metadata: Metadata = {
  title: {
    absolute: 'Kontak & Pendaftaran Daycare Bintaro Sektor 7 | Amana Care',
  },
  description:
    'Hubungi Amana Care Bintaro Sektor 7. Jadwalkan site visit gratis, info pendaftaran daycare 6 bln – 6 th & parents co-working space via WhatsApp.',
  alternates: {
    canonical: 'https://www.amanacare.id/kontak',
  },
  openGraph: {
    title: 'Kontak & Pendaftaran Daycare Bintaro Sektor 7 | Amana Care',
    description:
      'Hubungi Amana Care Bintaro Sektor 7. Jadwalkan site visit gratis, info pendaftaran daycare 6 bln – 6 th & parents co-working space via WhatsApp.',
    url: 'https://www.amanacare.id/kontak',
    type: 'website',
  },
}

const kontakJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.amanacare.id/kontak#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: 'https://www.amanacare.id',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Kontak',
          item: 'https://www.amanacare.id/kontak',
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://www.amanacare.id/kontak#webpage',
      url: 'https://www.amanacare.id/kontak',
      name: 'Kontak & Pendaftaran Daycare Bintaro Sektor 7 | Amana Care',
      description:
        'Halaman kontak, informasi konsultasi pendaftaran, dan penjadwalan site visit daycare serta parents working space Amana Care Bintaro.',
      isPartOf: { '@id': 'https://www.amanacare.id/#website' },
      breadcrumb: { '@id': 'https://www.amanacare.id/kontak#breadcrumb' },
      mainEntity: { '@id': 'https://www.amanacare.id/#organization' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.amanacare.id/kontak#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Selama seharian di daycare, kegiatannya apa saja?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Di pagi hari–setelah mandi pagi dan sarapan–ada kelas aktivitas anak, dengan kegiatan standar preschool/PAUD yang dipandu oleh Teacher. Dilanjutkan dengan makan siang, tidur siang, free play, mandi, dan makan sore, sebelum diakhiri dengan persiapan penjemputan. Ada juga kegiatan ekstrakurikuler Happy Ngaji, yakni kelas mengaji dan pengenalan nilai-nilai Islami untuk anak usia dini.',
          },
        },
        {
          '@type': 'Question',
          name: 'Berapa rasio antara pengasuh dan anak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Untuk kelompok usia 6-12 bulan, rasionya adalah 1:2 (1 caregiver mendampingi maksimal 2 anak). Untuk kelompok usia 1-6 tahun, rasio pengasuh dan anak adalah 1:3 (1 caregiver mendampingi maksimal 3 anak).',
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
            text: 'Kami menyediakan masakan rumahan yang dimasak di dapur milik Amana Care, dengan menu sehat yang disusun sesuai kebutuhan nutrisi anak.',
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
    },
  ],
}

export default function KontakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kontakJsonLd) }}
      />
      <KontakClient />
    </>
  )
}
