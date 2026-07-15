# Implementasi Video Reels dan YouTube Embed

Mengintegrasikan video reels (.webm) dari direktori `/public/videos` dan embed video YouTube ke dalam halaman-halaman web Amana Care yang relevan dengan memadukan gaya visual premium dan global CSS saat ini.

## User Review Required

> [!IMPORTANT]
> Kami menyarankan untuk membuat komponen **Video Reels** terdedikasi dalam bentuk vertikal (seperti Instagram Reels/TikTok) untuk file `.webm` karena video-video ini merupakan representasi aktivitas harian yang pendek dan dinamis.
> Untuk video YouTube, kami akan menyematkannya di halaman **Galeri** sebagai **Featured Video (Dokumentasi Event)** dengan kartu metadata detail event yang disematkan secara estetik.

## Proposed Changes

---

### Shared Components

#### [NEW] [VideoReels.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/components/home/VideoReels.tsx)
Membuat komponen baru yang menampilkan daftar video reels vertikal. Fitur:
* Hover/Tap untuk memutar otomatis (auto-play) dengan keadaan mute.
* Tombol Toggle Suara (Mute/Unmute) di setiap kartu video.
* Klik untuk membuka Lightbox Video khusus dengan ukuran lebih besar beserta detail deskripsi.

#### [NEW] [VideoReels.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/components/home/VideoReels.module.css)
CSS module untuk komponen VideoReels menggunakan Glassmorphism, efek hover scale premium, dan responsivitas grid yang baik.

---

### Home Page

#### [MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/page.tsx)
Menambahkan komponen `VideoReels` di antara `GalleryPreview` dan `ContactSection` untuk memberikan kesan dinamis saat pertama kali mengunjungi website.

---

### Gallery Page

#### [MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/galeri/page.tsx)
* Menambahkan tab switcher tambahan atau memadukan video reels ke dalam filter kategori di galeri (misal tab "Video Reels" terpisah dari Foto).
* Menambahkan bagian **Featured Video Event** di bagian bawah halaman untuk memuat iframe YouTube dari Event Daycare South Jakarta, lengkap dengan kartu detail (Metrik: durasi event, aktivitas, jumlah anak, rentang umur) menggunakan desain card premium.

#### [MODIFY] [page.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/galeri/page.module.css)
* Menambahkan style untuk container iframe YouTube agar responsif (aspect-ratio 16/9) dan tidak pecah di mobile.
* Menambahkan style untuk kartu detail event di samping video YouTube.

---

### About Us Page (Tentang Kami)

#### [MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/tentang-kami/page.tsx)
Mengintegrasikan video `amanacare-about-meet-the-team.webm` di bagian **Tim Profesional** atau di samping pesan pendiri (Founder Message) sebagai pengantar video tim Amana Care.

#### [MODIFY] [page.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/tentang-kami/page.module.css)
Menambahkan style player video untuk Tentang Kami.

---

### Services Page (Layanan)

#### [MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/layanan/page.tsx)
Menyematkan video:
* `amanacare-program-baby-sensory-play.webm` di dalam section Daycare program (dekat bagian program stimulasi bayi).
* `amanacare-curriculum-montessori-practical-life.webm` di dekat bagian aktivitas belajar atau kurikulum.

#### [MODIFY] [page.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/layanan/page.module.css)
Menambahkan style player video inline untuk halaman layanan.

---

## Verification Plan

### Automated Tests
* Jalankan `npm run build` untuk memastikan tidak ada kesalahan kompilasi TypeScript atau Next.js.
* Jalankan `npm run lint` untuk memastikan semua aturan penulisan kode terpenuhi.

### Manual Verification
* Verifikasi responsivitas pemutar video reels di mobile dan desktop.
* Pastikan video dapat di-mute/unmute dan berfungsi dengan baik.
* Verifikasi iframe YouTube responsif dan kartu informasi tampil rapi di berbagai ukuran layar.
