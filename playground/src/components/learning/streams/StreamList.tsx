/* eslint-disable class-methods-use-this */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { List, Card, Avatar, Button, Result } from 'antd'
import {
  CameraOutlined,
  DeleteOutlined,
  EditOutlined,
  FormOutlined
} from '@ant-design/icons'
import { RouteComponentProps, withRouter } from 'react-router'
import { LocationDescriptorObject } from 'history'
import { RootState, actions, AppDispatch } from './store'
import selectors from './store/selectors'
import { Stream } from './data/models'
import { locations } from './routes'
import StatusErrors from './StatusErrors'

const mapStateToProps = (state: RootState) => ({
  streams: selectors.getStreamsList(state),
  userId: selectors.getUserId(state)
})
const mapDispatchToProps = {
  onListStreams: actions.listStreams,
  onResetStreamStatus: actions.resetStreamStatus
}
// demonstration on how to map multiple actions on a single handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapDispatchToPropsUsingDispatch = (dispatch: AppDispatch) => ({
  onListStreams: () => {
    dispatch(actions.resetStreamStatus({ rootOnly: true }))
    dispatch(actions.listStreams())
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteComponentProps
class StreamList extends React.Component<Props> {
  async componentDidMount() {
    this.listStreams()
  }

  listStreams() {
    const { onListStreams, onResetStreamStatus } = this.props
    onResetStreamStatus({ rootOnly: true })
    onListStreams()
  }

  renderStreamActions(stream: Stream) {
    const { userId } = this.props
    if (userId && stream.userId === userId) {
      return [
        <Link to={locations.edit(stream.id)}>
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
        </Link>,
        <Link to={locations.delete(stream.id)}>
          <Button type="primary" danger icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Link>
      ]
    }
    return []
  }

  renderListActions() {
    const { userId } = this.props
    if (userId) {
      return [
        <Link to={locations.create()}>
          <Button type="primary" icon={<FormOutlined />}>
            Create
          </Button>
        </Link>
      ]
    }
    return []
  }

  renderStream(stream: Stream) {
    return (
      <List.Item key={stream.id} actions={this.renderStreamActions(stream)}>
        <List.Item.Meta
          avatar={<Avatar icon={<CameraOutlined />} />}
          title={<Link to={locations.show(stream.id)}>{stream.title}</Link>}
          description={stream.description}
        />
      </List.Item>
    )
  }

  render() {
    const { streams } = this.props
    return (
      <Card title="Streams" actions={this.renderListActions()}>
        <List
          dataSource={streams}
          renderItem={stream => this.renderStream(stream)}
          pagination={{ pageSize: 10 }}
        />
        <StatusErrors
          errorsSelector={selectors.getStreamStatusErrors}
          onRetry={() => this.listStreams()}
        />
      </Card>
    )
  }
}

export default connector(withRouter(StreamList))
