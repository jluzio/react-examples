import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'Examples / Redux Form'
  }
})

export default store
