import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import loggingMiddleware from 'utils/redux/logging-middleware'
import { postReducer, postActions } from './post'
import { userReducer, userActions } from './user'

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

const initialState: RootState = {
  posts: [],
  users: []
}

export { postActions, userActions }

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: [...getDefaultMiddleware(), loggingMiddleware],
  devTools: {
    name: 'Learning/Blog Store'
  }
})

// DEV: getDefaultMiddleware() = [thunk, immutableStateInvariant, serializableStateInvariant]
// PROD: getDefaultMiddleware() = [thunk]

export default store
