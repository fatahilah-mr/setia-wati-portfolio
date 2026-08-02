---
title: "Portofolio Setia Wati (Kwettiau)"
description: "Website portofolio interaktif dan estetik bertema pink pastel untuk Setia Wati, dirancang menggunakan React 19, Vite, TypeScript, dan Motion."
status: "completed"
techStack:
  - React 19
  - Vite
  - TypeScript
  - Motion
  - Tailwind CSS
  - Lucide React
startDate: "2026-06-30"
repoUrl: "https://github.com/fatahilah-mr/web-setia-wati"
demoUrl: "https://kwettiau.fatah.web.id"
heroImage: "/uploads/setia-wati-portfolio.jpg"
featured: true
references:
  - title: "Dokumentasi Resmi React"
    url: "https://react.dev"
  - title: "Dokumentasi Resmi Vite"
    url: "https://vitejs.dev"
  - title: "Dokumentasi Motion"
    url: "https://motion.dev"
---

## 📌 1. Problem (Latar Belakang & Masalah)
Setia Wati (Kwettiau), seorang lulusan Teknik Komputer dan Jaringan (TKJ) dari SMK Patriot Pituruh, membutuhkan media personal branding digital yang dapat mempresentasikan identitas uniknya. Sebagian besar website portofolio siswa IT cenderung terkesan kaku, didominasi warna gelap/monokrom, dan terlalu berfokus pada baris kode tanpa mencerminkan kepribadian pemiliknya. Setia Wati memiliki perpaduan minat yang unik antara dunia jaringan IT, seni memasak, penulisan jurnal fiksi, dan kegemaran pada kultur pop (NCT Dream, Chen Zhe Yuan, Harry Vaughan). Oleh karena itu, diperlukan sebuah platform portofolio web yang tidak hanya memamerkan keahlian teknis (TKJ), tetapi juga memiliki estetika visual yang hangat, dinamis, personal, serta responsif di semua perangkat.

## 👤 2. Target User (Pengguna Utama)
- **Rekruiter & Mitra Kerja:** Pihak sekolah, instansi, atau perusahaan yang ingin melihat profil, riwayat pendidikan, dan kompetensi teknis TKJ Setia Wati.
- **Komunitas & Pengunjung Umum:** Teman sebayanya dan pengunjung web yang ingin mengenal profil personal, motivasi hidup, serta karya tulisan dan playlist musik favorit Setia Wati.
- **Klien Potensial:** Pihak yang membutuhkan jasa atau kolaborasi di bidang TI, desain dasar, maupun proyek kreatif.

## 💡 3. Solution (Solusi yang Ditawarkan)
Membangun web portofolio *Single Page Application* (SPA) berbasis **React 19** dan **Vite** dengan tema desain visual *Pink Pastel Glassmorphism*. Solusi ini menggabungkan:
1. **Desain Visual Berkarakter:** Palet warna hangat (soft pink pastel, rose, dan putih) yang dikombinasikan dengan tipografi modern dan efek *glassmorphism*.
2. **Interaktivitas Modern:** Efek *3D Mouse Tilt Parallax* pada kartu idola, *scroll spy navigation*, animasi transisi halus menggunakan **Motion**, serta widget player musik favorit yang interaktif.
3. **Modul Kontak Langsung:** Modal formulir surat interaktif yang secara otomatis mendeteksi input pengunjung dan menggenerasi URI `mailto:` untuk mempermudah komunikasi tanpa memerlukan backend server yang rumit.

## ⭐ 4. Key Features (Fitur-Fitur Utama)
- **3D Card Tilt Parallax Effect:** Efek visual responsif 3 dimensi pada kartu idola yang bergerak mengikuti kursor mouse Pengunjung dengan bayangan dinamis.
- **Smart Scroll-Spy Header & Navigation:** Header yang otomatis menyembunyikan diri saat pengguna *scroll* ke bawah dan muncul kembali saat *scroll* ke atas, dilengkapi *active section tracker* yang memperbarui navigasi secara presisi.
- **Lazy Loaded Image dengan Shimmer Skeleton:** Komponen `LazyImage` khusus yang menampilkan animasi *shimmering fallback* saat gambar dimuat untuk kenyamanan UX maksimal.
- **Interactive Playlist & Like System:** Widget pemutar musik favorit dengan fitur menyukai (*like/dislike*) lagu yang mengubah status UI secara *real-time*.
- **Surat Interaktif (Interactive Email Modal):** Popup modal formulir kontak yang memungkinkan pengunjung menginput nama, subjek, dan isi pesan untuk langsung dikirim via email client pengguna.
- **Profil Biodata & Showcase Keahlian TKJ:** Penyajian data diri dan badge keahlian teknis (Networking Setup, Cisco Packet Tracer, Hardware Troubleshooting) dengan tata letak yang bersih dan terstruktur.

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)
- **Tantangan Teknis:** Melakukan manipulasi transformasi 3D pada elemen kartu favorit dan animasi scroll tanpa menyebabkan *layout thrashing* atau penurunan performa (*lagging*) pada perangkat mobile.
- **Solusi & Pemecahan:** Menggunakan properti CSS `will-change: transform, box-shadow`, transisi kurva bezier `cubic-bezier(0.16, 1, 0.3, 1)`, serta menambahkan opsi `{ passive: true }` pada *event listener scroll* window. Komponen gambar juga dioptimalkan melalui teknik *lazy loading* khusus.
- **Tantangan Teknis:** Menjaga kebersihan arsitektur kode saat mengelola state interaktif seperti status header, menu mobile, favorit lagu, dan formulir modal pada SPA.
- **Solusi & Pemecahan:** Memisahkan struktur komponen menjadi modul terisolasi (`LazyImage.tsx`, data `playlist.ts`, `types.ts`) dan memanfaatkan React Hooks (`useState`, `useEffect`, `useRef`) secara efisien.

## 📈 6. Impact (Dampak & Hasil)
- **Sebelum:** Belum ada wadah digital terpadu yang dapat merepresentasikan profil profesional TKJ sekaligus kepribadian personal Setia Wati secara estetik.
- **Sesudah:** Memiliki situs portofolio web yang elegan, cepat (*fast load speed*), responsif 100% pada semua ukuran layar, serta berhasil menonjolkan personal branding yang unik dan profesional di mata pengunjung maupun rekruiter.

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)
- **React 19:** Dipilih untuk kemudahan sintaks berbasis komponen deklaratif, efisiensi render DOM, dan manajemen state reaktif.
- **Vite:** Dipilih sebagai *build tool* dan *development server* utama karena kecepatan *Hot Module Replacement* (HMR) yang instan dan hasil *bundle production* yang sangat teroptimasi.
- **Motion (Framer Motion):** Dipilih untuk menangani transisi komponen dan animasi UI yang halus dan alami tanpa beban kode berlebih.
- **Tailwind CSS & Vanilla CSS Variables:** Kombinasi *utility-first styling* dan *CSS custom properties* (design tokens) untuk fleksibilitas total dalam membentuk tema pink pastel dan glassmorphism.
- **Lucide React:** Dipilih sebagai pustaka ikon SVG yang ringan, konsisten, dan mudah disesuaikan warnanya secara dinamis.

## 🖼️ Screenshots & Visual Demo
![Tampilan Utama Portofolio](/uploads/setia-wati-portfolio.jpg)
*Gambar 1: Antarmuka utama (Hero Section & Header) dari Portofolio Setia Wati dengan tema pink pastel.*
