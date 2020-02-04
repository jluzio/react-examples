import React from 'react'
import { List } from 'antd'
import { ImageResults } from './models'

const { Item } = List

interface Props {
  images: ImageResults
}

export default class ImageList extends React.Component<Props> {
  render() {
    const { images } = this.props
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={images}
        renderItem={item => (
          <Item key={item.url}>
            <img src={item.url} alt="search result" />
          </Item>
        )}
      />
    )
  }
}
