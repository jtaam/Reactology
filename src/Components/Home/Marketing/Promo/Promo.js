import React, { Component } from 'react'

export default class Promo extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Three columns of text below the carousel */}
        <div className="row" >
          <div className="col-lg-4">
            <img className="rounded-circle" src="http://placehold.it/600/1ee8a4" alt="Generic placeholder image" style={{ width: 140, height: 140 }} />
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          {/* .col-lg-4 */}
          <div className="col-lg-4">
            <img className="rounded-circle" src="http://placehold.it/600/fdf73e" alt="Generic placeholder image" style={{ width: 140, height: 140 }} />
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          {/* .col-lg-4 */}
          <div className="col-lg-4">
            <img className="rounded-circle" src="http://placehold.it/600/f66b97" alt="Generic placeholder image" style={{ width: 140, height: 140 }} />
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          {/* .col-lg-4 */}

        </div >
        {/* .row  */}
      </React.Fragment>
    )
  }
}
