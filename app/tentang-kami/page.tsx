import type { Metadata } from 'next'
import Image from 'next/image'
import { GraduationCap, HeartPulse, Laptop, ClipboardCheck, Sparkles } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Tentang Amana Care — Daycare & Working Space Terpercaya Bintaro Sektor 7',
  description:
    'Profil Amana Care Bintaro Sektor 7: Visi, misi, nilai pengasuhan Montessori, & tim pengasuh profesional pendamping tumbuh kembang anak 0–6 th.',
  alternates: {
    canonical: 'https://www.amanacare.id/tentang-kami',
  },
  openGraph: {
    title: 'Tentang Amana Care — Daycare Terpercaya di Bintaro Sektor 7',
    description:
      'Profil Amana Care Bintaro Sektor 7: Visi, misi, nilai pengasuhan Montessori, & tim pengasuh profesional pendamping tumbuh kembang anak 0–6 th.',
    url: 'https://www.amanacare.id/tentang-kami',
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://amanacare.id/tentang-kami',
      url: 'https://amanacare.id/tentang-kami',
      name: 'Tentang Amana Care — Visi, Misi & Tim',
      description:
        'Halaman tentang Amana Care, daycare dan parents working space premium di Bintaro Sektor 7. Memuat visi, misi, nilai-nilai utama, dan profil tim pengasuh profesional.',
      mainEntity: { '@id': 'https://amanacare.id/#organization' },
    },
    {
      '@type': 'Person',
      name: 'Adiwerti Sarahayu Lestari, S.H.',
      jobTitle: 'Pendiri & Direktur',
      worksFor: { '@id': 'https://amanacare.id/#organization' },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Universitas Indonesia',
        department: 'Fakultas Hukum',
      },
    },
  ],
}

const team = [
  { name: 'Miss Rosyi, S.Pd.', role: 'Head Teacher', desc: 'Sudah mengajar 4 tahun di Amana Care. Sarjana Pendidikan Guru Anak Usia Dini di UNJ.', avatar: '👩‍🏫' },
  { name: 'Miss Mara', role: 'Teacher', desc: 'Sudah mengajar 2.5 tahun di Amana Care. Pendidikan Guru Anak Usia Dini di UNJ.', avatar: '👩‍🏫' },
  { name: 'Miss Dinda', role: 'Caregiver', desc: 'Sudah bekerja di Amana selama 1.5 tahun. Lulusan SMK jurusan Layanan Kesehatan.', avatar: '👩' },
  { name: 'Miss Ola', role: 'Caregiver', desc: 'Sudah bekerja di Amana selama 1.5 tahun. Lulusan SMK jurusan Layanan Kesehatan.', avatar: '👩' },
  { name: 'Miss Daffa', role: 'Caregiver', desc: 'Sudah bekerja di Amana selama 2 tahun. Lulusan SMK jurusan Layanan Kesehatan.', avatar: '👩' },
  { name: 'Miss Mayla', role: 'Staf Bagian Umum & Rumah Tangga', desc: 'Lulusan SMK jurusan Akuntansi. Memastikan operasional dan kenyamanan harian berjalan optimal.', avatar: '👩' },
]

export default function TentangKami() {
  return (
    <div className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {/* Banner / Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-daycare-room.png"
            alt="Fasilitas daycare Amana Care yang bersih dan aman"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <ScrollReveal direction="up">
            <span className={styles.heroBadge}>Kisah Kami</span>
            <h1 className="heading-1" style={{ color: 'var(--color-white)' }}>
              Tentang Amana Care
            </h1>
            <p className={styles.heroSubtitle}>
              Mendedikasikan diri untuk memberikan pengasuhan terbaik yang amanah, aman, dan penuh kasih.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <ScrollReveal direction="left">
              <div className={styles.storyVisual}>
                <Image
                  src="/images/hero-layanan.png"
                  alt="Anak-anak bermain gembira didampingi pengasuh sementara orang tua fokus bekerja di parents working space"
                  width={500}
                  height={400}
                  className="img-rounded"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className={styles.storyText}>
                <span className="section-label">🌱 Cerita Kami</span>
                <h2 className="heading-2">Mengapa Amana Care Lahir?</h2>
                <p className={styles.p}>
                  Amana Care berawal dari pengalaman pribadi sebagai orang tua bekerja – menyadari bahwa pendampingan yang tepat selama masa tumbuh kembang anak adalah kebutuhan, bukan pilihan.
                </p>
                <p className={styles.p}>
                  Kami hadir menjadi <strong>rumah kedua</strong> bagi anak usia 6 bulan hingga 6 tahun untuk tumbuh dalam suasana yang hangat dan terlindungi, sekaligus mitra terpercaya bagi para orang tua yang ingin tetap terlibat penuh dalam perjalanan tumbuh kembang si kecil.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className={`section ${styles.founderSection}`}>
        <div className="container">
          <div className={styles.founderGrid}>
            <ScrollReveal direction="left">
              <div className={styles.founderMessage}>
                <span className="section-label">👩‍💼 Sambutan Pendiri</span>
                <h2 className="heading-2">Mendedikasikan Kepercayaan &amp; Cinta</h2>
                <div className={styles.founderQuoteBlock}>
                  <p className={styles.founderQuote}>
                    &quot;Amana Care didirikan atas dasar amanah dan kasih sayang. Sebagai orang tua bekerja, saya memahami betapa berharganya ketenangan pikiran saat menitipkan buah hati. Kami di Amana Care berkomitmen untuk memberikan lingkungan belajar berbasis bermain yang menstimulasi tumbuh kembang si kecil secara optimal, bersih, dan terpantau aman layaknya rumah kedua mereka.&quot;
                  </p>
                </div>
                <div className={styles.founderProfile}>
                  <p className={styles.founderName}>Adiwerti Sarahayu Lestari, S.H.</p>
                  <p className={styles.founderTitle}>Pendiri &amp; Direktur Amana Care</p>
                  <p className={styles.founderMeta}>Fakultas Hukum, Universitas Indonesia</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <div className={styles.founderVisual}>
                <div className={styles.founderImgFrame}>
                  <div className={styles.founderAvatarWrapper}>
                    <Image
                      src="/images/team/adiwerti-sarahayu.jpeg"
                      alt="Adiwerti Sarahayu Lestari, S.H. - Founder & Owner Amana Care"
                      fill
                      sizes="128px"
                      className={styles.founderImg}
                    />
                  </div>
                  <div className={styles.founderVisualTag}>
                    <p className={styles.fvtTitle}>Founder &amp; Owner</p>
                    <p className={styles.fvtDesc}>Amana Care Bintaro</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">🎯 Visi &amp; Misi</span>
              <h2 className="heading-2">Visi &amp; Misi Kami</h2>
              <p className={styles.sectionSubtitle}>
                Komitmen Amana Care dalam memberikan layanan daycare dan pengasuhan anak usia dini terbaik di Indonesia.
              </p>
            </div>
          </ScrollReveal>

          {/* Visi Hero Card */}
          <ScrollReveal direction="up" delay={80}>
            <div className={styles.visiCard}>
              <div className={styles.visiBadge}>
                <Sparkles size={16} color="var(--color-primary-dark)" />
                <span>Visi Utama</span>
              </div>
              <p className={styles.visiText}>
                &ldquo;Menjadi rumah kedua terpercaya bagi anak Indonesia, dan mitra andalan bagi orang tua bekerja.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          {/* Misi Cards Grid */}
          <div className={styles.misiHeader}>
            <h3 className={styles.misiTitle}>
              4 Pilar Misi Kami
            </h3>
          </div>

          <div className={styles.misiGrid}>
            {[
              {
                num: '01',
                title: 'Pengasuhan & Pendidikan Terpadu',
                desc: 'Menggabungkan pengasuhan dan pendidikan anak usia dini dalam satu layanan daycare terpadu, didukung tim guru berlatar belakang S1 PAUD dan caregiver berlatar pendidikan kesehatan/keperawatan minimal SMK.',
                icon: GraduationCap,
                color: 'var(--color-primary)',
                bg: 'rgba(57, 194, 231, 0.12)',
              },
              {
                num: '02',
                title: 'Layanan Pengasuhan Menyeluruh',
                desc: 'Menyediakan layanan pengasuhan anak yang menyeluruh, yakni durasi daycare 12 jam, penyediaan katering sehat untuk anak, termasuk screening tumbuh kembang bersama tim psikolog dan check-up dokter gigi, demi memastikan anak berkembang optimal secara fisik maupun psikologis.',
                icon: HeartPulse,
                color: '#10B981',
                bg: 'rgba(16, 185, 129, 0.12)',
              },
              {
                num: '03',
                title: 'Dukungan Produktivitas Orang Tua',
                desc: 'Mendukung produktivitas orang tua bekerja dengan fasilitas parents working space, sehingga orang tua tetap dapat menyelesaikan pekerjaan sembari tetap dekat dengan anak.',
                icon: Laptop,
                color: '#F59E0B',
                bg: 'rgba(245, 158, 11, 0.12)',
              },
              {
                num: '04',
                title: 'Kemitraan Aktif & Laporan Harian',
                desc: 'Membangun kemitraan aktif dengan orang tua dalam setiap tahap tumbuh kembang anak, dengan memberikan laporan harian yang terperinci, lengkap dengan dokumentasi, dan diskusi untuk mendukung proses tumbuh kembang anak.',
                icon: ClipboardCheck,
                color: '#8B5CF6',
                bg: 'rgba(139, 92, 246, 0.12)',
              },
            ].map((misi, i) => {
              const Icon = misi.icon
              return (
                <ScrollReveal key={misi.num} direction="up" delay={100 + i * 80}>
                  <div className={styles.misiCard}>
                    <div className={styles.misiCardTop}>
                      <div className={styles.misiIconBox} style={{ background: misi.bg }}>
                        <Icon size={24} color={misi.color} />
                      </div>
                      <span className={styles.misiNumber}>{misi.num}</span>
                    </div>
                    <h4 className={styles.misiCardTitle}>{misi.title}</h4>
                    <p className={styles.misiCardDesc}>{misi.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">👩‍🏫 Tim Profesional</span>
              <h2 className="heading-2">Didampingi Pengasuh Terbaik</h2>
              <p className={styles.sectionSubtitle}>
                Fasilitator dan pengasuh kami telah terlatih secara profesional dalam psikologi dan penanganan anak usia dini.
              </p>
            </div>
          </ScrollReveal>

          {/* Team Video Intro Grid */}
          <div className={styles.teamIntroGrid}>
            <ScrollReveal direction="left" className={styles.teamIntroText}>
              <h3 className={styles.teamIntroTitle}>Komitmen Pengasuhan Sepenuh Hati</h3>
              <p className={styles.teamIntroDesc}>
                Setiap anggota tim kami melewati proses seleksi ketat dan pelatihan berkelanjutan. Kami memiliki komitmen tinggi untuk menghadirkan lingkungan pengasuhan yang aman, bersih, stimulatif, dan dipenuhi kasih sayang layaknya rumah kedua bagi buah hati Anda.
              </p>
              <p className={styles.teamIntroDesc}>
                Tonton video perkenalan singkat tim kami di samping untuk melihat bagaimana dedikasi kami berpadu dalam aktivitas keseharian bersama si kecil.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className={styles.teamIntroVideoCol} delay={100}>
              <div className={styles.videoCard}>
                <video 
                  src="/videos/amanacare-about-meet-the-team.webm" 
                  className={styles.introVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                />
                <span className={styles.videoTag}>🎬 Meet the Team</span>
              </div>
            </ScrollReveal>
          </div>
 
          <div className="grid-4" style={{ marginTop: 'var(--space-16)' }}>
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 80}>
                <div className={styles.teamCard}>
                  <div className={styles.teamAvatar}>{member.avatar}</div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <div className={styles.teamDivider} />
                  <p className={styles.teamDesc}>{member.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
