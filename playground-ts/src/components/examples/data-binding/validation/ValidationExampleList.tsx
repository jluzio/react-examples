import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import YupExample from './YupExample'

const { TabPane } = Tabs

const ReactHookFormExampleList: React.FC = () => (
  <ExampleListTabbedCard title="Validation" tabKey="val-k">
    <TabPane key="yup" tab="Yup">
      <YupExample />
    </TabPane>
  </ExampleListTabbedCard>
)

export default ReactHookFormExampleList
