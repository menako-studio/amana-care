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
5. **Lenis Scroll Engine & Motion:** Silky-smooth 60fps momentum scroll experience across all browsers and devices.
6. **Embla Carousel:** Drag/swipe-enabled touch-responsive slider for parent reviews and testimonials.
7. **Supabase & Resend API:** Production-grade serverless endpoint handling contacts, persisting registration logs to a PostgreSQL database, and triggering admin email notifications.

---

## ⚡ Google PageSpeed & UI Optimizations

* **Responsive Image Delivery:** Standardized Next.js `<Image />` component properties with precise source configurations (`sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`) to serve resized, compressed WebP layouts based on screen size.
* **LCP & Preloading:** Above-the-fold banners, hero images, and brand logos are forced to preload using `priority` tags to minimize Largest Contentful Paint (LCP) delays.
* **Zero-Error Code Quality:** Zero ESLint warnings, 100% strict TypeScript type checking, and zero React 19 hydration/effect warnings.

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
│   ├── layanan/            # Services details (Daycare packages & Parents Co-Working)
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
*(Note: If these variables are not configured, the registration form dynamically switches to redirect parents to Amana Care's official WhatsApp chat handler).*
