/**
 * Amana Care — GA4 Analytics Utility
 * Centralized event tracking helpers for Google Analytics 4.
 * All events fire only client-side and only when gtag is available.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/** Base event dispatcher */
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...params,
    })
  }
}

/** CTA button click (Daftar Sekarang, Konsultasi, dll) */
export const trackCTAClick = (label: string, destination: string) =>
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: label,
    destination,
  })

/** WhatsApp button click from any source */
export const trackWhatsAppOpen = (source: string) =>
  trackEvent('whatsapp_open', {
    event_category: 'conversion',
    event_label: source,
    source,
  })

/** Form submission (pendaftaran / kontak) */
export const trackFormSubmit = (formName: string, ageGroup?: string) =>
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formName,
    form_name: formName,
    ...(ageGroup ? { age_group: ageGroup } : {}),
  })

/** FAQ accordion opened */
export const trackFAQOpen = (question: string, index: number) =>
  trackEvent('faq_open', {
    event_category: 'engagement',
    event_label: question.substring(0, 100),
    faq_index: index,
  })

/** Gallery category filter changed */
export const trackGalleryFilter = (category: string) =>
  trackEvent('gallery_filter', {
    event_category: 'engagement',
    event_label: category,
    filter_category: category,
  })

/** Gallery image zoom opened */
export const trackGalleryZoom = (imageSrc: string, altText: string) =>
  trackEvent('gallery_zoom', {
    event_category: 'engagement',
    event_label: altText.substring(0, 100),
    image_src: imageSrc,
  })
