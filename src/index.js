import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './scss/main.scss';

const documentRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(documentRoot);
reactRoot.render(<App />);