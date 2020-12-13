import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
// main react file 
ReactDOM.render(<BrowserRouter>
    <App /></BrowserRouter>,
  document.getElementById('root')
);

