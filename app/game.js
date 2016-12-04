import React from 'react';
import Puzzle from './puzzle';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.answers =
    [['0', '1', 'u', 'f', '', '0', '1', 'u', 'f', ''],
      ['5', '', '', 'e', 'f', '0', '1', 'u', 'f', ''],
      ['d', 't', 'g', '', '', '0', '1', 'u', 'f', ''],
      ['x', 't', 'y', '', '', '0', '1', 'u', 'f', ''],
      ['x', '', '', '', 'k', 'x', 't', 'y', '', ''],
      ['0', '1', 'u', 'f', '', '5', '', '', 'e', 'f'],
      ['5', '', '', 'e', 'f', 'x', 't', 'y', '', ''],
      ['d', 't', 'g', '', '', 'x', 't', 'y', '', ''],
      ['x', 't', 'y', '', '', 'd', 't', 'g', '', ''],
      ['x', 't', 'y', '', '', 'd', 't', 'g', '', '']];
  }

  render() {
    return (
      <Puzzle answers={this.answers} />
    );
  }
}

export default Game;
