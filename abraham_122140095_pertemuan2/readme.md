Fitur-Fitur
Task Management: Pengguna dapat menambahkan tugas, mengeditnya, menandainya sebagai selesai, dan menghapus tugas yang tidak lagi diperlukan.

Note Management: Pengguna dapat menambahkan catatan pribadi, mengeditnya, dan menghapus catatan yang sudah tidak diperlukan lagi.

Schedule Management: Pengguna dapat menambahkan acara dengan waktu dan tanggal tertentu, serta melihat status acara (apakah sudah berlalu atau akan datang).

Real-Time Date & Time: Tampilan tanggal dan waktu yang selalu diperbarui secara real-time.

Interaktif UI: Tampilan yang responsif dan desain yang menarik dengan interaksi yang mudah diakses.

Dark Mode UI: Desain gelap untuk kenyamanan mata saat digunakan di malam hari.

Fitur-Fitur ES6+ yang Diimplementasikan
Aplikasi ini menggunakan fitur ES6 dan fitur JavaScript modern lainnya untuk meningkatkan kinerja dan kemudahan pengembangan. Berikut adalah daftar fitur ES6+ yang diimplementasikan dalam aplikasi:

1. Class Syntax
Digunakan untuk mendefinisikan DashboardApp dan DataManager (untuk task, note, dan schedule) yang mengelola data dan interaksi di aplikasi.

2. Modules
Aplikasi ini dibangun dengan menggunakan ES6 Modules untuk pemisahan kode yang lebih modular dan terorganisir. Beberapa file seperti app.js, data.js, dan utils.js dipisahkan menjadi modul-modul untuk menangani fungsionalitas yang berbeda.

3. Arrow Functions
Menggunakan fungsi panah untuk penulisan fungsi yang lebih ringkas dan efisien, seperti pada event listeners dan callback functions.

4. Async/Await
Digunakan untuk menangani operasi asinkron seperti pemanggilan API atau simulasi pengecekan status dengan cara yang lebih mudah dibaca dan ditulis.

5. Template Literals
Template literals digunakan untuk membangun string dinamis yang lebih mudah dibaca, seperti dalam pembuatan elemen HTML di dalam fungsi renderTaskItem, renderNoteItem, dan renderScheduleItem.

6. Destructuring
Digunakan untuk mengekstrak nilai dari objek atau array dengan cara yang lebih ringkas, misalnya untuk menangani data tugas dan catatan.

7. Spread Operator
Digunakan untuk menyalin atau menggabungkan array dan objek dengan cara yang lebih efisien.

8. Default Parameters
Beberapa fungsi menggunakan parameter default untuk menangani kasus di mana argumen tidak diberikan.

9. Event Listeners
Menggunakan event listeners untuk menangani berbagai aksi interaktif dalam aplikasi, seperti klik tombol untuk menambah, mengedit, dan menghapus tugas atau catatan.

10. SetTimeout and SetInterval
Digunakan untuk menangani fungsi pengupdatean waktu secara real-time, memastikan tampilan waktu selalu terbarui setiap detiknya.

11. Promises
Digunakan untuk menangani operasi asynchronous seperti simulasi pengecekan API atau proses yang membutuhkan waktu, untuk menjaga UI tetap responsif.
