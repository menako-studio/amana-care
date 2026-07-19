'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="id">
      <body style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '40px' }}>
        <h2>Terjadi Kesalahan Sistem Internal</h2>
        <p>Tim pengembang Amana Care telah menerima laporan kesalahan ini.</p>
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => reset()}
            style={{
              padding: '10px 20px',
              backgroundColor: '#39C2E7',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Coba Lagi
          </button>
          <Link href="/" style={{ color: '#39C2E7', textDecoration: 'none' }}>
            Kembali ke Beranda
          </Link>
        </div>
      </body>
    </html>
  )
}
