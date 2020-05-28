import React from 'react'
import { List } from 'antd'
import * as models from './models'
import VideoListItem from './VideoListItem'

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

  videoId = (video: models.Video) =>
    video.id.videoId ? `vid-${video.id.videoId}` : `cid-${video.id.channelId}`

  render() {
    const { videos, onSelect } = this.props
    return (
      <div className="video-list">
        <List itemLayout="vertical">
          {videos.map(video => (
            <VideoListItem
              key={this.videoId(video)}
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
