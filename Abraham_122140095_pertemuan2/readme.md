Dashboard Abraham
Aplikasi Dashboard Abraham adalah aplikasi web untuk mengelola tugas, catatan, dan jadwal dengan antarmuka yang sederhana dan mudah digunakan. Aplikasi ini menyimpan data di localStorage browser, memungkinkan Anda untuk menambahkan, mengedit, menghapus tugas, catatan, dan acara sesuai kebutuhan.

Fitur
Tugas: Menambah, mengedit, menyelesaikan, dan menghapus tugas.

Catatan: Menambah, menghapus, dan menampilkan catatan.

Jadwal: Menambah, menghapus, dan melihat acara berdasarkan waktu.

Tanggal & Waktu: Menampilkan tanggal dan waktu saat ini, serta memberikan pembaruan waktu secara real-time.

Teknologi
HTML5 untuk struktur halaman.

CSS3 untuk styling dan tata letak responsif.

JavaScript (ES6) untuk logika aplikasi, termasuk manajemen tugas, catatan, dan jadwal.

localStorage untuk menyimpan data secara lokal di browser.

Modular JavaScript dengan penggunaan import dan export.

Penjelasan Kode
index.html
File utama yang memuat struktur HTML dari aplikasi. Ini berisi:

Form untuk menambah tugas, catatan, dan jadwal.

Daftar tugas, catatan, dan jadwal yang ditampilkan di halaman.

Waktu dan tanggal yang terus diperbarui setiap detik.

css/style.css
File CSS yang memberikan desain responsif dan penataan layout untuk aplikasi. Anda bisa mengeditnya untuk menyesuaikan tampilan dan nuansa aplikasi.

js/main.js
File JavaScript utama yang memulai aplikasi saat halaman dimuat. Di sini kita menginisialisasi instance dari DashboardApp dan melakukan simulasi pemeriksaan API yang diselesaikan setelah satu detik.

js/app.js
File yang mengelola logika aplikasi. Di sini terdapat 3 komponen utama:

TaskManager: Menambah, mengedit, menghapus, dan menandai tugas sebagai selesai.

NoteManager: Menambah dan menghapus catatan.

ScheduleManager: Menambah dan menghapus acara, serta menampilkan acara berdasarkan waktu.

js/data.js
File yang berisi kelas TaskManager, NoteManager, dan ScheduleManager yang masing-masing menangani data tugas, catatan, dan jadwal menggunakan localStorage.

js/utils.js
Berisi berbagai fungsi utilitas untuk memformat tanggal, waktu, serta menghitung waktu relatif antara sekarang dan waktu tertentu.

Fitur Utama
1. Manajemen Tugas
Pengguna dapat menambah tugas baru dengan mengetikkan deskripsi di input dan mengklik tombol Tambah.

Setiap tugas dapat diselesaikan atau dibatalkan penyelesaiannya.

Tugas dapat diedit dan dihapus.

2. Manajemen Catatan
Pengguna dapat menambah catatan baru.

Setiap catatan dapat dihapus.

3. Manajemen Jadwal
Pengguna dapat menambah acara baru dengan menentukan judul kegiatan dan waktu.

Acara ditampilkan dengan status "UpComing" atau "Past" (tergantung apakah acara sudah berlalu atau belum).

Acara dapat dihapus.

4. Tanggal dan Waktu
Waktu dan tanggal saat ini ditampilkan di bagian header.

Waktu ini diperbarui setiap detik secara real-time.

Fungsi Utilitas
formatDate(dateString)
Memformat tanggal dalam format lokal Indonesia (ID).

formatTime(dateString)
Memformat waktu dalam format lokal Indonesia (ID).

isPast(dateString)
Memeriksa apakah tanggal yang diberikan sudah lewat.

formatRelativeTime(dateString)
Menampilkan waktu dalam format relatif, misalnya "1 menit yang lalu", "dalam 2 jam", dll.

updateDateTime()
Memperbarui elemen waktu di halaman setiap detik.

generateId()
Menghasilkan ID unik berdasarkan waktu saat ini dan angka acak.

![image](https://github.com/user-attachments/assets/9906f1f9-e664-43f3-8c69-39c0db7c7386)
