import React from 'react'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'

const { TabPane } = Tabs

const MiscExample: React.FC = () => {
  return (
    <ExampleListTabbedCard
      title="MiscExample"
      tabKey="example-k"
      className="xpto"
    >
      <TabPane key="tab2" tab="Tab2">
        content2
      </TabPane>
      <TabPane key="tab3" tab="Tab3">
        content3
      </TabPane>
      <TabPane key="tab1" tab="Tab1">
        content1
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default MiscExample
