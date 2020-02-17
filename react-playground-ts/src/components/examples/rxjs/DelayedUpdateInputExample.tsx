import React from 'react'
import { PartialObserver } from 'rxjs'
import DelayedUpdateInput from './DelayedUpdateInput'

interface Props {}
interface State {
  value: string
  error?: any
}

class DelayedUpdateInputExample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  valueObserver(): PartialObserver<string> {
    const vm = this
    return {
      next(v) {
        vm.setState({
          value: v,
          error: null
        })
      },
      error(err) {
        vm.setState({
          error: err.toString()
        })
      }
    }
  }

  render() {
    const { value, error } = this.state
    return (
      <div>
        <p>value: {value}</p>
        <p>error: {error}</p>
        <DelayedUpdateInput value={value} observer={this.valueObserver()} />
      </div>
    )
  }
}

export default DelayedUpdateInputExample
