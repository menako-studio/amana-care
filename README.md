# Amana Care — Premium Daycare & Parents' Working Space Website

A high-end profile and registration platform built for **Amana Care Bintaro Sektor 7** using **Next.js 15 (App Router)** and **TypeScript**. The interface implements premium visual aesthetics and smooth motion design, inspired by top-tier daycare design systems and customized with Amana Care's authentic brand colors.

---

## 🎨 Design System & Brand Identity
The interface is built using native CSS custom properties defined in [app/globals.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/globals.css), following a curated, premium color palette:
* **Primary (Brand):** Sky Blue `#39C2E7` & Soft Blue `#86DDF4` (representing trust, safety, and cleanliness)
* **Secondary Accent:** Sunny Yellow `#FFD166` (representing warmth and playfulness)
* **Contrast Accents:** Burnt Coral `#F27455` & Green Lizard `#30F2B2`
* **Neutral Backgrounds:** Cozy Warm Cream `#FFF9F2` & Charcoal `#1A1A2E`
* **Typography:** `Quicksand` (rounded display headers for child-friendly touch) + `Inter` (highly readable sans-serif body copy)

---

## ⚙️ Tech Stack & Premium Features (100% Free Tier Setup)
Every page and module is meticulously structured to optimize load speeds and deliver a luxury user experience:
1. **Next.js 15 (App Router, Turbopack, TypeScript):** Outstanding performance via Static Site Generation (SSG) and Route prefetching.
2. **Lenis Scroll Engine:** Silky-smooth 60fps momentum scroll experience across all browsers and devices.
3. **Embla Carousel:** Lightweight, drag/swipe-enabled touch-responsive slider for parent reviews and testimonials.
4. **Cal.com Scheduling:** Directly embedded calendar widget allowing parents to schedule site visits effortlessly.
5. **Spring Physics CSS Transitions:** Spring-back spring easing transitions `cubic-bezier(0.34, 1.56, 0.64, 1)` for bouncing responsive buttons, interactive cards, and lazy-loading animations.
6. **Supabase & Resend API:** Production-grade serverless endpoint handling contacts, persisting logs to a PostgreSQL database, and sending notifications to administrators.
7. **AI-Generated Custom Assets:** Utilizes high-resolution, context-aware imagery generated with advanced models to represent the services, facilities, gallery, and contact screens uniquely.

---

## ⚡ Google PageSpeed & UI Optimizations
* **Responsive Image Delivery:** Standardized Next.js `<Image />` component properties with precise source configurations (`sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"`) to serve resized, compressed WebP layouts based on screen size.
* **LCP & Preloading:** Above-the-fold banners, hero images, and brand logos are forced to preload using `priority` tags to minimize Largest Contentful Paint (LCP) delays.
* **Asymmetrical Grid Precision:** Built a dense 3x3 CSS Grid layout for the landing gallery preview utilizing CSS variables, resolving container height collapse and adapting automatically to mobile viewports.

---

## 📂 Project Structure & Sitemap

```
amana-care/
├── app/
│   ├── page.tsx            # Landing Page (Hero, Timeline, Programs, Reviews, Gallery)
│   ├── tentang-kami/       # About Profile & Founder Message
│   ├── layanan/            # Services details (Daycare packages & Parents Co-Working)
│   ├── fasilitas/          # Facility room tour & safety protocols
│   ├── galeri/             # Filterable Photo gallery & kustom Lightbox Modal
│   ├── kontak/             # Contact Form & FAQ Accordion
│   └── api/contact/        # Serverless contact submission handler (Supabase + Resend)
├── components/
│   ├── layout/             # Shared elements: Navbar, Footer, AnnouncementBar, Lenis Scroll
│   ├── home/               # Section components specific to the Homepage
│   └── ui/                 # Reusable ui modifiers (e.g. ScrollReveal wrapper)
└── lib/
    ├── supabase.ts         # Database client initializer
    └── fonts.ts            # Optimised web font loaders
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
