import React from 'react';
import ReactDOM from 'react-dom';
import Puzzle from './puzzle';
import Clues from './clues';


class Game extends React.Component {
  render() {
    return (
      <div>
      <Puzzle></Puzzle>
      </div>
      <div>
      <Clues></Clues>
      </div>
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
