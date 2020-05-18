/* eslint-disable class-methods-use-this */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { List, Card, Avatar, Button } from 'antd'
import { CameraOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { RouteComponentProps, withRouter } from 'react-router'
import { LocationDescriptorObject } from 'history'
import { RootState, actions } from './store'
import selectors from './store/selectors'
import { Stream } from './data/models'
import * as routes from './utils/routes'

const mapStateToProps = (state: RootState) => ({
  streams: selectors.getStreamsList(state),
  userId: selectors.getUserId(state)
})
const mapDispatchToProps = {
  onListStreams: actions.listStreams
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & RouteComponentProps
class StreamList extends React.Component<Props> {
  async componentDidMount() {
    const { onListStreams } = this.props
    onListStreams()
  }

  toLocation = (toContextLocation: LocationDescriptorObject) => {
    const { location: currentLocation } = this.props
    return routes.getLocationPreservingSearch(
      toContextLocation,
      currentLocation
    )
  }

  getPath = (contextPath: string) => {
    const { location: currentLocation } = this.props
    return routes.getPath(contextPath, currentLocation)
  }

  renderStreamActions(stream: Stream) {
    const { userId } = this.props
    if (stream.userId === userId) {
      return [
        <Link to={this.toLocation({ pathname: `/streams/edit/${stream.id}` })}>
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
        </Link>,
        <Link
          to={this.toLocation({ pathname: `/streams/delete/${stream.id}` })}
        >
          <Button type="primary" icon={<DeleteOutlined />}>
            Delete
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
          title={stream.title}
          description={stream.description}
        />
      </List.Item>
    )
  }

  render() {
    const { streams } = this.props
    return (
      <Card title="Streams">
        <List
          dataSource={streams}
          renderItem={stream => this.renderStream(stream)}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    )
  }
}

export default connector(withRouter(StreamList))
