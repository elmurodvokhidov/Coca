import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextData from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextData>
      <App />
    </ContextData>
  </React.StrictMode>
);