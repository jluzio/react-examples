import { combineReducers, createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'utils/redux/logging-middleware'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todoReducer } from './todo/reducers'
import { filterReducer } from './filter/reducers'
import { counterReducer } from './counter/reducers'
import { userReducer } from './user/reducers'

// action creators
export * from './todo/actions'
export * from './filter/actions'
export * from './counter/actions'
export * from './user/actions'

// selectors
export * from './selectors'

export const rootReducer = combineReducers({
  visibilityFilter: filterReducer,
  todos: todoReducer,
  counter: counterReducer,
  users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>

const initialState: Partial<RootState> = {
  todos: [
    { id: 1, title: 'Todo-1', completed: false },
    { id: 2, title: 'Todo-2', completed: false },
    { id: 3, title: 'Todo-3', completed: true }
  ]
}

const enhancers = composeWithDevTools(applyMiddleware(thunk))
// const enhancers = composeWithDevTools(applyMiddleware(thunk, loggingMiddleware))
export const store = createStore(rootReducer, initialState, enhancers)

export type AppDispatch = typeof store.dispatch

export default store
