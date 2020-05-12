/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Space } from 'antd'
import GoogleAuth from 'components/common/GoogleAuth'

const GoogleAuthExample: React.FC = () => (
  <Card title="OAuth2">
    <GoogleAuth />
  </Card>
)

export default GoogleAuthExample
