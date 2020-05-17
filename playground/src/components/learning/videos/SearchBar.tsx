import React from 'react'
import { Form, Input } from 'antd'
import { Subject, Subscribable } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

const { Item } = Form

type Props = {
  term?: string
  onSubmit: (term: string) => void
}
type State = {
  term: string
}

class SearchBar extends React.Component<Props, State> {
  term$ = new Subject<string>()

  subscriptions: Subscribable<any>[] = []

  constructor(props: Props) {
    super(props)
    this.state = {
      term: props.term ?? ''
    }
  }

  componentDidMount() {
    const { onSubmit } = this.props

    const throttledTerm$ = this.term$.pipe(
      debounceTime(100),
      distinctUntilChanged()
    )
    throttledTerm$.subscribe({
      next(value) {
        onSubmit(value)
      }
    })
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { term } = this.state
    this.term$.next(term)
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: e.target.value
    })
  }

  render() {
    const { term } = this.state
    return (
      <Form onSubmitCapture={this.handleSubmit}>
        <Item>
          <Input
            value={term}
            onChange={this.handleInputChange}
            placeholder="Search..."
          />
        </Item>
      </Form>
    )
  }
}

export default SearchBar
