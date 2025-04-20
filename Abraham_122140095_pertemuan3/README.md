# Bram.BookShelf - Aplikasi Manajemen Buku Pribadi

Bram.BookShelf adalah aplikasi web yang dikembangkan menggunakan React untuk membantu pengguna mengelola koleksi buku pribadi mereka. Dengan BookShelf, pengguna dapat mencatat buku-buku yang dimiliki, sedang dibaca, atau ingin dibeli, serta mencari dan memfilter daftar buku mereka dengan mudah.

## Screenshot Aplikasi Bram.BookShelf
1. Beranda : ![image](https://github.com/user-attachments/assets/d4810097-2573-4481-a0a0-c58f24c0a0de)
2. Statistik : ![image](https://github.com/user-attachments/assets/6dddbeba-0409-4ff9-a674-08d2adc4106d)
3. Form Tambah Buku : ![image](https://github.com/user-attachments/assets/107af3b9-5ebd-40b5-9501-3e8ce15f3914)
4. Form Edit Buku : ![image](https://github.com/user-attachments/assets/8b53f6f8-d9f6-4536-a018-189f6be0e5cc)

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
