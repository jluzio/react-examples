/* eslint-disable no-unused-vars */
import React from 'react'
import { Card } from 'antd'
import { Provider } from 'react-redux'
import GoogleAuthByStore from 'components/auth/GoogleAuthByStore'
import store, { RootState } from './store'

const GoogleAuthProviderExample: React.FC = () => {
  const authSelector = (state: RootState) => state.auth
  return (
    <Card title="OAuth2">
      <Provider store={store}>
        <GoogleAuthByStore authSelector={authSelector} />
      </Provider>
    </Card>
  )
}

export default GoogleAuthProviderExample
