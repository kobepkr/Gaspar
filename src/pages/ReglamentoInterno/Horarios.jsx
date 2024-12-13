import React from 'react';
import './Horarios.css'; // Asegúrate de crear este archivo CSS para los estilos

function Horarios() {
  return (
    <div className="horarios-container">
      <div className="titulo-horarios">
        Jornada Diurna - Horarios
      </div>
      
      <div className="introduccion">
        <p>En nuestra institución, entendemos la importancia de organizar el tiempo para que nuestros estudiantes puedan equilibrar su desarrollo académico y personal. A continuación, te presentamos los horarios de entrada y salida de los diferentes niveles educativos, pensados para optimizar el aprendizaje y bienestar de nuestros estudiantes.</p>
      </div>
      
      <div className="horarios-seccion">
        <h3 className="nivel">1ero a 8vo básico</h3>
        <div className="horarios-detalle">
          <p><strong>Entrada:</strong> Lunes a Viernes 08:15 horas</p>
          <p><strong>Salida:</strong> Lunes a Jueves 15:40 horas</p>
          <p><strong>Salida viernes:</strong> 13:25 horas</p>
        </div>
      </div>
      
      <div className="horarios-seccion">
        <h3 className="nivel">Nt1 y Nt2</h3>
        <div className="horarios-detalle">
          <p><strong>Entrada:</strong> Lunes a Viernes 08:15 horas</p>
          <p><strong>Salida:</strong> Lunes a Jueves 15:30 horas</p>
          <p><strong>Salida viernes:</strong> 13:00 horas</p>
        </div>
      </div>
    </div>
  );
}

export default Horarios;
