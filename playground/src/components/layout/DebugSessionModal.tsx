/* eslint-disable react/sort-comp */
import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Modal, Form, Input } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import historyService from 'services/history-service'

interface State {
  debugSession: string
}
type OwnProps = {
  visible: boolean
  onVisibleChange: (visible: boolean) => void
}
type Props = RouteComponentProps<{}> & OwnProps

class DebugSessionModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const { location } = props
    this.state = {
      debugSession: historyService.getDebugSessionParam(location) ?? ''
    }
  }

  visibleChange = (visible: boolean) => {
    const { onVisibleChange } = this.props
    onVisibleChange(visible)
  }

  close = () => {
    this.visibleChange(false)
  }

  confirm = () => {
    const { history, location } = this.props
    const { debugSession } = this.state
    this.close()
    const newLocation = historyService.getLocationWithDebugSession(
      location,
      debugSession
    )
    history.push(newLocation)
    window.location.reload()
  }

  setDebugSession(debugSession: string) {
    this.setState({
      debugSession
    })
  }

  handleEnterKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.confirm()
    }
  }

  render() {
    const { debugSession } = this.state
    const { visible } = this.props
    const debugSessionModal: Partial<ModalProps> = {
      visible,
      onOk: this.confirm,
      onCancel: this.close
    }
    return (
      <Modal
        title="Debug Session"
        visible={debugSessionModal.visible}
        onOk={debugSessionModal.onOk}
        onCancel={debugSessionModal.onCancel}
      >
        <Form>
          <Form.Item label="id">
            <Input
              autoFocus
              value={debugSession}
              onChange={e => this.setDebugSession(e.target.value)}
              onKeyDown={this.handleEnterKey}
            />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default withRouter(DebugSessionModal)
