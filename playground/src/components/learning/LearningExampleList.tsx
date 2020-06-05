import React from 'react'
import './learning.scss'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'

const PropsBlogExample = React.lazy(() => import('./props-blog/BlogExample'))
const SeasonExample = React.lazy(() => import('./state-season/SeasonExample'))
const ImageSearch = React.lazy(() =>
  import('./image-search/ImageSearchExample')
)
const VideosExample = React.lazy(() => import('./videos/VideosExample'))
const ReduxSongsExample = React.lazy(() => import('./redux-songs/SongsExample'))
const ReduxBlogExample = React.lazy(() => import('./redux-blog/BlogExample'))
const StreamsExample = React.lazy(() => import('./streams/StreamsExample'))
const ContextI18nExample = React.lazy(() =>
  import('./context/ContextI18nExample')
)
const HookExampleList = React.lazy(() => import('./hooks/HookExampleList'))

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
      <TabPane key="hooks" tab="Hooks">
        <HookExampleList />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default LearningExampleList
