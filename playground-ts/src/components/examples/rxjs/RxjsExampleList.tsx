import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import DelayedUpdateInputExample from './DelayedUpdateInputExample'
import AutoCompleteExample from './AutoCompleteExample'

const { TabPane } = Tabs

const RxjsExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard title="Rxjs" tabKey="rxjs-key">
      <TabPane key="delayed_update_input" tab="Delayed Update">
        <DelayedUpdateInputExample />
      </TabPane>
      <TabPane key="autocomplete" tab="autocomplete">
        <AutoCompleteExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default RxjsExampleList
