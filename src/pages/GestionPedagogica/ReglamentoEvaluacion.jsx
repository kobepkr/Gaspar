import React from 'react';
import './ReglamentoEvaluacion.css';

const ReglamentoEvaluacion = () => {
  return (
    <div className="reglamento-container">
      <h1 className="title">REGLAMENTO DE EVALUACIÓN Y PROMOCIÓN DE ESTUDIANTES</h1>

      <div className="cuadro">
        <h2>Escuela Gaspar Cabrales</h2>
        <p><strong>2024</strong></p>
        <p><strong>Normas Generales</strong></p>
      </div>

      <div className="cuadro">
        <h3>ARTÍCULO 1o:</h3>
        <p>
          El presente reglamento establece las normas sobre evaluación, calificación y promoción de los estudiantes que cursan los niveles de Educación Parvularia y Básica, de la Escuela Gaspar Cabrales de Valparaíso, de acuerdo a lo establecido en el Decreto No 67 de 2018 del Ministerio de Educación y las orientaciones dadas de la unidad de currículum y evaluación del Ministerio de Educación.
        </p>
        <p>
          La Comunidad Educativa contempla para la elaboración del Reglamento Interno de Evaluación lo siguiente:
          <ul>
            <li>El Proyecto Educativo Institucional y sellos de la Escuela Gaspar Cabrales.</li>
            <li>Normativas Curriculares Vigentes, Las cuales se señalan a continuación:</li>
          </ul>
        </p>

        <div className="cuadro">
          <h4>Educación Parvularia</h4>
          <p><strong>Nivel</strong> | <strong>Marco Regulador</strong></p>
          <p>Nivel de transición 1 y 2. Decreto 481/2018.</p>
        </div>

        <div className="cuadro">
          <h4>1° a 6° año Básico</h4>
          <p><strong>Nivel</strong> | <strong>Marco Regulador</strong></p>
          <ul>
            <li>Lenguaje y comunicación - Decreto 170/2010</li>
            <li>Matemática - Decreto 170/2010</li>
            <li>Historia, Geografía y Cs. Sociales - Decreto 170/2010</li>
            <li>Ciencias Naturales - Decreto 170/2010</li>
            <li>Artes Visuales - Decreto 170/2010</li>
            <li>Música - Decreto 170/2010</li>
            <li>Tecnología - Decreto 170/2010</li>
          </ul>
        </div>

        <div className="cuadro">
          <h4>7° a 8° básico</h4>
          <p><strong>Nivel</strong> | <strong>Marco Regulador</strong></p>
          <ul>
            <li>Lengua y Literatura - Decreto 170/2010</li>
            <li>Matemática - Decreto 170/2010</li>
            <li>Idioma extranjero (Inglés) - Decreto 170/2010</li>
            <li>Historia, Geografía y Cs. Sociales - Decreto 170/2010</li>
            <li>Artes visuales - Decreto 170/2010</li>
            <li>Música - Decreto 170/2010</li>
            <li>Tecnología - Decreto 170/2010</li>
            <li>Orientación - Decreto 170/2010</li>
          </ul>
        </div>
      </div>

      <div className="cuadro">
        <h3>ARTÍCULO 2o: Para efecto del presente reglamento se entenderá por:</h3>
        <ul>
          <li><strong>a) Reglamento:</strong> Instrumento mediante el cual, se establecen los procedimientos de carácter objetivo y transparente para la evaluación, calificación y promoción, según decreto 67 de 2018 de MINEDUC.</li>
          <li><strong>b) Evaluación:</strong> Conjunto de acciones lideradas por los profesionales de la educación para que tanto ellos como los alumnos puedan obtener e interpretar la información, sobre el aprendizaje, con el objeto de adoptar decisiones que permitan promover el progreso del aprendizaje y retroalimentar los procesos de enseñanza.</li>
          <li><strong>c) Calificación:</strong> Representación del logro en el aprendizaje a través de un proceso de evaluación, que permite transmitir un significado compartido respecto a dicho aprendizaje mediante un número. Cuando las evaluaciones aplicadas a los estudiantes se expresen en una calificación, los docentes deben utilizar una escala numérica de 2.0 a 7.0, hasta con un decimal.</li>
          <li><strong>d) Curso:</strong> Etapa de un ciclo que compone un nivel, modalidad, formación general común o diferenciada del proceso de enseñanza y aprendizaje que se desarrolla durante una jornada en un año escolar determinado, mediante los planes y programas previamente aprobados por el Ministerio de Educación.</li>
          <li><strong>e) Promoción:</strong> Acción mediante la cual el alumno/a culmina favorablemente un curso, transitando al nivel inmediatamente superior.</li>
        </ul>
      </div>

      <div className="cuadro">
        <h3>ARTÍCULO 3o:</h3>
        <p>
          La modalidad de estudio es de un régimen semestral. Los estudiantes y apoderados tienen derecho a ser informados de los criterios de evaluación (pautas, rúbricas, escalas de apreciación, lista de cotejo, tabla de especificaciones) con las que se confeccionarán los instrumentos de evaluación o serán evaluados y calificados los estudiantes.
        </p>
        <p>
          Los estudiantes tienen derecho a ser evaluados y promovidos de acuerdo a un sistema objetivo y transparente, de acuerdo al presente reglamento.
        </p>
      </div>

      {/* Enlace para descargar el reglamento */}
      <div className="download-section">
        <h3>Descargar el Reglamento de Evaluación Completo</h3>
        <a href="/Evaluacion.pdf" download="Reglamento_Evaluacion.pdf" className="download-button">
          Descargar Reglamento
        </a>
      </div>
    </div>
  );
};

export default ReglamentoEvaluacion;
