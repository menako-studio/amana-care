'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './page.module.css'

const categories = [
  { id: 'semua', label: 'Semua' },
  { id: 'aktivitas', label: 'Aktivitas Belajar' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'event', label: 'Event & Hari Spesial' },
]

const galleryItems = [
  { src: '/images/hero-children-play.png', alt: 'Anak melukis mewarnai bersama pengasuh', category: 'aktivitas', tag: 'Aktivitas Seni' },
  { src: '/images/gallery-outdoor.png', alt: 'Bermain perosotan di rumput sintetis outdoor', category: 'aktivitas', tag: 'Outdoor Play' },
  { src: '/images/working-space.png', alt: 'Suasana parents working space nyaman bersih', category: 'fasilitas', tag: 'Co-Working' },
  { src: '/images/hero-daycare-room.png', alt: 'Ruang kelas toddlers dengan loker mainan rapi', category: 'fasilitas', tag: 'Ruang Belajar' },
  { src: '/images/hero-children-play.png', alt: 'Sensory play dengan manik-manik air warna-warni', category: 'aktivitas', tag: 'Sensory Play' },
  { src: '/images/gallery-outdoor.png', alt: 'Perayaan Batik Day memakai baju adat bersama', category: 'event', tag: 'Hari Batik' },
  { src: '/images/hero-daycare-room.png', alt: 'Area tidur siang dengan kasur personal bersih', category: 'fasilitas', tag: 'Ruang Istirahat' },
  { src: '/images/working-space.png', alt: 'Monitor CCTV terpasang di area kerja orang tua', category: 'fasilitas', tag: 'CCTV Monitor' },
  { src: '/images/gallery-outdoor.png', alt: 'Merayakan kemerdekaan 17 Agustus lomba makan kerupuk', category: 'event', tag: '17 Agustusan' },
]

export default function Galeri() {
  const [filter, setFilter] = useState('semua')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const filteredItems = filter === 'semua' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <div className={styles.wrapper}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className="container">
          <ScrollReveal direction="up">
            <span className="section-label">📸 Dokumentasi</span>
            <h1 className="heading-1">Galeri Momen</h1>
            <p className={styles.heroText}>
              Kumpulan dokumentasi keceriaan aktivitas harian, fasilitas penunjang,
              dan berbagai acara perayaan hari besar di Amana Care Bintaro.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.filterSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.tabs} role="tablist" aria-label="Kategori foto galeri">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={filter === cat.id}
                  className={`${styles.tab} ${filter === cat.id ? styles.tabActive : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className={styles.grid}>
            {filteredItems.map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 50}>
                <div className={styles.item} onClick={() => setLightbox({ src: item.src, alt: item.alt })}>
                  <div className={styles.imgWrapper}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.img}
                    />
                    <div className={styles.overlay}>
                      <ZoomIn className={styles.zoomIcon} size={28} />
                      <span className={styles.tag}>{item.tag}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Native Lightbox Overlay */}
      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Detail foto galeri"
        >
          <button className={styles.closeBtn} onClick={() => setLightbox(null)} aria-label="Tutup foto">
            <X size={32} />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImgWrapper}>
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="90vw"
                className={styles.lightboxImg}
                priority
              />
            </div>
            <p className={styles.lightboxCaption}>{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}
