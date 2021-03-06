/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'

export default class CounterStateProps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }
  }

  render() {
    return <span className="counter">Count: {this.state.count}</span>
  }

  static getDerivedStateFromProps(props, state) {
    // Any time the count change
    // Reset any parts of state that are tied to that count.
    if (props.count !== state.count) {
      return {
        count: props.count
      }
    }
    return null
  }
}
