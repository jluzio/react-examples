/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import flvjs from 'flv.js'

type Props = {
  url: string
}

class VideoPlayer extends React.Component<Props> {
  videoRef = React.createRef<HTMLVideoElement>()

  player!: flvjs.Player

  componentDidMount() {
    const { url } = this.props
    if (flvjs.isSupported()) {
      const videoElement = this.videoRef.current!
      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url
      })
      flvPlayer.attachMediaElement(videoElement)
      flvPlayer.load()
      // flvPlayer.play()

      this.player = flvPlayer
    }
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  render() {
    return <video ref={this.videoRef} style={{ width: '100%' }} controls />
  }
}

export default VideoPlayer
