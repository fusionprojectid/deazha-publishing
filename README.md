# Deazha Publishing Website

Website statis untuk Deazha Publishing / Deazha Prima Nusantara. Website ini memuat halaman beranda, katalog buku, detail buku, layanan, profil, kontak, blog, multi-bahasa Indonesia/English, filter katalog, CTA WhatsApp, dan SEO dasar.

## Struktur Folder

```text
.
|-- index.html
|-- katalog.html
|-- detail-buku.html
|-- layanan.html
|-- profil.html
|-- kontak.html
|-- blog.html
|-- artikel-blog.html
|-- css/
|   |-- style.css
|   `-- detail-style.css
|-- js/
|   |-- site-data.js
|   `-- script.js
|-- images/
|-- robots.txt
|-- sitemap.xml
`-- README-update.md
```

## Cara Menjalankan Lokal

Karena website ini statis, halaman bisa dibuka langsung dari file HTML. Untuk preview yang lebih aman, jalankan server lokal dari folder project:

```bash
python -m http.server 8765
```

Lalu buka:

```text
http://127.0.0.1:8765/index.html
```

## Fitur Utama

- Multi-bahasa Indonesia dan English melalui tombol `ID / EN`.
- Dark mode dan light mode.
- Katalog buku dinamis dari data `booksCatalog` di `js/script.js`.
- Detail buku dinamis melalui `detail-buku.html?book=slug-buku`.
- Filter kategori katalog.
- Pagination katalog 8 buku per halaman.
- Blog otomatis dari data `posts` di `js/site-data.js`.
- Artikel terbaru otomatis menjadi hero blog.
- CTA WhatsApp di katalog, detail buku, layanan, dan tombol mengambang.
- Caption foto pada setiap artikel blog.
- SEO dasar: meta description, Open Graph, `sitemap.xml`, dan `robots.txt`.

## Update Artikel Blog

Daftar artikel blog dikelola di:

```text
js/site-data.js
```

Tambahkan data baru di array `posts`:

```js
{
    title: 'Judul Artikel',
    date: '2026-01-31',
    dateLabel: '31 Januari 2026',
    category: 'Tips & Trik',
    url: 'nama-file-artikel.html',
    image: './images/nama-gambar.webp',
    alt: 'Deskripsi gambar',
    excerpt: 'Ringkasan pendek artikel.'
}
```

Urutan blog akan otomatis mengikuti tanggal terbaru. Artikel dengan tanggal paling baru otomatis menjadi hero.

## Update Katalog Buku

Data katalog buku berada di:

```text
js/script.js
```

Cari array:

```js
const booksCatalog = [...]
```

Tambahkan buku baru dengan format:

```js
{
    slug: 'slug-buku',
    title: 'Judul Buku Lengkap',
    shortTitle: 'Judul Pendek',
    imgSrc: './images/cover-buku.webp',
    link: 'detail-buku.html?book=slug-buku',
    meta: {
        Judul: 'Judul Buku Lengkap',
        Penulis: 'Nama Penulis',
        Penerbit: 'Deazha Prima Nusantara',
        Kategori: 'Pendidikan',
        ISBN: '978-...'
    },
    description: [
        'Paragraf deskripsi pertama.',
        'Paragraf deskripsi kedua.'
    ]
}
```

Kategori katalog dibaca otomatis dari `meta.Kategori` dan judul buku.

## Update Bahasa

Terjemahan teks berada di:

```text
js/script.js
```

Cari objek:

```js
const textTranslations = {...}
const phraseTranslations = {...}
```

Tambahkan pasangan teks Indonesia dan English bila ada teks baru yang belum ikut berubah saat tombol `EN` dipilih.

## Update Gambar

Simpan gambar di folder:

```text
images/
```

Gunakan format `.webp` bila memungkinkan agar ukuran file lebih ringan. Untuk artikel blog, samakan nama gambar dengan judul artikel agar mudah dilacak.

Contoh:

```text
Cara-Menentukan-Target-Pembaca.webp
Digital-Marketing-untuk-Meningkatkan-Brand-Image-Pesantren.webp
```

## SEO

File SEO utama:

```text
robots.txt
sitemap.xml
```

Jika ada halaman baru yang penting, tambahkan URL-nya ke `sitemap.xml`.

Setiap halaman utama juga memiliki meta description dan Open Graph dasar. Untuk artikel baru, sebaiknya tambahkan meta description unik di bagian `<head>` halaman artikel.

## Deployment

Upload seluruh isi folder project ke hosting. Pastikan struktur folder tetap sama:

```text
css/
js/
images/
*.html
robots.txt
sitemap.xml
```

Jika hosting memakai URL rapi seperti `/katalog/`, atur redirect atau rewrite dari:

```text
katalog.html -> /katalog/
blog.html -> /blog/
layanan.html -> /layanan/
```

## Catatan

- Jangan menghapus `js/site-data.js`, karena blog otomatis membutuhkan file ini.
- Jangan menghapus `js/script.js`, karena katalog, detail buku, bahasa, pencarian, filter, dan CTA WhatsApp berjalan dari file ini.
- `README-update.md` berisi panduan singkat update konten.
