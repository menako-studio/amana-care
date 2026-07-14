# Amana Care — Daycare & Parents' Working Space Website

Website profil dan registrasi premium untuk **Amana Care Bintaro Sektor 7**, dibangun menggunakan **Next.js 15 (App Router)**. Tampilan visual dan interaksi dikembangkan dengan mengadaptasi rancangan premium dari **MEplace.co**, disesuaikan menggunakan warna identitas asli Amana Care.

---

## 🎨 Identitas Desain (Design System)
Website ini mengimplementasikan CSS variables modular di [app/globals.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/globals.css) dengan token:
* **Primary (Brand):** Turquoise Blue `#00B4D8` (Logo & Aksentuasi Utama)
* **Secondary:** Sunny Yellow `#FFD166` (Aksen Kehangatan)
* **Accents:** Coral Pink `#EF8C8C` & Mint Green `#06D6A0`
* **Neutral Background:** Warm Cream `#FFF9F2`
* **Typography:** `Nunito` (rounded display untuk Heading) + `Inter` (sans-serif untuk Body)

---

## ⚙️ Tech Stack & Fitur Premium (100% GRATIS)
Seluruh modul dirancang menggunakan pustaka open-source & gratis untuk menjamin skor performa terbaik di Google Lighthouse:
1. **Next.js 15 (App Router & TypeScript):** Kecepatan memuat halaman optimal menggunakan Static Site Generation (SSG) & Route Optimization.
2. **Lenis Scroll Engine (perf):** Gliding smooth-scrolling 60fps global untuk pengalaman penelusuran yang sangat premium.
3. **Embla Carousel (🎡):** Pustaka slider meluncur bebas hambatan dengan dukungan *swipe* jari di mobile untuk Testimoni Orang Tua.
4. **Cal.com Scheduling (📅):** Integrasi widget booking site-visit (kunjungan langsung) gratis ke lokasi daycare Bintaro.
5. **Spring Physics CSS Transitions:** Easing elastic `cubic-bezier(0.34, 1.56, 0.64, 1)` untuk reaksi pantulan interaktif pada tombol, kartu, dan animasi masuk scroll.
6. **Supabase & Resend API:** Endpoint tanggapan form kontak dikirim otomatis ke e-mail pengelola dan dicadangkan ke PostgreSQL database.

---

## 📂 Struktur Halaman (Sitemap)

```
amana-care/
├── app/
│   ├── page.tsx            # Beranda (Hero, Ticker, Timeline, Programs, Testimoni)
│   ├── tentang-kami/       # Profil Amana Care & Sambutan Pendiri (Ibu Sarah, S.H.)
│   ├── layanan/            # Info penitipan Daycare & Parents Working Space
│   ├── fasilitas/          # Room tour virtual & Protokol keselamatan
│   ├── galeri/             # Galeri aktivitas terfilter dengan modal Lightbox kustom
│   ├── kontak/             # Hubungi Kami & FAQ Accordion
│   └── api/contact/        # Endpoint serverless form kontak (Resend & Supabase)
├── components/
│   ├── layout/             # Navbar, Footer, AnnouncementBar, SmoothScroll (Lenis)
│   ├── home/               # Seluruh modul per seksi halaman utama
│   └── ui/                 # ScrollReveal animasi masuk
└── lib/
    ├── supabase.ts         # Inisialisasi Database
    └── fonts.ts            # Optimasi pemuatan Google Fonts
```

---

## 🚀 Memulai Pengembangan Lokal

1. **Instalasi Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Server Pembangunan:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

3. **Verifikasi Build Produksi:**
   ```bash
   npm run build
   ```

---

## 🔑 Setelan Environment Variables (`.env.local`)
Jika ingin mengaktifkan pencatatan form pendaftaran & email notifikasi otomatis:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
RESEND_API_KEY=re_your_api_key
```
*(Catatan: Tanpa variabel di atas, form secara default akan melakukan fallback link langsung mengarah ke chat WhatsApp resmi Amana Care).*
