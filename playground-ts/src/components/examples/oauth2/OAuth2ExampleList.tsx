import React from 'react'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import { Tabs } from 'antd'
import _ from 'lodash'
import GoogleAuthExample from './GoogleAuthExample'
import OAuth2Example from './OAuth2Example'

const { TabPane } = Tabs

const OAuth2ExampleList: React.FC = () => {
  const unsortedTabPanes = [
    <TabPane key="OAuth2" tab="OAuth2">
      <GoogleAuthExample />
    </TabPane>,
    <TabPane key="GoogleAuth" tab="GoogleAuth">
      <OAuth2Example />
    </TabPane>
  ]
  const tabPanes = _.sortBy(unsortedTabPanes, t =>
    t.props.tab.toString().toLowerCase()
  )

  return (
    <ActiveTabBySearchParamTabs tabKey="oauth2-key">
      {tabPanes}
    </ActiveTabBySearchParamTabs>
  )
}

export default OAuth2ExampleList
