import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img src="./src/assets/logo.png" alt="Escuela Gaspar Cabrales" width="100" />
        <div className="text-content">
          <h3>Escuela</h3>
          <h1>Gaspar Cabrales</h1>
          <h3>Valparaíso</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
