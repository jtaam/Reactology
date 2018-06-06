import React, { Component } from 'react';
import './About.css';
import axios from 'axios';

export default class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: []
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        const profiles = res.data.slice(0,6);
        this.setState({profiles})
      })
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-4">About Us
        <small> It's Nice to Meet You!</small>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>

        <div className="row">

          <div className="col-lg-12">
            <h2 className="my-4">Our Team</h2>
          </div>

          {this.state.profiles.map(profile =>           
            <div className="col-lg-4 col-sm-6 text-center mb-4" key={profile.id}>
              <img className="rounded-circle img-fluid d-block mx-auto" src={profile.url} alt="" style={{height:200, width:200}} />
              <h3>John Smith
              <small> Job Title</small>
              </h3>
              <p>{profile.title}</p>
            </div>          
          )}

        </div>
      </div>
    )
  }
}
