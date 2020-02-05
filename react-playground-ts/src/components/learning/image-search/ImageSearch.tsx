import React from 'react'
import { Card } from 'antd'
import ImageList from './ImageList'
import SearchBar from './SearchBar'
import { ImageResults, ImageSearchFilter } from './models'

type Props = {}
interface State {
  results: ImageResults
}

export default class ImageSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      results: [
        {
          url:
            'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
      ]
    }
  }

  onSearchBarSubmit = (f: ImageSearchFilter) => {
    console.log(`searching: ${f.searchText}`)
  }

  render() {
    const { results } = this.state
    return (
      <Card title="Image Search" className="learning">
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <ImageList images={results} />
      </Card>
    )
  }
}
