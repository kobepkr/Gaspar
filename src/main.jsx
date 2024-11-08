import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
    <Navbar/>
    <App/>
  </StrictMode>,
);
