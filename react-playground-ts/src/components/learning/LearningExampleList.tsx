import React from 'react'
import { Tabs } from 'antd'
import TabsUsingParamKey from 'components/common/TabsUsingParamKey'
import StreamExample from './router/streams/StreamExample'
import BlogExample from './props/blog/BlogExample'
import SeasonExample from './season/SeasonExample'
import ImageSearch from './image-search/ImageSearch'
import './learning.scss'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  return (
    <div className="learning-example-list container">
      <h2>Learning</h2>
      <TabsUsingParamKey tabKey="lel-key">
        <TabPane key="stream" tab="Stream">
          <StreamExample />
        </TabPane>
        <TabPane key="blog" tab="Blog">
          <BlogExample />
        </TabPane>
        <TabPane key="seasons" tab="Seasons">
          <SeasonExample />
        </TabPane>
        <TabPane key="imageSearch" tab="ImageSearch">
          <ImageSearch />
        </TabPane>
      </TabsUsingParamKey>
    </div>
  )
}

export default LearningExampleList
