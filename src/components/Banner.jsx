import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { FaInstagram } from 'react-icons/fa'; // Importamos el ícono de Instagram

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* Envolvemos el logo en un Link para que redirija a la página de inicio */}
        <Link to="/">
          <img src="./src/assets/logo.png" alt="Escuela Gaspar Cabrales" width="200" className="logo" />
        </Link>
        <div className="text-content">
          <h3>Escuela</h3>
          <h1>Gaspar Cabrales</h1>
          <h3>Valparaíso</h3>
        </div>
      </div>

      {/* Icono de Instagram */}
      <a 
        href="https://www.instagram.com/escuela.gaspar.cabrales" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="instagram-icon"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Banner;
