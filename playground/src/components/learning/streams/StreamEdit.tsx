import React from 'react'
import { notifyFormValues } from 'components/debug/debug-notifications'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { Stream, StreamEditData } from './data/models'
import { RootState, actions } from './store'
import { getStreamByMatchProps, getStreamStatus } from './store/selectors'
import { RouteIdParams, locations } from './routes'
import StreamForm from './StreamForm'

type RouteProps = RouteComponentProps<RouteIdParams>

const mapStateToProps = (state: RootState, props: RouteProps) => ({
  stream: getStreamByMatchProps(state, props),
  streamStatus: getStreamStatus(state)
})
const mapDispatchToProps = {
  getStream: actions.getStream,
  updateStream: actions.updateStream,
  resetStreamRootStatus: actions.resetStreamRootStatus
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteProps
type State = {
  onActionComplete?: () => void
  actionSuccessful: boolean
}

class StreamEdit extends React.Component<Props, State> {
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

  componentDidMount() {
    const { stream, getStream, match } = this.props
    if (!stream) {
      getStream(_.parseInt(match.params.id))
    }
  }

  componentDidUpdate() {
    const { history } = this.props
    const { actionSuccessful } = this.state
    if (actionSuccessful) {
      history.push(locations.list())
    }
  }

  handleSubmit = (values: StreamEditData, onSubmitComplete: () => void) => {
    notifyFormValues(values)

    const { stream, updateStream, resetStreamRootStatus } = this.props
    const updatedStream: Stream = { ...stream!, ...values }

    resetStreamRootStatus()
    updateStream({ id: stream!.id, stream: values })
    this.setState({ onActionComplete: onSubmitComplete })
  }

  render() {
    const { stream } = this.props
    const streamEditData =
      stream && (_.pick(stream, 'title', 'description') as StreamEditData)
    return (
      <StreamForm initialValues={streamEditData} onSubmit={this.handleSubmit} />
    )
  }
}

export default connector(withRouter(StreamEdit))
