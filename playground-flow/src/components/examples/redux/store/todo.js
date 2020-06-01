// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Todo } from './models'

export type TodoState = Todo[]

const initialState: TodoState = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<{ index: number }>) => {
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    },
    addTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      return [...state, action.payload.todo]
    },
  },
})

export const todoReducer = todoSlice.reducer

export const todoActions = todoSlice.actions
