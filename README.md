# VintageVroom — Suku Cadang Motor Klasik (Frontend UI)

Proyek ini merupakan purwarupa (prototype) antarmuka pengguna (User Interface) aplikasi marketplace khusus suku cadang motor jadul/klasik. Dibangun menggunakan teknologi frontend murni (HTML5, Vanilla CSS, dan Vanilla JavaScript) tanpa ketergantungan backend, server, maupun database sehingga sangat mudah dijalankan.

Proyek ini dirancang khusus untuk memenuhi kriteria penilaian **UAS Workshop Desain UI (Semester 4)** dengan mengusung tema desain **Bold & Vintage** (retro era 70–80an) dan dioptimalkan agar responsif pada perangkat desktop maupun mobile.

---

## 🛠️ Tech Stack & Library

- **Markup & Struktur**: HTML5 (Elemen Semantik)
- **Styling & Desain**: CSS3 (Custom Variables, Flexbox, CSS Grid)
- **Logika & Interaktivitas**: Vanilla JavaScript (ES6)
- **Penyimpanan State (Simulasi Database)**: `localStorage` (untuk persistensi data cart, CRUD produk/artikel, status order, dan user)
- **Ikon**: Font Awesome 6 via CDN
- **Tipografi**: Google Fonts CDN (Playfair Display & Inter)
- **Grafik Dashboard**: Chart.js via CDN

---

## 📁 Struktur Folder Proyek

Struktur folder ditata secara rapi untuk mempermudah navigasi file saat presentasi dosen:

```
vintagevroom/
│
├── index.html                        ← Halaman Landing Page (Entry Point)
│
├── assets/
│   ├── css/
│   │   ├── style.css                 ← Design system (variabel warna, typography, reset, grid)
│   │   ├── components.css            ← Komponen reusable (button, card, badge, navbar, footer)
│   │   ├── responsive.css            ← Kumpulan media queries pendukung mobile viewport
│   │   └── admin.css                 ← Styling khusus layout admin panel & sidebar
│   │
│   ├── js/
│   │   ├── data.js                   ← Mock database (dummy products, articles, orders, users)
│   │   ├── app.js                    ← Skrip umum publik (hamburger menu, scroll reveal, toast)
│   │   └── admin.js                  ← Skrip khusus dashboard admin (kalkulasi metrik, status)
│   │
│   └── images/
│       ├── hero-bg.jpg               ← Generated cover background hero section
│       ├── products/
│       │   └── karburator.jpg        ← Generated foto produk karburator
│       └── articles/
│           └── rawat-karbu.jpg       ← Generated foto artikel perawatan karbu
│
├── pages/
│   ├── public/                       ← Halaman Pengunjung / Toko Publik
│   │   ├── artikel.html              ← Arsip Artikel & Tips Bengkel
│   │   ├── artikel-detail.html       ← Detail Bacaan Artikel & Rekomendasi
│   │   ├── produk.html               ← Katalog Produk (dengan Multi-Filter JS)
│   │   ├── produk-detail.html        ← Detail Produk (dengan Quantity Selector & Tab Spek)
│   │   ├── keranjang.html            ← Keranjang Belanja (Update Qty & Hapus Item)
│   │   ├── checkout.html             ← Form Pengiriman & Pembayaran VA/QRIS/COD
│   │   ├── history.html              ← Lacak Status Pesanan & Cetak Invoice
│   │   └── login.html                ← Form Login & Register Akun
│   │
│   └── admin/                        ← Halaman Pengelolaan (Administrator)
│       ├── dashboard.html            ← Ringkasan Dashboard, Grafik Chart.js & Alert Stok
│       ├── kelola-produk.html        ← Tabel Inventori Suku Cadang
│       ├── produk-form.html          ← Form Tambah / Edit Data Suku Cadang
│       ├── kelola-artikel.html       ← Tabel Tulisan & Tips Artikel
│       ├── artikel-form.html         ← Form Tambah / Edit Tulisan Artikel
│       ├── kelola-pengguna.html      ← Tabel User & Fitur Blokir / Nonaktifkan Akun
│       └── kelola-transaksi.html     ← Tabel Update Status Pengiriman Order
│
└── README.md                         ← Panduan dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini tidak memerlukan instalasi Node.js, PHP, Composer, XAMPP, maupun database server.

1. Hubungkan komputer Anda dengan koneksi Internet (untuk memuat pustaka Font Awesome, Google Fonts, dan Chart.js).
2. Cari file `index.html` yang berada pada root folder `vintagevroom/`.
3. Klik dua kali (double-click) file `index.html` tersebut untuk membukanya langsung di browser (Google Chrome, Microsoft Edge, Firefox, atau Safari).
4. Selamat mengeksplorasi antarmuka VintageVroom!

---

## 🔑 Akun Uji Coba (Demo Credentials)

Untuk masuk ke halaman Admin Panel (Sisi Pengelolaan):
1. Buka halaman **Login / Masuk** (klik tombol `Admin Panel` di kanan atas navbar).
2. Isi alamat email dengan:
   - Email: **`andy@vintagevroom.id`**
   - Password: *Bebas (diisi sembarang karakter)*
3. Klik tombol **Masuk Ke Akun**. Anda akan dialihkan secara otomatis ke Dashboard Admin.
4. *Catatan*: Jika masuk menggunakan email selain `andy@vintagevroom.id`, sistem akan menganggap Anda masuk sebagai pelanggan biasa dan mengalihkan Anda kembali ke Landing Page publik.

---

## 🌟 Fitur Utama & Alur Simulasi (UAS Ready!)

1. **Responsive Viewport (Kesesuaian Layar 25%)**:
   Buka aplikasi di browser lalu tekan `F12` dan ubah tampilan ke mode mobile (e.g. iPhone). Seluruh navigasi berubah menjadi menu hamburger, susunan grid menyusut rapi, dan filter sidebar di katalog produk berubah menjadi drawer geser bawah yang nyaman.
2. **Katalog & Multi-Filter JS**:
   Pengunjung dapat mencari nama part secara langsung, memilih filter kategori, mencentang kompatibilitas motor, hingga menyetel slider range harga maksimal. Pencarian berlangsung instan tanpa reload halaman berkat logika filter JavaScript.
3. **Alur Belanja & Check-Out Terintegrasi**:
   - Menambahkan barang ke keranjang memicu **Toast Notification** interaktif dan memperbarui badge counter pada ikon keranjang di navbar secara *real-time*.
   - Di halaman keranjang, jumlah barang dapat diubah (+/-) dengan batasan stok maksimal produk tersebut.
   - Mengisi data diri di halaman checkout lalu menekan tombol "Konfirmasi Pesanan" akan secara otomatis **mengurangi kuota stok produk** pada inventori, **mengosongkan keranjang belanja**, **menyimpan catatan order baru** di data transaksi, dan memunculkan **modal sukses** yang berisi rincian Virtual Account bank atau kode QRIS unik.
4. **Dashboard Statistik & Chart Interaktif**:
   Halaman dashboard admin menghitung jumlah total produk, user aktif, total transaksi, dan total pendapatan secara dinamis dari `localStorage`. Grafik garis interaktif Chart.js memetakan grafik total penjualan per bulan. Terdapat panel peringatan khusus yang memunculkan daftar produk yang memiliki stok sisa 5 atau kurang agar admin segera memperbaruinya.
5. **Cetak Invoice Fisik**:
   Di halaman riwayat transaksi pembeli (`history.html`) maupun kelola transaksi admin (`kelola-transaksi.html`), menekan detail order akan memunculkan invoice modal. Tombol "Cetak Invoice" menggunakan CSS media query print untuk memformat halaman cetak secara otomatis menjadi struk struktur invoice yang bersih dan rapi (siap dicetak ke PDF / printer kertas).
