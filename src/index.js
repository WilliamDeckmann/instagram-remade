import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './templates/App';
import Suggestions from './templates/Suggestions';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Suggestions />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);