import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { AuthState } from 'store/auth'

type Props = {
  auth: AuthState
}

const UserDetails: React.FC<Props> = (props: Props) => {
  const { auth } = props
  const { signedIn, userProfile } = auth
  if (signedIn && userProfile) {
    return (
      <span>
        {userProfile.name} <Avatar src={userProfile.imageUrl} />
      </span>
    )
  }
  return (
    <span>
      <Avatar icon={<UserOutlined />} />
    </span>
  )
}

export default UserDetails
