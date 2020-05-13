import React from 'react'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import ValidatorBasic from './ValidatorBasic'

const { TabPane } = Tabs

const ValidatorExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard title="Validators" tabKey="val-key">
      <TabPane key="basic" tab="Basic">
        <ValidatorBasic />
      </TabPane>
      <TabPane key="more" tab="More">
        ... TODO ...
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ValidatorExampleList
