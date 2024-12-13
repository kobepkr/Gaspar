import React from 'react';
import './Objetivos.css';  // Asegúrate de que el archivo CSS está en la misma carpeta o ajusta la ruta

const Objetivos = () => {
  return (
    <div className="objetivos-container">
      <h1 className="title">Objetivos Institucionales</h1>
      
      <div className="objetivos-content">
        {/* Dimensión Gestión Pedagógica */}
        <div className="objetivos-section">
          <h2 className="section-title">Gestión Pedagógica</h2>
          <div className="objetivo-item">
            <h3 className="objetivo-title">Promover la Autonomía Estudiantil</h3>
            <p className="objetivo-description">
              Fomentar la autonomía y el compromiso estudiantil mediante el desarrollo de habilidades que les permitan ser conscientes y responsables de su propio aprendizaje.
            </p>
          </div>
        </div>

        {/* Dimensión Gestión del Liderazgo */}
        <div className="objetivos-section">
          <h2 className="section-title">Liderazgo</h2>
          <div className="objetivo-item">
            <h3 className="objetivo-title">Fomentar el Sentido de Pertenencia</h3>
            <p className="objetivo-description">
              Fomentar un fuerte sentido de identidad y pertenencia mediante una planificación institucional colaborativa, basada en datos y respaldada por redes y alianzas, para garantizar el seguimiento efectivo de las trayectorias educativas de todos los estudiantes.
            </p>
          </div>
        </div>

        {/* Dimensión Gestión de la Convivencia Escolar */}
        <div className="objetivos-section">
          <h2 className="section-title">Convivencia Escolar</h2>
          <div className="objetivo-item">
            <h3 className="objetivo-title">Mejorar las Relaciones Interpersonales</h3>
            <p className="objetivo-description">
              Establecer un ambiente propicio para el aprendizaje y las relaciones interpersonales, promoviendo vínculos socioafectivos entre todos los miembros de la comunidad con el fin de mejorar la experiencia educativa y fortalecer el sentido de pertenencia y colaboración en el entorno escolar.
            </p>
          </div>
        </div>

        {/* Dimensión Gestión de Recursos */}
        <div className="objetivos-section">
          <h2 className="section-title">Recursos</h2>
          <div className="objetivo-item">
            <h3 className="objetivo-title">Optimizar los Recursos Institucionales</h3>
            <p className="objetivo-description">
              Optimizar prácticas y procedimientos de gestión de personal, administrativos y pedagógicos, priorizando recursos para impactar positivamente en los aprendizajes y alinearlos con las necesidades y el PEI del establecimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objetivos;
