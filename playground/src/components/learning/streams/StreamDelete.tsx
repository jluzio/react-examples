import React from 'react'
import { Form, Button, Modal } from 'antd'
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
import { RouteIdParams, locations } from './routes'
import StatusErrors from './StatusErrors'

type RouteProps = RouteComponentProps<RouteIdParams>

const mapStateToProps = (state: RootState, props: RouteProps) => ({
  stream: getStreamByMatchProps(state, props),
  streamStatus: getStreamStatus(state)
})
const mapDispatchToProps = {
  getStream: actions.getStream,
  deleteStream: actions.deleteStream,
  resetStreamRootStatus: actions.resetStreamRootStatus
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteProps
type State = {
  onActionComplete?: () => void
  actionSuccessful: boolean
  modalVisible: boolean
  modalConfirmLoading: boolean
}

class StreamDelete extends React.Component<Props, State> {
  state: State = {
    actionSuccessful: false,
    modalVisible: true,
    modalConfirmLoading: false
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

  onDeleteStream = () => {
    const { resetStreamRootStatus, deleteStream, stream } = this.props
    if (stream) {
      this.setState({
        modalConfirmLoading: true,
        onActionComplete: () =>
          this.setState({ modalConfirmLoading: false, modalVisible: false })
      })
      resetStreamRootStatus()
      deleteStream(stream)
    }
  }

  render() {
    const { history, stream } = this.props
    const { modalVisible, modalConfirmLoading } = this.state
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
        <Modal
          title="Delete"
          visible={modalVisible}
          confirmLoading={modalConfirmLoading}
          onOk={this.onDeleteStream}
          okType="danger"
          okText="Yes"
          onCancel={() => history.goBack()}
          cancelText="No"
        >
          Delete stream {stream?.title}?
        </Modal>
      </Form>
    )
  }
}

export default connector(withRouter(StreamDelete))
