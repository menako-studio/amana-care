'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/fasilitas', label: 'Fasilitas' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navClass = [
    styles.nav,
    scrolled || !isHome ? styles.scrolled : '',
    menuOpen ? styles.menuOpen : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Navigasi utama">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Amana Care - Halaman Utama">
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="var(--color-primary)" />
                <path d="M20 10C20 10 12 15 12 22C12 26.4 15.6 30 20 30C24.4 30 28 26.4 28 22C28 15 20 10 20 10Z" fill="white" />
                <circle cx="20" cy="22" r="4" fill="var(--color-primary)" />
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>amana</span>
              <span className={styles.logoCare}>care</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className={styles.links}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className={styles.actions}>
            <Link
              href="/kontak"
              className="btn btn-primary btn-sm"
              id="nav-cta-daftar"
            >
              Daftar Sekarang
            </Link>
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!menuOpen}>
        <div className={styles.mobileMenuInner}>
          <nav className={styles.mobileLinks}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileLink} ${pathname === link.href ? styles.mobileLinkActive : ''}`}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {link.label}
              </Link>
            ))}
            <div className={styles.mobileCta}>
              <Link
                href="/kontak"
                className="btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Daftar Sekarang 🎉
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Footer */}
          <div className={styles.mobileFooter}>
            <p className={styles.mobileAddress}>📍 Bintaro Sektor 7, Tangerang Selatan</p>
            <p className={styles.mobileHours}>⏰ Senin–Jumat, 07.00–19.00 WIB</p>
          </div>
        </div>
      </div>
    </>
  )
}
