import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import { Todo } from '../../shared/todo/models'

export type TodoState = { [id: string]: Todo }

const initialState: TodoState = {}

const nextId = () => uuidv4()

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState as TodoState,
  reducers: {
    createTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      const finalTodo = { ...action.payload.todo, id: nextId() }
      return { ...state, [finalTodo.id]: finalTodo }
    },
    toggleTodo: (state, action: PayloadAction<{ id: string }>) => {
      const todo = state[action.payload.id]
      return { ...state, [todo.id]: { ...todo, completed: !todo.completed } }
    },
    updateTodo: (state, action: PayloadAction<{ todo: Todo }>) => {
      const { todo } = action.payload
      return { ...state, [todo.id]: todo }
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      return _.omit(state, action.payload.id)
    },
    storeTodos: (state, action: PayloadAction<{ todos: Todo[] }>) => {
      return _.mapKeys(action.payload.todos, 'id')
    }
  }
})

export const todoReducer = todoSlice.reducer

export const todoActions = todoSlice.actions
