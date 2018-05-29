import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import Footer from './Footer';
import PageHeading from './PageHeading';
import Project from './Project';
// import Contents from './Contents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <NavBar />
  <App />
  <PageHeading />
  {/* <Contents /> */}
  <Project />
  <Project />
  <Project />
  <Project />
  <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
