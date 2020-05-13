import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import MemoizeExample from './memoize/MemoizeExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard title="Cache" tabKey="cx-key">
      <TabPane key="memoize" tab="Memoize">
        <MemoizeExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ReduxExampleList
