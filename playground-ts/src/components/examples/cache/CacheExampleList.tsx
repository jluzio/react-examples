import React from 'react'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import { Tabs } from 'antd'
import _ from 'lodash'
import MemoizeExample from './memoize/MemoizeExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  const unsortedTabPanes = [
    <TabPane key="memoize" tab="Memoize">
      <MemoizeExample />
    </TabPane>
  ]
  const tabPanes = _.sortBy(unsortedTabPanes, t =>
    t.props.tab.toString().toLowerCase()
  )

  return (
    <ActiveTabBySearchParamTabs tabKey="cx-key">
      {tabPanes}
    </ActiveTabBySearchParamTabs>
  )
}

export default ReduxExampleList
