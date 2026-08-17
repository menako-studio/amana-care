import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  trackEvent,
  trackPageView,
  trackLead,
  trackContact,
  trackSelectContent,
  trackCTAClick,
  trackWhatsAppOpen,
  trackPackageClick,
  trackVideoEvent,
  trackFAQOpen,
  trackCarouselInteraction,
  trackGalleryFilter,
  trackGalleryZoom,
  trackException,
} from '@/lib/analytics'

describe('Analytics Utility (GA4 & GTM)', () => {
  beforeEach(() => {
    window.dataLayer = []
    window.gtag = vi.fn()
  })

  it('should push event to dataLayer and gtag correctly', () => {
    trackEvent('custom_event', { key: 'value' })

    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'custom_event',
      expect.objectContaining({
        event: 'custom_event',
        key: 'value',
      })
    )

    expect(window.dataLayer?.length).toBe(1)
    expect(window.dataLayer?.[0]).toMatchObject({
      event: 'custom_event',
      key: 'value',
    })
  })

  it('should dispatch SPA pageview events to gtag and dataLayer', () => {
    trackPageView('/layanan', 'Biaya & Paket Daycare')

    expect(window.gtag).toHaveBeenCalledWith('event', 'page_view', {
      page_path: '/layanan',
      page_location: 'http://localhost:3000/',
      page_title: 'Biaya & Paket Daycare',
    })

    const virtualPageView = window.dataLayer?.find(
      (entry) => entry.event === 'virtual_pageview'
    )
    expect(virtualPageView).toBeDefined()
    expect(virtualPageView?.page_path).toBe('/layanan')
  })

  it('should dispatch generate_lead event', () => {
    trackLead('kontak_form', '1–2 tahun', 'whatsapp', { child_name: 'Budi' })

    const leadEvent = window.dataLayer?.find(
      (entry) => entry.event === 'generate_lead'
    )
    expect(leadEvent).toBeDefined()
    expect(leadEvent?.form_name).toBe('kontak_form')
    expect(leadEvent?.age_group).toBe('1–2 tahun')
  })

  it('should dispatch contact and whatsapp_open events', () => {
    trackContact('whatsapp', 'https://wa.me/6281513075155', 'navbar_button')

    const contactEvent = window.dataLayer?.find(
      (entry) => entry.event === 'contact'
    )
    const waEvent = window.dataLayer?.find(
      (entry) => entry.event === 'whatsapp_open'
    )

    expect(contactEvent).toBeDefined()
    expect(waEvent).toBeDefined()
    expect(waEvent?.source).toBe('navbar_button')
  })

  it('should dispatch select_content and cta_click events', () => {
    trackCTAClick('Daftar Sekarang Hero', '/kontak', 'Hero Section')

    const ctaEvent = window.dataLayer?.find((entry) => entry.event === 'cta_click')
    expect(ctaEvent).toBeDefined()
    expect(ctaEvent?.event_label).toBe('Daftar Sekarang Hero')
    expect(ctaEvent?.destination).toBe('/kontak')
  })

  it('should dispatch video and media interactions', () => {
    trackVideoEvent('open_lightbox', 'Baby First Senses', 'baby-first-senses')

    const videoEvent = window.dataLayer?.find(
      (entry) => entry.event === 'video_open_lightbox'
    )
    expect(videoEvent).toBeDefined()
    expect(videoEvent?.video_title).toBe('Baby First Senses')
  })

  it('should dispatch package click event', () => {
    trackPackageClick('Daycare Bulanan', 'Rp 3.450.000 / bulan', 'Monthly Fee')

    const pkgEvent = window.dataLayer?.find(
      (entry) => entry.event === 'select_package'
    )
    expect(pkgEvent).toBeDefined()
    expect(pkgEvent?.package_name).toBe('Daycare Bulanan')
  })

  it('should dispatch FAQ and carousel interactions', () => {
    trackFAQOpen('Berapa rasio antara pengasuh dan anak?', 1)
    trackCarouselInteraction('testimonials', 2, 'next')

    const faqEvent = window.dataLayer?.find((entry) => entry.event === 'faq_open')
    const carouselEvent = window.dataLayer?.find(
      (entry) => entry.event === 'carousel_interaction'
    )

    expect(faqEvent).toBeDefined()
    expect(carouselEvent).toBeDefined()
    expect(carouselEvent?.slide_index).toBe(2)
  })

  it('should dispatch gallery filter, zoom, and exception events', () => {
    trackGalleryFilter('aktivitas')
    trackGalleryZoom('/images/photo.webp', 'Anak bermain')
    trackException('404_not_found', false)

    expect(window.dataLayer?.some((e) => e.event === 'gallery_filter')).toBe(true)
    expect(window.dataLayer?.some((e) => e.event === 'gallery_zoom')).toBe(true)
    expect(window.dataLayer?.some((e) => e.event === 'exception')).toBe(true)
  })
})
