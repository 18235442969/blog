import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterLoader from './routerLoader';

export default class router extends Component {
  render() {
    return (
      <Router>
        <RouterLoader></RouterLoader>
      </Router>
        
    )
  }
}
