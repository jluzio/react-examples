import React from 'react'
import ErrorBoundary from 'components/common/ErrorBoundary'
import ThrowError from './ThrowError'
import BuggyCounter from './BuggyCounter'

const ErrorBoundaryExample: React.FC = () => {
  return (
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  )
}

export default ErrorBoundaryExample
