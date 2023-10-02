import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/*Bootstrap Configuration */

import "../node_modules/react-bootstrap/dist/react-bootstrap.js"; //JS 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>
  
 
);


