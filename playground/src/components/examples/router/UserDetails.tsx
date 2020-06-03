import React from 'react'
import { User } from 'services/placeholder/models'
import { Descriptions } from 'antd'

type Props = {
  user: User
}

const UserDetails: React.FC<Props> = ({ user }: Props) => {
  return (
    <Descriptions title={user.name}>
      <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
      <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
    </Descriptions>
  )
}

export default UserDetails
