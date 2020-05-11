import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loggingMiddleware from 'utils/redux/logging-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer, RootState } from './root'

export * from './root'

const initialState: RootState = {
  posts: [],
  users: []
}

const enhancers = composeWithDevTools(applyMiddleware(thunk))
// const enhancers = composeWithDevTools(applyMiddleware(thunk, loggingMiddleware))
export const store = createStore(rootReducer, initialState, enhancers)

export default store
