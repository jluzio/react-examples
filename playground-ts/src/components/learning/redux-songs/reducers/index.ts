import { Song } from '../models'
import { SongActions } from '../actions'

export const songsReducer = () => {
  return [
    {
      title: `Don't stop me now`,
      duration: '2:10'
    },
    {
      title: `I want it all`,
      duration: '4:10'
    },
    {
      title: `God nose I've got to breakfreeee`,
      duration: '3:20'
    }
  ] as Song[]
}

export const selectedSongReducer = (
  song: Song | null = null,
  action: SongActions
) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload
  }
  return song
}
