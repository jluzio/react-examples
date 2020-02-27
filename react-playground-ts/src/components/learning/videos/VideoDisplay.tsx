import React from 'react'
import { Row, Col, notification } from 'antd'
import YoutubeService from 'services/youtube-service'
import Log from 'utils/Log'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import * as models from './models'
import './video-display.scss'

type Props = {}
type State = {
  video?: models.Video
  videoList: models.VideoList
}

class VideoDisplay extends React.Component<Props, State> {
  service = YoutubeService

  constructor(props: Props) {
    super(props)
    this.state = {
      video: undefined,
      videoList: []
    }
  }

  handleSearchSubmit = (term: string) => {
    Log.log(term)
    this.service
      .search(term)
      .then(response => {
        this.setState({
          videoList: response.data.items
        })
      })
      .catch(err => {
        this.setState({
          videoList: []
        })
        notification.error({
          message: err.toString()
        })
      })
  }

  handleSelectVideo = (video: models.Video) => {
    this.setState({
      video
    })
  }

  render() {
    const { video, videoList: relatedVideos } = this.state
    return (
      <div className="video-display">
        <Row>
          <Col>
            <SearchBar onSubmit={this.handleSearchSubmit} />
          </Col>
        </Row>
        <Row>
          <Col span={16}>{video && <VideoDetail video={video} />}</Col>
          <Col span={8}>
            <VideoList
              videos={relatedVideos}
              onSelect={this.handleSelectVideo}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default VideoDisplay
