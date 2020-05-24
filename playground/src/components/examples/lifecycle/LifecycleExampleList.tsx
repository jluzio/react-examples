import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import LifecycleDefaultExample from './LifecycleDefaultExample'
import LifecycleResourceExample from './LifecycleResourceExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="life-k">
      <TabPane key="default" tab="Default">
        <LifecycleDefaultExample />
      </TabPane>
      <TabPane key="resource" tab="Resource">
        <LifecycleResourceExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ReduxExampleList
