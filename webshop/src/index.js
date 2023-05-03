import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartSumContextProvider } from './store/CartSumContext';
import { AuthContextProvider } from './store/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


// Arvutitark.ee  ----> Finantsjuht, Klienditeenindajad, juhatuse liikmed
// Palgale IT-juht

// 10 inimest 2 aastat   Nortal
// 8 inimest mujale, 2 inimest jäävad haldama

// Digilugu.ee TEHIK Tervise ja Heaolu Infosüsteemide Keskus
// IT lõpetanud, koodiülevaatust

// 10 inimest 5 aastat   Helmes   /  Trinidad Wiseman
// 8 inimest mujale, 2 inimest jäävad haldama