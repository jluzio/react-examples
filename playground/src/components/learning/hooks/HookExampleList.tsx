import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import ResourceListExample from './resource-list/ResourceListExample'

const { TabPane } = Tabs

const HookExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="hook-k">
      <TabPane key="resource_list" tab="Resource List">
        <ResourceListExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default HookExampleList
