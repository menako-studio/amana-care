import type { Metadata } from 'next'

// Halaman uji Sentry — jangan diindeks mesin pencari.
export const metadata: Metadata = {
  title: 'Sentry Test',
  robots: { index: false, follow: false },
}

export default function SentryExampleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
