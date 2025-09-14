// --- Kode untuk Menu Mobile (Hamburger) ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});


// --- Kode untuk Hero Slider (Swiper.js) ---
// Pastikan elemen .hero-slider ada di halaman sebelum menjalankan
if (document.querySelector('.hero-slider')) {
    const swiper = new Swiper('.hero-slider', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


// --- Kode untuk Dark/Light Mode Switcher ---
const themeSwitchButton = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme');

// Fungsi untuk menerapkan tema
function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    // Pastikan tombol switch ada sebelum mengubah isinya
    if (themeSwitchButton) {
        themeSwitchButton.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
    localStorage.setItem('theme', theme);
}

// Terapkan tema yang tersimpan saat halaman dimuat
if (currentTheme) {
    setTheme(currentTheme);
} else {
    // Set tema default jika tidak ada yang tersimpan
    setTheme('light'); 
}

// Event listener untuk tombol switch
if (themeSwitchButton) {
    themeSwitchButton.addEventListener('click', () => {
        let theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(theme);
    });
}