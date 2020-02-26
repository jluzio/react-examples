/* eslint-disable no-unused-expressions */
import React from 'react'
import { JsonPlaceholderPhoto } from './models'
import './ImageList.scss'

interface Props {
  image: JsonPlaceholderPhoto
}
interface State {
  gridSpan: number
}

export default class ImageCard extends React.Component<Props, State> {
  imageRef: React.RefObject<HTMLImageElement>

  constructor(props: Props) {
    super(props)
    this.imageRef = React.createRef()
    this.state = {
      gridSpan: 1
    }
  }

  componentDidMount() {
    this.imageRef.current?.addEventListener('load', this.setGridSpan)
  }

  setGridSpan = () => {
    const span = Math.ceil((this.imageRef.current?.clientHeight ?? 0) / 150)
    this.setState({
      gridSpan: span
    })
  }

  render() {
    const { image } = this.props
    const { thumbnailUrl, title } = image
    const { gridSpan } = this.state
    return (
      <div style={{ gridRowEnd: `span ${gridSpan}` }}>
        <img ref={this.imageRef} src={thumbnailUrl} alt={title} />
      </div>
    )
  }
}
