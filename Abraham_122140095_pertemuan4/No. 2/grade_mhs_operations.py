def kelola_nilai_mahasiswa():
    print("PROGRAM PENGELOLAAN DATA NILAI MAHASISWA")
    print("---------------------------------------")
    
    # Data mahasiswa: nama, nim, nilai_uts, nilai_uas, nilai_tugas
    mahasiswa = [
        {"nama": "Zefanya Danovanta", "nim": "122140101", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 88},
        {"nama": "Imad Aqil", "nim": "122140028", "nilai_uts": 88, "nilai_uas": 82, "nilai_tugas": 70},
        {"nama": "Ferdana Al-Hakim", "nim": "122140012", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 75},
        {"nama": "Tresnawan", "nim": "122140178", "nilai_uts": 75, "nilai_uas":55, "nilai_tugas": 82},
        {"nama": "Yasir Ahmad", "nim": "122140142", "nilai_uts": 45, "nilai_uas": 55, "nilai_tugas": 60}
    ]
    
    # Hitung nilai akhir dan grade untuk setiap mahasiswa
    for mhs in mahasiswa:
        # 30% UTS + 40% UAS + 30% Tugas
        nilai_akhir = 0.3 * mhs["nilai_uts"] + 0.4 * mhs["nilai_uas"] + 0.3 * mhs["nilai_tugas"]
        mhs["nilai_akhir"] = nilai_akhir
        
        if nilai_akhir >= 80:
            grade = "A"
        elif nilai_akhir >= 70:
            grade = "B"
        elif nilai_akhir >= 60:
            grade = "C"
        elif nilai_akhir >= 50:
            grade = "D"
        else:
            grade = "E"
        mhs["grade"] = grade
    
    # Tampilkan hasil dalam format tabel
    print("\nDAFTAR NILAI MAHASISWA")
    print("-" * 85)
    print(f"{'NO':3} | {'NIM':<10} | {'NAMA':<20} | {'UTS':^5} | {'UAS':^5} | {'TUGAS':^5} | {'AKHIR':^6} | {'GRADE':^5}")
    print("-" * 85)
    
    for i, mhs in enumerate(mahasiswa, 1):
        print(f"{i:3} | {mhs['nim']:<10} | {mhs['nama']:<20} | {mhs['nilai_uts']:^5} | {mhs['nilai_uas']:^5} | "
              f"{mhs['nilai_tugas']:^5} | {mhs['nilai_akhir']:^6.2f} | {mhs['grade']:^5}")
    
    print("-" * 85)
    
    # Tampilkan mahasiswa dengan nilai tertinggi dan terendah
    nilai_tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
    nilai_terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])
    
    print("\nMAHASISWA DENGAN NILAI TERTINGGI")
    print(f"Nama: {nilai_tertinggi['nama']}")
    print(f"NIM: {nilai_tertinggi['nim']}")
    print(f"Nilai Akhir: {nilai_tertinggi['nilai_akhir']:.2f}")
    print(f"Grade: {nilai_tertinggi['grade']}")
    
    print("\nMAHASISWA DENGAN NILAI TERENDAH")
    print(f"Nama: {nilai_terendah['nama']}")
    print(f"NIM: {nilai_terendah['nim']}")
    print(f"Nilai Akhir: {nilai_terendah['nilai_akhir']:.2f}")
    print(f"Grade: {nilai_terendah['grade']}")

# Main program
if __name__ == "__main__":
    kelola_nilai_mahasiswa()