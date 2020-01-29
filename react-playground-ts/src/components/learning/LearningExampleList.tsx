import React from 'react'
import { Tabs } from 'antd'
import StreamExample from './router/streams/StreamExample'
import BlogExample from './props/blog/BlogExample'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  return (
    <div className="examples container">
      <h2>Learning</h2>
      <Tabs defaultActiveKey="feed">
        <TabPane key="stream" tab="Stream">
          <StreamExample />
        </TabPane>
        <TabPane key="feed" tab="Blog">
          <BlogExample />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default LearningExampleList
