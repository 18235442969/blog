import React, { Component } from 'react'
import WrapAnimation from '../WrapAnimation';

export default class Haha extends Component {
   constructor(props) {
    super(props);
  }
  componentDidMount() {
    const canvas = this.refs.canvas;
    let ctx = canvas.getContext("2d");
    ctx.font="20px Georgia";
    ctx.fillText("Hello World!",10,50);
    ctx.font="30px Verdana";
    ctx.fillText("你好",10,90);
  }
  render() {
    return (
      <WrapAnimation {...this.props}>
        <div style={{backgroundColor: "#fff", color: "#000"}}>
          <canvas ref="canvas"></canvas>
        </div>
      </WrapAnimation>
    )
  }
}
