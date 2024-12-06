import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // Estado para manejar el menú en dispositivos móviles

  const toggleMenu = () => {
    setIsMobile(!isMobile); // Alterna el estado del menú
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        

        {/* Ícono de hamburguesa para pantallas pequeñas */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menú de navegación, se agrega clase "active" cuando está abierto */}
        <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
          <li className="dropdown">
            <button className="dropdown-btn">Proyecto Educativo Institucional (PEI)</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/mision">Misión</NavLink></li>
              <li><NavLink to="/vision">Visión</NavLink></li>
              <li><NavLink to="/sello">Sello</NavLink></li>
              <li><NavLink to="/perfiles">Perfiles</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Reglamento Interno</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/manual">Manual</NavLink></li>
              <li><NavLink to="/convivencia">Convivencia Escolar</NavLink></li>
              <li><NavLink to="/protocolos">Protocolos</NavLink></li>
              <li><NavLink to="/uniformes">Uniforme</NavLink></li>
              <li><NavLink to="/horarios">Horarios</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Plan de Mejora Educativo (PME)</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/objetivos">Objetivos</NavLink></li>
              <li><NavLink to="/acciones">Acciones</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Comunidad</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/gestionDirectivo">Equipo de Gestión Directivo</NavLink></li>
              <li><NavLink to="/docente">Equipo Docente</NavLink></li>
              <li><NavLink to="/asistenteEducacion">Equipo Asistente de la Educación</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Gestión Pedagógica</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/moduloPedagogico">Módulo Pedagógico</NavLink></li>
              <li><NavLink to="/reglamentoEvaluacion">Reglamento de Evaluación</NavLink></li>
              <li><NavLink to="/epa">Epa</NavLink></li>
              <li><NavLink to="/estrategiaTransicion">Estrategia de Transición</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Convivencia Escolar</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/planConvivencia">Plan de la Gestión de la Convivencia Escolar</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Proyecto de Integración Escolar</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/planInclusion">Plan de Inclusión</NavLink></li>
              <li><NavLink to="/apoyos">Apoyos NEE</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Talleres SEP</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/taekwando">Taller de Taekwondo</NavLink></li>
              <li><NavLink to="/cheerLeaders">Taller de Cheerleaders</NavLink></li>
              <li><NavLink to="/basquetbol">Taller de Básquetbol</NavLink></li>
              <li><NavLink to="/musica">Taller de Música</NavLink></li>
              <li><NavLink to="/danza">Taller de Danza</NavLink></li>
              <li><NavLink to="/gimnasia">Taller de Gimnasia Artística</NavLink></li>
              <li><NavLink to="/lectoescritura">Taller de Lectoescritura</NavLink></li>
            </ul>
          </li>
          <li className="dropdown">
            <button className="dropdown-btn">Talleres JEC</button>
            <ul className="dropdown-menu">
              <li><NavLink to="/nivelacion">Taller de Nivelación</NavLink></li>
              <li><NavLink to="/psicomotricidad">Taller de Psicomotricidad</NavLink></li>
              <li><NavLink to="/socioemocional">Taller Socioemocional</NavLink></li>
              <li><NavLink to="/ingles">Taller de Inglés</NavLink></li>
              <li><NavLink to="/formacionCiudadana">Taller de Formación Ciudadana</NavLink></li>
              <li><NavLink to="/deporte">Taller de Deporte</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
