import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import AdDefaultExample from './AdDefaultExample'

const { TabPane } = Tabs

const AntDesignExampleList: React.FC = () => (
  <ExampleListTabbedCard title="Ant Design" tabKey="ad-k">
    <TabPane key="default" tab="Default">
      <AdDefaultExample />
    </TabPane>
  </ExampleListTabbedCard>
)

export default AntDesignExampleList
