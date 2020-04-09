import React from 'react'
import { Row, Col } from 'antd'
import moment from 'moment'

const AppFooter: React.FC = () => {
  const datetimeIso = moment().toISOString()
  return (
    <Row justify="end">
      <Col span={4}>App@{datetimeIso}</Col>
    </Row>
  )
}

export default AppFooter
