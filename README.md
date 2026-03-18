## **📘 EBOOK: PANDUAN LENGKAP MEMBUAT WEBSITE PORTOFOLIO**

### *HTML, CSS, JavaScript, dan GitHub Pages*

---

**Penulis:** Afif Jauhar  
**Versi:** 1.0  
**Tahun:** 2024

---

## **📋 DAFTAR ISI**

**BAB 1: Pengantar Web Development** • 5
- 1.1 Cara Kerja Website • 6
- 1.2 Tools yang Dibutuhkan • 8
- 1.3 Struktur Proyek • 10

**BAB 2: HTML Dasar** • 12
- 2.1 Kerangka HTML • 13
- 2.2 Tag-Tag Penting • 16
- 2.3 Membuat Halaman • 20

**BAB 3: CSS untuk Tampilan** • 25
- 3.1 Selector dan Property • 26
- 3.2 Box Model • 30
- 3.3 Flexbox & Grid • 34
- 3.4 Animasi CSS • 38
- 3.5 Responsive Design • 42

**BAB 4: JavaScript Interaktif** • 46
- 4.1 Dasar JavaScript • 47
- 4.2 DOM Manipulation • 52
- 4.3 Event Handling • 56
- 4.4 Fetch API • 60
- 4.5 Validasi Form • 64

**BAB 5: Membuat Website Portofolio** • 68
- 5.1 Halaman Home • 69
- 5.2 Halaman Tentang • 73
- 5.3 Halaman Portofolio • 77
- 5.4 Halaman Kontak • 81
- 5.5 Navigasi Terpisah • 85

**BAB 6: Fitur-Fitur Keren** • 89
- 6.1 Transisi Antar Halaman • 90
- 6.2 Notifikasi • 94
- 6.3 Back to Top • 98
- 6.4 Scroll Animasi • 102
- 6.5 Loading Spinner • 106

**BAB 7: Git dan GitHub** • 110
- 7.1 Apa itu Git? • 111
- 7.2 GitHub Desktop • 114
- 7.3 Commit dan Push • 118
- 7.4 GitHub Pages • 122

**BAB 8: Glosarium dan Tips** • 126
- 8.1 Istilah-Istilah Penting • 127
- 8.2 Tips Belajar • 132
- 8.3 Sumber Belajar • 135
- 8.4 Troubleshooting • 138

---

## **BAB 1: PENGANTAR WEB DEVELOPMENT**

### **1.1 Cara Kerja Website**

Website bekerja dengan sistem **client-server**. Saat Anda membuka website di browser, terjadi proses:

```
Browser (Client)                 Server
      │                              │
      │─── Permintaan halaman ──────>│
      │                              │
      │<─── Kirim file HTML/CSS/JS ──│
      │                              │
      │  Browser merender halaman    │
      │  (menerjemahkan kode)        │
```

**Komponen Website:**
- **HTML** = Struktur (kerangka)
- **CSS** = Tampilan (desain)
- **JavaScript** = Interaksi (gerak)

### **1.2 Tools yang Dibutuhkan**

| **Tools** | **Fungsi** | **Alternatif** |
|-----------|------------|----------------|
| **VS Code** | Editor kode | Sublime, Notepad++ |
| **GitHub Desktop** | Upload website | Git CLI |
| **Chrome** | Testing browser | Firefox, Edge |
| **Chrome DevTools** | Debugging | F12 di browser |

### **1.3 Struktur Proyek**

```
portofolio-afif/
│
├── index.html          # Halaman utama
├── tentang.html        # Halaman tentang
├── portofolio.html     # Halaman karya
├── kontak.html         # Halaman kontak
├── navigation.html     # Navigasi terpisah
│
├── css/
│   └── style.css      # Semua gaya
│
└── js/
    └── script.js      # Semua interaksi
```

---

## **BAB 2: HTML DASAR**

### **2.1 Kerangka HTML**

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Konten website -->
    <script src="js/script.js"></script>
</body>
</html>
```

**Penjelasan:**
- `<!DOCTYPE>` = Memberi tahu browser versi HTML
- `<html>` = Pembungkus seluruh halaman
- `<head>` = Metadata (tidak tampil)
- `<body>` = Konten yang tampil
- `<!-- -->` = Komentar (tidak dieksekusi)

### **2.2 Tag-Tag Penting**

| **Tag** | **Fungsi** | **Contoh** |
|---------|------------|------------|
| `<h1>` | Heading utama | `<h1>Selamat Datang</h1>` |
| `<p>` | Paragraf | `<p>Ini teks paragraf</p>` |
| `<a>` | Link | `<a href="tentang.html">Tentang</a>` |
| `<img>` | Gambar | `<img src="foto.jpg">` |
| `<div>` | Pembungkus | `<div class="card">...</div>` |
| `<nav>` | Navigasi | `<nav>menu</nav>` |
| `<section>` | Bagian | `<section>konten</section>` |
| `<footer>` | Kaki halaman | `<footer>copyright</footer>` |

### **2.3 Atribut HTML**

```html
<a href="tentang.html" class="nav-link" id="link-tentang" target="_blank">
  Tentang Saya
</a>
```

- **`href`** = Tujuan link
- **`class`** = Untuk CSS (bisa dipakai banyak)
- **`id`** = Identitas unik (hanya satu)
- **`target`** = Di mana link dibuka

---

## **BAB 3: CSS UNTUK TAMPILAN**

### **3.1 Selector dan Property**

```css
/* Element selector */
p {
    color: blue;
}

/* Class selector */
.card {
    background: white;
    padding: 20px;
}

/* ID selector */
#header {
    font-size: 24px;
}

/* Nested selector */
nav a {
    text-decoration: none;
}
```

**Property Umum:**
```css
color: red;                /* Warna teks */
background: blue;          /* Warna latar */
font-size: 16px;          /* Ukuran huruf */
font-weight: bold;        /* Tebal tipis */
text-align: center;       /* Rata teks */
margin: 10px;             /* Jarak luar */
padding: 20px;            /* Jarak dalam */
border: 1px solid black;  /* Garis tepi */
border-radius: 5px;       /* Sudut melengkung */
width: 100%;              /* Lebar */
height: 50px;             /* Tinggi */
display: flex;            /* Tampilan fleksibel */
position: absolute;       /* Posisi */
```

### **3.2 Box Model**

Setiap elemen HTML adalah **kotak** yang terdiri dari:

```
┌─────────────────────────────┐
│         MARGIN              │
│  ┌───────────────────────┐  │
│  │       BORDER          │  │
│  │  ┌─────────────────┐  │  │
│  │  │    PADDING      │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENT  │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

### **3.3 Flexbox (1 Dimensi)**

```css
.container {
    display: flex;
    justify-content: center;    /* Horizontal: flex-start, center, flex-end, space-between */
    align-items: center;        /* Vertikal: flex-start, center, flex-end */
    flex-direction: row;        /* Arah: row, column */
    gap: 10px;                  /* Jarak antar item */
    flex-wrap: wrap;            /* Bungkus jika penuh */
}
```

### **3.4 Grid (2 Dimensi)**

```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* 3 kolom sama lebar */
    grid-template-columns: repeat(3, 1fr); /* Cara singkat */
    grid-template-columns: 200px 1fr 2fr; /* Kolom custom */
    gap: 20px;                   /* Jarak antar cell */
}
```

### **3.5 Animasi CSS**

```css
/* Transition (perubahan halus) */
.button {
    transition: all 0.3s ease;
}
.button:hover {
    transform: scale(1.1);
    background: blue;
}

/* Keyframes (animasi kompleks) */
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

.element {
    animation: fadeIn 1s ease-out;
}
```

### **3.6 Responsive Design**

```css
/* Default untuk desktop */
.container {
    width: 900px;
}

/* Untuk tablet */
@media (max-width: 768px) {
    .container {
        width: 100%;
        padding: 20px;
    }
}

/* Untuk HP */
@media (max-width: 480px) {
    nav {
        flex-direction: column;
    }
}
```

---

## **BAB 4: JAVASCRIPT INTERAKTIF**

### **4.1 Dasar JavaScript**

```javascript
// Variabel
let nama = "Afif";           // Bisa diubah
const umur = 25;             // Tetap
var lama = "Hindari";        // Cara lama

// Tipe data
let teks = "Hello";           // String
let angka = 100;              // Number
let boolean = true;           // Boolean
let array = [1,2,3];          // Array
let object = {nama: "Afif"};  // Object

// Function
function sapa(nama) {
    return "Halo " + nama;
}

// Arrow function (cara modern)
const sapa = (nama) => {
    return `Halo ${nama}`;
};

// Condition
if (umur > 17) {
    console.log("Dewasa");
} else {
    console.log("Anak-anak");
}

// Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

array.forEach(item => {
    console.log(item);
});
```

### **4.2 DOM Manipulation**

```javascript
// Memilih elemen
const judul = document.getElementById('judul');
const cards = document.querySelectorAll('.card');
const nav = document.querySelector('nav');

// Mengubah elemen
judul.textContent = "Judul Baru";
judul.innerHTML = "<span>HTML Baru</span>";
judul.style.color = "red";
judul.classList.add('active');
judul.classList.remove('hidden');

// Membuat elemen baru
const tombol = document.createElement('button');
tombol.textContent = "Klik Saya";
document.body.appendChild(tombol);

// Menghapus elemen
const hapus = document.querySelector('.hapus');
hapus.remove();
```

### **4.3 Event Handling**

```javascript
// Event listener
tombol.addEventListener('click', function(event) {
    console.log("Tombol diklik!");
    console.log(event.target); // Elemen yang diklik
});

// Mouse events
element.addEventListener('mouseenter', () => {});
element.addEventListener('mouseleave', () => {});
element.addEventListener('mousemove', () => {});

// Keyboard events
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log("Enter ditekan");
    }
});

// Form events
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Cegah reload
    // Proses form
});
```

### **4.4 Fetch API**

```javascript
// Mengambil file lokal
fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav').innerHTML = data;
    })
    .catch(error => {
        console.log("Error:", error);
    });

// Mengambil data dari API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
```

### **4.5 Async JavaScript**

```javascript
// setTimeout (jalan sekali)
setTimeout(() => {
    console.log("Jalan setelah 2 detik");
}, 2000);

// setInterval (jalan terus)
const interval = setInterval(() => {
    console.log("Setiap 1 detik");
}, 1000);

// Hentikan interval
clearInterval(interval);

// Promise
const janji = new Promise((resolve, reject) => {
    // Operasi async
    if (sukses) {
        resolve("Berhasil");
    } else {
        reject("Gagal");
    }
});

// Async/Await
async function getData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

---

## **BAB 5: MEMBUAT WEBSITE PORTOFOLIO**

### **5.1 Halaman Home (index.html)**

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
        <header>
            <h1>Afif Jauhar 👋</h1>
            <p class="subtitle">Web Developer Pemula</p>
        </header>
        
        <!-- Navigasi akan dimuat di sini -->
        <div id="nav-placeholder"></div>
        
        <section>
            <h2>🏠 Selamat Datang</h2>
            <div class="card">
                <p>Halo! Saya Afif Jauhar. Selamat datang di website portofolio saya.</p>
                <p>Saya sedang belajar web development dan ini adalah project pertama saya.</p>
                <a href="tentang.html" class="btn">Kenali Saya →</a>
            </div>
            
            <div class="card">
                <h3>✨ Yang Saya Pelajari</h3>
                <ul style="margin-left: 20px;">
                    <li>HTML untuk struktur website</li>
                    <li>CSS untuk desain dan animasi</li>
                    <li>JavaScript untuk interaktivitas</li>
                    <li>Git & GitHub untuk publishing</li>
                </ul>
            </div>
        </section>
        
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar. Dibuat dengan ❤️</p>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.2 Halaman Tentang (tentang.html)**

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
        <header>
            <h1>Afif Jauhar 👤</h1>
            <p class="subtitle">Kenali saya lebih dekat</p>
        </header>
        
        <div id="nav-placeholder"></div>
        
        <section>
            <h2>📋 Profil Singkat</h2>
            <div class="card">
                <p><strong>Nama:</strong> Afif Jauhar</p>
                <p><strong>Domisili:</strong> Indonesia</p>
                <p><strong>Pekerjaan:</strong> Web Developer (Pemula)</p>
                <p><strong>Minat:</strong> Web Development, Desain, Teknologi</p>
            </div>
            
            <h2>🎯 Skill yang Dipelajari</h2>
            <div class="skill-tags">
                <span class="skill-tag">HTML5</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">Git & GitHub</span>
                <span class="skill-tag">Responsive Design</span>
            </div>
            
            <h2>📚 Perjalanan Belajar</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>Mulai Belajar HTML</h4>
                    <div class="timeline-date">Januari 2024</div>
                    <p>Mempelajari struktur dasar website.</p>
                </div>
                
                <div class="timeline-item">
                    <h4>Belajar CSS</h4>
                    <div class="timeline-date">Februari 2024</div>
                    <p>Mendesain tampilan website.</p>
                </div>
                
                <div class="timeline-item">
                    <h4>JavaScript & GitHub</h4>
                    <div class="timeline-date">Maret 2024</div>
                    <p>Menambah interaktivitas dan publish website.</p>
                </div>
            </div>
        </section>
        
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar</p>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.3 Halaman Portofolio (portofolio.html)**

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
        <header>
            <h1>Portofolio Saya 💼</h1>
            <p class="subtitle">Project yang pernah saya buat</p>
        </header>
        
        <div id="nav-placeholder"></div>
        
        <section>
            <h2>🚀 Project Saya</h2>
            
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-image">📄</div>
                    <div class="portfolio-info">
                        <h3>Website Portofolio</h3>
                        <p>Website portofolio pribadi dengan HTML, CSS, dan JavaScript.</p>
                        <a href="#" class="btn btn-small">Lihat Project</a>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="portfolio-image">🎨</div>
                    <div class="portfolio-info">
                        <h3>Landing Page</h3>
                        <p>Halaman landing page sederhana untuk produk digital.</p>
                        <a href="#" class="btn btn-small">Lihat Project</a>
                    </div>
                </div>
                
                <div class="portfolio-item">
                    <div class="portfolio-image">📝</div>
                    <div class="portfolio-info">
                        <h3>Aplikasi To-Do List</h3>
                        <p>Aplikasi daftar tugas dengan JavaScript (coming soon).</p>
                        <a href="#" class="btn btn-small">Lihat Project</a>
                    </div>
                </div>
            </div>
        </section>
        
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar</p>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.4 Halaman Kontak (kontak.html)**

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
        <header>
            <h1>Hubungi Saya 📞</h1>
            <p class="subtitle">Silakan isi form di bawah</p>
        </header>
        
        <div id="nav-placeholder"></div>
        
        <section>
            <h2>📧 Kirim Pesan</h2>
            <div class="card">
                <form id="contactForm">
                    <div class="form-group">
                        <label for="nama">Nama Lengkap *</label>
                        <input type="text" id="nama" name="nama" required placeholder="Masukkan nama Anda">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email" required placeholder="email@anda.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="pesan">Pesan *</label>
                        <textarea id="pesan" name="pesan" rows="5" required placeholder="Tulis pesan Anda..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn">Kirim Pesan ✉️</button>
                </form>
            </div>
            
            <h2>📱 Media Sosial</h2>
            <div class="social-links">
                <a href="#">🐱 GitHub</a>
                <a href="#">📷 Instagram</a>
                <a href="#">💼 LinkedIn</a>
            </div>
            
            <h2>📍 Info Kontak</h2>
            <div class="card">
                <p><strong>📧 Email:</strong> afif.jauhar@example.com</p>
                <p><strong>🌐 Website:</strong> afifjauhar.github.io/portofolio</p>
                <p><strong>📍 Lokasi:</strong> Indonesia</p>
            </div>
        </section>
        
        <footer>
            <p>© <span id="tahun"></span> Afif Jauhar</p>
        </footer>
    </div>
    
    <script src="js/script.js"></script>
</body>
</html>
```

### **5.5 Navigasi Terpisah (navigation.html)**

```html
<nav>
    <a href="index.html" class="nav-home">🏠 Home</a>
    <a href="tentang.html" class="nav-tentang">👤 Tentang</a>
    <a href="portofolio.html" class="nav-portofolio">💼 Portofolio</a>
    <a href="kontak.html" class="nav-kontak">📞 Kontak</a>
</nav>
```

### **5.6 CSS Lengkap (css/style.css)**

```css
/* ========== RESET & BASE ========== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
}

body.fade-out {
    opacity: 0;
}

/* ========== CONTAINER ========== */
.container {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
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

/* ========== HEADER ========== */
header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid #667eea;
}

header h1 {
    color: #333;
    font-size: 2.5em;
    margin-bottom: 10px;
}

.subtitle {
    color: #666;
    font-size: 1.1em;
}

/* ========== NAVIGASI ========== */
nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 30px 0 20px 0;
    padding: 15px 0;
    background: #f8f9fa;
    border-radius: 50px;
}

nav a {
    color: #667eea;
    text-decoration: none;
    padding: 10px 25px;
    border-radius: 30px;
    transition: all 0.3s ease;
    font-weight: 600;
}

nav a:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
}

nav a.active {
    background: #667eea;
    color: white;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    pointer-events: none;
}

/* ========== SECTION ========== */
section {
    margin: 40px 0;
}

h2 {
    color: #667eea;
    margin-bottom: 25px;
    font-size: 2em;
    border-left: 5px solid #667eea;
    padding-left: 20px;
}

/* ========== CARD ========== */
.card {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 15px;
    margin: 20px 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    border-left: 5px solid #667eea;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateX(5px);
}

/* ========== TOMBOL ========== */
.btn {
    display: inline-block;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 30px;
    margin-top: 15px;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
    font-weight: 600;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
}

.btn-small {
    padding: 8px 20px;
    font-size: 0.9em;
}

/* ========== FORM ========== */
.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

/* ========== PORTFOLIO GRID ========== */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 30px;
}

.portfolio-item {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
}

.portfolio-item:hover {
    transform: translateY(-10px);
}

.portfolio-image {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3em;
}

.portfolio-info {
    padding: 20px;
}

/* ========== SKILL TAGS ========== */
.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 20px 0;
}

.skill-tag {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9em;
}

/* ========== TIMELINE ========== */
.timeline-item {
    margin-bottom: 20px;
    padding-left: 20px;
    border-left: 3px solid #667eea;
    position: relative;
}

.timeline-item::before {
    content: "●";
    position: absolute;
    left: -10px;
    top: 0;
    color: #667eea;
    font-size: 1.2em;
}

.timeline-date {
    color: #667eea;
    font-size: 0.9em;
    font-weight: 600;
}

/* ========== SOCIAL LINKS ========== */
.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.social-links a {
    color: #667eea;
    text-decoration: none;
    padding: 10px 25px;
    background: #f8f9fa;
    border-radius: 30px;
    transition: all 0.3s;
}

.social-links a:hover {
    background: #667eea;
    color: white;
    transform: translateY(-3px);
}

/* ========== FOOTER ========== */
footer {
    text-align: center;
    margin-top: 50px;
    padding-top: 30px;
    border-top: 2px solid #e0e0e0;
    color: #666;
}

/* ========== LOADING SPINNER ========== */
body.fade-out::after {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    z-index: 9999;
}

@keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* ========== BACK TO TOP ========== */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    transition: all 0.3s;
    z-index: 99;
}

.back-to-top:hover {
    background: #764ba2;
    transform: scale(1.1);
}

.back-to-top.show {
    display: flex;
}

/* ========== NOTIFIKASI ========== */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 350px;
    padding: 15px 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

/* ========== RESPONSIVE ========== */
@media (max-width: 768px) {
    .container {
        padding: 20px;
    }
    
    header h1 {
        font-size: 1.8em;
    }
    
    nav {
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
    }
    
    nav a {
        width: 100%;
        text-align: center;
    }
    
    h2 {
        font-size: 1.5em;
    }
    
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .social-links {
        flex-direction: column;
        align-items: center;
    }
    
    .social-links a {
        width: 100%;
        text-align: center;
    }
    
    .back-to-top {
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
}
```

### **5.7 JavaScript Lengkap (js/script.js)**

```javascript
// ========== MEMUAT NAVIGASI ==========
fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        
        // Tandai menu aktif sesuai halaman
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (currentPage === 'index.html') {
            document.querySelector('.nav-home')?.classList.add('active');
        } else if (currentPage === 'tentang.html') {
            document.querySelector('.nav-tentang')?.classList.add('active');
        } else if (currentPage === 'portofolio.html') {
            document.querySelector('.nav-portofolio')?.classList.add('active');
        } else if (currentPage === 'kontak.html') {
            document.querySelector('.nav-kontak')?.classList.add('active');
        }
    });

// ========== TRANSISI HALAMAN ==========
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
});

// ========== TAHUN OTOMATIS ==========
document.addEventListener('DOMContentLoaded', function() {
    const tahunElement = document.getElementById('tahun');
    if (tahunElement) {
        tahunElement.textContent = new Date().getFullYear();
    }
});

// ========== FORM HANDLING ==========
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama')?.value;
            const email = document.getElementById('email')?.value;
            const pesan = document.getElementById('pesan')?.value;
            
            if (!nama || !email || !pesan) {
                showNotification('Harap isi semua field yang wajib!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Format email tidak valid!', 'error');
                return;
            }
            
            showNotification('Pesan Anda telah terkirim! (Demo)', 'success');
            contactForm.reset();
        });
    }
});

// ========== VALIDASI EMAIL ==========
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========== NOTIFIKASI ==========
function showNotification(message, type = 'info') {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) existingNotif.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2em;">${icon}</span>
            <span style="flex: 1;">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background:none; border:none; font-size:1.2em; cursor:pointer;">×</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 5000);
}

// ========== BACK TO TOP ==========
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ========== SCROLL ANIMATION ==========
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .portfolio-item, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
```

---

## **BAB 6: GIT DAN GITHUB**

### **6.1 Apa itu Git?**

Git adalah **sistem kontrol versi**. Fungsinya:

- 📝 Mencatat setiap perubahan kode
- 🔄 Bisa kembali ke versi sebelumnya
- 👥 Kolaborasi dengan tim
- ☁️ Backup kode di cloud

### **6.2 GitHub Desktop (Visual)**

**Langkah-langkah:**

1. **Buat Repository Baru**
   ```
   File → New Repository
   Nama: portofolio-afif
   Lokasi: Pilih folder proyek
   ```

2. **Commit Perubahan**
   ```
   - Tulis Summary (misal: "Membuat halaman home")
   - Klik "Commit to main"
   ```

3. **Push ke GitHub**
   ```
   - Klik "Publish repository"
   - Pilih "Public"
   - Klik "Publish"
   ```

### **6.3 GitHub Pages (Hosting Gratis)**

**Cara aktivasi:**
1. Push kode ke repository **Public**
2. Buka **Settings** → **Pages**
3. Pilih branch **main** dan folder **/root**
4. Klik **Save**
5. Tunggu 2-3 menit

**Website Anda akan live di:**
```
https://afifjauhar.github.io/portofolio-afif/
```

---

## **BAB 7: TROUBLESHOOTING**

### **Masalah Umum dan Solusinya**

| **Masalah** | **Solusi** |
|-------------|------------|
| CSS tidak muncul | Cek nama file, path, link di HTML |
| JavaScript error | Buka Console (F12) lihat pesan error |
| Gambar tidak tampil | Cek nama file dan folder |
| Navigasi tidak muncul | Cek file navigation.html ada |
| Form tidak jalan | Cek ID form di HTML dan JavaScript |
| Website 404 di GitHub | Tunggu 5-10 menit, cek repository Public |

---

## **BAB 8: PENUTUP**

### **Yang Sudah Anda Pelajari:**

✅ Membuat struktur HTML untuk 4 halaman  
✅ Mendesain dengan CSS (layout, warna, animasi)  
✅ Menambah interaktivitas dengan JavaScript  
✅ Membuat navigasi terpisah yang reusable  
✅ Menambah efek transisi antar halaman  
✅ Validasi form kontak  
✅ Back to top button  
✅ Scroll animations  
✅ Publish website dengan GitHub Pages  

### **Langkah Selanjutnya:**

1. **Kustomisasi** - Ganti semua konten dengan data diri Anda
2. **Tambah fitur** - Dark mode, blog, galeri foto
3. **Belajar lebih lanjut** - Framework JavaScript (React, Vue)
4. **Buat project lain** - Website toko, aplikasi cuaca, dll

### **Sumber Belajar:**

- 🌐 W3Schools - www.w3schools.com
- 🌐 MDN Web Docs - developer.mozilla.org
- 🌐 FreeCodeCamp - www.freecodecamp.org
- 📺 Web Programming UNPAS (YouTube)
- 📺 Dea Afrizal (YouTube)

---

## **Terima Kasih!**

Terima kasih telah mengikuti panduan ini. Semoga bermanfaat untuk pembelajaran web development Anda.

**Afif Jauhar**  
*Web Developer Pemula*

---

*Ebook ini dibuat sebagai media pembelajaran. Silakan disebarluaskan untuk kepentingan pendidikan.*

**📧 Kontak:** afif.jauhar@example.com  
**🌐 Website:** https://afifjauhar.github.io/portofolio-afif  
**📅 Versi:** 1.0 - 2024
