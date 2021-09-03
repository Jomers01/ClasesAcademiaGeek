import React from 'react';
import { Nav, A, Li, Btn } from '../styles/Styled';

const Header = () => {
    return (
            <Nav className="nav-bar">
                <div>
                    <Li><A href="/">LOGO</A></Li>
                    <Li><A href="/">Hola</A></Li>
                    <Li><A href="/">Proyectos</A></Li>
                    <Li><A href="/">Testimonios</A></Li>
                    <Li><A href="/">Contacto</A></Li>
                </div>
                <div>
                    <Btn>Descargar currículum</Btn>
                </div>
            </Nav>
    )
}

export default Header;