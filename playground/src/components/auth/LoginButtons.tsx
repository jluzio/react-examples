import React from 'react'
import { Button } from 'antd'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { AuthState } from 'store/auth'

type Props = {
  auth: AuthState
  onSignIn: () => void
  onSignOut: () => void
  loginIcon?: React.ReactNode
}

const LoginButtons: React.FC<Props> = (props: Props) => {
  const { auth, onSignIn, onSignOut, loginIcon } = props
  const { signedIn, userProfile } = auth
  const finalLoginIcon = loginIcon ?? <LoginOutlined />
  if (signedIn && userProfile) {
    return (
      <Button onClick={onSignOut} icon={<LogoutOutlined />}>
        Sign Out
      </Button>
    )
  }
  return (
    <Button onClick={onSignIn} icon={finalLoginIcon}>
      Sign In
    </Button>
  )
}

export default LoginButtons
