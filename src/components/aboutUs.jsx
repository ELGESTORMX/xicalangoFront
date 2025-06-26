import React from 'react';
import imagen from '../../public/images/3.jpg'
export default function aboutUs() {
  return (
    <section id='aboutUs' className='w-full min-h-screen py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        
        {/* Título principal */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Sobre Nosotros
          </h2>
          <div className='w-24 h-1 bg-[#6FAD46] mx-auto mb-6'></div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Desde 1985 somos expertos en renovar cualquier espacio y transformarlos en ecosistemas únicos
          </p>
        </div>

        {/* Contenido principal */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
          
          {/* Lado izquierdo - Imagen */}
          <div className='relative'>
            <div className='aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl'>
              <img 
                src={imagen}
                alt="Equipo Xicalango trabajando en jardín" 
                className='w-full h-96 object-cover rounded-lg'
              />
            </div>
            {/* Decoración */}
            <div className='absolute -top-4 -left-4 w-24 h-24 bg-[#6FAD46] rounded-full opacity-20'></div>
            <div className='absolute -bottom-4 -right-4 w-16 h-16 bg-[#6FAD46] rounded-full opacity-30'></div>
          </div>

          {/* Lado derecho - Contenido */}
          <div className='space-y-6'>
            <h3 className='text-3xl font-bold text-gray-800'>
              Xicalango La Reserva Ecológica
            </h3>
            
            <p className='text-lg text-gray-600 leading-relaxed'>
              Somos una empresa especializada en diseño de paisajes, jardinería y servicios de mantenimiento con más de 
              <span className='font-semibold text-[#6FAD46]'> 35 años de experiencia </span> 
              transformando espacios residenciales, comerciales y hoteleros desde 1985.
            </p>
            
            <p className='text-lg text-gray-600 leading-relaxed'>
              Nos dedicamos a crear y mantener ambientes únicos que combinan la belleza natural con 
              la funcionalidad, ofreciendo servicios integrales de jardinería que incluyen diseño, 
              instalación y mantenimiento continuo. Hemos trabajado con hoteles, edificios comerciales 
              y residencias, siempre respetando el equilibrio ecológico.
            </p>

            <div className='grid grid-cols-2 gap-6 mt-8'>
              <div className='text-center p-4 bg-white rounded-lg shadow-md'>
                <div className='text-3xl font-bold text-[#6FAD46] mb-2'>500+</div>
                <div className='text-gray-600 font-medium'>Proyectos Completados</div>
              </div>
              <div className='text-center p-4 bg-white rounded-lg shadow-md'>
                <div className='text-3xl font-bold text-[#6FAD46] mb-2'>35+</div>
                <div className='text-gray-600 font-medium'>Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores y características */}
        <div className='grid md:grid-cols-3 gap-8'>
          
          {/* Valor 1 */}
          <div className='text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h4 className='text-xl font-bold text-gray-800 mb-3'>Compromiso Ecológico</h4>
            <p className='text-gray-600'>
              Utilizamos plantas nativas y técnicas sostenibles que respetan el medio ambiente.
            </p>
          </div>

          {/* Valor 2 */}
          <div className='text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h4 className='text-xl font-bold text-gray-800 mb-3'>Servicios Integrales</h4>
            <p className='text-gray-600'>
              Ofrecemos diseño, instalación y mantenimiento completo de jardines y espacios verdes.
            </p>
          </div>

          {/* Valor 3 */}
          <div className='text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 className='text-xl font-bold text-gray-800 mb-3'>Calidad Garantizada</h4>
            <p className='text-gray-600'>
              Ofrecemos garantía en todos nuestros trabajos y mantenimiento post-instalación.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
