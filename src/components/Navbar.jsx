import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">


          <li className="dropdown">
          <button className="dropdown-btn">Proyecto Edcucativo Institucional (PEI)</button>
          <ul className="dropdown-menu">
            <li><a href="#">Misión</a></li>
            <li><a href="#">Visión</a></li>
            <li><a href="#">Sello</a></li>
            <li><a href="#">Perfiles</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <button className="dropdown-btn">Reglamento Interno</button>
          <ul className="dropdown-menu">
            <li><a href="#">Manual</a></li>
            <li><a href="#">Convivencia escolar</a></li>
            <li><a href="#">Protocolos</a></li>
            <li><a href="#">Uniforme</a></li>
            <li><a href="#">Horarios</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <button className="dropdown-btn">Plan de mejora educativo (PME)</button>
          <ul className="dropdown-menu">
            <li><a href="#">Objetivos</a></li>
            <li><a href="#">Acciones</a></li>
          </ul>
        </li>

           {/* Dropdown Convivencia Escolar */}
           <li className="dropdown">
          <button className="dropdown-btn">Comunidad</button>
          <ul className="dropdown-menu">
            <li><a href="#">Equipo de gestión directivo</a></li>
            <li><a href="#">Equipo docente</a></li>
            <li><a href="#sdfdsf">Equipo asistente de la educación</a></li>
          </ul>
        </li>

          {/* Dropdown Docentes */}
          <li className="dropdown">
          <button className="dropdown-btn">Gestión Pedagógica</button>
          <ul className="dropdown-menu">
            <li><a href="#">Modulo pedagógico</a></li>
            <li><a href="#">Reglamento de evaluación</a></li>
            <li><a href="#">Epa</a></li>
            <li><a href="#">Estrategia de transición</a></li>
          </ul>
        </li>

          {/* Dropdown Convivencia Escolar */}
          <li className="dropdown">
          <button className="dropdown-btn">Convivencia Escolar</button>
          <ul className="dropdown-menu">
            <li><a href="#">Plan de la gestión de la convivencia escolar</a></li>
          </ul>
        </li>

         {/* Dropdown Docentes */}
         <li className="dropdown">
          <button className="dropdown-btn">Proyecto de integración escolar</button>
          <ul className="dropdown-menu">
            <li><a href="#">Plan de inclusión</a></li>
            <li><a href="#">Apollos NEE</a></li>
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
            <li><a href="#">TALLER DE NIVELACIÓN EN LENGUAJE</a></li>
            <li><a href="#">TALLER EXTERNO FUTBOL TPS</a></li>
          </ul>
        </li>

      
      </ul>
    </nav>
  );
};

export default Navbar;
