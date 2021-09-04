import React from 'react';
import { ContP, H2P, PP, ImgP, ImgP2, CountP2, ContUp, H3P, PPP, BtnUp, BtnUp2, BtnE } from "../styles/Styled";

const Proyectos = () => {
    return (
        <div>
            <ContP>
                <H2P>Parece magia, funciona <br /> con código.</H2P>
                <PP>A lo largo de mi carrera como Frontend, he <br /> tenido el privilegio de trabajar en proyectos <br /> retadores e increíbles.</PP>
            </ContP>
            <div>
                <ContUp>
                    <H3P>Niko</H3P>
                    <PPP>
                        Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo. 
                    </PPP>
                    <BtnUp>Ver proyecto completo</BtnUp> <BtnUp2>Ver código</BtnUp2>
                </ContUp>
                <ImgP src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630635367/Portafolio_Geek/bg_qks1vx.png" alt="" />
            </div>
            <CountP2>
                <div>
                <ContUp>
                    <H3P>Príncipe fresco</H3P>
                    <PPP>
                    La serie está protagonizada por Will Smith como una versión ficticia de sí...
                    </PPP>
                    <BtnUp>Ver proyecto completo</BtnUp> <BtnUp2>Ver código</BtnUp2>
                </ContUp>
                    <ImgP2 src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630635600/Portafolio_Geek/bg_1_foxwna.png" alt="" />
                </div>
                <div>
                <ContUp>
                    <H3P>Amazonas</H3P>
                    <PPP>
                    Amazonas es la empresa en internet de venta al por menor más grande del...
                    </PPP>
                    <BtnUp>Ver proyecto completo</BtnUp> <BtnUp2>Ver código</BtnUp2>
                </ContUp>
                    <ImgP2 src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630635601/Portafolio_Geek/bg_vziird.png" alt="" />
                </div>
            </CountP2>
            <BtnE>Ver Más proyectos ➤ </BtnE>
        </div>
    )
}

export default Proyectos;