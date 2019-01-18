import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class User extends Component {
  render() {
    return (
      <div>
        <Link to="/app">child</Link>
        <br />
        <hr />
        <Link to="/user">user</Link>
        <br />
        <hr />
        <Link to="/app/haha">haha</Link>
      </div>
    )
  }
}
