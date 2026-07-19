import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // Sentry project options
  org: process.env.SENTRY_ORG || "amana-care",
  project: process.env.SENTRY_PROJECT || "amana-care-web",

  // Suppress warnings in non-Sentry build environments
  silent: !process.env.CI,

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
