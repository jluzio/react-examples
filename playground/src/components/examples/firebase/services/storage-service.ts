import { Observable, of, from, forkJoin } from 'rxjs'
import firebaseApp from 'services/firebase/firebase-app'
import { Todo, Post } from '../models'
import { todoConverter, postConverter } from './converters'

class StorageService {
  private db = firebaseApp

  private collectionId = (collectionId: string) =>
    `react-examples:${collectionId}`

  private docId = (collectionId: string, docId: string) =>
    `${this.collectionId(collectionId)}/${docId}`

  private get todosRef() {
    return this.db.firestore().collection(this.collectionId('todos'))
  }

  public fetchTodos(): Observable<Todo[]> {
    return from(
      this.todosRef
        .withConverter(todoConverter)
        .get()
        .then(snapshot => snapshot.docs.map(d => d.data()))
    )
  }

  public postTodos(todos: Todo[]): Observable<void> {
    const promises = todos.map(todo => {
      return this.todosRef
        .doc(todo.id.toString())
        .withConverter(todoConverter)
        .set(todo)
    })
    return from(Promise.all(promises).then(v => {}))
  }
}

export default new StorageService()
