/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { List, Row, Col, Descriptions } from 'antd'
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
        <Row>
          <Col span={16}>
            <img src={thumbnail.url} alt={video.snippet.description} />
          </Col>
          <Col span={8}>
            <Descriptions title={video.snippet.title}>
              <Descriptions.Item>{video.snippet.description}</Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </List.Item>
    )
  }
}

export default VideoListItem
