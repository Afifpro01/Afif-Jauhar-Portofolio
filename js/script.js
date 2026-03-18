// js/script.js

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
    notification.innerHTML = `
        <div class="notification-content">
            <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="background:none;border:none;font-size:1.2em;cursor:pointer;">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 5000);
}

// ========== BACK TO TOP BUTTON ==========
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});