/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from 'antd'

interface Props {}
interface State {
  counter: number
}

class MultipleUpdatesExample extends React.Component<Props, State> {
  state: State = { counter: 0 }

  handleInc3xDefault = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleInc3x = () => {
    this.setState((state, props) => {
      return { counter: state.counter + 1 }
    })
    this.setState((state, props) => {
      return { counter: state.counter + 1 }
    })
    this.setState((state, props) => {
      return { counter: state.counter + 1 }
    })
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <Button onClick={this.handleInc3xDefault}>Inc3x default</Button>
        <Button onClick={this.handleInc3x}>Inc3x</Button>
      </div>
    )
  }
}

export default MultipleUpdatesExample
