import React, { Component } from 'react';
import './App.scss';
import { getUserInfo } from '../../api/user'

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
    this.setState({
      list: res.data.data.list
    })
    console.log(res)
  }
  componentDidMount() {
    this.getUser();
  }
  render() {
    return (
      <div className="App">
        {
          this.state.list.map(user => {
            return <div key={user.id}>{user.title}</div>
          })
        }
      </div>
    );
  }
}

export default App;
