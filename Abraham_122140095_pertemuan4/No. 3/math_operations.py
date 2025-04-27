# Berisi operasi matematika

# Konstanta
PI = 3.14159

# Fungsi untuk menghitung luas dan keliling bentuk geometri
def luas_persegi(sisi):
    """Menghitung luas persegi dengan panjang sisi tertentu"""
    return sisi * sisi

def keliling_persegi(sisi):
    """Menghitung keliling persegi dengan panjang sisi tertentu"""
    return 4 * sisi

def luas_persegi_panjang(panjang, lebar):
    """Menghitung luas persegi panjang dengan panjang dan lebar tertentu"""
    return panjang * lebar

def keliling_persegi_panjang(panjang, lebar):
    """Menghitung keliling persegi panjang dengan panjang dan lebar tertentu"""
    return 2 * (panjang + lebar)

def luas_lingkaran(jari_jari):
    """Menghitung luas lingkaran dengan jari-jari tertentu"""
    return PI * jari_jari * jari_jari

def keliling_lingkaran(jari_jari):
    """Menghitung keliling (panjang busur) lingkaran dengan jari-jari tertentu"""
    return 2 * PI * jari_jari

# Fungsi untuk konversi suhu
def celsius_ke_fahrenheit(celsius):
    """Mengkonversi suhu dari Celsius ke Fahrenheit"""
    return (celsius * 9/5) + 32

def celsius_ke_kelvin(celsius):
    """Mengkonversi suhu dari Celsius ke Kelvin"""
    return celsius + 273.15

def fahrenheit_ke_celsius(fahrenheit):
    """Mengkonversi suhu dari Fahrenheit ke Celsius"""
    return (fahrenheit - 32) * 5/9