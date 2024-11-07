import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="contact-info">
          <span>📞 Telefono: +56 9 1234 4567</span>
          <span>📧 Emial: contacto@escuelagasparcabrales.cl</span>
          <span>📍 Dirección: Almte. Simpson 152, Valparaíso</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
