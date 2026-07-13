import Link from 'next/link'
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react'
import styles from './Footer.module.css'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/fasilitas', label: 'Fasilitas' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/kontak', label: 'Kontak' },
]

const InstagramIcon = ({ size = 20, className = '' }: { size?: number; className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0V30Z" fill="#1A1A2E" />
        </svg>
      </div>

      <div className={styles.body}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand Column */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo} aria-label="Amana Care">
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
              <p className={styles.tagline}>
                Tempat anak tumbuh, dan orang tua berkarya. Daycare & working space terpercaya di Bintaro Sektor 7.
              </p>
              <div className={styles.socials}>
                <a
                  href="https://www.instagram.com/haloamana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram Amana Care"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="WhatsApp Amana Care"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Navigasi</h3>
              <ul className={styles.navList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Kontak</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <MapPin size={16} className={styles.contactIcon} />
                  <span>Bintaro Sektor 7, Tangerang Selatan, Banten</span>
                </li>
                <li className={styles.contactItem}>
                  <Clock size={16} className={styles.contactIcon} />
                  <span>Senin–Jumat: 07.00–19.00 WIB</span>
                </li>
                <li className={styles.contactItem}>
                  <Phone size={16} className={styles.contactIcon} />
                  <a href="https://wa.me/6281234567890" className={styles.contactLink}>
                    +62 812-3456-7890
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <InstagramIcon size={16} className={styles.contactIcon} />
                  <a
                    href="https://www.instagram.com/haloamana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    @haloamana
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA Column */}
            <div className={styles.col}>
              <h3 className={styles.colTitle}>Mulai Sekarang</h3>
              <p className={styles.ctaText}>
                Konsultasikan kebutuhan penitipan anak Anda bersama kami.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Halo%20Amana%20Care!%20Saya%20ingin%20info%20pendaftaran."
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.ctaButton}`}
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {currentYear} Amana Care. Hak cipta dilindungi.
            </p>
            <p className={styles.credit}>
              Made with ❤️ in Bintaro
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
