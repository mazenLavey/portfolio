import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import App from './App';
import { ThemProvider } from './context/ThemContext';
import { LanguageProvider } from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemProvider>
  </React.StrictMode>
);

