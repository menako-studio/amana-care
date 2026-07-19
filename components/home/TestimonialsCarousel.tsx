'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setTimeout(() => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }, 0)

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    // Autoplay logic
    const timer = setInterval(() => {
      emblaApi.scrollNext()
    }, 5500)

    return () => {
      clearInterval(timer)
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative quote */}
      <div className={styles.bigQuote} aria-hidden="true">&ldquo;</div>

      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className={styles.label}>❤️ Kata Mereka</span>
            <h2 className="heading-2" id="testimonials-heading" style={{ color: 'var(--color-white)' }}>
              Kepercayaan orang tua<br />adalah kebanggaan kami
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.carouselContainer}>
          {/* Embla Viewport */}
          <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.container}>
              {testimonials.map((item, index) => (
                <div className={styles.slide} key={index}>
                  <div className={styles.slideContent}>
                    <div className={styles.quoteIcon} aria-hidden="true">&ldquo;</div>
                    <p className={styles.text}>{item.text}</p>

                    <div className={styles.stars} aria-label={`${item.rating} bintang dari 5`}>
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={18} fill="#FFD166" color="#FFD166" aria-hidden="true" />
                      ))}
                    </div>

                    <div className={styles.author}>
                      <span className={styles.avatar}>{item.avatar}</span>
                      <div>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.role}>{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button
              onClick={scrollPrev}
              className={styles.arrowBtn}
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft size={24} />
            </button>

            <div className={styles.dots} role="tablist">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={index === selectedIndex}
                  aria-label={`Testimoni ${index + 1}`}
                  className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
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
