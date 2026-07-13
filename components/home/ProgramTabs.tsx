'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './ProgramTabs.module.css'

const programs = [
  {
    id: 'infant',
    label: 'Bayi 0–1 Thn',
    emoji: '👶',
    title: 'Program Bayi',
    subtitle: 'Fondasi tumbuh kembang yang kuat',
    features: [
      'Stimulasi sensorik setiap hari',
      'Jadwal makan & tidur personal',
      'Musik & lagu pengantar',
      'Baby gym dan tummy time',
      'Laporan harian detail',
      'Dukungan ASI & MPASI',
    ],
    color: '#00B4D8',
    bg: 'rgba(0, 180, 216, 0.08)',
    desc: 'Di usia 0–1 tahun, kami menyediakan lingkungan yang penuh kasih dengan stimulasi sensorik yang tepat, rutinitas yang konsisten, dan pengasuhan personal.',
  },
  {
    id: 'toddler',
    label: 'Batita 1–3 Thn',
    emoji: '🧒',
    title: 'Program Batita',
    subtitle: 'Eksplorasi dan perkembangan bahasa',
    features: [
      'Bermain peran & sosial',
      'Perkembangan bahasa verbal',
      'Keterampilan motorik halus & kasar',
      'Toilet training support',
      'Seni dan kreativitas',
      'Pengenalan alam & lingkungan',
    ],
    color: '#FFD166',
    bg: 'rgba(255, 209, 102, 0.12)',
    desc: 'Masa batita adalah periode emas perkembangan bahasa dan motorik. Program kami dirancang untuk stimulasi optimal melalui bermain yang terstruktur dan bebas.',
  },
  {
    id: 'preschool',
    label: 'Pra-sekolah 3–6 Thn',
    emoji: '🎒',
    title: 'Program Pra-sekolah',
    subtitle: 'Siap untuk perjalanan belajar',
    features: [
      'Pengenalan literasi & berhitung',
      'Kemampuan sosial & emosional',
      'Kemandirian & tanggung jawab',
      'Persiapan masuk SD',
      'Olahraga & koordinasi tubuh',
      'Proyek kolaborasi & presentasi',
    ],
    color: '#06D6A0',
    bg: 'rgba(6, 214, 160, 0.10)',
    desc: 'Di usia 3–6 tahun, anak Anda siap belajar lebih banyak. Program pra-sekolah kami mempersiapkan mereka secara akademik dan emosional untuk jenjang SD.',
  },
]

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState('toddler')
  const active = programs.find((p) => p.id === activeTab)!

  return (
    <section className={`section ${styles.section}`} aria-labelledby="program-heading">
      <div className="container">
        <ScrollReveal direction="up">
          <div className={styles.header}>
            <span className="section-label">🎯 Program Kami</span>
            <h2 className="heading-2" id="program-heading">
              Program untuk <span style={{ color: 'var(--color-primary)' }}>setiap usia</span>
            </h2>
            <p className={styles.subtitle}>
              Kurikulum yang disesuaikan dengan tahap perkembangan anak, bukan one-size-fits-all.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Buttons */}
        <ScrollReveal direction="up" delay={100}>
          <div className={styles.tabs} role="tablist" aria-label="Pilihan program berdasarkan usia">
            {programs.map((prog) => (
              <button
                key={prog.id}
                role="tab"
                aria-selected={activeTab === prog.id}
                aria-controls={`panel-${prog.id}`}
                id={`tab-${prog.id}`}
                className={`${styles.tab} ${activeTab === prog.id ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(prog.id)}
                style={activeTab === prog.id ? { background: prog.color, borderColor: prog.color } : {}}
              >
                <span className={styles.tabEmoji}>{prog.emoji}</span>
                {prog.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <ScrollReveal key={activeTab} direction="up" delay={50}>
          <div
            className={styles.panel}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            style={{ borderColor: active.color + '40', background: active.bg }}
          >
            <div className={styles.panelGrid}>
              {/* Info */}
              <div className={styles.panelInfo}>
                <span className={styles.panelEmoji}>{active.emoji}</span>
                <h3 className={styles.panelTitle}>{active.title}</h3>
                <p className={styles.panelSubtitle} style={{ color: active.color }}>{active.subtitle}</p>
                <p className={styles.panelDesc}>{active.desc}</p>

                <ul className={styles.features}>
                  {active.features.map((feat) => (
                    <li key={feat} className={styles.feature}>
                      <CheckCircle size={18} style={{ color: active.color, flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={styles.panelVisual}>
                <div className={styles.visualCard} style={{ borderColor: active.color + '30' }}>
                  <div className={styles.visualEmoji}>{active.emoji}</div>
                  <p className={styles.visualTitle}>{active.title}</p>
                  <p className={styles.visualTag} style={{ color: active.color }}>Amana Care</p>
                  <div className={styles.visualDivider} style={{ background: active.color }} />
                  <div className={styles.visualStats}>
                    <div className={styles.visualStat}>
                      <span className={styles.vsNum} style={{ color: active.color }}>
                        {active.id === 'infant' ? '0–12' : active.id === 'toddler' ? '1–3' : '3–6'}
                      </span>
                      <span className={styles.vsLabel}>Tahun</span>
                    </div>
                    <div className={styles.vsDivider} />
                    <div className={styles.visualStat}>
                      <span className={styles.vsNum} style={{ color: active.color }}>
                        {active.features.length}
                      </span>
                      <span className={styles.vsLabel}>Program</span>
                    </div>
                    <div className={styles.vsDivider} />
                    <div className={styles.visualStat}>
                      <span className={styles.vsNum} style={{ color: active.color }}>12</span>
                      <span className={styles.vsLabel}>Jam/Hari</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
