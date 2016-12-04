import React from 'react';
import Square from './square';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderSquare = this.renderSquare.bind(this);
  }
  renderSquare(i, j) {
    return (<Square
      location={[i, j]} activeSquare={this.props.activeSquare}
      value={this.props.grid[i][j]} onClick={this.props.onClick}
    />);
  }

  render() {
    return (
        <tr className="no-padding">
          {this.renderSquare(this.props.i, 0)}
          {this.renderSquare(this.props.i, 1)}
          {this.renderSquare(this.props.i, 2)}
          {this.renderSquare(this.props.i, 3)}
          {this.renderSquare(this.props.i, 4)}
          {this.renderSquare(this.props.i, 5)}
          {this.renderSquare(this.props.i, 6)}
          {this.renderSquare(this.props.i, 7)}
          {this.renderSquare(this.props.i, 8)}
          {this.renderSquare(this.props.i, 9)}
        </tr>
    );
  }
}

export default Row;
