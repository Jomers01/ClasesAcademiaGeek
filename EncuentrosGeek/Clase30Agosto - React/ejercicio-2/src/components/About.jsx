import React from 'react';
import { AboutS, Avatar, Img, Name, H2, Profession, Location } from '../styled/AboutStyled';

const About = () => {
    return(
        <AboutS>
            <div className="About-container">
                <Avatar>
                    <figure>
                        <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png" alt="Mi Avatar" />
                    </figure>
                </Avatar>
                <Name>
                    <H2>Jose Garcia</H2>
                </Name>
                <Profession>
                    <p>Programador FrontEnd</p>
                </Profession>
                <Location>
                    <p>Bogota, Colombia</p>
                </Location>
                <div className="About-social">
                    <p>Redes sociales</p>
                </div>
            </div>
        </AboutS>
    )
}

export default About;