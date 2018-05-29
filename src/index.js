import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <NavBar />
  <App />
  <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
