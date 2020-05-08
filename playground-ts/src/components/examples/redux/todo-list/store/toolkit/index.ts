import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer, todoActions } from './todo'
import { filterReducer, filterActions } from './filter'
import { counterReducer, counterActions } from './counter'
import { userReducer, userActions } from './user'

// action creators
export { todoActions, filterActions, counterActions, userActions }

// reducer
export const rootReducer = combineReducers({
  visibilityFilter: filterReducer,
  todos: todoReducer,
  counter: counterReducer,
  users: userReducer
})

// state
export type RootState = ReturnType<typeof rootReducer>

const initialState: Partial<RootState> = {
  todos: [
    { text: 'Todo-1', completed: false },
    { text: 'Todo-2', completed: false },
    { text: 'Todo-3', completed: true }
  ],
  users: []
}

// store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: {
    name: 'Examples/TodoList Store'
  }
})

export default store
