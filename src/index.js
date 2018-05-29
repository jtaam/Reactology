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
    <Project image="https://res.cloudinary.com/jtam/image/upload/v1527549848/universe-2742113_1920_vuzmhp.jpg" title="IC 1101" />
    <Project image="https://res.cloudinary.com/jtam/image/upload/v1527549851/milky-way-2695569_1920_sijzuz.jpg" title="Andromeda" />
    <Project image="https://res.cloudinary.com/jtam/image/upload/v1527549848/milky-way-923738_1920_sqoxje.jpg" title="Milky Way" />
    <Project image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/The_Orion_Nebula_M42.jpg/1280px-The_Orion_Nebula_M42.jpg" title="Orion" />
  <Pagination />
  <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
