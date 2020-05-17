import React from 'react'
import { List } from 'antd'
import * as models from './models'
import VideoListItem from './VideoListItem'

const { Item } = List

type Props = {
  videos: models.VideoList
  onSelect: (video: models.Video) => void
}
type State = {}

class VideoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    const { videos, onSelect } = this.props
    return (
      <div className="video-list">
        <List itemLayout="vertical">
          {videos.map(video => (
            <VideoListItem
              key={video.id.videoId}
              video={video}
              onSelect={v => onSelect(v)}
            />
          ))}
        </List>
      </div>
    )
  }
}

export default VideoList
