import { combineReducers, createStore } from 'redux'
import { selectedSongReducer, songsReducer } from './reducers'

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

export * from './actions'

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export default store
