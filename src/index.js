import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import StudentsList from './context';
import Root from './root';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <StudentsList>
    <Root></Root>
    </StudentsList>
  </React.StrictMode>
  </BrowserRouter>
);