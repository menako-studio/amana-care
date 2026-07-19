'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ZoomIn, Calendar, Users, Award, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import VideoReels from '@/components/home/VideoReels'
import styles from './page.module.css'
import { trackGalleryFilter, trackGalleryZoom } from '@/lib/analytics'

const categories = [
  { id: 'semua', label: 'Semua Kategori' },
  { id: 'aktivitas', label: 'Aktivitas Belajar' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'event', label: 'Event & Hari Spesial' },
]

const galleryItems = [
  { src: '/images/hero-galeri.png', alt: 'Anak-anak melukis mewarnai bersama pengasuh di ruang seni', category: 'aktivitas', tag: 'Aktivitas Seni' },
  { src: '/images/gallery-outdoor.png', alt: 'Bermain perosotan di rumput sintetis outdoor', category: 'aktivitas', tag: 'Outdoor Play' },
  { src: '/images/hero-layanan.png', alt: 'Suasana parents working space terintegrasi dengan daycare', category: 'fasilitas', tag: 'Co-Working' },
  { src: '/images/hero-fasilitas.png', alt: 'Ruang kelas toddlers dengan loker mainan rapi dan bersih', category: 'fasilitas', tag: 'Ruang Belajar' },
  { src: '/images/hero-children-play.png', alt: 'Sensory play dengan manik-manik air warna-warni', category: 'aktivitas', tag: 'Sensory Play' },
  { src: '/images/hero-kontak.png', alt: 'Lobi resepsionis penerimaan anak yang aesthetic dan nyaman', category: 'fasilitas', tag: 'Lobi Penerimaan' },
  { src: '/images/hero-daycare-room.png', alt: 'Area tidur siang dengan kasur personal bersih', category: 'fasilitas', tag: 'Ruang Istirahat' },
  { src: '/images/working-space.png', alt: 'Monitor CCTV terpasang di area kerja orang tua', category: 'fasilitas', tag: 'CCTV Monitor' },
  { src: '/images/gallery-outdoor.png', alt: 'Merayakan kemerdekaan 17 Agustus lomba makan kerupuk', category: 'event', tag: '17 Agustusan' },
]

export default function Galeri() {
  const [mediaType, setMediaType] = useState<'foto' | 'video'>('foto')
  const [filter, setFilter] = useState('semua')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const filteredItems = filter === 'semua' ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <div className={styles.wrapper}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-galeri.png"
            alt="Galeri Dokumentasi Amana Care Bintaro"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <ScrollReveal direction="up">
            <span className={styles.heroBadge}>📸 Dokumentasi</span>
            <h1 className="heading-1" style={{ color: 'var(--color-white)' }}>
              Galeri Momen
            </h1>
            <p className={styles.heroSubtitle}>
              Kumpulan dokumentasi keceriaan aktivitas harian, fasilitas penunjang,
              dan berbagai acara perayaan hari besar di Amana Care Bintaro.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Tab Switcher */}
      <section className={styles.mediaSelectorSection}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.mediaTypeSelector}>
              <button 
                className={`${styles.mediaTypeBtn} ${mediaType === 'foto' ? styles.mediaTypeBtnActive : ''}`}
                onClick={() => setMediaType('foto')}
              >
                📸 Galeri Foto
              </button>
              <button 
                className={`${styles.mediaTypeBtn} ${mediaType === 'video' ? styles.mediaTypeBtnActive : ''}`}
                onClick={() => setMediaType('video')}
              >
                🎥 Video Reels
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Media Content */}
      <section className={styles.filterSection}>
        <div className="container">
          {mediaType === 'foto' ? (
            <>
              <ScrollReveal direction="up">
                <div className={styles.tabs} role="tablist" aria-label="Kategori foto galeri">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      role="tab"
                      aria-selected={filter === cat.id}
                      className={`${styles.tab} ${filter === cat.id ? styles.tabActive : ''}`}
                      onClick={() => {
                        setFilter(cat.id)
                        trackGalleryFilter(cat.label)
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </ScrollReveal>

              {/* Photo Grid */}
              <div className={styles.grid}>
                {filteredItems.map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 50}>
                    <div className={styles.item} onClick={() => {
                        setLightbox({ src: item.src, alt: item.alt })
                        trackGalleryZoom(item.src, item.alt)
                      }}>
                      <div className={styles.imgWrapper}>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className={styles.img}
                          priority={i < 3}
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
            </>
          ) : (
            <div className={styles.reelsWrapper}>
              <VideoReels showTitle={false} />
            </div>
          )}
        </div>
      </section>

      {/* Featured YouTube Video Event Section */}
      <section className={`section ${styles.youtubeSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.youtubeHeader}>
              <span className="section-label">🎥 Event Khusus</span>
              <h2 className="heading-2">On-Site Daycare Service Event</h2>
              <p className={styles.youtubeSubtitle}>
                Dokumentasi eksklusif pelayanan penitipan anak di lokasi acara (on-site daycare) untuk event privat di Jakarta Selatan.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.youtubeGrid}>
            {/* Video Column */}
            <ScrollReveal direction="left" className={styles.videoColumn}>
              <div className={styles.iframeWrapper}>
                <iframe 
                  src="https://www.youtube.com/embed/Hk196cyieQ0?si=KQ1BOoSkYUWaim29" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  loading="lazy"
                  className={styles.youtubeIframe}
                />
              </div>
            </ScrollReveal>

            {/* Info / Metadata Column */}
            <ScrollReveal direction="right" className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Detail Dokumentasi Event</h3>
                <p className={styles.infoCardDesc}>
                  Amana Care menyediakan layanan penitipan anak di lokasi (on-site daycare) untuk kebutuhan acara formal, semi-formal, maupun privat. Kami menyulap salah satu ruangan menjadi daycare yang ramah anak, aman, dan lengkap dengan berbagai aktivitas edukasi yang menyenangkan.
                </p>

                <div className={styles.metadataGrid}>
                  <div className={styles.metaItem}>
                    <div className={styles.metaIcon}>
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className={styles.metaLabel}>Durasi Event</p>
                      <p className={styles.metaValue}>3 Jam Penuh</p>
                    </div>
                  </div>

                  <div className={styles.metaItem}>
                    <div className={styles.metaIcon}>
                      <Award size={20} />
                    </div>
                    <div>
                      <p className={styles.metaLabel}>Aktivitas Anak</p>
                      <p className={styles.metaValue}>1.5 Jam Art & Craft + 1.5 Jam Free Play</p>
                    </div>
                  </div>

                  <div className={styles.metaItem}>
                    <div className={styles.metaIcon}>
                      <Users size={20} />
                    </div>
                    <div>
                      <p className={styles.metaLabel}>Jumlah Anak</p>
                      <p className={styles.metaValue}>7 Anak</p>
                    </div>
                  </div>

                  <div className={styles.metaItem}>
                    <div className={styles.metaIcon}>
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className={styles.metaLabel}>Rentang Usia</p>
                      <p className={styles.metaValue}>7 Bulan sampai 6 Tahun</p>
                    </div>
                  </div>
                </div>

                <div className={styles.ctaWrapper}>
                  <Link href="/kontak" className="btn btn-primary" id="youtube-cta-kontak">
                    Hubungi untuk Layanan Event 💬
                  </Link>
                </div>
              </div>
            </ScrollReveal>
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

