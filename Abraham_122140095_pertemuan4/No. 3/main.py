# main.py
# Program utama yang menggunakan modul math_operations

# Import seluruh modul
import math_operations

# Import fungsi tertentu secara langsung
from math_operations import luas_lingkaran, keliling_lingkaran, celsius_ke_fahrenheit

def main():
    print("PROGRAM OPERASI MATEMATIKA")
    print("=========================")
    
    # Bentuk Geometri 
    print("\n--- Perhitungan Bentuk Geometri ---")
    
    # Persegi
    sisi = 5
    print(f"\nPersegi dengan sisi = {sisi}")
    print(f"Luas = {math_operations.luas_persegi(sisi)}")
    print(f"Keliling = {math_operations.keliling_persegi(sisi)}")
    
    # Persegi Panjang
    panjang, lebar = 8, 4
    print(f"\nPersegi Panjang dengan panjang = {panjang}, lebar = {lebar}")
    print(f"Luas = {math_operations.luas_persegi_panjang(panjang, lebar)}")
    print(f"Keliling = {math_operations.keliling_persegi_panjang(panjang, lebar)}")
    
    # Lingkaran (menggunakan import cara 2)
    jari_jari = 7
    print(f"\nLingkaran dengan jari-jari = {jari_jari}")
    print(f"Luas = {luas_lingkaran(jari_jari):.2f}")
    print(f"Keliling = {keliling_lingkaran(jari_jari):.2f}")
    print(f"Nilai PI yang digunakan = {math_operations.PI}")
    
    # Konversi Suhu 
    print("\n--- Konversi Suhu ---")
    
    # Celsius ke Fahrenheit (menggunakan import cara 2)
    celsius = 25
    print(f"\nSuhu {celsius}°C = {celsius_ke_fahrenheit(celsius):.2f}°F")
    
    # Celsius ke Kelvin
    print(f"Suhu {celsius}°C = {math_operations.celsius_ke_kelvin(celsius):.2f}K")
    
    # Fahrenheit ke Celsius
    fahrenheit = 98.6
    print(f"Suhu {fahrenheit}°F = {math_operations.fahrenheit_ke_celsius(fahrenheit):.2f}°C")

if __name__ == "__main__":
    main()