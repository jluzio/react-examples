/* eslint-disable no-unused-vars */
import React from 'react'
import { Space } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import LoginButtons from 'components/auth/LoginButtons'
import UserDetails from 'components/auth/UserDetails'
import { AuthState } from 'store/auth'

type Props = {
  auth: AuthState
  onSignIn: () => void
  onSignOut: () => void
}

const GoogleAuth: React.FC<Props> = (props: Props) => {
  const { auth, onSignIn, onSignOut } = props
  return (
    <Space direction="horizontal">
      <UserDetails auth={auth} />
      <LoginButtons
        auth={auth}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        loginIcon={<GoogleOutlined />}
      />
    </Space>
  )
}

export default GoogleAuth
