import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import UseStateHookExample from './UseStateHookExample'
import UseEffectHookExample from './UseEffectHookExample'
import UseRefHookExample from './UseRefHookExample'
import UseContextHookExample from './UseContextHookExample'
import UseReducerHookExample from './UseReducerHookExample'
import UseEffectHookConcurrencyExample from './UseEffectHookConcurrencyExample'

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
      <TabPane key="useEffectConc" tab="useEffect Concurrency">
        <UseEffectHookConcurrencyExample />
      </TabPane>
      <TabPane key="useRef" tab="useRef">
        <UseRefHookExample />
      </TabPane>
      <TabPane key="useContext" tab="useContext">
        <UseContextHookExample />
      </TabPane>
      <TabPane key="useReducer" tab="useReducer">
        <UseReducerHookExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default HooksExampleList
