# Sistem Manajemen Perpustakaan

Sistem manajemen perpustakaan sederhana ini memungkinkan pengguna untuk mengelola buku, majalah, journal, DVD, dan item perpustakaan lainnya. Sistem ini dibangun dengan konsep Object-Oriented Programming (OOP) dalam Python.

## Fitur

- Menambahkan berbagai jenis item (buku, majalah, journal, DVD) ke perpustakaan
- Meminjam dan mengembalikan item
- Mencari item berdasarkan judul
- Menampilkan daftar item yang tersedia dan yang dipinjam
- Menghitung denda keterlambatan

## Struktur Project

```
library_management_system/
│
├── models/
│   ├── __init__.py
│   ├── library_item.py      # Abstract class LibraryItem
│   ├── book.py              # Subclass Book
│   ├── magazine.py          # Subclass Magazine
│   ├── dvd.py               # Subclass DVD
│   └── journal.py           # Subclass Journal
│
├── utils/
│   ├── __init__.py
│   └── date_utils.py        # Fungsi-fungsi pembantu terkait tanggal
│
├── library.py               # Class Library
├── main.py                  # File utama untuk menjalankan program
└── README.md                # Dokumentasi proyek
```

## Konsep OOP yang Diimplementasikan

### 1. Abstract Class dan Inheritance
- `LibraryItem` adalah abstract class yang menjadi dasar untuk semua item perpustakaan
- `Book`, `Magazine`, `Journal` dan `DVD` adalah subclass yang mewarisi dari `LibraryItem`
- Setiap subclass mengimplementasikan method abstract yang didefinisikan di parent class

### 2. Encapsulation
- Menggunakan access modifiers (protected dengan underscore tunggal `_`, private dengan double underscore `__`)
- Property decorator untuk mengontrol akses ke atribut

### 3. Polymorphism
- Setiap subclass mengimplementasikan method yang sama (`get_info()`, `calculate_late_fee()`) dengan cara yang berbeda
- Property `item_type` memberikan representasi string yang berbeda untuk setiap subclass

## Cara Menjalankan

1. Pastikan semua file berada pada struktur direktori yang benar
2. Jalankan file `main.py`:

```bash
python main.py
```

## Contoh Penggunaan

Setelah menjalankan `main.py`, Anda akan melihat menu utama sistem. Pilih opsi yang diinginkan dengan memasukkan nomor opsi yang tersedia.

### Contoh Peminjaman Item

1. Pilih opsi "3. Pinjam Item"
2. Masukkan ID item yang ingin dipinjam
3. Masukkan nama peminjam dan lama peminjaman
4. Sistem akan menampilkan pesan konfirmasi dan tanggal pengembalian

### Contoh Pengembalian Item

1. Pilih opsi "4. Kembalikan Item"
2. Masukkan ID item yang ingin dikembalikan
3. Sistem akan menghitung denda jika terlambat dan menampilkan informasi pengembalian

## Pengembangan Lebih Lanjut

Sistem ini dapat dikembangkan lebih lanjut dengan menambahkan fitur-fitur seperti:

- Database untuk penyimpanan data permanen
- Antarmuka pengguna grafis (GUI)
- Fitur laporan (peminjaman, ketersediaan, denda)
- Sistem autentikasi untuk petugas dan anggota perpustakaan
- Fitur reservasi item
