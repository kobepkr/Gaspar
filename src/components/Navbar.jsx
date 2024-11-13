import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">


          <li className="dropdown">
          <button className="dropdown-btn">Proyecto Edcucativo Institucional (PEI)</button>
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
          <li><NavLink to="/convivencia">Convivencia escolar</NavLink></li>
          <li><NavLink to="/protocolos">Protocolos</NavLink></li>
          <li><NavLink to="/uniformes">Uniforme</NavLink></li>
          <li><NavLink to="/horarios">Horarios</NavLink></li>
          </ul>
        </li>

        <li className="dropdown">
          <button className="dropdown-btn">Plan de mejora educativo (PME)</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/objetivos">Objetivos</NavLink></li>
          <li><NavLink to="/acciones">Acciones</NavLink></li>
          </ul>
        </li>

           {/* Dropdown Convivencia Escolar */}
          <li className="dropdown">
          <button className="dropdown-btn">Comunidad</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/asistenteEducacion">Equipo de gestion directivo</NavLink></li>
            <li><NavLink to="/docente">Equipo docente</NavLink></li>
            <li><NavLink to="/gestionDirectivo">Equipo asistente de la educacón</NavLink></li>
          </ul>
        </li>

          {/* Dropdown Docentes */}
          <li className="dropdown">
          <button className="dropdown-btn">Gestión Pedagógica</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/moduloPedagogico">Modulo pedagógico</NavLink></li>
          <li><NavLink to="/reglamentoEvaluacion">Reglamento de evaluación</NavLink></li>
          <li><NavLink to="/epa">Epa</NavLink></li>
          <li><NavLink to="/estrategiaTransicion">Estrategia de transición</NavLink></li>
          </ul>
        </li>

          {/* Dropdown Convivencia Escolar */}
          <li className="dropdown">
          <button className="dropdown-btn">Convivencia Escolar</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/planConvivencia">Plan de la gestión de la convivencia escolar</NavLink></li>
          </ul>
        </li>

         {/* Dropdown Docentes */}
          <li className="dropdown">
          <button className="dropdown-btn">Proyecto de integración escolar</button>
          <ul className="dropdown-menu">
            <li><a href="#">Plan de inclusión</a></li>
            <li><a href="#">Apoyos NEE</a></li>
          </ul>
        </li>

        {/* Dropdown Talleres */}
        <li className="dropdown">
          <button className="dropdown-btn">Talleres SEP</button>
          <ul className="dropdown-menu">
            <li><a href="#">TALLER DE TAEKWANDO</a></li>
            <li><a href="#">TALLER DE CHEERLEADERS</a></li>
            <li><a href="#">TALLER DE BASQUETBOL</a></li>
            <li><a href="#">TALLER DE MÚSICA</a></li>
            <li><a href="#">TALLER DE DANZA</a></li>
            <li><a href="#">TALLER DE GIMNASIA ARTÍSTICA</a></li>
            <li><a href="#">TALLER DE LECTOESCRITURA</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <button className="dropdown-btn">Talleres JEC</button>
          <ul className="dropdown-menu">
            <li><a href="#">TALLER DE NIVELACIÓN</a></li>
            <li><a href="#">TALLER DE PSICOMOTRICIDAD</a></li>
            <li><a href="#">TALLER DE SOCIOEMOCIONAL</a></li>
            <li><a href="#">TALLER DE INGLES</a></li>
            <li><a href="#">TALLER DE FORMACIÓN CIUDADANA</a></li>
            <li><a href="#">TALLER DE DEPORTE</a></li>
          </ul>
        </li>

      
      </ul>
    </nav>
  );
};

export default Navbar;
