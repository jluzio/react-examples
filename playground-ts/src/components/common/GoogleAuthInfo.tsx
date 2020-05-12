import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import authApi from 'api/oauth2/google-oauth2-api'
import { UserProfile } from 'api/oauth2/models'

type Props = {}
type State = {
  userProfile: UserProfile | null
}

class GoogleAuthInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userProfile: null
    }
  }

  async componentDidMount() {
    this.handleUpdateUserProfile()
    const googleAuth = await authApi.googleAuth()
    googleAuth.isSignedIn.listen(this.handleUpdateUserProfile)
  }

  handleUpdateUserProfile = async () => {
    const googleAuth = await authApi.googleAuth()
    const isSignedIn = googleAuth.isSignedIn?.get() ?? false
    const googleUser = isSignedIn ? googleAuth.currentUser.get() : null
    this.setState({
      userProfile: googleUser ? authApi.toUserProfile(googleUser) : null
    })
  }

  render() {
    const { userProfile } = this.state
    if (!userProfile) {
      return (
        <span>
          <Avatar icon={<UserOutlined />} />
        </span>
      )
    }
    return (
      <span>
        {userProfile.name} <Avatar src={userProfile.imageUrl} />
      </span>
    )
  }
}

export default GoogleAuthInfo
