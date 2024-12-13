// src/pages/Mision.jsx
import React from 'react';

function Docente() {
  return (
    <div className="gestion-directivo-container">
      <h1 className="title">Equipo Directivo y Personal Educativo</h1>
      
      <div className="introduccion">
        <p>
          El <strong>Equipo Directivo</strong> de nuestra institución juega un rol fundamental en la gestión integral de la comunidad educativa, asegurando que cada área del proceso de enseñanza-aprendizaje funcione de manera colaborativa y eficiente. Este equipo está compuesto por profesionales altamente comprometidos con el desarrollo y bienestar de nuestros estudiantes, y trabaja constantemente para fomentar un ambiente inclusivo, respetuoso y de excelencia educativa.
        </p>
        <p>
          Junto a ellos, un grupo de <strong>docentes</strong>, <strong>asistentes de la educación</strong> y otros <strong>profesionales de apoyo</strong> colaboran para garantizar que cada estudiante reciba la atención personalizada que necesita, favoreciendo su desarrollo académico, social y emocional. El trabajo conjunto de todo el personal busca crear un ambiente armónico y seguro, promoviendo el aprendizaje integral y la participación activa de todos los miembros de la comunidad escolar.
        </p>
        <p>
          A continuación, te presentamos a cada miembro clave del equipo, con sus responsabilidades y áreas de acción.
        </p>
      </div>

      <div className="equipo-content">
        

        {/* Miembros del Personal Educativo */}
        <div className="equipo-section">
          <h2 className="section-title">Miembros del Personal Educativo</h2>

          <div className="equipo-item">
            <h3 className="equipo-title">Docentes</h3>
            <p className="equipo-description">
              Los docentes son responsables de planificar, ejecutar y evaluar los procesos de enseñanza-aprendizaje, adaptando las actividades y recursos pedagógicos a las necesidades de cada estudiante. Además, actúan como guías y mediadores en el proceso educativo, promoviendo el desarrollo integral y la participación activa de todos los estudiantes.
            </p>
          </div>

          <div className="equipo-item">
            <h3 className="equipo-title">Docentes Diferenciales</h3>
            <p className="equipo-description">
              Los Docentes Diferenciales son especialistas en el apoyo pedagógico a estudiantes con necesidades educativas especiales, diseñando estrategias y adecuaciones curriculares que permitan la inclusión y el aprendizaje de todos. Su rol es clave en la adaptación de los contenidos y en el acompañamiento individualizado de los estudiantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docente;