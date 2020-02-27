import React from 'react'
import './learning.scss'
import { Tabs } from 'antd'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import StreamExample from './router/streams/StreamExample'
import BlogExample from './props/blog/BlogExample'
import SeasonExample from './season/SeasonExample'
import ImageSearch from './image-search/ImageSearch'
import VideosExample from './videos/VideosExample'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  return (
    <div className="learning-example-list">
      <h2>Learning</h2>
      <ActiveTabBySearchParamTabs tabKey="lel-key">
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
        <TabPane key="videos" tab="Videos">
          <VideosExample />
        </TabPane>
      </ActiveTabBySearchParamTabs>
    </div>
  )
}

export default LearningExampleList
