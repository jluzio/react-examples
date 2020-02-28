import { Tabs } from 'antd'
import React from 'react'

import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import CounterExamples from './CounterExamples'
import MultipleUpdatesExample from './MultipleUpdatesExample'

const { TabPane } = Tabs

const StateExamples: React.FC = () => {
  return (
    <div>
      <h2>StateExamples</h2>
      <ActiveTabBySearchParamTabs tabKey="stat-key">
        <TabPane key="CounterExamples" tab="CounterExamples">
          <CounterExamples />
        </TabPane>
        <TabPane key="MultipleUpdatesExample" tab="MultipleUpdatesExample">
          <MultipleUpdatesExample />
        </TabPane>
      </ActiveTabBySearchParamTabs>
    </div>
  )
}

export default StateExamples
