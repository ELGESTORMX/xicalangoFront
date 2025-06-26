// filepath: c:\Users\tavov\OneDrive\Desktop\nuew\front-end\src\routes\router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/index';
import App from '../App';
import Tienda from '../Pages/tienda';
function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Index/>} /> {/* Ruta raíz */}
      <Route path="/app" element={<App />} /> {/* Otra ruta opcional */}
      <Route path="/tienda" element={<Tienda />} /> {/* Ruta para la tienda */}
    </Routes>
  );
}

export default RouterComponent;