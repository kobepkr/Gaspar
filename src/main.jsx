import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Banner from './components/Banner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Banner />
  </StrictMode>,
);
