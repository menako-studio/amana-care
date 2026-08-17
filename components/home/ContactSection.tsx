'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './ContactSection.module.css'
import { trackFormSubmit, trackWhatsAppOpen, trackSelectContent, trackOutboundClick, trackContact } from '@/lib/analytics'

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

const ageGroups = ['6–12 bulan', '1–2 tahun', '2–3 tahun', '3–4 tahun', '4–6 tahun']

export default function ContactSection() {
  const [form, setForm] = useState({ nama: '', namaAnak: '', usia: '', wa: '', pesan: '' })
  const [visitForm, setVisitForm] = useState({ nama: '', namaAnak: '', usia: '', tanggal: '', waktu: 'Pagi (09:00 – 11:00 WIB)', wa: '', pesan: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submittedVisit, setSubmittedVisit] = useState(false)
  const [method, setMethod] = useState<'form' | 'visit'>('form')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleVisitChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setVisitForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
    window.open(`https://wa.me/6281513075155?text=${msg}`, '_blank')
    trackFormSubmit('home_contact_form', form.usia)
    trackWhatsAppOpen('home_form_submit')
    setSubmitted(true)
  }

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Halo Amana Care! 👋\n\n` +
      `Saya ingin mengajukan jadwal Site Visit / Kunjungan ke Amana Care Bintaro:\n\n` +
      `👤 Nama Orang Tua: ${visitForm.nama}\n` +
      `👶 Nama Anak: ${visitForm.namaAnak}\n` +
      `🎂 Usia Anak: ${visitForm.usia}\n` +
      `📅 Rencana Tanggal Kunjungan: ${visitForm.tanggal}\n` +
      `⏰ Waktu Sesi: ${visitForm.waktu}\n` +
      `📱 Nomor WA: ${visitForm.wa}\n` +
      `${visitForm.pesan ? `💬 Catatan: ${visitForm.pesan}\n` : ''}` +
      `\nMohon konfirmasi ketersediaan jadwalnya ya! Terima kasih 🙏`
    )
    window.open(`https://wa.me/6281513075155?text=${msg}`, '_blank')
    trackFormSubmit('home_site_visit_form', visitForm.usia)
    trackWhatsAppOpen('home_site_visit_submit')
    setSubmittedVisit(true)
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
                Pilih cara pendaftaran atau kunjungan yang paling nyaman untuk Anda di bawah ini.
              </p>

              <div className={styles.methodSelector}>
                <button
                  type="button"
                  className={`${styles.methodBtn} ${method === 'form' ? styles.methodBtnActive : ''}`}
                  onClick={() => {
                    setMethod('form')
                    trackSelectContent('registration_method', 'form', 'Form Pendaftaran')
                  }}
                >
                  📝 Form Pendaftaran
                </button>
                <button
                  type="button"
                  className={`${styles.methodBtn} ${method === 'visit' ? styles.methodBtnActive : ''}`}
                  onClick={() => {
                    setMethod('visit')
                    trackSelectContent('registration_method', 'site_visit_form', 'Jadwalkan Site Visit')
                  }}
                >
                  📅 Jadwalkan Site Visit
                </button>
              </div>

              {method === 'visit' ? (
                !submittedVisit ? (
                  <form className={styles.form} onSubmit={handleVisitSubmit} noValidate>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="visit-nama" className={styles.label}>Nama Orang Tua *</label>
                        <input
                          type="text"
                          id="visit-nama"
                          name="nama"
                          className={styles.input}
                          placeholder="Nama lengkap"
                          value={visitForm.nama}
                          onChange={handleVisitChange}
                          required
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="visit-namaAnak" className={styles.label}>Nama Anak *</label>
                        <input
                          type="text"
                          id="visit-namaAnak"
                          name="namaAnak"
                          className={styles.input}
                          placeholder="Nama si kecil"
                          value={visitForm.namaAnak}
                          onChange={handleVisitChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="visit-usia" className={styles.label}>Usia Anak *</label>
                        <select
                          id="visit-usia"
                          name="usia"
                          className={styles.input}
                          value={visitForm.usia}
                          onChange={handleVisitChange}
                          required
                        >
                          <option value="">Pilih usia</option>
                          {ageGroups.map((age) => (
                            <option key={age} value={age}>{age}</option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="visit-tanggal" className={styles.label}>Rencana Tanggal *</label>
                        <input
                          type="date"
                          id="visit-tanggal"
                          name="tanggal"
                          className={styles.input}
                          value={visitForm.tanggal}
                          onChange={handleVisitChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="visit-waktu" className={styles.label}>Pilihan Sesi Waktu *</label>
                        <select
                          id="visit-waktu"
                          name="waktu"
                          className={styles.input}
                          value={visitForm.waktu}
                          onChange={handleVisitChange}
                          required
                        >
                          <option value="Pagi (09:00 – 11:00 WIB)">Sesi Pagi (09.00 – 11.00 WIB)</option>
                          <option value="Siang (13:00 – 15:00 WIB)">Sesi Siang (13.00 – 15.00 WIB)</option>
                          <option value="Fleksibel / Sesuai Kesepakatan">Fleksibel / Sesuai Kesepakatan</option>
                        </select>
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="visit-wa" className={styles.label}>Nomor WhatsApp *</label>
                        <input
                          type="tel"
                          id="visit-wa"
                          name="wa"
                          className={styles.input}
                          placeholder="08xxxxxxxxxx"
                          value={visitForm.wa}
                          onChange={handleVisitChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="visit-pesan" className={styles.label}>Catatan Tambahan (Opsional)</label>
                      <textarea
                        id="visit-pesan"
                        name="pesan"
                        className={`${styles.input} ${styles.textarea}`}
                        placeholder="Catatan atau pertanyaan terkait kunjungan?"
                        rows={3}
                        value={visitForm.pesan}
                        onChange={handleVisitChange}
                      />
                    </div>

                    <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`} id="site-visit-form-submit">
                      Jadwalkan Kunjungan via WhatsApp 📅
                    </button>

                    <p className={styles.disclaimer}>
                      Dengan mengirim form ini, Anda menyetujui kami menghubungi Anda via WhatsApp untuk konfirmasi jadwal.
                    </p>
                  </form>
                ) : (
                  <div className={styles.success}>
                    <CheckCircle size={48} color="var(--color-green)" />
                    <h3 className={styles.successTitle}>Pengajuan Kunjungan Terkirim!</h3>
                    <p className={styles.successText}>
                      WhatsApp sedang terbuka. Tim Amana Care akan segera membalas dan mengonfirmasi jadwal kunjungan Anda. 🎉
                    </p>
                    <button className="btn btn-outline" onClick={() => setSubmittedVisit(false)}>
                      Jadwalkan Lagi
                    </button>
                  </div>
                )
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
                      <p className={styles.infoValue}>
                        <a
                          href="https://maps.app.goo.gl/wDcVkLnHHKspT3239"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.infoLink}
                          onClick={() => trackOutboundClick('https://share.google/IbDHnKDtXvBJQah2i', 'Contact Section Map Address')}
                        >
                          Ruko Kebayoran Square Blok D-01,<br />Bintaro Jaya Sektor 7, Pondok Aren,<br />Kota Tangerang Selatan, Banten
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
                      <p className={styles.infoLink}>Senin–Jumat<br />07.00–19.00 WIB</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <div className={`icon-container ${styles.infoIcon}`} style={{ background: 'rgba(37, 211, 102, 0.12)' }}>
                      <Phone size={20} color="#128C7E" />
                    </div>
                    <div>
                      <p className={styles.infoLabel}>WhatsApp</p>
                      <a
                        href="https://wa.me/6281513075155"
                        className={styles.infoLink}
                        onClick={() => trackContact('whatsapp', 'https://wa.me/6281513075155', 'Contact Section Phone Text')}
                      >
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
                        onClick={() => trackOutboundClick('https://www.instagram.com/haloamana', 'Contact Section Instagram')}
                      >
                        @haloamana
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/6281513075155?text=Halo%20Amana%20Care!%20Saya%20ingin%20info%20pendaftaran."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary ${styles.waButton}`}
                  id="contact-whatsapp-btn"
                  onClick={() => trackWhatsAppOpen('home_contact_section_cta')}
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
