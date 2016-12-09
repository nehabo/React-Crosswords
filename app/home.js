import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid headerNav">
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Create</a></li>
              <li><a href="#">Play</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </nav>
        </div>
        <div className="jumbotron text-center">
          <h1>React Crosswords!</h1>
        </div>
        <div className="container-fluid text-center">
          <button className="btn btn-info btn-lg"><Link to="play">SOLVE</Link></button>
          <button className="btn btn-info btn-lg"><Link to="create">CREATE</Link></button>
        </div>
      </div>
    );
  }
}

export default Home;
