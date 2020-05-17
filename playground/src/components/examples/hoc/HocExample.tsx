import React from 'react'
import { Form } from 'antd'
import SearchInput from './SearchInput'

interface Props {}
interface State {
  term: string
}

class HocExample extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onTermChange = (term: string) => {
    this.setState({
      term
    })
  }

  render() {
    const { term } = this.state
    return (
      <Form.Item label="Logged Search Term">
        <SearchInput term={term} onTermChange={this.onTermChange} />
      </Form.Item>
    )
  }
}

export default HocExample
