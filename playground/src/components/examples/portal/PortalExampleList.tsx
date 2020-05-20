import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import PortalDefaultExample from './PortalDefaultExample'

const { TabPane } = Tabs

const PortalExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="portal-k">
      <TabPane key="default" tab="default">
        <PortalDefaultExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default PortalExampleList
