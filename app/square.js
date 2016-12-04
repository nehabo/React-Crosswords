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
    const className = _.isEqual(this.props.activeSquare, this.props.location) ? 'active' : '';
    const blackedOut = (this.props.answers === '') ? 'blackedOut' : '';
    return (
      <td className={className + blackedOut} value={this.props.value} onClick={this.onClick}>
        {this.props.value}
      </td>
    );
  }
}

export default Square;
