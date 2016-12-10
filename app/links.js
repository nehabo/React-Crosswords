import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class Links extends React.Component {
  render() {
    const links = [
      { name: 'home', label: 'Home' },
      { name: 'play', label: 'Play' },
      { name: 'create', label: 'Create' }];
    return (
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          {_.map(links, item => <li><Link to={item.name}>{item.label}</Link></li>)}
        </ul>
      </nav>
    );
  }
}

export default Links;
