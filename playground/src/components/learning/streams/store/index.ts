import { authActions, authReducer } from 'store/auth'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { streamReducer, streamActions } from './stream'

export const rootReducer = combineReducers({
  auth: authReducer,
  streams: streamReducer
})

export type RootState = ReturnType<typeof rootReducer>

export { authActions, streamActions }
export const actions = {
  ...authActions,
  ...streamActions
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'Learning / Streamy'
  }
})

export default store
