import React, { Component } from 'react';
import WrapAnimation from '../WrapAnimation';

export default class Child extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <WrapAnimation {...this.props}>
        <div style={{backgroundColor: "#000", color: "#fff"}}>
          child
        </div>
      </WrapAnimation>
    )
  }
}
