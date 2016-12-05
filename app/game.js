import React from 'react';
import Puzzle from './puzzle';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Finished crossword answers. Does not mutate.
    this.answers =
    [['0', '1', 'u', 'f', '', '0', '1', 'u', 'f', ''],
      ['5', null, '', '', 'f', '0', '1', 'u', 'f', ''],
      ['d', null, '', null, '', '0', '1', '', 'f', ''],
      ['x', null, '', '', '', '', '1', 'u', 'f', ''],
      ['x', '', '', '', 'k', 'x', 't', 'y', '', ''],
      ['0', '', '', 'f', '', '5', '', '', 'e', 'f'],
      ['', '', '', 'e', 'f', 'x', 't', 'y', '', ''],
      ['', 't', 'g', '', null, 'x', 't', 'y', null, ''],
      ['', 't', 'y', '', null, 'd', 't', 'g', '', ''],
      ['', 't', 'y', '', null, 'd', 't', 'g', null, '']];

    // Original unsolved puzzle to be rendered.
    this.getPuzzle =
    [['', '', '', 'f', '', '0', '1', 'u', 'f', ''],
      ['', null, '', '', 'f', '0', '1', 'u', 'f', ''],
      ['', null, '', null, '', '0', '1', '', 'f', ''],
      ['', null, '', '', '', '', '', 'u', 'f', ''],
      ['', '', '', '', 'k', 'x', 't', 'y', '', ''],
      ['', '', '', 'f', '', '5', '', '', 'e', 'f'],
      ['', '', '', 'e', 'f', 'x', 't', 'y', '', ''],
      ['', 't', 'g', '', null, '', 't', 'y', null, ''],
      ['', 't', 'y', '', null, 'd', 't', 'g', '', ''],
      ['', 't', 'y', '', null, 'd', 't', 'g', null, '']];
  }


  render() {
    return (
      <Puzzle answers={this.answers} getPuzzle={this.getPuzzle}/>
    );
  }
}

export default Game;
