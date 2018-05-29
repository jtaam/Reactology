import React, { Component } from 'react'

class Project extends Component {
  render() {
    return (  
      <React.Fragment>  
        <div className="container">  
          <div className="row">
            <div className="col-md-7">
              <a href="#">
                <img className="img-fluid rounded mb-3 mb-md-0" src="https://res.cloudinary.com/jtam/image/upload/v1527549848/universe-2742113_1920_vuzmhp.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-5">
              <h3>Project One</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
              <a className="btn btn-primary" href="#">View Project</a>
            </div>
          </div>
        </div>
        <hr />     
      </React.Fragment>
    );
  }
}
export default Project;