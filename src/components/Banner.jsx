import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Íconos de Instagram y Facebook

// Importamos las imágenes necesarias
import bannerImage from '../assets/banner.jpg';  // Importamos la imagen del banner
import logoImage from '../assets/logo.png'; 
import cornerImage from '../assets/gasparInsta.png'; // Nueva imagen en la esquina

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="banner-content">
        {/* Logo que redirige a la página de inicio */}
        <Link to="/">
          <img src={logoImage} alt="Escuela Gaspar Cabrales" width="200" className="logo" />
        </Link>
        <div className="text-content">
          <h3>Escuela</h3>
          <h1>Gaspar Cabrales</h1>
          <h3>Valparaíso</h3>
        </div>
      </div>

   {/* Card de Matrículas 2025 */}
<div className="matriculas-card">
  <h2>¡Proceso de Matrículas 2025!</h2>
  <p>Haz clic aquí para más información.</p>
  <Link to="/matricula" className="btn-matriculas">Ver Más</Link>
</div>


      {/* Imagen en la parte inferior derecha */}
      <img src={cornerImage} alt="Gaspar" className="corner-image" />

      {/* Texto e íconos de redes sociales */}
      <div className="social-media">
        <p>Síguenos en nuestras redes sociales</p>
        <div className="social-icons">
          <a 
            href="https://www.instagram.com/escuela.gaspar.cabralesa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram-icon"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.facebook.com/EscuelaGasparCabralesValparaiso-Oficial" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="facebook-icon"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
