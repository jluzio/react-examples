// @flow
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer, todoActions } from './todo'
import { filterReducer, filterActions } from './filter'
import { counterReducer, counterActions } from './counter'
import type { TodoState } from './todo'
import type { FilterState } from './filter'
import type { CounterState } from './counter'

// action creators
export { todoActions, filterActions, counterActions }

// selectors
export * from './selectors'

// reducer
export const rootReducer = combineReducers({
  visibilityFilter: filterReducer,
  todos: todoReducer,
  counter: counterReducer,
})

// state
// export type RootState = ReturnType<typeof rootReducer>
export type RootState = {
  visibilityFilter: FilterState,
  todos: TodoState,
  counter: CounterState,
}

const initialState: $Shape<RootState> = {
  todos: [
    { text: 'Todo-1', completed: false },
    { text: 'Todo-2', completed: false },
    { text: 'Todo-3', completed: true },
  ],
}

// store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  devTools: {
    name: 'Examples / TodoList',
  },
})

export default store
