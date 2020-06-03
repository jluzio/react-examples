import React from 'react'
import { User } from 'services/placeholder/models'
import { List, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { locations } from './routes'
import {
  connectorList as connector,
  ReduxPropsList as ReduxProps
} from './redux'

type Props = ReduxProps

const UserList: React.FC<Props> = ({ users, fetchAllUsers }: Props) => {
  const userList: User[] = Object.values(users)

  return (
    <List
      dataSource={userList}
      renderItem={user => (
        <List.Item key={user.id}>
          <List.Item.Meta
            avatar={<Avatar icon={<UserOutlined />} />}
            title={<Link to={locations.details(user.id)}>{user.username}</Link>}
            description={user.name}
          />
        </List.Item>
      )}
    />
  )
}

export default connector(UserList)
