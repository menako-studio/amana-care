import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ShieldAlert, Award, Coffee, Wifi, Monitor, UserCheck } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Layanan Kami',
  description: 'Temukan pilihan layanan Amana Care: Daycare premium harian/bulanan untuk anak usia 0–6 tahun dan Parents Co-Working Space terintegrasi.',
}

const daycareInclusions = [
  'Makan Utama 3x sehari (sehat, bergizi & higienis)',
  'Snack & buah segar sore hari',
  'Laporan perkembangan harian (makan, tidur, toilet)',
  'Skrining berkala oleh Psikolog Anak',
  'Dokumentasi foto & video aktivitas',
  'Akses CCTV realtime untuk orang tua',
]

const workspaceFeatures = [
  { icon: Wifi, title: 'WiFi Cepat', desc: 'Koneksi internet serat optik berkecepatan tinggi tanpa hambatan.' },
  { icon: Coffee, title: 'Kopi & Teh', desc: 'Free flow minuman hangat untuk menemani hari produktif Anda.' },
  { icon: Monitor, title: 'Monitor CCTV', desc: 'Layar monitor khusus terpasang untuk memantau si kecil bermain secara realtime.' },
  { icon: UserCheck, title: 'Suasana Tenang', desc: 'Area kerja kedap suara terpisah dari ruang bermain anak.' },
]

export default function Layanan() {
  return (
    <div className={styles.wrapper}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal direction="up">
            <span className="section-label">📋 Program Layanan</span>
            <h1 className="heading-1">Layanan Kami</h1>
            <p className={styles.heroText}>
              Amana Care menawarkan perpaduan unik antara pengasuhan anak usia dini berkualitas tinggi
              dan ruang kerja produktif bagi orang tua bekerja.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Daycare Section */}
      <section className={`section ${styles.daycareSection}`} id="daycare">
        <div className="container">
          <div className={styles.grid}>
            {/* Daycare Details */}
            <ScrollReveal direction="left">
              <div className={styles.detailsSide}>
                <span className={styles.badge}>Daycare</span>
                <h2 className="heading-2">Penitipan Anak Premium</h2>
                <p className={styles.p}>
                  Layanan daycare kami dirancang secara profesional untuk kelompok usia <strong>0 hingga 6 tahun</strong>.
                  Didukung oleh kurikulum pembelajaran berbasis bermain yang berfokus pada perkembangan sensorik,
                  motorik, kognitif, serta karakter sosio-emosional anak.
                </p>

                <div className={styles.inclusionsCard}>
                  <h3 className={styles.incTitle}>Sudah Termasuk:</h3>
                  <ul className={styles.incList}>
                    {daycareInclusions.map((item) => (
                      <li key={item} className={styles.incItem}>
                        <Check size={18} className={styles.incIcon} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.action}>
                  <Link href="/kontak" className="btn btn-primary" id="layanan-cta-daycare">
                    Tanyakan Biaya Daycare
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Daycare Visual */}
            <ScrollReveal direction="right" delay={100}>
              <div className={styles.visualSide}>
                <div className={styles.imgWrapper}>
                  <Image
                    src="/images/hero-children-play.png"
                    alt="Anak-anak daycare belajar dengan gembira di Amana Care Bintaro"
                    width={500}
                    height={400}
                    className="img-rounded"
                  />
                </div>
                <div className={styles.floatingCard}>
                  <span className={styles.flEmoji}>⏰</span>
                  <div>
                    <p className={styles.flTitle}>Jam Operasional</p>
                    <p className={styles.flText}>Senin–Jumat, 07.00–19.00 WIB</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Daycare Program Videos Section */}
      <section className={`section ${styles.videoProgramSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">🎬 Program Unggulan</span>
              <h2 className="heading-2">Kurikulum &amp; Stimulasi dalam Aksi</h2>
              <p className={styles.sectionSubtitle}>
                Lihat langsung bagaimana si kecil mengeksplorasi dunia belajar dan bermain di Amana Care.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.videoGrid}>
            {/* Montessori Video */}
            <ScrollReveal direction="up" delay={50}>
              <div className={styles.videoProgramCard}>
                <div className={styles.videoCardWrapper}>
                  <video 
                    src="/videos/amanacare-curriculum-montessori-practical-life.webm"
                    className={styles.programVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                  <span className={styles.videoBadge}>Montessori Curriculum</span>
                </div>
                <div className={styles.videoCardContent}>
                  <h3 className={styles.videoCardTitle}>Montessori Practical Life</h3>
                  <p className={styles.videoCardDesc}>
                    Melatih kemandirian, konsentrasi, koordinasi fisik, dan rasa percaya diri anak dengan menyiram tanaman, merapikan mainan, serta aktivitas motorik halus lainnya.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Sensory Play Video */}
            <ScrollReveal direction="up" delay={150}>
              <div className={styles.videoProgramCard}>
                <div className={styles.videoCardWrapper}>
                  <video 
                    src="/videos/amanacare-program-baby-sensory-play.webm"
                    className={styles.programVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                  <span className={styles.videoBadge}>Baby Stimulation</span>
                </div>
                <div className={styles.videoCardContent}>
                  <h3 className={styles.videoCardTitle}>Baby Sensory Play</h3>
                  <p className={styles.videoCardDesc}>
                    Eksplorasi bertekstur, warna-warni, suara, dan stimulasi taktil terarah yang aman bagi bayi untuk merangsang hubungan sinapsis otak di usia emas tumbuh kembangnya.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parents Working Space Section */}
      <section className="section" id="working-space">
        <div className="container">
          <div className={styles.gridInverse}>
            {/* Workspace Details */}
            <ScrollReveal direction="right">
              <div className={styles.detailsSide}>
                <span className={`${styles.badge} ${styles.badgeYellow}`}>Parents Workspace</span>
                <h2 className="heading-2">Parents Working Space</h2>
                <p className={styles.p}>
                  Kami memahami kebutuhan para orang tua bekerja untuk tetap produktif. Di lantai terpisah, kami
                  menyediakan Parents Working Space yang tenang, nyaman, dan terintegrasi penuh. Anda tetap bisa memantau
                  aktivitas si kecil secara berkala tanpa mengganggu fokus kerja Anda.
                </p>

                <div className={styles.workspaceGrid}>
                  {workspaceFeatures.map((feat) => {
                    const Icon = feat.icon
                    return (
                      <div key={feat.title} className={styles.wsFeat}>
                        <div className={styles.wsIconBox}>
                          <Icon size={20} color="var(--color-primary)" />
                        </div>
                        <div>
                          <h4 className={styles.wsFeatTitle}>{feat.title}</h4>
                          <p className={styles.wsFeatDesc}>{feat.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className={styles.action}>
                  <Link href="/kontak" className="btn btn-outline" id="layanan-cta-workspace">
                    Pesan Ruang Kerja
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Workspace Visual */}
            <ScrollReveal direction="left" delay={100}>
              <div className={styles.visualSide}>
                <div className={styles.imgWrapper}>
                  <Image
                    src="/images/working-space.png"
                    alt="Parents co-working space di Bintaro Sektor 7"
                    width={500}
                    height={400}
                    className="img-rounded"
                  />
                </div>
                <div className={`${styles.floatingCard} ${styles.flCardYellow}`}>
                  <span className={styles.flEmoji}>☕</span>
                  <div>
                    <p className={styles.flTitle}>Free Flow Refreshment</p>
                    <p className={styles.flText}>Coffee, tea & snacks included</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Callout */}
      <section className={`section-sm ${styles.ctaSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaCardTitle}>Butuh penyesuaian khusus atau informasi jadwal?</h3>
              <p className={styles.ctaCardText}>
                Hubungi kami sekarang untuk berkonsultasi mengenai paket daycare harian/bulanan yang paling sesuai untuk si kecil.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Amana%20Care!%20Saya%20ingin%20tahu%20lebih%20banyak%20tentang%20pilihan%20layanan."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-lg"
              >
                Hubungi Tim Layanan Kami 💬
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
