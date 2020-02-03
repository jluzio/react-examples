/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Log from 'utils/Log'
import Spinner from 'components/learning/common/Spinner'
import SeasonDisplay from './SeasonDisplay'

type Props = {}
type State = {
  position?: Position
  positionError?: PositionError
}

class SeasonExample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      this.handlePositionSuccess,
      this.handlePositionError
    )
  }

  handlePositionSuccess: PositionCallback = position => {
    Log.log('handlePositionSuccess: ', position)
    this.setState({
      position
    })
  }

  handlePositionError: PositionErrorCallback = positionError => {
    Log.log('handlePositionSuccess: ', positionError)
    this.setState({
      positionError
    })
  }

  render() {
    const { position, positionError } = this.state
    // condition rendering example 1
    if (!position && !positionError) {
      return <Spinner />
    }

    // condition rendering example 2
    return (
      <div className="learning-example">
        <h2>SeasonsExample</h2>
        {position ? (
          <SeasonDisplay latitude={position.coords.latitude} />
        ) : null}
        {positionError ? <p>Error: {positionError?.message}</p> : null}
      </div>
    )
  }
}

export default SeasonExample
