import React, { useState, useEffect } from 'react';
import logo from '../../public/images/logo.png';
export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => {
        setShowSearch(prev => !prev);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 50); // Cambia el fondo después de 50px de scroll
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup del listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`w-full h-[15vh] z-50 flex justify-between items-center py-4 px-6 lg:px-10 top-0 fixed transition-all duration-500 ease-in-out ${
                isScrolled || isMenuOpen ? 'bg-[#6FAD46]' : 'bg-transparent'
            }`}>
            
                {/* Izquierda - Logo */}
                <img src={logo} alt="logo" className='h-full object-contain rounded-full' />

                {/* Centro - Navegación (solo desktop) */}
                <nav className="hidden lg:flex gap-3 text-white font-medium text-lg">
                    <a href="#" className="hover:bg-[#808080be] px-4 py-1 rounded-3xl transition-colors duration-300">Inicio</a>
                    <a href="#aboutUs" className="hover:bg-[#808080be] px-4 py-1 rounded-3xl transition-colors duration-300">Nosotros</a>
                    <a href="#servicios" className="hover:bg-[#808080be] px-4 py-1 rounded-3xl transition-colors duration-300">Servicios</a>
                    <a href="#contacto" className="hover:bg-[#808080be] px-4 py-1 rounded-3xl transition-colors duration-300">Contacto</a>
                    <a href="/tienda" className="hover:bg-[#808080be] px-4 py-1 rounded-3xl transition-colors duration-300">Tienda</a>
                </nav>

                {/* Derecha - Buscador y menú hamburguesa */}
                <div className="flex items-center">
                    
                    {/* Buscador (solo desktop) */}
                    <div className="hidden lg:flex items-center">
                        <div
                            className={`flex items-center rounded-md px-2 py-1 overflow-hidden transition-all duration-300 ease-in-out
                            ${showSearch ? 'w-80 opacity-100' : 'w-0 opacity-0'}`}
                        >
                            <input
                                type="text"
                                placeholder="¿Que estás buscando?"
                                className="bg-[#ffffffad] rounded-3xl py-2 px-4 text-sm text-[#535353] placeholder:text-[#535353] outline-none w-full"
                            />
                        </div>

                        <button
                            onClick={toggleSearch}
                            className="ml-2 text-white text-xl transition-all duration-300 transform hover:scale-110 hover:brightness-125 hover:drop-shadow-[0_0_6px_#ffffff80]"
                            aria-label="Buscar"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Menú hamburguesa (solo móvil/tablet) */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden text-white p-2 rounded-md hover:bg-[#808080be] transition-colors duration-300"
                        aria-label="Abrir menú"
                    >
                        <svg
                            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú móvil overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={closeMenu}>
                    <div className="fixed top-[15vh] left-0 right-0 bg-[#6FAD46] shadow-xl">
                        <nav className="flex flex-col p-6">
                            <a 
                                href="#" 
                                onClick={closeMenu}
                                className="text-white font-medium text-lg py-4 px-4 hover:bg-[#5a9639] rounded-lg transition-colors duration-300 border-b border-white border-opacity-20"
                            >
                                Inicio
                            </a>
                            <a 
                                href="#aboutUs" 
                                onClick={closeMenu}
                                className="text-white font-medium text-lg py-4 px-4 hover:bg-[#5a9639] rounded-lg transition-colors duration-300 border-b border-white border-opacity-20"
                            >
                                Nosotros
                            </a>
                            <a 
                                href="#servicios" 
                                onClick={closeMenu}
                                className="text-white font-medium text-lg py-4 px-4 hover:bg-[#5a9639] rounded-lg transition-colors duration-300 border-b border-white border-opacity-20"
                            >
                                Servicios
                            </a>
                            <a 
                                href="#contacto" 
                                onClick={closeMenu}
                                className="text-white font-medium text-lg py-4 px-4 hover:bg-[#5a9639] rounded-lg transition-colors duration-300 border-b border-white border-opacity-20"
                            >
                                Contacto
                            </a>
                            <a 
                                href="/tienda" 
                                onClick={closeMenu}
                                className="text-white font-medium text-lg py-4 px-4 hover:bg-[#5a9639] rounded-lg transition-colors duration-300"
                            >
                                Tienda
                            </a>
                            
                            {/* Buscador móvil */}
                            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                                <input
                                    type="text"
                                    placeholder="¿Que estás buscando?"
                                    className="w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-3xl py-3 px-4 outline-none focus:bg-opacity-30 transition-all duration-300"
                                />
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
