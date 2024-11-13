// src/App.jsx
import React from 'react';
import './App.css';  // Aquí puedes poner los estilos generales de tu aplicación
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      
      <Header/>
      <Banner/>
      <Navbar/>
      <main>
      <h2>Bienvenido a la Escuela Gaspar Cabrales</h2>
      <p>Aquí va el contenido de la página...</p>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
