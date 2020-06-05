/* eslint-disable class-methods-use-this */
import { Observable, Subject } from 'rxjs'
import firebaseApp from 'services/firebase/firebase-app'
import { Todo } from '../models'
import { todoConverter } from './converters'

class StorageService {
  private get firebaseApp() {
    return firebaseApp.connect()
  }

  private collectionId = (collectionId: string) =>
    `react-examples:${collectionId}`

  private docId = (collectionId: string, docId: string) =>
    `${this.collectionId(collectionId)}/${docId}`

  private refs = {
    todosRef: (app: firebase.app.App) =>
      app.firestore().collection(this.collectionId('todos'))
  }

  async getTodos(): Promise<Todo[]> {
    const app = await this.firebaseApp
    return this.refs
      .todosRef(app)
      .withConverter(todoConverter)
      .get()
      .then(snapshot => snapshot.docs.map(d => d.data()))
  }

  onSnapshotTodos(): Observable<Todo[]> {
    const subject = new Subject<Todo[]>()
    this.firebaseApp.then(app => {
      this.refs
        .todosRef(app)
        .withConverter(todoConverter)
        .onSnapshot(snapshot => {
          subject.next(snapshot.docs.map(d => d.data()))
        })
    })
    return subject
  }

  async setTodos(todos: Todo[]): Promise<void> {
    const app = await this.firebaseApp
    const promises = todos.map(todo => {
      return this.refs
        .todosRef(app)
        .doc(todo.id.toString())
        .withConverter(todoConverter)
        .set(todo)
    })
    return Promise.all(promises).then(() => {})
  }

  async setTodo(todo: Todo): Promise<void> {
    const app = await this.firebaseApp
    return this.refs
      .todosRef(app)
      .doc(todo.id.toString())
      .withConverter(todoConverter)
      .set(todo)
  }

  async deleteTodo(todo: Todo): Promise<void> {
    const app = await this.firebaseApp
    return this.refs
      .todosRef(app)
      .doc(todo.id.toString())
      .delete()
  }
}

export default new StorageService()
