import { createAction } from '@reduxjs/toolkit'
import { Todo } from '../../models'

/*
 * action creators
 */
export const addTodo = createAction<{ todo: Todo }>('todo/add')

export const toggleTodo = createAction<{ index: number }>('todo/toggle')

export const fetchTodosFullfilled = createAction<Todo[]>('todo/fetch')

export type TodoActions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>

export const todoActions = {
  addTodo,
  toggleTodo
}
