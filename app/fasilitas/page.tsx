import type { Metadata } from 'next'
import Image from 'next/image'
import { ShieldCheck, Wind, HeartHandshake, Sparkles } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './page.module.css'
import { FasilitasTrackedCTA } from './FasilitasCTA'

export const metadata: Metadata = {
  title: {
    absolute: 'Fasilitas Daycare Bintaro Sektor 7 & CCTV | Amana Care',
  },
  description:
    'Fasilitas Amana Care Bintaro Sektor 7: Playroom non-toxic, ruang tidur AC, CCTV realtime, & parents co-working space nyaman dengan WiFi kencang.',
  alternates: {
    canonical: 'https://www.amanacare.id/fasilitas',
  },
  openGraph: {
    title: 'Fasilitas Daycare Bintaro Sektor 7 & CCTV | Amana Care',
    description:
      'Fasilitas Amana Care Bintaro Sektor 7: Playroom non-toxic, ruang tidur AC, CCTV realtime, & parents co-working space nyaman dengan WiFi kencang.',
    url: 'https://www.amanacare.id/fasilitas',
    type: 'website',
  },
}

const fasilitasJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.amanacare.id/fasilitas#breadcrumb',
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
          name: 'Fasilitas',
          item: 'https://www.amanacare.id/fasilitas',
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.amanacare.id/fasilitas#webpage',
      url: 'https://www.amanacare.id/fasilitas',
      name: 'Fasilitas Daycare & Parents Working Space Amana Care Bintaro',
      description:
        'Fasilitas lengkap Amana Care meliputi ruang bermain indoor, ruang belajar, area tidur, parents co-working space, CCTV realtime 24/7, dan APE non-toxic edukatif.',
      isPartOf: { '@id': 'https://www.amanacare.id/#website' },
      breadcrumb: { '@id': 'https://www.amanacare.id/fasilitas#breadcrumb' },
      about: { '@id': 'https://www.amanacare.id/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://www.amanacare.id/fasilitas#facilities-list',
      name: 'Daftar Fasilitas & Standar Keamanan Amana Care',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Ruang Bermain & Eksplorasi',
          description: 'Area bermain indoor yang luas dilengkapi mainan kayu non-toxic edukatif.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ruang Belajar & Kelas',
          description: 'Ruang kelas terang benderang dengan meja kursi ramah anak untuk kegiatan seni dan belajar.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'CCTV Online 24/7',
          description: 'Seluruh area bermain dipantau kamera CCTV dengan enkripsi aman yang dapat diakses orang tua.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'HEPA Air Purifier & AC',
          description: 'AC bersuhu stabil dan penjernih udara HEPA Filter untuk menjaga kualitas udara.',
        },
      ],
    },
  ],
}

const areas = [
  {
    title: 'Ruang Bermain & Eksplorasi',
    desc: 'Area bermain indoor yang luas dilengkapi dengan mainan kayu non-toxic edukatif untuk merangsang motorik halus dan kasar anak.',
    img: '/images/facility-classroom.webp',
  },
  {
    title: 'Ruang Belajar & Kelas',
    desc: 'Ruang kelas terang benderang dengan meja kursi ramah anak untuk kegiatan seni, kerajinan tangan, dan belajar terstruktur.',
    img: '/images/preschool-classroom.webp',
  },
]

const safetyProtocols = [
  { icon: ShieldCheck, title: 'CCTV Online 24/7', desc: 'Seluruh area bermain dipantau kamera CCTV dengan enkripsi aman yang dapat diakses orang tua kapan saja.' },
  { icon: Wind, title: 'HEPA Air Purifier & AC', desc: 'AC bersuhu stabil tersedia di seluruh ruangan untuk kenyamanan si kecil. Khusus di ruang kelas dan kamar tidur, dilengkapi juga penjernih udara HEPA Filter untuk menjaga kualitas udara tetap bersih di area istirahat dan belajar.' },
  { icon: Sparkles, title: 'Disinfeksi Harian', desc: 'Semua mainan dan perabotan dibersihkan dengan cairan disinfektan ramah anak (food grade) setiap hari.' },
  { icon: HeartHandshake, title: 'Proteksi Childproof', desc: 'Perabotan tumpul, pagar pengaman tangga, karpet anti-slip di kamar mandi, dan pelindung sudut anak tangga untuk melindungi si kecil di setiap langkahnya.' },
]

export default function Fasilitas() {
  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fasilitasJsonLd) }}
      />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-fasilitas.jpg"
            alt="Tur Fasilitas premium Amana Care Bintaro"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <ScrollReveal direction="up">
            <span className={styles.heroBadge}>🏡 Tur Fasilitas</span>
            <h1 className="heading-1" style={{ color: 'var(--color-white)' }}>
              Tur Fasilitas Kami
            </h1>
            <p className={styles.heroSubtitle}>
              Setiap sudut di Amana Care dirancang khusus dengan mengutamakan aspek keamanan, kebersihan,
              dan kenyamanan optimal si kecil serta produktivitas Anda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Areas List */}
      <section className="section">
        <div className="container">
          <div className={styles.areas}>
            {areas.map((area, i) => (
              <ScrollReveal key={area.title} direction="up" delay={i * 80}>
                <div className={`${styles.areaCard} ${i % 2 === 1 ? styles.areaInverse : ''}`}>
                  <div className={styles.areaVisual}>
                    <Image
                      src={area.img}
                      alt={area.title}
                      width={500}
                      height={340}
                      style={{ width: '100%', height: 'auto' }}
                      className="img-rounded"
                      priority={i === 0}
                    />
                  </div>
                  <div className={styles.areaContent}>
                    <span className={styles.areaIndex}>0{i + 1}</span>
                    <h3 className="heading-3">{area.title}</h3>
                    <p className={styles.areaDesc}>{area.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className={`section ${styles.safetySection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">🛡️ Standar Keamanan</span>
              <h2 className="heading-2">Protokol Kebersihan &amp; Keamanan</h2>
              <p className={styles.sectionSubtitle}>
                Bagi kami, keselamatan dan kesehatan anak Anda adalah prioritas mutlak yang tidak bisa ditawar.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            {safetyProtocols.map((protocol, i) => {
              const Icon = protocol.icon
              return (
                <ScrollReveal key={protocol.title} direction="up" delay={i * 80}>
                  <div className={`card ${styles.safetyCard}`}>
                    <div className={styles.safetyIcon}>
                      <Icon size={24} color="var(--color-primary-dark)" />
                    </div>
                    <div>
                      <h3 className={styles.safetyTitle}>{protocol.title}</h3>
                      <p className={styles.safetyDesc}>{protocol.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={`section-sm ${styles.ctaSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaCardTitle}>Ingin melihat langsung fasilitas kami?</h3>
              <p className={styles.ctaCardText}>
                Hubungi kami untuk mengatur jadwal kunjungan (site visit) secara langsung ke lokasi kami di Bintaro Sektor 7.
              </p>
              <FasilitasTrackedCTA />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
