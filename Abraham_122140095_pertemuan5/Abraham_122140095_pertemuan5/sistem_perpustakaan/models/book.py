from models.library_item import LibraryItem

class Book(LibraryItem):
    """
    Subclass Book yang mewarisi dari LibraryItem
    """
    def __init__(self, title, author, year_published, publisher, isbn, pages):
        super().__init__(title, year_published, publisher)
        self._author = author
        self._isbn = isbn
        self._pages = pages
    
    @property
    def author(self):
        return self._author
    
    @property
    def isbn(self):
        return self._isbn
    
    @property
    def pages(self):
        return self._pages
    
    @property
    def item_type(self):
        return "Buku"
    
    def get_info(self):
        status = "Tersedia" if self._is_available else f"Dipinjam oleh {self._borrowed_by}"
        return f"[{self.item_type}] {self._title} oleh {self._author} ({self._year_published}), ISBN: {self._isbn}, {self._pages} halaman. Status: {status}"
    
    def calculate_late_fee(self, days_late):
        # Buku dikenakan denda Rp2.000/hari
        return days_late * 2000