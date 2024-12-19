import React from 'react';

function Uniformes() {
  return (
    <div className="protocolo-container">
       <h1 className="titulo-principal">Uniforme de Escuela Gaspar Cabrales</h1>

      <div className="subtitulo-articulo">
        Artículo 11. Presentación personal y uso del uniforme escolar
      </div>

      <div className="introduccion">
        En consonancia con lo planteado respecto a la presentación personal y uniforme, se exige higiene y presentación personal adecuada y coherente con nuestro Proyecto Educativo escolar.
      </div>

      <div className="subtitulo">Requisitos de presentación personal:</div>
      <ul className="lista-detalles">
        <li>Cabello limpio y bien peinado, que deje rostro descubierto, sin peinados extravagantes.</li>
        <li>Uñas cortas, naturales y limpias. Higiene personal diaria.</li>
        <li>Presentarse con uniforme y/o buzo del establecimiento limpio; pantalón a la altura de la cintura, cubriendo la ropa interior.</li>
        <li>Se excluye el uso de expansores.</li>
        <li>Evitar accesorios (aros grandes, anillos grandes, piercings, expansores, uñas postizas, etc.) que puedan generar daño involuntario a uno mismo o a compañeros/as.</li>
      </ul>

      <div className="subtitulo">Uniforme para niveles de transición (Nt1 y Nt2):</div>
      <ul className="lista-detalles">
        <li>Buzo institucional o azul marino</li>
        <li>Polera institucional o blanca completa (modelo piqué)</li>
        <li>Zapatillas blancas, negras o azul marino</li>
        <li>Delantal cuadrillé azul, rosado o capa café</li>
      </ul>

      <div className="subtitulo">Uniforme para enseñanza básica (1ero a 8vo):</div>
      <ul className="lista-detalles">
        <li>Pantalón gris</li>
        <li>Falda o pantalón azul marino</li>
        <li>Polera institucional o blanca completa (modelo piqué)</li>
        <li>Chaleco cuello en “V” color azul marino</li>
        <li>Medias o pantys color azul marino</li>
        <li>Zapatos escolares o zapatillas negras</li>
        <li>Capa color café, delantal cuadrillé, capa blanca</li>
      </ul>

      <div className="subtitulo">Uniforme para clases de educación física:</div>
      <ul className="lista-detalles">
        <li>Buzo institucional o azul marino</li>
        <li>Polera blanca institucional o polera blanca de recambio</li>
        <li>Zapatillas blancas, negras o azules</li>
      </ul>


      {/* Imagen del uniforme */}
      <div className="imagen-uniforme">
        <img src="/uniforme.jpg" alt="Uniforme escolar" className="uniforme-imagen" />
      </div>
    </div>
  );
}

export default Uniformes;
