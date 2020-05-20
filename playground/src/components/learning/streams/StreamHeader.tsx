import React from 'react'
import { PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import GoogleAuthByStore from 'components/auth/GoogleAuthByStore'
import { RootState } from './store'
import { locations } from './routes'

const StreamHeader: React.FC = () => {
  const authSelector = (state: RootState) => state.auth
  return (
    <PageHeader
      title={
        <Link key="streams" to={locations.list()}>
          Streams
        </Link>
      }
      extra={[<GoogleAuthByStore key="auth" authSelector={authSelector} />]}
    />
  )
}

export default StreamHeader
