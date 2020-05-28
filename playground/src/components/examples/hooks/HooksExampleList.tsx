import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import UseStateHookExample from './UseStateHookExample'
import UseEffectHookBasicsExample from './UseEffectHookBasicsExample'
import UseEffectHookSimpleExample from './UseEffectHookSimpleExample'
import UseRefHookExample from './UseRefHookExample'
import UseContextHookExample from './UseContextHookExample'
import UseReducerHookExample from './UseReducerHookExample'
import UseEffectHookConcurrencyExample from './UseEffectHookConcurrencyExample'
import UseMemoHookExample from './UseMemoHookExample'
import UseImperativeHandleHookExample from './UseImperativeHandleHookExample'
import UseLayoutEffectHookExample from './UseLayoutEffectHookExample'
import UseCallbackHookExample from './UseCallbackHookExample'
import UseCustomHookExample from './UseCustomHookExample'

const { TabPane } = Tabs

const HooksExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="hook-k">
      <TabPane key="useState" tab="useState">
        <UseStateHookExample />
      </TabPane>
      <TabPane key="useEffectBasics" tab="useEffect Basics">
        <UseEffectHookBasicsExample />
      </TabPane>
      <TabPane key="useEffectSimple" tab="useEffect Simple">
        <UseEffectHookSimpleExample />
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
      <TabPane key="useCustomHook" tab="useCustomHook">
        <UseCustomHookExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default HooksExampleList
