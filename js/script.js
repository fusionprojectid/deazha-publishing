// --- Kode untuk Menu Mobile (Hamburger) ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}


// --- Kode untuk Hero Slider (Swiper.js) ---
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

function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    if (themeSwitchButton) {
        themeSwitchButton.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
    localStorage.setItem('theme', theme);
}

if (currentTheme) {
    setTheme(currentTheme);
} else {
    setTheme('light'); 
}

if (themeSwitchButton) {
    themeSwitchButton.addEventListener('click', () => {
        let theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(theme);
    });
}

// --- Kode yang Menjalankan Fungsi Saat Halaman Dimuat ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNGSI UNTUK ANIMASI LAYANAN SAAT SCROLL ---
    const serviceItems = document.querySelectorAll('.service-item');
    if (serviceItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        serviceItems.forEach(item => {
            observer.observe(item);
        });
    }

    // --- FUNGSI UNTUK BUKU TERKAIT ACAK ---
    const relatedBooksGrid = document.getElementById('related-books-grid');
    if (relatedBooksGrid) {
        const allBooks = [
            { title: 'Perempuan Menembus Parlemen', imgSrc: './images/Perempuan-Menembus-Parlemen-scaled.webp', link: 'detail-perempuan-parlemen.html' },
            { title: 'Eco-Teologi: Mewujudkan Green Campus', imgSrc: './images/Eco-Teologi-Mewujudkan-Green-Campus-dan-Eco-Pesantren.webp', link: 'detail-eco-teologi.html' },
            { title: 'Antologi Cerpen When The Light Comes', imgSrc: './images/Antologi-Cerpen-When-The-Light-Comes_Deazha.webp', link: '#' },
            { title: 'OJK Malang Membangun Sinergi', imgSrc: './images/OJK-Malang-Membangun-Sinergi-Mengabdi-untuk-Negeri.webp', link: '#' },
            { title: 'Kepak Swa Bhuwana Paksa', imgSrc: './images/kepak-swa-bhuwana-paksa.webp', link: '#' },
            { title: 'Merajut Asa Wujudkan Karya', imgSrc: './images/merajut-asa.webp', link: '#' },
            { title: 'Fastaqim Maka, Istiqamahlah!', imgSrc: './images/fastaqim.webp', link: '#' },
            { title: 'Visionary Leadership', imgSrc: './images/visionary-leadership.webp', link: '#' },
            { title: 'Menyoal Problem Kesehatan Mental', imgSrc: './images/kesehatan-mental.webp', link: '#' },
            { title: 'Telusur Mitigasi Bencana KWW', imgSrc: './images/kampung-warna-warni.webp', link: '#' },
            { title: 'Jalan Teladan Perempuan Pilihan', imgSrc: './images/jalan-teladan-perempuan-pilihan.webp', link: '#' },
            { title: 'Kain Marun-marun', imgSrc: './images/kain-marun-marun.webp', link: '#' },
            { title: 'Adaptasi & Kreativitas', imgSrc: './images/adaptasi-kreativitas-um.webp', link: '#' },
            { title: 'Manajemen Mutu Madrasah', imgSrc: './images/manajemen-mutu-madrasah.webp', link: '#' },
            { title: 'Strategi Mengajar', imgSrc: './images/strategi-mengajar.webp', link: '#' },
            { title: 'Praktik Akuntansi', imgSrc: './images/praktik-akuntansi.webp', link: '#' }
        ];
        const currentBookTitleElement = document.querySelector('.product-title');
        const currentBookTitle = currentBookTitleElement ? currentBookTitleElement.textContent : '';
        const filteredBooks = allBooks.filter(book => book.title.trim() !== currentBookTitle.trim());
        for (let i = filteredBooks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredBooks[i], filteredBooks[j]] = [filteredBooks[j], filteredBooks[i]];
        }
        const randomBooks = filteredBooks.slice(0, 4);
        let relatedBooksHTML = '';
        randomBooks.forEach(book => {
            relatedBooksHTML += `
                <div class="book-card">
                    <a href="${book.link}"><img src="${book.imgSrc}" alt="Sampul buku ${book.title}"></a>
                    <h3><a href="${book.link}">${book.title}</a></h3>
                </div>
            `;
        });
        relatedBooksGrid.innerHTML = relatedBooksHTML;
    }

    // --- FUNGSI BARU UNTUK ANIMASI ANGKA (COUNTER) ---
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const animate = () => {
                            const goal = +counter.getAttribute('data-goal');
                            const value = +counter.innerText;
                            const increment = Math.max(1, Math.ceil(goal / 100)); // Kecepatan hitung

                            if (value < goal) {
                                counter.innerText = Math.min(goal, value + increment);
                                setTimeout(animate, 15); // Waktu update (ms)
                            } else {
                                // Menambahkan 'K+' khusus untuk angka 100
                                if (goal === 100) {
                                    counter.innerText = goal + 'K+';
                                } else {
                                    counter.innerText = goal;
                                }
                            }
                        };
                        animate();
                    });
                    observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan
                }
            });
        }, { threshold: 0.5 }); // Animasi berjalan saat 50% elemen terlihat

        observer.observe(statsGrid);
    }
});