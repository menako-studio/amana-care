/**
 * Amana Care — Unified GA4 & GTM Analytics Utility
 * Centralized event tracking helpers for Google Analytics 4 and Google Tag Manager.
 * All events fire client-side and push to both gtag and dataLayer seamlessly.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: Record<string, unknown>[]
  }
}

/** Base event dispatcher pushing to both GA4 (gtag) and GTM (dataLayer) */
export const trackEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return

  const payload = {
    event: eventName,
    event_category: 'engagement',
    timestamp: new Date().toISOString(),
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...params,
  }

  // GA4 direct dispatch
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
  }

  // GTM dataLayer dispatch
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload)
  }
}

/**
 * GA4 Recommended Event: generate_lead
 * Fired when user submits a contact form, site visit request, or pendaftaran.
 */
export const trackLead = (formName: string, ageGroup?: string, method = 'whatsapp') => {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    form_name: formName,
    method,
    ...(ageGroup ? { age_group: ageGroup } : {}),
  })

  // Backwards compatibility custom event
  trackEvent('form_submit', {
    event_category: 'conversion',
    form_name: formName,
    ...(ageGroup ? { age_group: ageGroup } : {}),
  })
}

/**
 * GA4 Recommended Event: contact
 * Fired when user clicks WhatsApp, phone number, email, or contact button.
 */
export const trackContact = (contactType: 'whatsapp' | 'phone' | 'email', destination: string, source: string) => {
  trackEvent('contact', {
    event_category: 'conversion',
    contact_type: contactType,
    destination,
    source,
  })

  if (contactType === 'whatsapp') {
    trackEvent('whatsapp_open', {
      event_category: 'conversion',
      source,
    })
  }
}

/**
 * GA4 Recommended Event: select_content
 * Fired when user interacts with tabs (Program age groups), FAQ, or gallery filters.
 */
export const trackSelectContent = (contentType: string, itemId: string, label?: string) => {
  trackEvent('select_content', {
    event_category: 'engagement',
    content_type: contentType,
    item_id: itemId,
    ...(label ? { event_label: label } : {}),
  })
}

/** CTA button click (Daftar Sekarang, Konsultasi, dll) */
export const trackCTAClick = (label: string, destination: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: label,
    destination,
  })
  trackSelectContent('cta_button', label, destination)
}

/** WhatsApp button click wrapper */
export const trackWhatsAppOpen = (source: string) => {
  trackContact('whatsapp', 'https://wa.me/6281513075155', source)
}

/** Form submission wrapper */
export const trackFormSubmit = (formName: string, ageGroup?: string) => {
  trackLead(formName, ageGroup)
}

/** Outbound link click (Google Maps, Instagram, etc) */
export const trackOutboundClick = (url: string, label: string) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: label,
    link_url: url,
    outbound: true,
  })
}

/** FAQ accordion opened */
export const trackFAQOpen = (question: string, index: number) => {
  trackSelectContent('faq', `faq_${index}`, question.substring(0, 100))
  trackEvent('faq_open', {
    event_category: 'engagement',
    event_label: question.substring(0, 100),
    faq_index: index,
  })
}

/** Gallery category filter changed */
export const trackGalleryFilter = (category: string) => {
  trackSelectContent('gallery_filter', category, category)
  trackEvent('gallery_filter', {
    event_category: 'engagement',
    event_label: category,
    filter_category: category,
  })
}

/** Gallery image zoom opened */
export const trackGalleryZoom = (imageSrc: string, altText: string) => {
  trackSelectContent('gallery_image', imageSrc, altText.substring(0, 100))
  trackEvent('gallery_zoom', {
    event_category: 'engagement',
    event_label: altText.substring(0, 100),
    image_src: imageSrc,
  })
}

