import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './GalleryPreview.module.css'

const photos = [
  { src: '/images/hero-children-play.png', alt: 'Anak-anak beraktivitas seni di Amana Care', span: 'tall' },
  { src: '/images/gallery-outdoor.png', alt: 'Bermain outdoor di area bermain Amana Care', span: 'wide' },
  { src: '/images/working-space.png', alt: 'Parents working space di Amana Care', span: 'normal' },
  { src: '/images/hero-daycare-room.png', alt: 'Ruang belajar Amana Care Bintaro', span: 'normal' },
  { src: '/images/hero-children-play.png', alt: 'Aktivitas kreativitas anak di Amana Care', span: 'normal' },
  { src: '/images/gallery-outdoor.png', alt: 'Kegiatan outdoor anak-anak Amana Care', span: 'tall' },
]

export default function GalleryPreview() {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="gallery-heading">
      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">📸 Galeri</span>
            <h2 className="heading-2" id="gallery-heading">
              Momen bersama di <span style={{ color: 'var(--color-primary)' }}>Amana Care</span>
            </h2>
            <p className={styles.subtitle}>
              Setiap hari adalah petualangan baru yang penuh tawa dan pembelajaran.
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {photos.map((photo, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 60}>
              <div className={`${styles.item} ${styles[`span${photo.span}`]}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={styles.img}
                />
                <div className={styles.overlay} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className={styles.cta}>
            <Link href="/galeri" className="btn btn-outline" id="gallery-lihat-semua">
              Lihat Semua Foto
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
