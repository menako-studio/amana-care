import styles from './TrustTicker.module.css'

const items = [
  { icon: '📋', text: 'Daily Report' },
  { icon: '📹', text: 'Realtime CCTV' },
  { icon: '🧠', text: 'Psikolog Anak' },
  { icon: '👶', text: 'Usia 0–6 Tahun' },
  { icon: '⏰', text: '07.00–19.00 WIB' },
  { icon: '📍', text: 'Bintaro Sektor 7' },
  { icon: '🏡', text: 'Working Space' },
  { icon: '✅', text: 'Terpercaya' },
]

export default function TrustTicker() {
  const doubledItems = [...items, ...items, ...items]

  return (
    <section className={styles.section} aria-label="Keunggulan Amana Care">
      <div className={styles.track}>
        <div className={styles.inner}>
          {doubledItems.map((item, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">{item.icon}</span>
              <span className={styles.text}>{item.text}</span>
              <span className={styles.dot} aria-hidden="true">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
