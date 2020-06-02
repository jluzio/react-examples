import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../models'

export type TodoState = Todo[]

const initialState: TodoState = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState as TodoState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed } as Todo
        }
        return todo
      })
    },
    addTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      const maxId = state
        .map(v => v.id)
        .reduce((acc, value) => Math.max(acc, value), 0)
      const finalTodo: Todo = { ...action.payload.todo, id: maxId + 1 }
      return [...state, finalTodo]
    }
  }
})

export const todoReducer = todoSlice.reducer

export const todoActions = todoSlice.actions
