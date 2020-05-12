/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import React, { useState } from 'react'
import { Button, Card, Descriptions, Avatar } from 'antd'
import authApi from 'api/oauth2/google-oauth2-api'
import { UserProfile } from 'api/oauth2/models'

type Props = {}
type State = {
  userData: gapi.auth2.GoogleUser | null
  userProfile: UserProfile | null
  signedIn: boolean
}

class OAuth2Example extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      userData: null,
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
      userData: googleUser,
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
    const { userData, userProfile, signedIn } = this.state
    return (
      <Card title="OAuth2">
        <p>SignedIn: {signedIn}</p>
        <Button onClick={this.handleSignIn}>SignIn</Button>
        <Button onClick={this.handleSignOut}>SignOut</Button>
        {userProfile && (
          <Card title={userProfile.name}>
            <Avatar src={userProfile.imageUrl} />
            <Descriptions>
              <Descriptions.Item label="Email">
                {userProfile.email}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )}
      </Card>
    )
  }
}

export default OAuth2Example
