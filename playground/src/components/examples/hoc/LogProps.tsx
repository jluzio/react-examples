import React from 'react'
import Log from 'utils/log-test'

export function logProps<P = {}>(
  Component: React.ComponentType<P>
): React.ComponentType<P> {
  class LogProps extends React.Component<P> {
    // Adding HOC signature composition displayName
    static displayName = `LogProps(${Component.displayName ||
      Component.name ||
      'Component'})`

    componentDidMount() {
      Log.log('mount props:', this.props)
    }

    componentDidUpdate(prevProps: any) {
      Log.log('old props:', prevProps)
      Log.log('new props:', this.props)
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return LogProps
}
