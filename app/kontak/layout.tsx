import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontak & Pendaftaran Daycare Amana Care Bintaro',
  description:
    'Hubungi Amana Care Bintaro sekarang! Daftar daycare anak usia 0–6 tahun, jadwalkan site visit, atau tanya informasi biaya via WhatsApp +62 815-1307-5155. Berlokasi di Bintaro Sektor 7, Tangerang Selatan.',
  alternates: {
    canonical: 'https://amanacare.id/kontak',
  },
  openGraph: {
    title: 'Kontak & Pendaftaran Daycare Amana Care Bintaro',
    description:
      'Daftar daycare Amana Care, jadwalkan site visit, atau tanya informasi via WhatsApp. Berlokasi di Bintaro Sektor 7, Tangerang Selatan. Buka Senin–Jumat 07.00–19.00 WIB.',
    url: 'https://amanacare.id/kontak',
  },
}

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  const kontakJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': 'https://amanacare.id/kontak',
        url: 'https://amanacare.id/kontak',
        name: 'Kontak & Pendaftaran Amana Care Bintaro',
        description:
          'Halaman kontak dan pendaftaran daycare Amana Care Bintaro Sektor 7. Tersedia form pendaftaran, jadwal site visit, informasi lokasi, dan FAQ.',
        isPartOf: { '@id': 'https://amanacare.id/#website' },
        about: { '@id': 'https://amanacare.id/#organization' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Apakah bisa berkunjung (site visit) sebelum mendaftar di Amana Care?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sangat bisa! Kami merekomendasikan orang tua untuk menjadwalkan kunjungan terlebih dahulu agar bisa melihat langsung fasilitas, lingkungan belajar, serta bertemu dengan staf kami. Silakan buat janji melalui form kontak atau WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Berapa usia anak yang diterima di Amana Care?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Amana Care menerima anak mulai dari usia bayi 3 bulan hingga pra-sekolah usia 6 tahun. Kurikulum serta pengelompokan ruang kelas disesuaikan khusus dengan kelompok umur si kecil.',
            },
          },
          {
            '@type': 'Question',
            name: 'Bagaimana makanan dan nutrisi anak selama di daycare Amana Care?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Paket daycare kami sudah termasuk makan utama 3 kali sehari dan snack sore bergizi. Kami menyajikan makanan segar yang disiapkan secara higienis, bervariasi, serta bebas MSG. Harap infokan kepada tim kami jika si kecil memiliki alergi makanan tertentu.',
            },
          },
          {
            '@type': 'Question',
            name: 'Bagaimana keamanan CCTV bagi orang tua di Amana Care?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kami memiliki kamera CCTV online realtime yang mencakup seluruh ruang aktivitas utama anak. Orang tua akan diberikan akses masuk khusus (akun terenkripsi) untuk memantau aktivitas si kecil secara mandiri kapan saja.',
            },
          },
          {
            '@type': 'Question',
            name: 'Bagaimana kualifikasi tim pengasuh (caregiver) di Amana Care?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Seluruh tim pengasuh kami memiliki kualifikasi pendidikan di bidang PAUD atau Keperawatan anak, telah melalui sertifikasi pertolongan pertama (P3K) khusus anak, serta rutin mengikuti pelatihan psikologi anak berkala.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kontakJsonLd) }}
      />
      {children}
    </>
  )
}
