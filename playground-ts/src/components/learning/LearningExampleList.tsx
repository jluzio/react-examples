import React from 'react'
import './learning.scss'
import { Tabs } from 'antd'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import _ from 'lodash'
import BlogExample from './props/blog/BlogExample'
import SeasonExample from './season/SeasonExample'
import ImageSearch from './image-search/ImageSearch'
import VideosExample from './videos/VideosExample'
import ReduxExampleList from './redux/ReduxExampleList'

const { TabPane } = Tabs

const LearningExampleList: React.FC = () => {
  const unsortedTabPanes = [
    <TabPane key="blog" tab="Blog">
      <BlogExample />
    </TabPane>,
    <TabPane key="seasons" tab="Seasons">
      <SeasonExample />
    </TabPane>,
    <TabPane key="imageSearch" tab="ImageSearch">
      <ImageSearch />
    </TabPane>,
    <TabPane key="videos" tab="Videos">
      <VideosExample />
    </TabPane>,
    <TabPane key="redux" tab="Redux">
      <ReduxExampleList />
    </TabPane>
  ]
  const tabPanes = _.sortBy(unsortedTabPanes, t =>
    t.props.tab.toString().toLowerCase()
  )
  return (
    <div className="learning-example-list">
      <h2>Learning</h2>
      <ActiveTabBySearchParamTabs tabKey="lel-key">
        {tabPanes}
      </ActiveTabBySearchParamTabs>
    </div>
  )
}

export default LearningExampleList
