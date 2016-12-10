import React from 'react';
import { Link } from 'react-router';
import Header from './header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header page="home" title="React Crosswords!" />
        <div className="container-fluid text-center">
          <button className="btn btn-info btn-lg"><Link to="play">SOLVE</Link></button>
          <button className="btn btn-info btn-lg"><Link to="create">CREATE</Link></button>
        </div>
      </div>
    );
  }
}

export default Home;
