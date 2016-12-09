import React from 'react';
import _ from 'lodash';
import Row from './row';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.props.data,
      activeSquare: [],
    };
    this.renderRow = this.renderRow.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    const grid = this.state.grid;
    let value = grid[this.state.activeSquare[0]][this.state.activeSquare[1]];
    if (event.which <= 90 && event.which >= 65) {
      value = event.key;
    } else if (event.key === 'Backspace') {
      value = '';
    }
    const activeSquare = this.props.onKeyDown(value, event) || this.state.activeSquare;
    if (activeSquare === 'DO_NOT_UPDATE') { return; }
    grid[activeSquare[0]][activeSquare[1]] = value;
    this.setState({ grid });
  }

  onSubmit() {
    const updatedGrid = this.getBlackedOuts(this.state.grid);
    this.props.onSubmit(updatedGrid);
  }

  getBlackedOuts(grid) {
    const updatedGrid = [];
    _.each(grid, (row, rowIndex) => {
      updatedGrid[rowIndex] = [];
      _.each(row, (column, columnIndex) => {
        if (!column) {
          updatedGrid[rowIndex][columnIndex] = 'BLACKED_OUT';
          return;
        }
        updatedGrid[rowIndex][columnIndex] = column;
      });
    });
    return updatedGrid;
  }

  handleClick(location) {
    this.props.onCellClick(location);
    this.setState({
      activeSquare: location,
    });
  }

  renderRow(i) {
    return (
      <Row
        i={i} activeSquare={this.state.activeSquare} activeSquares={this.props.activeSquares}
        grid={this.state.grid} onClick={this.handleClick}
      />);
  }
  render() {
    return (
      <div>
        <table className="Puzzle table table-bordered">
          <tbody>
            {this.renderRow(0)}
            {this.renderRow(1)}
            {this.renderRow(2)}
            {this.renderRow(3)}
            {this.renderRow(4)}
            {this.renderRow(5)}
            {this.renderRow(6)}
            {this.renderRow(7)}
            {this.renderRow(8)}
            {this.renderRow(9)}
          </tbody>
        </table>
        <div className="container">
          <div className="row">
            <div className="text-center">
              <button className="btn btn-lg btn-block" onClick={this.onSubmit}>
                CREATE PUZZLE!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Grid.defaultProps = {
  data: [['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','',''], ['','','','','','','','','','']],
  onKeyDown: () => {},
  onCellClick: () => {},
};
export default Grid;
