import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer, todoActions } from './todo'
import { filterReducer, filterActions } from './filter'
import { counterReducer, counterActions } from './counter'
import { userReducer, userActions } from './user'

// action creators
export { todoActions, filterActions, counterActions, userActions }

// selectors
export * from './selectors'

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
    { id: 1, title: 'Todo-1', completed: false },
    { id: 2, title: 'Todo-2', completed: false },
    { id: 3, title: 'Todo-3', completed: true }
  ],
  users: []
}

// store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: {
    name: 'Examples / TodoList'
  }
})

export default store
