import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import ContextDefaultExample from './ContextDefaultExample'
import ContextMultipleCtxsExample from './ContextMultipleCtxsExample'

const { TabPane } = Tabs

const ContextExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="rdx-k">
      <TabPane key="default" tab="Default">
        <ContextDefaultExample />
      </TabPane>
      <TabPane key="multiple" tab="Multiple">
        <ContextMultipleCtxsExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ContextExampleList
