import React, { Component } from 'react';
import axios from 'axios';

export default class Services extends Component {
  constructor(props){
    super(props);

    this.state = {
      services : []
    };
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then( res => {
        const services = res.data.slice(0,9);
        this.setState({ services });
      })
  }


  render() {
    return (
      <React.Fragment>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Our Services</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">

            {this.state.services.map(service =>            
              <div className="col-md-4" key={service.id}>
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" alt="Thumbnail [100%x225]" style={{ height: 225, width: '100%' , display: 'block' }} src={service.url} data-holder-rendered="true" />
                  <div className="card-body">
                    <p className="card-text">{service.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-muted">Img No: {service.id}</small>
                    </div>
                  </div>
                </div>
              </div>                
              )}

            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
