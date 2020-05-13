import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'

const { TabPane } = Tabs

const ReactHookFormExampleList: React.FC = () => (
  <ExampleListTabbedCard title="React Hook Form" tabKey="rhf-k">
    <TabPane key="todo" tab="todo">
      !!TODO!!
    </TabPane>
  </ExampleListTabbedCard>
)

export default ReactHookFormExampleList
