import React from 'react';
import Puzzle from './puzzle';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [["c","o","o","k","i","e","s","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","a","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","m","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","t","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","o","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","m","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","r","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["t","e","a","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","e","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","a","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","s","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","l","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"]],
    };
    this.save = this.save.bind(this);
  }
  save(object) {
    this.setState(object);
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, (Child) => {
          return <Child.type {...this.state} save={this.save} />
        })}
      </div>
    );
  }
}

export default Game;
