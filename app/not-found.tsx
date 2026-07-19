'use client'

import Link from 'next/link'
import {
  Home,
  MessageCircle,
  Compass,
  Sparkles,
  HeartHandshake,
  Camera,
  Users,
  MapPin,
  HelpCircle,
  ArrowRight,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './not-found.module.css'
import { trackCTAClick, trackWhatsAppOpen } from '@/lib/analytics'

const quickLinks = [
  {
    title: 'Layanan Daycare',
    desc: 'Penitipan & stimulasi khusus Baby, Toddler, hingga Preschool.',
    href: '/layanan',
    icon: HeartHandshake,
    bg: 'rgba(57, 194, 231, 0.15)',
    color: '#1988A7',
  },
  {
    title: 'Fasilitas Premium',
    desc: 'Ruang bermain steril, CCTV realtime, & Parents Working Space.',
    href: '/fasilitas',
    icon: Sparkles,
    bg: 'rgba(255, 209, 102, 0.25)',
    color: '#B8820A',
  },
  {
    title: 'Galeri Momen Ceria',
    desc: 'Dokumentasi aktivitas harian, fasilitas, dan kebersamaan si kecil.',
    href: '/galeri',
    icon: Camera,
    bg: 'rgba(242, 116, 85, 0.15)',
    color: '#D84D2B',
  },
  {
    title: 'Tentang Amana Care',
    desc: 'Profil daycare, nilai pengasuhan, dan kualifikasi tim profesional kami.',
    href: '/tentang-kami',
    icon: Users,
    bg: 'rgba(48, 242, 178, 0.2)',
    color: '#0D9468',
  },
  {
    title: 'Kontak & Site Visit',
    desc: 'Lokasi Bintaro Sektor 7, jam operasional, & pendaftaran kunjungan.',
    href: '/kontak',
    icon: MapPin,
    bg: 'rgba(227, 113, 255, 0.15)',
    color: '#9C27B0',
  },
  {
    title: 'Pertanyaan Umum (FAQ)',
    desc: 'Temukan jawaban seputar CCTV, nutrisi makan, & prosedur pendaftaran.',
    href: '/kontak#faq',
    icon: HelpCircle,
    bg: 'rgba(57, 194, 231, 0.12)',
    color: '#1988A7',
  },
]

export default function NotFound() {
  const waUrl =
    'https://wa.me/6281513075155?text=' +
    encodeURIComponent(
      'Halo Amana Care! 👋 Saya sedang mengakses website dan terkendala halaman tidak ditemukan (404). Mohon bantuannya ya 🙏'
    )

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div className={styles.blobLeft} />
        <div className={styles.blobRight} />

        <div className={`container ${styles.heroContent}`}>
          <ScrollReveal direction="up">
            <div className={styles.visualContainer}>
              <span className={styles.code404}>404</span>
              <div className={styles.floatingBadge}>
                <Compass size={18} color="var(--color-primary)" />
                <span>Halaman Tidak Ditemukan</span>
              </div>
            </div>

            <h1 className={`heading-2 ${styles.heroTitle}`}>
              Ops! Sepertinya Si Kecil Mengajak Jelajah Terlalu Far...
            </h1>
            <p className={styles.heroSubtitle}>
              Halaman yang Anda tuju tidak dapat ditemukan atau telah berpindah alamat.
              Jangan khawatir, mari kami bantu menemukan jalan kembali ke area yang aman di Amana Care!
            </p>

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
      </section>

      <section className={`section ${styles.quickNavSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">🧭 Navigasi Cepat</span>
              <h2 className={`heading-2 ${styles.sectionTitle}`}>
                Jelajahi Halaman Utama Amana Care
              </h2>
              <p className={styles.sectionSubtitle}>
                Berikut beberapa destinasi terpopuler yang mungkin sedang Anda cari.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.navGrid}>
            {quickLinks.map((link, idx) => {
              const IconComp = link.icon
              return (
                <ScrollReveal key={link.href} direction="up" delay={idx * 60}>
                  <Link
                    href={link.href}
                    className={styles.navCard}
                    onClick={() => trackCTAClick(`404_nav_${link.title}`, link.href)}
                  >
                    <div>
                      <div className={styles.navCardTop}>
                        <div
                          className={styles.navIconBox}
                          style={{ backgroundColor: link.bg, color: link.color }}
                        >
                          <IconComp size={24} />
                        </div>
                        <ArrowRight size={20} className={styles.navArrow} />
                      </div>
                      <h3 className={styles.navCardTitle}>{link.title}</h3>
                      <p className={styles.navCardDesc}>{link.desc}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal direction="up" delay={200}>
            <div className={styles.supportBanner}>
              <div className={styles.supportBannerBg} />
              <div className={styles.supportContent}>
                <h3 className={styles.supportTitle}>
                  Butuh Informasi Seputar Pendaftaran &amp; Site Visit?
                </h3>
                <p className={styles.supportDesc}>
                  Tim Amana Care selalu siap menyambut pertanyaan Ayah &amp; Bunda. Hubungi kami via WhatsApp untuk respon cepat.
                </p>
              </div>
              <div className={styles.supportBtn}>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-lg"
                  onClick={() => trackWhatsAppOpen('404_banner')}
                >
                  <MessageCircle size={20} />
                  Hubungi Tim Kami
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
