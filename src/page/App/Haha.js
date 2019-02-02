import React, { Component } from 'react'
import WrapAnimation from '../WrapAnimation';

export default class Haha extends Component {
   constructor(props) {
    super(props);
  }
  componentWillMount() {
  }
  render() {
    return (
      <WrapAnimation {...this.props}>
        <div style={{backgroundColor: "#fff", color: "#000"}}>
          <div>haha</div>
        </div>
      </WrapAnimation>
    )
  }
}
