import { Observable, from } from 'rxjs'
import firebaseApp from 'services/firebase/firebase-app'
import { Post } from '../models'
import { postConverter } from './converters'

class StorageService {
  private db = firebaseApp

  private collectionId = (collectionId: string) =>
    `react-examples:${collectionId}`

  private docId = (collectionId: string, docId: string) =>
    `${this.collectionId(collectionId)}/${docId}`

  private get postsRef() {
    return this.db.firestore().collection(this.collectionId('todos'))
  }

  public fetchPosts(): Observable<Post[]> {
    return from(
      this.postsRef
        .withConverter(postConverter)
        .get()
        .then(snapshot => snapshot.docs.map(d => d.data()))
    )
  }

  public postPosts(posts: Post[]): Observable<void> {
    const promises = posts.map(post => {
      return this.postsRef
        .doc(post.id.toString())
        .withConverter(postConverter)
        .set(post)
    })
    return from(Promise.all(promises).then(v => {}))
  }
}

export default new StorageService()
