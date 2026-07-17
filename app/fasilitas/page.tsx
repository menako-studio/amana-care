import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Wind, HeartHandshake, Sparkles, AlertCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Fasilitas Kami',
  description: 'Jelajahi area bermain anak (play room), ruang belajar, ruang istirahat bersih, parents working space, dan protokol keamanan CCTV di Amana Care.',
}

const areas = [
  {
    title: 'Ruang Bermain & Eksplorasi',
    desc: 'Area bermain indoor yang luas dilengkapi dengan mainan kayu non-toxic edukatif untuk merangsang motorik halus dan kasar anak.',
    img: '/images/hero-children-play.png',
  },
  {
    title: 'Ruang Belajar & Kelas',
    desc: 'Ruang kelas terang benderang dengan meja kursi ramah anak untuk kegiatan seni, kerajinan tangan, dan belajar terstruktur.',
    img: '/images/hero-daycare-room.png',
  },
  {
    title: 'Ruang Istirahat Bersih',
    desc: 'Kamar tidur tenang ber-AC dengan kasur individual berseprai katun steril yang diganti berkala untuk kenyamanan tidur siang.',
    img: '/images/hero-daycare-room.png',
  },
  {
    title: 'Parents Working Space',
    desc: 'Ruang kerja premium khusus orang tua di lantai atas, dilengkapi dengan meja kerja ergonomis dan monitor pantau CCTV.',
    img: '/images/working-space.png',
  },
]

const safetyProtocols = [
  { icon: ShieldCheck, title: 'CCTV Online 24/7', desc: 'Seluruh area bermain dipantau kamera CCTV dengan enkripsi aman yang dapat diakses orang tua kapan saja.' },
  { icon: Wind, title: 'HEPA Air Purifier & AC', desc: 'Setiap ruangan dilengkapi penjernih udara HEPA filter dan AC bersuhu stabil untuk menjaga kualitas udara bersih.' },
  { icon: Sparkles, title: 'Disinfeksi Harian', desc: 'Semua mainan dan perabotan dibersihkan dengan cairan disinfektan ramah anak (food grade) setiap hari.' },
  { icon: HeartHandshake, title: 'Proteksi Childproof', desc: 'Perabotan tumpul, stop kontak terproteksi pengaman, dan lantai dilapisi matras bermain EVA tebal pencegah cedera.' },
]

export default function Fasilitas() {
  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-fasilitas.png"
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
              <Link href="/kontak" className="btn btn-primary btn-lg" id="fasilitas-cta-daftar">
                Jadwalkan Kunjungan 📍
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
