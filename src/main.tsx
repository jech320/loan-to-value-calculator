import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { CoreProvider } from './core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoreProvider>
      <App />
    </CoreProvider>
  </React.StrictMode>
);
