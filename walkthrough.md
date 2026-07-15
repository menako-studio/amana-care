# Walkthrough: Integrasi Video Reels & YouTube Embed

Kami telah sukses menyelesaikan dan memverifikasi seluruh langkah rencana implementasi untuk mengintegrasikan video reels (.webm) serta embed video YouTube ke dalam situs Amana Care.

## Perubahan yang Dilakukan

### 1. Komponen Video Reels Vertikal
* **[NEW] [VideoReels.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/components/home/VideoReels.tsx)**: Komponen khusus untuk memutar daftar video vertikal bergaya Instagram Reels/TikTok. Dilengkapi fitur:
  * Memutar otomatis saat di-hover/di-tap dengan keadaan bisu (*muted*).
  * Tombol kontrol mute/unmute audio yang disinkronkan.
  * Overlay Zoom interaktif untuk memicu lightbox.
  * Lightbox overlay berukuran besar dengan tampilan video penuh di satu sisi, dan kartu informasi detail video (kategori, deskripsi, tips) di sisi lainnya.
* **[NEW] [VideoReels.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/components/home/VideoReels.module.css)**: Penataan gaya visual premium (glassmorphism badge, efek transisi spring, serta tata letak responsif).

### 2. Integrasi Halaman Beranda (Homepage)
* **[MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/page.tsx)**: Memasukkan komponen `<VideoReels limit={3} />` di antara Gallery Preview dan Contact Section untuk impresi visual yang dinamis.

### 3. Integrasi Halaman Galeri
* **[MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/galeri/page.tsx)**:
  * Menambahkan tab switcher **Galeri Foto** dan **Video Reels** untuk memisahkan media dengan rapi.
  * Menyisipkan bagian **On-Site Daycare Service Event** di bagian bawah, memuat iframe YouTube dan kartu metadata event dengan detail visual (Durasi event, Aktivitas, Jumlah anak, Rentang usia).
* **[MODIFY] [page.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/galeri/page.module.css)**: Menambahkan style tab selector, aspect-ratio iframe 16:9 yang responsif, serta penataan kartu metadata.

### 4. Integrasi Halaman Tentang Kami
* **[MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/tentang-kami/page.tsx)**: Menyematkan video `amanacare-about-meet-the-team.webm` (Meet the Team) dengan pengantar teks deskriptif sebelum daftar anggota tim.
* **[MODIFY] [page.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/tentang-kami/page.module.css)**: Menambahkan style grid, video card berukuran portrait 9:16, dan tag badge di atas video.

### 5. Integrasi Halaman Layanan
* **[MODIFY] [page.tsx](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/layanan/page.tsx)**: Menyematkan video `amanacare-curriculum-montessori-practical-life.webm` dan `amanacare-program-baby-sensory-play.webm` di bawah program daycare sebagai section **Kurikulum & Stimulasi dalam Aksi**.
* **[MODIFY] [page.module.css](file:///Users/adibwafi/Documents/Menako%20Studio/amana-care/app/layanan/page.module.css)**: Penataan grid 2 kolom dengan kartu video aspect-ratio portrait 4:5 yang responsif untuk memaksimalkan area tangkapan video reels vertikal.

---

## Verifikasi & Hasil Uji

1. **Uji Kompilasi & Build**:
   * Menjalankan perintah `npm run build`.
   * Proyek berhasil dibangun (**zero errors**) dengan rincian:
     ```bash
     ✓ Compiled successfully in 1722ms
     Finished TypeScript in 2.4s ...
     Generating static pages ... (10/10)
     ```
2. **Kesesuaian Desain & Responsivitas**:
   * Tata letak video reels vertikal terbukti responsif di mobile (grid berubah menjadi 1 kolom dengan max-width teratur).
   * Video program di halaman layanan berganti menjadi 1 kolom di layar tablet/mobile agar mudah ditonton.
   * Iframe YouTube tetap mempertahankan proporsi 16:9 berkat pembungkus `.iframeWrapper` yang fleksibel.
