import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer, todoActions } from './todo'
import { cloudTodoActions } from './todo-cloud'

// action creators
export { todoActions, cloudTodoActions }

// selectors
export * from './selectors'

// reducer
export const rootReducer = combineReducers({
  todos: todoReducer
})

// state
export type RootState = ReturnType<typeof rootReducer>

const initialState: Partial<RootState> = {
  todos: [
    { id: 'id-1', title: 'Todo-1', completed: false },
    { id: 'id-2', title: 'Todo-2', completed: false },
    { id: 'id-3', title: 'Todo-3', completed: true }
  ]
}

// store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: {
    name: 'Examples / TodoList Advanced'
  }
})

export default store
