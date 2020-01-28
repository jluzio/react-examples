/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { Button } from 'antd'
import CouterStateProps from './CounterStateProps'
import CouterStateBasic from './CounterStateBasic'
import CounterProps from './CounterProps'

export default class CounterExamples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.counterStateBasic = React.createRef()
  }

  render() {
    return (
      <div className="example state">
        <h3>State propagation examples</h3>
        <ul>
          <li>
            CountProps: <CounterProps count={this.state.count} />
          </li>
          <li>
            CouterStateProps: <CouterStateProps count={this.state.count} />
          </li>
          <li>
            CouterStateBasic:{' '}
            <CouterStateBasic
              count={this.state.count}
              ref={this.counterStateBasic}
            />
          </li>
        </ul>
        <div className="btn-group">
          <Button
            type="primary"
            onClick={() => this.handleCountSet(this.state.count + 1)}
          >
            Inc Count
          </Button>
          <Button type="ghost" onClick={() => this.handleCountSet(0)}>
            Reset Count
          </Button>
        </div>
      </div>
    )
  }

  handleCountSet(value) {
    this.setState({ count: value })
    this.counterStateBasic.current.setCount(value)
  }
}
