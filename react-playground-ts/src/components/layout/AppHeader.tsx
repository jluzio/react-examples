import React from 'react'
import { Row, Col } from 'antd'
import AppMenu from './AppMenu'

const AppHeader: React.FC = () => {
  return (
    <Row justify="start">
      <Col span={24}>
        <AppMenu />
      </Col>
    </Row>
  )
}

export default AppHeader
