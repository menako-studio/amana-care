import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Jangan blokir /_next/ — Googlebot butuh CSS/JS untuk render halaman.
        // /monitoring = Sentry tunnel route.
        disallow: ['/api/', '/monitoring'],
      },
    ],
    sitemap: 'https://www.amanacare.id/sitemap.xml',
  }
}
