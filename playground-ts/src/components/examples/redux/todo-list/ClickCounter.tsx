import React, { PropsWithChildren } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Button, Card } from 'antd'
import { RootState, counterActions } from './store'

const mapStateToProps = (state: RootState) => ({
  counter: state.counter
})
const mapDispatchToProps = {
  onIncrementCounter: counterActions.incrementCounter,
  onDecrementCounter: counterActions.decrementCounter
}
const connector = connect(mapStateToProps, mapDispatchToProps)

type OwnProps = {}
type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps & PropsWithChildren<OwnProps>

const ClickCounter: React.FC<Props> = (props: Props) => {
  const { counter, onIncrementCounter, onDecrementCounter } = props
  return (
    <Card title={`Counter: ${counter}`}>
      <Button onClick={onIncrementCounter}>Increment</Button>
      <Button onClick={onDecrementCounter}>Decrement</Button>
    </Card>
  )
}

export default connector(ClickCounter)
