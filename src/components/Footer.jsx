// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Nuevo título agregado en el footer */}
      <div className="footer-title">
        <h2>Educación y Formación Integral</h2>
        <p>41 años de experiencia </p>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>Información del Colegio</h3>
          <p>Escuela Gaspar Cabrales</p>
          <p>Almte. Simpson 152, Valparaíso, Chile</p>
          <p>Teléfono: (2) 3352 4289</p>
          <p>Email: contacto@escuelagasparcabrales.cl</p>
        </div>
        <div className="footer-section">
          <h3>Formulario de Contacto</h3>
          <form className="contact-form">
            <input type="text" placeholder="Tu nombre" required />
            <input type="email" placeholder="Tu correo electrónico" required />
            <textarea placeholder="Tu mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Ubicación</h3>
          <div className="map">
            {/* Aquí puedes insertar el iframe del mapa de Google Maps */}
            <iframe
              title="Ubicación Colegio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.671406946308!2d-71.69809928426957!3d-33.03664083090967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf5b79b4f009%3A0xbeb5374a8d3f3829!2sAlmte.%20Simpson%20152%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1691476425168!5m2!1ses!2scl"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
