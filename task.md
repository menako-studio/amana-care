# Amana Care Website — Build Tasks

## Phase 1: Project Setup
- [x] Research & Implementation Plan
- [x] Initialize Next.js 15 project
- [x] Install dependencies (framer-motion, lucide-react, react-hook-form, zod, @supabase/supabase-js, resend)
- [x] Generate placeholder images (hero, gallery, programs, team)

## Phase 2: Design System
- [x] app/globals.css — CSS variables, base styles, animations
- [x] lib/fonts.ts — Nunito + Inter via next/font
- [x] app/layout.tsx — Root layout with metadata

## Phase 3: Layout Components
- [x] components/layout/AnnouncementBar.tsx
- [x] components/layout/Navbar.tsx (desktop + mobile overlay)
- [x] components/layout/Footer.tsx

## Phase 4: UI Primitives
- [x] components/ui/ScrollReveal.tsx (Framer Motion wrapper)
- [x] components/WhatsAppFloat.tsx

## Phase 5: Home Page Sections
- [x] HeroSection.tsx
- [x] TrustTicker.tsx
- [x] MissionSection.tsx
- [x] FeaturesGrid.tsx
- [x] DayTimeline.tsx
- [x] ProgramTabs.tsx
- [x] TestimonialsCarousel.tsx
- [x] GalleryPreview.tsx
- [x] ContactSection.tsx
- [x] app/page.tsx (assemble all)

## Phase 6: Subpages
- [x] /tentang-kami
- [x] /layanan
- [x] /fasilitas
- [x] /galeri
- [x] /kontak

## Phase 7: API & Backend
- [x] app/api/contact/route.ts
- [x] lib/supabase.ts

## Phase 8: Verification
- [x] npm run build (zero errors)
- [x] Mobile responsiveness check
- [x] SEO metadata all pages

## Phase 9: Video Reels & YouTube Integration
- [x] Create VideoReels component and CSS module
- [x] Add VideoReels component to the Homepage
- [x] Integrate WebM reels on the Gallery page (tab switcher)
- [x] Embed YouTube event video with metadata card on the Gallery page
- [x] Embed Meet the Team video in the About page
- [x] Embed Montessori and Sensory Play videos in the Services page
- [x] Verify the build and check responsiveness

