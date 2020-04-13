import React from 'react'
import Log from 'utils/Log'

export interface LogProps {
  log: typeof Log
}
type ComponentBaseProps<T> = Omit<T, keyof LogProps>

export function withLog<P extends LogProps>(Component: React.ComponentType<P>) {
  class WithLog extends React.Component<ComponentBaseProps<P>> {
    // Adding HOC signature composition displayName
    static displayName = `WithLog(${Component.displayName ||
      Component.name ||
      'Component'})`

    render() {
      return <Component log={Log} {...(this.props as P)} />
    }
  }

  return WithLog
}
