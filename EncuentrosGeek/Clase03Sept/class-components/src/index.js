import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
