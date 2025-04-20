# Bram.BookShelf - Aplikasi Manajemen Buku Pribadi

Bram.BookShelf adalah aplikasi web yang dikembangkan menggunakan React untuk membantu pengguna mengelola koleksi buku pribadi mereka. Dengan BookShelf, pengguna dapat mencatat buku-buku yang dimiliki, sedang dibaca, atau ingin dibeli, serta mencari dan memfilter daftar buku mereka dengan mudah.

![Screenshot Aplikasi BookShelf](./screenshot.png)

## Deskripsi Aplikasi

Bram.BookShelf menyediakan fitur-fitur berikut:

- **Manajemen Buku**
  - Menambahkan buku baru dengan judul, penulis, dan status (dimiliki, sedang dibaca, ingin dibeli)
  - Mengedit informasi buku yang sudah ada
  - Menghapus buku dari koleksi
  
- **Pencarian dan Filter**
  - Mencari buku berdasarkan judul atau penulis
  - Memfilter buku berdasarkan status (semua, dimiliki, sedang dibaca, ingin dibeli)
  
- **Statistik Koleksi**
  - Melihat jumlah total buku dalam koleksi
  - Melihat distribusi buku berdasarkan status
  - Melihat penulis dengan jumlah buku terbanyak dalam koleksi

## Fitur React yang Digunakan

### 1. React Hooks
- **useState** - Digunakan untuk mengelola state di function components
- **useEffect** - Digunakan untuk sinkronisasi dengan localStorage dan memfilter buku
- **useContext** - Digunakan untuk mengakses context API secara efisien

### 2. Context API
- **BookContext** - Menyediakan state management terpusat untuk seluruh aplikasi
- **useBooks** - Custom hook untuk mengakses BookContext dengan mudah

### 3. Custom Hooks
- **useLocalStorage** - Menyediakan integrasi antara state React dan localStorage
- **useBookStats** - Menghitung statistik dari daftar buku

### 4. React Router
- Digunakan untuk navigasi antar halaman