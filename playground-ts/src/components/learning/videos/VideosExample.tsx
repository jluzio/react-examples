import React from 'react'
import { Card } from 'antd'
import VideoDisplay from './VideoDisplay'

const VideoExample: React.FC = () => {
  return (
    <Card title="Videos">
      <VideoDisplay />
    </Card>
  )
}

export default VideoExample
