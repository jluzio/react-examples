import React from 'react'
import { Tabs } from 'antd'
import StreamExample from './router/streams/StreamExample'
import BlogExample from './props/blog/BlogExample'
import SeasonsExample from './seasons/SeasonsExample'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  return (
    <div className="examples container">
      <h2>Learning</h2>
      <Tabs defaultActiveKey="seasons">
        <TabPane key="stream" tab="Stream">
          <StreamExample />
        </TabPane>
        <TabPane key="blog" tab="Blog">
          <BlogExample />
        </TabPane>
        <TabPane key="seasons" tab="Seasons">
          <SeasonsExample />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default LearningExampleList
