'use client'

import Link from 'next/link'
import { Home, MessageCircle, Compass } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './not-found.module.css'
import { trackCTAClick, trackWhatsAppOpen } from '@/lib/analytics'

export default function NotFound() {
  const waUrl =
    'https://wa.me/6281513075155?text=' +
    encodeURIComponent(
      'Halo Amana Care! 👋 Saya membutuhkan informasi bantuan mengenai layanan atau pendaftaran.'
    )

  return (
    <div className={styles.wrapper}>
      <div className={styles.blobLeft} />
      <div className={styles.blobRight} />

      <div className={`container ${styles.heroContent}`}>
        <ScrollReveal direction="up">
          {/* Top Pill Badge */}
          <div>
            <span className={styles.badge}>
              <Compass size={16} color="var(--color-primary-dark)" />
              <span>Halaman Tidak Ditemukan</span>
            </span>
          </div>

          {/* Big 404 Visual */}
          <div className={styles.code404}>404</div>

          {/* Title & Subtitle */}
          <h1 className={`heading-2 ${styles.heroTitle}`}>
            Halaman yang Anda Cari Tidak Ditemukan
          </h1>
          <p className={styles.heroSubtitle}>
            Mohon maaf, halaman yang Anda tuju tidak tersedia atau alamat URL telah berubah.
            Silakan kembali ke beranda atau hubungi tim kami jika memerlukan bantuan.
          </p>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <Link
              href="/"
              className="btn btn-primary btn-lg"
              onClick={() => trackCTAClick('404_back_home', '/')}
            >
              <Home size={20} />
              Kembali ke Beranda
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg"
              onClick={() => trackWhatsAppOpen('404_page_hero')}
            >
              <MessageCircle size={20} color="var(--color-primary-dark)" />
              Bantuan via WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
