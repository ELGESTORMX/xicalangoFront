import React from 'react';
import NavbarTienda from '../components/navbarTienda';
import HeroTienda from '../components/tienda/heroTienda';
export default function tienda() {
  
  // Productos destacados de ejemplo
  const productosDestacados = [
    {
      id: 1,
      nombre: "Rosa del Desierto",
      precio: 25.99,
      precioAnterior: 35.99,
      imagen: "/images/logo.png",
      categoria: "Plantas",
      descuento: 28,
      rating: 4.5,
      vendidos: 127
    },
    {
      id: 2,
      nombre: "Kit Herramientas Básicas",
      precio: 89.99,
      imagen: "/images/logo.png",
      categoria: "Herramientas",
      rating: 4.8,
      vendidos: 203
    },
    {
      id: 3,
      nombre: "Sistema Riego Automático",
      precio: 159.99,
      precioAnterior: 199.99,
      imagen: "/images/logo.png",
      categoria: "Riego",
      descuento: 20,
      rating: 4.7,
      vendidos: 89
    },
    {
      id: 4,
      nombre: "Fertilizante Orgánico 5kg",
      precio: 34.99,
      imagen: "/images/logo.png",
      categoria: "Fertilizantes",
      rating: 4.6,
      vendidos: 156
    }
  ];

  // Categorías principales
  const categorias = [
    { nombre: "Plantas", icono: "🌱", productos: 245 },
    { nombre: "Herramientas", icono: "🔧", productos: 89 },
    { nombre: "Riego", icono: "💧", productos: 67 },
    { nombre: "Fertilizantes", icono: "🌿", productos: 34 },
    { nombre: "Macetas", icono: "🏺", productos: 156 },
    { nombre: "Decoración", icono: "✨", productos: 78 }
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavbarTienda />
      
      {/* Espaciado para el navbar fijo */}
      <div className='pt-20'>
        
        {/* Banner Hero */}
        <HeroTienda />

        {/* Categorías */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
                Explora por Categorías
              </h2>
              <p className='text-xl text-gray-600'>
                Encuentra exactamente lo que necesitas para tu proyecto
              </p>
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
              {categorias.map((categoria, index) => (
                <div key={index} className='bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer group'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {categoria.icono}
                  </div>
                  <h3 className='font-bold text-gray-800 mb-2'>{categoria.nombre}</h3>
                  <p className='text-sm text-gray-600'>{categoria.productos} productos</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Productos Destacados */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
                Productos Destacados
              </h2>
              <p className='text-xl text-gray-600'>
                Los favoritos de nuestros clientes
              </p>
            </div>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {productosDestacados.map((producto) => (
                <div key={producto.id} className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group'>
                  {/* Imagen del producto */}
                  <div className='relative overflow-hidden h-48'>
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    
                    {/* Etiquetas */}
                    <div className='absolute top-4 left-4'>
                      <span className='bg-gray-800 text-white px-2 py-1 rounded text-xs font-medium'>
                        {producto.categoria}
                      </span>
                    </div>
                    
                    {producto.descuento && (
                      <div className='absolute top-4 right-4'>
                        <span className='bg-red-500 text-white px-2 py-1 rounded text-xs font-bold'>
                          -{producto.descuento}%
                        </span>
                      </div>
                    )}
                    
                    {/* Botones de acción */}
                    <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center'>
                      <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2'>
                        <button className='bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors'>
                          <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                        </button>
                        <button className='bg-[#6FAD46] text-white p-2 rounded-full hover:bg-[#5a9639] transition-colors'>
                          <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h16M7 13v4a2 2 0 002 2h6a2 2 0 002-2v-4m-8 2h8"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Información del producto */}
                  <div className='p-6'>
                    <h3 className='font-bold text-gray-800 mb-2 text-lg'>
                      {producto.nombre}
                    </h3>
                    
                    {/* Rating y ventas */}
                    <div className='flex items-center mb-3'>
                      <div className='flex text-yellow-400 mr-2'>
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-4 h-4 ${i < Math.floor(producto.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className='text-sm text-gray-600'>({producto.vendidos} vendidos)</span>
                    </div>
                    
                    {/* Precio */}
                    <div className='flex items-center justify-between'>
                      <div>
                        <span className='text-2xl font-bold text-[#6FAD46]'>
                          ${producto.precio}
                        </span>
                        {producto.precioAnterior && (
                          <span className='text-gray-500 line-through ml-2'>
                            ${producto.precioAnterior}
                          </span>
                        )}
                      </div>
                      <button className='bg-[#6FAD46] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5a9639] transition-colors'>
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Ver más productos */}
            <div className='text-center mt-12'>
              <button className='bg-[#6FAD46] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#5a9639] transition-colors shadow-lg hover:shadow-xl'>
                Ver Todos los Productos
              </button>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-6 lg:px-8'>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>Envío Gratis</h3>
                <p className='text-gray-600'>En compras mayores a $100</p>
              </div>
              
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>Garantía de Calidad</h3>
                <p className='text-gray-600'>30 días de garantía en plantas</p>
              </div>
              
              <div className='text-center'>
                <div className='w-16 h-16 bg-[#6FAD46] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>Soporte Experto</h3>
                <p className='text-gray-600'>Asesoría profesional gratuita</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className='py-16 bg-[#6FAD46]'>
          <div className='max-w-4xl mx-auto px-6 lg:px-8 text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
              ¡Mantente al día!
            </h2>
            <p className='text-xl text-white/90 mb-8'>
              Recibe ofertas exclusivas, consejos de jardinería y novedades de productos
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Tu email'
                className='flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white outline-none'
              />
              <button className='bg-white text-[#6FAD46] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors'>
                Suscribirse
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
