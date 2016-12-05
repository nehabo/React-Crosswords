import React from 'react';
import _ from 'lodash';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.location);
  }

  render() {
    const compareSquare = _.isEqual(this.props.activeSquare, this.props.location)
    let className;
    if (this.props.value === null) {
      className = 'blackedOut';
    } else if (compareSquare && (this.props.value === null)) {
      className = 'blackedOut';
    } else if (compareSquare) {
      className = 'active';
    } else {
      className = '';
    }
    return (
      <td className={className} value={this.props.value} onClick={this.onClick}>
        {this.props.value}
      </td>
    );
  }
}

export default Square;
