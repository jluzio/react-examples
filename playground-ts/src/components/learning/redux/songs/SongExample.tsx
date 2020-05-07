import React from 'react'
import { Card, Row, Col } from 'antd'
import { Provider } from 'react-redux'
import SongList from './SongList'
import store from './store'
import SongDetail from './SongDetail'

const SongExample: React.FC = () => (
  <Card title="Songs">
    <Provider store={store}>
      <Row gutter={16}>
        <Col span={12}>
          <SongList />
        </Col>
        <Col span={12}>
          <SongDetail />
        </Col>
      </Row>
    </Provider>
  </Card>
)

export default SongExample
