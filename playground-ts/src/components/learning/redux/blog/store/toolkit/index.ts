import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import loggingMiddleware from 'utils/redux/logging-middleware'
import { rootReducer, RootState } from './root'

export * from './root'

const initialState: RootState = {
  posts: [],
  users: []
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  // middleware: [...getDefaultMiddleware(), loggingMiddleware],
  devTools: {
    name: 'Learning / Blog'
  }
})

// DEV: getDefaultMiddleware() = [thunk, immutableStateInvariant, serializableStateInvariant]
// PROD: getDefaultMiddleware() = [thunk]

export default store
