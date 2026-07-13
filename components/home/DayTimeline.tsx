import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './DayTimeline.module.css'

const schedule = [
  { time: '07:00', title: 'Kedatangan & Check-in', desc: 'Penyambutan si kecil oleh tim pengasuh, transisi pagi yang hangat.', color: '#00B4D8', emoji: '🌅' },
  { time: '08:00', title: 'Sarapan & Morning Circle', desc: 'Sarapan bergizi bersama, dilanjutkan circle time untuk memulai hari.', color: '#FFD166', emoji: '🍳' },
  { time: '09:30', title: 'Kegiatan Belajar', desc: 'Aktivitas pembelajaran terstruktur sesuai usia: sensorik, bahasa, atau kognitif.', color: '#EF8C8C', emoji: '📚' },
  { time: '11:00', title: 'Bermain Bebas', desc: 'Eksplorasi bebas di area bermain indoor maupun outdoor yang aman.', color: '#06D6A0', emoji: '🎪' },
  { time: '12:00', title: 'Makan Siang & Tidur Siang', desc: 'Makan siang bergizi, lalu istirahat siang yang nyaman.', color: '#B47CBA', emoji: '🍱' },
  { time: '14:30', title: 'Aktivitas Seni & Kreativitas', desc: 'Mewarnai, melukis, bercerita, atau bermain peran untuk kreativitas.', color: '#FFD166', emoji: '🎨' },
  { time: '16:00', title: 'Snack Sore', desc: 'Camilan sehat sore hari untuk mengisi kembali energi si kecil.', color: '#00B4D8', emoji: '🍎' },
  { time: '17:00', title: 'Outdoor Play', desc: 'Bermain di luar ruangan, melatih motorik kasar dan sosial anak.', color: '#EF8C8C', emoji: '🌳' },
  { time: '18:00', title: 'Wind Down', desc: 'Waktu tenang: membaca buku, musik lembut, atau aktivitas calming.', color: '#06D6A0', emoji: '🌙' },
  { time: '19:00', title: 'Penjemputan', desc: 'Laporan harian diberikan kepada orang tua saat penjemputan.', color: '#00B4D8', emoji: '👋' },
]

export default function DayTimeline() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="timeline-heading">
      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">🕐 Jadwal Harian</span>
            <h2 className="heading-2" id="timeline-heading">
              Sehari di <span style={{ color: 'var(--color-primary)' }}>Amana Care</span>
            </h2>
            <p className={styles.subtitle}>
              Setiap momen dirancang dengan cermat untuk mendukung tumbuh kembang optimal si kecil.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />

          {schedule.map((item, i) => (
            <ScrollReveal key={item.time} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 60}>
              <div className={`${styles.item} ${i % 2 === 0 ? styles.itemLeft : styles.itemRight}`}>
                <div className={styles.dot} style={{ background: item.color }} aria-hidden="true">
                  <span className={styles.dotEmoji}>{item.emoji}</span>
                </div>
                <div className={styles.card}>
                  <span className={styles.time}>{item.time} WIB</span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
