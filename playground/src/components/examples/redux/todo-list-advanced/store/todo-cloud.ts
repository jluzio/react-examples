import { Dispatch } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import storageService from '../services/storage-service'
import { todoActions } from './todo'
import { Todo } from '../models'

const nextId = () => uuidv4()

export function fetchTodos() {
  return (dispatch: Dispatch) => {
    storageService
      .onSnapshotTodos()
      .subscribe(todos => dispatch(todoActions.storeTodos({ todos })))
  }
}

export function createTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    const finalTodo: Todo = { ...todo, id: nextId() }
    storageService.setTodo(finalTodo)
  }
}

export function updateTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    storageService.setTodo(todo)
  }
}

export function toggleTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    const finalTodo: Todo = { ...todo, completed: !todo.completed }
    storageService.setTodo(finalTodo)
  }
}

export function deleteTodo(todo: Todo) {
  return (dispatch: Dispatch) => {
    storageService.deleteTodo(todo)
  }
}

export const cloudTodoActions = {
  fetchTodos,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo
}
