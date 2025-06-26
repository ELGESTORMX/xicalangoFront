import React from 'react';

export default function galeriaProyectos() {
  
  // Categorías principales con múltiples proyectos simulados
  const categorias = [
    {
      id: 'residencial',
      titulo: 'Trabajos Residenciales',
      descripcion: 'Jardines familiares, patios y espacios exteriores para hogares',
      cantidadProyectos: '25+ proyectos',
      imagenes: [
        '/images/logo.png', // Imagen principal (frente)
        '/images/logo.png', // Imagen media
        '/images/logo.png'  // Imagen trasera
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'hotelero',
      titulo: 'Proyectos Hoteleros',
      descripcion: 'Paisajismo para hoteles, resorts y complejos turísticos',
      cantidadProyectos: '15+ proyectos',
      imagenes: [
        '/images/logo.png',
        '/images/logo.png',
        '/images/logo.png'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'comercial',
      titulo: 'Espacios Comerciales',
      descripcion: 'Oficinas, centros comerciales y edificios corporativos',
      cantidadProyectos: '20+ proyectos',
      imagenes: [
        '/images/logo.png',
        '/images/logo.png',
        '/images/logo.png'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'jardineria',
      titulo: 'Servicios de Jardinería',
      descripcion: 'Mantenimiento, poda y cuidado integral de jardines',
      cantidadProyectos: '50+ proyectos',
      imagenes: [
        '/images/logo.png',
        '/images/logo.png',
        '/images/logo.png'
      ],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const handleCategoriaClick = (categoriaId) => {
    // Aquí puedes implementar la navegación a la galería específica
    console.log(`Navegar a galería de: ${categoriaId}`);
    // Ejemplo: navigate(`/galeria/${categoriaId}`) si usas React Router
  };

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
            Explora nuestro portafolio organizado por especialidades. Cada categoría representa años de experiencia y proyectos exitosos.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {categorias.map((categoria) => (
            <div 
              key={categoria.id} 
              onClick={() => handleCategoriaClick(categoria.id)}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-2'
            >
              {/* Stack de imágenes */}
              <div className='relative h-48 overflow-hidden'>
                {/* Imagen trasera */}
                <div className='absolute inset-0 transform rotate-3 scale-95 opacity-60 group-hover:rotate-6 transition-transform duration-500'>
                  <img 
                    src={categoria.imagenes[2]} 
                    alt=""
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                </div>
                
                {/* Imagen media */}
                <div className='absolute inset-0 transform -rotate-2 scale-98 opacity-80 group-hover:-rotate-3 transition-transform duration-500'>
                  <img 
                    src={categoria.imagenes[1]} 
                    alt=""
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                </div>
                
                {/* Imagen principal (frente) */}
                <div className='absolute inset-0 group-hover:scale-105 transition-transform duration-500'>
                  <img 
                    src={categoria.imagenes[0]} 
                    alt={categoria.titulo}
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${categoria.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}></div>
                  
                  {/* Contador de proyectos */}
                  <div className='absolute top-4 right-4'>
                    <span className='bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg'>
                      {categoria.cantidadProyectos}
                    </span>
                  </div>
                  
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
                  {categoria.titulo}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                  {categoria.descripcion}
                </p>
                
                {/* Botón de acción */}
                <div className='flex items-center text-[#6FAD46] font-medium text-sm group-hover:text-[#5a9639] transition-colors duration-300'>
                  <span>Ver galería completa</span>
                  <svg className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className='bg-white rounded-2xl p-8 shadow-xl mb-16'>
          <div className='grid md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold text-[#6FAD46] mb-2'>110+</div>
              <div className='text-gray-600 font-medium'>Proyectos Completados</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-[#6FAD46] mb-2'>35</div>
              <div className='text-gray-600 font-medium'>Años de Experiencia</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-[#6FAD46] mb-2'>98%</div>
              <div className='text-gray-600 font-medium'>Clientes Satisfechos</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-[#6FAD46] mb-2'>24/7</div>
              <div className='text-gray-600 font-medium'>Soporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <h3 className='text-3xl font-bold text-gray-800 mb-4'>
            ¿Tienes un proyecto en mente?
          </h3>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Contáctanos para una consulta gratuita y transformemos tu espacio en algo extraordinario
          </p>
          <a href='#contacto' className='bg-[#6FAD46] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#5a9639] transition-colors duration-300 shadow-lg hover:shadow-xl'>
            Solicitar Cotización Gratuita
          </a>
        </div>

      </div>
    </section>
  );
}
