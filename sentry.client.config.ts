import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || 'https://examplePublicKey@o0.ingest.sentry.io/0',

  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replays for 10% of all sessions, plus 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  // Enable Session Replay integration
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],

  // Debug mode disabled in production
  debug: false,
})
