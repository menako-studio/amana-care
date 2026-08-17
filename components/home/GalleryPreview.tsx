'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './GalleryPreview.module.css'
import { trackCTAClick } from '@/lib/analytics'

const photos = [
  { 
    src: '/images/toddlers-sensory-orange-slices.webp', 
    alt: 'Aktivitas sensory play jeruk & air untuk stimulasi indera toddler di Amana Care', 
    span: 'tall',
    objectPosition: 'center 70%'
  },
  { 
    src: '/images/preschoolers-hospital-roleplay.webp', 
    alt: 'Keceriaan anak-anak bermain peran rumah sakit di ruang kelas Amana Care', 
    span: 'wide',
    objectPosition: 'center 25%'
  },
  { 
    src: '/images/assets/child_painting_handprint_craft_activity_table.jpg', 
    alt: 'Anak bangga menunjukkan karya seni lukis telapak tangan (handprint craft)', 
    span: 'normal',
    objectPosition: 'center 50%'
  },
  { 
    src: '/images/assets/preschool_girl_holding_blue_paper_cone_craft.jpg', 
    alt: 'Aktivitas melukis media kapas meningkatkan kreativitas & motorik halus anak', 
    span: 'normal',
    objectPosition: 'center 40%'
  },
  { 
    src: '/images/assets/toddler_finger_painting_colorful_paper_plates_art.webp', 
    alt: 'Eksplorasi bermain dan komunikasi anak-anak di area Amana Care Bintaro', 
    span: 'wide',
    objectPosition: 'center 70%'
  },
  { 
    src: '/images/daycare-learning-materials.webp', 
    alt: 'Fasilitas alat peraga edukatif, buku cerita, dan mainan stimulasi anak', 
    span: 'normal',
    objectPosition: 'center 60%'
  },
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
            <ScrollReveal
              key={i}
              direction="up"
              delay={i * 60}
              className={`${styles.item} ${styles[`span${photo.span}`]}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.img}
                style={{ objectPosition: photo.objectPosition }}
              />
              <div className={styles.overlay} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className={styles.cta}>
            <Link
              href="/galeri"
              className="btn btn-outline"
              id="gallery-lihat-semua"
              onClick={() => trackCTAClick('Lihat Semua Foto (Home Preview)', '/galeri', 'Home Gallery Preview')}
            >
              Lihat Semua Foto
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
