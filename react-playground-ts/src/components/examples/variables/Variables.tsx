/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Typography, Form, Icon, Input, Button } from 'antd'

interface Props {
  usernameId: string
  passwordId: string
}

const Variables: React.FC<Props> = (props: Props) => {
  const buttonText = 'Log In'
  const { usernameId, passwordId } = props
  return (
    <div className="example">
      <Typography.Title level={4}>Variables</Typography.Title>
      <Form layout="inline">
        <Form.Item label="Username">
          <Input
            id={usernameId}
            prefix={<Icon type="user" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            id={passwordId}
            prefix={<Icon type="lock" />}
            placeholder="Password"
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {buttonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Variables
