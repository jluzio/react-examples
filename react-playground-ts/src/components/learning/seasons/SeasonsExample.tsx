/* eslint-disable react/prefer-stateless-function */
import React from 'react'

type Props = {}
type State = {
  position?: Position
  positionError?: PositionError
}

class SeasonsExample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
    window.navigator.geolocation.getCurrentPosition(
      this.handlePositionSuccess,
      this.handlePositionError
    )
  }

  handlePositionSuccess: PositionCallback = position => {
    console.log('handlePositionSuccess: ', position)
    this.setState({
      position
    })
  }

  handlePositionError: PositionErrorCallback = positionError => {
    console.log('handlePositionSuccess: ', positionError)
    this.setState({
      positionError
    })
  }

  render() {
    const { position, positionError } = this.state
    return (
      <div className="examples">
        <h2>SeasonsExample</h2>
        <p>Position: {position ? JSON.stringify(position) : 'N/A'}</p>
        <p>
          PositionError: {positionError ? JSON.stringify(positionError) : 'N/A'}
        </p>
      </div>
    )
  }
}

export default SeasonsExample
