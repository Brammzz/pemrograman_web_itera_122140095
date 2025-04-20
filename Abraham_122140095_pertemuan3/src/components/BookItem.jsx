import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useBooks } from '../context/BookContext';

/**
 * Komponen untuk menampilkan setiap buku dalam daftar
 */
const BookItem = ({ book, onEdit }) => {
  const { deleteBook } = useBooks();
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  // Render status buku dalam bahasa Indonesia
  const renderStatus = (status) => {
    switch (status) {
      case 'owned':
        return <span className="status owned">Dimiliki</span>;
      case 'reading':
        return <span className="status reading">Sedang Dibaca</span>;
      case 'toBuy':
        return <span className="status to-buy">Ingin Dibeli</span>;
      default:
        return <span className="status unknown">Status Tidak Diketahui</span>;
    }
  };

  // Handler untuk konfirmasi hapus
  const handleDeleteClick = () => {
    setShowConfirmDelete(true);
  };

  // Handler untuk konfirmasi ya
  const handleConfirmDelete = () => {
    deleteBook(book.id);
    setShowConfirmDelete(false);
  };

  // Handler untuk batal hapus
  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <div className="book-item">
      <div className="book-details">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">Penulis: {book.author}</p>
        <div className="book-status">
          {renderStatus(book.status)}
        </div>
        {book.description && (
          <p className="book-description">{book.description}</p>
        )}
      </div>
      
      <div className="book-actions">
        <button 
          className="btn-edit" 
          onClick={onEdit} 
          aria-label={`Edit buku ${book.title}`}
        >
          Edit
        </button>
        
        <button 
          className="btn-delete" 
          onClick={handleDeleteClick}
          aria-label={`Hapus buku ${book.title}`}
        >
          Hapus
        </button>
      </div>

      {showConfirmDelete && (
        <div className="delete-confirmation">
          <p>Apakah Anda yakin ingin menghapus "{book.title}"?</p>
          <div className="confirm-actions">
            <button 
              className="btn-confirm" 
              onClick={handleConfirmDelete}
            >
              Ya, Hapus
            </button>
            <button 
              className="btn-cancel" 
              onClick={handleCancelDelete}
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  onEdit: PropTypes.func.isRequired
};

export default BookItem;