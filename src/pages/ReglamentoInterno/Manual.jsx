import React from 'react';
import './Manual.css';

const Manual = () => {
  return (
    <div className="manual-container">
      <h1 className="title">Manual Escolar</h1>

      <div className="introduccion">
        <p>
          El <strong>Manual Escolar</strong> es el instrumento elaborado por la escuela, con la participación de todos los miembros de la comunidad educativa, con el objetivo de permitir el ejercicio y cumplimiento efectivo de los derechos y deberes de sus miembros, a través de la regulación de sus relaciones, normas de funcionamiento, convivencia y otros procedimientos generales del establecimiento.
        </p>
        <p>
          Este manual se basa en principios constitucionales y legales, promoviendo el desarrollo integral de los estudiantes y respetando los derechos y la dignidad humana de todos los miembros de la comunidad educativa.
        </p>
      </div>

      <div className="articulos">
        <div className="articulo-section">
          <h2 className="section-title">Artículo 1: Del Manual Escolar</h2>
          <p>
            El Manual Escolar ha sido elaborado para regular las relaciones dentro de la comunidad educativa, garantizando el cumplimiento de los derechos y deberes de sus miembros. Considera las normativas internacionales y nacionales como la Declaración Universal de los Derechos Humanos, la Convención sobre los Derechos del Niño y la Ley General de Educación.
          </p>
          <p>
            Este manual está diseñado para promover el desarrollo integral de los estudiantes, fomentando valores como el respeto, la responsabilidad, la seguridad y el trabajo en equipo, y también se ajusta a las leyes educativas vigentes en Chile.
          </p>
        </div>

        <div className="articulo-section">
          <h2 className="section-title">Artículo 2: De los Principios del Manual Escolar</h2>
          <p>
            Este manual se rige por los principios que guían el sistema educativo, establecidos en el artículo 3 de la Ley General de Educación, tales como la dignidad del ser humano, la no discriminación, la participación, la responsabilidad, la autonomía y la buena convivencia escolar.
          </p>
          <p>
            Los principios éticos y orientadores están basados en un marco legal que garantiza y evalúa la calidad de la convivencia escolar, sustentado en leyes nacionales e internacionales como la Ley de Inclusión Escolar y la Ley contra la Discriminación.
          </p>
        </div>

        <div className="articulo-section">
          <h2 className="section-title">Título II: Derechos y Deberes de la Comunidad Educativa</h2>
          <h3 className="subsection-title">Artículo 3: Derechos y Deberes de los Estudiantes</h3>

          <div className="subsection">
            <h4 className="subsection-title">Derechos</h4>
            <ul className="rights-list">
              <li>A ser considerados y tratados con respeto, reconociendo su identidad y dignidad.</li>
              <li>A recibir una educación de calidad, respetando sus derechos y necesidades.</li>
              <li>A ser informados sobre las evaluaciones y el manual interno del establecimiento.</li>
              <li>A participar activamente en actividades académicas, artísticas y deportivas.</li>
              <li>A ser atendidos en situaciones de vulneración de derechos o accidentes escolares.</li>
            </ul>
          </div>

          <div className="subsection">
            <h4 className="subsection-title">Deberes</h4>
            <ul className="duties-list">
              <li>Exigir y respetar el derecho a la educación, sin obstaculizar a los demás estudiantes.</li>
              <li>Asistir puntualmente a clases y participar activamente en el proceso de aprendizaje.</li>
              <li>Respetar a todos los miembros de la comunidad educativa y la normativa vigente.</li>
              <li>Cumplir con el manual de convivencia, el reglamento y las normas de evaluación.</li>
              <li>Contribuir a la creación de un ambiente armónico y respetuoso dentro de la institución.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Enlace para descargar el manual */}
      <div className="download-section">
        <h3>Descargar el Manual Escolar Completo</h3>
        <a href="/manual.pdf" download="Manual.pdf" className="download-button">
          Descargar Manual
          </a>
      </div>
    </div>
  );
};

export default Manual;
