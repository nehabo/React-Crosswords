import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>React Crosswords!</h1>
        <div>
          <button><Link to="play">Play Game</Link></button>
          <button><Link to="create"> Create Game</Link></button>
        </div>
      </div>
    );
  }
}

export default Home;
