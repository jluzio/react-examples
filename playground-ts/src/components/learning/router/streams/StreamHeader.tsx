import React from 'react'
import { PageHeader, Descriptions } from 'antd'
import { Link } from 'react-router-dom'

const StreamHeader: React.FC = () => {
  return (
    <PageHeader
      title="Streamer"
      extra={[
        <Link to="/learning/streams" key="streams_key" className="ant-btn">
          Streams
        </Link>
      ]}
    >
      <Descriptions>test</Descriptions>
    </PageHeader>
  )
}

export default StreamHeader
