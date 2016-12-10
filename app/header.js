import React from 'react';
import Links from './links';

class Header extends React.Component {
  render() {
    const heading = (this.props.page === 'home') ?
      (<div className="jumbotron text-center"><h1>{this.props.title}</h1></div>) :
      (<div className="jumbotron"><h2>{this.props.title}</h2></div>);
    return (
      <div>
        <div className="container-fluid headerNav">
          <Links />
        </div>
        {heading}
      </div>
    );
  }
}

export default Header;
