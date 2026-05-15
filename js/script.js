// --- Kode untuk Menu Mobile (Hamburger) ---
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('nav-active');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}


// --- Kode untuk Hero Slider (Swiper.js) ---
if (document.querySelector('.hero-slider')) {
    new Swiper('.hero-slider', {
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

// --- Kode untuk Pilihan Bahasa Indonesia/Inggris ---
let activeLanguage = localStorage.getItem('language') || 'id';
const originalTextNodes = new WeakMap();

const textTranslations = {
    'Home': 'Home',
    'Katalog': 'Catalog',
    'Profil': 'Profile',
    'Hubungi Kami': 'Contact Us',
    'Blog': 'Blog',
    'Layanan': 'Services',
    'Semua': 'All',
    'Pesan Buku Ini': 'Order This Book',
    'Konsultasi via WhatsApp': 'Consult via WhatsApp',
    'Layanan Penerbitan': 'Publishing Services',
    'Kami membantu proses penerbitan dan publikasi dari ide awal hingga karya siap dibaca.': 'We help with publishing and publication from the first idea until the work is ready to read.',
    'Layout & Desain Cover': 'Layout & Cover Design',
    'Event Organizer': 'Event Organizer',
    'Konsultasi Publikasi': 'Publication Consulting',
    'Siap menerbitkan karya?': 'Ready to publish your work?',
    'Kirimkan kebutuhan Anda dan tim Deazha akan membantu membaca langkah terbaiknya.': 'Send us your needs and the Deazha team will help identify the best next step.',
    'Pendampingan naskah, ISBN, desain, layout, cetak, dan publikasi buku.': 'Manuscript assistance, ISBN, design, layout, printing, and book publication.',
    'Bantuan penulisan biografi, profil lembaga, buku inspiratif, dan dokumentasi program.': 'Writing assistance for biographies, institutional profiles, inspirational books, and program documentation.',
    'Pengemasan visual buku agar rapi, nyaman dibaca, dan siap naik cetak.': 'Visual book preparation so it is tidy, comfortable to read, and ready for print.',
    'Produksi media publikasi untuk sekolah, instansi, komunitas, dan perusahaan.': 'Publication media production for schools, institutions, communities, and companies.',
    'Peluncuran buku, bedah buku, webinar literasi, dan program branding kelembagaan.': 'Book launches, book discussions, literacy webinars, and institutional branding programs.',
    'Konsultasi konsep, target pembaca, strategi konten, dan rencana penerbitan.': 'Consulting on concepts, target readers, content strategy, and publishing plans.',
    'Katalog Buku': 'Book Catalog',
    'Lihat Detail Buku': 'View Book Details',
    'Baca Selengkapnya': 'Read More',
    'Lanjut Baca': 'Read More',
    'New Release': 'New Release',
    'Featured Book': 'Featured Book',
    'Detail Buku': 'Book Details',
    'Deskripsi Lengkap': 'Full Description',
    'Buku Terkait': 'Related Books',
    'Buku': 'Books',
    'Alamat': 'Address',
    'WhatsApp': 'WhatsApp',
    'Whatsapp': 'WhatsApp',
    'Email': 'Email',
    'Sumber:': 'Source:',
    'Tips & Trik': 'Tips & Tricks',
    'Berita': 'News',
    'Kemitraan': 'Partnership',
    'Tokoh Inspiratif': 'Inspiring Figure',
    'Riset & Pendidikan': 'Research & Education',
    'Literasi Media': 'Media Literacy',
    'Tentang Deazha Publishing': 'About Deazha Publishing',
    'Tentang Kami': 'About Us',
    'Informasi Kontak': 'Contact Information',
    'Kirim Pesan': 'Send Message',
    'Nama Lengkap': 'Full Name',
    'Alamat Email': 'Email Address',
    'Subjek': 'Subject',
    'Pesan Anda': 'Your Message',
    'Lokasi Kami': 'Our Location',
    'Penerbitan Buku': 'Book Publishing',
    'Penulisan Buku': 'Book Writing',
    'Majalah & Koran': 'Magazines & Newspapers',
    'Promo & Resensi': 'Promotion & Reviews',
    'Dapatkan Layanan Paling Lengkap': 'Get Complete Publishing Services',
    'Filter katalog buku': 'Book catalog filter',
    'tentang': 'about',
    'Kumpulan artikel, tips, dan wawasan terbaru dari dunia literasi dan penerbitan.': 'Articles, tips, and fresh insights from literacy and publishing.',
    'Berikut adalah karya tulis yang terbit melalui Deazha Prima Nusantara.': 'Published works from Deazha Prima Nusantara.',
    'Telah berkecimpung dalam dunia penulisan dan penerbitan buku, inilah beberapa rilisan Deazha Prima Nusantara.': 'Explore selected books published through Deazha Prima Nusantara.',
    'Strategi cegah bullying sejak dini untuk sekolah, guru, dan orang tua.': 'Early bullying prevention strategies for schools, teachers, and parents.',
    'Kisah dan strategi para guru dalam mendampingi anak-anak belajar.': 'Stories and strategies from teachers in guiding children to learn.',
    'Buku cerita bergambar berbahasa Jawa untuk mengenalkan kebiasaan baik.': 'A Javanese illustrated storybook that introduces good everyday habits.',
    'Creative Publishing & Event Partner yang berfokus pada layanan penerbitan buku, event organizer, dan jasa konsultasi.': 'A creative publishing and event partner focused on book publishing, event organizing, and consulting services.',
    'Memberikan kemudahan bagi Anda untuk menerbitkan buku, mulai dari penyusunan naskah, penulisan, desain cover, layout, ilustrasi, pengurusan ISBN, hingga cetak.': 'We make book publishing easier, from manuscript preparation, writing, cover design, layout, illustration, ISBN processing, to printing.',
    'Memberikan kemudahan dalam proses penerbitan buku. Mulai dari penyusunan, penulisan, desain sampul dan tata letak, ilustrasi, pengurusan ISBN, hingga percetakan.': 'We make book publishing easier, from manuscript preparation, writing, cover design, layout, illustration, ISBN processing, to printing.',
    'Konsultasikan kebutuhan penerbitan buku, majalah, koran, dan media publikasi Anda bersama tim Deazha Prima Nusantara.': 'Discuss your book, magazine, newspaper, and publication needs with Deazha Prima Nusantara.',
    'Konsultasikan penulisan dan penerbitan buku, majalah, koran dan lainnya.': 'Consult your writing and publishing needs for books, magazines, newspapers, and more.',
    'Layanan lengkap untuk proses penerbitan buku. Mulai dari desain sampul, tata letak, pengurusan ISBN, sampai percetakan.': 'Complete support for the book publishing process, from cover design, layout, ISBN processing, to printing.',
    'Cocok bagi Anda yang ingin menerbitkan buku namun tidak memiliki waktu untuk menulis materi buku sendiri.': 'Ideal for those who want to publish a book but do not have time to write the manuscript themselves.',
    'Sekolah, instansi, ataupun perusahaan yang ingin menerbitkan koran atau majalah sebagai media promosi.': 'For schools, institutions, and companies that want to publish newspapers or magazines as promotional media.',
    'Berkolaborasi dengan Event Planner/Organizer Deazha, untuk membantu agar buku Anda lebih dikenal masyarakat.': 'Collaborate with Deazha event planners and organizers to help your book reach a wider audience.',
    'Kami siap membantu kebutuhan penerbitan, event, dan konsultasi Anda.': 'We are ready to help with your publishing, event, and consulting needs.',
    'Menerbitkan buku adalah impian banyak orang, namun prosesnya seringkali tampak rumit. Dari ide awal hingga naskah siap cetak, ada beberapa tahapan krusial yang tidak boleh dilewatkan...': 'Publishing a book is a dream for many people, but the process can feel complicated. From the first idea to a print-ready manuscript, several crucial stages should not be missed...',
    'Peluncuran buku Perempuan Inspiratif menjadi bagian dari dorongan literasi dan dokumentasi kisah perempuan teladan.': 'The launch of Perempuan Inspiratif supports literacy and documents stories of exemplary women.',
    'FIP Universitas Negeri Malang menggandeng Deazha Prima Nusantara untuk memperkuat literasi, penerbitan karya, dan branding kelembagaan.': 'FIP Universitas Negeri Malang partnered with Deazha Prima Nusantara to strengthen literacy, publishing, and institutional branding.',
    'Self-editing membantu penulis menata struktur, bahasa, alur, dan konsistensi naskah sebelum masuk ke tahap penyuntingan profesional.': 'Self-editing helps writers refine structure, language, flow, and manuscript consistency before professional editing.',
    'Target pembaca membantu penulis memilih gaya bahasa, kedalaman materi, contoh kasus, hingga arah desain buku.': 'A clear target audience helps writers choose language style, depth, examples, and the direction of book design.',
    'Tata letak yang baik membuat buku terasa rapi, nyaman dibaca, dan lebih profesional ketika sampai ke tangan pembaca.': 'Good layout makes a book feel tidy, comfortable to read, and more professional in readers hands.',
    'Kisah Prof Ilfi Nur Diana masuk dalam buku Perempuan Inspiratif yang diterbitkan Deazha Prima Nusantara.': 'Prof. Ilfi Nur Diana story is featured in Perempuan Inspiratif, published by Deazha Prima Nusantara.',
    'Riset Tarbiyatuna ini relevan dengan publikasi, branding, dan dokumentasi karya lembaga pendidikan.': 'This Tarbiyatuna research is relevant to publication, branding, and documentation for educational institutions.',
    'Ringkasan artikel akademik tentang reward guru, kinerja, dan prinsip keadilan dalam manajemen madrasah.': 'A summary of an academic article on teacher rewards, performance, and fairness in madrasah management.',
    'Perempuan strategis memiliki peran penting dalam menghadapi hoaks melalui literasi media dan kedekatan dengan komunitas.': 'Strategic women play an important role in fighting hoaxes through media literacy and community closeness.',
    'Alumni Gontor Putri menekankan pentingnya berteman dengan media yang benar agar masyarakat lebih kuat menghadapi hoaks.': 'Gontor Putri alumni emphasized the importance of engaging with reliable media so communities are stronger against hoaxes.',
    'Berpengalaman dalam dunia kepenulisan, khususnya buku dan media. Menjalankan layanan prima untuk memuaskan kebutuhan publikasi Anda.': 'Experienced in writing, especially books and media. We provide excellent service to support your publication needs.',
    'Anggota kami diisi oleh para penulis yang terampil untuk menerbitkan berbagai macam karya tulis. Berpengalaman dalam penerbitan buku dari awal sampai akhir.': 'Our team includes skilled writers who help publish many kinds of written works, with experience from the beginning to the end of the book publishing process.',
    'Penghargaan untuk penulis terbaik dalam kategori non-fiksi.': 'An award for the best author in the non-fiction category.',
    'Buku "Jalan Teladan" menjadi buku terlaris di tingkat nasional.': 'The book "Jalan Teladan" became a national bestseller.',
    'Salah satu penulis kami masuk dalam daftar penulis terlaris.': 'One of our authors was listed among bestselling writers.',
    'Penghargaan awal karir untuk kontribusi dalam literasi.': 'An early-career award for contributions to literacy.',
    'Didirikan di Malang, Deazha memulai perjalanannya dengan visi untuk memajukan literasi dan memberikan platform bagi penulis-penulis berbakat di Indonesia.': 'Founded in Malang, Deazha began with a vision to advance literacy and provide a platform for talented writers in Indonesia.',
    'Deazha Publishing Berdiri': 'Deazha Publishing Founded',
    'Rilis Buku Perdana': 'First Book Release',
    'Menerbitkan buku pertama, "Supervisi Pendidikan Islam", yang menjadi tonggak awal dalam kontribusi kami di dunia penerbitan akademik dan pendidikan.': 'Published the first book, "Supervisi Pendidikan Islam", which became an early milestone in our contribution to academic and educational publishing.',
    'Meraih Penghargaan': 'Award Recognition',
    'Mendapatkan penghargaan sebagai "Penerbit Pendatang Baru Paling Inovatif" dari Asosiasi Penerbit Regional Jawa Timur atas kontribusi kami yang signifikan.': 'Received recognition as the "Most Innovative New Publisher" from the East Java Regional Publishers Association for our significant contribution.',
    'Melebarkan Sayap': 'Expanding Our Reach',
    'Memperluas layanan dengan membuka divisi event organizer dan konsultasi, serta menjalin kemitraan strategis dengan berbagai universitas dan instansi pemerintah.': 'Expanded services by opening event organizer and consulting divisions, while building strategic partnerships with universities and government institutions.',
    'Kami siap membantu Anda dengan kebutuhan penerbitan dan layanan lainnya.': 'We are ready to help with your publishing needs and other services.',
    '5 Tahap Penting Sebelum Menerbitkan Buku Pertama Anda': '5 Important Steps Before Publishing Your First Book',
    'Pj. Wali Kota Malang Dorong Literasi dengan Buku Perempuan Inspiratif': 'Acting Mayor of Malang Encourages Literacy Through Perempuan Inspiratif',
    'Pj. Wali Kota Malang Dorong Literasi dengan Peluncuran Buku Perempuan Inspiratif': 'Acting Mayor of Malang Encourages Literacy Through the Launch of Perempuan Inspiratif',
    'Deazha Jalin Kerjasama dengan FIP UM untuk Tingkatkan Literasi': 'Deazha Partners with FIP UM to Strengthen Literacy',
    'FIP Universitas Negeri Malang Gandeng Deazha Prima Nusantara untuk Kuatkan Literasi dan Branding': 'FIP Universitas Negeri Malang Partners with Deazha Prima Nusantara to Strengthen Literacy and Branding',
    'Pentingnya Self-Editing Sebelum Naskah Dikirim': 'The Importance of Self-Editing Before Submitting a Manuscript',
    'Pentingnya Self-Editing Naskah Buku Sebelum Dikirim': 'The Importance of Self-Editing a Book Manuscript Before Submission',
    'Cara Menentukan Target Pembaca Sebelum Menulis Buku': 'How to Define Your Target Readers Before Writing a Book',
    'Mengapa Layout Buku Penting untuk Kenyamanan Membaca': 'Why Book Layout Matters for Reading Comfort',
    'Terpilih Jadi Perempuan Inspiratif 2024, Begini Kisah Prof Ilfi Nur Diana': 'Selected as an Inspiring Woman 2024: The Story of Prof. Ilfi Nur Diana',
    'Digital Marketing untuk Meningkatkan Brand Image Pesantren': 'Digital Marketing to Improve a Pesantren Brand Image',
    'Pengambilan Keputusan Kepala Madrasah dalam Pemberian Reward Guru': 'Madrasah Principal Decision-Making in Giving Teacher Rewards',
    'Alumni Gontor Putri: Perempuan Strategis Perangi Hoaks': 'Gontor Putri Alumni: Strategic Women Fighting Hoaxes',
    'Alumni Gontor Putri: Lawan Hoaks, Bertemankan dengan Media yang Benar': 'Gontor Putri Alumni: Fighting Hoaxes by Engaging with Reliable Media',
    'Perempuan dan keluarga punya peran penting dalam membangun kebiasaan cek fakta dan literasi media.': 'Women and families play an important role in building fact-checking habits and media literacy.',
    'Dewi Yuhana mengajak peserta mengenali media agar lebih bijak membaca berita dan menulis opini.': 'Dewi Yuhana encouraged participants to understand media so they can read news and write opinions more wisely.',
    'Menerbitkan buku adalah impian banyak orang, namun prosesnya seringkali tampak rumit. Dari ide awal hingga naskah siap cetak, ada beberapa tahapan krusial yang tidak boleh dilewatkan untuk memastikan karya Anda berkualitas dan diterima dengan baik oleh pasar.': 'Publishing a book is a dream for many people, but the process often seems complicated. From the initial idea to a print-ready manuscript, several crucial stages should not be missed to ensure your work has quality and is well received by the market.',
    'Bekerja sama dengan Deazha Publishing, Pj. Wali Kota Malang mengapresiasi terbitnya buku \'Jalan Teladan Perempuan Pilihan\' dan menyoroti pentingnya literasi. Beliau menekankan bahwa proses penerbitan yang baik adalah kunci. Berikut adalah lima tahap penting yang perlu Anda perhatikan.': 'In collaboration with Deazha Publishing, the Acting Mayor of Malang appreciated the publication of "Jalan Teladan Perempuan Pilihan" and highlighted the importance of literacy. A good publishing process is key. Here are five important stages to consider.',
    '1. Penguatan Ide dan Penulisan Naskah Awal': '1. Strengthening the Idea and Writing the First Draft',
    'Semuanya berawal dari sebuah ide. Pastikan ide Anda unik dan memiliki target pembaca yang jelas. Kembangkan kerangka tulisan (outline) yang kuat sebelum mulai menulis. Tulis draf pertama tanpa terlalu khawatir tentang kesempurnaan. Fokuslah untuk menuangkan semua gagasan Anda ke dalam tulisan.': 'Everything starts with an idea. Make sure your idea is distinctive and has a clear target reader. Develop a strong outline before writing. Write the first draft without worrying too much about perfection, and focus on getting your ideas onto the page.',
    'Setelah draf pertama selesai, bacalah kembali naskah Anda secara menyeluruh. Perbaiki kesalahan tata bahasa, ejaan, alur cerita, dan konsistensi. Tahap ini sangat penting untuk meningkatkan kualitas naskah sebelum diserahkan kepada editor profesional.': 'After the first draft is complete, reread your manuscript thoroughly. Improve grammar, spelling, flow, and consistency. This stage is important before handing the manuscript to a professional editor.',
    '3. Bekerja dengan Editor Profesional': '3. Work with a Professional Editor',
    'Seorang editor akan memberikan perspektif baru dan menangkap kesalahan yang mungkin Anda lewatkan. Deazha Publishing menyediakan editor berpengalaman yang akan membantu menyempurnakan naskah Anda, baik dari segi substansi maupun teknis penulisan.': 'An editor provides a fresh perspective and catches issues you may miss. Deazha Publishing provides experienced editors who can refine your manuscript in substance and writing technique.',
    '4. Desain Sampul dan Tata Letak (Layout)': '4. Cover Design and Layout',
    'Pj. Wali Kota Malang menyoroti bagaimana karya yang berkualitas dapat menginspirasi. Tampilan visual buku adalah bagian dari kualitas tersebut. Desain sampul yang menarik dan tata letak yang nyaman dibaca akan memberikan nilai tambah yang signifikan pada buku Anda.': 'The Acting Mayor of Malang highlighted how quality works can inspire. A book visual presentation is part of that quality. Attractive cover design and comfortable layout add significant value to your book.',
    '5. Pengurusan ISBN dan Proses Cetak': '5. ISBN Processing and Printing',
    'ISBN (International Standard Book Number) adalah identitas resmi buku Anda. Penerbit seperti Deazha akan membantu mengurus ISBN hingga proses pencetakan akhir. Dengan melalui tahapan ini, buku Anda siap untuk didistribusikan dan dibaca oleh khalayak luas, serta berpotensi menginspirasi seperti yang diharapkan banyak pihak.': 'ISBN (International Standard Book Number) is the official identity of your book. Publishers such as Deazha help process the ISBN through final printing. After these stages, your book is ready to be distributed and read by a wider audience.',
    'Pj. Wali Kota Malang, Wahyu Hidayat, mendorong penguatan literasi melalui peluncuran buku Perempuan Inspiratif yang diterbitkan Deazha Prima Nusantara.': 'Acting Mayor of Malang, Wahyu Hidayat, encouraged literacy development through the launch of Perempuan Inspiratif published by Deazha Prima Nusantara.',
    'Buku ini menghadirkan kisah perempuan dari berbagai latar belakang yang memberi kontribusi nyata bagi keluarga, lingkungan, profesi, dan masyarakat.': 'This book presents stories of women from various backgrounds who have made real contributions to family, community, profession, and society.',
    'Literasi yang Menginspirasi': 'Inspiring Literacy',
    'Melalui karya semacam ini, kisah hidup tokoh lokal dapat menjadi sumber teladan dan bahan refleksi bagi pembaca yang ingin mengambil peran lebih luas di tengah masyarakat.': 'Through works like this, the life stories of local figures can become examples and reflection material for readers who want to take a broader role in society.',
    'Deazha Publishing mendukung penerbitan karya yang tidak hanya mendokumentasikan pengalaman, tetapi juga memberi ruang bagi nilai, perjuangan, dan inspirasi untuk terus dibaca.': 'Deazha Publishing supports works that not only document experience, but also give values, struggle, and inspiration a place to keep being read.',
    'Fakultas Ilmu Pendidikan Universitas Negeri Malang menjalin kerja sama dengan Deazha Prima Nusantara untuk memperkuat literasi, publikasi, dan branding kelembagaan.': 'The Faculty of Education at Universitas Negeri Malang partnered with Deazha Prima Nusantara to strengthen literacy, publication, and institutional branding.',
    'Kolaborasi ini menjadi ruang bagi sivitas akademika untuk mengembangkan gagasan, pengalaman, dan karya tulis agar dapat hadir sebagai publikasi yang lebih terarah dan mudah dijangkau pembaca.': 'This collaboration creates space for academics to develop ideas, experiences, and written works into publications that are more focused and accessible to readers.',
    'Literasi dan Branding Akademik': 'Literacy and Academic Branding',
    'Penguatan literasi tidak hanya berarti mendorong lebih banyak orang membaca dan menulis. Dalam konteks perguruan tinggi, literasi juga menjadi cara untuk mendokumentasikan praktik baik, riset, program, dan kontribusi lembaga kepada masyarakat.': 'Strengthening literacy is not only about encouraging more people to read and write. In higher education, literacy also documents good practices, research, programs, and institutional contributions to society.',
    'Melalui kerja sama penerbitan, naskah akademik maupun cerita pengalaman pendidikan dapat dikelola lebih profesional, mulai dari pengembangan ide, penyuntingan, desain, hingga distribusi. Proses ini membantu institusi menjaga kualitas pesan sekaligus memperkuat identitasnya di hadapan publik.': 'Through publishing collaboration, academic manuscripts and educational experience stories can be managed more professionally, from idea development, editing, and design to distribution. This process helps institutions maintain message quality while strengthening public identity.',
    'Ruang Tumbuh Karya Pendidikan': 'A Growth Space for Educational Works',
    'Deazha Prima Nusantara mendukung proses kreatif dan teknis agar karya yang lahir dari lingkungan pendidikan dapat menjadi buku, artikel, maupun publikasi lain yang bernilai dokumentatif dan inspiratif.': 'Deazha Prima Nusantara supports the creative and technical process so works from educational environments can become books, articles, and other publications with documentary and inspirational value.',
    'Self-editing adalah tahap penting sebelum naskah dikirim ke editor atau penerbit. Pada tahap ini, penulis membaca kembali naskahnya sendiri untuk memastikan gagasan tersusun jelas, bahasa lebih rapi, dan alur tulisan mudah diikuti.': 'Self-editing is an important stage before a manuscript is sent to an editor or publisher. At this stage, writers reread their own manuscript to make sure the ideas are clear, the language is cleaner, and the flow is easy to follow.',
    'Proses ini tidak menggantikan peran editor profesional, tetapi membuat naskah masuk ke tahap penyuntingan dengan kondisi yang lebih matang. Editor pun dapat berfokus pada penguatan isi, logika, dan kualitas tulisan secara lebih mendalam.': 'This process does not replace a professional editor, but it brings the manuscript into editing in a more mature condition. Editors can then focus more deeply on content, logic, and writing quality.',
    'Apa yang Perlu Dicek?': 'What Should Be Checked?',
    'Penulis dapat mulai dari struktur besar: apakah pembuka sudah menarik, pembahasan mengalir, dan penutup memberi kesan yang kuat. Setelah itu, cek konsistensi istilah, data, nama tokoh, urutan bab, serta kesesuaian gaya bahasa dengan target pembaca.': 'Writers can start with the big structure: whether the opening is engaging, the discussion flows, and the closing leaves a strong impression. Then check consistency in terms, data, names, chapter order, and language style for the target reader.',
    'Di tahap berikutnya, periksa kalimat yang terlalu panjang, pengulangan kata, paragraf yang tidak perlu, kesalahan ejaan, tanda baca, dan bagian yang masih terasa kabur. Membaca naskah dengan jeda waktu akan membantu penulis melihat kekurangan dengan lebih jernih.': 'Next, check sentences that are too long, repeated words, unnecessary paragraphs, spelling mistakes, punctuation, and parts that still feel unclear. Reading after a pause helps writers see weaknesses more clearly.',
    'Membuat Naskah Lebih Siap Terbit': 'Making the Manuscript More Ready to Publish',
    'Naskah yang telah melalui self-editing biasanya lebih mudah dipahami dan lebih siap masuk proses produksi buku. Bagi penulis pemula, kebiasaan ini juga melatih kepekaan terhadap kualitas tulisan sendiri.': 'A manuscript that has gone through self-editing is usually easier to understand and more ready for book production. For new writers, this habit also builds sensitivity to the quality of their own writing.',
    'Sebelum menulis buku, penulis perlu tahu siapa pembaca yang ingin disapa. Target pembaca membantu menentukan sudut pandang, kedalaman materi, gaya bahasa, contoh kasus, bahkan desain sampul.': 'Before writing a book, writers need to know who they want to address. Target readers help determine point of view, depth, language style, examples, and even cover design.',
    'Mulailah dengan menjawab pertanyaan sederhana: siapa yang paling membutuhkan buku ini, masalah apa yang sedang mereka hadapi, dan perubahan apa yang diharapkan setelah membaca?': 'Start by answering simple questions: who needs this book most, what problem are they facing, and what change is expected after reading?',
    'Buat Profil Pembaca': 'Create a Reader Profile',
    'Tentukan rentang usia, latar pendidikan, profesi, minat, dan tingkat pemahaman pembaca terhadap topik. Buku untuk guru tentu berbeda dengan buku untuk orang tua, mahasiswa, anak-anak, atau pembaca umum.': 'Define the age range, educational background, profession, interests, and level of understanding readers have about the topic. A book for teachers is different from a book for parents, students, children, or general readers.',
    'Sesuaikan Bahasa dan Struktur': 'Adjust Language and Structure',
    'Jika target pembaca sudah jelas, penulis lebih mudah memilih bahasa. Materi teknis bisa dibuat lebih ringan untuk pemula, sementara pembaca profesional dapat diberi data, kerangka konsep, dan pembahasan yang lebih mendalam.': 'When the target reader is clear, writers can choose language more easily. Technical material can be simplified for beginners, while professional readers can be given data, conceptual frameworks, and deeper discussion.',
    'Deazha Prima Nusantara membantu penulis membaca kebutuhan pembaca sejak tahap awal agar naskah memiliki arah yang kuat sebelum masuk proses penyuntingan dan desain.': 'Deazha Prima Nusantara helps writers understand reader needs from the early stage so the manuscript has a strong direction before editing and design.',
    'Layout buku bukan sekadar menata teks di halaman. Layout menentukan ritme membaca, keseimbangan ruang kosong, ukuran huruf, jarak baris, penempatan gambar, dan konsistensi elemen visual dari awal sampai akhir buku.': 'Book layout is not just arranging text on a page. Layout determines reading rhythm, white space balance, font size, line spacing, image placement, and visual consistency from beginning to end.',
    'Buku dengan layout yang baik membuat pembaca betah. Mata tidak cepat lelah, bagian penting mudah ditemukan, dan alur baca terasa rapi.': 'A book with good layout makes readers comfortable. The eyes do not tire quickly, important parts are easy to find, and the reading flow feels organized.',
    'Yang Perlu Diperhatikan': 'What to Pay Attention To',
    'Beberapa unsur utama layout antara lain margin, jenis huruf, ukuran font, jarak antarbaris, nomor halaman, judul bab, subjudul, tabel, gambar, dan catatan kaki. Semua harus bekerja bersama, bukan berdiri sendiri-sendiri.': 'Key layout elements include margins, typeface, font size, line spacing, page numbers, chapter titles, subtitles, tables, images, and footnotes. All of them need to work together.',
    'Untuk buku anak atau buku bergambar, layout juga perlu memperhitungkan interaksi antara teks dan ilustrasi. Untuk buku akademik, layout harus membantu pembaca memahami struktur gagasan dan referensi.': 'For children books or illustrated books, layout must consider how text and illustration interact. For academic books, layout should help readers understand the structure of ideas and references.',
    'Bagian dari Identitas Buku': 'Part of a Book Identity',
    'Di Deazha Prima Nusantara, layout menjadi bagian penting dari proses penerbitan karena kualitas visual ikut memengaruhi kesan profesional sebuah buku. Naskah yang baik akan terasa lebih kuat ketika disajikan dalam tata letak yang nyaman dan konsisten.': 'At Deazha Prima Nusantara, layout is an important part of publishing because visual quality shapes the professional impression of a book. A good manuscript feels stronger when presented in a comfortable and consistent layout.',
    'Prof. Dr. Ilfi Nur Diana, M.Si terpilih sebagai salah satu Perempuan Inspiratif 2024. Kisahnya masuk dalam buku Perempuan Inspiratif yang diterbitkan PT Deazha Prima Nusantara.': 'Prof. Dr. Ilfi Nur Diana, M.Si was selected as one of the Inspiring Women of 2024. Her story is included in Perempuan Inspiratif, published by PT Deazha Prima Nusantara.',
    'Prof Ilfi dikenal sebagai akademisi UIN Maulana Malik Ibrahim Malang dan pernah menjabat sebagai Wakil Rektor bidang AUPK. Selain berkiprah di kampus, ia juga menjadi bagian dari pengasuhan Pondok Pesantren Terpadu Alyasini Pasuruan.': 'Prof. Ilfi is known as an academic at UIN Maulana Malik Ibrahim Malang and formerly served as Vice Rector for AUPK. Beyond campus, she is also part of the care and education at Pondok Pesantren Terpadu Alyasini Pasuruan.',
    'Tanggung Jawab Sejak Kecil': 'Responsibility from Childhood',
    'Dalam peluncuran dan bedah buku, Prof Ilfi bercerita bahwa sejak kecil ia terbiasa diberi tanggung jawab oleh orang tuanya, termasuk mengajar mengaji adik-adik kelasnya. Pengalaman di pesantren juga membentuk kepemimpinannya sejak usia muda.': 'During the book launch and discussion, Prof. Ilfi shared that since childhood she had been trusted with responsibilities by her parents, including teaching younger students to recite the Quran. Her pesantren experience also shaped her leadership from a young age.',
    'Ia menekankan pentingnya pendekatan yang nyaman dalam mendidik anak, termasuk saat mendampingi mereka menghafal Al-Qur\'an. Kisah ini menjadi bagian dari teladan tentang perempuan, keluarga, pendidikan, dan kepemimpinan.': 'She emphasized the importance of a comfortable approach in educating children, including when guiding them to memorize the Quran. Her story offers an example of women, family, education, and leadership.',
    'Artikel jurnal Tarbiyatuna berjudul Digital Marketing for Improving Brand Image at Al-Munawwir Komplek Q Islamic Boarding School in Yogyakarta menunjukkan pentingnya strategi digital dalam membangun citra lembaga pendidikan Islam.': 'The Tarbiyatuna journal article titled Digital Marketing for Improving Brand Image at Al-Munawwir Komplek Q Islamic Boarding School in Yogyakarta shows the importance of digital strategy in building the image of Islamic educational institutions.',
    'Artikel jurnal Tarbiyatuna berjudul': 'The Tarbiyatuna journal article titled',
    'menunjukkan pentingnya strategi digital dalam membangun citra lembaga pendidikan Islam.': 'shows the importance of digital strategy in building the image of Islamic educational institutions.',
    'Bagi pesantren dan lembaga pendidikan, branding tidak hanya soal tampilan promosi. Branding adalah cara lembaga menyampaikan nilai, keunggulan, aktivitas, dan kontribusinya kepada publik secara konsisten.': 'For pesantren and educational institutions, branding is not only about promotional appearance. Branding is how an institution consistently communicates its values, strengths, activities, and contributions to the public.',
    'Relevansi untuk Penerbitan': 'Relevance for Publishing',
    'Publikasi buku, artikel, dokumentasi program, dan konten digital dapat saling mendukung. Ketika lembaga memiliki karya tertulis yang rapi dan kanal digital yang aktif, kepercayaan publik akan lebih mudah tumbuh.': 'Book publications, articles, program documentation, and digital content can support one another. When an institution has well-organized written works and active digital channels, public trust can grow more easily.',
    'Deazha Prima Nusantara melihat penerbitan sebagai bagian dari ekosistem branding: gagasan yang terdokumentasi baik akan memperkuat identitas lembaga dalam jangka panjang.': 'Deazha Prima Nusantara sees publishing as part of the branding ecosystem: well-documented ideas strengthen institutional identity over the long term.',
    'Artikel ResearchGate berjudul Madrasah Principal\'s Decision Making in Giving Rewards for Teachers\' Work Performance Viewed from Equity Theory membahas keputusan kepala madrasah dalam memberi penghargaan atas kinerja guru.': 'The ResearchGate article titled Madrasah Principal Decision Making in Giving Rewards for Teachers Work Performance Viewed from Equity Theory discusses how madrasah principals make decisions in rewarding teacher performance.',
    'Artikel ResearchGate berjudul': 'The ResearchGate article titled',
    'membahas keputusan kepala madrasah dalam memberi penghargaan atas kinerja guru.': 'discusses how madrasah principals make decisions in rewarding teacher performance.',
    'Topik ini dekat dengan manajemen mutu pendidikan. Reward yang adil dapat memengaruhi motivasi, rasa dihargai, dan kepercayaan guru kepada pimpinan lembaga.': 'This topic is closely related to education quality management. Fair rewards can affect motivation, a sense of appreciation, and teachers trust in institutional leadership.',
    'Keadilan sebagai Dasar Kebijakan': 'Fairness as the Basis of Policy',
    'Dalam perspektif equity theory, keputusan tidak cukup hanya baik secara administratif. Pimpinan perlu memastikan bahwa ukuran, proses, dan komunikasi penghargaan dipahami sebagai adil oleh para guru.': 'From the perspective of equity theory, decisions are not enough if they are only administratively sound. Leaders need to ensure that the criteria, process, and communication of rewards are understood as fair by teachers.',
    'Bagi lembaga pendidikan, dokumentasi praktik kepemimpinan semacam ini penting agar pengalaman manajerial dapat dipelajari, dievaluasi, dan dikembangkan menjadi pengetahuan yang lebih luas.': 'For educational institutions, documenting leadership practices like this is important so managerial experiences can be studied, evaluated, and developed into broader knowledge.',
    'Webinar Alumni Gontor Putri seri â€œMuslimah dan Literasi Mediaâ€ menyoroti peran perempuan dalam menghadapi hoaks. Keluarga menjadi ruang penting untuk mengedukasi anggota keluarga agar mampu memilah informasi berkualitas.': 'The Gontor Putri Alumni webinar series "Muslimah and Media Literacy" highlighted the role of women in facing hoaxes. Family is an important space for educating members to filter quality information.',
    'Dr. Syarifah Ema Rahmania menekankan pentingnya cek fakta dan literasi digital. Sementara Dewi Yuhana, Direktur PT Deazha Prima Nusantara, mengajak peserta untuk mengenal media, membaca berita, dan memahami cara kerja redaksi.': 'Dr. Syarifah Ema Rahmania emphasized the importance of fact-checking and digital literacy. Dewi Yuhana, Director of PT Deazha Prima Nusantara, invited participants to understand media, read news, and learn how editorial work functions.',
    'Berkawan dengan Media': 'Building Good Relations with Media',
    'Dewi Yuhana menegaskan bahwa berkawan dengan media dapat mendukung aktivitas dakwah, pendidikan, dan publikasi gagasan. Dengan memahami karakteristik media, seseorang lebih siap menulis opini, menjadi narasumber, dan menyampaikan pesan positif kepada publik.': 'Dewi Yuhana emphasized that building good relations with media can support preaching, education, and publication of ideas. By understanding media characteristics, people are better prepared to write opinions, become sources, and deliver positive messages to the public.',
    'Dalam webinar Alumni Gontor Putri, para pembicara menekankan pentingnya kehati-hatian sebelum menyebarkan informasi. Cek dan ricek, atau tabayun, menjadi kebiasaan penting agar masyarakat tidak ikut menyebarkan kabar bohong.': 'In a Gontor Putri Alumni webinar, speakers emphasized the importance of being careful before sharing information. Checking and rechecking, or tabayun, is an important habit so people do not spread false information.',
    'Dewi Yuhana dari PT Deazha Prima Nusantara mengajak peserta untuk berteman dengan media yang benar. Mengenal karakter media, wartawan, redaktur, dan kebijakan redaksi membantu masyarakat lebih bijak membaca berita dan mengirimkan tulisan.': 'Dewi Yuhana from PT Deazha Prima Nusantara invited participants to engage with reliable media. Understanding media characteristics, journalists, editors, and editorial policy helps people read news and submit writing more wisely.',
    'Literasi sebagai Kebiasaan': 'Literacy as a Habit',
    'Banyak orang reaktif terhadap berita negatif, tetapi belum terbiasa membaca berita secara utuh. Padahal, kebiasaan membaca media yang kredibel akan membantu seseorang menemukan ide, memahami konteks, dan menyampaikan opini dengan lebih bertanggung jawab.': 'Many people react quickly to negative news, but are not used to reading news completely. The habit of reading credible media helps people find ideas, understand context, and express opinions more responsibly.',
    'Kasus bullying yang terus muncul setiap tahun menjadi masalah yang harus diselesaikan bersama. Buku ini tidak hanya menyajikan pemahaman tentang bullying, tetapi juga strategi pencegahan yang dapat dilakukan sekolah, guru, dan orang tua.': 'Bullying cases that continue to appear every year are a problem that must be solved together. This book presents not only an understanding of bullying, but also prevention strategies for schools, teachers, and parents.',
    'Bagi orang tua, buku ini mengajak untuk tidak semata memberi nasihat, tetapi menjadi teladan agar anak menjauhi perundungan.': 'For parents, this book encourages not only giving advice, but becoming role models so children stay away from bullying.',
    'dalam proses': 'in process',
    'Sumber: Redaksi Deazha Prima Nusantara': 'Source: Deazha Prima Nusantara Editorial Team'
};

const phraseTranslations = {
    'Judul:': 'Title:',
    'Judul asli:': 'Original title:',
    'Penulis:': 'Author:',
    'Editor:': 'Editor:',
    'Penyunting:': 'Editor:',
    'Seri:': 'Series:',
    'Ukuran:': 'Size:',
    'Ukuran Buku:': 'Book size:',
    'Jumlah halaman:': 'Pages:',
    'Jumlah Halaman:': 'Pages:',
    'Penerbit:': 'Publisher:',
    'Kategori:': 'Category:',
    'Desain Cover, Lay Out & Ilustrasi:': 'Cover design, layout & illustration:',
    'Desain Cover & Ilustrator:': 'Cover design & illustrator:',
    'Desain Cover & Lay Out:': 'Cover design & layout:',
    'Desain Sampul & Lay Out:': 'Cover design & layout:',
    'Desain Cover:': 'Cover design:',
    'Lay Out:': 'Layout:',
    'Januari': 'January',
    'Februari': 'February',
    'Maret': 'March',
    'April': 'April',
    'Mei': 'May',
    'Juni': 'June',
    'Juli': 'July',
    'Agustus': 'August',
    'September': 'September',
    'Oktober': 'October',
    'November': 'November',
    'Desember': 'December',
    'Tips & Trik': 'Tips & Tricks',
    'Berita': 'News',
    'Kemitraan': 'Partnership',
    'Tokoh Inspiratif': 'Inspiring Figure',
    'Riset & Pendidikan': 'Research & Education',
    'Literasi Media': 'Media Literacy',
    'Diterbitkan pada': 'Published on',
    'Sumber:': 'Source:',
    'Sampul buku': 'Book cover of',
    'Cari buku atau artikel': 'Search books or articles',
    'Buka menu': 'Open menu',
    'Halaman Berikutnya': 'Next Page'
};

const placeholderTranslations = {
    'Cari buku atau artikel...': 'Search books or articles...',
    'Nama Lengkap': 'Full Name',
    'Alamat Email': 'Email Address',
    'Subjek': 'Subject',
    'Pesan Anda': 'Your Message'
};

const metaLabelTranslations = {
    Judul: 'Title',
    'Judul asli': 'Original title',
    Penulis: 'Author',
    Editor: 'Editor',
    Penyunting: 'Editor',
    Seri: 'Series',
    Ukuran: 'Size',
    'Ukuran Buku': 'Book size',
    'Jumlah halaman': 'Pages',
    'Jumlah Halaman': 'Pages',
    Penerbit: 'Publisher',
    Kategori: 'Category',
    'Desain Cover, Lay Out & Ilustrasi': 'Cover design, layout & illustration',
    'Desain Cover & Ilustrator': 'Cover design & illustrator',
    'Desain Cover & Lay Out': 'Cover design & layout',
    'Desain Sampul & Lay Out': 'Cover design & layout',
    'Desain Cover': 'Cover design',
    'Lay Out': 'Layout'
};

function translateDynamicText(text) {
    let translated = text.replace(/Halaman\s+(\d+)\s+dari\s+(\d+)/g, 'Page $1 of $2');
    translated = translated.replace(/Halaman\s+(\d+)/g, 'Page $1');
    Object.entries(phraseTranslations).forEach(([id, en]) => {
        translated = translated.split(id).join(en);
    });
    return translated;
}

function translateText(text, lang) {
    if (lang === 'id') {
        return text;
    }

    const trimmed = text.trim();
    if (!trimmed) {
        return text;
    }

    const translated = textTranslations[trimmed] || translateDynamicText(trimmed);
    return text.replace(trimmed, translated);
}

function translateAttribute(value, lang) {
    if (lang === 'id' || !value) {
        return value;
    }

    return placeholderTranslations[value] || textTranslations[value] || translateDynamicText(value);
}

function getMetaLabel(label) {
    return activeLanguage === 'en' ? (metaLabelTranslations[label] || label) : label;
}

function applyTranslations(lang = activeLanguage) {
    activeLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.language-option').forEach((button) => {
        const isActive = button.dataset.lang === lang;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME'].includes(parent.tagName)) {
                return NodeFilter.FILTER_REJECT;
            }
            return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });

    const nodes = [];
    while (walker.nextNode()) {
        nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
        if (!originalTextNodes.has(node)) {
            originalTextNodes.set(node, node.textContent);
        }
        const original = originalTextNodes.get(node);
        node.textContent = translateText(original, lang);
    });

    document.querySelectorAll('[placeholder], [aria-label], [alt]').forEach((element) => {
        ['placeholder', 'aria-label', 'alt'].forEach((attribute) => {
            if (!element.hasAttribute(attribute)) {
                return;
            }
            const storageAttribute = `data-i18n-original-${attribute.replace(/[^a-z]/g, '-')}`;
            if (!element.hasAttribute(storageAttribute)) {
                element.setAttribute(storageAttribute, element.getAttribute(attribute));
            }
            element.setAttribute(attribute, translateAttribute(element.getAttribute(storageAttribute), lang));
        });
    });
}

document.querySelectorAll('.language-option').forEach((button) => {
    button.addEventListener('click', () => applyTranslations(button.dataset.lang || 'id'));
});

// --- Kode yang Menjalankan Fungsi Saat Halaman Dimuat ---
document.addEventListener('DOMContentLoaded', () => {
    const booksCatalog = [
        { slug: 'melindungi-senyum-anak', title: 'Melindungi Senyum Anak: Strategi Cegah Bullying Sejak Dini', shortTitle: 'Melindungi Senyum Anak', imgSrc: './images/melindungi-senyum-anak.webp', link: 'detail-buku.html?book=melindungi-senyum-anak', meta: { Judul: 'Melindungi Senyum Anak: Strategi Cegah Bullying Sejak Dini', Penulis: 'Dr. Eny Nur Aisyah, S.Pd.I, M.Pd, Prof. Dr. Harun, Prof. Dr. Arif Rohman, M.Si, Prof. Dr. Hardika, M.Pd', Editor: 'Dewi Yuhana, S.Psi', 'Desain Cover, Lay Out & Ilustrasi': 'Angga Wijanarko', Ukuran: '15,5 x 23 cm', 'Jumlah halaman': '212 halaman', Penerbit: 'Deazha Prima Nusantara', ISBN: 'dalam proses' }, description: ['Kasus bullying yang terus muncul setiap tahun menjadi masalah yang harus diselesaikan bersama. Buku ini tidak hanya menyajikan pemahaman tentang bullying, tetapi juga strategi pencegahan yang dapat dilakukan sekolah, guru, dan orang tua.', 'Bagi orang tua, buku ini mengajak untuk tidak semata memberi nasihat, tetapi menjadi teladan agar anak menjauhi perundungan.'] },
        { slug: 'mendidik-dengan-cinta-bertahan-dengan-doa', title: 'Mendidik dengan Cinta, Bertahan dengan Doa', shortTitle: 'Mendidik dengan Cinta, Bertahan dengan Doa', imgSrc: './images/mendidik-dengan-cinta.webp', link: 'detail-buku.html?book=mendidik-dengan-cinta-bertahan-dengan-doa', meta: { Judul: 'Mendidik dengan Cinta, Bertahan dengan Doa', Penulis: 'Akhmad Ari Wibowo, Nadia Afidati, Hari Susetyo, Shoufie Nur Aini, Sugeng Hariadi, Ning Fuadah Karimah Elnur, Libriyanto Priyogo, Munawaro, Syaiful Arif, Hanif Nur Rozaq, Slamet Riadi, Nur Solikin, Yeni Anggun Pratiwi, Faris Al Ayubi, Zumrotul Azizah, Anis Syifaul Qobiya, Basnah Karnain, Ririn Andayani, Meisya Najelina Tita Risandy, Ainul Hayain, Fenti Nur Aula Imansari', Editor: 'Dewi Yuhana, Dyah Ayu Pitaloka', 'Desain Cover, Lay Out & Ilustrasi': 'Angga Wijanarko', Ukuran: '15,5 x 23 cm', 'Jumlah halaman': '140 halaman', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-7-7' }, description: ['Melalui gaya bertutur, para penulis berbagi strategi mengajar, metode, dan media pembelajaran untuk menghadapi beragam karakter anak.', 'Buku ini diharapkan menginspirasi lebih banyak guru Indonesia untuk menuliskan pengalaman mereka dalam mendidik anak-anak bangsa.'] },
        { slug: '7-kebiasaan-bocah-pinter', title: '7 Kebiasaan Bocah Pinter', shortTitle: '7 Kebiasaan Bocah Pinter', imgSrc: './images/7-kebiasaan-bocah-pinter.webp', link: 'detail-buku.html?book=7-kebiasaan-bocah-pinter', meta: { Judul: '7 Kebiasaan Bocah Pinter', Penulis: 'Rosyi Damayani Twinsari Maningtyas, Rania Az Zahra', Editor: 'Ahmad Samawi dan Pramono', 'Desain Cover & Ilustrator': 'Angga Wijanarko', Ukuran: '21,6 x 21,6 cm', 'Jumlah halaman': '26 halaman', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-6-0' }, description: ['Buku cerita bergambar berbahasa Jawa daerah Blitar yang mengajak anak-anak mempelajari bahasa daerah sekaligus kebiasaan baik sehari-hari.', 'Ilustrasinya dibuat detail, ekspresif, dan penuh warna agar menarik bagi anak-anak.'] },
        { slug: 'strategi-sukses-gen-z', title: 'Strategi Sukses Gen Z Berkarier di Era Digital', shortTitle: 'Strategi Sukses Gen Z', imgSrc: './images/gen-z.webp', link: 'detail-buku.html?book=strategi-sukses-gen-z', meta: { Judul: 'Strategi Sukses Gen Z Berkarier di Era Digital', Penulis: 'Prof. Dr. Hardika, M.Pd, Dr. Eny Nur Aisyah, S.Pd.I., M.Pd, Dr. Rully Aprilia Zandra, M.Sn.M.Pd, Dila Umnia Soraya, M.Pd, Umu Da’watul Choiro, M.Pd, Amanatul Uluwiyah, S.Pd', Editor: 'Lionita Nidia Anavi', 'Desain Cover & Lay Out': 'Angga Wijanarko', Ukuran: '15,5 x 23 cm', 'Jumlah halaman': '138 halaman', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-5-3' }, description: ['Buku ini mengajak pembaca memahami karakter, kekuatan, tantangan, keyakinan berkarier, dan resiliensi Gen Z di tengah perubahan dunia kerja digital.'] },
        { slug: 'perempuan-menembus-parlemen', title: 'Perempuan Menembus Parlemen: Strategi Pemenangan di Pemilu Legislatif', shortTitle: 'Perempuan Menembus Parlemen', imgSrc: './images/Perempuan-Menembus-Parlemen-scaled.webp', link: 'detail-buku.html?book=perempuan-menembus-parlemen', meta: { Judul: 'Perempuan Menembus Parlemen: Strategi Pemenangan di Pemilu Legislatif', Penulis: 'Atika Candra Larasati', Editor: 'Lionita Nidia Anavi', 'Desain Cover & Lay Out': 'Angga Wijanarko', Ukuran: '14,8 x 21 cm', 'Jumlah halaman': '135 halaman', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-4-6' }, description: ['Buku ini membahas keterwakilan perempuan dalam politik dengan menganalisis teori motivasi Max Weber dan konsep modalitas politik Pierre Bourdieu.', 'Pembaca diajak menyelami strategi yang dapat diadopsi perempuan calon legislator untuk memenangi Pemilu Legislatif.'] },
        { slug: 'eco-teologi', title: 'Eco-Teologi: Mewujudkan Green Campus dan Eco-Pesantren', shortTitle: 'Eco-Teologi', imgSrc: './images/Eco-Teologi-Mewujudkan-Green-Campus-dan-Eco-Pesantren.webp', link: 'detail-buku.html?book=eco-teologi', meta: { Judul: 'Eco-Teologi: Mewujudkan Green Campus dan Eco-Pesantren', Penulis: 'Ilfi Nur Diana, dkk', Editor: 'Segaf & Muh. Yunus', 'Desain Cover & Lay Out': 'Angga Wijanarko', Ukuran: '15,5 x 23 cm', 'Jumlah halaman': '170 halaman', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-3-9' }, description: ['Buku ini disusun sebagai pedoman mewujudkan pesantren dan perguruan tinggi keagamaan Islam yang ramah lingkungan.', 'Pembahasan dimulai dari prinsip eco-teologi Islam hingga model gerakan eco-pesantren dan pengelolaan sumber daya alam.'] },
        { slug: 'antologi-cerpen-when-the-light-comes', title: 'Antologi Cerpen When The Light Comes', shortTitle: 'Antologi Cerpen When The Light Comes', imgSrc: './images/Antologi-Cerpen-When-The-Light-Comes_Deazha.webp', link: 'detail-buku.html?book=antologi-cerpen-when-the-light-comes', meta: { Judul: 'Antologi Cerpen When The Light Comes', Penulis: 'Nur Lailatul Istikhomah, Zulfani Nur Arasyi, Hima Liana Putri, M. Zaki, Zakin Faridhatu, Ahsan Abidin Ali, Ruhil Davina, M. Akmal, Nafisatur Rofiah, Faiz Muzaki, Melinda Ayu Bilbina, M. Lubis Zakia A., Anti Muyasaroh, Muhammad Tajuddin Febriansyah, Salma Syahada Fuady, Angzil Lala, Egi Adityas, Muhammad Atmim Al Muqorrobin, Talitha Rosalinda, Abdullah Fais, Alifah Dwi, Khoirur Rohmah Siti, Alfina Luklu’il, Salwa Putri Fadilah, Dhiya Iftikhoriyah, Suci Amada', Editor: 'Lionita Nidia Anavi, Samsul Arifin, Muhammad Ja’far Mukhtar & Minna Khusaniyah Fauzi', 'Desain Cover & Lay Out': 'Angga Wijanarko', Ukuran: '14,8 x 21 cm', 'Jumlah halaman': '300 halaman', Penerbit: 'Deazha Prima Nusantara', QRCBN: '62-3224-7724-950' }, description: ['Antologi ini lahir dari para santri dan santriwati yang merangkai kata dengan imajinasi dan ketulusan jiwa.', 'Buku ini memuat 26 cerita dengan beragam tema, dari bambu runcing, hijrah, ibu, hingga mafia.'] },
        { slug: 'kepak-swa-bhuwana-paksa', title: 'Kepak Swa Bhuwana Paksa di Langit Anatolia: Misi Kemanusiaan C-130 TNI AU di Turki', shortTitle: 'Kepak Swa Bhuwana Paksa', imgSrc: './images/kepak-swa-bhuwana-paksa.webp', link: 'detail-buku.html?book=kepak-swa-bhuwana-paksa', meta: { Judul: 'Kepak Swa Bhuwana Paksa di Langit Anatolia: Misi Kemanusiaan C-130 TNI AU di Turki', Penulis: 'Dewi Yuhana', 'Desain Sampul & Lay Out': 'Angga Wijanarko', 'Jumlah Halaman': '282 halaman', 'Ukuran Buku': '15,5 x 23 cm', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-2-2' }, description: ['Buku ini menuliskan proses Tim Bantuan Kemanusiaan Skadron Udara 32 TNI AU saat menjalankan misi pascagempa Turki 2023.', 'Pembaca diajak mengikuti persiapan pesawat, perubahan rute, komunikasi misi, dan pengalaman kru selama bertugas di musim dingin ekstrem.'] },
        { slug: 'ojk-malang-membangun-sinergi', title: 'OJK Malang Membangun Sinergi Mengabdi untuk Negeri', shortTitle: 'OJK Malang Membangun Sinergi', imgSrc: './images/OJK-Malang-Membangun-Sinergi-Mengabdi-untuk-Negeri.webp', link: 'detail-buku.html?book=ojk-malang-membangun-sinergi', meta: { Judul: 'OJK Malang Membangun Sinergi Mengabdi untuk Negeri', Penulis: 'Dewi Yuhana, Erna Tigayanti, Frederik Alexander Rompies', 'Desain Cover': 'Rahadian Bagaskoro', 'Lay Out': 'Angga Wijanarko', 'Jumlah Halaman': '164', Ukuran: '15,5 x 23 cm', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-1-5' }, description: ['Buku ini mengupas perjalanan OJK Malang dari awal berdiri hingga masa pandemi Covid-19.', 'Kisahnya menjadi legacy tentang inovasi, strategi, dan kontribusi OJK Malang dalam membantu masyarakat serta Lembaga Jasa Keuangan.'] },
        { slug: 'jalan-teladan-perempuan-pilihan', title: 'Jalan Teladan Perempuan Pilihan', shortTitle: 'Jalan Teladan Perempuan Pilihan', imgSrc: './images/jalan-teladan-perempuan-pilihan.webp', link: 'detail-buku.html?book=jalan-teladan-perempuan-pilihan', meta: { Judul: 'Jalan Teladan Perempuan Pilihan', Seri: 'Perempuan Inspiratif', Penulis: 'Dewi Yuhana, Lionita Nidia Anavi', 'Desain Cover & Lay Out': 'Angga Wijanarko', Ukuran: '15,5 x 23 cm', 'Jumlah halaman': '170 halaman', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-88911-0-8' }, description: ['Buku pertama Seri Perempuan Inspiratif ini menghimpun kisah hidup tokoh perempuan dari berbagai latar belakang.', 'Kisah-kisahnya diharapkan menjadi insight dan inspirasi bagi pembaca dalam mengambil keputusan dan memberi manfaat bagi sekitar.'] },
        { slug: 'merajut-asa-wujudkan-karya', title: 'Merajut Asa Wujudkan Karya, Memberi Makna untuk Negeri', shortTitle: 'Merajut Asa Wujudkan Karya', imgSrc: './images/merajut-asa.webp', link: 'detail-buku.html?book=merajut-asa-wujudkan-karya', meta: { Judul: 'Merajut Asa Wujudkan Karya, Memberi Makna untuk Negeri', Penulis: 'Azka Subhan A, Cicilia Melly Andita H., Dewi Yuhana, Niken Sih Wigati, Elviera D. Surya Putri', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-97665-3-5' }, description: ['Buku ini berisi kegiatan dan program Bank Indonesia Malang melalui klaster ketahanan pangan, pondok pesantren, pelaku wisata, dan UMKM mitra binaan.'] },
        { slug: 'fastaqim-maka-istiqamahlah', title: 'Fastaqim Maka, Istiqamahlah!', shortTitle: 'Fastaqim Maka, Istiqamahlah!', imgSrc: './images/fastaqim.webp', link: 'detail-buku.html?book=fastaqim-maka-istiqamahlah', meta: { 'Judul asli': 'Fastaqim', Penulis: 'Dr. Mohammad Umar Qureshi', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-97665-4-2' }, description: ['Buku ini membahas kebutuhan manusia akan kehadiran Allah SWT dan pentingnya keberagamaan sebagai kecenderungan spiritual dalam jiwa.', 'Pembaca diajak memahami manusia sebagai jasad material sekaligus entitas spiritual.'] },
        { slug: 'visionary-leadership', title: 'Visionary Leadership: Strategi Membangun Brand Image dan Daya Saing Perguruan Tinggi', shortTitle: 'Visionary Leadership', imgSrc: './images/visionary-leadership.webp', link: 'detail-buku.html?book=visionary-leadership', meta: { Judul: 'Visionary Leadership: Strategi Membangun Brand Image dan Daya Saing Perguruan Tinggi', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Kepemimpinan Pendidikan' }, description: ['Buku ini merespons kebutuhan literatur pengelolaan perguruan tinggi yang berangkat dari temuan penelitian.', 'Pembahasannya mencakup kepemimpinan visioner, brand image, daya saing perguruan tinggi, dan implementasi visi strategis lembaga pendidikan.'] },
        { slug: 'menyoal-problem-kesehatan-mental', title: 'Menyoal Problem Kesehatan Mental', shortTitle: 'Menyoal Problem Kesehatan Mental', imgSrc: './images/kesehatan-mental.webp', link: 'detail-buku.html?book=menyoal-problem-kesehatan-mental', meta: { Judul: 'Menyoal Problem Kesehatan Mental', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Psikologi' }, description: ['Buku ini membahas problem kesehatan mental sehari-hari seperti iri, dengki, citra tubuh, stres psikologis, dan penggunaan media sosial pada anak maupun remaja.'] },
        { slug: 'telusur-mitigasi-bencana-kampung-warna-warni', title: 'Telusur Mitigasi Bencana Kampung Warna-Warni', shortTitle: 'Telusur Mitigasi Bencana KWW', imgSrc: './images/kampung-warna-warni.webp', link: 'detail-buku.html?book=telusur-mitigasi-bencana-kampung-warna-warni', meta: { Judul: 'Telusur Mitigasi Bencana Kampung Warna-Warni', Penulis: 'Intan Rahmawati', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-602-73023-5-8' }, description: ['Buku ini menelusuri mitigasi bencana di kawasan Kampung Warna-Warni dan memberi gambaran tentang pengelolaan risiko di ruang kampung kota.'] },
        { slug: 'penggunaan-gadget-yang-sehat', title: 'Penggunaan Gadget yang Sehat di Era Teknologi, Panduan Praktis bagi Orang Tua dan Manajemen Sekolah', shortTitle: 'Penggunaan Gadget yang Sehat', imgSrc: './images/gadget.webp', link: 'detail-buku.html?book=penggunaan-gadget-yang-sehat', meta: { Judul: 'Penggunaan Gadget yang Sehat di Era Teknologi', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Parenting dan Pendidikan' }, description: ['Buku ini menjadi panduan praktis bagi orang tua dan manajemen sekolah dalam mendampingi penggunaan gadget secara sehat di era teknologi.'] },
        { slug: 'ragam-kajian-psikologi-tentang-disabilitas', title: 'Ragam Kajian Psikologi Tentang Disabilitas', shortTitle: 'Ragam Kajian Psikologi Tentang Disabilitas', imgSrc: './images/disabilitas.webp', link: 'detail-buku.html?book=ragam-kajian-psikologi-tentang-disabilitas', meta: { Judul: 'Ragam Kajian Psikologi Tentang Disabilitas', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Psikologi' }, description: ['Buku ini memuat kajian tentang disabilitas dalam tiga bagian besar: keluarga, pendidikan, dan masyarakat.', 'Isinya membahas eksklusi sosial, keberfungsian keluarga, penerimaan sebaya, school well-being, perceived social support, serta harga diri.'] },
        { slug: 'praktik-akuntansi-budaya', title: 'Praktik Akuntansi Budaya dalam Pembiayaan Ritual Upacara Adat Pelantikan Orang Kay Suku Kei Maluku', shortTitle: 'Praktik Akuntansi Budaya', imgSrc: './images/praktik-akuntansi.webp', link: 'detail-buku.html?book=praktik-akuntansi-budaya', meta: { Judul: 'Praktik Akuntansi Budaya dalam Pembiayaan Ritual Upacara Adat Pelantikan Orang Kay Suku Kei Maluku', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Akuntansi Budaya' }, description: ['Buku ini mengulas praktik akuntansi budaya dalam upacara adat pelantikan Orang Kay di Suku Kei, Maluku.', 'Pembaca diajak mengenal nilai Larvul Ngabal, wilayah adat Kei, dan tradisi pembiayaan ritual adat.'] },
        { slug: 'strategi-mengajar-kurikulum-merdeka', title: 'Strategi Mengajar Kurikulum Merdeka', shortTitle: 'Strategi Mengajar Kurikulum Merdeka', imgSrc: './images/strategi-mengajar.webp', link: 'detail-buku.html?book=strategi-mengajar-kurikulum-merdeka', meta: { Judul: 'Strategi Mengajar Kurikulum Merdeka', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Pendidikan' }, description: ['Buku ini berisi ragam strategi dan metode mengajar para guru dari berbagai mata pelajaran dan jenjang sekolah.', 'Pengalaman para guru ini lahir dari program Guru Menulis dan Berani Menulis yang diinisiasi Penerbit Deazha Prima Nusantara.'] },
        { slug: 'manajemen-mutu-madrasah', title: 'Manajemen Mutu Madrasah: Meningkatkan Daya Saing di Era Kompetitif', shortTitle: 'Manajemen Mutu Madrasah', imgSrc: './images/manajemen-mutu-madrasah.webp', link: 'detail-buku.html?book=manajemen-mutu-madrasah', meta: { Judul: 'Manajemen Mutu Madrasah: Meningkatkan Daya Saing di Era Kompetitif', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Pendidikan' }, description: ['Buku ini membahas pengembangan dan pengelolaan lembaga pendidikan agar efektif, efisien, berkualitas, dan berdaya saing.', 'Pengelolaan pendidikan dipandang sebagai proses berkelanjutan yang menentukan mutu lembaga.'] },
        { slug: 'pendidikan-akhlaq-berbasis-hadis', title: 'Pendidikan Akhlaq: Berbasis Hadis Al-Arba’in an Nawawiyyah', shortTitle: 'Pendidikan Akhlaq', imgSrc: './images/deafult-book-cover.webp', link: 'detail-buku.html?book=pendidikan-akhlaq-berbasis-hadis', meta: { Judul: 'Pendidikan Akhlaq: Berbasis Hadis Al-Arba’in an Nawawiyyah', Penulis: 'Saifuddin Amin', Penyunting: 'Nurul Akidah', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-602-73023-8-9' }, description: ['Buku ini membahas pendidikan akhlaq berbasis hadis Al-Arba’in an Nawawiyyah sebagai bekal pembentukan karakter dan perilaku.'] },
        { slug: 'supervisi-pendidikan-islam', title: 'Supervisi Pendidikan Islam', shortTitle: 'Supervisi Pendidikan Islam', imgSrc: './images/deafult-book-cover.webp', link: 'detail-buku.html?book=supervisi-pendidikan-islam', meta: { Judul: 'Supervisi Pendidikan Islam', Penulis: 'Ahmad Anas Ihyaudin, Ahmad Barokah, Ahmad Sholikin, Ahmad Zaenal Abidin, Ali Makruf, Dwi Susanto, Idamatul Khoiriyah, Imam Musalim, Imamatu Ummati', Penyunting: 'Mukhamad Sukur', Penerbit: 'Deazha Prima Nusantara', ISBN: '978-623-97665-9-7' }, description: ['Buku ini mengulas supervisi pendidikan Islam sebagai bagian dari peningkatan kualitas lembaga, guru, dan proses pembelajaran.'] },
        { slug: 'silaturahim-itu-bernama-koperasi', title: 'Silaturahim Itu Bernama Koperasi', shortTitle: 'Silaturahim Itu Bernama Koperasi', imgSrc: './images/koperasi.webp', link: 'detail-buku.html?book=silaturahim-itu-bernama-koperasi', meta: { Judul: 'Silaturahim Itu Bernama Koperasi', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Monograf Penelitian' }, description: ['Buku monograf hasil penelitian Prof. Lalu Mulyadi dan tim ini mengangkat koperasi sebagai ruang silaturahim, pemberdayaan, dan kerja bersama.'] },
        { slug: 'jangan-takut-bermimpi', title: 'Jangan Takut Bermimpi: Biografi Agung Soedir Putra', shortTitle: 'Jangan Takut Bermimpi', imgSrc: './images/deafult-book-cover.webp', link: 'detail-buku.html?book=jangan-takut-bermimpi', meta: { Judul: 'Jangan Takut Bermimpi: Biografi Agung Soedir Putra', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Biografi' }, description: ['Buku ini mengangkat pengalaman Agoeng Soedir Poetra dalam membangun agensi model dan membuka jalan bagi mereka yang ingin berkarier sebagai model profesional.', 'Isinya memuat panduan, strategi, dan referensi teknis untuk dunia modeling dan entertainment.'] },
        { slug: 'kain-merah-marun', title: 'Kain Merah Marun: Antologi Cerpen', shortTitle: 'Kain Merah Marun', imgSrc: './images/kain-marun-marun.webp', link: 'detail-buku.html?book=kain-merah-marun', meta: { Judul: 'Kain Merah Marun: Antologi Cerpen', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Antologi Cerpen' }, description: ['Antologi ini memuat 36 naskah terpilih dari lomba menulis cerpen Islami yang digelar Deazha Publishing selama Ramadan 2021.', 'Kisah-kisahnya menyisipkan pesan moral dalam cerita sederhana yang menggugah hati.'] },
        { slug: 'adaptasi-dan-kreativitas-guru', title: 'Adaptasi dan Kreativitas Guru di Masa Pandemi', shortTitle: 'Adaptasi dan Kreativitas Guru', imgSrc: './images/adaptasi-kreativitas-um.webp', link: 'detail-buku.html?book=adaptasi-dan-kreativitas-guru', meta: { Judul: 'Adaptasi dan Kreativitas Guru di Masa Pandemi', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Pendidikan' }, description: ['Buku ini menghimpun karya terpilih dari event Undangan Guru Menulis yang diselenggarakan Deazha Publishing.', 'Para guru menuliskan pengalaman mengajar saat sistem belajar berubah dari tatap muka menjadi daring selama pandemi.'] },
        { slug: 'menjadi-model-profesional', title: 'Menjadi Model Profesional: Buku Panduan bagi Pemula', shortTitle: 'Menjadi Model Profesional', imgSrc: './images/menjadi-model.webp', link: 'detail-buku.html?book=menjadi-model-profesional', meta: { Judul: 'Menjadi Model Profesional: Buku Panduan bagi Pemula', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Panduan Karier' }, description: ['Buku ini menjadi panduan bagi pemula yang ingin memahami dunia model, beauty pageant, dan entertainment.', 'Agoeng Soedir Poetra membagikan pengalaman dan strategi dari puluhan tahun berkarier sebagai koreografer dan pemilik Color Models Inc.'] },
        { slug: 'wakaf-ratu-dan-putri-sultan-ottoman', title: 'Wakaf Ratu dan Putri-Putri Sultan Ottoman: Bukti Empiris Pemberdayaan Wakaf untuk Kesejahteraan Masyarakat', shortTitle: 'Wakaf Ratu dan Putri Sultan Ottoman', imgSrc: './images/wakaf-ottoman.webp', link: 'detail-buku.html?book=wakaf-ratu-dan-putri-sultan-ottoman', meta: { Judul: 'Wakaf Ratu dan Putri-Putri Sultan Ottoman', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Wakaf dan Sejarah' }, description: ['Buku ini menjadi rujukan tentang implementasi wakaf pada masa Kesultanan Turki Ottoman.', 'Pembahasannya menunjukkan bagaimana wakaf mendukung ibadah, pendidikan, sosial ekonomi, rumah sakit, jalan, jembatan, dan infrastruktur masyarakat.'] },
        { slug: 'potensi-kampung-kota-kayutangan', title: 'Potensi Kampung Kota Kayutangan Sebagai Destinasi Wisata Andalan Kota Malang', shortTitle: 'Potensi Kampung Kota Kayutangan', imgSrc: './images/kayutangan-jilid-1.webp', link: 'detail-buku.html?book=potensi-kampung-kota-kayutangan', meta: { Judul: 'Potensi Kampung Kota Kayutangan Sebagai Destinasi Wisata Andalan Kota Malang', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Wisata dan Heritage' }, description: ['Buku ini mengulas potensi Kampung Heritage Kayutangan sebagai destinasi wisata Kota Malang.', 'Bangunan kuno, tugu, sungai, aktivitas kebudayaan, makam, kuliner, dan benda-benda lama menjadi bagian dari kekuatan kawasan ini.'] },
    ];

    const normalizeText = (value) => value.toLowerCase().trim();
    const siteData = window.DeazhaSiteData || {};
    const whatsappUrl = (message = siteData.whatsappText || 'Halo Deazha Publishing, saya ingin konsultasi penerbitan buku.') => {
        const number = siteData.whatsappNumber || '628123356850';
        return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    };
    let catalogPager = null;

    const inferBookCategory = (book) => {
        const raw = `${book.meta.Kategori || ''} ${book.title}`.toLowerCase();
        if (raw.includes('anak') || raw.includes('bocah')) return 'Buku Anak';
        if (raw.includes('psikologi') || raw.includes('mental') || raw.includes('disabilitas')) return 'Psikologi';
        if (raw.includes('pendidikan') || raw.includes('guru') || raw.includes('madrasah') || raw.includes('kurikulum')) return 'Pendidikan';
        if (raw.includes('biografi') || raw.includes('perempuan inspiratif') || raw.includes('teladan')) return 'Biografi & Inspirasi';
        if (raw.includes('cerpen') || raw.includes('antologi')) return 'Fiksi & Antologi';
        if (raw.includes('monograf') || raw.includes('akuntansi') || raw.includes('riset')) return 'Riset & Monograf';
        if (raw.includes('parenting') || raw.includes('gadget')) return 'Parenting';
        if (raw.includes('wisata') || raw.includes('heritage')) return 'Wisata & Heritage';
        return 'Umum';
    };

    const renderBlogList = () => {
        const featured = document.querySelector('.blog-layout .post-card.featured');
        const postGrid = document.querySelector('.blog-layout .post-grid');
        const posts = Array.isArray(siteData.posts) ? [...siteData.posts] : [];
        if (!featured || !postGrid || !posts.length) {
            return;
        }

        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        const [latest, ...rest] = posts;
        const cardDate = (post) => `${post.dateLabel} | ${post.category}`;
        featured.innerHTML = `
            <a href="${latest.url}" class="post-card-image-link">
                <img src="${latest.image}" alt="${latest.alt}" loading="lazy">
            </a>
            <div class="post-card-content">
                <span class="post-card-date">${cardDate(latest)}</span>
                <h2 class="post-card-title"><a href="${latest.url}">${latest.title}</a></h2>
                <p class="post-card-excerpt">${latest.excerpt}</p>
                <a href="${latest.url}" class="btn-secondary">Baca Selengkapnya</a>
            </div>
        `;

        postGrid.innerHTML = rest.map((post) => `
            <article class="post-card">
                <a href="${post.url}" class="post-card-image-link">
                    <img src="${post.image}" alt="${post.alt}" loading="lazy">
                </a>
                <div class="post-card-content">
                    <span class="post-card-date">${cardDate(post)}</span>
                    <h3 class="post-card-title"><a href="${post.url}">${post.title}</a></h3>
                    <p class="post-card-excerpt">${post.excerpt}</p>
                </div>
            </article>
        `).join('');
    };

    const filterCards = (query) => {
        const cards = document.querySelectorAll('.book-card, .post-card');
        if (!cards.length) {
            return false;
        }

        cards.forEach((card) => {
            const matches = normalizeText(card.textContent).includes(query);
            card.classList.toggle('is-hidden', query.length > 0 && !matches);
        });

        return true;
    };

    renderBlogList();

    const runSearch = () => {
        const searchInput = document.getElementById('site-search');
        if (!searchInput) {
            return;
        }

        const query = normalizeText(searchInput.value);
        if (!query) {
            if (catalogPager) {
                catalogPager.applySearch('');
                return;
            }
            filterCards('');
            return;
        }

        if (catalogPager) {
            catalogPager.applySearch(query);
            return;
        }

        if (!filterCards(query)) {
            window.location.href = `katalog.html?search=${encodeURIComponent(query)}`;
        }
    };

    const initCatalogPagination = () => {
        const catalogGrid = document.querySelector('main.detail-page .container > .book-grid');
        const pagination = document.querySelector('.pagination');
        if (!catalogGrid || !pagination) {
            return null;
        }

        catalogGrid.innerHTML = booksCatalog.map((book) => `
            <div class="book-card" data-category="${inferBookCategory(book)}">
                <a href="${book.link}"><img src="${book.imgSrc}" alt="Sampul buku ${book.shortTitle}" loading="lazy"></a>
                <h3><a href="${book.link}">${book.shortTitle}</a></h3>
                <a class="book-wa-link" href="${whatsappUrl(`Halo Deazha Publishing, saya ingin bertanya tentang buku ${book.shortTitle}.`)}" target="_blank" rel="noopener noreferrer">Pesan Buku Ini</a>
            </div>
        `).join('');

        const books = Array.from(catalogGrid.children).filter((item) => item.classList.contains('book-card'));
        if (!books.length) {
            return null;
        }

        const perPage = 8;
        let currentQuery = '';
        let currentCategory = 'all';
        const toolbar = document.querySelector('.catalog-toolbar');

        if (toolbar) {
            const categories = ['all', ...new Set(booksCatalog.map(inferBookCategory))];
            toolbar.innerHTML = categories.map((category) => {
                const label = category === 'all' ? 'Semua' : category;
                return `<button type="button" class="filter-chip${category === 'all' ? ' active' : ''}" data-category="${category}">${label}</button>`;
            }).join('');
        }

        const updateUrl = (page) => {
            const params = new URLSearchParams(window.location.search);
            if (currentQuery) {
                params.set('search', currentQuery);
            } else {
                params.delete('search');
            }
            if (page > 1) {
                params.set('page', page);
            } else {
                params.delete('page');
            }

            const queryString = params.toString();
            const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}`;
            window.history.replaceState({}, '', nextUrl);
        };

        const render = (requestedPage = 1, query = currentQuery) => {
            currentQuery = normalizeText(query);
            const matchingBooks = books.filter((book) => {
                const matchesQuery = normalizeText(book.textContent).includes(currentQuery);
                const matchesCategory = currentCategory === 'all' || book.dataset.category === currentCategory;
                return matchesQuery && matchesCategory;
            });
            const totalPages = Math.max(1, Math.ceil(matchingBooks.length / perPage));
            const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
            const startIndex = (currentPage - 1) * perPage;
            const visibleBooks = new Set(matchingBooks.slice(startIndex, startIndex + perPage));

            books.forEach((book) => {
                book.classList.toggle('is-hidden', !visibleBooks.has(book));
            });

            pagination.innerHTML = `
                <span class="page-info">${activeLanguage === 'en' ? `Page ${currentPage} of ${totalPages}` : `Halaman ${currentPage} dari ${totalPages}`}</span>
                ${Array.from({ length: totalPages }, (_, index) => {
                    const page = index + 1;
                    const currentClass = page === currentPage ? ' current' : '';
                    const pageLabel = activeLanguage === 'en' ? `Page ${page}` : `Halaman ${page}`;
                    return `<a href="#" class="page-number${currentClass}" data-page="${page}" aria-label="${pageLabel}">${page}</a>`;
                }).join('')}
                <a href="#" class="page-number next" data-page="${Math.min(currentPage + 1, totalPages)}" aria-label="${activeLanguage === 'en' ? 'Next Page' : 'Halaman Berikutnya'}"><i class="fa-solid fa-chevron-right"></i></a>
            `;

            pagination.querySelectorAll('[data-page]').forEach((link) => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    render(Number(link.dataset.page), currentQuery);
                    catalogGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            });

            updateUrl(currentPage);
            applyTranslations(activeLanguage);
        };

        if (toolbar) {
            toolbar.querySelectorAll('[data-category]').forEach((button) => {
                button.addEventListener('click', () => {
                    currentCategory = button.dataset.category || 'all';
                    toolbar.querySelectorAll('[data-category]').forEach((item) => item.classList.toggle('active', item === button));
                    render(1, currentQuery);
                });
            });
        }

        return {
            applyInitial(query, page) {
                render(page, query);
            },
            applySearch(query) {
                render(1, query);
            },
            refreshLanguage() {
                render(Number(new URLSearchParams(window.location.search).get('page')) || 1, currentQuery);
            },
        };
    };

    catalogPager = initCatalogPagination();

    const dynamicDetailPage = document.querySelector('[data-book-detail]');
    if (dynamicDetailPage) {
        const params = new URLSearchParams(window.location.search);
        const slug = params.get('book');
        const currentBook = booksCatalog.find((book) => book.slug === slug);
        const book = currentBook || booksCatalog[0];
        const title = document.getElementById('detail-book-title');
        const breadcrumbTitle = document.getElementById('detail-breadcrumb-title');
        const image = document.getElementById('detail-book-image');
        const meta = document.getElementById('detail-book-meta');
        const description = document.getElementById('detail-book-description');

        document.title = `${book.shortTitle} - Deazha Publishing`;
        title.textContent = book.title;
        breadcrumbTitle.textContent = book.shortTitle;
        image.src = book.imgSrc;
        image.alt = `Sampul buku ${book.shortTitle}`;
        meta.innerHTML = Object.entries(book.meta).map(([label, value]) => `<p><strong>${getMetaLabel(label)}:</strong> ${value}</p>`).join('');
        description.innerHTML = `
            ${book.description.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            <a class="btn btn-primary detail-wa-button" href="${whatsappUrl(`Halo Deazha Publishing, saya ingin bertanya tentang buku ${book.shortTitle}.`)}" target="_blank" rel="noopener noreferrer">Pesan Buku Ini</a>
        `;
    }

    const searchInput = document.getElementById('site-search');
    if (searchInput) {
        const params = new URLSearchParams(window.location.search);
        const searchQuery = params.get('search');
        const pageQuery = Number(params.get('page')) || 1;
        if (catalogPager) {
            if (searchQuery) {
                searchInput.value = searchQuery;
            }
            catalogPager.applyInitial(searchQuery || '', pageQuery);
        } else if (searchQuery) {
            searchInput.value = searchQuery;
            filterCards(normalizeText(searchQuery));
        }

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                runSearch();
            }
        });
    }

    document.querySelectorAll('.search-bar button').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            runSearch();
        });
    });

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const subject = formData.get('subject') || (activeLanguage === 'en' ? 'Message from Deazha Publishing website' : 'Pesan dari website Deazha Publishing');
            const message = formData.get('message') || '';
            const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;

            window.location.href = `mailto:deazhaproject@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            let status = contactForm.querySelector('.form-status');
            if (!status) {
                status = document.createElement('p');
                status.className = 'form-status';
                contactForm.appendChild(status);
            }
            status.textContent = activeLanguage === 'en' ? 'Your email app will open to send the message.' : 'Aplikasi email Anda akan terbuka untuk mengirim pesan.';
        });
    }
    
    // --- PERBAIKAN FINAL UNTUK SLIDER KATALOG (MARQUEE) ---
    // Inisialisasi Swiper untuk slider katalog telah dihapus untuk digantikan animasi CSS.
    // Skrip di bawah ini hanya untuk menduplikasi item agar animasi loop berjalan mulus.
    const catalogWrapper = document.querySelector('.catalog-slider .swiper-wrapper');
    if (catalogWrapper) {
        catalogWrapper.innerHTML = booksCatalog.map((book) => `
            <div class="swiper-slide">
                <div class="book-card">
                    <a href="${book.link}"><img src="${book.imgSrc}" alt="Sampul buku ${book.shortTitle}"></a>
                    <h3><a href="${book.link}">${book.shortTitle}</a></h3>
                </div>
            </div>
        `).join('');

        // Duplikasi semua buku di dalamnya
        catalogWrapper.innerHTML += catalogWrapper.innerHTML;
    }


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
        const currentBookTitleElement = document.querySelector('.product-title');
        const currentBookTitle = currentBookTitleElement ? currentBookTitleElement.textContent : '';
        const filteredBooks = booksCatalog.filter(book => book.title.trim() !== currentBookTitle.trim());
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

    // --- FUNGSI UNTUK ANIMASI ANGKA (COUNTER) ---
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
                            const increment = Math.max(1, Math.ceil(goal / 100));
                            if (value < goal) {
                                counter.innerText = Math.min(goal, value + increment);
                                setTimeout(animate, 15);
                            } else {
                                if (goal === 100) {
                                    counter.innerText = goal + 'K+';
                                } else {
                                    counter.innerText = goal;
                                }
                            }
                        };
                        animate();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsGrid);
    }

    if (!document.querySelector('.floating-whatsapp')) {
        const floatingWhatsapp = document.createElement('a');
        floatingWhatsapp.className = 'floating-whatsapp';
        floatingWhatsapp.href = whatsappUrl();
        floatingWhatsapp.target = '_blank';
        floatingWhatsapp.rel = 'noopener noreferrer';
        floatingWhatsapp.setAttribute('aria-label', 'Konsultasi via WhatsApp');
        floatingWhatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i><span>Konsultasi via WhatsApp</span>';
        document.body.appendChild(floatingWhatsapp);
    }

    document.querySelectorAll('.language-option').forEach((button) => {
        button.addEventListener('click', () => {
            if (catalogPager) {
                catalogPager.refreshLanguage();
            }

            if (dynamicDetailPage) {
                document.querySelectorAll('#detail-book-meta strong').forEach((label) => {
                    if (!originalTextNodes.has(label.firstChild)) {
                        originalTextNodes.set(label.firstChild, label.textContent);
                    }
                });
            }

            applyTranslations(button.dataset.lang || 'id');
        });
    });

    applyTranslations(activeLanguage);
});
