import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import ResourceListExample from './resource-list/ResourceListExample'
import SeasonExample from './seasons/SeasonExample'

const { TabPane } = Tabs

const HookExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="hook-k">
      <TabPane key="resource_list" tab="Resource List">
        <ResourceListExample />
      </TabPane>
      <TabPane key="season" tab="Seasons">
        <SeasonExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default HookExampleList
