# Amana Care — Technical SEO & Data Export Playbook

Production: `https://www.amanacare.id/` · Market: Bintaro / Tangerang Selatan, Bahasa Indonesia.

No one can guarantee position #1. What wins local "daycare bintaro" queries is, in order of impact: (1) a complete, active **Google Business Profile** with reviews, (2) relevant, crawlable pages that answer what parents search for (price, safety, age range, location), and (3) a technically clean site. This playbook covers the data to pull each month and what to do with it.

---

## 1. Google Search Console (GSC)

Property: add a **Domain property** (`amanacare.id`, DNS verification) so `www`, non-`www`, `http` and `https` are all covered. The HTML-tag fallback is already wired up through `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `app/layout.tsx`.

### Exports (monthly, last 3 months vs previous 3 months)

| # | Report | Path in GSC | Dimensions / filters | What to act on |
|---|---|---|---|---|
| 1 | **Queries** | Performance → Search results | Query; Clicks, Impressions, CTR, Position | See "Keyword actions" below |
| 2 | **Brand vs non-brand** | Same, add filter Query → *does not contain regex* `amana\|haloamana` | Non-brand only | Non-brand clicks are your real SEO growth metric |
| 3 | **Pages** | Performance → Pages tab | Page; with Query filter per keyword | Find which URL ranks for each keyword (spot cannibalisation between `/` and `/layanan`) |
| 4 | **Device** | Performance → Devices | Mobile vs Desktop | Expect >80 % mobile; mobile CTR gap = title/snippet issue |
| 5 | **Country** | Performance → Countries | Indonesia only | Filter all other exports to Indonesia |
| 6 | **Page indexing** | Indexing → Pages | "Why pages aren't indexed" rows | Every one of the 6 sitemap URLs must be *Indexed*. Expected non-indexed: `/api/*`, `/monitoring`, `/sentry-example-page` (noindex) |
| 7 | **Sitemaps** | Indexing → Sitemaps | `sitemap.xml` status, discovered URLs | Status must be *Success* with 6 URLs |
| 8 | **Core Web Vitals** | Experience → Core Web Vitals | Mobile + Desktop, URL groups | Any "Poor"/"Needs improvement" group → see §4 |
| 9 | **HTTPS** | Experience → HTTPS | — | Must be 100 % HTTPS |
| 10 | **Rich results / Enhancements** | Enhancements (Breadcrumbs, Local business if shown) | Errors / warnings | Fix schema errors within the same week |
| 11 | **Links** | Links | Top linking sites, top linked pages | Track local backlinks (parenting blogs, Bintaro community sites) |

Use **Looker Studio** (GSC connector) or the GSC API / BigQuery bulk export for anything over the 1 000-row UI limit.

### Keyword actions from the Queries export

| Pattern in data | Meaning | Action |
|---|---|---|
| Position 4–15, high impressions | "Striking distance" | Put the exact query in the page `<title>`, H1/H2 and first paragraph of the ranking URL; add an internal link to it from the homepage |
| Position 1–3, CTR < 15 % | Snippet doesn't attract clicks | Rewrite `title`/`description` in that page's `metadata` (include price hint, "CCTV realtime", "6 bln–6 th") |
| High impressions, no ranking page matches intent | Content gap | New section or page (e.g. `biaya daycare bintaro`, `daycare bayi 6 bulan bintaro`, `daycare dekat stasiun pondok ranji`) |
| Two URLs alternate for one query | Cannibalisation | Pick one target URL; differentiate the other's title and link to the target |

Priority keyword clusters already targeted in metadata: *daycare bintaro*, *daycare bintaro sektor 7*, *penitipan anak/bayi bintaro*, *daycare tangerang selatan*, *parents working space / co-working ibu bintaro*, *biaya daycare bintaro*.

---

## 2. Google Analytics 4 (GA4)

Measurement ID comes from `NEXT_PUBLIC_GA_ID`. Link GA4 ↔ GSC (Admin → Product links → Search Console) so organic queries appear inside GA4.

### Reports to export

| # | Report | Path | Breakdown | Use |
|---|---|---|---|---|
| 1 | **Landing pages** | Reports → Engagement → Landing page | Session default channel group = *Organic Search* | Sessions, engagement rate, key events per landing page — the pages Google sends traffic to |
| 2 | **Organic queries** (needs GSC link) | Reports → Search Console → Queries | — | Query → engagement; queries with traffic but no leads = mismatch of intent |
| 3 | **Traffic acquisition** | Acquisition → Traffic acquisition | Session source/medium | Organic vs Direct vs Social (Instagram `haloamana`) vs Google Business Profile (tag GBP links with `?utm_source=google&utm_medium=organic&utm_campaign=gbp`) |
| 4 | **Engagement rate by device** | Explore → Free form; rows Device category, cols Landing page | Engagement rate, Avg engagement time | GA4 "bounce rate" = 1 − engagement rate; add it as a metric in Explore |
| 5 | **Conversion funnel** | Explore → Funnel exploration | Steps: `session_start` (organic) → view `/layanan` → `contact` (whatsapp) **or** `generate_lead` | Where parents drop off before contacting |
| 6 | **Key events** | Admin → Events → mark as key event | `generate_lead`, `contact` | Primary conversion metrics |
| 7 | **Pages and screens** | Engagement → Pages and screens | Page path, Avg engagement time | Thin pages (< 20 s) need richer content |
| 8 | **404s** | Explore; filter page title contains "404" / event from `not-found.tsx` | Page path, page referrer | Redirect or fix the linking source |

Set **data retention** to 14 months (Admin → Data settings) so year-over-year comparison is possible.

### Data-quality check (do this first)

The site loads both `<GoogleAnalytics>` **and** `<GoogleTagManager>` (`app/layout.tsx`), and `lib/analytics.ts` sends every event to `gtag` **and** to `dataLayer`. `AnalyticsTracker` also sends a manual `page_view` on every route change, while GA4's default config sends one on load and Enhanced Measurement sends one on history changes. Open GA4 **DebugView** and click through two pages:

- If you see two `page_view` events per page → turn off *Admin → Data streams → Enhanced measurement → Page views → "Page changes based on browser history events"*, or remove the manual gtag `page_view`.
- If GTM also contains a GA4 Event tag for `generate_lead`/`contact` → you are double-counting; keep only one path (recommended: send via GTM only and remove `<GoogleAnalytics>`).

---

## 3. Google Tag Manager (GTM)

Container ID comes from `NEXT_PUBLIC_GTM_ID`. The app already pushes these `dataLayer` events from `lib/analytics.ts`:

| dataLayer `event` | Fired when | Key params |
|---|---|---|
| `contact` / `whatsapp_open` | WhatsApp, phone or email click (`trackContact`) | `contact_type`, `destination`, `source` |
| `generate_lead` / `form_submit` | Contact / registration form success (`trackLead`) | `form_name`, `method`, `age_group` |
| `virtual_pageview` | Client-side route change | `page_path`, `page_title` |

### Recommended GTM setup

1. **Triggers** — *Custom Event* triggers on `generate_lead` and `contact`. Don't use "Click URL contains wa.me" triggers — the code-level events are more reliable and already carry the `source` button name.
2. **Data Layer Variables** — `form_name`, `method`, `age_group`, `contact_type`, `source`.
3. **Tags** — GA4 Event tags (if GA4 is moved into GTM), Google Ads Conversion + Conversion Linker, Meta Pixel `Lead` (if running Instagram ads).
4. **Appointment / site-visit booking** — if a booking widget is added, push `dataLayer.push({ event: 'generate_lead', form_name: 'site_visit' })` from the app on success rather than scraping the DOM.
5. **Consent** — enable Consent Mode v2 defaults before tags fire if ads remarketing is used.

### Keep GTM from hurting Core Web Vitals

- `@next/third-parties` already loads GTM/GA **after hydration**, so they don't block LCP. Keep it that way: don't paste the raw GTM snippet into `<head>`.
- Keep the container lean: no chat widgets, heatmaps or A/B tools firing on *All Pages* unless needed; fire them on *Window Loaded* at the earliest.
- Avoid tags with `document.write` or synchronous Custom HTML.
- Re-check INP in PageSpeed Insights after every container publish.

---

## 4. Codebase SEO health check (as of this commit)

| Area | Status | Notes |
|---|---|---|
| `metadataBase`, title template, description | ✅ | `app/layout.tsx` |
| Per-page `title` / `description` / canonical / OpenGraph | ✅ | All 6 indexable routes set absolute titles + self-canonical |
| Twitter card | ✅ | `summary_large_image` in root layout |
| `html lang="id"`, `og:locale id_ID` | ✅ | |
| `robots.ts` | ✅ fixed | Removed `/_next/` disallow (blocked Googlebot from CSS/JS needed to render); added `/monitoring` (Sentry tunnel); removed redundant Googlebot block and non-standard `host` |
| `sitemap.ts` | ✅ | 6 URLs. `lastModified` is the build time — acceptable; switch to real content dates if pages start updating independently |
| Test page indexing | ✅ fixed | `/sentry-example-page` now `noindex, nofollow` |
| JSON-LD `LocalBusiness` + `ChildCare` | ✅ improved | Added `hasMap`, `areaServed`, `inLanguage`; removed incorrect `contactOption: TollFree` (it's a mobile number) |
| JSON-LD `WebSite` SearchAction | ✅ removed | The site has no `?q=` search, and Google retired the sitelinks search box in Nov 2024 |
| Security headers | ✅ | `next.config.ts` |

### Recommended next code changes (not done in this commit)

1. **`BreadcrumbList` JSON-LD** on inner pages (`/layanan`, `/fasilitas`, …) — shows breadcrumbs in results instead of the raw URL.
2. **`Service` / `Offer` JSON-LD on `/layanan`** listing each package with `priceSpecification` in IDR — matches "biaya daycare bintaro" intent.
3. **Review data** — embed real Google reviews only via `aggregateRating` if they are genuinely collected on-site; self-serving review markup for a LocalBusiness is ignored by Google, so focus on GBP reviews instead.
4. **Per-page OG images** (static `opengraph-image.jpg` per route; avoid dynamic `next/og` unless needed).
5. **Image `alt` text** with location context (e.g. "Ruang kelas daycare Amana Care Bintaro Sektor 7").
6. **Content**: an FAQ section on `/layanan` answering price, hours, age, trial day, food menu — answers the long-tail queries that appear in GSC.

---

## 5. Off-site (largest ranking factor for local queries)

- **Google Business Profile**: primary category *Child care agency* / *Day care center*, secondary *Coworking space*; hours identical to JSON-LD (Mon–Fri 07:00–19:00); weekly photo/post updates; reply to every review.
- **NAP consistency**: exact same name, address ("Ruko Kebayoran Square Blok D-01, Bintaro Sektor 7") and phone (+62 815-1307-5155) on GBP, Instagram, directories and the site footer.
- **Local citations / backlinks**: Bintaro community sites, parenting directories, local news, partner schools/clinics.

---

## 6. Monthly routine

1. Export GSC §1 tables 1–8 and GA4 §2 tables 1–5.
2. Pick 3 striking-distance queries → update title/H1/content of their URLs.
3. Fix every new indexing or schema error.
4. Check CWV + PageSpeed Insights (mobile) for `/`, `/layanan`, `/kontak`.
5. Review GBP insights (calls, direction requests, website clicks) alongside GA4 `contact` events.
