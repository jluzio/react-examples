import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../models'
import { TodoActions, addTodo, toggleTodo } from './actions'

export type TodoState = Todo[]

const initialState: TodoState = []

type ToggleTodoAction = PayloadAction<Parameters<typeof toggleTodo>[0]>
type AddTodoAction = PayloadAction<Parameters<typeof addTodo>[0]>

export function todoReducerV1(
  state: TodoState = initialState,
  action: TodoActions
): TodoState {
  if (toggleTodo.match(action)) {
    return state.map((todo, index) => {
      if (index === action.payload.index) {
        return { ...todo, completed: !todo.completed } as Todo
      }
      return todo
    })
  }
  if (addTodo.match(action)) {
    return [...state, action.payload.todo]
  }
  return state
}

export const todoReducerV2 = createReducer(initialState as TodoState, {
  [toggleTodo.type]: (state, action: ToggleTodoAction) => {
    return state.map((todo, index) => {
      if (index === action.payload.index) {
        return { ...todo, completed: !todo.completed } as Todo
      }
      return todo
    })
  },
  [addTodo.type]: (state, action: AddTodoAction) => {
    return [...state, action.payload.todo]
  }
})

export const todoReducerV3 = createReducer(initialState as TodoState, builder =>
  builder
    .addCase(toggleTodo, (state, action) => {
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return { ...todo, completed: !todo.completed } as Todo
        }
        return todo
      })
    })
    .addCase(addTodo, (state, action) => {
      return [...state, action.payload.todo]
    })
)

export const todoReducer = todoReducerV3
