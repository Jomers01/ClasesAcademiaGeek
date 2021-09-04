import React from 'react'
import Banner from '../components/Banner';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hola from '../components/Hola';
import Proyectos from '../components/Proyectos';
import Servicios from '../components/Servicios';


const Portafolio = () => {
    return (
        <div className="container-principal">
            <Header />
            <Hola />
            <Proyectos />
            <Servicios />
            <Banner />
            <Contacto />
            <Footer />
        </div>
    )
}

export default Portafolio;