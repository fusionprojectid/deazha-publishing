# Panduan Update Konten Deazha Publishing

## Update Artikel Blog

Data daftar artikel ada di `js/site-data.js` pada bagian `posts`.

Tambahkan item baru di array tersebut dengan format:

```js
{
    title: 'Judul artikel',
    date: '2026-01-31',
    dateLabel: '31 Januari 2026',
    category: 'Tips & Trik',
    url: 'nama-file-artikel.html',
    image: './images/nama-gambar.webp',
    alt: 'Deskripsi gambar',
    excerpt: 'Ringkasan pendek artikel.'
}
```

Halaman blog otomatis mengurutkan artikel dari tanggal terbaru dan menjadikan artikel terbaru sebagai hero.

## Update Katalog Buku

Data katalog buku masih berada di `js/script.js` pada array `booksCatalog`.

Setiap buku minimal memiliki:

```js
{
    slug: 'slug-buku',
    title: 'Judul Buku Lengkap',
    shortTitle: 'Judul Pendek',
    imgSrc: './images/cover.webp',
    link: 'detail-buku.html?book=slug-buku',
    meta: { Judul: 'Judul Buku', Penerbit: 'Deazha Prima Nusantara', Kategori: 'Pendidikan' },
    description: ['Paragraf deskripsi pertama.', 'Paragraf deskripsi kedua.']
}
```

Filter katalog otomatis membaca kategori dari `meta.Kategori` dan judul buku.
