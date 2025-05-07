from models.library_item import LibraryItem

class Magazine(LibraryItem):
    """
    Subclass Magazine yang mewarisi dari LibraryItem
    """
    def __init__(self, title, year_published, publisher, issue_number, month):
        super().__init__(title, year_published, publisher)
        self._issue_number = issue_number
        self._month = month
    
    @property
    def issue_number(self):
        return self._issue_number
    
    @property
    def month(self):
        return self._month
    
    @property
    def item_type(self):
        return "Majalah"
    
    def get_info(self):
        status = "Tersedia" if self._is_available else f"Dipinjam oleh {self._borrowed_by}"
        return f"[{self.item_type}] {self._title} - Edisi {self._month} {self._year_published}, No. {self._issue_number}, Penerbit: {self._publisher}. Status: {status}"
    
    def calculate_late_fee(self, days_late):
        # Majalah dikenakan denda Rp1.000/hari
        return days_late * 1000