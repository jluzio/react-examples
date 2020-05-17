/* eslint-disable class-methods-use-this */
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

  async googleAuth() {
    return new Promise<GoogleAuthResult>((resolve, reject) => {
      const scopes = ['profile', 'email']
      this.gapi.load('auth2', () => {
        this.auth2.init({
          client_id: googleOAuth2.clientId,
          scope: scopes.join(' ')
        })
        const googleAuth = this.auth2.getAuthInstance()
        delete googleAuth.then
        resolve(googleAuth)
      })
    })
  }

  toUserProfile = (googleUser: gapi.auth2.GoogleUser): UserProfile => {
    const basicProfile = googleUser.getBasicProfile()
    return {
      id: basicProfile.getId(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      imageUrl: basicProfile.getImageUrl()
    }
  }
}

const api = new GoogleOAuth2Api()
export default api
