// src/pages/Mision.jsx
import React from 'react';

function asistenteEducacion() {
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
          <div className="equipo-item">
            <h3 className="equipo-title">Asistentes de la Educación</h3>
            <p className="equipo-description">
              Los Asistentes de la Educación brindan apoyo en diversas áreas del proceso educativo, colaborando con los docentes en la atención personalizada a los estudiantes, el refuerzo de contenidos y la organización de actividades pedagógicas. Además, trabajan en estrecha colaboración con otros profesionales del equipo educativo para asegurar una educación inclusiva y de calidad.
            </p>
          </div>

          <div className="equipo-item">
            <h3 className="equipo-title">Otros Profesionales de Apoyo</h3>
            <p className="equipo-description">
              Otros profesionales de apoyo incluyen terapeutas, fonoaudiólogos, psicólogos y otros especialistas que colaboran en el proceso de aprendizaje, ofreciendo atención específica a los estudiantes que requieren intervenciones individuales o grupales, y apoyando el desarrollo integral de la comunidad escolar.
            </p>
          </div>

          <div className="equipo-item">
            <h3 className="equipo-title">Auxiliares</h3>
            <p className="equipo-description">
              Los Auxiliares se encargan de mantener un ambiente limpio y seguro en la escuela, colaborando con la organización de los espacios y el bienestar de los estudiantes. Además, apoyan en tareas logísticas y operativas, contribuyendo al buen funcionamiento de la institución educativa.
            </p>
          </div>
        </div>
      </div>
  );
}

export default asistenteEducacion;
