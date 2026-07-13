'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './TestimonialsCarousel.module.css'

const testimonials = [
  {
    name: 'Ibu Sari Dewi',
    role: 'Ibu dari Rafi (2,5 tahun)',
    text: 'Amana Care benar-benar seperti rumah kedua untuk Rafi. Laporan hariannya sangat detail — dari makan, tidur, sampai foto aktivitas. Saya bisa kerja tenang karena CCTV-nya bisa saya pantau kapan saja!',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Bapak Dodi Santoso',
    role: 'Ayah dari Aira (3 tahun)',
    text: 'Working space-nya nyaman banget, WiFi-nya kencang dan ada colokan di mana-mana. Saya bisa meeting sambil sesekali lihat Aira main di monitor CCTV. Konsep ini yang saya cari-cari!',
    rating: 5,
    avatar: '👨',
  },
  {
    name: 'Ibu Nina Kusuma',
    role: 'Ibu dari Zaky (4 tahun)',
    text: 'Laporan harian yang dikirim setiap sore membantu kami memantau perkembangan Zaky. Skrining psikolog anaknya juga sangat berguna — kami jadi tahu milestone apa yang perlu distimulasi lebih.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Ibu Retno & Bapak Budi',
    role: 'Orang tua dari Caca (1,5 tahun)',
    text: 'Awalnya khawatir ninggalin Caca yang masih kecil, tapi tim Amana Care sangat profesional dan penuh kasih. Caca sekarang bahkan lebih semangat pergi ke Amana daripada di rumah!',
    rating: 5,
    avatar: '👨‍👩‍👧',
  },
]

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative quote */}
      <div className={styles.bigQuote} aria-hidden="true">"</div>

      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className={styles.label}>❤️ Kata Mereka</span>
            <h2 className="heading-2" id="testimonials-heading" style={{ color: 'var(--color-white)' }}>
              Kepercayaan orang tua<br />adalah kebanggaan kami
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.carousel} role="region" aria-label="Testimoni orang tua">
          <div className={styles.slide} key={current}>
            <div className={styles.quoteIcon} aria-hidden="true">"</div>
            <p className={styles.text}>{testimonials[current].text}</p>

            <div className={styles.stars} aria-label={`${testimonials[current].rating} bintang dari 5`}>
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={18} fill="#FFD166" color="#FFD166" aria-hidden="true" />
              ))}
            </div>

            <div className={styles.author}>
              <span className={styles.avatar}>{testimonials[current].avatar}</span>
              <div>
                <p className={styles.name}>{testimonials[current].name}</p>
                <p className={styles.role}>{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button
              onClick={prev}
              className={styles.arrowBtn}
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.dots} role="tablist">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimoni ${i + 1}`}
                  className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>

            <button
              onClick={next}
              className={styles.arrowBtn}
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
