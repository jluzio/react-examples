import React from 'react'
import ErrorBoundary from 'components/common/ErrorBoundary'
// import ThrowError from './ThrowError'
import { Card } from 'antd'
import BuggyCounter from './BuggyCounter'

const ErrorBoundaryExample: React.FC = () => {
  return (
    <Card title="Boundary Example">
      <Card title="Protected">
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </Card>
      <Card title="Not Protected">
        <BuggyCounter />
      </Card>
    </Card>
  )
}

export default ErrorBoundaryExample
