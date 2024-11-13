// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Mision from './pages/PEI/Mision';
import Vision from './pages/PEI/Vision';
import Sello from './pages/PEI/Sello';
import Perfiles from './pages/PEI/Perfiles'
import AsistenteEducacion from './pages/Comunidad/AsistenteEducacion';
import Docente from './pages/Comunidad/Docente';
import GestionDirectivo from './pages/Comunidad/GestionDirectivo';
import PlanConvivencia from './pages/ConvivenciaEscolar/PlanConvivencia';
import Convivencia from './pages/ReglamentoInterno/Convicencia';
import Horarios from './pages/ReglamentoInterno/Horarios';
import Manual from './pages/ReglamentoInterno/Manual';
import Protocolos from './pages/ReglamentoInterno/Protocolos';
import Uniformes from './pages/ReglamentoInterno/Uniformes'
import Acciones from './pages/PME/Acciones';
import Objetivos from './pages/PME/Objetivos';
import EPA from './pages/GestionPedagogica/EPA';
import EstrategiaTrasicion from './pages/GestionPedagogica/EstrategiaTransicion';
import ModuloPedagogico from './pages/GestionPedagogica/ModuloPedagogico'
import ReglamentoEvaluacion from './pages/GestionPedagogica/ReglamentoEvaluacion'

function Home() {
  return <h2>Bienvenido a la página de inicio</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Banner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mision" element={<Mision />} /> 
            <Route path="/vision" element={<Vision />} /> 
            <Route path="/sello" element={<Sello />} /> 
            <Route path="/perfiles" element={<Perfiles />} /> 
            <Route path="/asistenteEducacion" element={<AsistenteEducacion />} /> 
            <Route path="/docente" element={<Docente />} /> 
            <Route path="/gestionDirectivo" element={<GestionDirectivo />} /> 
            <Route path="/planConvivencia" element={<PlanConvivencia />} /> 
            <Route path="/convivencia" element={<Convivencia />} /> 
            <Route path="/horarios" element={<Horarios />} /> 
            <Route path="/manual" element={<Manual />} /> 
            <Route path="/protocolos" element={<Protocolos />} /> 
            <Route path="/uniformes" element={<Uniformes />} /> 
            <Route path="/acciones" element={<Acciones />} /> 
            <Route path="/objetivos" element={<Objetivos />} />
            <Route path="/epa" element={<EPA />} /> 
            <Route path="/estrategiaTransicion" element={<EstrategiaTrasicion />} /> 
            <Route path="/moduloPedagogico" element={<ModuloPedagogico />} /> 
            <Route path="/reglamentoEvaluacion" element={<ReglamentoEvaluacion />} />  
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
