import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
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

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, loggingMiddleware)
)

export default store
