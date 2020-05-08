import { combineReducers, createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'utils/redux/logging-middleware'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todoReducer } from './todo/reducers'
import { filterReducer } from './filter/reducers'
import { counterReducer } from './counter/reducers'

export * from './todo/actions'
export * from './filter/actions'

export const rootReducer = combineReducers({
  visibilityFilter: filterReducer,
  todos: todoReducer,
  counter: counterReducer
})

export type RootState = ReturnType<typeof rootReducer>

const initialState: Partial<RootState> = {
  todos: [
    { text: 'Todo-1', completed: false },
    { text: 'Todo-2', completed: false },
    { text: 'Todo-3', completed: true }
  ]
}

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, loggingMiddleware))
)

export type AppDispatch = typeof store.dispatch

export default store
