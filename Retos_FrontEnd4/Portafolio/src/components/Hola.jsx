import React from "react";
import { Bnv, H1, P, Arrow } from "../styles/Styled";

const Hola = () => {
  return (
    <Bnv>
      <div>
        <H1>
          ¡Hola a todos! <br />
          Soy Antonio Pereira
        </H1>
        <P>
          Developer que le encanta implementar diseños que <br /> inspiran y atraen a
          las personas.
        </P>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630632246/Portafolio_Geek/img_hbvpat.png"
          alt=""
        />
      </div>
      <Arrow src="https://res.cloudinary.com/dpkaiokho/image/upload/v1630633110/Portafolio_Geek/flecha-hacia-abajo_y7xma0.png" alt="" />
    </Bnv>
  );
};

export default Hola;
