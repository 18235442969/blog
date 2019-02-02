import React, { Component } from 'react'
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import 'animate.css';

export default class WrapAnimation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TransitionGroup>
        <CSSTransition
          // 需要加一个key属性，让react认识每个组件，并进行正确的加载。
          // 这里我改了官方demo的代码， 原来是设置成location.key， 这样的话每次点击同一个路由链接的时候都会渲染。
          key={this.props.location.pathname}
          // classNames 就是设置给css动画的标示，记得'classNames'带's'的。
          classNames={{
            appear: 'animated',
            appearActive: 'fadeIn',
            enter: 'animated',
            enterActive: 'fadeIn',
            exit: 'animated',
            exitActive: 'fadeOut'
          }}
          unmountOnExit
          appear={true}
          // classNames="fade"
          // 动画时间设置为800ms，和css中的需要一致。
          timeout={800}
        >
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    )
  }
}
