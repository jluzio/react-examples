import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import RhfBasicExample from './RhfBasicExample'

const { TabPane } = Tabs

const ReactHookFormExampleList: React.FC = () => (
  <ExampleListTabbedCard title="React Hook Form" tabKey="rhf-k">
    <TabPane key="basic" tab="Basic">
      <RhfBasicExample />
    </TabPane>
  </ExampleListTabbedCard>
)

export default ReactHookFormExampleList
