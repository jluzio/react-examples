import React from 'react'

export interface InjectedCounterProps {
  value: number
  onIncrement(): void
  onDecrement(): void
}

interface MakeCounterState {
  value: number
}

const makeCounter = <P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
) =>
  class MakeCounter extends React.Component<
    Omit<P, keyof InjectedCounterProps>,
    MakeCounterState
  > {
    // Adding HOC signature composition displayName
    static displayName = `MakeCounter(${Component.displayName ||
      Component.name ||
      'Component'})`

    state: MakeCounterState = {
      value: 0
    }

    increment = () => {
      this.setState(prevState => ({
        value: prevState.value + 1
      }))
    }

    decrement = () => {
      this.setState(prevState => ({
        value: prevState.value - 1
      }))
    }

    render() {
      const { value } = this.state
      return (
        <Component
          {...(this.props as P)}
          value={value}
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      )
    }
  }

export default makeCounter
