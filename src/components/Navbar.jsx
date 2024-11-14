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

           {/* Dropdown Convivencia Escolar */}
          <li className="dropdown">
          <button className="dropdown-btn">Comunidad</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/gestionDirectivo">Equipo de Gestion Directivo</NavLink></li>
            <li><NavLink to="/docente">Equipo Docente</NavLink></li>
            <li><NavLink to="/asistenteEducacion">Equipo Asistente de la Educacón</NavLink></li>
          </ul>
        </li>

          {/* Dropdown Docentes */}
          <li className="dropdown">
          <button className="dropdown-btn">Gestión Pedagógica</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/moduloPedagogico">Modulo Pedagógico</NavLink></li>
          <li><NavLink to="/reglamentoEvaluacion">Reglamento de Evaluación</NavLink></li>
          <li><NavLink to="/epa">Epa</NavLink></li>
          <li><NavLink to="/estrategiaTransicion">Estrategia de Transición</NavLink></li>
          </ul>
        </li>

          {/* Dropdown Convivencia Escolar */}
          <li className="dropdown">
          <button className="dropdown-btn">Convivencia Escolar</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/planConvivencia">Plan de la Gestión de la Convivencia Escolar</NavLink></li>
          </ul>
        </li>

         {/* Dropdown Docentes */}
          <li className="dropdown">
          <button className="dropdown-btn">Proyecto de Integración Escolar</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/planInclusion">Plan de Inclusión</NavLink></li>
          <li><NavLink to="/apoyos">Apoyos NEE</NavLink></li>
          </ul>
        </li>

        {/* Dropdown Talleres */}
        <li className="dropdown">
          <button className="dropdown-btn">Talleres SEP</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/taekwando">TALLER DE TAEKWANDO</NavLink></li>
          <li><NavLink to="/cheerLeaders">TALLER DE CHEERLEADERS</NavLink></li>
          <li><NavLink to="/basquetbol">TALLER DE BASQUETBOL</NavLink></li>
          <li><NavLink to="/musica">TALLER DE MÚSICA</NavLink></li>
          <li><NavLink to="/danza">TALLER DE DANZA</NavLink></li>
          <li><NavLink to="/gimnasia">TALLER DE GIMNASIA ARTÍSTICA</NavLink></li>
          <li><NavLink to="/lectoescritura">TALLER DE LECTOESCRITURA</NavLink></li>
          </ul>
        </li>

        <li className="dropdown">
          <button className="dropdown-btn">Talleres JEC</button>
          <ul className="dropdown-menu">
          <li><NavLink to="/nivelacion">TALLER DE NIVELACIÓN</NavLink></li>
          <li><NavLink to="/psicomotricidad">TALLER DE PSICOMOTRICIDAD</NavLink></li>
          <li><NavLink to="/socioemocional">TALLER DE SOCIOEMOCIONAL</NavLink></li>
          <li><NavLink to="/ingles">TALLER DE INGLES</NavLink></li>
          <li><NavLink to="/formacionCiudadana">TALLER DE FORMACIÓN CIUDADANA</NavLink></li>
          <li><NavLink to="/deporte">TALLER DE DEPORTE</NavLink></li>
          </ul>
        </li>

      
      </ul>
    </nav>
  );
};

export default Navbar;
