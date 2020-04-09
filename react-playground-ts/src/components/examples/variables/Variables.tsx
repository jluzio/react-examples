/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Form, Input, Button, Card } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

interface Props {
  usernameId: string
  passwordId: string
}

const Variables: React.FC<Props> = (props: Props) => {
  const buttonText = 'Log In'
  const { usernameId, passwordId } = props
  return (
    <Card title="Variables" className="example">
      <Form layout="inline">
        <Form.Item label="Username">
          <Input
            id={usernameId}
            prefix={<UserOutlined />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item label="Password">
          <Input
            id={passwordId}
            prefix={<LockOutlined />}
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
    </Card>
  )
}

export default Variables
