import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// API - https://api.github.com/users - https://api.github.com/users/vkrantt

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);