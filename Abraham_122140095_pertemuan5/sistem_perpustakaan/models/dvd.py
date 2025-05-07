from models.library_item import LibraryItem

class DVD(LibraryItem):
    """
    Subclass DVD yang mewarisi dari LibraryItem
    """
    def __init__(self, title, year_published, publisher, director, duration):
        super().__init__(title, year_published, publisher)
        self._director = director
        self._duration = duration
    
    @property
    def director(self):
        return self._director
    
    @property
    def duration(self):
        return self._duration
    
    @property
    def item_type(self):
        return "DVD"
    
    def get_info(self):
        status = "Tersedia" if self._is_available else f"Dipinjam oleh {self._borrowed_by}"
        return f"[{self.item_type}] {self._title} ({self._year_published}), Sutradara: {self._director}, Durasi: {self._duration} menit. Status: {status}"
    
    def calculate_late_fee(self, days_late):
        # DVD dikenakan denda Rp5.000/hari
        return days_late * 5000