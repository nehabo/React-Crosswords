import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, browserHistory } from 'react-router';
import Game from './game';
import Home from './home';
import Puzzle from './puzzle';
import Create from './create';
import style from './styles.css';
const routes = (
  <Route path="/" component={Game}>
    <Route path="home" component={Home} />
    <Route path="play" component={Puzzle} />
    <Route path="create" component={Create} />
  </Route>);

ReactDOM.render(
  <Router history={browserHistory} routes={routes}>
  </Router>,
  document.getElementById('root'),
);
