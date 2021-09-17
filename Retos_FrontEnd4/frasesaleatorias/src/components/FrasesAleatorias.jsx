import React, { useState, useEffect } from "react";
import { Button, DivContainer, H3, P, Span } from "../styles/FrasesStyles";
import { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: yellowgreen;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`

const FrasesAleatorias = () => {
  const [frases, setFrases] = useState([
    {
      quote: "",
      author: "",
    },
  ]);
  const [rand, setRand] = useState("0");
  const [state, setstate] = useState(1);
  const color = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ]
  const url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setFrases(data.quotes));
    setRand(Math.floor(Math.random() * frases.length));
  }, [state]);

  const cambiarFrase = () => {
    setstate(state + 1);
  };

  return (
    <DivContainer>
      <div>
        <Span>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </Span>
        <H3 style={{color: `"${color[3]}"`}}>{frases[rand].quote}</H3>
        <P>{frases[rand].author}</P>
        <Button onClick={cambiarFrase}>New quote</Button>
      </div>
    </DivContainer>
  );
};

export default FrasesAleatorias;
