import React from 'react';
import ReactDOM from 'react-dom';
import "./font/webfont.css";
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppProvider} from './context';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

