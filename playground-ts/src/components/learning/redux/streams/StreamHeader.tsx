import React from 'react'
import { PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import GoogleAuthByStore from 'components/auth/GoogleAuthByStore'
import { RootState } from './store'

const StreamHeader: React.FC = () => {
  const authSelector = (state: RootState) => state.auth
  return (
    <PageHeader
      title="Streamer"
      extra={[
        <Link to="/learning/streams" key="streams_key" className="ant-btn">
          Streams
        </Link>,
        <GoogleAuthByStore authSelector={authSelector} />
      ]}
    />
  )
}

export default StreamHeader
