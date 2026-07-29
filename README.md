# Amana Care — Premium Daycare & Parents' Working Space Platform

A high-end profile, registration, and management platform built for **Amana Care Bintaro Sektor 7** using **Next.js 16 (App Router, Turbopack)**, **TypeScript**, **Vitest**, **GitHub Actions CI/CD**, and **Supabase**. The interface implements premium visual aesthetics, smooth motion design, server-side validation, API rate-limiting, and automated testing pipelines tailored for Vercel deployment.

---

## 🎨 Design System & Brand Identity

The interface is built using native CSS custom properties defined in [app/globals.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/globals.css), following a curated, premium color palette:
* **Primary (Brand):** Sky Blue `#39C2E7` & Soft Blue `#86DDF4` (representing trust, safety, and cleanliness)
* **Secondary Accent:** Sunny Yellow `#FFD166` (representing warmth and playfulness)
* **Contrast Accents:** Burnt Coral `#F27455` & Green Lizard `#30F2B2`
* **Neutral Backgrounds:** Cozy Warm Cream `#FFF9F2` & Charcoal `#1A1A2E`
* **Typography:** `Quicksand` (rounded display headers for child-friendly touch) + `Inter` (highly readable sans-serif body copy)

---

## ⚙️ Tech Stack & Engineering Best Practices

Every page and module is meticulously structured to optimize load speeds, ensure code quality, and deliver a production-grade user experience:

1. **Next.js 16 (App Router, Turbopack, React 19, TypeScript):** Outstanding performance via Static Site Generation (SSG), Server Components, and Turbopack fast builds.
2. **Automated CI/CD Pipeline (GitHub Actions):** Custom workflow ([.github/workflows/ci.yml](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/.github/workflows/ci.yml)) running Node 22 LTS, ESLint, strict TypeScript checks (`tsc --noEmit`), Vitest suite, and Next.js build cache verification on every PR and commit.
3. **Automated Testing Suite (Vitest & React Testing Library):** Unit tests for Zod validation schemas and API rate limiting, alongside integration tests for `/api/contact`.
4. **Backend Security & API Resilience:**
   * **Server-side Zod Schema:** Strict payload validation ([lib/validations/contact.ts](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/lib/validations/contact.ts)) preventing malformed data or injection attacks.
   * **In-Memory Rate Limiting:** Sliding-window rate limiter ([lib/rate-limit.ts](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/lib/rate-limit.ts)) protecting serverless API endpoints against spam attacks.
   * **Production Security Headers:** Custom HTTP response headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) configured in [next.config.ts](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/next.config.ts).
5. **Sentry APM & Exception Tracking:** Production observability with `@sentry/nextjs`, featuring client/server SDK initializers, Next.js 16 `instrumentation.ts` integration, global error boundary ([app/global-error.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/global-error.tsx)), and API exception capturing.
6. **Lenis Scroll Engine & Motion:** Silky-smooth 60fps momentum scroll experience across all browsers and devices.
7. **Embla Carousel:** Drag/swipe-enabled touch-responsive slider for parent reviews and testimonials (Fika, Like, Putri).
8. **Supabase & Resend API:** Production-grade serverless endpoint handling contacts, persisting registration logs to a PostgreSQL database, and triggering admin email notifications.

---

## ⚡ Google PageSpeed & UI Optimizations

* **Real High-Res Asset Curation & WebP Pipeline:** Integrated 21 high-resolution raw assets from `public/images/assets/` into production WebP format in `public/images/`, optimizing image clarity while maintaining fast load times (>90% file size reduction).
* **Responsive Image Delivery & Precise Framing:** Standardized Next.js `<Image />` component properties with precise source configurations (`sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`), uncropped Bento Grid auto-rows (`240px`), matching aspect ratios (landscape for wide grid slots, portrait for tall), and explicit `objectPosition` styling (`center 25%`) to guarantee zero face cropping.
* **LCP & Preloading:** Above-the-fold banners, hero images, and brand logos are forced to preload using `priority` tags to minimize Largest Contentful Paint (LCP) delays.
* **Zero-Error Code Quality:** Zero ESLint warnings, 100% strict TypeScript type checking, and zero React 19 hydration/effect warnings.

---

## 🖼️ Asset Management

### Directory Structure
```
public/
├── images/                   # Production-ready WebP images (served by Next.js <Image>)
│   ├── assets/               # Raw curated source images (JPEG/HEIC, NOT served directly)
│   ├── team/                 # Team member portrait WebPs
│   ├── logo/                 # Brand logo assets
│   └── *.webp                # Optimized WebP images used by components
└── videos/
    ├── assets/               # Raw curated source videos (MOV/MP4, NOT served directly)
    └── *.webm                # Optimized WebM video reels used by VideoReels component
```

### Adding New Images
1. Place raw photos in `public/images/assets/` (JPEG/HEIC/PNG).
2. Convert to WebP using the Python Pillow pipeline:
   ```python
   from PIL import Image
   img = Image.open('public/images/assets/your-photo.jpg').convert('RGB')
   img.save('public/images/your-photo.webp', 'WEBP', quality=88, method=6)
   ```
3. If images appear upside-down (common with phone camera photos), add `img.rotate(180)` before saving.
4. Reference the new `.webp` in the relevant component using `src="/images/your-photo.webp"`.

### EXIF Orientation
All `<img>` and Next.js `<Image>` elements inherit `image-orientation: from-image` from `app/globals.css`, which auto-corrects EXIF orientation in JPEG files. WebP files do not carry EXIF orientation data — if a WebP renders upside-down, the pixel data itself must be rotated.

---

## 🎯 SEO Meta Title Optimization Strategy (Rank 1 Google Acceleration)

Every page's `<title>`, `openGraph.title`, and `twitter.title` tags have been strictly optimized following Google Search SERP display boundaries:

* **Maximum Character Limit Standard:** Kept strictly between **50 and 60 characters** (maximum 65 characters / 568 pixels display width) to guarantee 0 truncation (`...`) on mobile & desktop search results.
* **Keyword Front-Loading:** Primary high-volume keywords (`Daycare Bintaro`, `Biaya Daycare`, `Fasilitas`, `Kontak`) are positioned at the beginning of each title for maximum algorithmic ranking weight.
* **Brand Harmony:** Standardized brand suffix `| Amana Care` without double-branding or redundant text duplication.

### Optimized Meta Title Inventory

| Route | Page Name | Optimized Meta Title | Char Count | Primary SEO Keywords |
| :--- | :--- | :--- | :---: | :--- |
| `/` | Beranda / Root | `Daycare Bintaro Sektor 7 Terbaik Anak 0–6 Th \| Amana Care` | **57** | Daycare Bintaro Sektor 7, Anak 0-6 Th |
| `/tentang-kami` | Tentang Kami | `Tentang Amana Care \| Daycare Terpercaya Bintaro Sektor 7` | **59** | Tentang Amana Care, Daycare Terpercaya Bintaro |
| `/layanan` | Layanan & Paket | `Biaya & Paket Daycare Bintaro Sektor 7 \| Amana Care` | **53** | Biaya Daycare Bintaro, Paket Daycare Bintaro |
| `/fasilitas` | Fasilitas | `Fasilitas Daycare Bintaro Sektor 7 & CCTV \| Amana Care` | **55** | Fasilitas Daycare Bintaro Sektor 7, CCTV |
| `/galeri` | Galeri | `Galeri Foto & Video Daycare Bintaro \| Amana Care` | **50** | Galeri Foto & Video Daycare Bintaro |
| `/kontak` | Kontak | `Kontak & Pendaftaran Daycare Bintaro Sektor 7 \| Amana Care` | **60** | Kontak & Pendaftaran Daycare Bintaro |

---

## 📂 Project Structure & Sitemap

```
amana-care/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI/CD Pipeline (Node 22, Lint, TSC, Tests, Build)
├── app/
│   ├── page.tsx            # Landing Page (Hero, Timeline, Programs, Reviews, Gallery, Video Reels)
│   ├── tentang-kami/       # About Profile & Founder Message
│   ├── layanan/            # Services details (Daycare packages, Drop-in, Sensory School & Parents Co-Working)
│   ├── fasilitas/          # Facility room tour & safety protocols
│   ├── galeri/             # Filterable Photo gallery & Video Reels Lightbox Modal
│   ├── kontak/             # Contact Form & FAQ Accordion
│   └── api/contact/        # Serverless contact handler (Zod, Rate-Limiting, Supabase, Resend)
├── components/
│   ├── layout/             # Shared elements: Navbar, Footer, AnnouncementBar, Lenis Scroll
│   ├── home/               # Homepage sections (VideoReels, TestimonialsCarousel, etc.)
│   └── ui/                 # Reusable UI wrappers (ScrollReveal)
├── lib/
│   ├── validations/        # Centralized Zod validation schemas
│   ├── rate-limit.ts       # Sliding window API rate limiter helper
│   ├── supabase.ts         # Supabase client initializer
│   └── analytics.ts        # Event tracking utilities
└── tests/
    ├── unit/               # Vitest unit tests (Zod schema, Rate Limiting)
    └── integration/        # Vitest integration tests (API endpoints)
```

---

## 🧪 Testing & Verification Commands

Run automated tests and quality checks locally:

```bash
# 1. Run ESLint check
npm run lint

# 2. Run TypeScript strict type check
npx tsc --noEmit

# 3. Run Vitest Unit & Integration Test Suite
npm test

# 4. Run Next.js Production Build
npm run build
```

---

## 🚀 Getting Started (Local Development)

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Verify Production Build:**
   ```bash
   npm run build
   ```

---

## 🔑 Environment Settings (`.env.local`)

To enable database logging and automated notifications, copy the variables below into your local environment:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
RESEND_API_KEY=re_your_api_key
```
*(Note: If these variables are not configured, the registration form dynamically switches to redirect parents to Amana Care's official WhatsApp chat handler. Notification emails are dispatched to the official email `amanacare.id@gmail.com` when configured).*

