import React from 'react';
import Square from './square';

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.props.grid = {
     rows: []
   }
  }
  createPuzzle() {
    puzzle.rows.forEach(function(i, index) {
      var row = {};
      row.squares = [];
      row.squares.forEach(function(j, index) {
        var square = {};
      });
      this.grid.rows.push(row);
    });
  }
  render() {
    return(
      <table>
        <tr>
        <td
        </tr>
      </table>
    );
  }
}

export default Puzzle;
