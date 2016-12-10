import React from 'react';
import _ from 'lodash';

class Clues extends React.Component {
  render() {
    return (
      <div>
        <h3>CLUES</h3>
        <div className="col-md-6">
          <div><h4>ACROSS</h4>
            <ul>
              {_.map(this.props.across, item =>
                <li>{item.startPoint}: {item.clue}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div><h4>BELOW</h4>
            <ul>
              {_.map(this.props.below, item =>
                <li>{item.startPoint}: {item.clue}</li>
            )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Clues;
