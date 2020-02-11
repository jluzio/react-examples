import React from 'react'
import { Card, Tabs } from 'antd'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import ValidatorBasic from './ValidatorBasic'

const { TabPane } = Tabs

const ValidatorExampleList: React.FC = () => {
  return (
    <Card title="Validators" className="example">
      <ActiveTabBySearchParamTabs tabKey="val-key">
        <TabPane key="basic" tab="Basic">
          <ValidatorBasic />
        </TabPane>
        <TabPane key="more" tab="More">
          ... TODO ...
        </TabPane>
      </ActiveTabBySearchParamTabs>
    </Card>
  )
}

export default ValidatorExampleList
