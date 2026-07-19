'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, Volume2, VolumeX, X, ZoomIn } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './VideoReels.module.css'

export interface Reel {
  id: string
  src: string
  title: string
  category: string
  description: string
}

export const REELS_DATA: Reel[] = [
  {
    id: 'day-in-the-life',
    src: '/videos/amanacare-experience-day-in-the-life.webm',
    title: 'A Day in the Life',
    category: 'Aktivitas Harian',
    description: 'Melihat keseharian anak-anak bermain, belajar, bersosialisasi, dan beristirahat dengan penuh keceriaan di Amana Care.',
  },
  {
    id: 'baby-sensory-play',
    src: '/videos/amanacare-program-baby-sensory-play.webm',
    title: 'Baby Sensory Play',
    category: 'Stimulasi Bayi',
    description: 'Aktivitas stimulasi sensorik terarah yang aman untuk melatih kemampuan motorik halus dan rasa ingin tahu bayi.',
  },
  {
    id: 'montessori-practical-life',
    src: '/videos/amanacare-curriculum-montessori-practical-life.webm',
    title: 'Montessori Practical Life',
    category: 'Kurikulum',
    description: 'Melatih kemandirian, fokus, dan koordinasi motorik anak sejak dini menggunakan aparatus Montessori terstandarisasi.',
  },
  {
    id: 'dental-visit-01',
    src: '/videos/amanacare-activity-dental-visit-beam-dental-01.webm',
    title: 'Dental Visit - Sesi 1',
    category: 'Kegiatan Kesehatan',
    description: 'Kunjungan berkala dari dokter gigi Beam Dental untuk pemeriksaan gigi rutin dan edukasi perawatan gigi anak.',
  },
  {
    id: 'dental-visit-02',
    src: '/videos/amanacare-activity-dental-visit-beam-dental-02.webm',
    title: 'Dental Visit - Sesi 2',
    category: 'Kegiatan Kesehatan',
    description: 'Interaksi menyenangkan anak-anak belajar sikat gigi bersama secara interaktif didampingi dokter gigi ramah.',
  },
  {
    id: 'meet-the-team',
    src: '/videos/amanacare-about-meet-the-team.webm',
    title: 'Meet the Team',
    category: 'Tentang Kami',
    description: 'Perkenalan tim pengasuh profesional dan penuh kasih sayang di Amana Care yang mendedikasikan kasih sayangnya setiap hari.',
  },
]

interface VideoReelsProps {
  filterCategory?: string
  limit?: number
  showTitle?: boolean
}

export default function VideoReels({ filterCategory, limit, showTitle = true }: VideoReelsProps) {
  const [activeReel, setActiveReel] = useState<Reel | null>(null)
  // Always start muted — user must explicitly opt-in to audio
  const [globalMuted, setGlobalMuted] = useState(true)
  const [playingId, setPlayingId] = useState<string | null>(null)

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})
  const lightboxVideoRef = useRef<HTMLVideoElement | null>(null)

  const filteredReels = filterCategory
    ? REELS_DATA.filter(reel => reel.category.toLowerCase() === filterCategory.toLowerCase() || reel.id === filterCategory)
    : REELS_DATA

  const displayReels = limit ? filteredReels.slice(0, limit) : filteredReels

  // Pause DOM videos only (no setState) — safe to call from effects
  const pauseAllCardVideosDom = useCallback(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) video.pause()
    })
  }, [])

  // Stop all audio when tab is hidden or user navigates away (visibilitychange)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) pauseAllCardVideosDom()
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      // Critical: pause all on unmount (e.g., route change)
      pauseAllCardVideosDom()
    }
  }, [pauseAllCardVideosDom])

  // Lightbox open → pause card DOM videos; close → fully stop lightbox video
  useEffect(() => {
    if (activeReel) {
      pauseAllCardVideosDom()
      document.body.style.overflow = 'hidden'
    } else {
      if (lightboxVideoRef.current) {
        lightboxVideoRef.current.pause()
        lightboxVideoRef.current.currentTime = 0
      }
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeReel, pauseAllCardVideosDom])

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveReel(null)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleMouseEnter = (id: string) => {
    const video = videoRefs.current[id]
    if (video) {
      video.muted = true // card hover-play is always muted
      video.play().then(() => setPlayingId(id)).catch(err => {
        console.log('Autoplay blocked:', err)
      })
    }
  }

  const handleMouseLeave = (id: string) => {
    const video = videoRefs.current[id]
    if (video) {
      video.pause()
      setPlayingId(null)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextMuted = !globalMuted
    setGlobalMuted(nextMuted)
    Object.values(videoRefs.current).forEach(video => {
      if (video) video.muted = nextMuted
    })
  }

  const handleCloseLightbox = () => setActiveReel(null)

  return (
    <section className={`section ${styles.reelsSection}`} aria-labelledby="reels-heading">
      <div className="container">
        {showTitle && (
          <ScrollReveal direction="up">
            <div className={styles.header}>
              <span className="section-label">🎬 Lensa Aktivitas</span>
              <h2 className="heading-2" id="reels-heading">
                Amana <span style={{ color: 'var(--color-primary)' }}>Reels</span>
              </h2>
              <p className={styles.subtitle}>
                Intip keseruan langsung anak-anak daycare melalui dokumentasi video reels singkat kami.
              </p>
            </div>
          </ScrollReveal>
        )}

        <div className={styles.grid}>
          {displayReels.map((reel, i) => (
            <ScrollReveal key={reel.id} direction="up" delay={i * 80}>
              <div
                className={styles.card}
                onMouseEnter={() => handleMouseEnter(reel.id)}
                onMouseLeave={() => handleMouseLeave(reel.id)}
                onClick={() => setActiveReel(reel)}
              >
                <div className={styles.videoWrapper}>
                  <video
                    ref={el => { videoRefs.current[reel.id] = el }}
                    src={reel.src}
                    className={styles.video}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onContextMenu={(e) => e.preventDefault()}
                  />

                  <span className={styles.categoryBadge}>{reel.category}</span>

                  <div className={`${styles.playOverlay} ${playingId === reel.id ? styles.overlayPlaying : ''}`}>
                    <Play className={styles.playIcon} size={28} />
                  </div>

                  <button
                    className={styles.muteButton}
                    onClick={toggleMute}
                    aria-label={globalMuted ? "Aktifkan suara video" : "Matikan suara video"}
                  >
                    {globalMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <div className={styles.zoomOverlay}>
                    <ZoomIn size={24} className={styles.zoomIcon} />
                    <span className={styles.zoomText}>Tonton Reels</span>
                  </div>

                  <div className={styles.infoOverlay}>
                    <h3 className={styles.cardTitle}>{reel.title}</h3>
                    <p className={styles.cardDesc}>{reel.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Video Modal — muted by default, user can unmute via native controls */}
      {activeReel && (
        <div
          className={styles.lightbox}
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Video ${activeReel.title}`}
        >
          <button
            className={styles.closeBtn}
            onClick={handleCloseLightbox}
            aria-label="Tutup video"
          >
            <X size={32} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxPlayerSide}>
              <div className={styles.lightboxVideoWrapper}>
                <video
                  ref={lightboxVideoRef}
                  src={activeReel.src}
                  className={styles.lightboxVideo}
                  autoPlay
                  muted
                  controls
                  controlsList="nodownload"
                  loop
                  playsInline
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </div>

            <div className={styles.lightboxMetaSide}>
              <span className={styles.lightboxCategory}>{activeReel.category}</span>
              <h3 className={styles.lightboxTitle}>{activeReel.title}</h3>
              <div className={styles.lightboxDivider} />
              <p className={styles.lightboxDesc}>{activeReel.description}</p>

              <div className={styles.lightboxTips}>
                <span className={styles.tipsIcon}>💡</span>
                <p className={styles.tipsText}>
                  Video di atas merekam langsung aktivitas anak-anak kami. Setiap momen dirancang untuk memberikan stimulasi tumbuh kembang terbaik.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
