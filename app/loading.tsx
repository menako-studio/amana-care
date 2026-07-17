'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/components/layout/LoadingScreen.module.css'

export default function Loading() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className={styles.overlayTransition} role="alert" aria-busy="true" aria-label="Loading page">
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo/icon-amanacare-color.png"
          alt="Amana Care Loading..."
          width={110}
          height={101}
          className={styles.logo}
          priority
        />
        <p className={styles.loadingText}>amana care</p>
      </div>
    </div>
  )
}
