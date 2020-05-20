import React from 'react'
import { Form, Button } from 'antd'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import _ from 'lodash'
import { defaultFormLayout } from './data/constants'
import { RootState, actions } from './store'
import {
  getStreamByMatchProps,
  getStreamStatus,
  getStreamStatusErrors
} from './store/selectors'
import { RouteIdParams } from './routes'
import StatusErrors from './StatusErrors'

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
    return (
      <Form
        labelCol={defaultFormLayout.form?.labelCol}
        wrapperCol={defaultFormLayout.form?.wrapperCol}
      >
        <Form.Item label="Title">{stream?.title}</Form.Item>
        <Form.Item label="Description">{stream?.description}</Form.Item>
        <Form.Item
          wrapperCol={defaultFormLayout.formActionsItemProps?.wrapperCol}
        >
          <Button onClick={() => history.goBack()}>Back</Button>
        </Form.Item>
        <StatusErrors errorsSelector={getStreamStatusErrors} />
      </Form>
    )
  }
}

export default connector(withRouter(StreamShow))
