## **📘 EBOOK: PANDUAN LENGKAP MEMBUAT WEBSITE PORTOFOLIO**

### *HTML, CSS, JavaScript, dan GitHub Pages*

---

**Penulis:** Afif Jauhar  
**Versi:** 2.0 (Edisi Lengkap)  
**Tahun:** 2024

---

## **📋 DAFTAR ISI**

**BAB 1: Pengantar Web Development** • 5
- 1.1 Cara Kerja Website • 6
- 1.2 Tools yang Dibutuhkan • 8
- 1.3 Struktur Proyek • 10
- 1.4 Tujuan Pembelajaran Bab 1 • 12

**BAB 2: HTML Dasar (HyperText Markup Language)** • 13
- 2.1 Apa itu HTML? Tujuan dan Fungsi • 14
- 2.2 Kerangka Dasar HTML • 16
- 2.3 Tag-Tag HTML dan Fungsinya • 19
- 2.4 Atribut HTML • 24
- 2.5 Semantic HTML • 27
- 2.6 Membuat Halaman Website • 30
- 2.7 Studi Kasus: Halaman Portofolio • 33
- 2.8 Rangkuman Bab 2 • 36

**BAB 3: CSS (Cascading Style Sheets)** • 37
- 3.1 Apa itu CSS? Tujuan dan Fungsi • 38
- 3.2 Cara Menambahkan CSS • 40
- 3.3 Selector CSS • 43
- 3.4 Property dan Value CSS • 48
- 3.5 Box Model • 53
- 3.6 Layout dengan Flexbox • 58
- 3.7 Layout dengan Grid • 63
- 3.8 Typography dan Warna • 68
- 3.9 Animasi dan Transition • 72
- 3.10 Responsive Design • 77
- 3.11 Studi Kasus: Styling Portofolio • 82
- 3.12 Rangkuman Bab 3 • 86

**BAB 4: JavaScript Dasar** • 87
- 4.1 Apa itu JavaScript? Tujuan dan Fungsi • 88
- 4.2 Cara Menambahkan JavaScript • 90
- 4.3 Variabel dan Tipe Data • 93
- 4.4 Operator • 98
- 4.5 Function • 102
- 4.6 Conditional Statement • 107
- 4.7 Looping • 111
- 4.8 Array dan Object • 115
- 4.9 DOM Manipulation • 120
- 4.10 Event Handling • 125
- 4.11 Fetch API • 130
- 4.12 Async JavaScript • 134
- 4.13 Studi Kasus: Interaktivitas Portofolio • 138
- 4.14 Rangkuman Bab 4 • 142

**BAB 5: Membuat Website Portofolio** • 143
- 5.1 Tujuan dan Fungsi Website Portofolio • 144
- 5.2 Perencanaan dan Wireframe • 146
- 5.3 Halaman Home (index.html) • 150
- 5.4 Halaman Tentang (tentang.html) • 155
- 5.5 Halaman Portofolio (portofolio.html) • 160
- 5.6 Halaman Kontak (kontak.html) • 165
- 5.7 Navigasi Terpisah (navigation.html) • 170
- 5.8 CSS Lengkap untuk Semua Halaman • 173
- 5.9 JavaScript Lengkap untuk Semua Halaman • 190
- 5.10 Integrasi Semua Komponen • 200
- 5.11 Rangkuman Bab 5 • 204

**BAB 6: Fitur-Fitur Interaktif** • 205
- 6.1 Tujuan dan Fungsi Fitur Interaktif • 206
- 6.2 Transisi Antar Halaman • 208
- 6.3 Notifikasi • 213
- 6.4 Back to Top Button • 218
- 6.5 Scroll Animations • 223
- 6.6 Loading Spinner • 228
- 6.7 Validasi Form • 233
- 6.8 Dark Mode (Opsional) • 238
- 6.9 Rangkuman Bab 6 • 243

**BAB 7: Git dan GitHub** • 244
- 7.1 Tujuan dan Fungsi Git • 245
- 7.2 GitHub Desktop • 247
- 7.3 Commit dan Push • 251
- 7.4 GitHub Pages • 255
- 7.5 Rangkuman Bab 7 • 259

**BAB 8: Penutup** • 260
- 8.1 Rangkuman Seluruh Materi • 261
- 8.2 Tips Belajar Lanjutan • 263
- 8.3 Sumber Belajar • 265
- 8.4 Troubleshooting • 267
- 8.5 Glosarium • 270

---

## **BAB 1: PENGANTAR WEB DEVELOPMENT**

### **1.1 Cara Kerja Website**

**Tujuan Pembelajaran:**
- Memahami bagaimana website bekerja dari sisi client dan server
- Mengenal komponen-komponen penyusun website
- Memahami alur permintaan dan respons website

**Penjelasan Mendalam:**

Website bekerja dengan sistem **client-server**. Mari kita pahami setiap bagiannya:

```
[CLIENT]                                   [SERVER]
    │                                           │
    │ 1. User mengetik URL                      │
    │    (contoh: website.com)                   │
    │                                           │
    │───┐                                       │
    │   │ Browser menyiapkan request             │
    │←──┘                                       │
    │                                           │
    │ 2. Request dikirim ke server               │
    │ ─────────────────────────────────────────>│
    │                                           │
    │                                      ┌───┐│
    │                                      │   ││ Server mencari
    │                                      │   ││ file yang diminta
    │                                      └───┘│
    │                                           │
    │ 3. Server mengirim response                │
    │ <─────────────────────────────────────────│
    │    (file HTML, CSS, JS, gambar)            │
    │                                           │
    │───┐                                       │
    │   │ Browser menerjemahkan kode:            │
    │   │ • HTML → struktur                      │
    │   │ • CSS → tampilan                       │
    │   │ • JS → interaksi                       │
    │←──┘                                       │
    │                                           │
    │ 4. Website tampil di layar                  │
    │    User bisa berinteraksi                   │
    │                                           │
```

**Komponen Website:**
| **Komponen** | **Analogi** | **Fungsi** |
|--------------|-------------|------------|
| **HTML** | Tulang kerangka | Membuat struktur dan konten |
| **CSS** | Pakaian dan makeup | Mendesain tampilan, warna, layout |
| **JavaScript** | Otot dan otak | Menambah interaksi dan logika |

### **1.2 Tools yang Dibutuhkan**

**Tujuan:**
- Mengenal tools yang akan digunakan selama pengembangan
- Memahami fungsi masing-masing tools
- Mempersiapkan lingkungan pengembangan

**Penjelasan:**

| **Tools** | **Fungsi Utama** | **Fitur Penting** |
|-----------|------------------|-------------------|
| **VS Code** | Editor kode | - Syntax highlighting<br>- Auto completion<br>- Extension marketplace<br>- Integrated terminal |
| **GitHub Desktop** | Version control | - Visual Git interface<br>- Easy commit/push<br>- Branch management<br>- Conflict resolver |
| **Chrome** | Browser testing | - Cepat dan ringan<br>- DevTools terbaik<br>- Update teratur |
| **Chrome DevTools** | Debugging | - Elements inspector<br>- Console untuk error<br>- Network tab<br>- Performance monitor |

### **1.3 Struktur Proyek**

**Tujuan:**
- Memahami organisasi file dalam proyek website
- Belajar naming convention yang baik
- Mempersiapkan folder struktur

**Penjelasan:**

```
portofolio-afif/
│
├── 📄 index.html              # Halaman utama (landing page)
├── 📄 tentang.html            # Halaman profil & biodata
├── 📄 portofolio.html         # Halaman karya & project
├── 📄 kontak.html             # Halaman form kontak
├── 📄 navigation.html         # Komponen navigasi reusable
├── 📄 README.md               # Dokumentasi proyek
│
├── 📁 css/                    # Folder untuk file CSS
│   └── 📄 style.css           # Semua styling dalam satu file
│
├── 📁 js/                      # Folder untuk file JavaScript
│   └── 📄 script.js           # Semua kode JavaScript
│
└── 📁 images/                  # Folder untuk menyimpan gambar
    ├── 📄 profile.jpg          # Foto profil
    ├── 📄 project1.jpg         # Gambar project
    └── 📄 screenshot.png       # Screenshot website
```

**Mengapa Struktur Ini Penting:**
1. **Organisasi** - Mudah mencari file
2. **Maintenance** - Mudah update dan perbaiki
3. **Scalability** - Mudah tambah halaman baru
4. **Collaboration** - Tim lain mudah memahami
5. **Deployment** - Mudah upload ke hosting

### **1.4 Tujuan Pembelajaran Bab 1**

Setelah mempelajari Bab 1, Anda diharapkan mampu:
- ✅ Menjelaskan cara kerja website secara sederhana
- ✅ Mengidentifikasi 3 komponen utama website (HTML, CSS, JS)
- ✅ Mempersiapkan tools yang diperlukan
- ✅ Membuat struktur folder proyek yang rapi
- ✅ Memahami alur pengembangan website

---

## **BAB 2: HTML DASAR (HyperText Markup Language)**

### **2.1 Apa itu HTML? Tujuan dan Fungsi**

**Tujuan Pembelajaran:**
- Memahami definisi dan konsep HTML
- Mengetahui peran HTML dalam website
- Membedakan HTML dengan bahasa pemrograman lain

**Penjelasan Mendalam:**

**HTML (HyperText Markup Language)** adalah bahasa markup yang digunakan untuk membuat struktur halaman web.

**Analogi Sederhana:**
```
Bayangkan Anda ingin membangun rumah:
┌─────────────────────────────────────┐
│  HTML = Struktur rumah               │
│  ┌─────────────────────────────────┐│
│  │ • Dinding (tag <div>)            ││
│  │ • Atap (tag <header>)            ││
│  │ • Pintu (tag <a>)                ││
│  │ • Jendela (tag <img>)            ││
│  │ • Ruangan (tag <section>)        ││
│  └─────────────────────────────────┘│
│                                      │
│  CSS = Cat, wallpaper, dekorasi      │
│  JavaScript = Lampu otomatis, pintu  │
│              geser, bel rumah        │
└─────────────────────────────────────┘
```

**Fungsi Utama HTML:**

| **Fungsi** | **Penjelasan** | **Contoh** |
|------------|----------------|------------|
| **Membuat Struktur** | Menyusun elemen-elemen website | Header, main, footer |
| **Menyajikan Konten** | Menampilkan teks, gambar, video | `<p>`, `<img>`, `<video>` |
| **Membuat Link** | Menghubungkan antar halaman | `<a href="...">` |
| **Membuat Form** | Menerima input dari user | `<form>`, `<input>` |
| **Semantic Markup** | Memberi makna pada konten | `<article>`, `<nav>` |

**Karakteristik HTML:**
- ✅ Bukan bahasa pemrograman (tidak ada logika)
- ✅ Menggunakan tag (markup)
- ✅ Case insensitive (tidak sensitif huruf besar/kecil)
- ✅ Dapat dibaca browser
- ✅ Bersifat statis

### **2.2 Kerangka Dasar HTML**

**Tujuan:**
- Memahami struktur minimal sebuah dokumen HTML
- Mengenal bagian-bagian penting dalam HTML
- Mampu menulis kerangka HTML dengan benar

**Penjelasan:**

```html
<!DOCTYPE html>
<!-- Deklarasi tipe dokumen - Memberi tahu browser bahwa ini HTML5 -->

<html lang="id">
<!-- Elemen root - Semua konten harus di dalam tag ini -->
<!-- lang="id" = konten berbahasa Indonesia -->

<head>
    <!-- Bagian kepala - Tidak tampil di halaman, berisi metadata -->
    
    <meta charset="UTF-8">
    <!-- Mengatur encoding karakter - Supaya bisa menampilkan huruf latin, arab, emoji -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Mengatur tampilan di mobile - Membuat website responsive -->
    <!-- width=device-width = lebar sesuai layar -->
    <!-- initial-scale=1.0 = zoom normal -->
    
    <title>Judul Halaman</title>
    <!-- Judul yang muncul di tab browser -->
    
    <link rel="stylesheet" href="css/style.css">
    <!-- Menghubungkan file CSS eksternal -->
    
    <style>
        /* CSS internal (opsional) */
    </style>
</head>

<body>
    <!-- Bagian tubuh - Semua konten yang tampil di halaman -->
    
    <!-- Konten website ditulis di sini -->
    
    <script src="js/script.js"></script>
    <!-- Menghubungkan file JavaScript eksternal -->
    <!-- Ditaruh di akhir agar konten HTML dulu yang dimuat -->
</body>
</html>
```

**Penjelasan Setiap Bagian:**

| **Bagian** | **Fungsi** | **Wajib?** |
|------------|------------|------------|
| `<!DOCTYPE html>` | Memberi tahu browser versi HTML | ✅ YA |
| `<html>` | Pembungkus semua konten | ✅ YA |
| `<head>` | Metadata, tidak tampil | ✅ YA |
| `<body>` | Konten yang tampil | ✅ YA |
| `<title>` | Judul tab browser | ✅ YA |
| `<meta charset>` | Encoding karakter | ✅ YA |
| `<meta viewport>` | Responsive design | ✅ YA |

### **2.3 Tag-Tag HTML dan Fungsinya**

**Tujuan:**
- Mengenal berbagai tag HTML yang sering digunakan
- Memahami fungsi setiap tag
- Mampu memilih tag yang tepat untuk konten

**Penjelasan Lengkap:**

#### **A. Tag untuk Heading (Judul)**

```html
<h1>Heading 1 - Judul Utama</h1>
<h2>Heading 2 - Sub Judul</h2>
<h3>Heading 3 - Bagian</h3>
<h4>Heading 4 - Sub Bagian</h4>
<h5>Heading 5 - Detail</h5>
<h6>Heading 6 - Keterangan Kecil</h6>
```

**Fungsi:** Membuat hierarki judul, penting untuk SEO
**Aturan:** Hanya satu `<h1>` per halaman

#### **B. Tag untuk Teks**

```html
<p>Paragraf biasa untuk menampilkan teks panjang</p>

<strong>Teks tebal (penting)</strong>
<b>Teks tebal (tanpa makna khusus)</b>

<em>Teks miring (penekanan)</em>
<i>Teks miring (tanpa makna khusus)</i>

<u>Teks garis bawah</u>
<del>Teks dicoret</del>
<mark>Teks di-highlight</mark>

<small>Teks kecil</small>
<blockquote>Kutipan panjang</blockquote>
<code>Kode program</code>
```

#### **C. Tag untuk Link**

```html
<!-- Link ke halaman lain -->
<a href="tentang.html">Tentang Saya</a>

<!-- Link ke website luar -->
<a href="https://google.com" target="_blank">Google</a>
<!-- target="_blank" = buka di tab baru -->

<!-- Link ke bagian tertentu -->
<a href="#kontak">Langsung ke Kontak</a>

<!-- Link dengan tooltip -->
<a href="info.html" title="Klik untuk info">Info</a>
```

#### **D. Tag untuk Gambar**

```html
<!-- Gambar dasar -->
<img src="foto.jpg" alt="Deskripsi gambar">

<!-- Gambar dengan ukuran -->
<img src="foto.jpg" alt="Foto Profil" width="200" height="200">

<!-- Gambar dengan style -->
<img src="foto.jpg" alt="Profil" class="profile-img">

<!-- Gambar dari internet -->
<img src="https://example.com/gambar.jpg" alt="Gambar Online">
```

**Atribut Penting:**
- `src` = sumber gambar
- `alt` = teks alternatif (penting untuk aksesibilitas)
- `width/height` = ukuran (opsional)

#### **E. Tag untuk List (Daftar)**

```html
<!-- List tidak berurutan (bullet) -->
<ul>
    <li>Item pertama</li>
    <li>Item kedua</li>
    <li>Item ketiga</li>
</ul>

<!-- List berurutan (angka) -->
<ol>
    <li>Langkah 1</li>
    <li>Langkah 2</li>
    <li>Langkah 3</li>
</ol>

<!-- List deskripsi -->
<dl>
    <dt>HTML</dt>
    <dd>Bahasa untuk struktur website</dd>
    
    <dt>CSS</dt>
    <dd>Bahasa untuk tampilan website</dd>
</dl>
```

#### **F. Tag untuk Tabel**

```html
<table border="1">
    <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Umur</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Afif</td>
            <td>25</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Jauhar</td>
            <td>24</td>
        </tr>
    </tbody>
</table>
```

#### **G. Tag untuk Form**

```html
<form action="proses.php" method="POST">
    <!-- Input teks -->
    <label for="nama">Nama:</label>
    <input type="text" id="nama" name="nama" placeholder="Masukkan nama">
    
    <!-- Input email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Textarea -->
    <label for="pesan">Pesan:</label>
    <textarea id="pesan" name="pesan" rows="5"></textarea>
    
    <!-- Radio button -->
    <input type="radio" name="gender" value="L"> Laki-laki
    <input type="radio" name="gender" value="P"> Perempuan
    
    <!-- Checkbox -->
    <input type="checkbox" name="setuju"> Saya setuju
    
    <!-- Dropdown -->
    <select name="kota">
        <option value="JKT">Jakarta</option>
        <option value="BDG">Bandung</option>
    </select>
    
    <!-- Tombol submit -->
    <button type="submit">Kirim</button>
</form>
```

#### **H. Tag Semantic HTML5**

```html
<header>Bagian atas halaman</header>
<nav>Menu navigasi</nav>
<main>Konten utama</main>
<article>Artikel/konten independen</article>
<section>Bagian dari halaman</section>
<aside>Sidebar/konten samping</aside>
<footer>Bagian bawah halaman</footer>
<figure>Gambar dengan caption</figure>
<figcaption>Caption untuk gambar</figcaption>
```

**Keuntungan Semantic HTML:**
- ✅ SEO lebih baik
- ✅ Aksesibilitas meningkat
- ✅ Kode lebih mudah dibaca
- ✅ Maintainance lebih mudah

### **2.4 Atribut HTML**

**Tujuan:**
- Memahami fungsi atribut HTML
- Mengenal atribut global dan spesifik
- Mampu menggunakan atribut dengan tepat

**Penjelasan:**

Atribut adalah informasi tambahan pada tag HTML.

```html
<tag nama_atribut="nilai_atribut">Konten</tag>

<!-- Contoh -->
<a href="tentang.html" target="_blank" class="nav-link">Tentang</a>
<!--  ↑        ↑             ↑              ↑
   atribut  nilai        atribut        nilai
-->
```

#### **A. Atribut Global (Bisa dipakai semua tag)**

| **Atribut** | **Fungsi** | **Contoh** |
|-------------|------------|------------|
| `class` | Untuk CSS (banyak elemen) | `<p class="text-red">` |
| `id` | Identitas unik | `<div id="header">` |
| `style` | CSS langsung | `<p style="color:red">` |
| `title` | Tooltip | `<a title="Klik">` |
| `lang` | Bahasa | `<p lang="id">` |
| `hidden` | Sembunyikan | `<div hidden>` |

#### **B. Atribut Khusus Tag**

**Untuk `<a>` (link):**
```html
<a href="url">           <!-- Tujuan link -->
<a target="_blank">      <!-- Buka tab baru -->
<a target="_self">       <!-- Buka tab sama (default) -->
<a rel="noopener">       <!-- Keamanan -->
```

**Untuk `<img>` (gambar):**
```html
<img src="file.jpg">     <!-- Sumber gambar -->
<img alt="teks">         <!-- Teks alternatif -->
<img width="100">        <!-- Lebar -->
<img height="100">       <!-- Tinggi -->
<img loading="lazy">     <!-- Muat saat diperlukan -->
```

**Untuk `<form>` (formulir):**
```html
<form action="url">      <!-- Tujuan pengiriman -->
<form method="GET">      <!-- Metode GET (data di URL) -->
<form method="POST">     <!-- Metode POST (data tersembunyi) -->
<form enctype="multipart/form-data"> <!-- Untuk upload file -->
```

### **2.5 Semantic HTML**

**Tujuan:**
- Memahami pentingnya semantic HTML
- Membedakan tag semantic dan non-semantic
- Menerapkan semantic HTML dalam proyek

**Penjelasan:**

**Semantic HTML** adalah penggunaan tag yang memiliki makna, bukan hanya untuk tampilan.

**Perbandingan:**

```html
<!-- NON-SEMANTIC (tidak disarankan) -->
<div class="header">Judul</div>
<div class="nav">Menu</div>
<div class="main">Konten</div>
<div class="footer">Copyright</div>

<!-- SEMANTIC (disarankan) -->
<header>Judul</header>
<nav>Menu</nav>
<main>Konten</main>
<footer>Copyright</footer>
```

**Daftar Tag Semantic:**

| **Tag** | **Fungsi** | **Analogi** |
|---------|------------|-------------|
| `<header>` | Bagian atas halaman | Kepala |
| `<nav>` | Navigasi | Rambu-rambu |
| `<main>` | Konten utama | Badan |
| `<article>` | Konten independen | Buku |
| `<section>` | Bagian | Bab |
| `<aside>` | Konten samping | Catatan pinggir |
| `<footer>` | Bagian bawah | Kaki |
| `<figure>` | Gambar dengan caption | Bingkai foto |
| `<time>` | Waktu | Kalender |

**Manfaat Semantic HTML:**
1. **SEO** - Google lebih mudah memahami struktur
2. **Accessibility** - Screen reader bisa membaca dengan benar
3. **Readability** - Kode mudah dipahami
4. **Maintainability** - Mudah diperbaiki

### **2.6 Membuat Halaman Website**

**Tujuan:**
- Menerapkan semua konsep HTML dalam halaman nyata
- Membuat struktur halaman yang baik
- Mengorganisir konten dengan rapi

**Penjelasan:**

#### **Langkah 1: Buat Kerangka**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
</head>
<body>
    <!-- Konten akan di sini -->
</body>
</html>
```

#### **Langkah 2: Tambahkan Header**

```html
<body>
    <header>
        <h1>Nama Website</h1>
        <p class="subtitle">Tagline atau deskripsi singkat</p>
    </header>
</body>
```

#### **Langkah 3: Tambahkan Navigasi**

```html
<body>
    <header>...</header>
    
    <nav>
        <a href="index.html">Home</a>
        <a href="tentang.html">Tentang</a>
        <a href="portofolio.html">Portofolio</a>
        <a href="kontak.html">Kontak</a>
    </nav>
</body>
```

#### **Langkah 4: Tambahkan Konten Utama**

```html
<body>
    <header>...</header>
    <nav>...</nav>
    
    <main>
        <section>
            <h2>Judul Bagian</h2>
            <article>
                <h3>Judul Artikel</h3>
                <p>Isi artikel...</p>
            </article>
        </section>
    </main>
</body>
```

#### **Langkah 5: Tambahkan Footer**

```html
<body>
    <header>...</header>
    <nav>...</nav>
    <main>...</main>
    
    <footer>
        <p>&copy; 2024 Hak Cipta</p>
    </footer>
</body>
```

### **2.7 Studi Kasus: Halaman Portofolio**

**Tujuan:**
- Menerapkan semua konsep HTML dalam proyek nyata
- Membuat halaman portofolio yang lengkap
- Memahami struktur halaman yang baik

**Kode Lengkap Halaman Home:**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Afif Jauhar</title>
</head>
<body>
    <!-- HEADER -->
    <header>
        <h1>Afif Jauhar</h1>
        <p>Web Developer Pemula | Content Creator</p>
    </header>
    
    <!-- NAVIGASI -->
    <nav>
        <a href="index.html">Home</a>
        <a href="tentang.html">Tentang</a>
        <a href="portofolio.html">Portofolio</a>
        <a href="kontak.html">Kontak</a>
    </nav>
    
    <!-- KONTEN UTAMA -->
    <main>
        <!-- Section Selamat Datang -->
        <section>
            <h2>Selamat Datang! 👋</h2>
            
            <article>
                <h3>Halo, saya Afif</h3>
                <p>Selamat datang di website portofolio pribadi saya. 
                   Saya sedang belajar web development dan ingin berbagi 
                   perjalanan belajar saya melalui website ini.</p>
                <p>Website ini dibuat menggunakan HTML, CSS, dan JavaScript 
                   murni tanpa framework. Tujuannya untuk memahami dasar-dasar 
                   web development dengan baik.</p>
            </article>
            
            <article>
                <h3>Apa yang Saya Pelajari</h3>
                <ul>
                    <li>HTML untuk struktur website</li>
                    <li>CSS untuk desain dan animasi</li>
                    <li>JavaScript untuk interaktivitas</li>
                    <li>Git & GitHub untuk version control</li>
                </ul>
            </article>
        </section>
        
        <!-- Section Highlight -->
        <section>
            <h2>Highlight</h2>
            
            <div class="card">
                <h3>✨ Project Terbaru</h3>
                <p>Website portofolio ini adalah project pertama saya. 
                   Saya membuatnya dengan desain modern dan responsif.</p>
                <a href="portofolio.html">Lihat Project →</a>
            </div>
            
            <div class="card">
                <h3>📚 Sedang Mempelajari</h3>
                <p>Saat ini saya fokus mempelajari JavaScript lebih dalam 
                   dan mulai belajar framework React.</p>
            </div>
        </section>
    </main>
    
    <!-- FOOTER -->
    <footer>
        <p>&copy; 2024 Afif Jauhar. Dibuat dengan ❤️</p>
        <p>Email: afif.jauhar@email.com | GitHub: @afifjauhar</p>
    </footer>
</body>
</html>
```

### **2.8 Rangkuman Bab 2**

**Poin-Poin Penting:**

1. **HTML** adalah bahasa markup untuk struktur website
2. **Tag HTML** terdiri dari tag pembuka `<tag>` dan tag penutup `</tag>`
3. **Atribut** memberikan informasi tambahan pada tag
4. **Semantic HTML** penting untuk SEO dan aksesibilitas
5. **Struktur dasar HTML**: `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
6. **Tag umum**: heading, paragraf, link, gambar, list, tabel, form
7. **Organisasi konten**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`

**Tujuan yang Tercapai:**
- ✅ Memahami konsep dasar HTML
- ✅ Mengenal berbagai tag dan fungsinya
- ✅ Mampu menggunakan atribut dengan benar
- ✅ Membuat struktur halaman yang rapi
- ✅ Menerapkan semantic HTML

---

## **BAB 3: CSS (Cascading Style Sheets)**

### **3.1 Apa itu CSS? Tujuan dan Fungsi**

**Tujuan Pembelajaran:**
- Memahami definisi dan konsep CSS
- Mengetahui peran CSS dalam website
- Membedakan HTML dan CSS

**Penjelasan Mendalam:**

**CSS (Cascading Style Sheets)** adalah bahasa yang digunakan untuk mengatur tampilan dokumen HTML.

**Analogi Sederhana:**
```
┌─────────────────────────────────────────────┐
│  HTML = Rumah (struktur)                     │
│  • Dinding (tag <div>)                        │
│  • Pintu (tag <a>)                            │
│  • Jendela (tag <img>)                        │
│  • Ruangan (tag <section>)                    │
├─────────────────────────────────────────────┤
│  CSS = Desain interior & eksterior            │
│  • Warna cat (color)                          │
│  • Wallpaper (background-image)               │
│  • Ukuran pintu (width, height)               │
│  • Posisi furniture (position)                │
│  • Lampu hias (animation)                      │
│  • Tirai (border, shadow)                      │
└─────────────────────────────────────────────┘
```

**Fungsi Utama CSS:**

| **Fungsi** | **Penjelasan** | **Contoh Property** |
|------------|----------------|---------------------|
| **Styling** | Mengatur warna, font, ukuran | `color`, `font-size` |
| **Layout** | Mengatur posisi dan tata letak | `display`, `position` |
| **Responsive** | Menyesuaikan tampilan di berbagai layar | `media query` |
| **Animasi** | Membuat gerakan dan efek | `transition`, `animation` |
| **Decorasi** | Menambah hiasan seperti shadow, border | `box-shadow`, `border` |

**Karakteristik CSS:**
- ✅ Bukan bahasa pemrograman (tidak ada logika)
- ✅ Bersifat cascading (berjenjang)
- ✅ Mendukung inheritance (pewarisan)
- ✅ Dapat ditulis inline, internal, atau eksternal

### **3.2 Cara Menambahkan CSS**

**Tujuan:**
- Memahami 3 cara menambahkan CSS
- Mengetahui kelebihan dan kekurangan masing-masing
- Memilih metode yang tepat untuk proyek

**Penjelasan:**

#### **A. Inline CSS (Langsung di Tag)**

```html
<p style="color: red; font-size: 16px;">Teks merah</p>
<div style="background: blue; padding: 10px;">Kotak biru</div>
```

**Kelebihan:**
- Cepat untuk testing
- Prioritas tertinggi

**Kekurangan:**
- Tidak efisien untuk banyak elemen
- Susah di-maintain
- Campur aduk dengan HTML

#### **B. Internal CSS (di Dalam `<style>`)**

```html
<head>
    <style>
        p {
            color: red;
            font-size: 16px;
        }
        
        .card {
            background: blue;
            padding: 10px;
        }
    </style>
</head>
```

**Kelebihan:**
- Satu halaman lebih rapi
- Cocok untuk halaman unik

**Kekurangan:**
- Tidak bisa dipakai di halaman lain
- Membuat file HTML besar

#### **C. External CSS (File Terpisah) - TERBAIK**

**HTML:**
```html
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
```

**CSS (style.css):**
```css
p {
    color: red;
    font-size: 16px;
}

.card {
    background: blue;
    padding: 10px;
}
```

**Kelebihan:**
- Satu file untuk semua halaman
- Loading lebih cepat (cache)
- Kode lebih rapi dan terpisah
- Mudah di-maintain

**Kekurangan:**
- Butuh file tambahan
- Bisa terjadi flash of unstyled content

### **3.3 Selector CSS**

**Tujuan:**
- Memahami cara memilih elemen HTML di CSS
- Mengenal berbagai jenis selector
- Mampu menggunakan selector dengan tepat

**Penjelasan:**

Selector digunakan untuk **memilih elemen** mana yang akan diberi style.

#### **A. Universal Selector (*)**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* Memilih SEMUA elemen di halaman */
```

#### **B. Element Selector (Tag)**

```css
p {
    color: red;
}
/* Memilih semua tag <p> */

h1, h2, h3 {
    font-family: Arial;
}
/* Memilih beberapa tag sekaligus */
```

#### **C. Class Selector (.)**

```css
.card {
    background: white;
    border: 1px solid gray;
}
/* Memilih elemen dengan class="card" */

.btn-primary {
    background: blue;
    color: white;
}
/* class="btn-primary" */
```

**HTML:**
```html
<div class="card">...</div>
<button class="btn-primary">Klik</button>
```

#### **D. ID Selector (#)**

```css
#header {
    font-size: 24px;
    background: black;
}
/* Memilih elemen dengan id="header" (HANYA SATU) */
```

**HTML:**
```html
<div id="header">Header</div>
```

#### **E. Attribute Selector**

```css
/* Memilih input dengan type="text" */
input[type="text"] {
    border: 1px solid blue;
}

/* Memilih link yang menuju ke google */
a[href*="google"] {
    color: green;
}

/* Memilih gambar dengan alt */
img[alt] {
    border: 2px solid red;
}
```

#### **F. Descendant Selector (Spasi)**

```css
/* Memilih semua link di dalam nav */
nav a {
    color: white;
    text-decoration: none;
}

/* Memilih paragraf di dalam card */
.card p {
    font-size: 14px;
}
```

#### **G. Child Selector (>)**

```css
/* Memilih langsung anak dari container */
.container > div {
    padding: 10px;
}

/* Hanya p langsung di dalam main */
main > p {
    margin: 20px;
}
```

#### **H. Adjacent Sibling Selector (+)**

```css
/* Memilih h2 yang langsung setelah h1 */
h1 + h2 {
    margin-top: 0;
}
```

#### **I. Pseudo-class Selector (:)**

```css
/* State/link yang belum dikunjungi */
a:link {
    color: blue;
}

/* Link yang sudah dikunjungi */
a:visited {
    color: purple;
}

/* Saat mouse di atas elemen */
button:hover {
    background: darkblue;
}

/* Saat elemen diklik */
button:active {
    transform: scale(0.98);
}

/* Input yang sedang fokus */
input:focus {
    outline: 2px solid blue;
}

/* Elemen pertama dalam parent */
li:first-child {
    font-weight: bold;
}

/* Elemen terakhir */
li:last-child {
    border-bottom: none;
}

/* Elemen ke-n */
li:nth-child(odd) {
    background: gray;
}
li:nth-child(even) {
    background: lightgray;
}
li:nth-child(3) {
    color: red;
}
```

#### **J. Pseudo-element Selector (::)**

```css
/* Baris pertama paragraf */
p::first-line {
    font-weight: bold;
}

/* Huruf pertama */
p::first-letter {
    font-size: 3em;
}

/* Sebelum elemen */
.card::before {
    content: "★";
    color: gold;
}

/* Sesudah elemen */
.card::after {
    content: "→";
    margin-left: 5px;
}
```

### **3.4 Property dan Value CSS**

**Tujuan:**
- Mengenal berbagai property CSS
- Memahami nilai yang bisa diberikan
- Mampu mengkombinasikan property

**Penjelasan:**

#### **A. Property untuk Warna**

```css
/* Nama warna */
color: red;
background: blue;

/* Hexadecimal (HEX) */
color: #ff0000;  /* merah */
color: #00ff00;  /* hijau */
color: #0000ff;  /* biru */
color: #667eea;  /* ungu kebiruan */

/* RGB (Red Green Blue) */
color: rgb(255, 0, 0);     /* merah */
color: rgba(255, 0, 0, 0.5); /* merah 50% transparan */

/* HSL (Hue Saturation Lightness) */
color: hsl(0, 100%, 50%);  /* merah */
```

#### **B. Property untuk Teks**

```css
/* Jenis huruf */
font-family: Arial, Helvetica, sans-serif;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-family: 'Times New Roman', serif;

/* Ukuran huruf */
font-size: 16px;     /* pixel */
font-size: 1.2em;    /* relatif */
font-size: 120%;     /* persen */
font-size: 1rem;     /* root em */

/* Ketebalan */
font-weight: normal;   /* 400 */
font-weight: bold;     /* 700 */
font-weight: 100;      /* tipis */
font-weight: 900;      /* tebal */

/* Gaya */
font-style: normal;
font-style: italic;
font-style: oblique;

/* Rata teks */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Dekorasi */
text-decoration: none;
text-decoration: underline;
text-decoration: line-through;
text-decoration: overline;

/* Transformasi */
text-transform: uppercase;
text-transform: lowercase;
text-transform: capitalize;

/* Spasi */
letter-spacing: 1px;        /* spasi antar huruf */
word-spacing: 5px;          /* spasi antar kata */
line-height: 1.5;           /* tinggi baris */
text-indent: 20px;          /* indentasi */
```

#### **C. Property untuk Background**

```css
/* Warna latar */
background-color: blue;

/* Gambar latar */
background-image: url('gambar.jpg');
background-image: linear-gradient(to right, red, blue);
background-image: radial-gradient(circle, red, yellow);

/* Ukuran background */
background-size: cover;      /* memenuhi area */
background-size: contain;    /* sesuai ukuran */
background-size: 100px 100px; /* ukuran tetap */

/* Posisi background */
background-position: center;
background-position: top right;
background-position: 20px 30px;

/* Pengulangan */
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;

/* Shorthand (singkatan) */
background: blue url('gambar.jpg') no-repeat center/cover;
```

#### **D. Property untuk Box Model**

```css
/* Margin (luar) */
margin: 10px;                    /* semua sisi */
margin: 10px 20px;               /* atas-bawah | kiri-kanan */
margin: 10px 20px 30px;          /* atas | kiri-kanan | bawah */
margin: 10px 20px 30px 40px;     /* atas | kanan | bawah | kiri */

margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Padding (dalam) */
padding: 10px;                    /* semua sisi */
padding: 10px 20px;               /* atas-bawah | kiri-kanan */

/* Border */
border: 1px solid black;
border: 2px dashed red;
border: 3px dotted blue;

border-top: 2px solid green;
border-bottom: 2px solid green;

border-radius: 5px;               /* sudut melengkung */
border-radius: 50%;                /* lingkaran */
border-radius: 10px 20px;          /* kiri-atas kanan-bawah | kanan-atas kiri-bawah */

/* Width & Height */
width: 100px;
width: 50%;
height: 200px;
max-width: 500px;
min-height: 100px;
```

#### **E. Property untuk Layout**

```css
/* Display */
display: block;      /* memenuhi lebar */
display: inline;     /* hanya selebar konten */
display: inline-block; /* gabungan */
display: none;       /* hilang */
display: flex;       /* flexbox */
display: grid;       /* grid */

/* Position */
position: static;    /* default */
position: relative;  /* relatif terhadap diri sendiri */
position: absolute;  /* relatif terhadap parent terdekat */
position: fixed;     /* relatif terhadap viewport */
position: sticky;    /* gabungan relative dan fixed */

/* Top/Right/Bottom/Left (untuk position non-static) */
top: 10px;
right: 20px;
bottom: 30px;
left: 40px;

/* Z-index (urutan tumpukan) */
z-index: 10;         /* semakin besar semakin atas */
z-index: -1;         /* di belakang */

/* Overflow */
overflow: visible;   /* tampil semua */
overflow: hidden;    /* potong */
overflow: scroll;    /* scrollbar */
overflow: auto;      /* otomatis */
```

### **3.5 Box Model**

**Tujuan:**
- Memahami konsep box model
- Mengetahui komponen-komponen box model
- Mampu menghitung ukuran total elemen

**Penjelasan:**

Setiap elemen HTML adalah **kotak (box)** yang terdiri dari:

```
┌─────────────────────────────────────────────────────┐
│                      MARGIN                          │
│  ┌───────────────────────────────────────────────┐  │
│  │                   BORDER                        │  │
│  │  ┌─────────────────────────────────────────┐  │  │
│  │  │                 PADDING                   │  │  │
│  │  │  ┌───────────────────────────────────┐  │  │  │
│  │  │  │                                   │  │  │  │
│  │  │  │            CONTENT                 │  │  │  │
│  │  │  │                                   │  │  │  │
│  │  │  └───────────────────────────────────┘  │  │  │
│  │  │                                           │  │  │
│  │  └─────────────────────────────────────────┘  │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### **A. Komponen Box Model**

| **Komponen** | **Fungsi** | **Contoh** |
|--------------|------------|------------|
| **Content** | Area isi (teks/gambar) | `width: 200px` |
| **Padding** | Ruang dalam (antara konten dan border) | `padding: 20px` |
| **Border** | Garis tepi | `border: 2px solid black` |
| **Margin** | Ruang luar (antara elemen) | `margin: 15px` |

#### **B. Perhitungan Box Model**

**Standar Box Model (default):**
```css
div {
    width: 200px;        /* lebar konten */
    padding: 20px;       /* tambah 40px (kiri+kanan) */
    border: 2px solid;   /* tambah 4px */
    margin: 10px;        /* tambah 20px (luar) */
    
    /* Total lebar sebenarnya = 200 + 40 + 4 + 20 = 264px */
}
```

**Alternatif Box Model (border-box):**
```css
* {
    box-sizing: border-box;
}

div {
    width: 200px;        /* total lebar termasuk padding dan border */
    padding: 20px;
    border: 2px solid;
    
    /* Konten akan mengecil agar total tetap 200px */
}
```

### **3.6 Layout dengan Flexbox**

**Tujuan:**
- Memahami konsep flexbox
- Mengenal properti flexbox
- Mampu membuat layout dengan flexbox

**Penjelasan:**

Flexbox adalah model layout 1 dimensi (baris ATAU kolom).

```
┌─────────────────────────────────────────────────────┐
│  FLEX CONTAINER                                      │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐           │
│  │Item 1│  │Item 2│  │Item 3│  │Item 4│           │
│  └──────┘  └──────┘  └──────┘  └──────┘           │
│  main axis (baris) →                                │
│  cross axis (kolom) ↓                               │
└─────────────────────────────────────────────────────┘
```

#### **A. Properti untuk Container**

```css
.container {
    /* Aktifkan flexbox */
    display: flex;
    
    /* Arah utama */
    flex-direction: row;           /* kiri ke kanan (default) */
    flex-direction: row-reverse;   /* kanan ke kiri */
    flex-direction: column;        /* atas ke bawah */
    flex-direction: column-reverse; /* bawah ke atas */
    
    /* Membungkus item */
    flex-wrap: nowrap;      /* semua dalam 1 baris (default) */
    flex-wrap: wrap;        /* bungkus ke baris baru */
    flex-wrap: wrap-reverse; /* bungkus ke atas */
    
    /* Shorthand */
    flex-flow: row wrap;    /* gabungan direction dan wrap */
    
    /* Perataan horizontal (main axis) */
    justify-content: flex-start;    /* kiri (default) */
    justify-content: flex-end;      /* kanan */
    justify-content: center;        /* tengah */
    justify-content: space-between; /* rata kiri-kanan */
    justify-content: space-around;  /* spasi di sekitar */
    justify-content: space-evenly;  /* spasi sama rata */
    
    /* Perataan vertikal (cross axis) */
    align-items: stretch;     /* memenuhi tinggi (default) */
    align-items: flex-start;  /* atas */
    align-items: flex-end;    /* bawah */
    align-items: center;      /* tengah */
    align-items: baseline;    /* garis dasar teks */
    
    /* Perataan multi-baris */
    align-content: flex-start;    /* atas */
    align-content: flex-end;      /* bawah */
    align-content: center;        /* tengah */
    align-content: space-between; /* rata atas-bawah */
    align-content: space-around;  /* spasi */
    
    /* Jarak antar item */
    gap: 10px;              /* baris dan kolom */
    row-gap: 10px;          /* jarak antar baris */
    column-gap: 20px;       /* jarak antar kolom */
}
```

#### **B. Properti untuk Item**

```css
.item {
    /* Urutan item */
    order: 0;               /* default 0, semakin kecil semakin awal */
    
    /* Kemampuan membesar */
    flex-grow: 0;           /* default 0 (tidak membesar) */
    flex-grow: 1;           /* membesar jika ada ruang */
    
    /* Kemampuan mengecil */
    flex-shrink: 1;         /* default 1 (bisa mengecil) */
    
    /* Ukuran dasar */
    flex-basis: auto;       /* default sesuai konten */
    flex-basis: 200px;      /* ukuran dasar 200px */
    
    /* Shorthand */
    flex: 1 0 200px;        /* grow shrink basis */
    
    /* Perataan diri sendiri */
    align-self: auto;       /* ikuti container */
    align-self: flex-start;
    align-self: flex-end;
    align-self: center;
}
```

#### **C. Contoh Praktis Flexbox**

```css
/* Navigasi */
.nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    background: #333;
    padding: 15px;
}

.nav a {
    color: white;
    text-decoration: none;
}

/* Card grid */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 0 300px;  /* minimal 300px, bisa membesar */
    background: white;
    padding: 20px;
    border-radius: 10px;
}

/* Header dengan logo dan menu */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.menu {
    display: flex;
    gap: 15px;
}

/* Profile card */
.profile {
    display: flex;
    align-items: center;
    gap: 20px;
}

.profile img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.profile-info {
    flex: 1;
}
```

### **3.7 Layout dengan Grid**

**Tujuan:**
- Memahami konsep grid
- Mengenal properti grid
- Mampu membuat layout dengan grid

**Penjelasan:**

Grid adalah model layout 2 dimensi (baris DAN kolom).

```
┌─────────────────────────────────────────────────────┐
│  GRID CONTAINER                                      │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┐      │
│  │  1   │  2   │  3   │  4   │  5   │  6   │      │
│  ├──────┼──────┼──────┼──────┼──────┼──────┤      │
│  │  7   │  8   │  9   │  10  │  11  │  12  │      │
│  ├──────┼──────┼──────┼──────┼──────┼──────┤      │
│  │  13  │  14  │  15  │  16  │  17  │  18  │      │
│  └──────┴──────┴──────┴──────┴──────┴──────┘      │
└─────────────────────────────────────────────────────┘
```

#### **A. Properti untuk Container**

```css
.container {
    /* Aktifkan grid */
    display: grid;
    
    /* Definisi kolom */
    grid-template-columns: 100px 200px 100px;  /* 3 kolom dengan ukuran */
    grid-template-columns: 1fr 2fr 1fr;        /* 3 kolom dengan fraction */
    grid-template-columns: repeat(3, 1fr);     /* 3 kolom sama lebar */
    grid-template-columns: 200px 1fr;          /* 200px dan sisanya */
    grid-template-columns: minmax(200px, 1fr); /* minimal 200px, maksimal 1fr */
    
    /* Definisi baris */
    grid-template-rows: 100px 200px;            /* 2 baris dengan ukuran */
    grid-template-rows: repeat(2, 1fr);         /* 2 baris sama tinggi */
    
    /* Gap (jarak) */
    gap: 20px;              /* jarak baris dan kolom */
    row-gap: 10px;          /* jarak antar baris */
    column-gap: 20px;       /* jarak antar kolom */
    
    /* Perataan item dalam grid */
    justify-items: stretch;   /* horizontal: stretch (default) */
    justify-items: start;     /* kiri */
    justify-items: end;       /* kanan */
    justify-items: center;    /* tengah */
    
    align-items: stretch;     /* vertikal: stretch (default) */
    align-items: start;       /* atas */
    align-items: end;         /* bawah */
    align-items: center;      /* tengah */
    
    /* Perataan seluruh grid dalam container */
    justify-content: start;   /* horizontal */
    align-content: start;     /* vertikal */
    
    /* Area template (untuk layout kompleks) */
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
}
```

#### **B. Properti untuk Item**

```css
.item {
    /* Posisi kolom */
    grid-column-start: 1;
    grid-column-end: 3;        /* dari kolom 1 sampai kolom 3 */
    
    /* Shorthand */
    grid-column: 1 / 3;        /* dari kolom 1 sampai 3 */
    grid-column: 1 / -1;       /* dari awal sampai akhir */
    grid-column: 1 / span 2;   /* mulai kolom 1, panjang 2 */
    
    /* Posisi baris */
    grid-row: 1 / 3;           /* dari baris 1 sampai 3 */
    
    /* Shorthand lengkap */
    grid-area: 1 / 1 / 3 / 3;  /* row-start / col-start / row-end / col-end */
    
    /* Area template (jika pakai grid-template-areas) */
    grid-area: header;         /* taruh di area header */
    
    /* Perataan diri sendiri */
    justify-self: stretch;     /* horizontal */
    align-self: stretch;       /* vertikal */
}
```

#### **C. Contoh Praktis Grid**

```css
/* Gallery */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.gallery-item {
    height: 200px;
    background-size: cover;
}

/* Dashboard layout */
.dashboard {
    display: grid;
    grid-template-columns: 250px 1fr 300px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header header"
        "sidebar main right"
        "footer footer footer";
    min-height: 100vh;
}

.header { grid-area: header; background: #333; color: white; }
.sidebar { grid-area: sidebar; background: #f0f0f0; }
.main { grid-area: main; background: white; }
.right { grid-area: right; background: #f0f0f0; }
.footer { grid-area: footer; background: #333; color: white; }

/* Pricing cards */
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
}

.pricing-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Blog layout */
.blog {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
}

.posts {
    display: grid;
    gap: 30px;
}

.sidebar {
    background: #f9f9f9;
    padding: 20px;
}
```

### **3.8 Typography dan Warna**

**Tujuan:**
- Memahami teori warna dalam web design
- Mengenal jenis-jenis font
- Mampu membuat kombinasi warna yang baik

**Penjelasan:**

#### **A. Teori Warna**

```css
/* Warna Primer */
--primary: #667eea;      /* biru keunguan */
--secondary: #764ba2;    /* ungu */
--accent: #ff6b6b;       /* merah */

/* Warna Netral */
--dark: #333333;         /* gelap */
--gray: #666666;         /* abu-abu */
--light: #f8f9fa;        /* terang */
--white: #ffffff;        /* putih */

/* Warna Status */
--success: #4caf50;      /* hijau - sukses */
--warning: #ff9800;      /* orange - peringatan */
--error: #f44336;        /* merah - error */
--info: #2196f3;         /* biru - informasi */

/* Penggunaan dalam CSS */
.button-primary {
    background: var(--primary);
    color: white;
}

.button-success {
    background: var(--success);
}
```

#### **B. Kombinasi Warna**

```css
/* Monokromatik (satu warna dengan variasi) */
--blue-100: #e6f0ff;
--blue-300: #99b8ff;
--blue-500: #667eea;
--blue-700: #334bd6;
--blue-900: #0019a6;

/* Analogous (warna bersebelahan) */
--red: #ff6b6b;
--orange: #ffa06b;
--yellow: #ffd56b;

/* Complementary (warna berlawanan) */
--primary: #667eea;
--complement: #ea9b66;
```

#### **C. Tipografi**

```css
/* System Font Stack */
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                 Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
                 sans-serif;
}

/* Google Fonts (External) */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}

/* Font Weight Scale */
--thin: 100;
--light: 300;
--regular: 400;
--medium: 500;
--semibold: 600;
--bold: 700;
--extrabold: 800;
--black: 900;

/* Font Size Scale */
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */

/* Line Height */
--none: 1;
--tight: 1.25;
--normal: 1.5;
--relaxed: 1.75;
--loose: 2;
```

#### **D. Contoh Kombinasi**

```css
/* Dark Mode */
.dark-mode {
    --bg-primary: #1a1a1a;
    --bg-secondary: #2d2d2d;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --accent: #667eea;
}

/* Light Mode */
.light-mode {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #333333;
    --text-secondary: #666666;
    --accent: #667eea;
}

/* Typography Scale */
h1 {
    font-size: var(--text-5xl);
    font-weight: var(--bold);
    line-height: var(--tight);
    color: var(--text-primary);
}

h2 {
    font-size: var(--text-4xl);
    font-weight: var(--semibold);
    line-height: var(--tight);
}

p {
    font-size: var(--text-base);
    line-height: var(--relaxed);
    color: var(--text-secondary);
}
```

### **3.9 Animasi dan Transition**

**Tujuan:**
- Memahami konsep animasi CSS
- Mengenal transition dan keyframes
- Mampu membuat animasi sederhana

**Penjelasan:**

#### **A. Transition (Perubahan Halus)**

```css
.element {
    /* Properti yang ditransisikan */
    transition-property: all;           /* semua properti */
    transition-property: background;    /* hanya background */
    transition-property: transform, opacity; /* beberapa properti */
    
    /* Durasi */
    transition-duration: 0.3s;          /* 300 milidetik */
    
    /* Timing function (kecepatan) */
    transition-timing-function: ease;           /* lambat-cepat-lambat */
    transition-timing-function: linear;         /* konstan */
    transition-timing-function: ease-in;        /* lambat di awal */
    transition-timing-function: ease-out;       /* lambat di akhir */
    transition-timing-function: ease-in-out;    /* lambat di awal & akhir */
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* custom */
    
    /* Delay */
    transition-delay: 0.1s;             /* tunda 0.1 detik */
    
    /* Shorthand */
    transition: all 0.3s ease 0.1s;
    transition: background 0.3s, transform 0.5s;
}

/* Contoh penggunaan */
.button {
    background: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.button:hover {
    background: darkblue;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.card {
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

#### **B. Keyframes Animation (Animasi Kompleks)**

```css
/* Definisi animasi */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    50% {
        transform: translateX(10%);
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* Penggunaan animasi */
.element {
    /* Nama animasi */
    animation-name: fadeIn;
    
    /* Durasi */
    animation-duration: 1s;
    
    /* Timing function */
    animation-timing-function: ease-out;
    
    /* Delay */
    animation-delay: 0.5s;
    
    /* Iteration count (berapa kali) */
    animation-iteration-count: 1;        /* sekali */
    animation-iteration-count: infinite;  /* terus menerus */
    
    /* Direction */
    animation-direction: normal;          /* normal */
    animation-direction: reverse;         /* kebalikan */
    animation-direction: alternate;       /* bolak-balik */
    
    /* Fill mode (keadaan sebelum/sesudah) */
    animation-fill-mode: none;            /* default */
    animation-fill-mode: forwards;        /* tetap di akhir */
    animation-fill-mode: backwards;       /* tetap di awal */
    
    /* Shorthand */
    animation: fadeIn 1s ease-out 0.5s forwards;
}
```

#### **C. Transform (Perubahan Bentuk)**

```css
.element {
    /* Scale (perbesaran) */
    transform: scale(1.5);        /* perbesar 1.5x */
    transform: scaleX(2);         /* melebar 2x */
    transform: scaleY(0.5);       /* memendek 0.5x */
    
    /* Translate (perpindahan) */
    transform: translateX(50px);   /* geser kanan 50px */
    transform: translateY(-20px);  /* geser atas 20px */
    transform: translate(50px, -20px); /* geser x dan y */
    
    /* Rotate (perputaran) */
    transform: rotate(45deg);      /* putar 45 derajat */
    transform: rotateX(180deg);    /* putar sumbu X */
    transform: rotateY(180deg);    /* putar sumbu Y */
    
    /* Skew (miring) */
    transform: skew(10deg);        /* miring 10 derajat */
    transform: skewX(10deg);
    transform: skewY(10deg);
    
    /* Multiple transforms */
    transform: translateX(50px) rotate(45deg) scale(1.2);
}
```

#### **D. Contoh Animasi Praktis**

```css
/* Hover effect */
.button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
}

.button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.button:hover::after {
    width: 300px;
    height: 300px;
}

/* Loading spinner */
.spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Skeleton loading */
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Page transition */
.page {
    animation: pageEnter 0.5s ease-out;
}

@keyframes pageEnter {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### **3.10 Responsive Design**

**Tujuan:**
- Memahami konsep responsive design
- Mengenal media queries
- Mampu membuat website yang responsif

**Penjelasan:**

Responsive design adalah teknik membuat website bisa menyesuaikan tampilan di berbagai ukuran layar (desktop, tablet, HP).

```
LAYAR DESKTOP (> 1024px)
┌─────────────────────────────────────┐
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐       │
│  │    │ │    │ │    │ │    │       │
│  └────┘ └────┘ └────┘ └────┘       │
│                                     │
└─────────────────────────────────────┘

LAYAR TABLET (768px - 1024px)
┌─────────────────────────┐
│  ┌────┐ ┌────┐ ┌────┐  │
│  │    │ │    │ │    │  │
│  └────┘ └────┘ └────┘  │
│                         │
└─────────────────────────┘

LAYAR HP (< 768px)
┌─────────────┐
│  ┌────┐     │
│  │    │     │
│  └────┘     │
│  ┌────┐     │
│  │    │     │
│  └────┘     │
└─────────────┘
```

#### **A. Media Queries**

```css
/* Mobile First (recommended) */
/* Default untuk HP */
.container {
    width: 100%;
    padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
        padding: 20px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
        padding: 40px;
    }
}

/* Desktop besar */
@media (min-width: 1440px) {
    .container {
        width: 1400px;
    }
}

/* Orientasi */
@media (orientation: landscape) {
    /* Layar melebar */
}

@media (orientation: portrait) {
    /* Layar memanjang */
}

/* Fitur tertentu */
@media (hover: hover) {
    /* Device yang mendukung hover (mouse) */
    .button:hover {
        background: darkblue;
    }
}

@media (prefers-color-scheme: dark) {
    /* Dark mode */
    body {
        background: #1a1a1a;
        color: white;
    }
}
```

#### **B. Responsive Images**

```css
/* Responsive image */
img {
    max-width: 100%;
    height: auto;
}

/* Background responsive */
.hero {
    background-image: url('small.jpg');
}

@media (min-width: 768px) {
    .hero {
        background-image: url('medium.jpg');
    }
}

@media (min-width: 1024px) {
    .hero {
        background-image: url('large.jpg');
    }
}
```

#### **C. Responsive Typography**

```css
html {
    font-size: 14px;
}

@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
}

@media (min-width: 1024px) {
    html {
        font-size: 18px;
    }
}

/* Menggunakan viewport units */
h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    /* minimal 2rem, ideal 5% viewport, maksimal 4rem */
}
```

#### **D. Responsive Layout**

```css
/* Grid responsif */
.grid {
    display: grid;
    grid-template-columns: 1fr;  /* 1 kolom di HP */
    gap: 20px;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);  /* 2 kolom di tablet */
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);  /* 3 kolom di desktop */
    }
}

/* Flexbox responsif */
.flex-container {
    display: flex;
    flex-direction: column;  /* vertikal di HP */
    gap: 20px;
}

@media (min-width: 768px) {
    .flex-container {
        flex-direction: row;  /* horizontal di tablet */
        flex-wrap: wrap;
    }
    
    .flex-item {
        flex: 1 0 calc(50% - 20px);  /* 2 item per baris */
    }
}

@media (min-width: 1024px) {
    .flex-item {
        flex: 1 0 calc(33.333% - 20px);  /* 3 item per baris */
    }
}
```

#### **E. Hide/Show Elements**

```css
/* Sembunyikan di HP */
.desktop-only {
    display: none;
}

@media (min-width: 768px) {
    .desktop-only {
        display: block;
    }
}

/* Sembunyikan di desktop */
.mobile-only {
    display: block;
}

@media (min-width: 768px) {
    .mobile-only {
        display: none;
    }
}

/* Menu hamburger */
.menu-toggle {
    display: block;
}

.menu {
    display: none;
}

@media (min-width: 768px) {
    .menu-toggle {
        display: none;
    }
    
    .menu {
        display: flex;
    }
}
```

#### **F. Contoh Praktis Responsive**

```css
/* Navigation */
.nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px;
}

@media (min-width: 768px) {
    .nav {
        flex-direction: row;
        justify-content: center;
        gap: 30px;
    }
}

/* Cards */
.card {
    width: 100%;
    margin-bottom: 20px;
}

@media (min-width: 768px) {
    .card {
        width: calc(50% - 10px);
        margin: 0 5px 20px;
    }
}

@media (min-width: 1024px) {
    .card {
        width: calc(33.333% - 14px);
    }
}

/* Form */
.form-group {
    width: 100%;
}

@media (min-width: 768px) {
    .form-row {
        display: flex;
        gap: 20px;
    }
    
    .form-group {
        flex: 1;
    }
}

/* Footer */
footer {
    text-align: center;
    padding: 20px;
}

@media (min-width: 768px) {
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
}
```

### **3.11 Studi Kasus: Styling Portofolio**

**Tujuan:**
- Menerapkan semua konsep CSS dalam proyek nyata
- Membuat desain yang konsisten dan menarik
- Mengimplementasikan responsive design

**Kode CSS Lengkap untuk Portofolio:**

```css
/* ========== RESET & VARIABLES ========== */
:root {
    /* Warna */
    --primary: #667eea;
    --primary-dark: #5a67d8;
    --secondary: #764ba2;
    --accent: #f687b3;
    --dark: #2d3748;
    --gray: #718096;
    --light: #f7fafc;
    --white: #ffffff;
    --success: #48bb78;
    --error: #f56565;
    
    /* Tipografi */
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-serif: Georgia, 'Times New Roman', serif;
    --font-mono: Monaco, Consolas, monospace;
    
    /* Ukuran */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
    
    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
    
    /* Shadow */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 40px rgba(0,0,0,0.15);
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
    
    /* Transition */
    --transition-fast: 150ms ease;
    --transition-base: 300ms ease;
    --transition-slow: 500ms ease;
}

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Base styles */
html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-sans);
    color: var(--dark);
    line-height: 1.6;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    min-height: 100vh;
    padding: var(--space-4);
    opacity: 1;
    transition: opacity 0.4s ease;
}

body.fade-out {
    opacity: 0;
}

/* ========== TYPOGRAPHY ========== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--space-4);
    color: var(--dark);
}

h1 {
    font-size: var(--text-4xl);
}

h2 {
    font-size: var(--text-3xl);
    border-left: 5px solid var(--primary);
    padding-left: var(--space-4);
}

h3 {
    font-size: var(--text-xl);
}

p {
    margin-bottom: var(--space-4);
    color: var(--gray);
}

a {
    color: var(--primary);
    text-decoration: none;
    transition: color var(--transition-base);
}

a:hover {
    color: var(--primary-dark);
}

/* ========== LAYOUT ========== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    background: var(--white);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    overflow: hidden;
    animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Header */
header {
    text-align: center;
    padding: var(--space-12) var(--space-8) var(--space-8);
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--white);
}

header h1 {
    color: var(--white);
    margin-bottom: var(--space-2);
    font-size: var(--text-5xl);
}

.subtitle {
    font-size: var(--text-lg);
    opacity: 0.9;
    color: var(--white);
}

/* ========== NAVIGATION ========== */
nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-2);
    padding: var(--space-4);
    background: var(--light);
    border-bottom: 1px solid #e2e8f0;
}

nav a {
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-full);
    font-weight: 600;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
}

nav a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: var(--primary);
    transition: width var(--transition-base);
}

nav a:hover::before {
    width: 70%;
}

nav a:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-2px);
}

nav a.active {
    background: var(--primary);
    color: var(--white);
    box-shadow: var(--shadow-md);
}

nav a.active::before {
    display: none;
}

/* ========== SECTIONS ========== */
section {
    padding: var(--space-8);
}

/* Cards */
.card {
    background: var(--light);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-6);
    border-left: 5px solid var(--primary);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.card:hover {
    transform: translateX(5px) translateY(-5px);
    box-shadow: var(--shadow-lg);
}

/* ========== BUTTONS ========== */
.btn {
    display: inline-block;
    padding: var(--space-3) var(--space-6);
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--white);
    border: none;
    border-radius: var(--radius-full);
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-base);
    text-align: center;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    color: var(--white);
}

.btn-small {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
}

/* ========== FORMS ========== */
.form-group {
    margin-bottom: var(--space-4);
}

.form-group label {
    display: block;
    margin-bottom: var(--space-2);
    font-weight: 600;
    color: var(--dark);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: var(--space-3);
    border: 2px solid #e2e8f0;
    border-radius: var(--radius-md);
    font-family: inherit;
    font-size: var(--text-base);
    transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

/* ========== PORTFOLIO GRID ========== */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6);
    margin-top: var(--space-6);
}

.portfolio-item {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.portfolio-item:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: var(--shadow-xl);
}

.portfolio-image {
    height: 200px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 4rem;
    transition: transform var(--transition-base);
}

.portfolio-item:hover .portfolio-image {
    transform: scale(1.1);
}

.portfolio-info {
    padding: var(--space-6);
}

/* ========== SKILL TAGS ========== */
.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin: var(--space-4) 0;
}

.skill-tag {
    padding: var(--space-2) var(--space-4);
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: var(--white);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 500;
    transition: all var(--transition-base);
}

.skill-tag:hover {
    transform: scale(1.1) rotate(2deg);
    box-shadow: var(--shadow-md);
}

/* ========== TIMELINE ========== */
.timeline-item {
    position: relative;
    padding-left: var(--space-6);
    margin-bottom: var(--space-6);
    border-left: 3px solid var(--primary);
}

.timeline-item::before {
    content: "●";
    position: absolute;
    left: -10px;
    top: 0;
    color: var(--primary);
    font-size: 1.5rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
}

.timeline-date {
    color: var(--primary);
    font-weight: 600;
    font-size: var(--text-sm);
    margin-bottom: var(--space-2);
}

/* ========== SOCIAL LINKS ========== */
.social-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-2);
    margin: var(--space-6) 0;
}

.social-links a {
    padding: var(--space-2) var(--space-4);
    background: var(--light);
    color: var(--primary);
    border-radius: var(--radius-full);
    transition: all var(--transition-base);
}

.social-links a:hover {
    background: var(--primary);
    color: var(--white);
    transform: translateY(-3px);
}

/* ========== FOOTER ========== */
footer {
    text-align: center;
    padding: var(--space-8);
    background: var(--light);
    border-top: 1px solid #e2e8f0;
    color: var(--gray);
}

/* ========== BACK TO TOP ========== */
.back-to-top {
    position: fixed;
    bottom: var(--space-6);
    right: var(--space-6);
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-base);
    z-index: 99;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.back-to-top:hover {
    background: var(--secondary);
    transform: scale(1.1) rotate(360deg);
}

.back-to-top.show {
    display: flex;
}

/* ========== NOTIFICATIONS ========== */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 350px;
    padding: var(--space-4);
    background: var(--white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    z-index: 9999;
    animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.notification-success { border-left: 4px solid var(--success); }
.notification-error { border-left: 4px solid var(--error); }
.notification-info { border-left: 4px solid var(--primary); }

/* ========== LOADING SPINNER ========== */
body.fade-out::after {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    border: 6px solid #f3f3f3;
    border-top: 6px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 9999;
}

@keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* ========== RESPONSIVE DESIGN ========== */
/* Tablet */
@media (max-width: 768px) {
    :root {
        --text-4xl: 2rem;
        --text-5xl: 2.5rem;
    }
    
    .container {
        border-radius: var(--radius-lg);
    }
    
    header {
        padding: var(--space-8) var(--space-4);
    }
    
    section {
        padding: var(--space-6);
    }
    
    nav {
        flex-direction: column;
        align-items: stretch;
        border-radius: 0;
    }
    
    nav a {
        text-align: center;
    }
    
    .portfolio-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--space-4);
    }
}

/* Mobile */
@media (max-width: 480px) {
    :root {
        --text-3xl: 1.75rem;
        --text-4xl: 1.875rem;
        --space-8: 1.5rem;
    }
    
    .container {
        padding: 0;
    }
    
    .card {
        padding: var(--space-4);
    }
    
    .social-links {
        flex-direction: column;
    }
    
    .social-links a {
        width: 100%;
        text-align: center;
    }
    
    .back-to-top {
        bottom: var(--space-4);
        right: var(--space-4);
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
    }
}

/* Print styles */
@media print {
    body {
        background: white;
        padding: 0;
    }
    
    .container {
        box-shadow: none;
    }
    
    nav, .back-to-top, .btn {
        display: none;
    }
}
```

### **3.12 Rangkuman Bab 3**

**Poin-Poin Penting:**

1. **CSS** adalah bahasa untuk mengatur tampilan website
2. **Selector** digunakan untuk memilih elemen yang akan di-style
3. **Box Model** terdiri dari content, padding, border, margin
4. **Flexbox** untuk layout 1 dimensi (baris/kolom)
5. **Grid** untuk layout 2 dimensi (baris dan kolom)
6. **Animasi** bisa dibuat dengan transition dan keyframes
7. **Responsive design** menggunakan media queries
8. **CSS Variables** memudahkan pengelolaan warna dan ukuran

**Tujuan yang Tercapai:**
- ✅ Memahami konsep dasar CSS
- ✅ Menguasai berbagai selector CSS
- ✅ Mampu membuat layout dengan flexbox dan grid
- ✅ Membuat animasi dan transisi
- ✅ Mendesain website yang responsif
- ✅ Menerapkan CSS dalam proyek nyata

---
## **BAB 4: JAVASCRIPT DASAR**

### **4.1 Apa itu JavaScript? Tujuan dan Fungsi**

**Tujuan Pembelajaran:**
- Memahami definisi dan konsep JavaScript
- Mengetahui peran JavaScript dalam website
- Membedakan JavaScript dengan HTML dan CSS

**Penjelasan Mendalam:**

**JavaScript** adalah bahasa pemrograman yang membuat website menjadi **interaktif dan dinamis**.

**Analogi Sederhana:**
```
┌─────────────────────────────────────────────┐
│  WEBSITE = MANUSIA                           │
├─────────────────────────────────────────────┤
│  HTML = Kerangka Tulang                      │
│  • Struktur tubuh                              │
│  • Organ-organ                                 │
│  • Bentuk dasar                                │
├─────────────────────────────────────────────┤
│  CSS = Pakaian dan Riasan                     │
│  • Warna baju                                  │
│  • Gaya rambut                                 │
│  • Aksesoris                                   │
├─────────────────────────────────────────────┤
│  JAVASCRIPT = Otak dan Sistem Saraf           │
│  • Bergerak                                    │
│  • Berpikir                                    │
│  • Merespon sentuhan                           │
│  • Bereaksi terhadap lingkungan                │
└─────────────────────────────────────────────┘
```

**Fungsi Utama JavaScript:**

| **Fungsi** | **Penjelasan** | **Contoh** |
|------------|----------------|------------|
| **Interaktivitas** | Merespon aksi user | Klik, hover, scroll |
| **Manipulasi DOM** | Mengubah konten HTML | Tambah/hapus elemen |
| **Validasi Form** | Memeriksa input user | Email valid, password match |
| **Animasi** | Menggerakkan elemen | Slide, fade, drag |
| **AJAX/Fetch** | Mengambil data dari server | Load konten tanpa reload |
| **Penyimpanan** | Menyimpan data di browser | Local storage, cookies |
| **Perhitungan** | Logika dan matematika | Kalkulator, filter |

**Karakteristik JavaScript:**
- ✅ Bahasa pemrograman (ada logika, loop, kondisi)
- ✅ Client-side (jalan di browser user)
- ✅ Event-driven (bereaksi terhadap kejadian)
- ✅ Dynamic typing (tipe data bisa berubah)
- ✅ Interpreted (tidak perlu dikompilasi)

### **4.2 Cara Menambahkan JavaScript**

**Tujuan:**
- Memahami cara menambahkan JavaScript ke HTML
- Mengetahui posisi terbaik untuk script
- Membedakan internal dan external JS

**Penjelasan:**

#### **A. Internal JavaScript (di dalam `<script>`)**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JS</title>
    <script>
        // Kode JavaScript di sini
        console.log("Hello dari head");
        
        function sapa() {
            alert("Halo!");
        }
    </script>
</head>
<body>
    <button onclick="sapa()">Klik Saya</button>
    
    <script>
        // Bisa juga ditaruh di akhir body
        console.log("Hello dari body");
    </script>
</body>
</html>
```

**Kelebihan:**
- Cepat untuk testing
- Cocok untuk halaman kecil

**Kekurangan:**
- Tidak bisa dipakai di halaman lain
- Membuat HTML besar dan susah dibaca

#### **B. External JavaScript (File Terpisah) - TERBAIK**

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>External JS</title>
</head>
<body>
    <button id="myButton">Klik Saya</button>
    
    <!-- Script ditaruh di akhir body -->
    <script src="js/script.js"></script>
</body>
</html>
```

**JavaScript (script.js):**
```javascript
// js/script.js
console.log("File JavaScript terpisah");

document.getElementById('myButton').addEventListener('click', function() {
    alert('Tombol diklik!');
});
```

**Kelebihan:**
- Satu file untuk banyak halaman
- Kode lebih rapi dan terpisah
- Browser bisa cache file
- Mudah di-maintain

**Kekurangan:**
- Butuh request tambahan ke server
- Perhatikan urutan loading

#### **C. Inline JavaScript (Langsung di Tag)**

```html
<button onclick="alert('Hello!')">Klik</button>

<a href="javascript:void(0)" onclick="doSomething()">Link</a>

<div onmouseover="this.style.backgroundColor='red'">
    Hover saya
</div>
```

**Kelebihan:**
- Sangat cepat untuk event sederhana

**Kekurangan:**
- Campur aduk dengan HTML
- Sulit dibaca dan di-maintain
- Tidak disarankan untuk proyek besar

#### **D. Posisi Script yang Tepat**

```html
<!-- TIDAK DISARANKAN: Script di head -->
<head>
    <script src="js/script.js"></script>
    <!-- Script akan dijalankan sebelum HTML selesai dimuat -->
    <!-- Bisa error karena elemen HTML belum ada -->
</head>

<!-- DISARANKAN: Script di akhir body -->
<body>
    <!-- Semua konten HTML di sini -->
    
    <script src="js/script.js"></script>
    <!-- HTML sudah siap, script aman dijalankan -->
</body>

<!-- ALTERNATIF: Pakai defer -->
<head>
    <script src="js/script.js" defer></script>
    <!-- defer: download di background, jalankan setelah HTML selesai -->
</head>

<!-- ALTERNATIF: Pakai async -->
<head>
    <script src="js/script.js" async></script>
    <!-- async: download dan jalankan secepatnya, tidak urut -->
</head>
```

### **4.3 Variabel dan Tipe Data**

**Tujuan:**
- Memahami konsep variabel
- Mengenal tipe data di JavaScript
- Membedakan `let`, `const`, dan `var`

**Penjelasan:**

Variabel adalah **tempat menyimpan data** di memori.

#### **A. Deklarasi Variabel**

```javascript
// CARA LAMA (hindari)
var nama = "Afif";          // function-scoped, bisa di-redeclare

// CARA BARU (gunakan)
let umur = 25;              // block-scoped, bisa diubah
const PI = 3.14;            // block-scoped, TIDAK bisa diubah

// Contoh perbedaan
let bisaDiubah = 10;
bisaDiubah = 20;            // ✅ BISA

const tetap = 10;
tetap = 20;                  // ❌ ERROR! Tidak bisa diubah

// Scope
if (true) {
    var x = 10;              // var: bisa diakses di luar blok
    let y = 20;              // let: hanya di dalam blok
    const z = 30;            // const: hanya di dalam blok
}

console.log(x);              // ✅ 10 (var bocor)
console.log(y);              // ❌ ERROR (let tidak dikenal)
console.log(z);              // ❌ ERROR (const tidak dikenal)
```

#### **B. Tipe Data Primitif**

```javascript
// 1. STRING (teks)
let nama = "Afif Jauhar";          // pakai petik dua
let pesan = 'Hello World';         // pakai petik satu
let template = `Halo ${nama}`;     // template literal (backtick)

console.log(typeof nama);           // "string"
console.log(`Umur saya ${umur}`);   // Template string

// 2. NUMBER (angka)
let umur = 25;                      // integer
let tinggi = 175.5;                 // float
let negatif = -10;                   // negatif
let infinity = 1 / 0;               // Infinity
let notNumber = "abc" / 2;          // NaN (Not a Number)

console.log(typeof umur);            // "number"

// 3. BOOLEAN (true/false)
let isActive = true;
let isLoggedIn = false;
let isGreater = 10 > 5;              // true

console.log(typeof isActive);        // "boolean"

// 4. UNDEFINED (belum diisi)
let belumDiisi;
console.log(belumDiisi);             // undefined
console.log(typeof belumDiisi);       // "undefined"

// 5. NULL (kosong/disengaja)
let kosong = null;
console.log(kosong);                  // null
console.log(typeof kosong);           // "object" (bug JavaScript)

// 6. SYMBOL (identitas unik)
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2);              // false (unik)
```

#### **C. Tipe Data Reference (Objek)**

```javascript
// 1. OBJECT
let person = {
    nama: "Afif",
    umur: 25,
    isActive: true,
    alamat: {
        kota: "Jakarta",
        negara: "Indonesia"
    },
    sapa: function() {
        return `Halo, saya ${this.nama}`;
    }
};

console.log(person.nama);              // "Afif"
console.log(person["umur"]);           // 25
console.log(person.alamat.kota);       // "Jakarta"
console.log(person.sapa());            // "Halo, saya Afif"

// 2. ARRAY
let buah = ["Apel", "Mangga", "Jeruk"];
let campuran = ["Teks", 123, true, {nama: "Objek"}];

console.log(buah[0]);                  // "Apel"
console.log(buah.length);               // 3
console.log(typeof buah);               // "object"

// 3. FUNCTION
function sapa(nama) {
    return `Halo ${nama}`;
}

let sapaArrow = (nama) => `Halo ${nama}`;

console.log(typeof sapa);               // "function"
```

#### **D. Konversi Tipe Data**

```javascript
// String ke Number
let angka = "123";
console.log(Number(angka));             // 123
console.log(parseInt("123.45"));        // 123
console.log(parseFloat("123.45"));      // 123.45
console.log(+ "123");                   // 123 (unary plus)

// Number ke String
let nomor = 123;
console.log(String(nomor));             // "123"
console.log(nomor.toString());          // "123"
console.log(123 + "");                   // "123"

// Boolean ke String
console.log(String(true));              // "true"
console.log(false.toString());          // "false"

// String ke Boolean
console.log(Boolean(""));                // false
console.log(Boolean("abc"));             // true
console.log(Boolean("false"));           // true! (string tidak kosong)
```

#### **E. Truthy dan Falsy**

```javascript
// FALSY (dianggap false)
console.log(Boolean(false));             // false
console.log(Boolean(0));                 // false
console.log(Boolean(-0));                // false
console.log(Boolean(0n));                // false
console.log(Boolean(""));                 // false
console.log(Boolean(null));              // false
console.log(Boolean(undefined));         // false
console.log(Boolean(NaN));               // false

// TRUTHY (dianggap true)
console.log(Boolean(true));              // true
console.log(Boolean(1));                 // true
console.log(Boolean(-1));                // true
console.log(Boolean("hello"));           // true
console.log(Boolean("0"));               // true (string)
console.log(Boolean([]));                // true (array kosong)
console.log(Boolean({}));                // true (object kosong)

// Penggunaan praktis
let nama = "";
if (nama) {
    console.log("Nama ada");             // Tidak dijalankan
} else {
    console.log("Nama kosong");          // Dijalankan
}
```

### **4.4 Operator**

**Tujuan:**
- Mengenal berbagai operator di JavaScript
- Memahami operator aritmatika, perbandingan, logika
- Mampu menggunakan operator dengan tepat

**Penjelasan:**

#### **A. Operator Aritmatika**

```javascript
let a = 10;
let b = 3;

console.log(a + b);          // 13 (penjumlahan)
console.log(a - b);          // 7 (pengurangan)
console.log(a * b);          // 30 (perkalian)
console.log(a / b);          // 3.33 (pembagian)
console.log(a % b);          // 1 (sisa bagi / modulus)
console.log(a ** b);         // 1000 (pangkat: 10^3)

// Increment dan Decrement
let counter = 1;
console.log(counter++);      // 1 (post-increment: tampil dulu baru ditambah)
console.log(counter);        // 2
console.log(++counter);      // 3 (pre-increment: tambah dulu baru tampil)
console.log(counter--);      // 3 (post-decrement)
console.log(counter);        // 2
console.log(--counter);      // 1 (pre-decrement)

// Operator assignment
let x = 5;
x += 3;                      // x = x + 3 (8)
x -= 2;                      // x = x - 2 (6)
x *= 4;                      // x = x * 4 (24)
x /= 3;                      // x = x / 3 (8)
x %= 3;                      // x = x % 3 (2)
```

#### **B. Operator Perbandingan**

```javascript
let a = 5;
let b = "5";
let c = 10;

// Sama dengan (nilai)
console.log(a == b);          // true (nilai sama, meski tipe beda)

// Sama dengan (nilai DAN tipe)
console.log(a === b);         // false (nilai sama tapi tipe beda)

// Tidak sama dengan (nilai)
console.log(a != c);          // true
console.log(a != b);          // false (nilai sama)

// Tidak sama dengan (nilai ATAU tipe)
console.log(a !== b);         // true (tipe beda)

// Lebih besar / lebih kecil
console.log(a > c);           // false
console.log(a < c);           // true
console.log(a >= 5);          // true
console.log(a <= 4);          // false

// Perbandingan string
console.log("a" < "b");       // true (berdasarkan urutan abjad)
console.log("apple" > "banana"); // false
console.log("10" > "2");       // false! (string, bukan angka)
```

#### **C. Operator Logika**

```javascript
let isLoggedIn = true;
let isAdmin = false;
let age = 20;

// AND (&&) - SEMUA harus true
console.log(true && true);     // true
console.log(true && false);    // false
console.log(false && false);   // false

if (isLoggedIn && isAdmin) {
    console.log("Admin dashboard");
}

// OR (||) - SALAH SATU true
console.log(true || false);    // true
console.log(false || false);   // false
console.log(true || true);     // true

if (isLoggedIn || isAdmin) {
    console.log("Bisa masuk");
}

// NOT (!) - Membalikkan nilai
console.log(!true);            // false
console.log(!false);           // true

if (!isLoggedIn) {
    console.log("Silakan login");
}

// Short-circuit evaluation
let nama = "";
let defaultNama = nama || "Guest";
console.log(defaultNama);      // "Guest"

let user = isLoggedIn && {nama: "Afif"};
console.log(user);             // {nama: "Afif"} jika isLoggedIn true
```

#### **D. Operator Lainnya**

```javascript
// Ternary operator (if singkat)
let age = 18;
let status = age >= 17 ? "Dewasa" : "Anak-anak";
console.log(status);           // "Dewasa"

// Nullish coalescing (??)
let nilai = 0;
let hasil = nilai ?? 10;       // 0 (karena 0 bukan null/undefined)
let hasil2 = null ?? 10;       // 10

// Optional chaining (?.
let user = {nama: "Afif"};
console.log(user.alamat?.kota); // undefined (tidak error)

// Typeof
console.log(typeof "teks");     // "string"
console.log(typeof 123);        // "number"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof null);       // "object" (bug)
console.log(typeof undefined);  // "undefined"
console.log(typeof function(){}); // "function"

// Instanceof
console.log([] instanceof Array);      // true
console.log({} instanceof Object);     // true
console.log(new Date() instanceof Date); // true
```

### **4.5 Function**

**Tujuan:**
- Memahami konsep fungsi
- Mengenal berbagai cara membuat fungsi
- Mampu membuat dan memanggil fungsi

**Penjelasan:**

Fungsi adalah **blok kode yang dapat dipanggil berulang kali**.

#### **A. Deklarasi Fungsi**

```javascript
// Function declaration
function sapa(nama) {
    return `Halo, ${nama}!`;
}

// Function expression
const sapa2 = function(nama) {
    return `Halo, ${nama}!`;
};

// Arrow function (ES6+)
const sapa3 = (nama) => {
    return `Halo, ${nama}!`;
};

// Arrow function singkat (implisit return)
const sapa4 = (nama) => `Halo, ${nama}!`;

// Memanggil fungsi
console.log(sapa("Afif"));      // "Halo, Afif!"
console.log(sapa2("Budi"));     // "Halo, Budi!"
console.log(sapa3("Cici"));     // "Halo, Cici!"
```

#### **B. Parameter dan Argumen**

```javascript
// Parameter default
function greet(nama = "Guest", umur = 0) {
    return `Halo ${nama}, umur ${umur}`;
}

console.log(greet("Afif"));          // "Halo Afif, umur 0"
console.log(greet());                 // "Halo Guest, umur 0"

// Rest parameter (...)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));            // 6
console.log(sum(1, 2, 3, 4, 5));      // 15

// Arguments object (cara lama)
function oldSum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
```

#### **C. Return Value**

```javascript
// Fungsi dengan return
function tambah(a, b) {
    return a + b;
    console.log("Ini tidak akan dijalankan"); // Unreachable
}

let hasil = tambah(5, 3);        // 8

// Fungsi tanpa return (undefined)
function logPesan(pesan) {
    console.log(pesan);
    // Tidak ada return
}

let result = logPesan("Hello");   // undefined

// Return multiple values (pakai array/object)
function getMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return { min, max };          // Object shorthand
}

let {min, max} = getMinMax([1, 2, 3, 4, 5]);
console.log(min, max);            // 1 5
```

#### **D. Scope dan Closure**

```javascript
// Global scope
let globalVar = "Saya global";

function testScope() {
    // Local scope
    let localVar = "Saya lokal";
    console.log(globalVar);       // ✅ Bisa
    console.log(localVar);        // ✅ Bisa
}

console.log(localVar);            // ❌ Error

// Closure
function outer(x) {
    return function inner(y) {
        return x + y;              // inner mengingat x dari outer
    };
}

let addFive = outer(5);
console.log(addFive(3));          // 8
console.log(addFive(10));         // 15

// Contoh closure praktis
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

let myCounter = counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2
console.log(myCounter.decrement()); // 1
console.log(myCounter.getCount()); // 1
```

#### **E. Callback Function**

```javascript
// Fungsi yang menerima fungsi lain sebagai parameter
function prosesData(data, callback) {
    console.log("Memproses data...");
    let hasil = data.toUpperCase();
    callback(hasil);
}

prosesData("hello", function(result) {
    console.log("Hasil:", result);    // "Hasil: HELLO"
});

// Callback dengan arrow function
prosesData("world", (result) => {
    console.log("Hasil:", result);
});

// Contoh praktis: array methods
let angka = [1, 2, 3, 4, 5];

// forEach dengan callback
angka.forEach(function(item) {
    console.log(item * 2);
});

// map dengan callback
let doubled = angka.map(item => item * 2);
console.log(doubled);            // [2, 4, 6, 8, 10]

// filter dengan callback
let genap = angka.filter(item => item % 2 === 0);
console.log(genap);              // [2, 4]
```

#### **F. Immediately Invoked Function Expression (IIFE)**

```javascript
// Fungsi yang langsung dijalankan
(function() {
    console.log("Dijalankan langsung");
})();

// Dengan parameter
(function(nama) {
    console.log(`Halo ${nama}`);
})("Afif");

// Arrow function IIFE
(() => {
    console.log("IIFE dengan arrow");
})();

// Untuk membuat private scope
const counterModule = (function() {
    let count = 0;  // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = 0
    };
})();

console.log(counterModule.increment()); // 1
console.log(counterModule.increment()); // 2
console.log(counterModule.count);       // undefined (private)
```

### **4.6 Conditional Statement**

**Tujuan:**
- Memahami cara membuat percabangan
- Mengenal if-else, switch, ternary
- Mampu membuat logika kondisi

**Penjelasan:**

#### **A. If-Else Statement**

```javascript
let umur = 18;

// If sederhana
if (umur >= 17) {
    console.log("Sudah dewasa");
}

// If-else
if (umur >= 17) {
    console.log("Sudah dewasa");
} else {
    console.log("Masih anak-anak");
}

// If-else if-else
let nilai = 85;

if (nilai >= 90) {
    console.log("Grade A");
} else if (nilai >= 80) {
    console.log("Grade B");
} else if (nilai >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// Nested if
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Welcome Admin");
    } else {
        console.log("Welcome User");
    }
} else {
    console.log("Silakan login");
}
```

#### **B. Switch Statement**

```javascript
let hari = "Senin";

switch (hari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
        console.log("Hari kerja");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur");
        break;
    default:
        console.log("Hari tidak valid");
}

// Switch dengan return
function getGrade(nilai) {
    switch (true) {
        case nilai >= 90:
            return "A";
        case nilai >= 80:
            return "B";
        case nilai >= 70:
            return "C";
        default:
            return "D";
    }
}

console.log(getGrade(85));      // "B"
```

#### **C. Ternary Operator**

```javascript
// If-else biasa
let umur = 18;
let status;

if (umur >= 17) {
    status = "Dewasa";
} else {
    status = "Anak-anak";
}

// Ternary
let status2 = umur >= 17 ? "Dewasa" : "Anak-anak";

// Ternary bersarang (hindari jika terlalu kompleks)
let nilai = 85;
let grade = nilai >= 90 ? "A" : 
            nilai >= 80 ? "B" : 
            nilai >= 70 ? "C" : "D";

// Ternary dengan multiple statements
let isLoggedIn = true;
let pesan = isLoggedIn ? (
    console.log("User logged in"),
    "Welcome back!"
) : "Please login";
```

#### **D. Logical Operators untuk Conditional**

```javascript
// AND (&&) untuk conditional execution
let isLoggedIn = true;
isLoggedIn && console.log("User logged in");  // Hanya jalan jika true

// OR (||) untuk default value
let nama = "";
let displayName = nama || "Guest";
console.log(displayName);                     // "Guest"

// Nullish coalescing (??) untuk null/undefined
let nilai = 0;
let hasil = nilai ?? 10;                       // 0 (karena 0 bukan null)
let hasil2 = null ?? 10;                       // 10
```

### **4.7 Looping**

**Tujuan:**
- Memahami konsep perulangan
- Mengenal berbagai jenis loop
- Mampu melakukan iterasi data

**Penjelasan:**

#### **A. For Loop**

```javascript
// For loop standar
for (let i = 0; i < 5; i++) {
    console.log(`Iterasi ke-${i}`);
}

// Loop array
let buah = ["Apel", "Mangga", "Jeruk"];
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

// Loop mundur
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Go!");

// Loop dengan step 2
for (let i = 0; i < 10; i += 2) {
    console.log(i);  // 0, 2, 4, 6, 8
}
```

#### **B. While Loop**

```javascript
// While (cek dulu baru jalan)
let i = 0;
while (i < 5) {
    console.log(`While ke-${i}`);
    i++;
}

// Do-while (jalan dulu baru cek)
let j = 0;
do {
    console.log(`Do-while ke-${j}`);
    j++;
} while (j < 5);

// Perbedaan while vs do-while
let k = 10;
while (k < 5) {
    console.log("Ini tidak akan dijalankan");
}

do {
    console.log("Ini akan dijalankan minimal sekali");
} while (k < 5);
```

#### **C. For...of Loop (untuk array)**

```javascript
let buah = ["Apel", "Mangga", "Jeruk"];

for (let item of buah) {
    console.log(item);
}

// Dengan index
for (let [index, item] of buah.entries()) {
    console.log(`${index}: ${item}`);
}

// Untuk string
let kata = "Hello";
for (let huruf of kata) {
    console.log(huruf);
}
```

#### **D. For...in Loop (untuk object)**

```javascript
let person = {
    nama: "Afif",
    umur: 25,
    kota: "Jakarta"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Untuk array (tidak disarankan, gunakan for...of)
let arr = [10, 20, 30];
for (let index in arr) {
    console.log(`${index}: ${arr[index]}`);
}
```

#### **E. Array Methods untuk Looping**

```javascript
let angka = [1, 2, 3, 4, 5];

// forEach
angka.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

// map (membuat array baru)
let doubled = angka.map(item => item * 2);
console.log(doubled);           // [2, 4, 6, 8, 10]

// filter
let genap = angka.filter(item => item % 2 === 0);
console.log(genap);             // [2, 4]

// reduce
let sum = angka.reduce((total, item) => total + item, 0);
console.log(sum);               // 15

// every (semua memenuhi)
let semuaPositif = angka.every(item => item > 0);
console.log(semuaPositif);      // true

// some (setidaknya satu)
let adaNegatif = angka.some(item => item < 0);
console.log(adaNegatif);        // false

// find (cari satu)
let found = angka.find(item => item > 3);
console.log(found);             // 4
```

#### **F. Break dan Continue**

```javascript
// Break (menghentikan loop)
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Berhenti saat i = 5
    }
    console.log(i);  // 0, 1, 2, 3, 4
}

// Continue (loncati iterasi)
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;  // Loncat jika genap
    }
    console.log(i);  // 1, 3, 5, 7, 9
}

// Labeled break (untuk nested loop)
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outer;  // Hentikan kedua loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
```

### **4.8 Array dan Object**

**Tujuan:**
- Memahami struktur data array dan object
- Mengenal method-method penting
- Mampu memanipulasi data

**Penjelasan:**

#### **A. Array (Daftar)**

```javascript
// Membuat array
let buah = ["Apel", "Mangga", "Jeruk"];
let angka = new Array(1, 2, 3);
let campuran = ["Teks", 123, true, {nama: "Objek"}];
let kosong = [];

// Mengakses elemen
console.log(buah[0]);           // "Apel"
console.log(buah[1]);           // "Mangga"
console.log(buah[buah.length - 1]); // "Jeruk" (elemen terakhir)

// Menambah/menghapus elemen
buah.push("Durian");            // Tambah di akhir
buah.unshift("Pisang");         // Tambah di awal
buah.pop();                     // Hapus dari akhir
buah.shift();                   // Hapus dari awal

// Mengetahui panjang array
console.log(buah.length);       // 3

// Menggabungkan array
let arr1 = [1, 2];
let arr2 = [3, 4];
let gabung = arr1.concat(arr2); // [1, 2, 3, 4]
let spread = [...arr1, ...arr2]; // [1, 2, 3, 4] (ES6+)

// Mencari elemen
let index = buah.indexOf("Mangga");     // 1
let ada = buah.includes("Apel");        // true
let found = buah.find(item => item.length > 4); // "Mangga"

// Memotong array
let slice = buah.slice(1, 3);           // dari index 1 sampai 2
let splice = buah.splice(1, 1, "Pisang"); // hapus 1 elemen di index 1, tambah "Pisang"

// Mengurutkan
let numbers = [3, 1, 4, 2];
numbers.sort();                         // [1, 2, 3, 4]
numbers.reverse();                      // [4, 3, 2, 1]

// Sort dengan custom
let items = [
    {nama: "B", nilai: 2},
    {nama: "A", nilai: 3},
    {nama: "C", nilai: 1}
];
items.sort((a, b) => a.nilai - b.nilai); // urut berdasarkan nilai
```

#### **B. Object (Kamus)**

```javascript
// Membuat object
let person = {
    nama: "Afif Jauhar",
    umur: 25,
    "alamat rumah": "Jakarta",  // properti dengan spasi
    isActive: true,
    sapa: function() {
        return `Halo, saya ${this.nama}`;
    }
};

// Mengakses properti
console.log(person.nama);               // dot notation
console.log(person["umur"]);            // bracket notation
console.log(person["alamat rumah"]);    // bracket untuk properti dengan spasi

// Menambah/mengubah properti
person.pekerjaan = "Developer";
person.umur = 26;
delete person.isActive;

// Object methods
console.log(Object.keys(person));       // ["nama", "umur", "alamat rumah", "sapa"]
console.log(Object.values(person));     // ["Afif Jauhar", 25, ...]
console.log(Object.entries(person));    // [["nama", "Afif"], ...]

// Looping object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object destructuring
let {nama, umur, ...sisa} = person;
console.log(nama);                      // "Afif Jauhar"
console.log(umur);                      // 25

// Spread operator untuk object
let clone = {...person};
let merge = {...person, ...{kota: "Jakarta"}};

// Optional chaining
console.log(person.alamat?.kota);       // undefined (tidak error)
```

#### **C. Array of Objects**

```javascript
let users = [
    {id: 1, nama: "Afif", aktif: true},
    {id: 2, nama: "Budi", aktif: false},
    {id: 3, nama: "Cici", aktif: true}
];

// Mencari user
let user = users.find(u => u.id === 2);
console.log(user.nama);                 // "Budi"

// Filter user aktif
let aktifUsers = users.filter(u => u.aktif);
console.log(aktifUsers);                 // [{id:1,...}, {id:3,...}]

// Map ke array nama
let namaUsers = users.map(u => u.nama);
console.log(namaUsers);                  // ["Afif", "Budi", "Cici"]

// Sort by nama
users.sort((a, b) => a.nama.localeCompare(b.nama));

// Update user
users = users.map(u => 
    u.id === 1 ? {...u, aktif: false} : u
);
```

### **4.9 DOM Manipulation**

**Tujuan:**
- Memahami konsep DOM (Document Object Model)
- Mengenal cara memilih dan memanipulasi elemen
- Mampu mengubah konten HTML dengan JavaScript

**Penjelasan:**

DOM adalah representasi struktur HTML dalam bentuk object yang bisa dimanipulasi dengan JavaScript.

```
HTML                                DOM TREE
─────                               ────────
<html>                              document
  <head>                              │
    <title>...                        ├── head
  <body>                               │    └── title
    <h1>...                            └── body
    <p>...                                  ├── h1
                                            └── p
```

#### **A. Memilih Elemen**

```javascript
// Get element by ID
let header = document.getElementById('header');

// Get elements by class name
let cards = document.getElementsByClassName('card');

// Get elements by tag name
let paragraphs = document.getElementsByTagName('p');

// Query selector (satu elemen pertama)
let firstCard = document.querySelector('.card');
let navLink = document.querySelector('#nav a');

// Query selector all (semua elemen)
let semuaCard = document.querySelectorAll('.card');
let semuaLink = document.querySelectorAll('nav a');

// Perbedaan HTMLCollection vs NodeList
console.log(cards);        // HTMLCollection (live)
console.log(semuaCard);    // NodeList (static)
```

#### **B. Mengubah Konten**

```javascript
// Mengubah teks
let judul = document.getElementById('judul');
judul.textContent = "Judul Baru";
judul.innerText = "Judul Baru Juga";

// Mengubah HTML
let container = document.querySelector('.container');
container.innerHTML = "<h2>Konten Baru</h2>";

// Mengubah atribut
let gambar = document.querySelector('img');
gambar.src = "foto-baru.jpg";
gambar.alt = "Deskripsi baru";
gambar.setAttribute('title', 'Tooltip baru');

// Mengubah style
let card = document.querySelector('.card');
card.style.color = "red";
card.style.backgroundColor = "black";
card.style.fontSize = "20px";
card.style.cssText = "color: red; background: black;";
```

#### **C. Menambah dan Menghapus Elemen**

```javascript
// Membuat elemen baru
let newDiv = document.createElement('div');
newDiv.textContent = "Ini elemen baru";
newDiv.className = "new-card";

let newImage = document.createElement('img');
newImage.src = "foto.jpg";
newImage.alt = "Foto";

// Menambah elemen ke DOM
document.body.appendChild(newDiv);
container.appendChild(newImage);

// Menambah di posisi tertentu
let reference = document.querySelector('.card');
container.insertBefore(newDiv, reference);  // sebelum reference
container.insertAdjacentElement('afterbegin', newDiv); // di awal

// Template string
let html = `
    <div class="card">
        <h3>${judul}</h3>
        <p>${konten}</p>
    </div>
`;
container.insertAdjacentHTML('beforeend', html);

// Menghapus elemen
let hapus = document.querySelector('.hapus');
hapus.remove();                     // Cara modern
hapus.parentNode.removeChild(hapus); // Cara lama
```

#### **D. Mengelola Class**

```javascript
let element = document.querySelector('.card');

// Menambah class
element.classList.add('active');
element.classList.add('highlight', 'selected');

// Menghapus class
element.classList.remove('active');
element.classList.remove('highlight', 'selected');

// Toggle class (tambah/hapus)
element.classList.toggle('dark-mode');
element.classList.toggle('visible', true); // force add

// Cek class
if (element.classList.contains('active')) {
    console.log("Element aktif");
}

// Replace class
element.classList.replace('old-class', 'new-class');
```

### **4.10 Event Handling**

**Tujuan:**
- Memahami konsep event di JavaScript
- Mengenal berbagai jenis event
- Mampu merespon aksi user

**Penjelasan:**

Event adalah **kejadian atau aksi** yang terjadi di browser.

#### **A. Menambahkan Event Listener**

```javascript
// Cara 1: addEventListener (disarankan)
let button = document.querySelector('#myButton');
button.addEventListener('click', function(event) {
    console.log('Tombol diklik!');
    console.log(event); // Detail event
});

// Cara 2: Arrow function
button.addEventListener('click', (e) => {
    console.log('Klik dengan arrow');
});

// Cara 3: Property on-event
button.onclick = function() {
    console.log('Klik dengan onclick');
};

// Cara 4: Inline HTML (tidak disarankan)
// <button onclick="alert('Klik')">Klik</button>

// Multiple listener
button.addEventListener('click', () => console.log('Listener 1'));
button.addEventListener('click', () => console.log('Listener 2'));
// Kedua listener akan dijalankan
```

#### **B. Event Object**

```javascript
button.addEventListener('click', function(event) {
    // Properti event
    console.log(event.type);        // "click"
    console.log(event.target);      // Elemen yang diklik
    console.log(event.currentTarget); // Elemen tempat listener dipasang
    console.log(event.clientX, event.clientY); // Koordinat mouse
    
    // Method event
    event.preventDefault();         // Mencegah aksi default
    event.stopPropagation();        // Mencegah event bubbling
});
```

#### **C. Jenis-Jenis Event**

```javascript
// Mouse events
element.addEventListener('click', handler);        // Klik
element.addEventListener('dblclick', handler);     // Klik 2x
element.addEventListener('mousedown', handler);    // Mouse ditekan
element.addEventListener('mouseup', handler);      // Mouse dilepas
element.addEventListener('mousemove', handler);    // Mouse bergerak
element.addEventListener('mouseenter', handler);   // Mouse masuk area
element.addEventListener('mouseleave', handler);   // Mouse keluar area
element.addEventListener('contextmenu', handler);  // Klik kanan

// Keyboard events
document.addEventListener('keydown', handler);     // Tombol ditekan
document.addEventListener('keyup', handler);       // Tombol dilepas
document.addEventListener('keypress', handler);    // Tombol ditekan (char)

// Form events
form.addEventListener('submit', handler);          // Form dikirim
input.addEventListener('focus', handler);          // Input mendapat fokus
input.addEventListener('blur', handler);           // Input kehilangan fokus
input.addEventListener('change', handler);         // Nilai berubah
input.addEventListener('input', handler);          // Setiap kali input

// Window events
window.addEventListener('load', handler);          // Halaman selesai load
window.addEventListener('DOMContentLoaded', handler); // HTML selesai
window.addEventListener('resize', handler);        // Ukuran window berubah
window.addEventListener('scroll', handler);        // Scroll
window.addEventListener('beforeunload', handler);  // Sebelum keluar

// Drag & drop
element.addEventListener('dragstart', handler);
element.addEventListener('dragend', handler);
element.addEventListener('dragover', handler);
element.addEventListener('drop', handler);
```

#### **D. Event Delegation**

```javascript
// Tanpa delegation (tidak efisien)
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', () => {
        console.log('Item diklik');
    });
});

// Dengan delegation (efisien)
document.querySelector('.list').addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        console.log('Item diklik:', e.target.textContent);
    }
});

// Contoh: tombol dinamis
let container = document.querySelector('.button-container');
container.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log('Tombol:', e.target.textContent);
        
        if (e.target.classList.contains('delete')) {
            e.target.remove();
        }
    }
});
```

#### **E. Remove Event Listener**

```javascript
function handler() {
    console.log('Event terjadi');
}

// Tambah listener
element.addEventListener('click', handler);

// Hapus listener (harus fungsi yang sama)
element.removeEventListener('click', handler);

// Tidak bisa menghapus anonymous function
element.addEventListener('click', () => {
    console.log('Anonymous');
});
// Tidak bisa dihapus karena fungsi berbeda

// One-time event
element.addEventListener('click', function once() {
    console.log('Hanya sekali');
    this.removeEventListener('click', once);
});

// Atau dengan option {once: true}
element.addEventListener('click', handler, {once: true});
```

### **4.11 Fetch API**

**Tujuan:**
- Memahami cara mengambil data dari server
- Mengenal Promise dan async/await
- Mampu bekerja dengan API eksternal

**Penjelasan:**

Fetch API digunakan untuk **mengambil atau mengirim data** ke server.

#### **A. Dasar Fetch**

```javascript
// GET request sederhana
fetch('https://api.example.com/data')
    .then(response => response.json())  // Parse JSON
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.log('Error:', error);
    });

// Fetch dengan opsi
fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    }
})
.then(response => response.json())
.then(data => console.log(data));

// Response object
fetch('data.json')
    .then(response => {
        console.log(response.status);      // 200, 404, dll
        console.log(response.ok);          // true/false
        console.log(response.headers);     // Headers
        
        if (!response.ok) {
            throw new Error('Network error');
        }
        
        return response.json();            // atau .text(), .blob()
    })
    .then(data => console.log(data));
```

#### **B. POST Data**

```javascript
// Mengirim data ke server
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nama: 'Afif',
        umur: 25,
        email: 'afif@example.com'
    })
})
.then(response => response.json())
.then(data => console.log('User dibuat:', data))
.catch(error => console.error('Error:', error));

// Form data
let formData = new FormData();
formData.append('nama', 'Afif');
formData.append('file', fileInput.files[0]);

fetch('/upload', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

#### **C. Async/Await**

```javascript
// Menggunakan async/await
async function getData() {
    try {
        let response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let data = await response.json();
        console.log('Data:', data);
        return data;
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Memanggil fungsi async
getData();

// Contoh dengan multiple requests
async function getUserData() {
    try {
        let [user, posts, comments] = await Promise.all([
            fetch('/api/user').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/comments').then(r => r.json())
        ]);
        
        console.log('User:', user);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
        
    } catch (error) {
        console.error('Error:', error);
    }
}
```

#### **D. Fetch Local File**

```javascript
// Fetch file JSON lokal
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Data dari file:', data);
    });

// Fetch file HTML
fetch('navigation.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('nav-placeholder').innerHTML = html;
    });

// Fetch gambar
fetch('image.jpg')
    .then(response => response.blob())
    .then(blob => {
        let url = URL.createObjectURL(blob);
        document.getElementById('myImage').src = url;
    });
```

### **4.12 Async JavaScript**

**Tujuan:**
- Memahami konsep asynchronous
- Mengenal Promise, callback, async/await
- Mampu menangani operasi async

**Penjelasan:**

JavaScript adalah **single-threaded** tapi bisa menangani operasi asynchronous.

#### **A. Callback**

```javascript
// Callback sederhana
function prosesData(data, callback) {
    console.log('Memproses:', data);
    setTimeout(() => {
        let hasil = data.toUpperCase();
        callback(hasil);
    }, 1000);
}

prosesData('hello', (result) => {
    console.log('Hasil:', result);  // "HELLO" setelah 1 detik
});

// Callback hell (masalah)
getUser(1, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            getLikes(comments[0].id, (likes) => {
                console.log(likes);
            });
        });
    });
});
```

#### **B. Promise**

```javascript
// Membuat Promise
const janji = new Promise((resolve, reject) => {
    // Operasi async
    let sukses = true;
    
    setTimeout(() => {
        if (sukses) {
            resolve("Berhasil!");  // Sukses
        } else {
            reject("Gagal!");      // Error
        }
    }, 1000);
});

// Menggunakan Promise
janji
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.log('Error:', error);
    })
    .finally(() => {
        console.log('Selesai');
    });

// Promise chaining
getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => getComments(posts[0].id))
    .then(comments => getLikes(comments[0].id))
    .then(likes => console.log(likes))
    .catch(error => console.error(error));

// Promise static methods
Promise.all([promise1, promise2, promise3])
    .then(results => console.log('Semua selesai:', results))
    .catch(error => console.log('Salah satu error'));

Promise.race([promise1, promise2])
    .then(result => console.log('Yang tercepat:', result));

Promise.resolve('Langsung sukses').then(console.log);
Promise.reject('Langsung error').catch(console.log);
```

#### **C. Async/Await**

```javascript
// Fungsi async
async function getData() {
    try {
        let response = await fetch('api/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

// Memanggil fungsi async
getData().then(data => console.log(data));

// Async dengan multiple await
async function processAll() {
    try {
        let [user, posts, comments] = await Promise.all([
            fetch('/api/user').then(r => r.json()),
            fetch('/api/posts').then(r => r.json()),
            fetch('/api/comments').then(r => r.json())
        ]);
        
        return {user, posts, comments};
    } catch (error) {
        console.error(error);
    }
}

// Loop async
async function processItems(items) {
    for (let item of items) {
        await processItem(item);  // Tunggu setiap item
    }
}

// Parallel processing
async function processParallel(items) {
    await Promise.all(items.map(item => processItem(item)));
}
```

#### **D. setTimeout dan setInterval**

```javascript
// setTimeout (jalankan sekali setelah delay)
setTimeout(() => {
    console.log('Dijalankan setelah 2 detik');
}, 2000);

// Dengan parameter
setTimeout((nama) => {
    console.log(`Halo ${nama}`);
}, 1000, 'Afif');

// Clear timeout
let timeoutId = setTimeout(() => console.log('Tidak akan jalan'), 1000);
clearTimeout(timeoutId);

// setInterval (jalankan berulang)
let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log(`Detik ke-${counter}`);
    
    if (counter >= 5) {
        clearInterval(intervalId);  // Berhenti setelah 5 kali
    }
}, 1000);
```

### **4.13 Studi Kasus: Interaktivitas Portofolio**

**Tujuan:**
- Menerapkan semua konsep JavaScript dalam proyek nyata
- Membuat fitur-fitur interaktif
- Mengintegrasikan JavaScript dengan HTML/CSS

**Kode JavaScript Lengkap untuk Portofolio:**

```javascript
// ========== 1. MEMUAT NAVIGASI ==========
async function loadNavigation() {
    try {
        let response = await fetch('navigation.html');
        let html = await response.text();
        document.getElementById('nav-placeholder').innerHTML = html;
        
        // Tandai menu aktif
        let currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (currentPage === 'index.html') {
            document.querySelector('.nav-home')?.classList.add('active');
        } else if (currentPage === 'tentang.html') {
            document.querySelector('.nav-tentang')?.classList.add('active');
        } else if (currentPage === 'portofolio.html') {
            document.querySelector('.nav-portofolio')?.classList.add('active');
        } else if (currentPage === 'kontak.html') {
            document.querySelector('.nav-kontak')?.classList.add('active');
        }
        
        // Setup transisi setelah navigasi dimuat
        setupPageTransition();
        
    } catch (error) {
        console.error('Gagal memuat navigasi:', error);
    }
}

// ========== 2. TRANSISI HALAMAN ==========
function setupPageTransition() {
    let navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Jangan terapkan transisi jika link menuju anchor
            if (this.getAttribute('href').startsWith('#')) return;
            
            e.preventDefault();
            let href = this.getAttribute('href');
            
            // Fade out
            document.body.classList.add('fade-out');
            
            // Ganti judul tab
            let pageName = href.replace('.html', '');
            document.title = `Loading ${pageName}... - Afif Jauhar`;
            
            // Pindah halaman setelah animasi
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
}

// ========== 3. TAHUN OTOMATIS ==========
function updateCopyrightYear() {
    let tahunElement = document.getElementById('tahun');
    if (tahunElement) {
        tahunElement.textContent = new Date().getFullYear();
    }
}

// ========== 4. FORM HANDLING ==========
function setupContactForm() {
    let contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Ambil data form
        let nama = document.getElementById('nama')?.value.trim();
        let email = document.getElementById('email')?.value.trim();
        let pesan = document.getElementById('pesan')?.value.trim();
        
        // Validasi
        if (!nama || !email || !pesan) {
            showNotification('Harap isi semua field yang wajib!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Format email tidak valid!', 'error');
            return;
        }
        
        // Animasi tombol
        let submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
        }, 200);
        
        // Simulasi pengiriman
        showNotification('Mengirim pesan...', 'info');
        
        try {
            // Simulasi API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            showNotification('Pesan berhasil dikirim! (Demo)', 'success');
            contactForm.reset();
            
        } catch (error) {
            showNotification('Gagal mengirim pesan', 'error');
        }
    });
}

// Validasi email
function isValidEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========== 5. NOTIFIKASI ==========
function showNotification(message, type = 'info') {
    // Hapus notifikasi yang ada
    let existingNotif = document.querySelector('.notification');
    if (existingNotif) existingNotif.remove();
    
    // Buat notifikasi baru
    let notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = type === 'success' ? '✅' : 
               type === 'error' ? '❌' : 'ℹ️';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2em;">${icon}</span>
            <span style="flex: 1;">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background:none; border:none; font-size:1.2em; 
                           cursor:pointer; width:30px; height:30px; 
                           border-radius:50%; transition:all 0.3s;"
                    onmouseover="this.style.background='#f0f0f0'"
                    onmouseout="this.style.background='none'">
                ×
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto hide setelah 5 detik
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ========== 6. BACK TO TOP ==========
function setupBackToTop() {
    let backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    
    document.body.appendChild(backToTop);
    
    // Tampilkan/sembunyikan tombol
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Scroll ke atas saat diklik
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== 7. SCROLL ANIMATION ==========
function setupScrollAnimation() {
    let observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observasi elemen-elemen
    document.querySelectorAll('.card, .portfolio-item, .skill-tag, .timeline-item')
        .forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
}

// ========== 8. PRELOADER ==========
function setupPreloader() {
    window.addEventListener('load', () => {
        document.body.classList.remove('fade-out');
        
        // Update judul
        let currentPage = window.location.pathname.split('/').pop() || 'index.html';
        let pageName = currentPage.replace('.html', '');
        document.title = `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Afif Jauhar`;
    });
}

// ========== 9. SMOOTH SCROLL UNTUK ANCHOR ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== 10. FILTER PORTOFOLIO (OPSIONAL) ==========
function setupPortfolioFilter() {
    let filterButtons = document.querySelectorAll('.filter-btn');
    let portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let filter = btn.dataset.filter;
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========== 11. DARK MODE (OPSIONAL) ==========
function setupDarkMode() {
    let darkModeToggle = document.getElementById('darkModeToggle');
    
    if (!darkModeToggle) return;
    
    // Cek preferensi user
    let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

// ========== 12. INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Muat navigasi
    loadNavigation();
    
    // Setup fitur-fitur
    updateCopyrightYear();
    setupContactForm();
    setupBackToTop();
    setupScrollAnimation();
    setupSmoothScroll();
    setupPortfolioFilter();
    setupDarkMode();
});

// Load preloader
setupPreloader();

// ========== 13. UTILITY FUNCTIONS ==========
// Debounce (mencegah function dipanggil terlalu sering)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle (membatasi frekuensi pemanggilan)
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Format currency
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

// Format tanggal
function formatDate(tanggal) {
    return new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(tanggal));
}
```

### **4.14 Rangkuman Bab 4**

**Poin-Poin Penting:**

1. **JavaScript** adalah bahasa pemrograman untuk interaktivitas
2. **Variabel** menggunakan `let`, `const` (hindari `var`)
3. **Tipe data**: string, number, boolean, null, undefined, object
4. **Function** bisa dibuat dengan deklarasi, expression, atau arrow
5. **Conditional** menggunakan if-else, switch, ternary
6. **Looping** dengan for, while, for...of, for...in
7. **Array** memiliki method: push, pop, map, filter, reduce
8. **Object** bisa diakses dengan dot atau bracket notation
9. **DOM Manipulation** untuk mengubah HTML/CSS
10. **Event Handling** untuk merespon aksi user
11. **Fetch API** untuk mengambil data dari server
12. **Async JavaScript** dengan callback, promise, async/await

**Tujuan yang Tercapai:**
- ✅ Memahami konsep dasar JavaScript
- ✅ Menguasai sintaks dan struktur JavaScript
- ✅ Mampu memanipulasi DOM
- ✅ Bekerja dengan event dan form
- ✅ Mengambil data dengan Fetch API
- ✅ Menangani operasi asynchronous
- ✅ Membuat fitur interaktif untuk portofolio

---

## **BAB 5: MEMBUAT WEBSITE PORTOFOLIO**

### **5.1 Tujuan dan Fungsi Website Portofolio**

**Tujuan Pembelajaran:**
- Memahami pentingnya website portofolio
- Menentukan fitur-fitur yang diperlukan
- Merencanakan struktur dan desain

**Penjelasan:**

Website portofolio adalah **website pribadi** yang menampilkan:
- Profil dan biodata
- Skill dan kemampuan
- Karya dan project
- Informasi kontak

**Fungsi Website Portofolio:**

| **Fungsi** | **Penjelasan** | **Manfaat** |
|------------|----------------|-------------|
| **Personal Branding** | Membangun citra diri profesional | Dikenal sebagai expert |
| **Showcase Karya** | Menampilkan project terbaik | Bukti kemampuan nyata |
| **Networking** | Memudahkan orang lain menghubungi | Peluang kerja/kolaborasi |
| **Dokumentasi** | Mencatat perjalanan belajar | Portofolio karir |
| **Kredibilitas** | Menunjukkan profesionalisme | Dipercaya klien/perusahaan |

### **5.2 Perencanaan dan Wireframe**

**Tujuan:**
- Membuat rencana sebelum coding
- Mendesain layout dengan wireframe
- Menentukan struktur halaman

**Penjelasan:**

#### **A. Wireframe Halaman Home**

```
┌─────────────────────────────────────┐
│  HEADER                              │
│  ┌─────────────────────────────────┐│
│  │   Nama: Afif Jauhar              ││
│  │   Web Developer Pemula           ││
│  └─────────────────────────────────┘│
├─────────────────────────────────────┤
│  NAVIGASI                            │
│  ┌─────┬──────┬────────┬─────────┐ │
│  │Home │Tentang│Portofolio│Kontak│ │
│  └─────┴──────┴────────┴─────────┘ │
├─────────────────────────────────────┤
│  CONTENT                             │
│  ┌─────────────────────────────────┐│
│  │  Selamat Datang!                ││
│  │  Halo, saya Afif...             ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  Highlight                       ││
│  │  • Project terbaru               ││
│  │  • Skill utama                   ││
│  └─────────────────────────────────┘│
├─────────────────────────────────────┤
│  FOOTER                              │
│  ┌─────────────────────────────────┐│
│  │  Copyright & Social Links        ││
│  └─────────────────────────────────┘│
└─────────────────────────────────────┘
```

#### **B. Wireframe Halaman Tentang**

```
┌─────────────────────────────────────┐
│  HEADER                              │
├─────────────────────────────────────┤
│  NAVIGASI                            │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐│
│  │  Profil Singkat                  ││
│  │  • Nama, umur, lokasi            ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  Skill Tags                      ││
│  │  HTML CSS JS Git                 ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  Timeline Belajar                ││
│  │  2024 - Mulai belajar...         ││
│  └─────────────────────────────────┘│
├─────────────────────────────────────┤
│  FOOTER                              │
└─────────────────────────────────────┘
```

#### **C. Wireframe Halaman Portofolio**

```
┌─────────────────────────────────────┐
│  HEADER                              │
├─────────────────────────────────────┤
│  NAVIGASI                            │
├─────────────────────────────────────┤
│  ┌─────┬─────┬─────┬─────┐          │
│  │All  │Web  │Desig│App  │ (filter) │
│  └─────┴─────┴─────┴─────┘          │
├─────────────────────────────────────┤
│  ┌────────────┐ ┌────────────┐      │
│  │ Project 1  │ │ Project 2  │      │
│  │            │ │            │      │
│  └────────────┘ └────────────┘      │
│  ┌────────────┐ ┌────────────┐      │
│  │ Project 3  │ │ Project 4  │      │
│  │            │ │            │      │
│  └────────────┘ └────────────┘      │
├─────────────────────────────────────┤
│  FOOTER                              │
└─────────────────────────────────────┘
```

#### **D. Wireframe Halaman Kontak**

```
┌─────────────────────────────────────┐
│  HEADER                              │
├─────────────────────────────────────┤
│  NAVIGASI                            │
├─────────────────────────────────────┤
│  ┌─────────────────────────────────┐│
│  │  FORM KONTAK                     ││
│  │  Nama: [......................] ││
│  │  Email: [......................]││
│  │  Pesan: [......................]││
│  │  [    Kirim    ]                 ││
│  └─────────────────────────────────┘│
│  ┌─────────────────────────────────┐│
│  │  Social Media                    ││
│  │  GitHub  LinkedIn  Instagram     ││
│  └─────────────────────────────────┘│
├─────────────────────────────────────┤
│  FOOTER                              │
└─────────────────────────────────────┘
```

### **5.3 Halaman Home (index.html)**

**Tujuan:**
- Membuat halaman utama yang menarik
- Menampilkan perkenalan singkat
- Memberikan navigasi ke halaman lain

**Kode Lengkap:**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Afif Jauhar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <header>
            <h1>Afif Jauhar 👋</h1>
            <p class="subtitle">Web Developer Pemula | Content Creator</p>
        </header>
        
        <!-- NAVIGASI (akan dimuat dengan JavaScript) -->
        <div id="nav-placeholder"></div>
        
        <!-- MAIN CONTENT -->
        <main>
            <!-- Hero Section -->
            <section class="hero">
                <h2>Selamat Datang di Portofolio Saya</h2>
                
                <div class="card">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h3>Halo, saya Afif!</h3>
                            <p>
                                Saya seorang web developer pemula yang sedang belajar 
                                dan membangun karier di dunia teknologi. Website ini 
                                adalah project pertama saya yang dibuat dengan HTML, 
                                CSS, dan JavaScript murni.
                            </p>
                            <p>
                                Saya percaya bahwa teknologi bisa membantu banyak orang, 
                                dan saya ingin berkontribusi melalui kode yang saya tulis. 
                                Mari berkenalan lebih lanjut!
                            </p>
                            <div class="hero-buttons">
                                <a href="tentang.html" class="btn">Kenali Saya</a>
                                <a href="portofolio.html" class="btn btn-outline">Lihat Karya</a>
                            </div>
                        </div>
                        <div class="hero-image">
                            <!-- Tempat foto profil -->
                            <div class="profile-placeholder">📸</div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Highlight Section -->
            <section>
                <h2>Apa yang Saya Lakukan</h2>
                
                <div class="card-grid">
                    <div class="card">
                        <div class="card-icon">💻</div>
                        <h3>Web Development</h3>
                        <p>
                            Membuat website responsif dengan HTML, CSS, dan JavaScript. 
                            Fokus pada front-end development dan user experience.
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">📱</div>
                        <h3>Mobile Friendly</h3>
                        <p>
                            Mendesain website yang nyaman dilihat di berbagai perangkat, 
                            dari desktop hingga smartphone.
                        </p>
                    </div>
                    
                    <div class="card">
                        <div class="card-icon">🚀</div>
                        <h3>Continuous Learning</h3>
                        <p>
                            Selalu belajar teknologi baru dan mengikuti perkembangan 
                            terbaru di dunia web development.
                        </p>
                    </div>
                </div>
            </section>
            
            <!-- Featured Project -->
            <section>
                <h2>Project Terbaru</h2>
                
                <div class="featured-project card">
                    <div class="featured-content">
                        <h3>Website Portofolio Ini</h3>
                        <p>
                            Project pertama yang dibuat dari nol menggunakan HTML, CSS, 
                            dan JavaScript. Website ini memiliki 4 halaman, navigasi 
                            terpisah, form kontak, dan berbagai animasi interaktif.
                        </p>
                        <ul class="featured-tech">
                            <li class="skill-tag">HTML5</li>
                            <li class="skill-tag">CSS3</li>
                            <li class="skill-tag">JavaScript</li>
                            <li class="skill-tag">GitHub Pages</li>
                        </ul>
                        <a href="portofolio.html" class="btn btn-small">Lihat Detail →</a>
                    </div>
                </div>
            </section>
            
            <!-- Call to Action -->
            <section class="cta-section">
                <div class="card cta-card">
                    <h2>Tertarik Bekerja Sama?</h2>
                    <p>
                        Saya terbuka untuk proyek freelance, kolaborasi, atau 
                        kesempatan belajar bersama. Jangan ragu untuk menghubungi saya!
                    </p>
                    <a href="kontak.html" class="btn btn-large">Hubungi Saya</a>
                </div>
            </section>
        </main>
        
        <!-- FOOTER -->
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar. Dibuat dengan ❤️</p>
            <div class="footer-links">
                <a href="https://github.com/afifjauhar" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/afifjauhar" target="_blank">LinkedIn</a>
                <a href="https://instagram.com/afifjauhar" target="_blank">Instagram</a>
            </div>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.4 Halaman Tentang (tentang.html)**

**Tujuan:**
- Menampilkan informasi lengkap tentang diri
- Menunjukkan skill dan kemampuan
- Membagikan perjalanan belajar

**Kode Lengkap:**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tentang - Afif Jauhar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <header>
            <h1>Tentang Saya 👤</h1>
            <p class="subtitle">Kenali saya lebih dekat</p>
        </header>
        
        <!-- NAVIGASI -->
        <div id="nav-placeholder"></div>
        
        <!-- MAIN CONTENT -->
        <main>
            <!-- Profil Section -->
            <section>
                <h2>📋 Profil Singkat</h2>
                
                <div class="profile-card card">
                    <div class="profile-header">
                        <div class="profile-avatar">👨‍💻</div>
                        <div class="profile-title">
                            <h3>Afif Jauhar</h3>
                            <p class="profile-tagline">"Belajar sepanjang hayat"</p>
                        </div>
                    </div>
                    
                    <div class="profile-info">
                        <table class="info-table">
                            <tr>
                                <td><strong>Nama Lengkap</strong></td>
                                <td>Afif Jauhar</td>
                            </tr>
                            <tr>
                                <td><strong>Tempat, Tanggal Lahir</strong></td>
                                <td>Jakarta, 1 Januari 2000</td>
                            </tr>
                            <tr>
                                <td><strong>Domisili</strong></td>
                                <td>Jakarta, Indonesia</td>
                            </tr>
                            <tr>
                                <td><strong>Pendidikan</strong></td>
                                <td>Teknik Informatika (Sedang Studi)</td>
                            </tr>
                            <tr>
                                <td><strong>Pekerjaan</strong></td>
                                <td>Web Developer Pemula</td>
                            </tr>
                            <tr>
                                <td><strong>Minat</strong></td>
                                <td>Web Development, UI/UX Design, Teknologi</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
            
            <!-- Skill Section -->
            <section>
                <h2>🎯 Skill yang Dikuasai</h2>
                
                <div class="skills-container">
                    <div class="skill-category">
                        <h3>Front-End Development</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">HTML5 (Mahir)</span>
                            <span class="skill-tag">CSS3 (Mahir)</span>
                            <span class="skill-tag">JavaScript (Menengah)</span>
                            <span class="skill-tag">Responsive Design</span>
                            <span class="skill-tag">Flexbox & Grid</span>
                            <span class="skill-tag">CSS Animations</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3>Tools & Version Control</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Git & GitHub</span>
                            <span class="skill-tag">VS Code</span>
                            <span class="skill-tag">Chrome DevTools</span>
                            <span class="skill-tag">GitHub Desktop</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3>Soft Skills</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Problem Solving</span>
                            <span class="skill-tag">Team Collaboration</span>
                            <span class="skill-tag">Continuous Learning</span>
                            <span class="skill-tag">Time Management</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3>Sedang Dipelajari</h3>
                        <div class="skill-tags">
                            <span class="skill-tag learning">React</span>
                            <span class="skill-tag learning">Node.js</span>
                            <span class="skill-tag learning">Tailwind CSS</span>
                            <span class="skill-tag learning">TypeScript</span>
                        </div>
                    </div>
                </div>
                
                <!-- Progress Bars -->
                <div class="skill-progress">
                    <h3>Level Kemampuan</h3>
                    
                    <div class="progress-item">
                        <div class="progress-label">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 90%"></div>
                        </div>
                    </div>
                    
                    <div class="progress-item">
                        <div class="progress-label">
                            <span>CSS</span>
                            <span>85%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 85%"></div>
                        </div>
                    </div>
                    
                    <div class="progress-item">
                        <div class="progress-label">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 70%"></div>
                        </div>
                    </div>
                    
                    <div class="progress-item">
                        <div class="progress-label">
                            <span>Git</span>
                            <span>75%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 75%"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Timeline Section -->
            <section>
                <h2>📚 Perjalanan Belajar</h2>
                
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">Januari 2024</div>
                        <h4>Mulai Belajar HTML</h4>
                        <p>
                            Memulai perjalanan web development dengan mempelajari 
                            dasar-dasar HTML. Membuat struktur halaman pertama dan 
                            memahami tag-tag HTML.
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">Februari 2024</div>
                        <h4>Belajar CSS & Desain</h4>
                        <p>
                            Mendalami CSS untuk styling website. Mempelajari selector, 
                            box model, flexbox, grid, dan animasi. Membuat website 
                            pertama dengan tampilan menarik.
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">Maret 2024</div>
                        <h4>Git & GitHub Pages</h4>
                        <p>
                            Belajar version control dengan Git dan GitHub. Mempublikasikan 
                            website pertama secara gratis menggunakan GitHub Pages.
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">April 2024</div>
                        <h4>JavaScript Interaktif</h4>
                        <p>
                            Menambahkan interaktivitas dengan JavaScript. Mempelajari 
                            DOM manipulation, event handling, dan fetch API untuk membuat 
                            website lebih dinamis.
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">Mei 2024</div>
                        <h4>Membangun Portofolio</h4>
                        <p>
                            Menggabungkan semua skill yang dipelajari untuk membuat 
                            website portofolio multi-halaman dengan berbagai fitur 
                            interaktif.
                        </p>
                    </div>
                </div>
            </section>
            
            <!-- Hobby Section -->
            <section>
                <h2>🎬 Hobi & Aktivitas</h2>
                
                <div class="hobby-grid">
                    <div class="hobby-item card">
                        <div class="hobby-icon">📖</div>
                        <h4>Membaca</h4>
                        <p>Buku teknologi, pengembangan diri, dan fiksi</p>
                    </div>
                    
                    <div class="hobby-item card">
                        <div class="hobby-icon">🎮</div>
                        <h4>Gaming</h4>
                        <p>Game strategi dan puzzle untuk melatih logika</p>
                    </div>
                    
                    <div class="hobby-item card">
                        <div class="hobby-icon">🎧</div>
                        <h4>Musik</h4>
                        <p>Mendengarkan musik sambil coding</p>
                    </div>
                    
                    <div class="hobby-item card">
                        <div class="hobby-icon">☕</div>
                        <h4>Ngopi</h4>
                        <p>Diskusi santai sambil menikmati kopi</p>
                    </div>
                </div>
            </section>
        </main>
        
        <!-- FOOTER -->
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar. Dibuat dengan ❤️</p>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.5 Halaman Portofolio (portofolio.html)**

**Tujuan:**
- Menampilkan project-project yang pernah dibuat
- Memberikan informasi detail setiap project
- Menunjukkan bukti kemampuan nyata

**Kode Lengkap:**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio - Afif Jauhar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <header>
            <h1>Portofolio Saya 💼</h1>
            <p class="subtitle">Karya dan project yang pernah saya buat</p>
        </header>
        
        <!-- NAVIGASI -->
        <div id="nav-placeholder"></div>
        
        <!-- MAIN CONTENT -->
        <main>
            <!-- Filter Buttons -->
            <div class="filter-container">
                <button class="filter-btn active" data-filter="all">Semua</button>
                <button class="filter-btn" data-filter="web">Website</button>
                <button class="filter-btn" data-filter="design">Design</button>
                <button class="filter-btn" data-filter="app">Aplikasi</button>
            </div>
            
            <!-- Portfolio Grid -->
            <section>
                <h2>🚀 Project Unggulan</h2>
                
                <div class="portfolio-grid">
                    <!-- Project 1 -->
                    <div class="portfolio-item" data-category="web">
                        <div class="portfolio-image">📄</div>
                        <div class="portfolio-info">
                            <h3>Website Portofolio Pribadi</h3>
                            <p>
                                Website portofolio responsif dengan 4 halaman, 
                                navigasi terpisah, form kontak, dan animasi interaktif.
                            </p>
                            <div class="portfolio-tech">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">JavaScript</span>
                            </div>
                            <div class="portfolio-links">
                                <a href="#" class="btn btn-small">Live Demo</a>
                                <a href="#" class="btn btn-small btn-outline">GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project 2 -->
                    <div class="portfolio-item" data-category="web">
                        <div class="portfolio-image">🎨</div>
                        <div class="portfolio-info">
                            <h3>Landing Page Produk</h3>
                            <p>
                                Halaman landing page untuk produk digital dengan 
                                desain modern dan konversi tinggi.
                            </p>
                            <div class="portfolio-tech">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">Flexbox</span>
                            </div>
                            <div class="portfolio-links">
                                <a href="#" class="btn btn-small">Live Demo</a>
                                <a href="#" class="btn btn-small btn-outline">GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project 3 -->
                    <div class="portfolio-item" data-category="app">
                        <div class="portfolio-image">📝</div>
                        <div class="portfolio-info">
                            <h3>To-Do List App</h3>
                            <p>
                                Aplikasi daftar tugas sederhana dengan JavaScript. 
                                Bisa menambah, menghapus, dan menandai tugas selesai.
                            </p>
                            <div class="portfolio-tech">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">LocalStorage</span>
                            </div>
                            <div class="portfolio-links">
                                <a href="#" class="btn btn-small">Live Demo</a>
                                <a href="#" class="btn btn-small btn-outline">GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project 4 -->
                    <div class="portfolio-item" data-category="design">
                        <div class="portfolio-image">🎯</div>
                        <div class="portfolio-info">
                            <h3>UI Design - E-commerce</h3>
                            <p>
                                Desain antarmuka untuk aplikasi e-commerce 
                                dengan fokus pada user experience.
                            </p>
                            <div class="portfolio-tech">
                                <span class="tech-tag">Figma</span>
                                <span class="tech-tag">UI/UX</span>
                                <span class="tech-tag">Wireframe</span>
                            </div>
                            <div class="portfolio-links">
                                <a href="#" class="btn btn-small">Lihat Desain</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project 5 -->
                    <div class="portfolio-item" data-category="web">
                        <div class="portfolio-image">📊</div>
                        <div class="portfolio-info">
                            <h3>Dashboard Admin</h3>
                            <p>
                                Template dashboard admin dengan grafik interaktif 
                                dan tampilan yang responsif.
                            </p>
                            <div class="portfolio-tech">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">Chart.js</span>
                            </div>
                            <div class="portfolio-links">
                                <a href="#" class="btn btn-small">Live Demo</a>
                                <a href="#" class="btn btn-small btn-outline">GitHub</a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Project 6 -->
                    <div class="portfolio-item" data-category="app">
                        <div class="portfolio-image">⏰</div>
                        <div class="portfolio-info">
                            <h3>Pomodoro Timer</h3>
                            <p>
                                Aplikasi timer Pomodoro untuk membantu fokus 
                                bekerja dengan teknik time management.
                            </p>
                            <div class="portfolio-tech">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">JavaScript</span>
                            </div>
                            <div class="portfolio-links">
                                <a href="#" class="btn btn-small">Live Demo</a>
                                <a href="#" class="btn btn-small btn-outline">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Statistics Section -->
            <section>
                <h2>📊 Statistik</h2>
                
                <div class="stats-grid">
                    <div class="stat-item card">
                        <div class="stat-number">6+</div>
                        <div class="stat-label">Project Selesai</div>
                    </div>
                    
                    <div class="stat-item card">
                        <div class="stat-number">500+</div>
                        <div class="stat-label">Jam Belajar</div>
                    </div>
                    
                    <div class="stat-item card">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">Repository</div>
                    </div>
                    
                    <div class="stat-item card">
                        <div class="stat-number">3</div>
                        <div class="stat-label">Teknologi Dikuasai</div>
                    </div>
                </div>
            </section>
            
            <!-- Testimonial Section -->
            <section>
                <h2>💬 Testimoni</h2>
                
                <div class="testimonial-grid">
                    <div class="testimonial-item card">
                        <p class="testimonial-text">
                            "Afif sangat cepat belajar dan memiliki dedikasi tinggi. 
                            Kodenya rapi dan mudah dipahami."
                        </p>
                        <div class="testimonial-author">
                            <strong>Budi Santoso</strong>
                            <span>Senior Developer</span>
                        </div>
                    </div>
                    
                    <div class="testimonial-item card">
                        <p class="testimonial-text">
                            "Website portofolionya sangat impressive untuk pemula. 
                            Desainnya modern dan responsif."
                        </p>
                        <div class="testimonial-author">
                            <strong>Citra Dewi</strong>
                            <span>UI/UX Designer</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <!-- FOOTER -->
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar. Dibuat dengan ❤️</p>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.6 Halaman Kontak (kontak.html)**

**Tujuan:**
- Menyediakan form untuk menghubungi
- Menampilkan informasi kontak dan media sosial
- Memudahkan komunikasi dengan pengunjung

**Kode Lengkap:**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontak - Afif Jauhar</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <header>
            <h1>Hubungi Saya 📞</h1>
            <p class="subtitle">Silakan isi form atau hubungi via media sosial</p>
        </header>
        
        <!-- NAVIGASI -->
        <div id="nav-placeholder"></div>
        
        <!-- MAIN CONTENT -->
        <main>
            <div class="contact-grid">
                <!-- Form Kontak -->
                <section class="contact-form-section">
                    <h2>📧 Kirim Pesan</h2>
                    
                    <div class="card">
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="nama">Nama Lengkap *</label>
                                <input type="text" id="nama" name="nama" 
                                       placeholder="Masukkan nama Anda" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" id="email" name="email" 
                                       placeholder="nama@email.com" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="subjek">Subjek</label>
                                <input type="text" id="subjek" name="subjek" 
                                       placeholder="Judul pesan">
                            </div>
                            
                            <div class="form-group">
                                <label for="pesan">Pesan *</label>
                                <textarea id="pesan" name="pesan" rows="5" 
                                          placeholder="Tulis pesan Anda di sini..." required></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-submit">
                                Kirim Pesan ✉️
                            </button>
                        </form>
                    </div>
                </section>
                
                <!-- Info Kontak -->
                <section class="contact-info-section">
                    <h2>📱 Info Kontak</h2>
                    
                    <div class="card">
                        <div class="contact-item">
                            <div class="contact-icon">📧</div>
                            <div class="contact-detail">
                                <h3>Email</h3>
                                <p>afif.jauhar@example.com</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📱</div>
                            <div class="contact-detail">
                                <h3>Telepon</h3>
                                <p>+62 812-3456-7890</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <div class="contact-detail">
                                <h3>Lokasi</h3>
                                <p>Jakarta, Indonesia</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <div class="contact-icon">⏰</div>
                            <div class="contact-detail">
                                <h3>Jam Respons</h3>
                                <p>Senin - Jumat, 09:00 - 17:00</p>
                            </div>
                        </div>
                    </div>
                    
                    <h2>🌐 Media Sosial</h2>
                    
                    <div class="card">
                        <div class="social-grid">
                            <a href="https://github.com/afifjauhar" target="_blank" 
                               class="social-item">
                                <span class="social-icon">🐱</span>
                                <span class="social-name">GitHub</span>
                            </a>
                            
                            <a href="https://linkedin.com/in/afifjauhar" target="_blank" 
                               class="social-item">
                                <span class="social-icon">💼</span>
                                <span class="social-name">LinkedIn</span>
                            </a>
                            
                            <a href="https://instagram.com/afifjauhar" target="_blank" 
                               class="social-item">
                                <span class="social-icon">📷</span>
                                <span class="social-name">Instagram</span>
                            </a>
                            
                            <a href="https://twitter.com/afifjauhar" target="_blank" 
                               class="social-item">
                                <span class="social-icon">🐦</span>
                                <span class="social-name">Twitter</span>
                            </a>
                        </div>
                    </div>
                    
                    <h2>🗺️ Peta Lokasi</h2>
                    
                    <div class="card map-container">
                        <!-- Google Maps Embed (ganti dengan iframe maps) -->
                        <div class="map-placeholder">
                            <p>📍 Jakarta, Indonesia</p>
                            <!-- Jika ingin embed Google Maps: -->
                            <!--
                            <iframe src="https://www.google.com/maps/embed?pb=..." 
                                    width="100%" height="300" style="border:0;" 
                                    allowfullscreen="" loading="lazy">
                            </iframe>
                            -->
                        </div>
                    </div>
                </section>
            </div>
            
            <!-- FAQ Section -->
            <section>
                <h2>❓ Pertanyaan Umum</h2>
                
                <div class="faq-grid">
                    <div class="faq-item card">
                        <h3>Apakah menerima proyek freelance?</h3>
                        <p>
                            Ya, saya terbuka untuk proyek freelance kecil terutama 
                            yang berkaitan dengan front-end development.
                        </p>
                    </div>
                    
                    <div class="faq-item card">
                        <h3>Berapa estimasi waktu respons?</h3>
                        <p>
                            Saya biasanya merespon dalam 1-2 hari kerja. Jika 
                            urgent, bisa hubungi via media sosial.
                        </p>
                    </div>
                    
                    <div class="faq-item card">
                        <h3>Teknologi apa yang dikuasai?</h3>
                        <p>
                            HTML, CSS, JavaScript, Git, dan sedang belajar React 
                            serta Node.js.
                        </p>
                    </div>
                    
                    <div class="faq-item card">
                        <h3>Apakah menerima kolaborasi?</h3>
                        <p>
                            Sangat terbuka untuk kolaborasi belajar maupun project 
                            bersama. Mari diskusi!
                        </p>
                    </div>
                </div>
            </section>
        </main>
        
        <!-- FOOTER -->
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar. Dibuat dengan ❤️</p>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.7 Navigasi Terpisah (navigation.html)**

**Tujuan:**
- Membuat komponen navigasi yang reusable
- Memudahkan update menu di semua halaman
- Menjaga konsistensi navigasi

**Kode Lengkap:**

```html
<!-- navigation.html -->
<nav>
    <a href="index.html" class="nav-home">🏠 Home</a>
    <a href="tentang.html" class="nav-tentang">👤 Tentang</a>
    <a href="portofolio.html" class="nav-portofolio">💼 Portofolio</a>
    <a href="kontak.html" class="nav-kontak">📞 Kontak</a>
</nav>
```

### **5.8 CSS Tambahan untuk Halaman Spesifik**

**Tujuan:**
- Menambahkan style khusus untuk elemen-elemen baru
- Memastikan semua halaman tampil konsisten
- Meningkatkan user experience

**Kode CSS Tambahan (tambahkan ke style.css):**

```css
/* ========== HOME PAGE STYLES ========== */
.hero-content {
    display: flex;
    align-items: center;
    gap: 40px;
}

.hero-text {
    flex: 2;
}

.hero-image {
    flex: 1;
    text-align: center;
}

.profile-placeholder {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: white;
    margin: 0 auto;
    box-shadow: var(--shadow-lg);
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: white;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 15px;
}

.featured-project {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.featured-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 15px 0;
}

.cta-card {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    text-align: center;
    padding: 40px;
}

.cta-card h2,
.cta-card p {
    color: white;
}

.btn-large {
    padding: 15px 40px;
    font-size: 1.2rem;
}

.footer-links {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.footer-links a {
    color: var(--gray);
    font-size: 0.9rem;
}

.footer-links a:hover {
    color: var(--primary);
}

/* ========== ABOUT PAGE STYLES ========== */
.profile-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}

.profile-avatar {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: white;
}

.profile-tagline {
    font-style: italic;
    color: var(--primary);
}

.info-table {
    width: 100%;
    border-collapse: collapse;
}

.info-table td {
    padding: 10px;
    border-bottom: 1px solid #e2e8f0;
}

.info-table td:first-child {
    width: 150px;
    font-weight: 600;
}

.skill-category {
    margin-bottom: 25px;
}

.skill-category h3 {
    margin-bottom: 10px;
    font-size: 1.1rem;
    color: var(--dark);
}

.skill-tag.learning {
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
}

.progress-item {
    margin-bottom: 20px;
}

.progress-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}

.progress-bar {
    width: 100%;
    height: 10px;
    background: #e2e8f0;
    border-radius: 5px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border-radius: 5px;
    transition: width 1s ease;
}

.hobby-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.hobby-item {
    text-align: center;
    padding: 20px;
}

.hobby-icon {
    font-size: 3rem;
    margin-bottom: 10px;
}

/* ========== PORTFOLIO PAGE STYLES ========== */
.filter-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 30px 0;
}

.filter-btn {
    padding: 8px 20px;
    border: none;
    background: var(--light);
    color: var(--dark);
    border-radius: var(--radius-full);
    cursor: pointer;
    transition: all var(--transition-base);
    font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--primary);
    color: white;
}

.portfolio-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 10px 0;
}

.tech-tag {
    padding: 3px 8px;
    background: var(--light);
    border-radius: var(--radius-sm);
    font-size: 0.8rem;
    color: var(--gray);
}

.portfolio-links {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.stat-item {
    text-align: center;
    padding: 20px;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary);
    line-height: 1;
}

.stat-label {
    color: var(--gray);
    font-size: 0.9rem;
    margin-top: 5px;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.testimonial-item {
    position: relative;
    padding-top: 30px;
}

.testimonial-item::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 4rem;
    color: var(--primary);
    opacity: 0.2;
    font-family: serif;
}

.testimonial-text {
    font-style: italic;
    margin-bottom: 15px;
}

.testimonial-author {
    display: flex;
    flex-direction: column;
}

.testimonial-author span {
    font-size: 0.9rem;
    color: var(--gray);
}

/* ========== CONTACT PAGE STYLES ========== */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 20px;
}

@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid #e2e8f0;
}

.contact-item:last-child {
    border-bottom: none;
}

.contact-icon {
    width: 40px;
    height: 40px;
    background: var(--light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: var(--primary);
}

.contact-detail h3 {
    font-size: 1rem;
    margin-bottom: 3px;
}

.contact-detail p {
    font-size: 0.9rem;
    color: var(--gray);
    margin: 0;
}

.social-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

.social-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: var(--light);
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    color: var(--dark);
    text-decoration: none;
}

.social-item:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-2px);
}

.social-icon {
    font-size: 1.2rem;
}

.map-placeholder {
    height: 250px;
    background: var(--light);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray);
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.faq-item h3 {
    font-size: 1rem;
    margin-bottom: 10px;
    color: var(--primary);
}

.faq-item p {
    font-size: 0.9rem;
    margin: 0;
}

.btn-submit {
    width: 100%;
    padding: 15px;
    font-size: 1.1rem;
}

/* ========== ANIMATIONS ========== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card {
    animation: fadeInUp 0.6s ease-out;
    animation-fill-mode: both;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }
.card:nth-child(5) { animation-delay: 0.5s; }
.card:nth-child(6) { animation-delay: 0.6s; }
```

### **5.9 Rangkuman Bab 5**

**Poin-Poin Penting:**

1. **Perencanaan** sebelum coding sangat penting
2. **Wireframe** membantu memvisualisasikan layout
3. **Halaman Home** sebagai pintu masuk utama
4. **Halaman Tentang** untuk menampilkan profil dan skill
5. **Halaman Portofolio** untuk showcase karya
6. **Halaman Kontak** untuk komunikasi
7. **Navigasi terpisah** memudahkan maintenance
8. **CSS modular** untuk styling yang konsisten

**Tujuan yang Tercapai:**
- ✅ Membuat 4 halaman website portofolio
- ✅ Mendesain layout yang konsisten
- ✅ Menampilkan informasi diri dengan lengkap
- ✅ Menyediakan form kontak interaktif
- ✅ Membuat navigasi yang reusable
- ✅ Mengorganisir kode dengan rapi

---

## **BAB 6: FITUR-FITUR INTERAKTIF**

### **6.1 Tujuan dan Fungsi Fitur Interaktif**

**Tujuan Pembelajaran:**
- Memahami pentingnya interaktivitas
- Mengenal berbagai fitur yang bisa ditambahkan
- Meningkatkan user experience

**Penjelasan:**

Fitur interaktif membuat website lebih **hidup** dan **menarik**. User tidak hanya melihat, tapi juga berinteraksi.

**Manfaat Fitur Interaktif:**

| **Fitur** | **Fungsi** | **Manfaat** |
|-----------|------------|-------------|
| **Transisi Halaman** | Animasi pindah halaman | Pengalaman lebih mulus |
| **Notifikasi** | Feedback untuk user | User tahu aksinya berhasil/gagal |
| **Back to Top** | Navigasi cepat | Memudahkan scroll panjang |
| **Scroll Animasi** | Elemen muncul perlahan | Lebih dinamis |
| **Loading Spinner** | Indikator proses | User tahu sedang loading |
| **Validasi Form** | Cek input user | Mencegah error |
| **Dark Mode** | Tampilan alternatif | Kenyamanan mata |

### **6.2 Transisi Antar Halaman**

**Tujuan:**
- Membuat perpindahan halaman lebih halus
- Memberikan pengalaman seamless
- Menambah kesan profesional

**Penjelasan:**

Transisi antar halaman adalah efek yang terjadi saat user berpindah dari satu halaman ke halaman lain.

#### **A. CSS untuk Transisi**

```css
/* Tambahkan di style.css */
body {
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
}

body.fade-out {
    opacity: 0;
}

/* Loading spinner */
body.fade-out::after {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 9999;
}

@keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}
```

#### **B. JavaScript untuk Transisi**

```javascript
// Di script.js
function setupPageTransition() {
    let navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Abaikan jika link ke anchor
            if (this.getAttribute('href').startsWith('#')) return;
            
            e.preventDefault();
            let href = this.getAttribute('href');
            
            // Fade out
            document.body.classList.add('fade-out');
            
            // Ganti judul tab
            let pageName = href.replace('.html', '');
            document.title = `Loading ${pageName}... - Afif Jauhar`;
            
            // Pindah halaman setelah animasi
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
}

// Panggil di DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setupPageTransition();
});
```

### **6.3 Notifikasi**

**Tujuan:**
- Memberikan feedback kepada user
- Menampilkan pesan sukses/error
- Meningkatkan user experience

**Penjelasan:**

Notifikasi adalah pesan sementara yang muncul untuk memberi tahu user tentang suatu kejadian.

#### **A. CSS untuk Notifikasi**

```css
/* Tambahkan di style.css */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 350px;
    padding: 15px 20px;
    background: white;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    z-index: 9999;
    animation: slideInRight 0.3s ease;
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.notification-success {
    border-left: 4px solid var(--success);
}

.notification-error {
    border-left: 4px solid var(--error);
}

.notification-info {
    border-left: 4px solid var(--primary);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.notification-close {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.notification-close:hover {
    background: #f0f0f0;
}
```

#### **B. JavaScript untuk Notifikasi**

```javascript
// Di script.js
function showNotification(message, type = 'info', duration = 5000) {
    // Hapus notifikasi yang ada
    let existingNotif = document.querySelector('.notification');
    if (existingNotif) existingNotif.remove();
    
    // Buat notifikasi baru
    let notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = type === 'success' ? '✅' : 
               type === 'error' ? '❌' : 'ℹ️';
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icon}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                ×
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto hide setelah duration
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

// Gunakan di form
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validasi
    if (!nama || !email || !pesan) {
        showNotification('Harap isi semua field yang wajib!', 'error');
        return;
    }
    
    // Sukses
    showNotification('Pesan berhasil dikirim!', 'success');
});
```

### **6.4 Back to Top Button**

**Tujuan:**
- Memudahkan navigasi di halaman panjang
- Meningkatkan user experience
- Memberikan akses cepat ke atas

**Penjelasan:**

Back to Top adalah tombol yang muncul saat user scroll ke bawah, dan ketika diklik akan membawa user kembali ke atas halaman.

#### **A. CSS untuk Back to Top**

```css
/* Tambahkan di style.css */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-base);
    z-index: 99;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

.back-to-top:hover {
    background: var(--secondary);
    transform: scale(1.1) rotate(360deg);
}

.back-to-top.show {
    display: flex;
}

@media (max-width: 768px) {
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
}
```

#### **B. JavaScript untuk Back to Top**

```javascript
// Di script.js
function setupBackToTop() {
    // Buat tombol
    let backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    
    document.body.appendChild(backToTop);
    
    // Tampilkan/sembunyikan berdasarkan scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Scroll ke atas saat diklik
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Panggil di DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    setupBackToTop();
});
```

### **6.5 Scroll Animations**

**Tujuan:**
- Membuat elemen muncul perlahan saat discroll
- Menambah dinamika website
- Meningkatkan engagement user

**Penjelasan:**

Scroll animation adalah efek di mana elemen-elemen muncul dengan animasi saat user scroll ke posisi elemen tersebut.

#### **A. CSS untuk Scroll Animation**

```css
/* Tambahkan di style.css */
.scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.scroll-animate.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Delay untuk efek bertahap */
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }
.delay-5 { transition-delay: 0.5s; }
```

#### **B. JavaScript untuk Scroll Animation**

```javascript
// Di script.js
function setupScrollAnimation() {
    let observerOptions = {
        threshold: 0.1,  // 10% elemen terlihat
        rootMargin: '0px 0px -50px 0px'  // offset
    };
    
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Opsional: stop observing setelah terlihat
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observasi elemen-elemen yang ingin dianimasi
    document.querySelectorAll('.card, .portfolio-item, .skill-tag, .timeline-item')
        .forEach(el => {
            el.classList.add('scroll-animate');
            observer.observe(el);
        });
}

// Atau dengan cara sederhana (tanpa Intersection Observer)
function simpleScrollAnimation() {
    let elements = document.querySelectorAll('.card, .portfolio-item');
    
    window.addEventListener('scroll', () => {
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            let windowHeight = window.innerHeight;
            
            // Jika elemen masuk viewport
            if (rect.top < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });
}
```

### **6.6 Loading Spinner**

**Tujuan:**
- Memberi tahu user bahwa ada proses berjalan
- Mencegah user melakukan aksi berulang
- Meningkatkan perceived performance

**Penjelasan:**

Loading spinner adalah animasi yang muncul saat website sedang memuat data atau memproses sesuatu.

#### **A. CSS untuk Loading Spinner**

```css
/* Tambahkan di style.css */
.loading-spinner {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid rgba(102, 126, 234, 0.2);
    border-top: 4px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.loading-spinner.small {
    width: 20px;
    height: 20px;
    border-width: 2px;
}

.loading-spinner.large {
    width: 60px;
    height: 60px;
    border-width: 6px;
}

/* Overlay loading */
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
}

.loading-overlay.show {
    opacity: 1;
    visibility: visible;
}
```

#### **B. JavaScript untuk Loading Spinner**

```javascript
// Di script.js
function showLoading() {
    let overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = '<div class="loading-spinner large"></div>';
    document.body.appendChild(overlay);
    
    // Trigger reflow
    overlay.offsetHeight;
    overlay.classList.add('show');
    
    return overlay;
}

function hideLoading(overlay) {
    overlay.classList.remove('show');
    setTimeout(() => {
        overlay.remove();
    }, 300);
}

// Gunakan saat fetch data
async function fetchData() {
    let loading = showLoading();
    
    try {
        let response = await fetch('api/data');
        let data = await response.json();
        hideLoading(loading);
        return data;
    } catch (error) {
        hideLoading(loading);
        showNotification('Gagal mengambil data', 'error');
    }
}
```

### **6.7 Validasi Form**

**Tujuan:**
- Memastikan input user sesuai format
- Mencegah error saat pengiriman
- Memberikan feedback real-time

**Penjelasan:**

Validasi form adalah proses memeriksa apakah data yang diinput user sudah benar sebelum dikirim ke server.

#### **A. HTML untuk Form**

```html
<form id="contactForm" novalidate>
    <div class="form-group">
        <label for="nama">Nama Lengkap *</label>
        <input type="text" id="nama" name="nama" 
               placeholder="Masukkan nama Anda"
               required>
        <span class="error-message" id="namaError"></span>
    </div>
    
    <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" 
               placeholder="nama@email.com"
               required>
        <span class="error-message" id="emailError"></span>
    </div>
    
    <div class="form-group">
        <label for="pesan">Pesan *</label>
        <textarea id="pesan" name="pesan" rows="5" 
                  placeholder="Tulis pesan Anda..."
                  required minlength="10"></textarea>
        <span class="error-message" id="pesanError"></span>
    </div>
    
    <button type="submit" class="btn btn-submit">Kirim Pesan</button>
</form>
```

#### **B. CSS untuk Validasi**

```css
/* Tambahkan di style.css */
.form-group {
    margin-bottom: 20px;
    position: relative;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e2e8f0;
    border-radius: var(--radius-md);
    font-size: 1rem;
    transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group input.error,
.form-group textarea.error {
    border-color: var(--error);
}

.form-group input.valid,
.form-group textarea.valid {
    border-color: var(--success);
}

.error-message {
    color: var(--error);
    font-size: 0.85rem;
    margin-top: 5px;
    display: block;
    min-height: 20px;
}

.success-message {
    color: var(--success);
    font-size: 0.9rem;
    text-align: center;
    padding: 10px;
    background: rgba(72, 187, 120, 0.1);
    border-radius: var(--radius-md);
    margin-top: 15px;
}
```

#### **C. JavaScript untuk Validasi**

```javascript
// Di script.js
function setupFormValidation() {
    let form = document.getElementById('contactForm');
    if (!form) return;
    
    let inputs = {
        nama: document.getElementById('nama'),
        email: document.getElementById('email'),
        pesan: document.getElementById('pesan')
    };
    
    let errors = {
        nama: document.getElementById('namaError'),
        email: document.getElementById('emailError'),
        pesan: document.getElementById('pesanError')
    };
    
    // Validasi real-time
    inputs.nama.addEventListener('input', () => validateNama());
    inputs.email.addEventListener('input', () => validateEmail());
    inputs.pesan.addEventListener('input', () => validatePesan());
    
    // Fungsi validasi
    function validateNama() {
        let value = inputs.nama.value.trim();
        if (!value) {
            showError('nama', 'Nama tidak boleh kosong');
            return false;
        }
        if (value.length < 3) {
            showError('nama', 'Nama minimal 3 karakter');
            return false;
        }
        clearError('nama');
        return true;
    }
    
    function validateEmail() {
        let value = inputs.email.value.trim();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!value) {
            showError('email', 'Email tidak boleh kosong');
            return false;
        }
        if (!emailRegex.test(value)) {
            showError('email', 'Format email tidak valid');
            return false;
        }
        clearError('email');
        return true;
    }
    
    function validatePesan() {
        let value = inputs.pesan.value.trim();
        if (!value) {
            showError('pesan', 'Pesan tidak boleh kosong');
            return false;
        }
        if (value.length < 10) {
            showError('pesan', 'Pesan minimal 10 karakter');
            return false;
        }
        clearError('pesan');
        return true;
    }
    
    function showError(field, message) {
        inputs[field].classList.add('error');
        inputs[field].classList.remove('valid');
        errors[field].textContent = message;
    }
    
    function clearError(field) {
        inputs[field].classList.remove('error');
        inputs[field].classList.add('valid');
        errors[field].textContent = '';
    }
    
    // Submit form
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validasi semua field
        let isNamaValid = validateNama();
        let isEmailValid = validateEmail();
        let isPesanValid = validatePesan();
        
        if (!isNamaValid || !isEmailValid || !isPesanValid) {
            showNotification('Harap periksa kembali form Anda', 'error');
            return;
        }
        
        // Disable button
        let submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Mengirim...';
        
        try {
            // Simulasi pengiriman
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            showNotification('Pesan berhasil dikirim!', 'success');
            form.reset();
            
            // Reset validasi
            Object.keys(inputs).forEach(key => {
                inputs[key].classList.remove('valid');
            });
            
        } catch (error) {
            showNotification('Gagal mengirim pesan', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Kirim Pesan';
        }
    });
}
```

### **6.8 Dark Mode**

**Tujuan:**
- Memberikan opsi tampilan gelap
- Mengurangi ketegangan mata
- Menghemat baterai (pada layar OLED)

**Penjelasan:**

Dark mode adalah alternatif tampilan dengan warna gelap yang lebih nyaman di mata, terutama di ruangan gelap.

#### **A. CSS untuk Dark Mode**

```css
/* Tambahkan di style.css */
:root {
    /* Light mode variables */
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #2d3748;
    --text-secondary: #718096;
    --border-color: #e2e8f0;
}

/* Dark mode variables */
.dark-mode {
    --bg-primary: #1a202c;
    --bg-secondary: #2d3748;
    --text-primary: #f7fafc;
    --text-secondary: #cbd5e0;
    --border-color: #4a5568;
}

/* Apply variables */
body {
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s, color 0.3s;
}

.container {
    background: var(--bg-primary);
}

.card {
    background: var(--bg-secondary);
    border-color: var(--border-color);
}

nav {
    background: var(--bg-secondary);
}

nav a {
    color: var(--text-primary);
}

footer {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    border-color: var(--border-color);
}

/* Dark mode toggle button */
.dark-mode-toggle {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-base);
}

.dark-mode-toggle:hover {
    transform: scale(1.1) rotate(180deg);
}
```

#### **B. JavaScript untuk Dark Mode**

```javascript
// Di script.js
function setupDarkMode() {
    // Buat tombol toggle
    let toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.innerHTML = '🌙';  // Moon icon
    toggle.setAttribute('aria-label', 'Toggle dark mode');
    
    document.body.appendChild(toggle);
    
    // Cek preferensi user
    let prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '☀️';  // Sun icon
    }
    
    // Toggle dark mode
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggle.innerHTML = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            toggle.innerHTML = '🌙';
        }
    });
    
    // Responsive position
    function updatePosition() {
        if (window.innerWidth <= 768) {
            toggle.style.bottom = '20px';
            toggle.style.left = '20px';
            toggle.style.width = '40px';
            toggle.style.height = '40px';
            toggle.style.fontSize = '20px';
        } else {
            toggle.style.bottom = '30px';
            toggle.style.left = '30px';
            toggle.style.width = '50px';
            toggle.style.height = '50px';
            toggle.style.fontSize = '24px';
        }
    }
    
    window.addEventListener('resize', updatePosition);
    updatePosition();
}
```

### **6.9 Rangkuman Bab 6**

**Poin-Poin Penting:**

1. **Transisi Halaman** membuat perpindahan lebih halus
2. **Notifikasi** memberikan feedback kepada user
3. **Back to Top** memudahkan navigasi
4. **Scroll Animations** menambah dinamika
5. **Loading Spinner** memberi tahu proses berjalan
6. **Validasi Form** mencegah error input
7. **Dark Mode** memberikan opsi tampilan

**Tujuan yang Tercapai:**
- ✅ Membuat transisi antar halaman yang halus
- ✅ Menambahkan sistem notifikasi
- ✅ Membuat tombol back to top
- ✅ Implementasi scroll animations
- ✅ Validasi form real-time
- ✅ Menambahkan dark mode
- ✅ Meningkatkan user experience secara keseluruhan

---

## **BAB 7: GIT DAN GITHUB**

### **7.1 Tujuan dan Fungsi Git**

**Tujuan Pembelajaran:**
- Memahami pentingnya version control
- Mengenal konsep dasar Git
- Mampu menggunakan Git untuk proyek

**Penjelasan:**

Git adalah **sistem kontrol versi** yang melacak perubahan pada file.

**Manfaat Git:**

| **Fitur** | **Penjelasan** | **Manfaat** |
|-----------|----------------|-------------|
| **Version History** | Mencatat setiap perubahan | Bisa kembali ke versi lama |
| **Branching** | Membuat cabang pengembangan | Eksperimen tanpa mengganggu utama |
| **Collaboration** | Bekerja tim | Tidak saling timpa |
| **Backup** | Menyimpan kode di cloud | Aman jika komputer rusak |
| **Documentation** | Catatan perubahan | Tahu apa yang diubah dan kapan |

### **7.2 GitHub Desktop**

**Tujuan:**
- Menggunakan Git secara visual
- Memudahkan operasi Git tanpa command line
- Mengintegrasikan dengan GitHub

**Penjelasan:**

GitHub Desktop adalah aplikasi GUI untuk Git yang memudahkan pengguna visual.

#### **A. Instalasi GitHub Desktop**

1. Download dari https://desktop.github.com/
2. Install seperti aplikasi biasa
3. Login dengan akun GitHub

#### **B. Membuat Repository Baru**

```
File → New Repository
├── Name: portofolio-afif
├── Description: Website portofolio pribadi
├── Local path: Pilih folder proyek
├── Initialize with README: ✓
└── Git ignore: None
```

#### **C. Interface GitHub Desktop**

```
┌─────────────────────────────────────────────┐
│  GitHub Desktop                              │
├─────────────────────────────────────────────┤
│  Current Repository: portofolio-afif        │
├───────────────┬─────────────────────────────┤
│  Changes (5)  │  Diff view                   │
│  ┌─────────┐  │  ┌───────────────────────┐  │
│  │index.htm│  │  │ + <h1>Afif Jauhar</h1>│  │
│  │about.htm│  │  │ - <h1>Old Title</h1>  │  │
│  │style.css│  │  └───────────────────────┘  │
│  └─────────┘  │                             │
├───────────────┴─────────────────────────────┤
│  Commit message: [.......................]  │
│  Description: [...........................] │
│           [Commit to main]                  │
└─────────────────────────────────────────────┘
```

### **7.3 Commit dan Push**

**Tujuan:**
- Menyimpan perubahan ke repository
- Mengupload kode ke GitHub
- Membuat history proyek

**Penjelasan:**

#### **A. Commit (Menyimpan Perubahan)**

```bash
# Di GitHub Desktop:
1. Lihat file yang berubah di tab "Changes"
2. Centang file yang ingin di-commit
3. Isi Summary (judul singkat)
4. Isi Description (detail perubahan)
5. Klik "Commit to main"
```

**Pesan Commit yang Baik:**
```
✅ "Menambahkan halaman tentang"
✅ "Memperbaiki bug navigasi di mobile"
✅ "Mengupdate CSS untuk responsive design"

❌ "update"
❌ "fix bug"
❌ "perubahan"
```

#### **B. Push (Upload ke GitHub)**

```bash
# Setelah commit:
1. Klik "Push origin" di bagian atas
2. Atau Repository → Push
3. Masukkan username/password jika diminta
```

#### **C. Pull (Download dari GitHub)**

```bash
# Jika bekerja tim atau dari komputer lain:
1. Klik "Fetch origin" untuk cek perubahan
2. Klik "Pull origin" untuk download
```

### **7.4 GitHub Pages**

**Tujuan:**
- Mempublikasikan website secara gratis
- Mendapatkan URL live
- Menampilkan portofolio ke publik

**Penjelasan:**

GitHub Pages adalah layanan hosting gratis dari GitHub untuk repository public.

**Penjelasan:**

GitHub Pages adalah layanan hosting gratis dari GitHub untuk repository public.

#### **A. Aktivasi GitHub Pages**

```
Langkah-langkah aktivasi:

1. Buka repository di GitHub
   https://github.com/afifjauhar/portofolio-afif

2. Klik tab "Settings"
   ┌─────────────────────────────────────┐
   │ Code  Issues  Pull requests  Settings│
   └─────────────────────────────────────┘

3. Scroll ke bawah, cari menu "Pages" di sidebar kiri
   ├── Code and automation
   ├── Security
   ├── Pages            ← Klik ini
   └── ...

4. Pada bagian "Branch":
   ├── Branch: [main] ▼
   ├── Folder: [/(root)] ▼
   └── [Save]

5. Tunggu beberapa menit, akan muncul:
   ✅ Your site is live at https://afifjauhar.github.io/portofolio-afif/
```

#### **B. Custom Domain (Opsional)**

```bash
# Jika ingin pakai domain sendiri (misal: afifjauhar.com)
1. Beli domain dari penyedia (Niagahoster, Domainesia, dll)
2. Di repository, buat file CNAME berisi domain Anda
3. Di pengaturan domain, tambahkan DNS record:
   - Type: CNAME
   - Name: www
   - Value: afifjauhar.github.io
4. Tunggu propagasi DNS (1-24 jam)
```

#### **C. Tips GitHub Pages**

```markdown
# Tips Penting:

1. **Repository harus PUBLIC** untuk GitHub Pages gratis
2. **File utama harus index.html** (bukan home.html atau lainnya)
3. **Path case sensitive** - perhatikan huruf besar/kecil
4. **Butuh waktu** 1-5 menit untuk first deploy
5. **Cache browser** - mungkin perlu hard refresh (Ctrl+F5)
6. **404 error** biasanya karena:
   - Belum selesai deploy (tunggu)
   - Nama file salah
   - Repository private
```

### **7.5 Workflow dengan Git**

**Tujuan:**
- Memahami alur kerja sehari-hari dengan Git
- Mengembangkan kebiasaan baik dalam version control
- Menghindari konflik dan kehilangan data

**Penjelasan:**

#### **A. Daily Workflow**

```bash
# Setiap hari kerja:
1. Buka GitHub Desktop
2. Fetch origin (cek perubahan dari tim)
3. Pull jika ada perubahan
4. Coding seperti biasa
5. Commit perubahan dengan pesan jelas
6. Push ke GitHub
```

#### **B. Workflow untuk Fitur Baru**

```bash
# Membuat fitur baru tanpa mengganggu main
1. Buat branch baru: `fitur-navbar`
2. Coding di branch tersebut
3. Commit beberapa kali
4. Push branch ke GitHub
5. Buat Pull Request untuk merge ke main
6. Setelah disetujui, merge
7. Hapus branch jika sudah tidak diperlukan
```

#### **C. Menangani Konflik**

```bash
# Jika terjadi konflik saat merge:
1. GitHub akan memberi tahu file yang konflik
2. Buka file tersebut
3. Cari tanda `<<<<<<<`, `=======`, `>>>>>>>`
4. Edit file, pilih perubahan mana yang dipertahankan
5. Hapus tanda konflik
6. Commit hasil merge
```

### **7.6 Git Commands Penting (Command Line)**

**Tujuan:**
- Mengenal perintah Git dasar
- Bisa menggunakan Git tanpa GUI
- Memahami apa yang dilakukan GitHub Desktop

**Penjelasan:**

```bash
# Konfigurasi awal
git config --global user.name "Afif Jauhar"
git config --global user.email "afif@example.com"

# Membuat repository baru
git init
git clone https://github.com/afifjauhar/portofolio-afif.git

# Melihat status
git status
git log
git log --oneline

# Menambah dan commit
git add index.html
git add .  # tambah semua file
git commit -m "Pesan commit"
git commit -am "Pesan"  # add + commit untuk file yang sudah di-track

# Branching
git branch  # lihat semua branch
git branch fitur-baru  # buat branch baru
git checkout fitur-baru  # pindah ke branch
git checkout -b fitur-baru  # buat dan pindah sekaligus
git merge fitur-baru  # merge ke branch aktif

# Remote
git remote add origin https://github.com/afifjauhar/portofolio-afif.git
git push -u origin main  # push pertama
git push  # push selanjutnya
git pull  # download perubahan

# Reset dan revert
git reset HEAD index.html  # unstage file
git reset --hard HEAD~1  # kembali ke commit sebelumnya (HATI-HATI!)
git revert HEAD  # membuat commit baru yang membatalkan perubahan
```

### **7.7 Rangkuman Bab 7**

**Poin-Poin Penting:**

1. **Git** adalah sistem kontrol versi untuk melacak perubahan
2. **Repository** adalah tempat menyimpan proyek
3. **Commit** adalah snapshot perubahan
4. **Push** mengirim ke GitHub
5. **Pull** mengambil dari GitHub
6. **Branch** untuk pengembangan paralel
7. **Merge** menggabungkan branch
8. **GitHub Pages** untuk hosting gratis

**Tujuan yang Tercapai:**
- ✅ Memahami konsep version control
- ✅ Mampu menggunakan GitHub Desktop
- ✅ Bisa melakukan commit dan push
- ✅ Mengaktifkan GitHub Pages
- ✅ Website portofolio online di internet

---

## **BAB 8: PENUTUP**

### **8.1 Rangkuman Seluruh Materi**

**Tujuan:**
- Mereview semua yang telah dipelajari
- Menyimpulkan poin-poin penting
- Mempersiapkan langkah selanjutnya

**Penjelasan:**

#### **A. Ringkasan Per Bab**

| **Bab** | **Materi** | **Pencapaian** |
|---------|------------|----------------|
| **Bab 1** | Pengantar Web Development | Memahami cara kerja website |
| **Bab 2** | HTML Dasar | Membuat struktur halaman |
| **Bab 3** | CSS | Mendesain tampilan website |
| **Bab 4** | JavaScript | Menambah interaktivitas |
| **Bab 5** | Membuat Portofolio | 4 halaman website lengkap |
| **Bab 6** | Fitur Interaktif | Transisi, notifikasi, dark mode |
| **Bab 7** | Git & GitHub | Version control dan hosting |

#### **B. Skill yang Telah Dikuasai**

```markdown
✅ HTML5
   - Semantic tags
   - Form dan input
   - Struktur halaman

✅ CSS3
   - Selector dan property
   - Flexbox dan Grid
   - Animasi dan transition
   - Responsive design

✅ JavaScript
   - Variabel dan tipe data
   - Function dan scope
   - DOM manipulation
   - Event handling
   - Fetch API
   - Async/await

✅ Git & GitHub
   - Version control
   - Commit dan push
   - GitHub Pages
   - Repository management

✅ UI/UX
   - Desain responsif
   - User experience
   - Aksesibilitas
   - Feedback visual
```

#### **C. Website yang Telah Dibuat**

```
Website portofolio Anda memiliki:
├── 4 halaman (Home, Tentang, Portofolio, Kontak)
├── Navigasi terpisah
├── Desain responsif (HP, tablet, desktop)
├── Form kontak dengan validasi
├── Animasi dan transisi
├── Dark mode
├── Back to top button
├── Notifikasi
└── Live di GitHub Pages
```

### **8.2 Tips Belajar Lanjutan**

**Tujuan:**
- Memberikan arah untuk pengembangan lebih lanjut
- Merekomendasikan teknologi berikutnya
- Membantu perencanaan karir

**Penjelasan:**

#### **A. Roadmap Belajar Web Development**

```
Front-End Developer Roadmap
───────────────────────────
Dasar (Selesai!)
├── HTML5 ✓
├── CSS3 ✓
├── JavaScript ✓
└── Git & GitHub ✓

Lanjutan (Next)
├── Framework CSS (Tailwind, Bootstrap)
├── JavaScript Lanjutan (ES6+, OOP)
├── Package Manager (npm, yarn)
├── Build Tools (Vite, Webpack)
└── Framework JS (React, Vue, Svelte)

Back-End (Opsional)
├── Node.js / PHP / Python
├── Database (MySQL, MongoDB)
├── REST API
└── Authentication

Full-Stack
├── MERN Stack (MongoDB, Express, React, Node)
├── JAMstack (JavaScript, API, Markup)
└── Serverless
```

#### **B. Proyek Latihan Selanjutnya**

```markdown
# Proyek untuk Meningkatkan Skill

1. **Website E-commerce Sederhana**
   - Halaman produk
   - Keranjang belanja
   - Filter dan search

2. **Aplikasi Cuaca**
   - Fetch API dari layanan cuaca
   - Menampilkan data real-time
   - Geolocation

3. **Blog Pribadi**
   - Halaman posting
   - Markdown support
   - Komentar (disqus)

4. **Movie Database**
   - Search film
   - Filter kategori
   - Detail film

5. **Expense Tracker**
   - CRUD operasi
   - Grafik pengeluaran
   - Local storage
```

#### **C. Sumber Belajar Rekomendasi**

```markdown
📚 **Website**
   - MDN Web Docs (developer.mozilla.org)
   - W3Schools (w3schools.com)
   - CSS-Tricks (css-tricks.com)
   - JavaScript.info (javascript.info)
   - FreeCodeCamp (freecodecamp.org)

🎥 **YouTube (Indonesia)**
   - Web Programming UNPAS
   - Dea Afrizal
   - IDStack
   - Sekolah Koding

🎥 **YouTube (English)**
   - Traversy Media
   - The Net Ninja
   - Fireship
   - Kevin Powell (CSS)

📱 **Aplikasi**
   - Mimo (belajar coding di HP)
   - Encode
   - Grasshopper

📖 **Buku**
   - "Eloquent JavaScript" - Marijn Haverbeke
   - "You Don't Know JS" - Kyle Simpson
   - "HTML & CSS" - Jon Duckett
```

### **8.3 Troubleshooting**

**Tujuan:**
- Mengatasi masalah umum
- Belajar debugging
- Mencari solusi mandiri

**Penjelasan:**

#### **A. Masalah Umum dan Solusi**

| **Masalah** | **Penyebab** | **Solusi** |
|-------------|--------------|------------|
| **CSS tidak muncul** | Path salah, nama file salah | Cek link di HTML, cek nama file |
| **JavaScript error** | Syntax error, elemen belum ada | Buka Console (F12), cek error |
| **Gambar tidak tampil** | Path salah, nama file salah | Cek folder images, case sensitive |
| **Form tidak jalan** | ID salah, preventDefault lupa | Cek ID di JS, cek console |
| **Navigasi tidak muncul** | File navigation.html hilang | Cek fetch URL, cek file ada |
| **Website 404 di GitHub** | Belum deploy, nama file salah | Tunggu 5 menit, cek ada index.html |
| **Responsive tidak jalan** | Lupa meta viewport | Tambah `<meta viewport>` |
| **Animasi tidak jalan** | Syntax CSS salah | Cek di Chrome DevTools |

#### **B. Cara Debugging Efektif**

```javascript
// 1. Gunakan console.log
console.log('Sampai sini');  // Cek apakah kode jalan
console.log('Data:', data);  // Lihat isi data
console.log(typeof data);    // Cek tipe data

// 2. Gunakan debugger
debugger;  // Kode akan berhenti di sini

// 3. Cek di Chrome DevTools
// - Elements: lihat HTML dan CSS
// - Console: lihat error dan log
// - Network: lihat request dan response
// - Sources: debugging step by step
// - Application: lihat storage, cookies

// 4. Error handling
try {
    // Kode yang mungkin error
} catch (error) {
    console.error('Error detail:', error);
    showNotification('Terjadi error', 'error');
}
```

#### **C. Sumber Bantuan**

```markdown
🌐 **Website Q&A**
   - Stack Overflow (stackoverflow.com)
   - GitHub Issues
   - Reddit (r/webdev, r/learnprogramming)

💬 **Discord/Telegram**
   - Grup programmer Indonesia
   - Komunitas framework tertentu

🤖 **AI Assistant**
   - ChatGPT
   - Claude
   - GitHub Copilot

📹 **YouTube Tutorial**
   - Cari solusi spesifik
   - Video step-by-step
```

### **8.4 Glosarium**

**Tujuan:**
- Memahami istilah-istilah teknis
- Referensi cepat
- Memudahkan komunikasi

**Penjelasan:**

#### **A. Istilah Umum**

| **Istilah** | **Arti** | **Contoh** |
|-------------|----------|------------|
| **API** | Application Programming Interface | fetch('api/data') |
| **Array** | Kumpulan data berurutan | [1, 2, 3] |
| **Async** | Asynchronous (tidak berurutan) | async function, await |
| **Attribute** | Properti HTML | `class="nav"` |
| **Branch** | Cabang Git | main, develop, fitur |
| **Browser** | Program untuk browsing | Chrome, Firefox |
| **Callback** | Fungsi yang dipanggil nanti | setTimeout(callback, 1000) |
| **Class** | CSS selector untuk grup | .card { } |
| **Client** | Sisi pengguna (browser) | Front-end |
| **Commit** | Simpan perubahan di Git | git commit -m "pesan" |
| **CSS** | Cascading Style Sheets | Styling website |
| **Debugging** | Mencari dan memperbaiki error | console.log, debugger |
| **Deploy** | Mempublikasikan website | GitHub Pages |
| **Div** | Tag HTML untuk pembungkus | `<div>...</div>` |
| **DOM** | Document Object Model | document.getElementById |
| **Event** | Aksi user | click, submit, scroll |
| **Fetch** | Mengambil data dari server | fetch('url') |
| **Flexbox** | Layout 1 dimensi | display: flex |
| **Function** | Blok kode yang bisa dipanggil | function sapa() {} |
| **Git** | Version control system | Git, GitHub |
| **Grid** | Layout 2 dimensi | display: grid |
| **HTML** | HyperText Markup Language | Struktur website |
| **HTTP** | Protocol transfer data | https://... |
| **ID** | Identitas unik | `id="header"` |
| **JavaScript** | Bahasa pemrograman | Interaktivitas |
| **JSON** | Format data | { "nama": "Afif" } |
| **Library** | Kumpulan fungsi siap pakai | jQuery, Lodash |
| **Loop** | Perulangan | for, while |
| **Method** | Fungsi dalam object | array.map() |
| **Object** | Kumpulan properti | {nama: "Afif", umur: 25} |
| **Parameter** | Input fungsi | function(a, b) |
| **Promise** | Operasi async | .then().catch() |
| **Property** | Nilai dalam object | person.nama |
| **Push** | Upload ke GitHub | git push |
| **Pull** | Download dari GitHub | git pull |
| **Repository** | Tempat penyimpanan kode | GitHub repo |
| **Responsive** | Menyesuaikan layar | Media query |
| **Selector** | Cara memilih elemen CSS | .class, #id |
| **Semantic** | Tag bermakna | `<header>`, `<nav>` |
| **Server** | Sisi backend | Node.js, PHP |
| **Tag** | Elemen HTML | `<p>`, `<div>` |
| **Variable** | Tempat menyimpan data | let nama = "Afif" |

#### **B. Istilah Khusus Proyek Ini**

| **Istilah** | **Arti dalam Proyek** |
|-------------|----------------------|
| **Navigation.html** | File terpisah berisi menu navigasi |
| **Back to Top** | Tombol untuk scroll ke atas |
| **Dark Mode** | Tampilan gelap untuk kenyamanan mata |
| **Loading Spinner** | Animasi saat loading |
| **Notifikasi** | Pesan sementara untuk feedback |
| **Transisi Halaman** | Animasi pindah halaman |
| **Validasi Form** | Pengecekan input sebelum kirim |
| **Scroll Animation** | Elemen muncul saat discroll |

### **8.5 Kesimpulan Akhir**

**Tujuan:**
- Merayakan pencapaian
- Memberikan semangat
- Menutup panduan dengan positif

**Penjelasan:**

#### **A. Pencapaian Anda**

Selamat! 🎉 Anda telah berhasil:

```markdown
✅ Memahami dasar-dasar web development
✅ Membuat website portofolio dari nol
✅ Mendesain dengan CSS modern
✅ Menambah interaktivitas dengan JavaScript
✅ Mengelola kode dengan Git
✅ Mempublikasikan website secara gratis
✅ Membuat website responsif
✅ Menambahkan fitur-fitur keren
✅ Dokumentasi proyek dengan README
✅ Menyelesaikan panduan ini
```

#### **B. Pesan Motivasi**

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║   "Perjalanan seribu mil dimulai dengan satu    ║
║                 langkah kecil"                   ║
║                                                  ║
║   Anda sudah mengambil langkah pertama itu!     ║
║                                                  ║
║   Website portofolio ini adalah bukti bahwa     ║
║   Anda bisa belajar dan menciptakan sesuatu     ║
║   yang nyata.                                    ║
║                                                  ║
║   Teruslah belajar, teruslah berkarya,          ║
║   dan jangan pernah berhenti berkembang!        ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

#### **C. Langkah Selanjutnya**

```markdown
🚀 **Jangka Pendek (1-3 bulan)**
   - Kustomisasi website dengan data diri
   - Tambah fitur baru (blog, galeri)
   - Pelajari framework CSS (Tailwind)
   - Buat project kedua yang lebih kompleks

💼 **Jangka Menengah (3-6 bulan)**
   - Pelajari JavaScript framework (React)
   - Buat portfolio lebih lengkap
   - Cari freelance kecil-kecilan
   - Ikut komunitas programmer

🎯 **Jangka Panjang (6-12 bulan)**
   - Kuasai full-stack development
   - Bangun personal brand
   - Buat produk digital sendiri
   - Berkontribusi ke open source
```

### **8.6 Ucapan Terima Kasih**

**Tujuan:**
- Mengapresiasi usaha belajar
- Menutup dengan kesan baik
- Memberikan kontak untuk bantuan

**Penjelasan:**

```markdown
╔══════════════════════════════════════════════════╗
║                                                  ║
║   TERIMA KASIH!                                  ║
║                                                  ║
║   Telah mengikuti panduan ini sampai akhir.      ║
║   Semoga ilmu yang didapat bermanfaat.          ║
║                                                  ║
║   Jangan ragu untuk:                             ║
║   • Mencoba lagi jika belum paham                ║
║   • Eksplorasi lebih dalam                       ║
║   • Berbagi ilmu dengan teman                    ║
║   • Menghubungi jika ada pertanyaan              ║
║                                                  ║
║   Tetap semangat belajar!                        ║
║                                                  ║
║   Hormat saya,                                   ║
║   Afif Jauhar                                    ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

#### **Kontak dan Sumber Daya**

```markdown
📧 **Email**: afif.jauhar@example.com
🐱 **GitHub**: github.com/afifjauhar
🌐 **Website**: afifjauhar.github.io/portofolio-afif
📱 **Instagram**: @afifjauhar
💼 **LinkedIn**: linkedin.com/in/afifjauhar

📚 **Repository Panduan Ini**
   github.com/afifjauhar/portofolio-afif

⭐ **Jangan lupa kasih bintang!** ⭐
```

---

## **LAMPIRAN**

### **Lampiran A: Cheat Sheet HTML**

```html
<!-- Dasar -->
<!DOCTYPE html>
<html>
<head><title>Title</title></head>
<body></body>
</html>

<!-- Heading -->
<h1>Heading 1</h1> sampai <h6>Heading 6</h6>

<!-- Teks -->
<p>Paragraf</p>
<strong>Tebal</strong>
<em>Miring</em>
<br>Baris baru
<hr>Garis horizontal

<!-- Link -->
<a href="url">Teks</a>
<a href="#id">Internal</a>

<!-- Gambar -->
<img src="url" alt="deskripsi">

<!-- List -->
<ul><li>List</li></ul>
<ol><li>List</li></ol>

<!-- Tabel -->
<table>
  <tr><th>Header</th></tr>
  <tr><td>Data</td></tr>
</table>

<!-- Form -->
<form>
  <input type="text">
  <textarea></textarea>
  <button>Submit</button>
</form>

<!-- Semantic -->
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>
```

### **Lampiran B: Cheat Sheet CSS**

```css
/* Selector */
* { }           /* semua */
p { }           /* tag */
.class { }      /* class */
#id { }         /* id */
nav a { }       /* nested */

/* Box Model */
margin: 10px;
padding: 10px;
border: 1px solid black;
border-radius: 5px;
width: 100px;
height: 100px;

/* Teks */
color: red;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;

/* Background */
background: blue;
background-image: url('img.jpg');
background-size: cover;

/* Layout */
display: block;
display: inline;
display: flex;
display: grid;
position: relative;
position: absolute;

/* Flexbox */
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 10px;

/* Grid */
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

/* Animasi */
transition: all 0.3s;
animation: fadeIn 1s;

/* Responsive */
@media (max-width: 768px) {
  /* rules */
}
```

### **Lampiran C: Cheat Sheet JavaScript**

```javascript
// Variabel
let nama = "Afif";
const umur = 25;

// Tipe data
string, number, boolean, null, undefined, object

// Function
function sapa() { }
const sapa = () => { }

// Conditional
if (kondisi) { } else { }
switch (nilai) { }
ternary = kondisi ? true : false;

// Loop
for (let i=0; i<10; i++) { }
while (kondisi) { }
array.forEach(item => { })

// Array
array.push(), pop(), shift(), unshift()
array.map(), filter(), reduce()
array.find(), includes(), indexOf()

// Object
object.key
object['key']
Object.keys(), Object.values()

// DOM
document.getElementById()
document.querySelector()
element.innerHTML
element.classList.add()
element.addEventListener()

// Event
click, submit, scroll, mouseenter
input, change, focus, blur

// Fetch
fetch('url')
  .then(res => res.json())
  .then(data => console.log(data))

// Async
async function getData() {
  try {
    let res = await fetch('url');
    let data = await res.json();
  } catch (error) {
    console.log(error);
  }
}
```

### **Lampiran D: Cheat Sheet Git**

```bash
# Konfigurasi
git config --global user.name "Nama"
git config --global user.email "email"

# Mulai
git init
git clone url

# Perubahan
git status
git add file
git add .
git commit -m "pesan"

# Branch
git branch
git branch baru
git checkout branch
git checkout -b baru
git merge branch

# Remote
git remote add origin url
git push -u origin main
git push
git pull
git fetch

# History
git log
git log --oneline
git diff

# Reset
git reset HEAD file
git reset --hard HEAD~1
git revert HEAD
```

---

## **PENUTUP**

Terima kasih telah mengikuti panduan lengkap ini. Semoga bermanfaat untuk perjalanan Anda dalam dunia web development.

**Ingatlah selalu:**

- 🔥 **Konsistensi** lebih penting dari intensitas
- 💡 **Praktik** lebih baik dari hanya teori
- 🚀 **Proyek nyata** adalah guru terbaik
- 🤝 **Berbagi ilmu** membuat kita semakin paham
- 🌟 **Terus belajar** karena teknologi selalu berkembang

---

**Selamat berkarya!** 🎉

*Afif Jauhar*  
*Web Developer Pemula*  
*2024*

---

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║   AKHIR DARI PANDUAN                             ║
║                                                  ║
║   "The expert in anything was once a beginner"  ║
║                                                  ║
║   - Helen Hayes                                 ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```
