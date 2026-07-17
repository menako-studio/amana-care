import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      aria-label="Hero — Amana Care Daycare & Working Space Bintaro"
    >
      {/* Decorative SVG Shapes */}
      <div className={styles.shapes} aria-hidden="true">
        <div className={`${styles.shape} ${styles.shapeCircle1}`} />
        <div className={`${styles.shape} ${styles.shapeCircle2}`} />
        <div className={`${styles.shape} ${styles.shapeStar}`}>
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M85.8 106.3C81.5 108.8 76.5 109 72.2 107.5C71.4 107.2 70.5 107.4 69.9 108.1C66.9 111.6 62.5 113.8 57.5 113.8C52.5 113.8 48.1 111.6 45.1 108.1C44.6 107.4 43.6 107.2 42.8 107.5C38.5 109 33.5 108.8 29.2 106.3C24.9 103.8 22.2 99.6 21.4 95.1C21.2 94.2 20.5 93.5 19.7 93.4C15.1 92.6 11 89.8 8.5 85.5C6 81.2 5.7 76.2 7.3 71.9C7.6 71.1 7.3 70.2 6.7 69.6C3.1 66.7 0.9 62.2 0.9 57.2C0.9 52.3 3.1 47.8 6.7 44.8C7.3 44.3 7.6 43.4 7.3 42.6C5.7 38.2 6 33.2 8.5 28.9C11 24.6 15.1 21.9 19.7 21.1C20.5 20.9 21.2 20.3 21.4 19.4C22.2 14.9 24.9 10.7 29.2 8.2C33.5 5.7 38.5 5.4 42.8 7C43.6 7.3 44.6 7.1 45.1 6.4C48.1 2.9 52.5 0.6 57.5 0.6C62.5 0.6 66.9 2.9 69.9 6.4C70.5 7.1 71.4 7.3 72.2 7C76.5 5.4 81.5 5.7 85.8 8.2C90.1 10.7 92.9 14.9 93.7 19.4C93.8 20.3 94.5 20.9 95.3 21.1C99.9 21.9 104.1 24.6 106.5 28.9C109 33.2 109.3 38.2 107.7 42.6C107.4 43.4 107.7 44.3 108.3 44.8C111.9 47.8 114.1 52.3 114.1 57.2C114.1 62.2 111.9 66.7 108.3 69.6C107.7 70.2 107.4 71.1 107.7 71.9C109.3 76.2 109 81.2 106.5 85.5C104.1 89.8 99.9 92.6 95.3 93.4C94.5 93.5 93.8 94.2 93.7 95.1C92.9 99.6 90.1 103.8 85.8 106.3Z" fill="#EF8C8C" opacity="0.35" />
          </svg>
        </div>
        <div className={`${styles.shape} ${styles.shapeDot1}`} />
        <div className={`${styles.shape} ${styles.shapeDot2}`} />
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: Copy */}
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span>🌟</span>
            Bintaro Sektor 7 · Senin–Jumat 07–19 WIB
          </div>

          <h1 className={styles.heading}>
            <span className={styles.line1}>Tempat anak</span>
            <span className={styles.line2}>
              tumbuh,{' '}
              <span className={styles.accent}>&amp;</span>
            </span>
            <span className={styles.line3}>orang tua</span>
            <span className={styles.line4}>berkarya.</span>
          </h1>

          <p className={styles.subtext}>
            Daycare premium dengan <strong>CCTV realtime</strong>, laporan harian,
            dan skrining psikolog anak — plus <strong>working space</strong> nyaman untuk para orang tua.
          </p>

          <div className={styles.actions}>
            <Link
              href="/kontak"
              className="btn btn-primary btn-lg"
              id="hero-cta-daftar"
            >
              Daftar Sekarang 🎉
            </Link>
            <Link
              href="/tentang-kami"
              className="btn btn-outline btn-lg"
              id="hero-cta-learn"
            >
              Pelajari Lebih
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>0–6</span>
              <span className={styles.statLabel}>Tahun</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>12</span>
              <span className={styles.statLabel}>Jam/Hari</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>24/7</span>
              <span className={styles.statLabel}>CCTV</span>
            </div>
          </div>
        </div>

        {/* Right: Images */}
        <div className={styles.images}>
          <div className={`${styles.imgWrapper} ${styles.imgMain} animate-float`}>
            <Image
              src="/images/hero-children-play.png"
              alt="Anak-anak bermain dan belajar di Amana Care Bintaro"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 380px"
              className={styles.img}
            />
          </div>
          <div className={`${styles.imgWrapper} ${styles.imgSecond} animate-float-delayed`}>
            <Image
              src="/images/working-space.png"
              alt="Parents working space di Amana Care — nyaman dan produktif"
              fill
              sizes="(max-width: 768px) 60vw, 260px"
              className={styles.img}
              priority
            />
          </div>
          {/* Floating labels */}
          <div className={styles.floatTag1}>
            <span>📋</span> Daily Report
          </div>
          <div className={styles.floatTag2}>
            <span>📹</span> CCTV Realtime
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 20 1440 40V80H0V40Z" fill="var(--color-primary)" />
        </svg>
      </div>
    </section>
  )
}
