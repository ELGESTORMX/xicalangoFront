import React from 'react';

export default function servicios() {
  return (
    <section id='servicios' className='w-full min-h-screen py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        
        {/* Título principal */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Nuestros Servicios
          </h2>
          <div className='w-24 h-1 bg-[#6FAD46] mx-auto mb-6'></div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Transformamos tus espacios con servicios integrales de paisajismo y jardinería
          </p>
        </div>

        {/* Servicios principales */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          
          {/* Servicio 1 - Diseño de Paisajes */}
          <div className='bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#6FAD46]'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Diseño de Paisajes</h3>
            <p className='text-gray-600 mb-4'>
              Creamos diseños únicos y personalizados para cada espacio, considerando el clima, 
              el suelo y las preferencias del cliente.
            </p>
            <ul className='text-gray-600 space-y-2'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Planos y renders 3D
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Selección de plantas nativas
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Diseño sustentable
              </li>
            </ul>
          </div>

          {/* Servicio 2 - Jardinería Residencial */}
          <div className='bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#6FAD46]'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Jardinería Residencial</h3>
            <p className='text-gray-600 mb-4'>
              Transformamos jardines de casas y residencias privadas, creando espacios 
              funcionales y hermosos para disfrutar en familia.
            </p>
            <ul className='text-gray-600 space-y-2'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Jardines familiares
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Patios y terrazas
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Áreas de recreación
              </li>
            </ul>
          </div>

          {/* Servicio 3 - Proyectos Comerciales */}
          <div className='bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#6FAD46]'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Proyectos Comerciales</h3>
            <p className='text-gray-600 mb-4'>
              Diseñamos y mantenemos espacios verdes para edificios comerciales, 
              oficinas y complejos empresariales.
            </p>
            <ul className='text-gray-600 space-y-2'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Edificios corporativos
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Centros comerciales
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Áreas comunes
              </li>
            </ul>
          </div>

          {/* Servicio 4 - Paisajismo Hotelero */}
          <div className='bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#6FAD46]'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Paisajismo Hotelero</h3>
            <p className='text-gray-600 mb-4'>
              Creamos ambientes espectaculares para hoteles y complejos turísticos, 
              con mantenimiento profesional continuo.
            </p>
            <ul className='text-gray-600 space-y-2'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Hoteles y resorts
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Áreas de piscina
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Jardines temáticos
              </li>
            </ul>
          </div>

          {/* Servicio 5 - Mantenimiento */}
          <div className='bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#6FAD46]'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Mantenimiento</h3>
            <p className='text-gray-600 mb-4'>
              Servicios de mantenimiento continuo para garantizar que tus espacios 
              verdes se mantengan siempre en perfecto estado.
            </p>
            <ul className='text-gray-600 space-y-2'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Poda y fertilización
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Control de plagas
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Riego y cuidado
              </li>
            </ul>
          </div>

          {/* Servicio 6 - Consultoría */}
          <div className='bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#6FAD46]'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mb-6'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Consultoría Ecológica</h3>
            <p className='text-gray-600 mb-4'>
              Asesoramos en la selección de plantas, técnicas de cultivo y 
              prácticas sustentables para tu proyecto.
            </p>
            <ul className='text-gray-600 space-y-2'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Evaluación de suelos
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Plantas recomendadas
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-[#6FAD46] rounded-full mr-3'></span>
                Técnicas sostenibles
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
