import React from 'react';
import _ from 'lodash';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.value !== null) {
      this.props.onClick(this.props.location);
    }
  }

  includes(collection, value) {
    return _.filter(collection, item => _.isEqual(item, value)).length > 0;
  }

  render() {
    const activeSquare = _.isEqual(this.props.activeSquare, this.props.location)
    let value = this.props.value;
    let className = '';
    if (value === 'BLACKED_OUT') {
      value = '';
      className = 'blackedOut';
    } else if (activeSquare && (value === 'BLACKED_OUT')) {
      value = '';
      className = 'blackedOut';
    } else if (this.includes(this.props.activeSquares, this.props.location)) {
      className = 'focus';
    } else if (activeSquare) {
      className = 'active';
    }
    return (
      <td className={className} value={value} onClick={this.onClick}>
        <div className="cell">
          <div className="numbers">2</div>
          <div className="value">{value}</div>
        </div>
      </td>
    );
  }
}

export default Square;
