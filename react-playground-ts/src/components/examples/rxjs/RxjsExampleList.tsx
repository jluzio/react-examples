import React from 'react'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import { Tabs } from 'antd'
import DelayedUpdateInputExample from './DelayedUpdateInputExample'
import AutoCompleteExample from './Auto-CompleteExample'

const { TabPane } = Tabs

const RxjsExampleList: React.FC = () => {
  return (
    <ActiveTabBySearchParamTabs tabKey="rxjs-key">
      <TabPane key="delayed_update_input" tab="Delayed Update">
        <DelayedUpdateInputExample />
      </TabPane>
      <TabPane key="autocomplete" tab="autocomplete">
        <AutoCompleteExample />
      </TabPane>
    </ActiveTabBySearchParamTabs>
  )
}

export default RxjsExampleList
