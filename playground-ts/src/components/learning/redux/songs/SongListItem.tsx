import React from 'react'
import { List, Button } from 'antd'
import { Song } from './models'

type SongListItemProps = {
  song: Song
  onSelectSong: (song: Song) => void
}
export const SongListItem: React.FC<SongListItemProps> = (
  props: SongListItemProps
) => {
  const { song, onSelectSong } = props
  return (
    <List.Item
      key={song.title}
      actions={[
        <Button type="primary" onClick={() => onSelectSong(song)}>
          Select
        </Button>
      ]}
    >
      {song.title}
    </List.Item>
  )
}

export default SongListItem
