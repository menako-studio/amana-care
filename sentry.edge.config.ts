import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || 'https://examplePublicKey@o0.ingest.sentry.io/0',

  // Performance Monitoring
  tracesSampleRate: 1.0,

  // Debug mode disabled in production
  debug: false,
})
