import React, { useState } from 'react';

export default function galeriaProyectos() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  // Datos de ejemplo de proyectos
  const proyectos = [
    {
      id: 1,
      titulo: "Jardín Residencial Villa Hermosa",
      categoria: "residencial",
      imagen: "/images/logo.png", // Reemplazar con imagen real
      descripcion: "Transformación completa de jardín familiar con áreas de recreación y plantas nativas."
    },
    {
      id: 2,
      titulo: "Hotel Tropical Paradise",
      categoria: "hotelero",
      imagen: "/images/logo.png", // Reemplazar con imagen real
      descripcion: "Paisajismo integral para complejo hotelero con jardines temáticos y áreas de piscina."
    },
    {
      id: 3,
      titulo: "Edificio Corporativo Central",
      categoria: "comercial",
      imagen: "/images/logo.png", // Reemplazar con imagen real
      descripcion: "Diseño de espacios verdes corporativos con jardines verticales y áreas comunes."
    },
    {
      id: 4,
      titulo: "Residencia Moderna Bosque",
      categoria: "residencial",
      imagen: "/images/logo.png", // Reemplazar con imagen real
      descripcion: "Jardín contemporáneo con diseño minimalista y plantas de bajo mantenimiento."
    },
    {
      id: 5,
      titulo: "Resort Playa Esmeralda",
      categoria: "hotelero",
      imagen: "/images/logo.png", // Reemplazar con imagen real
      descripcion: "Paisajismo tropical para resort de playa con palmeras y jardines costeros."
    },
    {
      id: 6,
      titulo: "Centro Comercial Plaza Verde",
      categoria: "comercial",
      imagen: "/images/logo.png", // Reemplazar con imagen real
      descripcion: "Áreas verdes y jardines interiores para centro comercial de alta gama."
    }
  ];

  const filtros = [
    { id: 'todos', nombre: 'Todos los Proyectos' },
    { id: 'residencial', nombre: 'Residencial' },
    { id: 'hotelero', nombre: 'Hotelero' },
    { id: 'comercial', nombre: 'Comercial' }
  ];

  const proyectosFiltrados = filtroActivo === 'todos' 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === filtroActivo);

  return (
    <section id='proyectos' className='w-full min-h-screen py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        
        {/* Título principal */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Nuestros Trabajos
          </h2>
          <div className='w-24 h-1 bg-[#6FAD46] mx-auto mb-6'></div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Descubre algunos de nuestros trabajos más destacados que reflejan 35 años de experiencia
          </p>
        </div>

        {/* Filtros */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {filtros.map((filtro) => (
            <button
              key={filtro.id}
              onClick={() => setFiltroActivo(filtro.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filtroActivo === filtro.id
                  ? 'bg-[#6FAD46] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filtro.nombre}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {proyectosFiltrados.map((proyecto) => (
            <div key={proyecto.id} className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group'>
              {/* Imagen del proyecto */}
              <div className='relative overflow-hidden h-64'>
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center'>
                  <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <button className='bg-white text-[#6FAD46] px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors'>
                      Ver Detalles
                    </button>
                  </div>
                </div>
                {/* Etiqueta de categoría */}
                <div className='absolute top-4 left-4'>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    proyecto.categoria === 'residencial' ? 'bg-blue-500 text-white' :
                    proyecto.categoria === 'hotelero' ? 'bg-orange-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {proyecto.categoria.charAt(0).toUpperCase() + proyecto.categoria.slice(1)}
                  </span>
                </div>
              </div>
              
              {/* Contenido */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>
                  {proyecto.titulo}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {proyecto.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <h3 className='text-3xl font-bold text-gray-800 mb-4'>
            ¿Tienes un proyecto en mente?
          </h3>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Contáctanos para una consulta gratuita y transformemos tu espacio en algo extraordinario
          </p>
          <a href='#contacto' className='bg-[#6FAD46] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a9639] transition-colors duration-300 shadow-lg hover:shadow-xl'>
            Solicitar Cotización
          </a>
        </div>

      </div>
    </section>
  );
}
