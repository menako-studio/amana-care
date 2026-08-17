'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './TestimonialsCarousel.module.css'
import { trackCarouselInteraction } from '@/lib/analytics'

const testimonials = [
  {
    name: 'Fika',
    role: 'Orang tua dari Alma',
    text: 'Daycare yang rekomen banget untuk sekitaran area bintaro, attention to detail, daily activity/progress report, caregiver & teachernya ramah, berpengalaman di bidangnya dan aktivitasnya terstruktur, dari segi fasilitas full ac & cctv, dari segi waktu 7am to 7pm 👌🏻💯',
    rating: 5,
    avatar: '👩',
  },
  {
    name: 'Like',
    role: 'Orang tua dari Naka',
    text: 'No doubt for giving 5 stars! Udah setahun lebih anakku di Amana, dan sejauh ini ga pernah kepikiran untuk pindah saking terbantunya… tiap hari selalu dikirim progress report lengkap sama foto/video. Bonusnya ada cek tumbuh kembang dan dental check juga. Highly recommended!',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Putri',
    role: 'Orang tua dari Andaru',
    text: 'Yang paling suka, semua Miss disini sabar dan peduli sama anak. Ada pembagian peran teacher dan caregiver. Jadi dalam sehari anak bakal dihandle oleh teacher+caregiver. Lalu jumlah anak dibatasi, jadi suasananya lebih kondusif dan perhatian ke anak lebih personal.',
    rating: 5,
    avatar: '👩',
  },
]

export default function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    trackCarouselInteraction('testimonials', emblaApi.selectedScrollSnap(), 'prev')
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    trackCarouselInteraction('testimonials', emblaApi.selectedScrollSnap(), 'next')
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)
    trackCarouselInteraction('testimonials', index, 'dot')
  }, [emblaApi])

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
