/* eslint-disable class-methods-use-this */
import React from 'react'
import { User } from 'services/placeholder/models'
import { List, Descriptions, Card } from 'antd'
import useResources from './useResources'

type Props = {
  pageSize?: number
}

const UserList: React.FC<Props> = ({ pageSize }: Props) => {
  const users = useResources<User>('users')

  return (
    <Card title="Users">
      <List
        dataSource={users}
        pagination={{ pageSize }}
        renderItem={user => (
          <List.Item key={user.id}>
            <Descriptions title={user.name}>
              <Descriptions.Item label="Username">
                {user.username}
              </Descriptions.Item>
              <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
              <Descriptions.Item label="Website">
                {user.website}
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </Card>
  )
}

export default UserList
