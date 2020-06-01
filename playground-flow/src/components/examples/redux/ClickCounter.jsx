/* eslint-disable react/prop-types */
// @flow
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button, Card, CardActions, CardHeader } from '@material-ui/core'
import { counterActions } from './store'
import type { RootState } from './store'

const mapStateToProps = (state: RootState) => ({
  counter: state.counter,
})
const mapDispatchToProps = {
  onIncrementCounter: counterActions.incrementCounter,
  onDecrementCounter: counterActions.decrementCounter,
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type OwnProps = {}
type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps & OwnProps

const ClickCounter = ({
  counter,
  onDecrementCounter,
  onIncrementCounter,
}: Props) => {
  return (
    <Card>
      <CardHeader title={`Counter: ${counter}`} />
      <CardActions>
        <Button onClick={() => onIncrementCounter()} variant="outlined">
          Increment
        </Button>
        <Button onClick={() => onDecrementCounter()} variant="outlined">
          Decrement
        </Button>
      </CardActions>
    </Card>
  )
}

export default connector(ClickCounter)
