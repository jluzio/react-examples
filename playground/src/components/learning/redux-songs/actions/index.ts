/* eslint-disable import/prefer-default-export */
import { Song } from '../models'

export const selectSong = (song: Song) => ({
  type: 'SELECT_SONG',
  payload: song
})

export type SongActions = ReturnType<typeof selectSong>
