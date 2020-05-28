import FirebaseService from './firebase-service'

const service = new FirebaseService()
service.signIn()
const firebaseApp = service.app

export default firebaseApp
