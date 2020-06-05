import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userActions, userReducer } from 'store/placeholder/user'

const rootReducer = combineReducers({
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

export { userActions }

export const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'Examples / Router'
  }
})

export default store
