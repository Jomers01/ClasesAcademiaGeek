import React from 'react'
import Header from '../components/Header';
import Hola from '../components/Hola';
import Proyectos from '../components/Proyectos';

const Portafolio = () => {
    return (
        <div className="container-principal">
            <Header />
            <Hola />
            <Proyectos />
        </div>
    )
}

export default Portafolio;