import React, { Component } from 'react'
import Carousel from './Carousel/Carousel';
import Marketing from './Marketing/Marketing';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <Marketing />
      </React.Fragment>
    )
  }
}
