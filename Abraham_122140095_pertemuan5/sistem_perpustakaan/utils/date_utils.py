from datetime import datetime, timedelta

def calculate_days_overdue(return_date):
    """
    Menghitung berapa hari keterlambatan dari tanggal pengembalian
    """
    if not return_date:
        return 0
        
    today = datetime.now()
    if today <= return_date:
        return 0
    
    delta = today - return_date
    return delta.days

def format_date(date_obj):
    """
    Format tanggal menjadi string yang mudah dibaca
    """
    if not date_obj:
        return "Tidak tersedia"
    
    return date_obj.strftime("%d %B %Y")

def add_days(date_obj, days):
    """
    Menambahkan sejumlah hari ke objek tanggal
    """
    if not date_obj:
        date_obj = datetime.now()
    
    return date_obj + timedelta(days=days)