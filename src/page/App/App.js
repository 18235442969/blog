import React, { Component } from 'react';
import { Switch, Redirect, Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group';
// import 'animate.css';
import './App.scss';
import { getUserInfo, getUser } from '../../api/user';
import RouterMap from '../../router/routerMap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: '1',
        title: 'asdasd'
      },{
        id: '2',
        title: 'aasdasdasdsdasd'
      }],
    }
  }

  getUser = async () => {
    // let res = await getUserInfo({
    //   name: 'hzy'
    // })
    // let resUser = await getUser({
    //   name: 'hzy'
    // })
    // this.setState({
    //   list: res.data.data.list,
    // })
  }
  componentDidMount() {
    this.getUser();
  }
  render() {
    let routerList = RouterMap(this.props.routes);
    const list = this.state.list.map(user => {
      return <div key={user.id}>{user.title}</div>
    })
    return (
      <div className="App">
        <Link to="/app/child" className="link">child</Link>
        <br />
        <hr />
        <Link to="/user">user</Link>
        <br />
        <hr />
        <Link to="/app/haha">haha</Link>
        {/* <CSSTransitionGroup 
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { list }
        </CSSTransitionGroup> */}
        
        {/* <Switch>
          { routerList }
          <Redirect to="/app/haha" />
        </Switch> */}
      </div>
    );
  }
}

export default App;
