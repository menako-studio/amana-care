'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false)
  const [fade, setFade] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const mountTimer = setTimeout(() => setMounted(true), 0)

    const handleLoad = () => {
      // Allow the heartbeat animation to show for at least 800ms for a premium feel
      const timeout = setTimeout(() => {
        setFade(true)
        // Completely unmount after transition completes (500ms)
        const unmountTimeout = setTimeout(() => {
          setVisible(false)
        }, 500)
        return () => clearTimeout(unmountTimeout)
      }, 800)
      return () => clearTimeout(timeout)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback in case window load event doesn't fire or takes too long
      const fallback = setTimeout(handleLoad, 3000)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(fallback)
        clearTimeout(mountTimer)
      }
    }
  }, [])

  if (!mounted || !visible) return null

  return (
    <div className={`${styles.overlay} ${fade ? styles.fadeOut : ''}`} role="alert" aria-busy="true" aria-label="Loading Amana Care">
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo/icon-amanacare-color.png"
          alt="Amana Care Logo Loading"
          width={110}
          height={101}
          className={styles.logo}
          priority
        />
        <p className={styles.loadingText}>amana care</p>
        <div className={styles.spinner} />
      </div>
    </div>
  )
}
