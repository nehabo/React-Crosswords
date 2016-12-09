import _ from 'lodash';
import React from 'react';
import { browserHistory } from 'react-router';
import Grid from './grid';

require('./styles.css');

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(data) {
    console.log(this.props.grid);
    console.log(data);
    if (_.isEqual(this.props.grid, data)) {
      alert('you win!');
    } else {
      alert('you lose');
    }
  }

  render() {
    const across = _.filter(this.props.wordClues, { direction: 0 });
    const below = _.filter(this.props.wordClues, { direction: 1 });
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
        <div className="jumbotron">
          <h2>Generate A Crossword Puzzle</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Grid
                data={this.getQuestions(this.props.grid)}
                onSubmit={this.onSubmit}
              />
            </div>
            <div className="col-md-6">
              <h3>CLUES</h3>
              <div className="col-md-3">
                <div><h4>ACROSS</h4>
                  <ul>
                    {_.map(across, item =>
                      <li>{item.startPoint}: {item.clue}</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div><h4>BELOW</h4>
                  <ul>
                    {_.map(below, item =>
                      <li>{item.startPoint}: {item.clue}</li>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Puzzle;
