/* eslint-disable react/prefer-stateless-function */
import Spinner from 'components/learning/common/Spinner'
import React from 'react'
import Log from 'utils/Log'
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

  renderSeasonDisplay() {
    const { position } = this.state
    return position ? (
      <SeasonDisplay latitude={position.coords.latitude} />
    ) : null
  }

  renderPositionError() {
    const { positionError } = this.state
    return positionError ? <p>Error: {positionError?.message}</p> : null
  }

  renderLoading() {
    const { position, positionError } = this.state
    return !position && !positionError ? <Spinner /> : null
  }

  render() {
    return (
      <div className="learning-example">
        <h2>SeasonsExample</h2>
        {this.renderLoading()}
        {this.renderPositionError}
        {this.renderSeasonDisplay()}
      </div>
    )
  }

  /*
  private initial_render() {
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
  */
}

export default SeasonExample
