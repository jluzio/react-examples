/* eslint-disable prefer-destructuring */
import React, { useState } from 'react'
import { Button } from 'antd'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Location } from 'history'
import { authenticationService } from './auth'
import useAuth from './useAuth'

const AuthLink: React.FC = () => {
  const authenticated = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const refresh = () => {
    const state: any = history.location.state
    const from: Location | undefined = state ? state?.from : undefined

    history.push(from ?? history.location)
  }

  const handleLogin = () => {
    setLoading(true)
    authenticationService.authenticate().subscribe(() => {
      setLoading(false)
      refresh()
    })
  }
  const handleLogout = () => {
    setLoading(true)
    authenticationService.signout().subscribe(() => {
      setLoading(false)
      refresh()
    })
  }

  return authenticated ? (
    <Button
      type="link"
      onClick={handleLogout}
      icon={<LogoutOutlined />}
      loading={loading}
    >
      Logout
    </Button>
  ) : (
    <Button
      type="link"
      onClick={handleLogin}
      icon={<LoginOutlined />}
      loading={loading}
    >
      Login
    </Button>
  )
}

export default AuthLink
