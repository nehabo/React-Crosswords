import React from 'react';
import Header from './header';
import Grid from './grid';
import Clues from './clues';

class Template extends React.Component {
  render() {
    return (
      <div>
        <Header title={this.props.title} />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Grid
                data={this.props.data} onSubmit={this.props.onSubmit}
                Clues={this.props.Clues} buttonLabel={this.props.buttonLabel}
                onKeyDown={this.props.onKeyDown} onCellClick={this.props.onCellClick}
                activeSquares={this.props.activeSquares}
              />
            </div>
            <div className="col-md-6">
              <Clues across={this.props.across} below={this.props.below} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;
