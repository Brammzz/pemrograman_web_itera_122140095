#  Aplikasi Manajemen Matakuliah – Pyramid RESTful API

Aplikasi ini dibuat untuk mengelola data matakuliah menggunakan **Pyramid Framework**, **SQLAlchemy**, dan **PostgreSQL**, dengan dukungan penuh untuk operasi **CRUD RESTful API**.

---

## 💠 Fitur Utama

* ✅ Tambah matakuliah (POST)
* ✅ Ambil semua matakuliah (GET)
* ✅ Ambil matakuliah berdasarkan ID (GET)
* ✅ Update matakuliah (PUT)
* ✅ Hapus matakuliah (DELETE)

---

## ⚙️ Konfigurasi Database

Pastikan file `development.ini` memiliki konfigurasi berikut:

```ini
sqlalchemy.url = postgresql://pyramid_user:pyramid_pass@localhost:5432/pyramid_matakuliah
```

---

## ▶️ Cara Menjalankan Aplikasi

1. Aktifkan virtual environment:

```bash
.\venv\Scripts\activate
```

2. Jalankan migrasi database:

```bash
alembic -c development.ini upgrade head
```

3. Jalankan server:

```bash
pserve development.ini --reload
```

Akses API di: [http://localhost:6543/api/matakuliah](http://localhost:6543/api/matakuliah)

---

## 🔍 Testing API via Postman

### 🔹 GET semua matakuliah

```
GET http://localhost:6543/api/matakuliah
```

---

### 🔹 POST tambah matakuliah

```
POST http://localhost:6543/api/matakuliah
```

Body (JSON):

```json
{
  "kode_mk": "IF101",
  "nama_mk": "Pemrograman Web",
  "sks": 3,
  "semester": 5
}
```

📸 Screenshot:

![POST](post.png)

---

### 🔹 GET matakuliah berdasarkan ID

```
GET http://localhost:6543/api/matakuliah/1
```

📸 Screenshot:

![GET by ID](getbyid.png)

---

### 🔹 PUT update matakuliah

```
PUT http://localhost:6543/api/matakuliah/1
```

Body (JSON):

```json
{
  "nama_mk": "Pemrograman Web Lanjut",
  "sks": 4
}
```

### 🔹 DELETE matakuliah

```
DELETE http://localhost:6543/api/matakuliah/1
```

📸 Screenshot:

![DELETE](delete.png)

---

## 📁 Struktur Folder

```
pyramid_matakuliah/
├── alembic/
│   └── versions/
├── pyramid_matakuliah/
│   ├── models/
│   ├── views/
│   ├── routes.py
│   └── __init__.py
├── development.ini
├── README.md
```

---

## ✅ Catatan

* Pastikan PostgreSQL berjalan
* Jalankan migrasi sebelum menjalankan server
* Gunakan **Postman Desktop Agent** untuk mengakses `localhost`

---

Happy Coding! ✨
