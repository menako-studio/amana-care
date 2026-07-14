'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './ContactSection.module.css'

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

const ageGroups = ['0–6 bulan', '6–12 bulan', '1–2 tahun', '2–3 tahun', '3–4 tahun', '4–6 tahun']

export default function ContactSection() {
  const [form, setForm] = useState({ nama: '', namaAnak: '', usia: '', wa: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)
  const [method, setMethod] = useState<'form' | 'cal'>('form')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Halo Amana Care! 👋\n\nSaya ingin mendaftarkan si kecil:\n\n` +
      `👤 Nama Orang Tua: ${form.nama}\n` +
      `👶 Nama Anak: ${form.namaAnak}\n` +
      `🎂 Usia Anak: ${form.usia}\n` +
      `${form.pesan ? `💬 Pesan: ${form.pesan}\n` : ''}` +
      `\nMohon info lebih lanjut ya! Terima kasih 🙏`
    )
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section className={`section ${styles.section}`} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Form */}
          <ScrollReveal direction="left">
            <div className={styles.formSide}>
              <span className="section-label">📝 Hubungi Kami</span>
              <h2 className="heading-2" id="contact-heading">
                Siap mendaftarkan<br />si kecil?
              </h2>
              <p className={styles.formSubtitle}>
                Pilih cara pendaftaran yang paling nyaman untuk Anda di bawah ini.
              </p>

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
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="nama" className={styles.label}>Nama Orang Tua *</label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        className={styles.input}
                        placeholder="Nama lengkap"
                        value={form.nama}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="namaAnak" className={styles.label}>Nama Anak *</label>
                      <input
                        type="text"
                        id="namaAnak"
                        name="namaAnak"
                        className={styles.input}
                        placeholder="Nama si kecil"
                        value={form.namaAnak}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="usia" className={styles.label}>Usia Anak *</label>
                      <select
                        id="usia"
                        name="usia"
                        className={styles.input}
                        value={form.usia}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Pilih usia</option>
                        {ageGroups.map((age) => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="wa" className={styles.label}>Nomor WhatsApp *</label>
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
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="pesan" className={styles.label}>Pesan (Opsional)</label>
                    <textarea
                      id="pesan"
                      name="pesan"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Ada pertanyaan atau kebutuhan khusus?"
                      rows={3}
                      value={form.pesan}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`} id="contact-form-submit">
                    Kirim via WhatsApp 💬
                  </button>

                  <p className={styles.disclaimer}>
                    Dengan mengirim form ini, Anda menyetujui kami menghubungi Anda via WhatsApp.
                  </p>
                </form>
              ) : (
                <div className={styles.success}>
                  <CheckCircle size={48} color="var(--color-green)" />
                  <h3 className={styles.successTitle}>Terima kasih!</h3>
                  <p className={styles.successText}>
                    WhatsApp sedang terbuka. Tim kami akan segera membalas pesan Anda. 🎉
                  </p>
                  <button className="btn btn-outline" onClick={() => setSubmitted(false)}>
                    Kirim Lagi
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right: Info + Map */}
          <ScrollReveal direction="right" delay={100}>
            <div className={styles.infoSide}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Informasi Kontak</h3>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(0, 180, 216, 0.12)' }}>
                      <MapPin size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <p className={styles.infoLabel}>Alamat</p>
                      <p className={styles.infoValue}>Bintaro Sektor 7,<br />Tangerang Selatan, Banten</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(255, 209, 102, 0.15)' }}>
                      <Clock size={20} color="#B8820A" />
                    </div>
                    <div>
                      <p className={styles.infoLabel}>Jam Operasional</p>
                      <p className={styles.infoValue}>Senin–Jumat<br />07.00–19.00 WIB</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(37, 211, 102, 0.12)' }}>
                      <Phone size={20} color="#128C7E" />
                    </div>
                    <div>
                      <p className={styles.infoLabel}>WhatsApp</p>
                      <a href="https://wa.me/6281234567890" className={styles.infoLink}>
                        +62 812-3456-7890
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

                <a
                  href="https://wa.me/6281234567890?text=Halo%20Amana%20Care!%20Saya%20ingin%20info%20pendaftaran."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary ${styles.waButton}`}
                  id="contact-whatsapp-btn"
                >
                  Chat WhatsApp Sekarang 💬
                </a>
              </div>

              {/* Google Maps Embed */}
              <div className={styles.mapWrapper}>
                <iframe
                  title="Lokasi Amana Care di Bintaro Sektor 7"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.927103569966!2d106.7126997!3d-6.2733159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb958fc8c2ab%3A0xd5c7fbfd12746252!2sAmana%20Care!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
