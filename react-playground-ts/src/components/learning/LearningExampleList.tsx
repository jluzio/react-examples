import React from 'react'
import { Tabs } from 'antd'
import StreamExample from './router/streams/StreamExample'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  return (
    <div className="examples container">
      <h2>Learning</h2>
      <Tabs defaultActiveKey="1">
        <TabPane key="stream_example" tab="Stream">
          <StreamExample />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default LearningExampleList
