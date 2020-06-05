/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
import { DefaultFirestoreDataConverter } from 'services/firebase/converters'
import { Todo, Post } from '../../shared/todo/models'

export const todoConverter = new DefaultFirestoreDataConverter<Todo>()
export const postConverter = new DefaultFirestoreDataConverter<Post>()

export default {
  todoConverter,
  postConverter
}
