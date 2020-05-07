import React from 'react'
import { Descriptions, Card } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from './store'

const mapStateToProps = (state: RootState) => ({
  song: state.selectedSong
})
const mapDispatchToProps = {}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps
const SongDetail: React.FC<Props> = (props: Props) => {
  const { song } = props
  return (
    <Card title="Song">
      {song && (
        <Descriptions title={song.title}>
          <Descriptions.Item label="Duration">
            {song.duration}
          </Descriptions.Item>
        </Descriptions>
      )}
    </Card>
  )
}

export default connector(SongDetail)
