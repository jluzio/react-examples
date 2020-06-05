import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  Action
} from '@reduxjs/toolkit'
import { createEpicMiddleware } from 'redux-observable'
import { ActionType } from 'typesafe-actions'

import { userReducer, userActions } from './user'
import rootEpic from './epics'

export { userActions } from './user'

const actions = { ...userActions }
export type ActionsType = ActionType<typeof actions>

const rootReducer = combineReducers({
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>()

// mount it on the Store
export const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'Examples / Users Observable'
  },
  // middleware: [thunk, sagaMiddleware]
  middleware: [
    ...getDefaultMiddleware({ serializableCheck: false }),
    epicMiddleware
  ]
})
// NOTE [@2020/06]: There are issues with getDefaultMiddleware() + serializableCheck and sagas
// Disabling serializableCheck for now

epicMiddleware.run(rootEpic)

export default store
