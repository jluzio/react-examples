import React from 'react'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { Stream, StreamCreateData } from './data/models'
import { RootState, actions } from './store'
import { getStreamStatus } from './store/selectors'
import { RouteIdParams, locations } from './routes'
import StreamForm from './StreamForm'

type RouteProps = RouteComponentProps<RouteIdParams>

const mapStateToProps = (state: RootState, props: RouteProps) => ({
  streamStatus: getStreamStatus(state)
})
const mapDispatchToProps = {
  createStream: actions.createStream,
  resetStreamRootStatus: actions.resetStreamRootStatus
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteProps
type State = {
  onActionComplete?: () => void
  actionSuccessful: boolean
}

const initialValues: Stream = {
  description: '',
  title: '',
  id: 0,
  userId: ''
}

class StreamCreate extends React.Component<Props, State> {
  state: State = {
    actionSuccessful: false
  }

  static getDerivedStateFromProps(
    props: Props,
    state: State
  ): Partial<State> | null {
    const { streamStatus } = props
    const { onActionComplete } = state
    if (onActionComplete != null && !streamStatus.pending) {
      onActionComplete()
      return {
        onActionComplete: undefined,
        actionSuccessful: streamStatus.errors.length === 0
      }
    }
    return null
  }

  componentDidUpdate() {
    const { history } = this.props
    const { actionSuccessful } = this.state
    if (actionSuccessful) {
      history.push(locations.list())
    }
  }

  handleSubmit = (values: Stream, onSubmitComplete: () => void) => {
    notifyFormValues(values)

    const { createStream, resetStreamRootStatus } = this.props
    resetStreamRootStatus()
    createStream(values)
    this.setState({ onActionComplete: onSubmitComplete })
  }

  render() {
    return (
      <StreamForm initialValues={initialValues} onSubmit={this.handleSubmit} />
    )
  }
}

export default connector(withRouter(StreamCreate))
