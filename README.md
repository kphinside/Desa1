# Template Website Pemerintah Desa

Template website pemerintah desa berbasis **HTML5, CSS3, dan JavaScript murni** — tanpa framework apa pun. Siap dipublikasikan langsung melalui **GitHub Pages**.

## ✨ Fitur

- Desain modern, profesional, responsif (mobile-first)
- Dark mode (mode terang & gelap) dengan penyimpanan preferensi
- Navigasi mobile (hamburger menu)
- Pencarian & filter berbasis JavaScript (Dokumen, JDIH, Galeri)
- Slider/ticker pengumuman pada hero section
- Tombol "Kembali ke atas" (back-to-top)
- Halaman 404 kustom
- SEO dasar: meta tag, Open Graph, favicon SVG
- Komentar kode rapi & mudah dipelajari

## 📂 Struktur Folder

```
.
├── index.html              # Halaman Beranda
├── 404.html                # Halaman Not Found
├── css/
│   └── style.css           # Seluruh gaya & design system
├── js/
│   ├── main.js             # Tema, nav, back-to-top, dll.
│   ├── data.js             # Data dummy (berita, dokumen, dll.)
│   └── render.js           # Logika render & filter/pencarian
├── images/
│   └── favicon.svg         # Favicon
├── documents/              # Letakkan file PDF/DOCX di sini
└── pages/
    ├── profil.html
    ├── berita.html
    ├── berita-detail.html
    ├── galeri.html
    ├── dokumen.html
    ├── ppid.html
    ├── jdih.html
    └── struktur.html
```

## 🚀 Cara Pakai

1. **Clone / download** repository ini.
2. Buka `index.html` langsung di browser, atau jalankan server lokal sederhana:
   ```bash
   python3 -m http.server 8000
   ```
3. Edit data dummy di `js/data.js` sesuai data desa Anda.
4. Ganti teks "Desa Sukamaju" di seluruh file HTML dengan nama desa Anda.
5. Letakkan file dokumen yang dapat diunduh di folder `documents/`.

## 🌐 Publikasi ke GitHub Pages

1. Push repository ke GitHub.
2. Buka **Settings → Pages**.
3. Pilih branch `main` dan folder `/ (root)`.
4. Klik **Save**. Website siap dalam beberapa menit.

## 🎨 Kustomisasi

Semua warna & token desain diatur dalam blok `:root` di `css/style.css`.
Ubah `--color-primary`, `--color-accent`, dll untuk identitas warna desa Anda.

## 📄 Lisensi

Bebas digunakan untuk keperluan pemerintahan desa, sekolah, atau pembelajaran.
