import React from 'react'
import { List, Card } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { RootState, selectSong } from './store'
import SongListItem from './SongListItem'

const mapStateToProps = (state: RootState) => ({
  songs: state.songs
})
const mapDispatchToProps = {
  onSelectSong: selectSong
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps
export const SongList: React.FC<Props> = (props: Props) => {
  const { songs, onSelectSong } = props
  return (
    <Card title="Songs">
      <List
        dataSource={songs}
        renderItem={item => (
          <SongListItem song={item} onSelectSong={onSelectSong} />
        )}
      />
    </Card>
  )
}

export default connector(SongList)
