import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import SongExample from './songs/SongExample'
import BlogExample from './blog/BlogExample'
import StreamExample from './streams/StreamExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard title="Redux" tabKey="rdx-key">
      <TabPane key="songs" tab="Songs">
        <SongExample />
      </TabPane>
      <TabPane key="blog" tab="Blog">
        <BlogExample />
      </TabPane>
      <TabPane key="stream" tab="Stream">
        <StreamExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ReduxExampleList
