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
        pagination={{ pageSize: 10, hideOnSinglePage: true }}
        renderItem={item => (
          <Item key={item.thumbnailUrl}>
            <img src={item.thumbnailUrl} alt={item.title} />
          </Item>
        )}
      />
    )
  }
}
