import React from 'react';
import './Home.css'; // Asegúrate de tener un archivo de estilos si no lo tienes

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Últimas Actividades Realizadas</h1>
      <div className="activity-container">
        <h2 className="activity-title">Tarde Familiar N° 4: Un Encuentro de Comunidad y Solidaridad</h2>
        <p className="activity-description">
          La pasada actividad, nuestra escuela celebró con gran éxito la <strong>Tarde Familiar N° 4</strong>,
          una jornada llena de alegría, participación y espíritu comunitario. Este evento reunió a apoderados, estudiantes
          y docentes en un ambiente de colaboración y fraternidad.
        </p>
        <p className="activity-description">
          El propósito de esta actividad fue doble: fomentar la convivencia entre las familias de nuestra comunidad
          educativa y recaudar fondos para apoyar el desarrollo de la institución. Los apoderados participaron activamente,
          ya sea montando puestos de venta con diversos productos o asistiendo como compradores para apoyar a los demás.
          Desde deliciosos platos caseros hasta comida rápida y repostería, los asistentes tuvieron la oportunidad de disfrutar
          y adquirir una variedad de artículos en un entorno cálido y ameno.
        </p>
        <p className="activity-description">
          Más allá de la recaudación de fondos, la Tarde Familiar fue una oportunidad invaluable para fortalecer los
          lazos entre las familias, promoviendo un espíritu de unidad y apoyo mutuo. Fue un evento que reflejó el compromiso
          y la solidaridad que caracterizan a nuestra comunidad escolar, dejando claro que juntos podemos alcanzar grandes logros.
        </p>
        <p className="activity-description">
          Agradecemos sinceramente a todos los apoderados, estudiantes y colaboradores que hicieron posible esta tarde
          inolvidable. ¡Esperamos con entusiasmo la próxima edición para seguir construyendo estos lazos tan especiales!
        </p>

        {/* Sección de imágenes */}
        <div className="media-container">
          <h3 className="media-title">Galería de Imágenes</h3>
          <div className="images">
            <img src="ruta-de-la-imagen-1.jpg" alt="Imagen de la actividad 1" className="activity-image" />
            <img src="ruta-de-la-imagen-2.jpg" alt="Imagen de la actividad 2" className="activity-image" />
            <img src="ruta-de-la-imagen-3.jpg" alt="Imagen de la actividad 3" className="activity-image" />
          </div>
        </div>

        {/* Sección de video */}
        <div className="media-container">
          <h3 className="video-title">Video Recopilatorio de la Actividad</h3>
          <video controls className="video">
            <source src="ruta-del-video.mp4" type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
