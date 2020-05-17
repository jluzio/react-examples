import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import GoogleAuthProviderExample from './GoogleAuthExample'
import OAuth2Example from './OAuth2Example'

const { TabPane } = Tabs

const OAuth2ExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard title="Oauth2" tabKey="oauth2-key">
      <TabPane key="GoogleAuth" tab="GoogleAuth">
        <GoogleAuthProviderExample />
      </TabPane>
      <TabPane key="OAuth2" tab="OAuth2">
        <OAuth2Example />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default OAuth2ExampleList
