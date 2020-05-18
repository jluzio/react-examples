/* eslint-disable class-methods-use-this */
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { List, Descriptions } from 'antd'
import { RootState, actions } from './store'
import { Stream } from './models'

const mapStateToProps = (state: RootState) => ({
  streams: state.streams
})
const mapDispatchToProps = {
  onListStreams: actions.listStreams
}
const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps
class StreamList extends React.Component<Props> {
  async componentDidMount() {
    const { onListStreams } = this.props
    onListStreams()
  }

  renderStream(stream: Stream) {
    return (
      <List.Item key={stream.id}>
        <Descriptions title={stream.title}>
          <Descriptions.Item label="Description">
            {stream.description}
          </Descriptions.Item>
          <Descriptions.Item label="Id">{stream.id}</Descriptions.Item>
        </Descriptions>
      </List.Item>
    )
  }

  render() {
    const { streams } = this.props
    return (
      <List
        dataSource={streams}
        renderItem={stream => this.renderStream(stream)}
        pagination={{ pageSize: 10 }}
      />
    )
  }
}

export default connector(StreamList)
