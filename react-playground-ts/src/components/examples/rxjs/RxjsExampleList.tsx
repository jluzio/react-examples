import React from 'react'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import { Tabs } from 'antd'
import DelayedUpdateInputExample from './DelayedUpdateInputExample'

const { TabPane } = Tabs

const RxjsExampleList: React.FC = () => {
  return (
    <ActiveTabBySearchParamTabs tabKey="rxjs-key">
      <TabPane key="delayed_update_input" tab="Delayed Update">
        <DelayedUpdateInputExample />
      </TabPane>
    </ActiveTabBySearchParamTabs>
  )
}

export default RxjsExampleList
