import React from 'react';
import ReactDOM from 'react-dom';
import AgendaApp from './container/AgendaApp';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

ReactDOM.render(
  <React.StrictMode>
    <AgendaApp />
  </React.StrictMode>,
  document.getElementById('root')
);
