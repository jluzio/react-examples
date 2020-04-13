/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { List } from 'antd'
import * as models from './models'

type Props = {
  video: models.Video
  onSelect: (video: models.Video) => void
}
type State = {}

class VideoListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    const { video, onSelect } = this.props
    const { thumbnails } = video.snippet
    const thumbnail = thumbnails.medium ?? thumbnails.default
    return (
      <List.Item
        className="video-list-item"
        onClick={() => onSelect(video)}
        onKeyDown={() => onSelect(video)}
      >
        <img src={thumbnail.url} alt={video.snippet.description} />
        <p>{video.snippet.title}</p>
      </List.Item>
    )
  }
}

export default VideoListItem
