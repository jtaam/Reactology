import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import Footer from './Footer';
import PageHeading from './PageHeading';
import Project from './Project';
// import Contents from './Contents';
import Pagination from './Pagination';
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
  <Pagination />
  <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
