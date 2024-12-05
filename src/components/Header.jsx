import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="contact-info">
          <span>📞 Teléfono: (2) 3352 4289</span>
          <span>📧 Email: contacto@escuelagasparcabrales.cl</span>
          <span>📍 Dirección: Almte. Simpson 96, Valparaíso.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;