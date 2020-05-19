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
      title="Streamer"
      extra={[
        <Link key="streams" to={locations.list()} className="ant-btn">
          Streams
        </Link>,
        <GoogleAuthByStore key="auth" authSelector={authSelector} />
      ]}
    />
  )
}

export default StreamHeader
