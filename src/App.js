import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Home />
       <Footer />
      </div>
    );
  }
}

export default App;
