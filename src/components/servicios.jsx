import React from 'react';
import { useNavigate } from 'react-router-dom';
import residenciales from '../../public/images/categorias/residenciales.jpg';
import hoteleros from '../../public/images/categorias/hoteleros.jpg';
import comerciales from '../../public/images/2.jpg';
import jardineros from '../../public/images/categorias/jardineria.jpg';
import eventos from '../../public/images/categorias/eventos.jpg';
export default function nuestrosServicios() {
  const navigate = useNavigate();
  
  // Servicios principales que ofrece Xicalango
  const servicios = [
    {
      id: 'residencial',
      titulo: 'Proyectos Residenciales',
      descripcion: 'Jardines familiares, patios y espacios exteriores para hogares',
      imagenes: [
        residenciales, // Imagen principal (frente)
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'hotelero',
      titulo: 'Proyectos Hoteleros',
      descripcion: 'Paisajismo para hoteles, resorts y complejos turísticos',
      imagenes: [
        hoteleros
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'comercial',
      titulo: 'Espacios Comerciales',
      descripcion: 'Paisajismo para negocios, locales comerciales y oficinas',
      imagenes: [
        comerciales
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'jardineria',
      titulo: 'Jardinería y Mantenimiento',
      descripcion: 'Mantenimiento, poda y cuidado integral de jardines',
      imagenes: [
        jardineros
      ],
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'eventos',
      titulo: 'Eventos Especiales',
      descripcion: 'Renta de macetas y decoración para eventos particulares, bodas y celebraciones',
      imagenes: [
        eventos
      ],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const handleServicioClick = (servicioId) => {
    // Navegar a la página específica del servicio
    if (servicioId === 'eventos') {
      navigate('/servicios/eventos');
      window.scrollTo(0, 0);
    } else if (servicioId === 'residencial') {
      navigate('/servicios/residencial');
      window.scrollTo(0, 0);
    } else if (servicioId === 'hotelero') {
      navigate('/servicios/hotelero');
      window.scrollTo(0, 0);
    } else if (servicioId === 'comercial') {
      navigate('/servicios/comercial');
      window.scrollTo(0, 0);
    } else if (servicioId === 'jardineria') {
      navigate('/servicios/jardineria');
      window.scrollTo(0, 0);
    } else {
      // Para otros servicios, puedes crear páginas similares siguiendo el patrón
      console.log(`Página de ${servicioId} en desarrollo`);
      // Cuando tengas las otras páginas creadas, descomenta estas líneas:
      // navigate(`/servicios/${servicioId}`);
      // window.scrollTo(0, 0);
      
      // Por ahora, mostrar un mensaje al usuario
      alert(`La página de ${servicioId} estará disponible pronto. Por ahora puedes contactarnos para más información.`);
    }
  };

  return (
    <section id='servicios' className='w-full min-h-screen py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        
        {/* Título principal */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Nuestros Servicios
          </h2>
          <div className='w-24 h-1 bg-[#6FAD46] mx-auto mb-6'></div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Descubre la amplia gama de servicios que ofrecemos en Xicalango. Cada especialidad está respaldada por años de experiencia y proyectos exitosos.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16'>
          {servicios.map((servicio) => (
            <div 
              key={servicio.id} 
              onClick={() => handleServicioClick(servicio.id)}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-2'
            >
              {/* Stack de imágenes */}
              <div className='relative h-48 overflow-hidden'>
                {/* Imagen trasera */}
                <div className='absolute inset-0 transform rotate-3 scale-95 opacity-60 group-hover:rotate-6 transition-transform duration-500'>
                  <img 
                    src={servicio.imagenes[2]} 
                    alt=""
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                </div>
                
                {/* Imagen media */}
                <div className='absolute inset-0 transform -rotate-2 scale-98 opacity-80 group-hover:-rotate-3 transition-transform duration-500'>
                  <img 
                    src={servicio.imagenes[1]} 
                    alt=""
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                </div>
                
                {/* Imagen principal (frente) */}
                <div className='absolute inset-0 group-hover:scale-105 transition-transform duration-500'>
                  <img 
                    src={servicio.imagenes[0]} 
                    alt={servicio.titulo}
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
                  
                  {/* Icono de ver más */}
                  <div className='absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg'>
                      <svg className='w-5 h-5 text-[#6FAD46]' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenido */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2 group-hover:text-[#6FAD46] transition-colors duration-300'>
                  {servicio.titulo}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                  {servicio.descripcion}
                </p>
                
                {/* Botón de acción */}
                <div className='flex items-center text-[#6FAD46] font-medium text-sm group-hover:text-[#5a9639] transition-colors duration-300'>
                  <span>Ver más detalles</span>
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-800 mb-4'>
            ¿Necesitas alguno de estos servicios?
          </h3>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Contáctanos y descubre cómo podemos transformar tu espacio con nuestros servicios profesionales
          </p>
          <a href='#contacto' className='bg-[#6FAD46] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a9639] transition-colors duration-300 shadow-lg hover:shadow-xl'>
            Solicitar Cotización
          </a>
        </div>

      </div>
    </section>
  );
}
