'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Minus, MapPin, Clock, Phone, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './page.module.css'
import { trackFormSubmit, trackFAQOpen, trackWhatsAppOpen } from '@/lib/analytics'

const InstagramIcon = ({ size = 20, className = '', color = 'currentColor' }: { size?: number; className?: string; color?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
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

const faqs = [
  {
    q: 'Apakah bisa berkunjung (site visit) sebelum mendaftar?',
    a: 'Sangat bisa! Kami merekomendasikan orang tua untuk menjadwalkan kunjungan terlebih dahulu agar bisa melihat langsung fasilitas, lingkungan belajar, serta bertemu dengan staf kami. Silakan buat janji melalui form kontak atau WhatsApp.',
  },
  {
    q: 'Berapa usia anak yang diterima di Amana Care?',
    a: 'Kami menerima anak mulai dari usia bayi 3 bulan hingga pra-sekolah usia 6 tahun. Kurikulum serta pengelompokan ruang kelas disesuaikan khusus dengan kelompok umur si kecil.',
  },
  {
    q: 'Bagaimana makanan dan nutrisi anak selama di daycare?',
    a: 'Paket daycare kami sudah termasuk makan utama 3 kali sehari dan snack sore bergizi. Kami menyajikan makanan segar yang disiapkan secara higienis, bervariasi, serta bebas MSG. Harap infokan kepada tim kami jika si kecil memiliki alergi makanan tertentu.',
  },
  {
    q: 'Bagaimana keamanan CCTV bagi orang tua?',
    a: 'Kami memiliki kamera CCTV online realtime yang mencakup seluruh ruang aktivitas utama anak. Orang tua akan diberikan akses masuk khusus (akun terenkripsi) untuk memantau aktivitas si kecil secara mandiri kapan saja.',
  },
  {
    q: 'Bagaimana kualifikasi tim pengasuh (caregiver)?',
    a: 'Seluruh tim pengasuh kami memiliki kualifikasi pendidikan di bidang PAUD atau Keperawatan anak, telah melalui sertifikasi pertolongan pertama (P3K) khusus anak, serta rutin mengikuti pelatihan psikologi anak berkala.',
  },
]

const ageGroups = ['0–6 bulan', '6–12 bulan', '1–2 tahun', '2–3 tahun', '3–4 tahun', '4–6 tahun']

export default function Kontak() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [form, setForm] = useState({ nama: '', namaAnak: '', usia: '', wa: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)
  const [method, setMethod] = useState<'form' | 'cal'>('form')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Halo Amana Care! 👋\n\nSaya ingin bertanya mengenai pendaftaran/layanan:\n\n` +
      `👤 Nama Orang Tua: ${form.nama}\n` +
      `👶 Nama Anak: ${form.namaAnak}\n` +
      `🎂 Usia Anak: ${form.usia}\n` +
      `${form.pesan ? `💬 Pertanyaan: ${form.pesan}\n` : ''}` +
      `\nMohon dibantu ya! Terima kasih 🙏`
    )
    window.open(`https://wa.me/6281513075155?text=${msg}`, '_blank')
    trackFormSubmit('kontak_page_form', form.usia)
    trackWhatsAppOpen('kontak_form_submit')
    setSubmitted(true)
  }

  return (
    <div className={styles.wrapper}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-kontak.png"
            alt="Kontak Amana Care Bintaro"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <ScrollReveal direction="up">
            <span className={styles.heroBadge}>📞 Kontak Kami</span>
            <h1 className="heading-1" style={{ color: 'var(--color-white)' }}>
              Hubungi Amana Care
            </h1>
            <p className={styles.heroSubtitle}>
              Kami selalu senang mendengar dari Anda. Hubungi kami untuk kunjungan,
              informasi biaya daycare, atau pertanyaan lainnya.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: Info */}
            <ScrollReveal direction="left">
              <div className={styles.infoSide}>
                <div className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Informasi Kontak &amp; Lokasi</h3>
                  <div className={styles.infoList}>
                    <div className={styles.infoItem}>
                      <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(0, 180, 216, 0.12)' }}>
                        <MapPin size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <p className={styles.infoLabel}>Alamat</p>
                        <p className={styles.infoValue}>
                          <a
                            href="https://share.google/IbDHnKDtXvBJQah2i"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.infoLink}
                          >
                            Bintaro Sektor 7, Tangerang Selatan, Banten
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(255, 209, 102, 0.15)' }}>
                        <Clock size={20} color="#B8820A" />
                      </div>
                      <div>
                        <p className={styles.infoLabel}>Jam Operasional</p>
                        <p className={styles.infoValue}>Senin–Jumat: 07.00–19.00 WIB</p>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(37, 211, 102, 0.12)' }}>
                        <Phone size={20} color="#128C7E" />
                      </div>
                      <div>
                        <p className={styles.infoLabel}>WhatsApp</p>
                        <a href="https://wa.me/6281513075155" className={styles.infoLink}>
                          +62 815-1307-5155
                        </a>
                      </div>
                    </div>

                    <div className={styles.infoItem}>
                      <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(239, 140, 140, 0.12)' }}>
                      <InstagramIcon size={20} color="#E1306C" />
                      </div>
                      <div>
                        <p className={styles.infoLabel}>Instagram</p>
                        <a
                          href="https://www.instagram.com/haloamana"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.infoLink}
                        >
                          @haloamana
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.mapWrapper}>
                  <iframe
                    title="Google Maps Lokasi Amana Care Bintaro"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.927103569966!2d106.7126997!3d-6.2733159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb958fc8c2ab%3A0xd5c7fbfd12746252!2sAmana%20Care!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal direction="right" delay={100}>
              <div className={styles.formSide}>
                <div className={styles.methodSelector}>
                  <button
                    type="button"
                    className={`${styles.methodBtn} ${method === 'form' ? styles.methodBtnActive : ''}`}
                    onClick={() => setMethod('form')}
                  >
                    📝 Form Pendaftaran
                  </button>
                  <button
                    type="button"
                    className={`${styles.methodBtn} ${method === 'cal' ? styles.methodBtnActive : ''}`}
                    onClick={() => setMethod('cal')}
                  >
                    📅 Jadwalkan Site Visit
                  </button>
                </div>

                {method === 'cal' ? (
                  <div className={styles.calWrapper}>
                    <iframe
                      src="https://cal.com/amanacare/site-visit?embed=true"
                      width="100%"
                      height="500"
                      frameBorder="0"
                      title="Jadwalkan Kunjungan Amana Care Bintaro"
                      className={styles.calFrame}
                    />
                  </div>
                ) : !submitted ? (
                  <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <h3 className={styles.formTitle}>Form Pendaftaran / Tanya Info</h3>
                    <p className={styles.formDesc}>Hubungi kami langsung via tombol kirim untuk membuka chat WhatsApp.</p>

                    <div className={styles.field}>
                      <label htmlFor="nama" className={styles.label}>Nama Lengkap Orang Tua *</label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        className={styles.input}
                        placeholder="Nama Bapak/Ibu"
                        value={form.nama}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="namaAnak" className={styles.label}>Nama Si Kecil *</label>
                        <input
                          type="text"
                          id="namaAnak"
                          name="namaAnak"
                          className={styles.input}
                          placeholder="Nama panggilan anak"
                          value={form.namaAnak}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="usia" className={styles.label}>Kelompok Usia *</label>
                        <select
                          id="usia"
                          name="usia"
                          className={styles.input}
                          value={form.usia}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Pilih kelompok usia</option>
                          {ageGroups.map((age) => (
                            <option key={age} value={age}>{age}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="wa" className={styles.label}>Nomor WhatsApp Aktif *</label>
                      <input
                        type="tel"
                        id="wa"
                        name="wa"
                        className={styles.input}
                        placeholder="08xxxxxxxxxx"
                        value={form.wa}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="pesan" className={styles.label}>Pesan atau Pertanyaan</label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        className={`${styles.input} ${styles.textarea}`}
                        placeholder="Tuliskan pertanyaan Anda di sini..."
                        rows={4}
                        value={form.pesan}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg" id="kontak-page-form-submit">
                      Kirim via WhatsApp 💬
                    </button>
                  </form>
                ) : (
                  <div className={styles.success}>
                    <CheckCircle size={48} color="var(--color-green)" />
                    <h3 className={styles.successTitle}>Pesan Anda Telah Terkirim!</h3>
                    <p className={styles.successText}>
                      WhatsApp web/aplikasi sedang dibuka. Tim kami akan segera menanggapi pertanyaan Anda. Terima kasih!
                    </p>
                    <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                      Kirim Pesan Lain
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.faqHeader}>
              <span className="section-label">❔ Tanya Jawab</span>
              <h2 className="heading-2">Pertanyaan Sering Diajukan</h2>
              <p className={styles.faqSubtitle}>
                Berikut jawaban atas beberapa pertanyaan umum dari para calon orang tua Amana Care.
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 60}>
                <div
                  className={`${styles.faqItem} ${openFaq === idx ? styles.faqOpen : ''}`}
                  onClick={() => {
                    const next = openFaq === idx ? null : idx
                    setOpenFaq(next)
                    if (next !== null) trackFAQOpen(faq.q, idx)
                  }}
                >
                  <button className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  <div className={styles.faqAnswer}>
                    <div className={styles.faqAnswerInner}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
