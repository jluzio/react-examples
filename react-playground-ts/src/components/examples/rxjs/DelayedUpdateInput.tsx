/* eslint-disable no-unused-expressions */
import React from 'react'
import { PartialObserver, Subject, timer, Subscription } from 'rxjs'
import { debounce } from 'rxjs/operators'
import { Input } from 'antd'

interface Props {
  value: string
  observer: PartialObserver<string>
}
interface State {
  value: string
  subject?: Subject<string>
  subscription?: Subscription
}

class DelayedUpdateInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { value } = this.props
    this.state = {
      value
    }
  }

  componentDidMount() {
    this.registerObservers()
  }

  componentWillUnmount() {
    this.unregisterObservers()
  }

  onChange = (v: string) => {
    const { subject } = this.state
    this.setState({
      value: v
    })
    subject?.next(v)
  }

  registerObservers() {
    const { observer } = this.props

    const subject = new Subject<string>()
    const subscription = subject
      .pipe(debounce(() => timer(1000)))
      .subscribe(observer)

    this.setState({
      subject,
      subscription
    })
  }

  unregisterObservers() {
    const { subject, subscription } = this.state
    subject?.unsubscribe()
    subscription?.unsubscribe()
  }

  render() {
    const { value } = this.state
    return (
      <Input
        type="text"
        value={value}
        onChange={e => this.onChange(e.target.value)}
      />
    )
  }
}

export default DelayedUpdateInput
