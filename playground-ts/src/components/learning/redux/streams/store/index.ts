import { authActions, authReducer } from 'store/auth'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
  auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>

export { authActions }
export const actions = {
  ...authActions
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'Streamy Store'
  }
})

export default store
