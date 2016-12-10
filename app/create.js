import React from 'react';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import Template from './template';


class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startSquare: [],
      endSquare: [],
      activeSquares: [],
      words: [],
      wordClues: [],
    };
    this.count = -1;
    this.erasing = false;
    this.createClue = '';
    this.onCellClick = this.onCellClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.createPuzzle = this.createPuzzle.bind(this);
    this.selectionMode = false;
  }

  onKeyDown(value, event) {
    const word = this.selectionMode ? '' : this.state.words;
    const activeSquares = this.state.activeSquares;
    const wordClues = this.state.wordClues;
    // when enter is pressed to enter the word.
    if (event.keyCode === 13) {
      const wordClue = {
        clue: prompt('Enter the clue: '),
        direction: this.direction,
        startPoint: this.startPoint,
      };
      this.count = -1;
      this.setState({
        wordClues: [...this.state.wordClues, wordClue],
        activeSquares: [],
        words: [],
      });
      return
    }
    if (value === '') {
      if (this.erasing && this.count > 0) {
        word.pop();
        this.count--;
      }
      this.erasing = true;
    } else {
      if (!this.erasing && this.count < activeSquares.length) {
        this.count++;
      }
      this.erasing = false;
    }
    if (word.length < activeSquares.length) {
      word[this.count] = value;
    } else {
      return 'DO_NOT_UPDATE';
    }
    this.setState({
      activeSquares,
      words: word,
      wordClues,
    });
    return (activeSquares[this.count]);
  }

  onCellClick(location) {
    const startSquare = this.selectionMode ? this.state.startSquare : location;
    const endSquare = this.selectionMode ? location : this.state.endSquare;
    const activeSquares = this.state.activeSquares;
    if (this.selectionMode) {
      if (endSquare[0] === startSquare[0]) {
        this.direction = 0;
        for (let x = startSquare[1]; x <= endSquare[1]; x++) {
          activeSquares.push([startSquare[0], x]);
        }
      } else if (endSquare[1] === startSquare[1]) {
        this.direction = 1;
        for (let x = startSquare[0]; x <= endSquare[0]; x++) {
          activeSquares.push([x, startSquare[1]]);
        }
      }
    } else {
      this.startPoint = 10*startSquare[0]+startSquare[1];
    }
    this.selectionMode = !this.selectionMode;
    this.setState({
      startSquare,
      endSquare,
      activeSquares,
    });
  }

  createPuzzle(grid) {
    this.props.save({
      Clues: this.state.wordClues,
      grid,
    });
    console.log(JSON.stringify(grid));
    console.log(JSON.stringify(this.state.wordClues));
    browserHistory.push('play');
  }

  render() {
    const props = {
      across: _.filter(this.state.wordClues, { direction: 0 }),
      below: _.filter(this.state.wordClues, { direction: 1 }),
      title: 'Generate a Crossword Puzzle',
      onCellClick: this.onCellClick,
      onKeyDown: this.onKeyDown,
      activeSquares: this.state.activeSquares,
      onSubmit: this.createPuzzle,
      Clues: this.props.Clues,
      buttonLabel: 'Create Puzzle!',
    };
    return (
      <div>
        <Template {...props} />
      </div>
    );
  }
}

export default Create;
