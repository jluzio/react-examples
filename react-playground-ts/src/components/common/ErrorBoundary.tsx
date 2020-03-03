/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { ErrorInfo, ComponentType } from 'react'
import ErrorBoundaryFallbackComponent from './ErrorBoundaryFallbackComponent'

interface Props {
  FallbackComponent: ComponentType<any>
}
interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

class ErrorBoundary extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    FallbackComponent: ErrorBoundaryFallbackComponent
  }

  state: State = {
    error: null,
    errorInfo: null
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render() {
    const { children, FallbackComponent } = this.props
    const { error, errorInfo } = this.state
    if (error) {
      // You can render any custom fallback UI
      return <FallbackComponent error={error} errorInfo={errorInfo} />
    }
    return children
  }
}

export default ErrorBoundary
