import React from 'react'
import { Menu } from 'antd'
import {
  OrderedListOutlined,
  UserOutlined,
  HomeOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { locations } from './routes'
import AuthLink from './auth/AuthLink'

const RouterHeader: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to={locations.home()}>Home</Link>
      </Menu.Item>
      <Menu.Item key="auth">
        <AuthLink />
      </Menu.Item>
      <Menu.Item key="list" icon={<OrderedListOutlined />}>
        <Link to={locations.list()}>Users</Link>
      </Menu.Item>
      <Menu.Item key="someUser" icon={<UserOutlined />}>
        <Link to={locations.details(1)}>Sample User</Link>
      </Menu.Item>
    </Menu>
  )
}

export default RouterHeader
