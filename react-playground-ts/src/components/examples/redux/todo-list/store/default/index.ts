import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todo/reducers'
import { visibilityFilterReducer } from './filter/reducers'

export * from './todo/actions'
export * from './filter/actions'

export const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>

const initialState: Partial<RootState> = {
  todos: [
    { text: 'Todo-1', completed: false },
    { text: 'Todo-2', completed: false },
    { text: 'Todo-3', completed: true }
  ]
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
})

export default store
