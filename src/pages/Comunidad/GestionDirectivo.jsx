import React from 'react';
import './GestionDirectivo.css';

const GestionDirectivo = () => {
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
        {/* Miembros del Equipo Directivo */}
        <div className="equipo-section">
          <h2 className="section-title">Miembros del Equipo Directivo</h2>

          <div className="equipo-item">
            <h3 className="equipo-title">Directora</h3>
            <p className="equipo-description">
              La Directora es responsable de liderar la gestión pedagógica, administrativa y comunitaria de la escuela, asegurando que se cumplan los objetivos educativos, fomentando un ambiente de aprendizaje inclusivo y colaborativo, y trabajando de manera estratégica con el equipo docente, estudiantes y familias para promover el bienestar integral de la comunidad educativa.
            </p>
          </div>

          <div className="equipo-item">
            <h3 className="equipo-title">Inspectora General</h3>
            <p className="equipo-description">
              La Inspectora General se encarga de supervisar el cumplimiento de las normas y reglamentos internos de la escuela, velando por el orden, la disciplina y el bienestar de los estudiantes. Su rol incluye el acompañamiento en la gestión de la convivencia escolar, supervisando las actividades diarias y colaborando con el equipo directivo en la resolución de situaciones disciplinarias.
            </p>
          </div>

          <div className="equipo-item">
            <h3 className="equipo-title">Coordinadora PIE</h3>
            <p className="equipo-description">
              La Coordinadora del Programa de Integración Escolar (PIE) lidera la implementación de estrategias inclusivas y el apoyo pedagógico a estudiantes con necesidades educativas especiales. Se encarga de coordinar los recursos, profesionales y actividades del programa para asegurar la integración y participación plena de todos los estudiantes en el proceso educativo.
            </p>
          </div>

          <div className="equipo-item">
            <h3 className="equipo-title">Jefe/a de UTP</h3>
            <p className="equipo-description">
              El Jefe/a de UTP tiene la responsabilidad de coordinar la planificación pedagógica y los procesos de evaluación, supervisando la implementación de programas educativos y apoyando a los docentes en la mejora continua de sus prácticas. Su trabajo está orientado a garantizar la calidad del aprendizaje en toda la comunidad escolar.
            </p>
          </div>

          <div className="equipo-item">
            <h3 className="equipo-title">Encargada de C.E.</h3>
            <p className="equipo-description">
              La Encargada de Convivencia Escolar lidera las iniciativas y programas orientados a promover un ambiente escolar armónico, inclusivo y respetuoso. Su rol incluye la gestión de la convivencia diaria, la resolución de conflictos y el trabajo colaborativo con docentes y estudiantes para fomentar relaciones saludables dentro de la comunidad educativa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionDirectivo;
