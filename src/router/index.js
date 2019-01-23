import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import RouterMap from './routerMap'
import routers from './router';

export default class router extends Component {
  render() {
    return (
      <Router>
        <Switch>
          { RouterMap(routers) }
          <Redirect to="/app" />
        </Switch>
      </Router>
    )
  }
}
