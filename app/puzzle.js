import _ from 'lodash';
import React from 'react';
import Template from './template';

require('./styles.css');

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(this.props.grid);
    console.log(data);
    if (_.isEqual(this.props.grid, data)) {
      alert('you win!');
    } else {
      alert('you lose');
    }
  }

  getQuestions(grid) {
    const updatedGrid = [];
    _.each(grid, (row, rowIndex) => {
      updatedGrid[rowIndex] = [];
      _.each(row, (column, columnIndex) => {
        if (column !== 'BLACKED_OUT') {
          updatedGrid[rowIndex][columnIndex] = '';
          return;
        }
        updatedGrid[rowIndex][columnIndex] = 'BLACKED_OUT';
      });
    });
    return updatedGrid;
  }

  render() {
    const props = {
      across: _.filter(this.props.Clues, { direction: 0 }),
      below: _.filter(this.props.Clues, { direction: 1 }),
      title: 'Solve the Puzzle',
      data: this.getQuestions(this.props.grid),
      onSubmit: this.onSubmit,
      Clues: this.props.Clues,
      buttonLabel: 'Solve!',
    };
    return (
      <div>
        <Template {...props} />
      </div>
    );
  }
}

export default Puzzle;
