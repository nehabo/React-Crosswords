import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [["c","o","o","k","i","e","s","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","a","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","m","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","t","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","o","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","m","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","r","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["t","e","a","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","e","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","a","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","s","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","l","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"],["BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT","BLACKED_OUT"]],
      Clues: [{"clue":"this is a clue","direction":0,"startPoint":0},{"clue":"here is one more","direction":1,"startPoint":9},{"clue":"horses","direction":0,"startPoint":35}],
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
