/* eslint-disable no-unused-vars */
import React from 'react'
import { Space } from 'antd'
import GoogleAuthButton from 'components/common/GoogleAuthButton'
import GoogleAuthInfo from 'components/common/GoogleAuthInfo'

const GoogleAuth: React.FC = () => (
  <Space direction="horizontal">
    <GoogleAuthInfo />
    <GoogleAuthButton />
  </Space>
)

export default GoogleAuth
