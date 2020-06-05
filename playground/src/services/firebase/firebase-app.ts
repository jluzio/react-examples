import firebase from 'firebase'
import apiConfig from 'api/api-config.json'

type App = firebase.app.App

export class FirebaseApp {
  appCfg = apiConfig.firebase

  app: App | null = null

  private initializeApp() {
    const app = firebase.initializeApp(this.appCfg.config)
    // app.analytics()
    return app
  }

  private async signIn(app: App) {
    const { username, password } = this.appCfg.auth
    return app.auth().signInWithEmailAndPassword(username, password)
  }

  async connect() {
    if (!this.app) {
      const app = this.initializeApp()
      await this.signIn(app)
      this.app = app
    }
    return this.app
  }
}

export default new FirebaseApp()
