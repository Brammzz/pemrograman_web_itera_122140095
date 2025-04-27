def hitung_bmi():
    print("KALKULATOR BMI")
    print("--------------")
    
    # Input berat dan tinggi
    try:
        berat = float(input("Masukkan berat badan (kg): "))
        tinggi = float(input("Masukkan tinggi badan (m): "))
        
        # Validasi input
        if berat <= 0 or tinggi <= 0:
            print("Error: Berat dan tinggi harus bernilai positif!")
            return
            
        # Hitung BMI
        bmi = berat / (tinggi * tinggi)
        
        # Tentukan kategori BMI
        if bmi < 18.5:
            kategori = "Berat badan kurang"
        elif 18.5 <= bmi < 25:
            kategori = "Berat badan normal"
        elif 25 <= bmi < 30:
            kategori = "Berat badan berlebih"
        else:  # bmi >= 30
            kategori = "Obesitas"
            
        # Hasil
        print("\nHasil Perhitungan:")
        print(f"BMI = {bmi:.2f}")
        print(f"Kategori: {kategori}")
        
    except ValueError:
        print("Error: Masukkan angka yang valid!")

# Main Program
if __name__ == "__main__":
    hitung_bmi()