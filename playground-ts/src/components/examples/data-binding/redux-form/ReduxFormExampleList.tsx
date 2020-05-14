import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import RfDefaultExample from './RfDefaultExample'

const { TabPane } = Tabs

const ReduxFormExampleList: React.FC = () => (
  <ExampleListTabbedCard title="Redux Form" tabKey="rxf-k">
    <TabPane key="default" tab="Default">
      <RfDefaultExample />
    </TabPane>
  </ExampleListTabbedCard>
)

export default ReduxFormExampleList
