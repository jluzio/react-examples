import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authActions, authReducer } from 'store/auth'

const rootReducer = combineReducers({
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
    name: 'Examples / GoogleAuthExample'
  }
})

export default store
