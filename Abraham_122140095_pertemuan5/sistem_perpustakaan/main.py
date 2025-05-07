from models.book import Book
from models.magazine import Magazine
from models.dvd import DVD
from models.journal import Journal
from library import Library
from utils.date_utils import calculate_days_overdue, format_date
from datetime import datetime

def main():
    print("=== SISTEM MANAJEMEN PERPUSTAKAAN ===")
    perpus = Library("Perpustakaan Kota")
    print(f"Perpustakaan berhasil dibuat: {perpus}")

    buku1 = Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "Bloomsbury", "9780747532699", 223)
    buku2 = Book("To Kill a Mockingbird", "Harper Lee", 1960, "J. B. Lippincott & Co.", "9780061120084", 281)
    buku3 = Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Charles Scribner's Sons", "9780743273565", 180)

    majalah1 = Magazine("National Geographic", 2023, "National Geographic Society", "Vol. 243", "January")
    majalah2 = Magazine("Time", 2023, "Time USA, LLC", "Vol. 201", "February")

    dvd1 = DVD("The Shawshank Redemption", 1994, "Columbia Pictures", "Frank Darabont", 142)
    dvd2 = DVD("The Godfather", 1972, "Paramount Pictures", "Francis Ford Coppola", 175)

    jurnal1 = Journal("Indonesian Journal of Computer Science", 2022, "UI Press", "Vol. 10 No. 2", "Informatika")
    jurnal2 = Journal("Journal of Agricultural Research", 2021, "IPB Press", "Vol. 5 No. 1", "Pertanian")

    print("\n=== Menambahkan Item ke Perpustakaan ===")
    for item in [buku1, buku2, buku3, majalah1, majalah2, dvd1, dvd2, jurnal1, jurnal2]:
        status, message = perpus.add_item(item)
        print(message)

    while True:
        print("\n=== MENU UTAMA ===")
        print("1. Lihat Semua Item")
        print("2. Cari Item")
        print("3. Pinjam Item")
        print("4. Kembalikan Item")
        print("5. Lihat Item yang Tersedia")
        print("6. Lihat Item yang Dipinjam")
        print("7. Keluar")

        pilihan = input("\nPilih menu (1-7): ")

        if pilihan == "1":
            tampilkan_semua_item(perpus)
        elif pilihan == "2":
            cari_item(perpus)
        elif pilihan == "3":
            pinjam_item(perpus)
        elif pilihan == "4":
            kembalikan_item(perpus)
        elif pilihan == "5":
            tampilkan_item_tersedia(perpus)
        elif pilihan == "6":
            tampilkan_item_dipinjam(perpus)
        elif pilihan == "7":
            print("\nTerima kasih telah menggunakan Sistem Manajemen Perpustakaan!")
            break
        else:
            print("\nPilihan tidak valid. Silakan pilih menu 1-7.")

def tampilkan_semua_item(perpus):
    print("\n=== SEMUA ITEM DI PERPUSTAKAAN ===")
    items = perpus.get_all_items()
    if not items:
        print("Tidak ada item di perpustakaan.")
        return
    for i, item in enumerate(items, 1):
        print(f"{i}. [{item.id}] {item.get_info()}")

def cari_item(perpus):
    keyword = input("\nMasukkan kata kunci pencarian: ")
    results = perpus.search_items(keyword)
    print(f"\n=== HASIL PENCARIAN: '{keyword}' ===")
    if not results:
        print(f"Tidak ditemukan item dengan kata kunci '{keyword}'.")
        return
    for i, item in enumerate(results, 1):
        print(f"{i}. [{item.id}] {item.get_info()}")

def pinjam_item(perpus):
    item_id = input("\nMasukkan ID item yang ingin dipinjam: ")
    item = perpus.get_item_by_id(item_id)
    if not item:
        print(f"Item dengan ID '{item_id}' tidak ditemukan.")
        return
    if not item.is_available:
        print(f"{item.item_type} '{item.title}' sedang dipinjam oleh {item.borrowed_by}.")
        return
    borrower = input("Masukkan nama peminjam: ")
    lama_pinjam = int(input("Masukkan lama peminjaman (hari): "))
    status, message = item.borrow(borrower, lama_pinjam)
    print(message)
    if status:
        print(f"Tanggal pengembalian: {format_date(item.return_date)}")

def kembalikan_item(perpus):
    item_id = input("\nMasukkan ID item yang ingin dikembalikan: ")
    item = perpus.get_item_by_id(item_id)
    if not item:
        print(f"Item dengan ID '{item_id}' tidak ditemukan.")
        return
    if item.is_available:
        print(f"{item.item_type} '{item.title}' tidak sedang dipinjam.")
        return
    days_late = calculate_days_overdue(item.return_date)
    status, message = item.return_item()
    print(message)
    if status and days_late > 0:
        denda = item.calculate_late_fee(days_late)
        print(f"Terlambat {days_late} hari. Denda: Rp{denda}")
    elif status:
        print("Item dikembalikan tepat waktu. Tidak ada denda.")

def tampilkan_item_tersedia(perpus):
    print("\n=== ITEM YANG TERSEDIA ===")
    items = perpus.get_available_items()
    if not items:
        print("Tidak ada item yang tersedia.")
        return
    for i, item in enumerate(items, 1):
        print(f"{i}. [{item.id}] {item.get_info()}")

def tampilkan_item_dipinjam(perpus):
    print("\n=== ITEM YANG DIPINJAM ===")
    items = perpus.get_borrowed_items()
    if not items:
        print("Tidak ada item yang sedang dipinjam.")
        return
    for i, item in enumerate(items, 1):
        print(f"{i}. [{item.id}] {item.get_info()}")
        print(f"   Dipinjam oleh: {item.borrowed_by}")
        print(f"   Tanggal kembali: {format_date(item.return_date)}")

if __name__ == "__main__":
    main()
