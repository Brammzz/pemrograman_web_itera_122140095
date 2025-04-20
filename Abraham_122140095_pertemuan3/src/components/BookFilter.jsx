import React from 'react';
import { useBooks } from '../context/BookContext';

/**
 * Komponen untuk memfilter buku berdasarkan status
 */
const BookFilter = () => {
  const { filter, setFilter } = useBooks();

  // Handler untuk perubahan filter
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="book-filter">
      <span className="filter-label">Filter:</span>
      <div className="filter-options">
        <label className={`filter-option ${filter === 'all' ? 'active' : ''}`}>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={handleFilterChange}
          />
          Semua
        </label>
        
        <label className={`filter-option ${filter === 'owned' ? 'active' : ''}`}>
          <input
            type="radio"
            name="filter"
            value="owned"
            checked={filter === 'owned'}
            onChange={handleFilterChange}
          />
          Dimiliki
        </label>
        
        <label className={`filter-option ${filter === 'reading' ? 'active' : ''}`}>
          <input
            type="radio"
            name="filter"
            value="reading"
            checked={filter === 'reading'}
            onChange={handleFilterChange}
          />
          Sedang Dibaca
        </label>
        
        <label className={`filter-option ${filter === 'toBuy' ? 'active' : ''}`}>
          <input
            type="radio"
            name="filter"
            value="toBuy"
            checked={filter === 'toBuy'}
            onChange={handleFilterChange}
          />
          Ingin Dibeli
        </label>
      </div>
    </div>
  );
};

export default BookFilter;