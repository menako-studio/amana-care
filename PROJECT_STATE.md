# PROJECT STATE & SINGLE SOURCE OF TRUTH

> **Note for AI Agents**: This document is the primary reference for understanding the architecture, tech stack, data flows, current implementation state, technical debt, and coding conventions of the **Amana Care** web repository. Read this file before initiating any task to ensure seamless execution.

---

## 1. EXECUTIVE SUMMARY & TECH STACK

### Core Purpose & Scope
**Amana Care** (`PT Amana Peduli Warga Indonesia`) is a web platform for a premium Daycare & Parents Working Space located in Bintaro Sektor 7, Tangerang Selatan. The application serves parents of children aged 0–6 years by presenting daycare features (real-time CCTV, 3x nutritious meals, child psychologist screening, daily WhatsApp reports), integrated co-working space details, interactive media galleries (vertical `.webm` video reels & YouTube event embeds), and a lead capture registration pipeline.

### Complete Technology Stack

| Category | Technology | Version / Specification | Key Details / Config |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `16.2.10` (App Router) | React 19.2.4, Turbopack enabled |
| **Language** | TypeScript | `^5.0.0` | Strict mode enabled |
| **Styling** | CSS Modules & Global Design System | Vanilla CSS | Custom tokens in `app/globals.css`, scoped `*.module.css` |
| **Animations & Motion** | Framer Motion & Lenis | `framer-motion@12.42.2`, `lenis@1.3.25` | Scroll reveal wrappers, smooth scrolling context |
| **Icons & Typography** | Lucide React & Next Font | `lucide-react@1.24.0` | Fonts: `Quicksand` (Display/Headings) & `Inter` (Body) |
| **Carousel** | Embla Carousel React | `embla-carousel-react@8.6.0` | Used in Testimonials Carousel |
| **Database (Optional)** | Supabase JS Client | `@supabase/supabase-js@2.110.3` | Table `contacts` for optional lead persistence |
| **Email Service** | Resend | `resend@6.17.2` | Automated email dispatch to `haloamana@gmail.com` |
| **Form & Validation** | React Hook Form & Zod | `react-hook-form@7.81.0`, `zod@4.4.3` | Schema-based validation via `@hookform/resolvers@5.4.0` |
| **Analytics** | GA4 & GTM via `@next/third-parties` | `@next/third-parties@16.2.10` | Custom dispatcher in `lib/analytics.ts` |
| **Error Monitoring** | Sentry Next.js | `@sentry/nextjs@10.66.0` | Configured in `next.config.ts`, tunnelRoute `/monitoring` |
| **Testing** | Vitest & React Testing Library | `vitest@4.1.10`, `jsdom@29.1.1` | Unit tests in `tests/unit/`, integration in `tests/integration/` |

---

## 2. PROJECT STRUCTURE & ARCHITECTURE

### Directory Tree & Responsibilities

```
amana-care/
├── app/                        # Next.js App Router (Pages, Layouts, API Routes)
│   ├── api/
│   │   └── contact/route.ts    # POST endpoint for lead submission (Rate-limited, Zod, Supabase, Resend, Sentry)
│   ├── fasilitas/              # Facilities page (/fasilitas)
│   ├── galeri/                 # Gallery page & video reels tab switcher (/galeri)
│   │   └── GaleriClient.tsx    # Interactive client gallery component
│   ├── kontak/                 # Contact & registration page (/kontak)
│   │   └── KontakClient.tsx    # Interactive client contact form & FAQ accordion
│   ├── layanan/                # Services & daycare programs page (/layanan)
│   ├── tentang-kami/           # About us & founder message page (/tentang-kami)
│   ├── global-error.tsx        # Global error boundary handler
│   ├── globals.css             # Design tokens, CSS custom properties, utility classes
│   ├── layout.tsx              # Root layout (Metadata, LocalBusiness JSON-LD, Font injection, Layout wrappers)
│   ├── loading.tsx             # Global page loading spinner UI
│   ├── not-found.tsx           # Custom 404 page
│   ├── robots.ts               # Dynamic robots.txt generation
│   └── sitemap.ts              # Dynamic sitemap.xml generation
├── components/                 # React UI Components
│   ├── home/                   # Homepage specific sections
│   │   ├── ContactSection.tsx  # In-page lead submission form
│   │   ├── DayTimeline.tsx     # 24-hour daily routine timeline
│   │   ├── FeaturesGrid.tsx    # 4 core service pillars grid
│   │   ├── GalleryPreview.tsx  # Photo grid preview section
│   │   ├── HeroSection.tsx     # Homepage hero header & primary CTA
│   │   ├── MissionSection.tsx  # Core values & mission statement
│   │   ├── ProgramTabs.tsx     # Interactive age-group program switcher
│   │   ├── TestimonialsCarousel.tsx # Parent review carousel
│   │   ├── TrustTicker.tsx     # Key metrics & stat counters
│   │   └── VideoReels.tsx      # Vertical .webm video reels player & lightbox
│   ├── layout/                 # Shared shell layout components
│   │   ├── AnnouncementBar.tsx # Top notification banner
│   │   ├── Footer.tsx          # Multi-column footer & quick links
│   │   ├── LoadingScreen.tsx   # Initial page mount loading screen
│   │   ├── Navbar.tsx          # Responsive navbar with desktop & mobile drawer
│   │   └── SmoothScroll.tsx    # Lenis smooth scrolling provider wrapper
│   ├── ui/                     # Generic UI primitives
│   │   └── ScrollReveal.tsx    # Framer Motion scroll animation wrapper
│   └── WhatsAppFloat.tsx       # Sticky floating WhatsApp contact button
├── lib/                        # Shared Utilities & Business Logic
│   ├── validations/
│   │   └── contact.ts          # Zod schema definition for contact form payload
│   ├── analytics.ts            # Unified GA4/GTM event tracking functions
│   ├── fonts.ts                # Google Font loader definitions (Quicksand, Inter)
│   ├── rate-limit.ts           # In-memory IP rate limiter helper
│   └── supabase.ts             # Supabase JS client instance initialization
├── public/                     # Static Public Assets
│   ├── brandGuideline/         # Official brand guideline reference assets
│   ├── images/                 # Optimized web images (gallery, hero, team, logos)
│   └── videos/                 # Vertical .webm video reels assets
├── tests/                      # Automated Test Suite
│   ├── integration/            # API integration tests (api-contact.test.ts)
│   └── unit/                   # Unit tests (contact-validation, rate-limit, sentry)
├── next.config.ts              # Next.js & Sentry integration settings
├── package.json                # Project dependencies and script commands
└── tsconfig.json               # TypeScript path aliases (@/* mapping to root)
```

### Applied Architectural Patterns

1. **Next.js App Router Architecture**:
   - Explicit Server/Client Component decoupling (`'use client'` isolated to interactive components like `KontakClient`, `GaleriClient`, `VideoReels`, and `Navbar`).
   - Server-side rendering for optimal SEO (`app/layout.tsx`, static page wrappers) with injected JSON-LD (`LocalBusiness` & `ChildCare` structured data).
2. **Modular CSS System**:
   - Centralized Design Token Architecture in `app/globals.css` using `:root` CSS custom properties (`--color-primary`, `--color-cream`, `--font-display`, `--transition-spring`).
   - Component-scoped isolation via CSS Modules (`*.module.css`) to eliminate global style leakage.
3. **Defensive API Gateway Pattern**:
   - Backend endpoint `/api/contact` implements multi-layer defense: IP-based rate limiting (`lib/rate-limit.ts`), Zod payload validation (`contactSchema`), graceful error degradation (Supabase DB insert & Resend email trigger execute conditionally without breaking lead submission), and Sentry exception capturing.

---

## 3. CURRENT IMPLEMENTATION STATE & DATA FLOW

### Active Built Modules

- **Homepage (`/`)**: Hero section, trust ticker metrics, mission statement, 4-pillar features grid, daily routine timeline, interactive program tabs, parent testimonials carousel, photo gallery preview, vertical video reels preview, and inline contact section.
- **About Us (`/tentang-kami`)**: Company vision & mission, founder message, embedded "Meet the Team" `.webm` video reel, team profiles grid, and South Tangerang location map.
- **Services (`/layanan`)**: Detailed daycare program breakdown (Infant 0–12m, Toddler 1–3y, Preschooler 3–6y), Parents Working Space features, "Kurikulum & Stimulasi dalam Aksi" video reels section (Montessori & Sensory Play), and dynamic WhatsApp CTA builder (`LayananWACTA.tsx`).
- **Facilities (`/fasilitas`)**: Interactive room gallery (CCTV area, quiet nap room, indoor play, sensory garden, co-working area), safety standards grid, and virtual tour CTA.
- **Gallery (`/galeri`)**: Category-filtered photo gallery (All, Activity, Facility, Events), Video Reels tab switcher with full-screen lightbox modal, and embedded YouTube documentation video with structured event metadata cards.
- **Contact & Registration (`/kontak`)**: Interactive registration form with real-time field validation, direct WhatsApp consultation CTA, embedded Google Maps iframe, operating hours card, and interactive FAQ accordion.
- **Unified Analytics System (`lib/analytics.ts`)**: Custom event tracking helpers dispatching events simultaneously to GA4 (`window.gtag`) and GTM (`window.dataLayer`). Key tracked events include: `generate_lead`, `contact`, `select_content`, `cta_click`, `whatsapp_open`, `faq_open`, `gallery_filter`, `gallery_zoom`.

### Data Flow & Database Schema

#### Contact Lead Submission Pipeline

```
[User Form Submission] 
       │
       ▼
[POST /api/contact]
       │
       ├──► 1. Rate Limiting Check (max 5 requests / min per IP) ──► Fail ──► HTTP 429
       │
       ├──► 2. Zod Schema Validation (contactSchema) ──────────────► Fail ──► HTTP 400
       │
       ├──► 3. Supabase DB Storage (Optional if NEXT_PUBLIC_SUPABASE_URL set)
       │        └── Insert to table `contacts`
       │
       ├──► 4. Resend Email Dispatch (Optional if RESEND_API_KEY set)
       │        └── Send formatted HTML notification to `haloamana@gmail.com`
       │
       ▼
[Return HTTP 200 JSON Response]
       │
       ▼
[Client UI displays success Toast & triggers trackLead() GA4/GTM Event]
```

#### Database Schema (`Supabase - contacts Table`)

```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nama TEXT NOT NULL,
  nama_anak TEXT NOT NULL,
  usia_anak TEXT NOT NULL,
  wa TEXT NOT NULL,
  pesan TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 4. REMAINING TASKS, TODOs & TECHNICAL DEBT

### Scan of Active TODOs & Stubs
- **Phone Number Placeholders**: Contact forms (`ContactSection.tsx` & `KontakClient.tsx`) currently render placeholder `08xxxxxxxxxx`.
- **Environment Fallbacks**: Credentials in `.env.example` and `lib/supabase.ts` use fallback placeholder strings (`placeholder-project.supabase.co`, `re_placeholder_key`). Real API keys must be populated in deployment environment variables.

### Technical Debt & Enhancements
1. **Rate Limiter Storage**: `lib/rate-limit.ts` uses an in-memory `Map`. For multi-region serverless deployments (Vercel/Netlify), replacing this with Upstash Redis or Vercel KV will ensure state persistence across cold starts.
2. **Video Asset Optimization**: `.webm` files in `/public/videos/` reach up to ~19MB (e.g. `amanacare-activity-dental-visit-beam-dental-01.webm`). Delivering video reels via a CDN or HLS adaptive streaming will optimize first-load performance on mobile networks.
3. **Database Type Safety**: Supabase JS client in `lib/supabase.ts` is instantiated without generated database type definitions (`Database` generic type).

---

## 5. AI AGENT CODING GUIDELINES

### Naming Conventions & Placement Rules

- **Route Paths**: Use lowercase kebab-case (`app/tentang-kami`, `app/layanan`, `app/fasilitas`, `app/galeri`, `app/kontak`).
- **React Components**: Use PascalCase (`HeroSection.tsx`, `VideoReels.tsx`, `KontakClient.tsx`).
- **CSS Modules**: Co-locate CSS Module with component using exact match: `[ComponentName].module.css`.
- **Utilities & Logic**: Use camelCase or kebab-case (`lib/analytics.ts`, `lib/validations/contact.ts`).
- **Design Tokens**: Standardize colors using CSS variables defined in `app/globals.css`:
  - Primary Brand Sky Blue: `var(--color-primary)` (`#39C2E7`)
  - Soft / Natural Blue: `var(--color-primary-light)` (`#86DDF4`)
  - Primary Dark / Hover: `var(--color-primary-dark)` (`#1988A7`)
  - Background Cream: `var(--color-cream)` (`#FFF9F2`)
  - Text Charcoal: `var(--color-charcoal)` (`#1A1A2E`)

### Step-by-Step Feature Implementation Workflow

When asked to implement a new feature or modify existing behavior in this codebase, AI Agents must strictly execute the following steps:

```
Step 1: Type & Validation Definition
   └── Create/update Zod schema & TypeScript interface in `lib/validations/[feature].ts`.

Step 2: API & Gateway Logic
   └── Implement Route Handler in `app/api/[feature]/route.ts`.
   └── Include `rateLimit()`, Zod `safeParse()`, error handling, and `Sentry.captureException()`.

Step 3: Component & Layout Building
   └── Create Component in `components/[home|layout|ui]/[ComponentName].tsx`.
   └── Create scoped CSS Module in `[ComponentName].module.css` referencing tokens from `app/globals.css`.

Step 4: Client State & Analytics Wiring
   └── Connect form/interaction handlers.
   └── Call tracking dispatchers from `lib/analytics.ts` for GA4/GTM engagement & conversion tracking.

Step 5: Verification & Build Validation
   └── Run `npm run test` to verify all Vitest tests pass.
   └── Run `npm run build` to guarantee 0 TypeScript compilation or Next.js build errors.
```

---
*End of PROJECT_STATE.md — Single Source of Truth for Amana Care*
