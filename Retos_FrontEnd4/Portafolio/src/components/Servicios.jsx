import React from 'react'
import { BtnS, ContS, ContS1 } from '../styles/Styled';

const Servicios = () => {
    return (
        <ContS1>
        <h2>Servicios</h2>
        <ContS>
            <div>
                <h3>Diseño</h3>
                <p>Experiencia de usuario</p>
                <p>Interfaz de usuario</p>
                <p>Aplicaciones Web</p>
                <p>Prueba de concepto</p>
                <BtnS>Ver servicios de diseño</BtnS>
            </div>
            <div>
                <h3>Desarrollo</h3>
                <p>Aplicaciones móviles</p>
                <p>Sitios Web</p>
                <p>Aplicaciones web progresivas</p>
                <BtnS>Ver servicios de desarrollo</BtnS>
            </div>
            <div>
                <h3>Marca</h3>
                <p>Identidad de la marca</p>
                <p>Estrategia de marca</p>
                <BtnS>Ver servicios de marca</BtnS>
            </div>
        </ContS>
        </ContS1>
    )
}

export default Servicios;