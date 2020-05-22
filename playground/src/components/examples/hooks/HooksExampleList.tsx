import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import UseStateHookExample from './UseStateHookExample'
import UseEffectHookExample from './UseEffectHookExample'
import UseRefHookExample from './UseRefHookExample'
import UseContextHookExample from './UseContextHookExample'
import UseReducerHookExample from './UseReducerHookExample'
import UseEffectHookConcurrencyExample from './UseEffectHookConcurrencyExample'
import UseMemoHookExample from './UseMemoHookExample'
import UseImperativeHandleHookExample from './UseImperativeHandleHookExample'
import UseLayoutEffectHookExample from './UseLayoutEffectHookExample'
import UseCallbackHookExample from './UseCallbackHookExample'

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
      <TabPane key="useMemo" tab="useMemo">
        <UseMemoHookExample />
      </TabPane>
      <TabPane key="useImperativeHandle" tab="useImperativeHandle">
        <UseImperativeHandleHookExample />
      </TabPane>
      <TabPane key="useLayoutEffect" tab="useLayoutEffect">
        <UseLayoutEffectHookExample />
      </TabPane>
      <TabPane key="useCallback" tab="useCallback">
        <UseCallbackHookExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default HooksExampleList
