import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/your_repo_name">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
