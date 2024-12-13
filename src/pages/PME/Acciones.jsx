import React from 'react';
import './Acciones.css';

const Acciones = () => {
  return (
    <div className="acciones-container">
      <h1 className="title">Acciones Institucionales</h1>
      
      <div className="acciones-content">
        {/* Dimensión Gestión Pedagógica */}
        <div className="acciones-section">
          <h2 className="section-title">Dimensión Gestión Pedagógica</h2>
          <div className="accion-item">
            <h3 className="accion-title">Plan de Apoyo Pedagógico</h3>
            <p className="accion-description">
              Un conjunto de acciones diseñadas para reforzar los aprendizajes fundamentales de los estudiantes, mediante estrategias personalizadas que abordan las áreas que requieren mayor atención y progreso.
            </p>
          </div>
          <div className="accion-item">
            <h3 className="accion-title">Plan de Diversificación de la Enseñanza</h3>
            <p className="accion-description">
              Estrategias pedagógicas innovadoras que adaptan los métodos de enseñanza para responder a los diferentes estilos y ritmos de aprendizaje, promoviendo la inclusión y la participación activa de todos los estudiantes.
            </p>
          </div>
          <div className="accion-item">
            <h3 className="accion-title">Plan de Acompañamiento y Trabajo Colaborativo Docente</h3>
            <p className="accion-description">
              Un espacio de reflexión y formación continua para los docentes, enfocado en fortalecer sus competencias pedagógicas a través del trabajo colaborativo, el intercambio de buenas prácticas y el desarrollo profesional.
            </p>
          </div>
          <div className="accion-item">
            <h3 className="accion-title">Estrategia de Transición Educativa</h3>
            <p className="accion-description">
              Iniciativa que apoya a los estudiantes en momentos clave de cambio entre niveles educativos (NT1 a 1° Básico, 4° a 5° Básico, y 8° Básico a Media), facilitando su adaptación académica, social y emocional para un avance exitoso en su trayectoria escolar.
            </p>
          </div>
        </div>

        {/* Dimensión Gestión del Liderazgo */}
        <div className="acciones-section">
          <h2 className="section-title">Dimensión Gestión del Liderazgo</h2>
          <div className="accion-item">
            <h3 className="accion-title">Actualización y Socialización de Instrumentos de Gestión Institucionales</h3>
            <p className="accion-description">
              Proceso continuo que garantiza que los documentos de gestión de la escuela estén alineados con las necesidades actuales de la comunidad educativa, promoviendo su difusión para asegurar la comprensión y el compromiso de todos los actores escolares.
            </p>
          </div>
          <div className="accion-item">
            <h3 className="accion-title">Plan de Aseguramiento de la Trayectoria Escolar</h3>
            <p className="accion-description">
              Estrategia enfocada en garantizar que los estudiantes avancen de manera continua y exitosa en cada etapa de su formación, mediante acciones que previenen el rezago escolar y fortalecen su permanencia en el sistema educativo.
            </p>
          </div>
        </div>

        {/* Dimensión Gestión de la Convivencia Escolar */}
        <div className="acciones-section">
          <h2 className="section-title">Dimensión Gestión de la Convivencia Escolar</h2>
          <div className="accion-item">
            <h3 className="accion-title">Plan de Gestión de la Convivencia Escolar</h3>
            <p className="accion-description">
              Conjunto de acciones y estrategias destinadas a promover un ambiente escolar respetuoso, inclusivo y seguro, fomentando relaciones positivas entre todos los miembros de la comunidad educativa.
            </p>
          </div>
          <div className="accion-item">
            <h3 className="accion-title">Talleres de Formación Integral</h3>
            <p className="accion-description">
              Espacios de aprendizaje orientados al desarrollo de habilidades socioemocionales, valores y competencias que contribuyen al bienestar integral y a la formación de ciudadanos comprometidos con su entorno.
            </p>
          </div>
          <div className="accion-item">
            <h3 className="accion-title">Apoyo Psicosocial a Estudiantes y sus Familias</h3>
            <p className="accion-description">
              Iniciativa que ofrece orientación y acompañamiento a estudiantes y sus familias para abordar desafíos emocionales, sociales y educativos, fortaleciendo el bienestar y la cohesión comunitaria.
            </p>
          </div>
        </div>

        {/* Dimensión Gestión de Recursos */}
        <div className="acciones-section">
          <h2 className="section-title">Dimensión Gestión de Recursos</h2>
          <div className="accion-item">
            <h3 className="accion-title">Gestión y Uso de Recursos Pedagógicos</h3>
            <p className="accion-description">
              Estrategias enfocadas en optimizar la disponibilidad y el uso de materiales educativos, tecnologías y herramientas pedagógicas para potenciar los aprendizajes y enriquecer las experiencias de enseñanza.
            </p>
          </div>
          <div className="accion-item">
            <h3 className="accion-title">Gestión del Recurso Humano y su Desarrollo Profesional</h3>
            <p className="accion-description">
              Acciones orientadas a fortalecer el desempeño del equipo docente y no docente, promoviendo su desarrollo profesional continuo y alineando sus competencias con los objetivos institucionales para garantizar una educación de calidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acciones;
