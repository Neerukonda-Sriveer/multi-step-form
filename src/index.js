import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const documentRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(documentRoot);
reactRoot.render(<App />);