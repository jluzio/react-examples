import React from 'react'
import Log from 'utils/Log'

export type LogProps = {
  log: typeof Log
}

export function withLog<P extends LogProps>(Component: React.ComponentType<P>) {
  class WithLog extends React.Component<Omit<P, keyof LogProps>> {
    // Adding HOC signature composition displayName
    static displayName = `WithLog(${Component.displayName ||
      Component.name ||
      'Component'})`

    render() {
      // Issue found at 2020/05/14: https://github.com/microsoft/TypeScript/issues/35858
      // Casting as workaround
      const props: P = { ...this.props, log: Log } as P
      return <Component {...props} />
    }
  }

  return WithLog
}
