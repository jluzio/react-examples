/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import firebase from 'firebase'

export class DefaultFirestoreDataConverter<T>
  implements firebase.firestore.FirestoreDataConverter<T> {
  toFirestore(modelObject: T): firebase.firestore.DocumentData {
    return modelObject
  }

  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot<
      firebase.firestore.DocumentData
    >,
    options: firebase.firestore.SnapshotOptions
  ): T {
    return snapshot.data(options) as T
  }
}
