/* eslint-disable react/static-property-placement */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react'

export function logProps<P = {}>(WrappedComponent: React.ComponentType<P>) {
  class LogProps extends React.Component<P> {
    // Adding HOC signature composition displayName
    static displayName = `LogProps(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    componentDidMount() {
      console.log('mount props:', this.props)
    }

    componentDidUpdate(prevProps: any) {
      console.log('old props:', prevProps)
      console.log('new props:', this.props)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return LogProps
}
