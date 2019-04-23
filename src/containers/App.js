import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo from '../components/Logo'

import Order from './Order'
import Orders from './Orders'
import NotFoundPage from './NotFoundPage'

export default function App() {
  return (
    <Router basename="/" >
      <Logo />
      <Switch  >
        <Route exact path="/" component={Orders} />
        <Route exact path="/order/:key?" component={Order} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
