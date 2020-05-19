/* eslint-disable no-unused-vars */
import React from 'react'
import GoogleAuth from 'components/auth/GoogleAuth'
import { connect, ConnectedProps } from 'react-redux'
import authService from 'services/oauth2/google-oauth2-service'
import { AuthState, authActions } from 'store/auth'

type OwnProps = {
  authSelector: (state: any) => AuthState
}

const mapStateToProps = (state: any, ownProps: OwnProps) => ({
  auth: ownProps.authSelector(state)
})
const mapDispatchToProps = {
  signIn: authActions.signIn,
  signOut: authActions.signOut
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & OwnProps
class GoogleAuthByStore extends React.Component<Props> {
  async componentDidMount() {
    const currentUser = await authService.currentUser()
    currentUser.listen(this.handleUpdateUser)

    const googleUser = currentUser?.get()
    if (googleUser) {
      this.handleUpdateUser(googleUser)
    }
  }

  handleSignInClick = () => authService.signIn()

  handleSignOutClick = () => authService.signOut()

  handleUpdateUser = async (googleUser?: gapi.auth2.GoogleUser) => {
    const { signIn, signOut } = this.props
    if (googleUser != null && googleUser.isSignedIn()) {
      const userProfile = authService.toUserProfile(googleUser)
      signIn(userProfile)
    } else {
      signOut()
    }
  }

  render() {
    const { auth } = this.props
    return (
      <GoogleAuth
        auth={auth}
        onSignIn={this.handleSignInClick}
        onSignOut={this.handleSignOutClick}
      />
    )
  }
}

export default connector(GoogleAuthByStore)
