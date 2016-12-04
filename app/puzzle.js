import _ from 'lodash';
import React from 'react';
import Row from './row';

require('./styles.css');

class Puzzle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid:
    [['0', '1', 'u', 'f', '', '0', '1', 'u', 'f', ''],
      ['5', '', '', 'e', 'f', '0', '1', 'u', 'f', ''],
      ['d', 't', 'g', '', '', '0', '1', 'u', 'f', ''],
      ['x', 't', 'y', '', '', '0', '1', 'u', 'f', ''],
      ['x', '', '', '', 'k', 'x', 't', 'y', '', ''],
      ['0', '1', 'u', 'f', '', '5', '', '', 'e', 'f'],
      ['5', '', '', 'e', 'f', 'x', 't', 'y', '', ''],
      ['d', 't', 'g', '', '', 'x', 't', 'y', '', ''],
      ['x', 't', 'y', '', '', 'd', 't', 'g', '', ''],
      ['x', 't', 'y', '', '', 'd', 't', 'g', '', '']],
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
    if (event.which <= 90 && event.which >= 65) {
      grid[this.state.activeSquare[0]][this.state.activeSquare[1]] = event.key;
      this.setState({ grid });
    }
  }

  onSubmit() {
    if (_.isEqual(this.state.grid, this.props.answers)) {
      alert('you won!');
    } else {
      alert('you lost');
    }
  }

  handleClick(location) {
    this.setState({ activeSquare: location });
  }

  renderRow(i) {
    return (<Row
      i={i} activeSquare={this.state.activeSquare} grid={this.state.grid}
      onClick={this.handleClick}
    />);
  }

  render() {
    return (
      <div>
        <div className="container">
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
        </div>
        <div className="container">
          <button onClick={this.onSubmit}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default Puzzle;
