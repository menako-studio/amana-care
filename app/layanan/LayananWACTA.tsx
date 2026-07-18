'use client'

import { trackWhatsAppOpen } from '@/lib/analytics'

export default function LayananWACTA() {
  return (
    <a
      href="https://wa.me/6281513075155?text=Halo%20Amana%20Care!%20Saya%20ingin%20tahu%20lebih%20banyak%20tentang%20pilihan%20layanan."
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-white btn-lg"
      onClick={() => trackWhatsAppOpen('layanan_page_cta')}
    >
      Hubungi Tim Layanan Kami 💬
    </a>
  )
}
