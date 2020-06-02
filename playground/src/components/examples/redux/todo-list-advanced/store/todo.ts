import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../models'

export type TodoState = Todo[]

const initialState: TodoState = []

const nextId = () => uuidv4()

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState as TodoState,
  reducers: {
    createTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      const finalTodo = { ...action.payload.todo, id: nextId() }
      return [...state, finalTodo]
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    },
    updateTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      return state.map(todo => {
        if (todo.id === action.payload.todo.id) {
          return action.payload.todo
        }
        return todo
      })
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(todo => todo.id !== action.payload.id)
    },
    storeTodos: (state, action: PayloadAction<{ todos: Todo[] }>) => {
      return action.payload.todos
    }
  }
})

export const todoReducer = todoSlice.reducer

export const todoActions = todoSlice.actions
