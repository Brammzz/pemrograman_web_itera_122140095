from models.library_item import LibraryItem

class Journal(LibraryItem):
    """
    Subclass Journal yang mewarisi dari LibraryItem
    """
    def __init__(self, title, year_published, publisher, volume, field):
        super().__init__(title, year_published, publisher)
        self._volume = volume
        self._field = field

    @property
    def volume(self):
        return self._volume

    @property
    def field(self):
        return self._field

    @property
    def item_type(self):
        return "Jurnal"

    def get_info(self):
        status = "Tersedia" if self._is_available else f"Dipinjam oleh {self._borrowed_by}"
        return f"[{self.item_type}] {self._title} - Volume {self._volume}, Bidang: {self._field}, Tahun: {self._year_published}, Penerbit: {self._publisher}. Status: {status}"

    def calculate_late_fee(self, days_late):
        # Jurnal dikenakan denda Rp3.000/hari
        return days_late * 3000
