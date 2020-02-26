import React from 'react'
import { ImageResults } from './models'
import ImageCard from './ImageCard'
import './ImageList.scss'

interface Props {
  images: ImageResults
}

export default class ImageList extends React.Component<Props> {
  render() {
    const { images } = this.props
    const imageList = images.map(image => (
      <ImageCard key={image.id} image={image} />
    ))
    return <div className="image-list">{imageList}</div>
  }
}
