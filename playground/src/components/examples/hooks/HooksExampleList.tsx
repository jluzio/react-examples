import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import UseStateHookExample from './UseStateHookExample'
import UseEffectHookExample from './UseEffectHookExample'

const { TabPane } = Tabs

const HooksExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="hook-k">
      <TabPane key="useState" tab="useState">
        <UseStateHookExample />
      </TabPane>
      <TabPane key="useEffect" tab="useEffect">
        <UseEffectHookExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default HooksExampleList
