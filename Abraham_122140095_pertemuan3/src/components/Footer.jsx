import React from 'react';

/**
 * Komponen Footer untuk bagian bawah aplikasi
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} Bram.BookShelf - Aplikasi Manajemen Buku Pribadi
        </p>
        <p className="footer-tagline">
          Organisasi buku Anda menjadi lebih mudah <br /> 
          Praktikum Pemrograman Web - Pertemuan3
        </p>
      </div>
    </footer>
  );
};

export default Footer;