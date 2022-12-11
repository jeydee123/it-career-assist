import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

//rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

