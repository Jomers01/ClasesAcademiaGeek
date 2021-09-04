import React from 'react'
import { ContC1, ContC2, ContC3, ContCH2, ContCI, ContCP } from '../styles/Styled';

const Contacto = () => {
    return (
        <ContC1>
            <ContC2>
                <ContCH2>Contacto</ContCH2>
                <ContCP>Si está interesado en trabajar conmigo en su <br /> 
                proximo proyecto, no dude en ponerse en <br /> contacto.</ContCP>
                <ContC3>
                    <ContCI type="text" placeholder="Nombre completo" /> <br />
                    <ContCI type="email" placeholder="Correo Electronico" /> <br />
                    <textarea name="Mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
                </ContC3>
            </ContC2>
        </ContC1>
    )
}

export default Contacto;