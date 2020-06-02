import { Observable, from, Subject } from 'rxjs'
import firebaseApp from 'services/firebase/firebase-app'
import log from 'utils/log'
import { Todo } from '../models'
import { todoConverter } from './converters'

class StorageService {
  private db = firebaseApp

  private collectionId = (collectionId: string) =>
    `react-examples:${collectionId}`

  private docId = (collectionId: string, docId: string) =>
    `${this.collectionId(collectionId)}/${docId}`

  private get todosRef() {
    return this.db.firestore().collection(this.collectionId('todos'))
  }

  public getTodos(): Observable<Todo[]> {
    return from(
      this.todosRef
        .withConverter(todoConverter)
        .get()
        .then(snapshot => snapshot.docs.map(d => d.data()))
    )
  }

  public onSnapshotTodos(): Observable<Todo[]> {
    const subject = new Subject<Todo[]>()
    this.todosRef.withConverter(todoConverter).onSnapshot(snapshot => {
      subject.next(snapshot.docs.map(d => d.data()))
    })
    return subject
  }

  public setTodos(todos: Todo[]): Observable<void> {
    const promises = todos.map(todo => {
      return this.todosRef
        .doc(todo.id.toString())
        .withConverter(todoConverter)
        .set(todo)
    })
    return from(Promise.all(promises).then(v => {}))
  }

  public setTodo(todo: Todo): Observable<void> {
    return from(
      this.todosRef
        .doc(todo.id.toString())
        .withConverter(todoConverter)
        .set(todo)
    )
  }

  public deleteTodo(todo: Todo): Observable<void> {
    return from(this.todosRef.doc(todo.id.toString()).delete())
  }
}

export default new StorageService()
