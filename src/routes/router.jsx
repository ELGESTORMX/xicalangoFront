// filepath: c:\Users\tavov\OneDrive\Desktop\nuew\front-end\src\routes\router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../Pages/index';
import App from '../App';
import Tienda from '../Pages/tienda';
import EventosEspeciales from '../Pages/galeriaServicios/eventos';
import ServiciosResidenciales from '../Pages/galeriaServicios/residenciales';
import ProyectosHoteleros from '../Pages/galeriaServicios/hoteleros';
import ServiciosComerciales from '../Pages/galeriaServicios/comerciales';
import ServiciosJardineria from '../Pages/galeriaServicios/jardineria';
function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Index/>} /> {/* Ruta raíz */}
      <Route path="/app" element={<App />} /> {/* Otra ruta opcional */}
      <Route path="/tienda" element={<Tienda />} /> {/* Ruta para la tienda */}
      <Route path="/servicios/eventos" element={<EventosEspeciales />} /> {/* Ruta para eventos especiales */}
      <Route path="/servicios/residencial" element={<ServiciosResidenciales />} /> {/* Ruta para servicios residenciales */}
      <Route path="/servicios/hotelero" element={<ProyectosHoteleros />} /> {/* Ruta para proyectos hoteleros */}
      <Route path="/servicios/comercial" element={<ServiciosComerciales />} /> {/* Ruta para servicios comerciales */}
      <Route path="/servicios/jardineria" element={<ServiciosJardineria />} /> {/* Ruta para servicios de jardinería */} 

    </Routes>
  );
}

export default RouterComponent;