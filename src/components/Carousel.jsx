import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Asegúrate de que este archivo esté bien configurado

const Carousel = () => {
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // El carrusel se repetirá infinitamente
    speed: 500, // La velocidad de transición
    slidesToShow: 3, // Mostrar 3 elementos a la vez
    slidesToScroll: 1, // Desplazar 1 elemento a la vez
    autoplay: true, // Habilita la reproducción automática
    autoplaySpeed: 2000, // Tiempo entre cada transición
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
      
        <div>
          <img src="2.jpeg" alt="Imagen 2" className="carousel-image" />
        </div>
        <div>
          <img src="3.jpeg" alt="Imagen 3" className="carousel-image" />
        </div>
        <div>
          <img src="4.jpeg" alt="Imagen 4" className="carousel-image" />
        </div>
        <div>
          <img src="5.jpeg" alt="Imagen 5" className="carousel-image" />
        </div>
        <div>
          <img src="6.jpeg" alt="Imagen 6" className="carousel-image" />
        </div>
        <div>
          <img src="7.jpeg" alt="Imagen 7" className="carousel-image" />
        </div>
        <div>
          <img src="8.jpeg" alt="Imagen 8" className="carousel-image" />
        </div>
        
        <div>
          <img src="10.jpeg" alt="Imagen 10" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;