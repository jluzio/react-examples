import React from 'react'
import { Button, Descriptions } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { RootState, actions } from './store'
import {
  getStreamByMatchProps,
  getStreamStatus,
  getStreamStatusErrors
} from './store/selectors'
import { RouteIdParams } from './routes'
import StatusErrors from './StatusErrors'
import VideoPlayer from './VideoPlayer'
import streamPlayerService from './services/stream-player-service'

type RouteProps = RouteComponentProps<RouteIdParams>

const mapStateToProps = (state: RootState, props: RouteProps) => ({
  stream: getStreamByMatchProps(state, props),
  streamStatus: getStreamStatus(state)
})
const mapDispatchToProps = {
  getStream: actions.getStream
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteProps
type State = {}

class StreamShow extends React.Component<Props, State> {
  state: State = {}

  componentDidMount() {
    const { stream, getStream, match } = this.props
    if (!stream) {
      getStream(_.parseInt(match.params.id))
    }
  }

  render() {
    const { history, stream } = this.props
    if (!stream) {
      return <StatusErrors errorsSelector={getStreamStatusErrors} />
    }
    return (
      <>
        <VideoPlayer url={streamPlayerService.streamUrl(stream)} />
        <Descriptions title={stream.title}>
          <Descriptions.Item label="Description">
            {stream.description}
          </Descriptions.Item>
        </Descriptions>
        <Button onClick={() => history.goBack()}>Back</Button>
      </>
    )
  }
}

export default connector(withRouter(StreamShow))
