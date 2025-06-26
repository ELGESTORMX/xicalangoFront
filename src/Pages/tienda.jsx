import React from 'react';

export default function tienda() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center py-16'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        
        {/* Icono principal */}
        <div className='mb-8'>
          <div className='w-32 h-32 mx-auto bg-[#6FAD46] rounded-full flex items-center justify-center shadow-2xl'>
            <svg className='w-16 h-16 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
        </div>

        {/* Título principal */}
        <h1 className='text-5xl lg:text-6xl font-bold text-gray-800 mb-6'>
          Tienda Online
        </h1>
        
        {/* Subtítulo */}
        <h2 className='text-2xl lg:text-3xl font-semibold text-[#6FAD46] mb-8'>
          Próximamente
        </h2>

        {/* Descripción */}
        <div className='max-w-2xl mx-auto mb-12'>
          <p className='text-xl text-gray-600 mb-6'>
            Estamos trabajando en algo increíble para ti. Nuestra tienda online estará disponible muy pronto con una amplia selección de:
          </p>
          
          <div className='grid md:grid-cols-2 gap-6 text-left'>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Plantas y flores ornamentales</span>
              </div>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Herramientas de jardinería</span>
              </div>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Sistemas de riego</span>
              </div>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Fertilizantes ecológicos</span>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Macetas y jardineras</span>
              </div>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Decoración de jardín</span>
              </div>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Sustratos y tierra</span>
              </div>
              <div className='flex items-center'>
                <div className='w-3 h-3 bg-[#6FAD46] rounded-full mr-3'></div>
                <span className='text-gray-700'>Accesorios de paisajismo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de progreso simulada */}
        <div className='max-w-md mx-auto mb-8'>
          <div className='flex justify-between text-sm text-gray-600 mb-2'>
            <span>Progreso de desarrollo</span>
            <span>75%</span>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-3'>
            <div className='bg-gradient-to-r from-[#6FAD46] to-[#5a9639] h-3 rounded-full' style={{width: '75%'}}></div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <a 
            href="#contacto" 
            className='bg-[#6FAD46] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#5a9639] transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            Contáctanos para Consultas
          </a>
          <button className='border-2 border-[#6FAD46] text-[#6FAD46] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#6FAD46] hover:text-white transition-all duration-300'>
            Notificarme cuando esté lista
          </button>
        </div>

        {/* Información de contacto temporal */}
        <div className='bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto'>
          <h3 className='text-2xl font-bold text-gray-800 mb-4'>
            ¿Necesitas algo ahora?
          </h3>
          <p className='text-gray-600 mb-6'>
            Mientras esperás nuestra tienda online, podés contactarnos directamente para consultas sobre productos y disponibilidad.
          </p>
          
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='flex items-center justify-center'>
              <svg className='w-6 h-6 text-[#6FAD46] mr-3' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div>
                <p className='font-medium text-gray-800'>Teléfono</p>
                <p className='text-gray-600'>(123) 456-7890</p>
              </div>
            </div>
            
            <div className='flex items-center justify-center'>
              <svg className='w-6 h-6 text-[#6FAD46] mr-3' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div>
                <p className='font-medium text-gray-800'>Email</p>
                <p className='text-gray-600'>ventas@xicalango.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer de la página */}
        <div className='mt-12 text-gray-500'>
          <p>© 2025 Xicalango La Reserva Ecológica</p>
        </div>

      </div>
    </div>
  );
}
