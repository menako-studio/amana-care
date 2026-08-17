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

  const payload: Record<string, unknown> = {
    event: eventName,
    event_category: params?.event_category || 'engagement',
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
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(payload)
  }
}

/**
 * GA4 & GTM SPA Pageview Dispatcher
 * Tracks virtual pageviews when navigating client-side in Next.js App Router
 */
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined') return

  const pageTitle = title || (typeof document !== 'undefined' ? document.title : '')
  const pageLocation = typeof window !== 'undefined' ? window.location.href : url

  // GA4 standard config / page_view
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_location: pageLocation,
      page_title: pageTitle,
    })
  }

  // GTM standard virtual pageview
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'virtual_pageview',
      page_path: url,
      page_location: pageLocation,
      page_title: pageTitle,
      timestamp: new Date().toISOString(),
    })
  }
}

/**
 * GA4 Recommended Event: generate_lead
 * Fired when user submits a contact form, site visit request, or pendaftaran.
 */
export const trackLead = (
  formName: string,
  ageGroup?: string,
  method = 'whatsapp',
  extraParams?: Record<string, unknown>
) => {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    form_name: formName,
    method,
    ...(ageGroup ? { age_group: ageGroup } : {}),
    ...extraParams,
  })

  // Backwards compatibility custom event
  trackEvent('form_submit', {
    event_category: 'conversion',
    form_name: formName,
    method,
    ...(ageGroup ? { age_group: ageGroup } : {}),
    ...extraParams,
  })
}

/**
 * GA4 Recommended Event: contact
 * Fired when user clicks WhatsApp, phone number, email, or contact button.
 */
export const trackContact = (
  contactType: 'whatsapp' | 'phone' | 'email',
  destination: string,
  source: string,
  extraParams?: Record<string, unknown>
) => {
  trackEvent('contact', {
    event_category: 'conversion',
    contact_type: contactType,
    destination,
    source,
    ...extraParams,
  })

  if (contactType === 'whatsapp') {
    trackEvent('whatsapp_open', {
      event_category: 'conversion',
      source,
      destination,
      ...extraParams,
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
export const trackCTAClick = (label: string, destination: string, section?: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: label,
    destination,
    ...(section ? { section_name: section } : {}),
  })
  trackSelectContent('cta_button', label, destination)
}

/** WhatsApp button click wrapper */
export const trackWhatsAppOpen = (source: string, metadata?: Record<string, unknown>) => {
  trackContact('whatsapp', 'https://wa.me/6281513075155', source, metadata)
}

/** Form submission wrapper */
export const trackFormSubmit = (formName: string, ageGroup?: string, extraParams?: Record<string, unknown>) => {
  trackLead(formName, ageGroup, 'whatsapp', extraParams)
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

/** Daycare package / service selection */
export const trackPackageClick = (packageName: string, price?: string | null, feeType?: string | null) => {
  trackEvent('select_package', {
    event_category: 'engagement',
    package_name: packageName,
    ...(price ? { price } : {}),
    ...(feeType ? { fee_type: feeType } : {}),
  })
  trackSelectContent('package_pricing', packageName, price || 'Consultation')
}

/** Video interaction (Video reels & YouTube embeds) */
export const trackVideoEvent = (
  action: 'play' | 'pause' | 'complete' | 'open_lightbox' | 'mute' | 'unmute',
  videoTitle: string,
  videoId?: string
) => {
  trackEvent(`video_${action}`, {
    event_category: 'video',
    video_title: videoTitle,
    ...(videoId ? { video_id: videoId } : {}),
  })
}

/** FAQ accordion interaction */
export const trackFAQOpen = (question: string, index: number) => {
  trackSelectContent('faq', `faq_${index}`, question.substring(0, 100))
  trackEvent('faq_open', {
    event_category: 'engagement',
    event_label: question.substring(0, 100),
    faq_index: index,
  })
}

/** Carousel interaction */
export const trackCarouselInteraction = (carouselName: string, slideIndex: number, action: 'next' | 'prev' | 'dot') => {
  trackEvent('carousel_interaction', {
    event_category: 'engagement',
    carousel_name: carouselName,
    slide_index: slideIndex,
    action,
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

/** 404 / Error exception tracking */
export const trackException = (description: string, isFatal = false) => {
  trackEvent('exception', {
    event_category: 'error',
    description,
    fatal: isFatal,
  })
}
