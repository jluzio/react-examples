import React from 'react'
import YoutubeService from 'services/youtube-service'
import * as models from './models'

type Props = {
  video: models.Video
}
type State = {}

class VideoDetail extends React.Component<Props, State> {
  service = YoutubeService

  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    const { video } = this.props
    const videoUrl = this.service.embeddedVideoUrl(video)
    return (
      <div className="video-detail">
        <iframe
          width="600"
          height="400"
          src={videoUrl}
          title={video.snippet.title}
        />
        <p>{video.snippet.title}</p>
        <p>{video.snippet.description}</p>
      </div>
    )
  }
}

export default VideoDetail
