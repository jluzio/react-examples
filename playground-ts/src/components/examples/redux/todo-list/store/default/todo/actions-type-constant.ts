import { createAction, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../models'

/*
 * action creators
 */

export enum TodoActionType {
  ADD = 'todo/add',
  TOGGLE = 'todo/toggle'
}

export const addTodoToolkit = createAction<{ todo: Todo }, TodoActionType.ADD>(
  TodoActionType.ADD
)

export const addTodoDefault = (todo: Todo) =>
  ({
    type: TodoActionType.ADD,
    payload: {
      todo
    }
  } as PayloadAction<{ todo: Todo }, TodoActionType.ADD>)

export const addTodo = addTodoToolkit

export const toggleTodo = createAction<
  { index: number },
  TodoActionType.TOGGLE
>(TodoActionType.TOGGLE)

export type TodoActions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>

export const todoActions = {
  addTodo,
  toggleTodo
}
