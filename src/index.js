import React from 'react';
import ReactDOM from 'react-dom/client';
import Hooks from './hooks';
import Navbar from './navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Hooks></Hooks>
  </React.StrictMode>
);