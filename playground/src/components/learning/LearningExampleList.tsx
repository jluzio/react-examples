import React from 'react'
import './learning.scss'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import PropsBlogExample from './props-blog/BlogExample'
import SeasonExample from './state-season/SeasonExample'
import ImageSearch from './image-search/ImageSearchExample'
import VideosExample from './videos/VideosExample'
import ReduxSongsExample from './redux-songs/SongsExample'
import ReduxBlogExample from './redux-blog/BlogExample'
import StreamsExample from './streams/StreamsExample'
import ContextI18nExample from './context/ContextI18nExample'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard
      title="Learning"
      tabKey="l"
      className="learning-example-list"
    >
      <TabPane key="props-blog" tab="Props Blog">
        <PropsBlogExample />
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
      <TabPane key="redux-blog" tab="Redux Blog">
        <ReduxBlogExample />
      </TabPane>
      <TabPane key="redux-songs" tab="Redux Songs">
        <ReduxSongsExample />
      </TabPane>
      <TabPane key="streams" tab="Stream">
        <StreamsExample />
      </TabPane>
      <TabPane key="context" tab="Context">
        <ContextI18nExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default LearningExampleList
