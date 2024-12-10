import React from 'react';
import './Home.css'; // Asegúrate de tener un archivo de estilos si no lo tienes
import Slider from 'react-slick'; // Asegurarse de importar Slider de react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Home = () => {
 // Definir las imágenes del carrusel
 const homeImages = [
  { src: '/sm1.jpg', alt: 'Imagen de la actividad 5' },
  { src: '/sm2.jpg', alt: 'Imagen de la actividad 2' },
  { src: '/sm3.jpg', alt: 'Imagen de la actividad 3' },
  { src: '/sm4.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm5.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm6.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm7.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm8.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm9.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm10.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm11.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm12.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm13.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm14.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm15.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/sm16.jpg', alt: 'Imagen de la actividad 4' },

];

const homeImages2 = [
  { src: '/tf51.jpg', alt: 'Imagen de la actividad 5' },
  { src: '/tf52.jpg', alt: 'Imagen de la actividad 2' },
  { src: '/tf53.jpg', alt: 'Imagen de la actividad 3' },
  { src: '/tf54.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf55.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf56.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf57.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf58.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf59.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf510.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf511.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf512.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf513.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf514.jpg', alt: 'Imagen de la actividad 4' },
  { src: '/tf515.jpg', alt: 'Imagen de la actividad 4' },


];

// Configuración del carrusel
const settings = {
  dots: true, // Muestra los puntos de navegación
  infinite: true, // El carrusel se repetirá infinitamente
  speed: 500, // Velocidad de transición
  slidesToShow: 3, // Cuántos elementos mostrar a la vez
  slidesToScroll: 1, // Cuántos elementos desplazar a la vez
  autoplay: true, // Reproducción automática
  autoplaySpeed: 2000, // Tiempo entre cada transición
};


  return (
    <div className="home-container">
      <h1 className="title">Últimas Actividades Realizadas</h1>
      <div className="activity-container">
        <h2 className="activity-title">Tarde Familiar N° 5: Ultimas Actividades del año.</h2>
        <p className="activity-description">
          Este jueves 5 de diciembre se celebró la quinta y última Tarde Familiar del año,
            en la que nos reunimos nuevamente con nuestros apoderados y alumnos de nuestra
            querida escuela. En esta ocasión, se realizaron diversas actividades para los 
            niños, quienes tuvieron la oportunidad de correr, cantar y bailar en varias
            ocasiones. Además, los apoderados también participaron activamente, creando 
            una tarde familiar muy especial.
        </p>
        <p className="activity-description">
        Se vendieron diversos productos, como ropa y comida rápida, con el propósito de generar
          recursos para los distintos cursos, que se destinarán a actividades como paseos y fiestas
          de fin de año. Este tipo de eventos nos permite seguir fortaleciendo nuestra comunidad, 
          que sigue siendo un ejemplo de unidad y colaboración, tanto este año como en el próximo.
        </p>
      
        

        {/* Sección de carrusel */}
        <div className="carousel-section">
          <h3 className="carousel-title">Galería de Imágenes</h3>
          <Slider {...settings}>
            {homeImages2.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Sección de video */}
        <div className="media-container">
          <h3 className="video-title">Video Recopilatorio de la Actividad.</h3>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/RVmqjFfRQ-Y"
              title="Video Recopilatorio"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

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
      
        

        {/* Sección de carrusel */}
        <div className="carousel-section">
          <h3 className="carousel-title">Galería de Imágenes</h3>
          <Slider {...settings}>
            {homeImages.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Sección de video */}
        <div className="media-container">
          <h3 className="video-title">Video Recopilatorio de la Actividad.</h3>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/vZv9-TWdBJM"
              title="Video Recopilatorio"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>


      </div>


      </div>
    </div>
  );
};

export default Home;
