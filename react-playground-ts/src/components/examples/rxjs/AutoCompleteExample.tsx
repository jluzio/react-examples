import React from 'react'
import { Card, Input, Form, List, Row, Col } from 'antd'
import { BehaviorSubject, from, Subscription } from 'rxjs'
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  filter,
  scan
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const { Item } = Form

interface Props {}
interface State {
  term: string
  names: any[]
  terms: string[]
}

class AutocompleteExample extends React.Component<Props, State> {
  termInput$!: BehaviorSubject<string>

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
    this.termInput$ = new BehaviorSubject<string>(term)

    this.termInput$.subscribe(v => {
      this.setState({
        term: v
      })
    })

    const throttledTermInput$ = this.termInput$.pipe(
      debounceTime(350),
      map(v => v),
      filter(v => v.length >= 2 || v.length === 0),
      distinctUntilChanged()
    )

    const termsSubscription = throttledTermInput$
      .pipe(scan<string, string[]>((all, curr) => [...all, curr], []))
      .subscribe(values => {
        this.setState({
          terms: values
        })
      })
    const namesSubscription = throttledTermInput$
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
    this.termInput$.unsubscribe()
    this.subscriptions$.forEach(s => s.unsubscribe())
  }

  searchGithub = (term: string) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${term}`)

  render() {
    const { term, names, terms } = this.state
    return (
      <Card title="test">
        <Item>
          <Input
            value={term}
            onChange={e => this.termInput$.next(e.target.value)}
          />
        </Item>
        <Row>
          <Col span={12}>
            <List
              bordered
              size="small"
              pagination={{ pageSize: 10, hideOnSinglePage: true }}
              dataSource={names}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col span={12}>
            <List
              bordered
              size="small"
              pagination={{ pageSize: 10, hideOnSinglePage: true }}
              dataSource={terms}
              renderItem={item => <List.Item>{item || 'null'}</List.Item>}
            />
          </Col>
        </Row>
      </Card>
    )
  }
}

export default AutocompleteExample
