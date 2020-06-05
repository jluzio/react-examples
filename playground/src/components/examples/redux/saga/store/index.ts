import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { userReducer } from './user'
import mySaga from './sagas'

export { userActions } from './user'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

// mount it on the Store
export const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'Examples / Users Saga'
  },
  // middleware: [thunk, sagaMiddleware]
  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }),
    sagaMiddleware
  ]
})
// NOTE [@2020/06]: There are issues with getDefaultMiddleware() + serializableCheck and sagas
// Disabling serializableCheck for now

// then run the saga
sagaMiddleware.run(mySaga)

export default store
