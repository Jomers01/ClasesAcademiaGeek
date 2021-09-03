import React from 'react';
import { ContP, H2P, PP, ImgP, ImgP2, CountP2, ContUp, H3P, PPP, BtnUp, BtnUp2 } from "../styles/Styled";

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
                    <ImgP2 src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630635600/Portafolio_Geek/bg_1_foxwna.png" alt="" />
                </div>
                <div>
                    <ImgP2 src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630635601/Portafolio_Geek/bg_vziird.png" alt="" />
                </div>
            </CountP2>
        </div>
    )
}

export default Proyectos;