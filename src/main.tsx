import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ServicesProvider } from './providers/services';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ServicesProvider>
      <App />
    </ServicesProvider>
  </React.StrictMode>
);
