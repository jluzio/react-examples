import React from 'react'
import { Card, Input, Form, List, Row, Col } from 'antd'
import { BehaviorSubject, from, Subscription } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  filter
} from 'rxjs/operators'

const { Item } = Form

interface Props {}
interface State {
  term: string
  names: any[]
  terms: string[]
}

class AutocompleteExample extends React.Component<Props, State> {
  term$!: BehaviorSubject<string>

  subscriptions$: Subscription[] = []

  constructor(props: Props) {
    super(props)
    this.state = {
      term: '',
      names: [],
      terms: []
    }
  }

  componentDidMount() {
    const { term } = this.state
    this.term$ = new BehaviorSubject<string>(term)

    this.term$.subscribe(v => {
      this.setState({
        term: v
      })
    })

    const value$ = this.term$.pipe(
      debounceTime(350),
      map(v => v),
      filter(v => v.length >= 2 || v.length === 0),
      distinctUntilChanged()
    )
    const termsSubscription = value$.subscribe(v => {
      const { terms } = this.state
      this.setState({
        terms: [...terms, v]
      })
    })
    const namesSubscription = value$
      .pipe(
        switchMap(value =>
          value
            ? from(this.searchGithub(value))
            : from(Promise.resolve({ items: [] }))
        )
      )
      .subscribe((data: any) => {
        this.setState({
          names: data.items.map((v: any) => v.login)
        })
      })

    this.subscriptions$ = [namesSubscription, termsSubscription]
  }

  componentWillUnmount() {
    this.term$.unsubscribe()
    this.subscriptions$.forEach(s => s.unsubscribe())
  }

  searchGithub = (term: string) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${term}`)

  render() {
    const { term, names, terms } = this.state
    return (
      <Card title="test">
        <Item>
          <Input value={term} onChange={e => this.term$.next(e.target.value)} />
        </Item>
        <Row>
          <Col span={16}>
            <List
              dataSource={names}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col span={8}>
            <List
              dataSource={terms}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </Card>
    )
  }
}

export default AutocompleteExample
