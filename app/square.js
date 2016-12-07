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

  render() {
    const activeSquare = _.isEqual(this.props.activeSquare, this.props.location)
    let className;
    if (this.props.value === null) {
      className = 'blackedOut';
    } else if (activeSquare && (this.props.value === null)) {
      className = 'blackedOut';
    } else if (activeSquare) {
      className = 'active';
    } else {
      className = '';
    }
    return (
      <td className={className} value={this.props.value} onClick={this.onClick}>
        <div className="cell">
          <div className="numbers">2</div>
          <div className="value">{this.props.value}</div>
        </div>
      </td>
    );
  }
}

export default Square;
