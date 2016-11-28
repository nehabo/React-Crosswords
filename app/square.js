import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <td>
        {this.props.value}
      </td>
    );
  }
}

export default Square;
