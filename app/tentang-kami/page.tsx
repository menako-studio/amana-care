import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Kenali visi, misi, nilai-nilai utama, dan tim di balik Amana Care daycare & parents working space Bintaro Sektor 7.',
}

const team = [
  { name: 'Dr. Elizabeth Shanti, M.Psi.', role: 'Child Psychologist', desc: 'Konsultan tumbuh kembang anak berkala di Amana Care.', avatar: '🧠' },
  { name: 'Kak Fitri Aulia', role: 'Head of Caregiver', desc: 'Berpengalaman >8 tahun di dunia PAUD & penitipan anak.', avatar: '👩‍🏫' },
  { name: 'Kak Riana Indah', role: 'Lead Nurse / Caregiver', desc: 'Perawat anak bersertifikasi pertolongan pertama (P3K).', avatar: '👩‍⚕️' },
  { name: 'Kak Sarah Nadia', role: 'Caregiver & Educator', desc: 'Lulusan Pendidikan Guru PAUD, fokus stimulasi motorik.', avatar: '👩' },
]

export default function TentangKami() {
  return (
    <div className={styles.wrapper}>
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
                  src="/images/hero-children-play.png"
                  alt="Anak-anak aktif di Amana Care"
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
                  Amana Care didirikan oleh sekelompok orang tua dan praktisi pendidikan anak yang menyadari
                  tantangan nyata para orang tua bekerja di wilayah perkotaan seperti Bintaro. Menemukan tempat penitipan anak
                  yang benar-benar tepercaya, aman, sekaligus menstimulasi tumbuh kembang anak dengan optimal bukanlah hal mudah.
                </p>
                <p className={styles.p}>
                  Kami ingin menciptakan ruang di mana anak-anak merasa dicintai dan dapat bermain secara bebas
                  namun terarah, sementara orang tua mereka dapat bekerja dengan fokus tanpa diliputi kecemasan. Oleh karena itu,
                  kami mengintegrasikan <strong>Daycare premium</strong> dengan fasilitas <strong>Parents Working Space</strong> di lokasi yang sama.
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
                    "Amana Care didirikan atas dasar amanah dan kasih sayang. Sebagai orang tua bekerja, saya memahami betapa berharganya ketenangan pikiran saat menitipkan buah hati. Kami di Amana Care berkomitmen untuk memberikan lingkungan belajar berbasis bermain yang menstimulasi tumbuh kembang si kecil secara optimal, bersih, dan terpantau aman layaknya rumah kedua mereka."
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
                  <div className={styles.founderAvatarPlaceholder}>
                    <span>AS</span>
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

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <ScrollReveal direction="up">
            <div className={styles.sectionHeader}>
              <span className="section-label">💎 Nilai Utama</span>
              <h2 className="heading-2">Prinsip Kerja Kami</h2>
              <p className={styles.sectionSubtitle}>
                Empat pilar utama yang mendasari setiap keputusan dan tindakan pelayanan kami sehari-hari.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-4">
            {[
              { title: 'Amanah', icon: '🤝', desc: 'Kami memegang teguh amanah dan kepercayaan dari orang tua untuk menjaga dan mendidik buah hatinya.' },
              { title: 'Kasih', icon: '❤️', desc: 'Kasih sayang yang tulus menjadi motor utama pengasuhan kami di setiap sentuhan dan interaksi.' },
              { title: 'Tumbuh', icon: '🌱', desc: 'Mendorong stimulasi aspek sensorik, motorik, kognitif, dan sosio-emosional anak di setiap usianya.' },
              { title: 'Kreatif', icon: '🎨', desc: 'Menghadirkan kurikulum berbasis bermain (play-based learning) untuk eksplorasi tanpa batas.' },
            ].map((value, i) => (
              <ScrollReveal key={value.title} direction="up" delay={i * 80}>
                <div className={`card ${styles.valueCard}`}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
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
