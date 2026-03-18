// js/script.js

// ========== 1. SMOOTH SCROLLING ==========
// Untuk navigasi internal (jika pakai anchor link)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ========== 2. FORM HANDLING ==========
// Menangani pengiriman form kontak
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data form
            const formData = {
                nama: document.getElementById('nama')?.value,
                email: document.getElementById('email')?.value,
                subjek: document.getElementById('subjek')?.value,
                pesan: document.getElementById('pesan')?.value
            };
            
            // Validasi sederhana
            if (!formData.nama || !formData.email || !formData.pesan) {
                showNotification('Harap isi semua field yang wajib!', 'error');
                return;
            }
            
            if (!isValidEmail(formData.email)) {
                showNotification('Format email tidak valid!', 'error');
                return;
            }
            
            // Simulasi pengiriman (karena belum ada backend)
            console.log('Data form:', formData);
            showNotification('Pesan Anda telah terkirim! (Demo - belum terhubung ke server)', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Validasi email
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========== 3. NOTIFICATION SYSTEM ==========
// Menampilkan notifikasi ke user
function showNotification(message, type = 'info') {
    // Hapus notifikasi yang sudah ada
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Buat elemen notifikasi
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Tambahkan style notifikasi
    const style = document.createElement('style');
    style.textContent = `
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
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-icon {
            font-size: 1.2em;
        }
        
        .notification-message {
            flex: 1;
            color: #333;
            font-size: 0.95em;
        }
        
        .notification-close {
            background: none;
            border: none;
            font-size: 1.2em;
            cursor: pointer;
            color: #999;
            padding: 0 5px;
        }
        
        .notification-close:hover {
            color: #333;
        }
        
        .notification-success {
            border-left: 4px solid #4CAF50;
        }
        
        .notification-error {
            border-left: 4px solid #f44336;
        }
        
        .notification-info {
            border-left: 4px solid #2196F3;
        }
        
        @media (max-width: 768px) {
            .notification {
                top: 10px;
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Tombol close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto close setelah 5 detik
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ========== 4. PAGE TRANSITIONS ==========
// Efek fade in saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========== 5. DYNAMIC YEAR IN FOOTER ==========
// Otomatis update tahun di copyright
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2024', year);
    }
});

// ========== 6. BACK TO TOP BUTTON ==========
// Tambahkan tombol scroll to top
document.addEventListener('DOMContentLoaded', function() {
    // Buat tombol
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Kembali ke atas');
    
    // Style tombol
    const style = document.createElement('style');
    style.textContent = `
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
            transform: translateY(-3px);
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
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(backToTop);
    
    // Tampilkan/sembunyikan tombol berdasarkan scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Fungsi scroll ke atas
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ========== 7. PORTFOLIO FILTER (OPSIONAL) ==========
// Jika ingin menambahkan filter di halaman portfolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ========== 8. LAZY LOADING IMAGES ==========
// Memuat gambar secara bertahap
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ========== 9. TYPING EFFECT (UNTUK HOME PAGE) ==========
// Efek mengetik otomatis (opsional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Contoh penggunaan (aktifkan jika ingin):
// document.addEventListener('DOMContentLoaded', function() {
//     const title = document.querySelector('h1');
//     if (title && window.location.pathname.includes('index')) {
//         const originalText = title.textContent;
//         typeWriter(title, originalText, 150);
//     }
// });