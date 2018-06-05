import React, { Component } from 'react';
import Promo from './Promo/Promo';
import Features from './Features/Features';

export default class Marketing extends Component {
  render() {
    return (
      <div className="container marketing">
        <Promo />
        <Features />
      </div>
    )
  }
}
