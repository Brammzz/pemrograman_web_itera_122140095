from models.library_item import LibraryItem

class Library:
    """
    Class untuk mengelola koleksi item perpustakaan
    """
    def __init__(self, name):
        self.__name = name
        self.__items = {}  
    
    @property
    def name(self):
        return self.__name
    
    def add_item(self, item):
        """
        Menambahkan item ke perpustakaan
        
        Args:
            item: Objek dari turunan LibraryItem
        
        Returns:
            tuple: (success, message)
        """
        if not isinstance(item, LibraryItem):
            return False, "Item harus berupa turunan dari LibraryItem"
        
        self.__items[item.id] = item
        return True, f"{item.item_type} '{item.title}' berhasil ditambahkan ke perpustakaan"
    
    def remove_item(self, item_id):
        """
        Menghapus item dari perpustakaan
        
        Args:
            item_id: ID item yang akan dihapus
        
        Returns:
            tuple: (success, message)
        """
        if item_id not in self.__items:
            return False, f"Item dengan ID {item_id} tidak ditemukan"
        
        item = self.__items.pop(item_id)
        return True, f"{item.item_type} '{item.title}' berhasil dihapus dari perpustakaan"
    
    def get_item_by_id(self, item_id):
        """
        Mencari item berdasarkan ID
        
        Args:
            item_id: ID item yang dicari
        
        Returns:
            LibraryItem atau None
        """
        if item_id in self.__items:
            return self.__items[item_id]
        return None
    
    def search_items(self, keyword):
        """
        Mencari item berdasarkan keyword di judul
        
        Args:
            keyword: Kata kunci pencarian
        
        Returns:
            list: Daftar item yang sesuai dengan keyword
        """
        results = []
        for item in self.__items.values():
            if keyword.lower() in item.title.lower():
                results.append(item)
        return results
    
    def get_available_items(self):
        """
        Mendapatkan daftar item yang tersedia
        
        Returns:
            list: Daftar item yang tersedia
        """
        return [item for item in self.__items.values() if item.is_available]
    
    def get_borrowed_items(self):
        """
        Mendapatkan daftar item yang sedang dipinjam
        
        Returns:
            list: Daftar item yang sedang dipinjam
        """
        return [item for item in self.__items.values() if not item.is_available]
    
    def get_all_items(self):
        """
        Mendapatkan semua item di perpustakaan
        
        Returns:
            list: Semua item di perpustakaan
        """
        return list(self.__items.values())
    
    def get_items_by_type(self, item_type):
        """
        Mendapatkan daftar item berdasarkan tipe
        
        Args:
            item_type: Tipe item ('Buku', 'Majalah', 'DVD', dll)
        
        Returns:
            list: Daftar item yang sesuai dengan tipe
        """
        return [item for item in self.__items.values() if item.item_type == item_type]
    
    def get_item_count(self):
        """
        Mendapatkan jumlah item di perpustakaan
        
        Returns:
            int: Jumlah item
        """
        return len(self.__items)
    
    def __str__(self):
        """
        Representasi string dari perpustakaan
        """
        return f"{self.__name} - {self.get_item_count()} item"