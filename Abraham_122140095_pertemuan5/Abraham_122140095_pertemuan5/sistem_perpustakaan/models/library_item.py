from abc import ABC, abstractmethod
from datetime import datetime, timedelta
import uuid

class LibraryItem(ABC):
    """
    Abstract class yang menjadi dasar untuk semua item di perpustakaan
    """
    def __init__(self, title, year_published, publisher):
        self._id = str(uuid.uuid4())[:8]  # ID unik menggunakan uuid
        self._title = title
        self._year_published = year_published
        self._publisher = publisher
        self._is_available = True
        self._borrowed_by = None
        self._borrowed_date = None
        self._return_date = None
    
    @property
    def id(self):
        return self._id
    
    @property
    def title(self):
        return self._title
    
    @title.setter
    def title(self, value):
        if not value:
            raise ValueError("Judul tidak boleh kosong")
        self._title = value
    
    @property
    def is_available(self):
        return self._is_available
    
    @property
    def borrowed_by(self):
        return self._borrowed_by
    
    @property
    def borrowed_date(self):
        return self._borrowed_date
    
    @property
    def return_date(self):
        return self._return_date
    
    def borrow(self, borrower_name, days=14):
        """
        Method untuk meminjam item
        """
        if not self._is_available:
            return False, f"{self.item_type} '{self._title}' sedang dipinjam"
        
        self._is_available = False
        self._borrowed_by = borrower_name
        self._borrowed_date = datetime.now()
        self._return_date = self._borrowed_date + timedelta(days=days)
        return True, f"{self.item_type} '{self._title}' berhasil dipinjam oleh {borrower_name}"
    
    def return_item(self):
        """
        Method untuk mengembalikan item
        """
        if self._is_available:
            return False, f"{self.item_type} '{self._title}' tidak sedang dipinjam"
        
        self._is_available = True
        self._borrowed_by = None
        self._borrowed_date = None
        self._return_date = None
        return True, f"{self.item_type} '{self._title}' berhasil dikembalikan"
    
    @abstractmethod
    def get_info(self):
        """
        Method abstract yang harus diimplementasikan oleh subclass
        """
        pass
    
    @abstractmethod
    def calculate_late_fee(self, days_late):
        """
        Method abstract untuk menghitung denda keterlambatan
        """
        pass
    
    @property
    @abstractmethod
    def item_type(self):
        """
        Property abstract untuk tipe item
        """
        pass