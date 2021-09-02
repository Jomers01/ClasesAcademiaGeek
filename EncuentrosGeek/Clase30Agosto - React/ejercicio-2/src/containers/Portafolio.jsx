import React from 'react'
import About from '../components/About'
import Educacion from '../components/Educacion'
import { FlexBox } from '../styled/AboutStyled';
import Experiencia from '../components/Experiencia';
import Certificado from '../components/Certificado';
import Habilidades from '../components/Habilidades';

const Portafolio = () => {
    return (
        <FlexBox>
            <div>
                <About />
            </div>
            <div>
                <Educacion />
                <Experiencia />
                <Certificado />
                <Habilidades />
            </div>  
        </FlexBox>
    )
}

export default Portafolio

