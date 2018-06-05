import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Route exact={true} path="/" component={Home} />
       <Route path="/services" component={Services} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       <Footer />
      </div>
    );
  }
}

export default App;
