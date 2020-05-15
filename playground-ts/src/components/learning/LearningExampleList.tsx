import React from 'react'
import './learning.scss'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import BlogExample from './props/blog/BlogExample'
import SeasonExample from './season/SeasonExample'
import ImageSearch from './image-search/ImageSearch'
import VideosExample from './videos/VideosExample'
import ReduxExampleList from './redux/ReduxExampleList'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard
      title="Learning"
      tabKey="l"
      className="learning-example-list"
    >
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
      <TabPane key="redux" tab="Redux">
        <ReduxExampleList />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default LearningExampleList
