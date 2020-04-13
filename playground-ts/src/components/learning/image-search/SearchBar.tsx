import React from 'react'
import { Form, Input, Button, Card, Typography } from 'antd'
import { ImageSearchFilter } from './models'

const { Item } = Form
interface Props {
  onSubmit: (f: ImageSearchFilter) => void
}
interface State {
  filter: ImageSearchFilter
}

export default class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      filter: {
        searchText: ''
      }
    }
  }

  onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      filter: {
        searchText: e.target.value
      }
    })
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { onSubmit } = this.props
    const { filter } = this.state
    onSubmit(filter)
  }

  render() {
    const { filter } = this.state
    return (
      <Card>
        <Typography>Image Search</Typography>
        <Form layout="inline" onSubmitCapture={this.onSubmit}>
          <Item>
            <Input
              type="text"
              placeholder="text"
              value={filter.searchText}
              onChange={this.onFilterChange}
            />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Item>
        </Form>
      </Card>
    )
  }
}
