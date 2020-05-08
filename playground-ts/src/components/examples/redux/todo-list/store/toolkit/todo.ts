import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../models'

export type TodoState = Todo[]

const initialState: TodoState = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState as TodoState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<{ index: number }>) => {
      return state.map((todo, index) => {
        if (index === action.payload.index) {
          return { ...todo, completed: !todo.completed } as Todo
        }
        return todo
      })
    },
    addTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      return [...state, action.payload.todo]
    }
  }
})

export const todoReducer = todoSlice.reducer

export const todoActions = todoSlice.actions
