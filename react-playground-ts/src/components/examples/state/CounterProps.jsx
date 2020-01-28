/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

export default class CounterProps extends Component {
  render() {
    return <span className="counter">Count: {this.props.count}</span>
  }
}
