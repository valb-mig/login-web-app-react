import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './vitals/reportWebVitals';

import Login from "./pages/login/components/Login"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

reportWebVitals();
