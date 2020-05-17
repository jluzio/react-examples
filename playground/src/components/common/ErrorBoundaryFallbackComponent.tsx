/* eslint-disable react/prefer-stateless-function */
import React, { ErrorInfo } from 'react'
import { Button } from 'antd'

interface Props {
  error: Error
  errorInfo: ErrorInfo
}
interface State {
  showStack: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    showStack: false
  }

  onToggleStack = () => {
    this.setState(state => {
      return {
        showStack: !state.showStack
      }
    })
  }

  render() {
    const { error, errorInfo } = this.props
    const { showStack } = this.state
    return (
      <div>
        <h1>Error: {error.message}.</h1>
        <Button onClick={this.onToggleStack}>Toggle componentStack</Button>
        {showStack && <p>{errorInfo.componentStack}</p>}
      </div>
    )
  }
}

export default ErrorBoundary
