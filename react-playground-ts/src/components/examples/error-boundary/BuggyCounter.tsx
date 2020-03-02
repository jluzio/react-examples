/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react'

interface Props {}
interface State {
  counter: number
}

class BuggyCounter extends React.Component<Props, State, State> {
  constructor(props: Props) {
    super(props)
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  render() {
    if (this.state.counter === 3) {
      // Simulate a JS error
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
  }
}

export default BuggyCounter
