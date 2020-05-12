/* eslint-disable class-methods-use-this */
import _ from 'lodash'
import { googleOAuth2 } from '../api-config.json'
import { UserProfile } from './models'

type GoogleAuthResult = Omit<gapi.auth2.GoogleAuth, 'then'>

class GoogleOAuth2Api {
  private get gapi() {
    return window.gapi
  }

  private get auth2() {
    return window.gapi.auth2
  }

  private async getGoogleAuth() {
    const promise = new Promise<GoogleAuthResult>((resolve, reject) => {
      this.gapi.load('auth2', () => {
        this.auth2.init({
          client_id: googleOAuth2.clientId
        })
        const googleAuth = this.auth2.getAuthInstance()
        delete googleAuth.then
        resolve(googleAuth)
      })
    })
    return promise
  }

  private getGoogleAuthMemoized = _.memoize(this.getGoogleAuth)

  async googleAuth() {
    return this.getGoogleAuthMemoized()
  }

  async signIn() {
    const scopes = ['profile', 'email']
    const googleAuth = await this.googleAuth()
    const userAuth = await googleAuth.signIn({
      scope: scopes.join(' ')
    })
    return userAuth
  }

  async signOut() {
    const googleAuth = await this.googleAuth()
    googleAuth.signOut()
  }

  toUserProfile = (googleUser: gapi.auth2.GoogleUser): UserProfile => {
    const basicProfile = googleUser.getBasicProfile()
    return {
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      imageUrl: basicProfile.getImageUrl()
    }
  }
}

const api = new GoogleOAuth2Api()
export default api
