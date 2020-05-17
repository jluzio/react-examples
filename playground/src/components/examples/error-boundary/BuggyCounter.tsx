/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Button } from 'antd'

interface Props {}
interface State {
  counter: number
}

class BuggyCounter extends React.Component<Props, State, State> {
  constructor(props: Props) {
    super(props)
    this.state = { counter: 0 }
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  render() {
    if (this.state.counter === 2) {
      // Simulate a JS error
      throw new Error('I crashed!')
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <Button onClick={this.handleClick}>Inc</Button>
      </div>
    )
  }
}

export default BuggyCounter
