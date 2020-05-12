/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import googleOauth2Api from 'api/oauth2/google-oauth2-api'
import { GoogleAuthVar } from 'api/oauth2/models'

class GoogleOauth2Service {
  private api = googleOauth2Api

  public googleAuth: Promise<GoogleAuthVar>

  constructor() {
    this.googleAuth = this.api.googleAuth()
  }

  signIn = async () => (await this.googleAuth).signIn()

  signOut = async () => (await this.googleAuth).signOut()

  currentUser = async () => (await this.googleAuth).currentUser

  isSignedIn = async () => (await this.googleAuth).isSignedIn

  toUserProfile = this.api.toUserProfile
}

export default new GoogleOauth2Service()
