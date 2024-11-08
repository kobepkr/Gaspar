// src/App.jsx
import React from 'react';
import './App.css';  // Aquí puedes poner los estilos generales de tu aplicación
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <main>
      <h2>Bienvenido a la Escuela Gaspar Cabrales</h2>
      <p>Aquí va el contenido de la página...</p>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
