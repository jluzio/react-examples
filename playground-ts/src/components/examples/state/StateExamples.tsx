import { Tabs } from 'antd'
import React from 'react'

import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import CounterExamples from './CounterExamples'
import MultipleUpdatesExample from './MultipleUpdatesExample'

const { TabPane } = Tabs

const StateExamples: React.FC = () => {
  return (
    <ExampleListTabbedCard title="StateExamples" tabKey="stat-key">
      <TabPane key="CounterExamples" tab="CounterExamples">
        <CounterExamples />
      </TabPane>
      <TabPane key="MultipleUpdatesExample" tab="MultipleUpdatesExample">
        <MultipleUpdatesExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default StateExamples
