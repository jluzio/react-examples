import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './todo'
import { visibilityFilterSlice } from './filter'
import { counterSlice } from './counter'

// action creators
const { addTodo, toggleTodo } = todoSlice.actions
const { setVisibilityFilter } = visibilityFilterSlice.actions
const { incrementCounter, decrementCounter } = counterSlice.actions
export {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  incrementCounter,
  decrementCounter
}

// reducer
export const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterSlice.reducer,
  todos: todoSlice.reducer,
  counter: counterSlice.reducer
})

// state
export type RootState = ReturnType<typeof rootReducer>

const initialState: Partial<RootState> = {
  todos: [
    { text: 'Todo-1', completed: false },
    { text: 'Todo-2', completed: false },
    { text: 'Todo-3', completed: true }
  ]
}

// store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
})

export type AppDispatch = typeof store.dispatch

export default store
