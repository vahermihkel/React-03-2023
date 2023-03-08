import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// navigeerimiseks:
// 1. npm install react-router-dom (installib mooduli node_modules kausta)
// 2. index.js failis panen App ümber BrowserRouteri
// 3. App.js failis teen URLi ja HTMLi seosed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);