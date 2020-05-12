import React from 'react'
import { Button } from 'antd'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import authApi from 'api/oauth2/google-oauth2-api'
import { UserProfile } from 'api/oauth2/models'

type Props = {}
type State = {
  userProfile: UserProfile | null
  signedIn: boolean
}

class GoogleAuthButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userProfile: null,
      signedIn: false
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
      userProfile: googleUser ? authApi.toUserProfile(googleUser) : null,
      signedIn: isSignedIn
    })
  }

  handleSignIn = async () => {
    const { signedIn } = this.state
    if (!signedIn) {
      await authApi.signIn()
    }
  }

  handleSignOut = async () => {
    const { signedIn } = this.state
    if (signedIn) {
      await authApi.signOut()
    }
  }

  render() {
    const { userProfile } = this.state
    if (!userProfile) {
      return (
        <Button onClick={this.handleSignIn} icon={<LoginOutlined />}>
          Sign In
        </Button>
      )
    }
    return (
      <Button onClick={this.handleSignOut} icon={<LogoutOutlined />}>
        Sign Out
      </Button>
    )
  }
}

export default GoogleAuthButton
