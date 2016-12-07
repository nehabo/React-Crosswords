import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, browserHistory } from 'react-router';
import Game from './game';
import Home from './home';
import Play from './play';
import Create from './create';
import style from './styles.css';
const routes = (<Route path="/">
  <Route path="home" component={Home} />
</Route>);

ReactDOM.render(
  <Router history={browserHistory} routes={routes}>
  </Router>,
  document.getElementById('root'),
);
