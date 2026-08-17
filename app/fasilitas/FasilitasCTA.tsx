'use client'

import Link from 'next/link'
import { trackCTAClick } from '@/lib/analytics'

export function FasilitasTrackedCTA() {
  return (
    <Link
      href="/kontak"
      className="btn btn-primary btn-lg"
      id="fasilitas-cta-daftar"
      onClick={() => trackCTAClick('Jadwalkan Kunjungan Fasilitas', '/kontak', 'Fasilitas Bottom CTA')}
    >
      Jadwalkan Kunjungan 📍
    </Link>
  )
}
