import React from 'react'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import { Tabs } from 'antd'
import _ from 'lodash'
import SongExample from './songs/SongExample'
import BlogExample from './blog/BlogExample'
import StreamExample from './streams/StreamExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  const unsortedTabPanes = [
    <TabPane key="songs" tab="Songs">
      <SongExample />
    </TabPane>,
    <TabPane key="blog" tab="Blog">
      <BlogExample />
    </TabPane>,
    <TabPane key="stream" tab="Stream">
      <StreamExample />
    </TabPane>
  ]
  const tabPanes = _.sortBy(unsortedTabPanes, t =>
    t.props.tab.toString().toLowerCase()
  )

  return (
    <ActiveTabBySearchParamTabs tabKey="rdx-key">
      {tabPanes}
    </ActiveTabBySearchParamTabs>
  )
}

export default ReduxExampleList
