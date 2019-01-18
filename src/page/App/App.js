import React, { Component } from 'react';
import { Switch, Redirect, Link } from 'react-router-dom';
import './App.scss';
import { getUserInfo, getUser } from '../../api/user';
import RouterMap from '../../router/routerMap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  getUser = async () => {
    let res = await getUserInfo({
      name: 'hzy'
    })
    let resUser = await getUser({
      name: 'hzy'
    })
    this.setState({
      list: res.data.data.list
    })
    console.log(res)
    console.log(resUser)
  }
  componentDidMount() {
    this.getUser();
  }
  render() {
    console.log(this.props.routes);
    let routerList = RouterMap(this.props.routes);
    return (
      <div className="App">
        <Link to="/app">child</Link>
        <br />
        <hr />
        <Link to="/user">user</Link>
        <br />
        <hr />
        <Link to="/app/haha">haha</Link>
        {
          this.state.list.map(user => {
            return <div key={user.id}>{user.title}</div>
          })
        }
        <Switch>
          { routerList }
          <Redirect to="/app/haha" />
        </Switch>
      </div>
    );
  }
}

export default App;
