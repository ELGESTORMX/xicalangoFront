import React from 'react';
import background from '../../../public/images/2.jpg';
export default function heroTienda() {
  return (
    <section className=' text-white py-16 bg-no-repeat bg-cover' style={{ backgroundImage: `url(${background})` }}>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                  Tienda en línea Xicalango
                </h1>
                <p className='text-xl mb-8 opacity-90'>
                  Todo lo que necesitas para crear y mantener tu jardín perfecto. 
                  Productos de calidad profesional con envío a domicilio.
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button className='bg-white text-[#6FAD46] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors'>
                    Ver Catálogo Completo
                  </button>
                </div>
              </div>
              <div className='text-center'>
                <div className='w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm'>
                  <svg className='w-32 h-32 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
}
