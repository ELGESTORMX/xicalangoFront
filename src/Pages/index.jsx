import React from 'react';
import Navbar from '../components/navbar';
import Whatsapp from '../components/whatsappFlotante';
import Hero from '../components/hero';
import AboutUs from '../components/aboutUs';
import Servicios from '../components/servicios';
import PorqueElegirnos from '../components/porqueElegirnos';
import Contacto from '../components/contacto';
import Footer from '../components/footer';
function Index() {
  return (
    <div className="flex flex-col relative bg-gray-100">
      <Whatsapp/>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Servicios/>
      <PorqueElegirnos/>
      <Contacto/>
      <Footer/>
      {/* Aquí puedes agregar más componentes o secciones según sea necesario */}
    </div>
  );
}

export default Index;