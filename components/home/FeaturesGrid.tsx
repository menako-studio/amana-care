import { FileText, Video, Brain, Laptop, Shield, Heart } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './FeaturesGrid.module.css'

const features = [
  {
    icon: FileText,
    color: '#FFD166',
    bg: 'rgba(255, 209, 102, 0.15)',
    title: 'Laporan Harian',
    desc: 'Update lengkap aktivitas, makan, tidur, dan perkembangan si kecil — dikirim setiap hari via WhatsApp.',
  },
  {
    icon: Video,
    color: '#00B4D8',
    bg: 'rgba(0, 180, 216, 0.12)',
    title: 'CCTV Real-time',
    desc: 'Pantau si kecil kapan saja dan dari mana saja melalui akses CCTV yang aman khusus untuk orang tua.',
  },
  {
    icon: Brain,
    color: '#EF8C8C',
    bg: 'rgba(239, 140, 140, 0.15)',
    title: 'Psikolog Anak',
    desc: 'Skrining tumbuh kembang berkala oleh psikolog anak bersertifikat untuk memantau perkembangan optimal.',
  },
  {
    icon: Laptop,
    color: '#06D6A0',
    bg: 'rgba(6, 214, 160, 0.12)',
    title: 'Working Space',
    desc: 'Ruang kerja nyaman dengan WiFi cepat dan AC — tetap produktif sambil si kecil bermain di sampingmu.',
  },
  {
    icon: Shield,
    color: '#B47CBA',
    bg: 'rgba(180, 124, 186, 0.15)',
    title: 'Lingkungan Aman',
    desc: 'Fasilitas terstandarisasi, bersih, dan aman. Protokol kesehatan ketat untuk kenyamanan seluruh anak.',
  },
  {
    icon: Heart,
    color: '#EF8C8C',
    bg: 'rgba(239, 140, 140, 0.12)',
    title: 'Penuh Kasih',
    desc: 'Tim pengasuh terlatih dan berdedikasi yang memperlakukan setiap anak dengan kasih sayang tulus.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="features-heading">
      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">✨ Mengapa Amana Care</span>
            <h2 className="heading-2" id="features-heading">
              Semua yang si kecil butuhkan,<br />
              <span style={{ color: 'var(--color-primary)' }}>ada di sini.</span>
            </h2>
            <p className={styles.subtitle}>
              Dirancang untuk memberikan pengalaman terbaik bagi anak dan ketenangan pikiran bagi orang tua.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <ScrollReveal key={feat.title} direction="up" delay={i * 80}>
                <div className={styles.card}>
                  <div
                    className={`icon-container ${styles.iconBox}`}
                    style={{ background: feat.bg }}
                  >
                    <Icon size={24} color={feat.color} />
                  </div>
                  <h3 className={styles.cardTitle}>{feat.title}</h3>
                  <p className={styles.cardDesc}>{feat.desc}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
