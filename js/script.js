// js/script.js

// ========== TRANSISI HALAMAN ==========
document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua link navigasi
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Cegah pindah halaman langsung
            e.preventDefault();
            
            // Ambil URL halaman tujuan
            const href = this.getAttribute('href');
            
            // Tambah class fade-out ke body
            document.body.classList.add('fade-out');
            
            // Ubah judul tab
            const pageName = href.replace('.html', '');
            document.title = `Loading ${pageName}... - Afif Jauhar`;
            
            // Tunggu animasi selesai, baru pindah halaman
            setTimeout(() => {
                window.location.href = href;
            }, 400); // 0.4 detik
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
            
            // Animasi tombol saat diklik
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                submitBtn.style.transform = 'scale(1)';
            }, 200);
            
            if (!nama || !email || !pesan) {
                showNotification('Harap isi semua field yang wajib!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Format email tidak valid!', 'error');
                return;
            }
            
            showNotification('Pesan Anda telah terkirim! (Demo - belum terhubung ke server)', 'success');
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
                    style="background:none; border:none; font-size:1.2em; cursor:pointer; 
                           width:30px; height:30px; border-radius:50%; 
                           transition: all 0.3s;"
                    onmouseover="this.style.background='#f0f0f0'"
                    onmouseout="this.style.background='none'">
                ×
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Tambah keyframes untuk slideOut
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== BACK TO TOP BUTTON ==========
document.addEventListener('DOMContentLoaded', function() {
    // Buat tombol back to top
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    
    document.body.appendChild(backToTop);
    
    // Tampilkan/sembunyikan tombol berdasarkan scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Fungsi scroll ke atas dengan animasi halus
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ========== SMOOTH SCROLL UNTUK ANCHOR LINK ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== ANIMASI SCROLL ==========
// Efek muncul saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observasi semua card dan portfolio item
document.querySelectorAll('.card, .portfolio-item, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========== PREVENT DOUBLE CLICK ==========
// Mencegah double klik pada link navigasi
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('dblclick', function(e) {
        e.preventDefault();
    });
});

// ========== PAGE LOAD ANIMATION ==========
// Hilangkan fade-out class setelah halaman dimuat
window.addEventListener('load', function() {
    document.body.classList.remove('fade-out');
    
    // Ubah judul kembali normal
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '');
    document.title = `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} - Afif Jauhar`;
});