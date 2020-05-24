/* eslint-disable class-methods-use-this */
import React, {
  ErrorInfo,
  GetDerivedStateFromProps,
  GetDerivedStateFromError
} from 'react'
import log from 'utils/log'
import { Descriptions, Space, Button, List, Collapse } from 'antd'
import ErrorThrower from './ErrorThrower'
import lifecycleMethods from './lifecycle-methods.json'

const { Panel } = Collapse

type Props = {
  counter: number
  setCounter: (counter: number) => void
}
type State = {
  counter: number
  error?: Error
  errorInfo?: ErrorInfo
  throwError?: Error
}

class LoggingLifecycleMethods extends React.Component<Props, State> {
  state: State = {
    counter: 0
  }

  static getDerivedStateFromProps: GetDerivedStateFromProps<Props, State> = (
    nextProps,
    prevState
  ) => {
    log.log('getDerivedStateFromProps', { nextProps, prevState })
    return null
  }

  static getDerivedStateFromError: GetDerivedStateFromError<
    Props,
    State
  > = error => {
    log.log('getDerivedStateFromError', { error })
    return { error }
  }

  componentDidMount() {
    const { props, state } = this
    log.log('componentDidMount', { props, state })
  }

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
    nextContext: any
  ) {
    log.log('shouldComponentUpdate', { nextProps, nextState, nextContext })
    return true
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { props, state } = this
    log.log('componentDidUpdate', { props, state, prevProps, prevState })
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): State | null {
    const { props, state } = this
    log.log('getSnapshotBeforeUpdate', { props, state, prevProps, prevState })
    return state
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    log.log('componentDidCatch', { error, errorInfo })
  }

  componentWillUnmount() {
    log.log('componentWillUnmount')
  }

  handleUpdateProps = () => {
    const { counter, setCounter } = this.props
    setCounter(counter + 1)
  }

  handleUpdateState = () => {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  handleThrowError = () => {
    this.setState({
      throwError: new Error('manual thrown error')
    })
  }

  handleThrowErrorTriggered = () => {
    this.setState({
      throwError: undefined
    })
  }

  renderLifecycleMethods() {
    return (
      <Collapse>
        {Object.entries(lifecycleMethods).map(([phase, methods]) => (
          <Panel header={phase} key={phase}>
            <List>
              {methods.map(method => (
                <List.Item key={phase + method}>
                  <Descriptions title={method} />
                </List.Item>
              ))}
            </List>
          </Panel>
        ))}
      </Collapse>
    )
  }

  render() {
    const { props, state } = this
    log.log('render', { props, state })
    const { throwError } = this.state
    return (
      <>
        <Space size="large" direction="vertical">
          <Space direction="horizontal">
            <Button onClick={this.handleUpdateState}>Update State</Button>
            <Button onClick={this.handleUpdateProps}>Update Props</Button>
            <Button onClick={this.handleThrowError}>Throw Error</Button>
          </Space>
          <Descriptions>
            <Descriptions.Item label="Props">
              {JSON.stringify(props)}
            </Descriptions.Item>
            <Descriptions.Item label="State">
              {JSON.stringify(state)}
            </Descriptions.Item>
          </Descriptions>

          {this.renderLifecycleMethods()}
        </Space>
        <ErrorThrower
          error={throwError}
          onErrorTrigger={this.handleThrowErrorTriggered}
        />
      </>
    )
  }
}

export default LoggingLifecycleMethods
