import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'

const { TabPane } = Tabs

const ReduxFormExampleList: React.FC = () => (
  <ExampleListTabbedCard title="Redux Form" tabKey="rxf-k">
    <TabPane key="todo" tab="Todo">
      !!TODO!!
    </TabPane>
  </ExampleListTabbedCard>
)

export default ReduxFormExampleList
