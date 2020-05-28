/* eslint-disable class-methods-use-this */
import firebase from 'firebase'
import apiConfig from 'api/api-config.json'

export default class FirebaseService {
  app!: firebase.app.App

  constructor() {
    const { config } = apiConfig.firebase
    this.app = firebase.initializeApp(config)
    firebase.analytics()
  }

  async signIn() {
    const { auth } = apiConfig.firebase
    const { username, password } = auth
    return firebase.auth().signInWithEmailAndPassword(username, password)
  }
}
