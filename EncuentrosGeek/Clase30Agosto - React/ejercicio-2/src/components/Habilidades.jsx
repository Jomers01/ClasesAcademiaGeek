import React from 'react';
import { H2T, P, Cont, Skill, SF } from '../styled/AboutStyled';

const Habilidades = () => {
    return (
        <div>
            <H2T>Habilidades</H2T>
            <SF>
                <div>
                    <P>HTML</P>
                    <Cont>
                        <Skill>90%</Skill>
                    </Cont>
                </div>
                <div>
                    <P>CSS</P>
                    <Cont>
                        <Skill>90%</Skill>
                    </Cont>
                </div> 
                <div>
                    <P>JS</P>
                    <Cont>
                        <Skill>90%</Skill>
                    </Cont>
                </div>
                <div>
                    <P>React</P>
                    <Cont>
                        <Skill>90%</Skill>
                    </Cont>
                </div>
            </SF>
        </div>
        
    )
}

export default Habilidades;
