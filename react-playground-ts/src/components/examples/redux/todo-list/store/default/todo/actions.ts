import { createAction } from '@reduxjs/toolkit'
import { Todo } from '../../models'

const actionType = (type: string) => `todo/${type}`

/*
 * action creators
 */
export const addTodo = createAction<{ todo: Todo }>(actionType('add'))

export const toggleTodo = createAction<{ index: number }>(actionType('toggle'))

/** TODO: check if it's useful or not */
export type TodoActions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
