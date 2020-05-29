/* eslint-disable class-methods-use-this */
import firebase from 'firebase'
import apiConfig from 'api/api-config.json'

export default class FirebaseService {
  appCfg = apiConfig.firebase

  app!: firebase.app.App

  constructor() {
    this.app = firebase.initializeApp(this.appCfg.config)
    this.app.analytics()
  }

  async signIn() {
    const { username, password } = this.appCfg.auth
    return this.app.auth().signInWithEmailAndPassword(username, password)
  }
}
