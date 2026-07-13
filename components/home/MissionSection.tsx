import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './MissionSection.module.css'

export default function MissionSection() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="mission-heading">
      {/* Background blob */}
      <div className={styles.blob} aria-hidden="true" />

      <div className="container">
        <div className={styles.grid}>
          {/* Left: Quote */}
          <ScrollReveal direction="left" delay={100}>
            <div className={styles.quoteBlock}>
              <div className={styles.quoteMark} aria-hidden="true">"</div>
              <blockquote className={styles.quote} id="mission-heading">
                Amana artinya amanah — dan kami memegang amanah itu sepenuh hati.
              </blockquote>
              <div className={styles.divider} />
              <cite className={styles.author}>— Tim Amana Care, Bintaro</cite>
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal direction="right" delay={200}>
            <div className={styles.content}>
              <span className="section-label">🌱 Misi Kami</span>
              <h2 className={`heading-2 ${styles.heading}`}>
                Kami hadir untuk mendampingi tumbuh kembang si kecil
              </h2>
              <p className={styles.text}>
                Amana Care lahir dari keyakinan bahwa setiap anak berhak mendapatkan lingkungan yang aman,
                menyenangkan, dan stimulatif. Kami bukan sekadar daycare — kami adalah mitra terpercaya
                bagi para orang tua yang aktif berkarya.
              </p>
              <p className={styles.text}>
                Dengan pendekatan holistik yang memperhatikan perkembangan fisik, kognitif, emosional,
                dan sosial, setiap hari di Amana Care dirancang menjadi pengalaman tumbuh yang bermakna
                bagi anak Anda.
              </p>

              <div className={styles.values}>
                {[
                  { icon: '💛', label: 'Amanah', desc: 'Dipercaya sepenuh hati' },
                  { icon: '🤝', label: 'Kasih', desc: 'Penuh cinta & perhatian' },
                  { icon: '🌱', label: 'Tumbuh', desc: 'Berkembang setiap hari' },
                  { icon: '🎨', label: 'Kreatif', desc: 'Eksplorasi tanpa batas' },
                ].map((v) => (
                  <div key={v.label} className={styles.value}>
                    <span className={styles.valueIcon}>{v.icon}</span>
                    <div>
                      <p className={styles.valueName}>{v.label}</p>
                      <p className={styles.valueDesc}>{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
