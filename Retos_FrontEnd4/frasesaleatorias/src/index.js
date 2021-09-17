import React from 'react';
import ReactDOM from 'react-dom';
import FrasesAleatorias from './components/FrasesAleatorias';
import { GlobalStyle } from './components/FrasesAleatorias';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <FrasesAleatorias />
  </React.StrictMode>,
  document.getElementById('root')
);
