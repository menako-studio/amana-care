'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import styles from './AnnouncementBar.module.css'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const dismissed = sessionStorage.getItem('amana-announcement-dismissed')
    if (dismissed) setVisible(false)
  }, [])

  const handleDismiss = () => {
    setVisible(false)
    sessionStorage.setItem('amana-announcement-dismissed', 'true')
  }

  if (!mounted || !visible) return null

  return (
    <div className={styles.bar} role="banner">
      <div className={styles.content}>
        <span className={styles.emoji}>🎉</span>
        <p className={styles.text}>
          <strong>Pendaftaran Agustus 2026 Dibuka!</strong> Slot terbatas — hubungi kami sekarang.
        </p>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Amana%20Care!%20Saya%20ingin%20info%20pendaftaran."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Daftar →
        </a>
      </div>
      <button
        onClick={handleDismiss}
        className={styles.close}
        aria-label="Tutup pengumuman"
      >
        <X size={16} />
      </button>
    </div>
  )
}
