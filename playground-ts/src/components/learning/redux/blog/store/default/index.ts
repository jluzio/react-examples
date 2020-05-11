import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loggingMiddleware from 'utils/redux/logging-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
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

const enhancers = composeWithDevTools(applyMiddleware(thunk))
// const enhancers = composeWithDevTools(applyMiddleware(thunk, loggingMiddleware))
export const store = createStore(rootReducer, initialState, enhancers)

export default store
