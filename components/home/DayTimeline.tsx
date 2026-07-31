import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './DayTimeline.module.css'

const schedule = [
  { time: '07:00', title: 'Kehadiran & Mandi Pagi', desc: 'Penyambutan hangat si kecil, dilanjutkan dengan persiapan dan mandi pagi agar segar memulai hari.', color: '#00B4D8', emoji: '🌅' },
  { time: '08:00', title: 'Sarapan', desc: 'Sarapan bergizi bersama di Playroom lantai 1.', color: '#FFD166', emoji: '🍳' },
  { time: '08:30', title: 'Morning Activity & Snack', desc: 'Aktivitas pagi yang terstruktur dan menyenangkan di Classroom, diselingi snack time.', color: '#EF8C8C', emoji: '📚' },
  { time: '12:00', title: 'Makan Siang', desc: 'Makan siang bergizi bersama teman-teman, dilanjutkan bersih-bersih persiapan tidur.', color: '#06D6A0', emoji: '🍱' },
  { time: '13:00', title: 'Tidur Siang', desc: 'Istirahat dan tidur siang yang nyaman di kamar tidur.', color: '#B47CBA', emoji: '😴' },
  { time: '15:00', title: 'Free Play & Snack', desc: 'Bermain bebas dan menikmati camilan sore hari.', color: '#FFD166', emoji: '🎪' },
  { time: '15:30', title: 'Mandi & Makan Sore', desc: 'Mandi sore agar kembali segar, dilanjutkan dengan makan sore.', color: '#00B4D8', emoji: '🛁' },
  { time: '17:30', title: 'Free Play & Penjemputan', desc: 'Waktu bermain bebas, persiapan kepulangan, dan penjemputan oleh orang tua.', color: '#06D6A0', emoji: '👋' },
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
