import { combineReducers, createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'utils/redux/logging-middleware'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todoReducer } from './todo/reducers'
import { filterReducer } from './filter/reducers'
import { counterReducer } from './counter/reducers'
import { userReducer } from './user/reducers'

export * from './todo/actions'
export * from './filter/actions'
export * from './counter/actions'
export * from './user/actions'

export const rootReducer = combineReducers({
  visibilityFilter: filterReducer,
  todos: todoReducer,
  counter: counterReducer,
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

const initialState: Partial<RootState> = {
  todos: [
    { text: 'Todo-1', completed: false },
    { text: 'Todo-2', completed: false },
    { text: 'Todo-3', completed: true }
  ]
}

const enhancers = composeWithDevTools(applyMiddleware(thunk))
// const enhancers = composeWithDevTools(applyMiddleware(thunk, loggingMiddleware))
export const store = createStore(rootReducer, initialState, enhancers)

export type AppDispatch = typeof store.dispatch

export default store
